(()=>{var Bh=0,ec=1,kh=2;var Dr=1,zh=2,Ws=3,Bi=0,en=1,nn=2,ns=0,ki=1,yi=2,nc=3,ic=4,Gh=5;var is=100,Vh=101,Hh=102,Wh=103,Xh=104,qh=200,Yh=201,$h=202,Zh=203,sc=204,rc=205,Jh=206,Kh=207,jh=208,Qh=209,tu=210,eu=211,nu=212,iu=213,su=214,Oa=0,Ba=1,ka=2,Ls=3,za=4,Ga=5,Va=6,Ha=7,ac=0,ru=1,au=2,Qn=0,oc=1,lc=2,cc=3,Ur=4,hc=5,uc=6,dc=7;var fc=300,ss=301,Xs=302,xo=303,_o=304,Wa=1e3,Zn=1001,Xa=1002,Ve=1003,ou=1004;var Fr=1005;var pn=1006,vo=1007;var Mi=1008;var vn=1009,pc=1010,mc=1011,qs=1012,yo=1013,kn=1014,Ln=1015,zn=1016,Mo=1017,So=1018,rs=1020,gc=35902,xc=35899,_c=1021,vc=1022,Gn=1023,mi=1026,Si=1027,Ys=1028,bo=1029,zi=1030,To=1031;var wo=1033,Or=33776,Br=33777,kr=33778,zr=33779,Eo=35840,Ao=35841,Co=35842,Ro=35843,Io=36196,Po=37492,Lo=37496,No=37488,Do=37489,Gr=37490,Uo=37491,Fo=37808,Oo=37809,Bo=37810,ko=37811,zo=37812,Go=37813,Vo=37814,Ho=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,$o=37820,Zo=37821,Jo=36492,Ko=36494,jo=36495,Qo=36283,tl=36284,Vr=36285,el=36286;var cr=2300,qa=2301,Da=2302,Yl=2303,$l=2400,Zl=2401,Jl=2402;var lu=3200;var nl=0,cu=1,bi="",tn="srgb",hr="srgb-linear",ur="linear",_e="srgb";var Ua=7680;var hu=519,uu=512,du=513,fu=514,yc=515,pu=516,mu=517,Mc=518,Sc=519,gu=35044;var bc="300 es",An=2e3,Ns=2001;function nf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xu(){let i=Ds("canvas");return i.style.display="block",i}var hh={},Us=null;function Tc(...i){let t="THREE."+i.shift();Us?Us("log",t,...i):console.log(t,...i)}function _u(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=_u(i);let t="THREE."+i.shift();if(Us)Us("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Yt(...i){i=_u(i);let t="THREE."+i.shift();if(Us)Us("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function lr(...i){let t=i.join(" ");t in hh||(hh[t]=!0,Wt(...i))}function vu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var yu={[Oa]:Oa,[ka]:Va,[za]:za,[Ls]:Ga,[Ba]:Ba,[Va]:ka,[Ha]:Ha,[Ga]:Ls},Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wl=Math.PI/180,Ya=180/Math.PI;function Hr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function ue(i,t,e){return Math.max(t,Math.min(e,i))}function rf(i,t){return(i%t+t)%t}function El(i,t,e){return(1-e)*i+e*t}function Mu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function af(i,t){if(t.constructor===Float32Array)return i;let e=wc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function of(i,t){if(t.constructor===Float32Array)return i;let e=wc(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var Ic=class Ic{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ic.prototype.isVector2=!0;var jt=Ic,Cn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],m=n[s+2],g=n[s+3],d=r[a+0],u=r[a+1],f=r[a+2],_=r[a+3];if(g!==_||l!==d||c!==u||m!==f){let x=l*d+c*u+m*f+g*_;x<0&&(d=-d,u=-u,f=-f,_=-_,x=-x);let p=1-o;if(x<.9995){let y=Math.acos(x),R=Math.sin(y);p=Math.sin(p*y)/R,o=Math.sin(o*y)/R,l=l*p+d*o,c=c*p+u*o,m=m*p+f*o,g=g*p+_*o}else{l=l*p+d*o,c=c*p+u*o,m=m*p+f*o,g=g*p+_*o;let y=1/Math.sqrt(l*l+c*c+m*m+g*g);l*=y,c*=y,m*=y,g*=y}}t[e]=l,t[e+1]=c,t[e+2]=m,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],m=n[s+3],g=r[a],d=r[a+1],u=r[a+2],f=r[a+3];return t[e]=o*f+m*g+l*u-c*d,t[e+1]=l*f+m*d+c*g-o*u,t[e+2]=c*f+m*u+o*d-l*g,t[e+3]=m*f-o*g-l*d-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),m=o(s/2),g=o(r/2),d=l(n/2),u=l(s/2),f=l(r/2);switch(a){case"XYZ":this._x=d*m*g+c*u*f,this._y=c*u*g-d*m*f,this._z=c*m*f+d*u*g,this._w=c*m*g-d*u*f;break;case"YXZ":this._x=d*m*g+c*u*f,this._y=c*u*g-d*m*f,this._z=c*m*f-d*u*g,this._w=c*m*g+d*u*f;break;case"ZXY":this._x=d*m*g-c*u*f,this._y=c*u*g+d*m*f,this._z=c*m*f+d*u*g,this._w=c*m*g-d*u*f;break;case"ZYX":this._x=d*m*g-c*u*f,this._y=c*u*g+d*m*f,this._z=c*m*f-d*u*g,this._w=c*m*g+d*u*f;break;case"YZX":this._x=d*m*g+c*u*f,this._y=c*u*g+d*m*f,this._z=c*m*f-d*u*g,this._w=c*m*g-d*u*f;break;case"XZY":this._x=d*m*g-c*u*f,this._y=c*u*g-d*m*f,this._z=c*m*f+d*u*g,this._w=c*m*g+d*u*f;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],m=e[6],g=e[10],d=n+o+g;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(m-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>g){let u=2*Math.sqrt(1+n-o-g);this._w=(m-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>g){let u=2*Math.sqrt(1+o-n-g);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+m)/u}else{let u=2*Math.sqrt(1+g-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+m)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,m=e._w;return this._x=n*m+a*o+s*c-r*l,this._y=s*m+a*l+r*o-n*c,this._z=r*m+a*c+n*l-s*o,this._w=a*m-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),m=Math.sin(c);l=Math.sin(l*c)/m,e=Math.sin(e*c)/m,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Pc=class Pc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),m=2*(o*e-r*s),g=2*(r*n-a*e);return this.x=e+l*c+a*g-o*m,this.y=n+l*m+o*c-r*g,this.z=s+l*g+r*m-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Al.copy(this).projectOnVector(t),this.sub(Al)}reflect(t){return this.sub(Al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Pc.prototype.isVector3=!0;var H=Pc,Al=new H,uh=new Cn,Lc=class Lc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let m=this.elements;return m[0]=t,m[1]=s,m[2]=o,m[3]=e,m[4]=r,m[5]=l,m[6]=n,m[7]=a,m[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],m=n[4],g=n[7],d=n[2],u=n[5],f=n[8],_=s[0],x=s[3],p=s[6],y=s[1],R=s[4],E=s[7],P=s[2],C=s[5],v=s[8];return r[0]=a*_+o*y+l*P,r[3]=a*x+o*R+l*C,r[6]=a*p+o*E+l*v,r[1]=c*_+m*y+g*P,r[4]=c*x+m*R+g*C,r[7]=c*p+m*E+g*v,r[2]=d*_+u*y+f*P,r[5]=d*x+u*R+f*C,r[8]=d*p+u*E+f*v,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],m=t[8];return e*a*m-e*o*c-n*r*m+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],m=t[8],g=m*a-o*c,d=o*l-m*r,u=c*r-a*l,f=e*g+n*d+s*u;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/f;return t[0]=g*_,t[1]=(s*c-m*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(m*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=u*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Cl.makeScale(t,e)),this}rotate(t){return lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Cl.makeRotation(-t)),this}translate(t,e){return lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Cl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Lc.prototype.isMatrix3=!0;var $t=Lc,Cl=new $t,dh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lf(){let i={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_e&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_e&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[hr]:{primaries:t,whitePoint:n,transfer:ur,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:dh,fromXYZ:fh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}}),i}var he=lf();function pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gs,$a=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{gs===void 0&&(gs=Ds("canvas")),gs.width=t.width,gs.height=t.height;let s=gs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=gs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ds("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cf=0,Fs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Hr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Rl(s[a].image)):r.push(Rl(s[a]))}else r=Rl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Rl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?$a.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var hf=0,Il=new H,un=class i extends Jn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Zn,s=Zn,r=pn,a=Mi,o=Gn,l=vn,c=i.DEFAULT_ANISOTROPY,m=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hf++}),this.uuid=Hr(),this.name="",this.source=new Fs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Il).x}get height(){return this.source.getSize(Il).y}get depth(){return this.source.getSize(Il).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wa:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case Xa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wa:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case Xa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=fc;un.DEFAULT_ANISOTROPY=1;var Nc=class Nc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],m=l[4],g=l[8],d=l[1],u=l[5],f=l[9],_=l[2],x=l[6],p=l[10];if(Math.abs(m-d)<.01&&Math.abs(g-_)<.01&&Math.abs(f-x)<.01){if(Math.abs(m+d)<.1&&Math.abs(g+_)<.1&&Math.abs(f+x)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(c+1)/2,E=(u+1)/2,P=(p+1)/2,C=(m+d)/4,v=(g+_)/4,M=(f+x)/4;return R>E&&R>P?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=C/n,r=v/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=C/s,r=M/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=v/r,s=M/r),this.set(n,s,r,e),this}let y=Math.sqrt((x-f)*(x-f)+(g-_)*(g-_)+(d-m)*(d-m));return Math.abs(y)<.001&&(y=1),this.x=(x-f)/y,this.y=(g-_)/y,this.z=(d-m)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Nc.prototype.isVector4=!0;var Ie=Nc,Za=class extends Jn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new un({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Fs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends Za{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},dr=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ja=class extends un{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var go=class go{constructor(t,e,n,s,r,a,o,l,c,m,g,d,u,f,_,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,m,g,d,u,f,_,x)}set(t,e,n,s,r,a,o,l,c,m,g,d,u,f,_,x){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=m,p[10]=g,p[14]=d,p[3]=u,p[7]=f,p[11]=_,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new go().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),a=1/xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),m=Math.cos(r),g=Math.sin(r);if(t.order==="XYZ"){let d=a*m,u=a*g,f=o*m,_=o*g;e[0]=l*m,e[4]=-l*g,e[8]=c,e[1]=u+f*c,e[5]=d-_*c,e[9]=-o*l,e[2]=_-d*c,e[6]=f+u*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*m,u=l*g,f=c*m,_=c*g;e[0]=d+_*o,e[4]=f*o-u,e[8]=a*c,e[1]=a*g,e[5]=a*m,e[9]=-o,e[2]=u*o-f,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*m,u=l*g,f=c*m,_=c*g;e[0]=d-_*o,e[4]=-a*g,e[8]=f+u*o,e[1]=u+f*o,e[5]=a*m,e[9]=_-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*m,u=a*g,f=o*m,_=o*g;e[0]=l*m,e[4]=f*c-u,e[8]=d*c+_,e[1]=l*g,e[5]=_*c+d,e[9]=u*c-f,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,u=a*c,f=o*l,_=o*c;e[0]=l*m,e[4]=_-d*g,e[8]=f*g+u,e[1]=g,e[5]=a*m,e[9]=-o*m,e[2]=-c*m,e[6]=u*g+f,e[10]=d-_*g}else if(t.order==="XZY"){let d=a*l,u=a*c,f=o*l,_=o*c;e[0]=l*m,e[4]=-g,e[8]=c*m,e[1]=d*g+_,e[5]=a*m,e[9]=u*g-f,e[2]=f*g-u,e[6]=o*m,e[10]=_*g+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uf,t,df)}lookAt(t,e,n){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ai.crossVectors(n,yn),Ai.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ai.crossVectors(n,yn)),Ai.normalize(),ua.crossVectors(yn,Ai),s[0]=Ai.x,s[4]=ua.x,s[8]=yn.x,s[1]=Ai.y,s[5]=ua.y,s[9]=yn.y,s[2]=Ai.z,s[6]=ua.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],m=n[1],g=n[5],d=n[9],u=n[13],f=n[2],_=n[6],x=n[10],p=n[14],y=n[3],R=n[7],E=n[11],P=n[15],C=s[0],v=s[4],M=s[8],B=s[12],N=s[1],O=s[5],U=s[9],V=s[13],L=s[2],Y=s[6],K=s[10],$=s[14],dt=s[3],Q=s[7],ot=s[11],ct=s[15];return r[0]=a*C+o*N+l*L+c*dt,r[4]=a*v+o*O+l*Y+c*Q,r[8]=a*M+o*U+l*K+c*ot,r[12]=a*B+o*V+l*$+c*ct,r[1]=m*C+g*N+d*L+u*dt,r[5]=m*v+g*O+d*Y+u*Q,r[9]=m*M+g*U+d*K+u*ot,r[13]=m*B+g*V+d*$+u*ct,r[2]=f*C+_*N+x*L+p*dt,r[6]=f*v+_*O+x*Y+p*Q,r[10]=f*M+_*U+x*K+p*ot,r[14]=f*B+_*V+x*$+p*ct,r[3]=y*C+R*N+E*L+P*dt,r[7]=y*v+R*O+E*Y+P*Q,r[11]=y*M+R*U+E*K+P*ot,r[15]=y*B+R*V+E*$+P*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],m=t[2],g=t[6],d=t[10],u=t[14],f=t[3],_=t[7],x=t[11],p=t[15],y=l*u-c*d,R=o*u-c*g,E=o*d-l*g,P=a*u-c*m,C=a*d-l*m,v=a*g-o*m;return e*(_*y-x*R+p*E)-n*(f*y-x*P+p*C)+s*(f*R-_*P+p*v)-r*(f*E-_*C+x*v)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],m=t[10];return e*(a*m-o*c)-n*(r*m-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],m=t[8],g=t[9],d=t[10],u=t[11],f=t[12],_=t[13],x=t[14],p=t[15],y=e*o-n*a,R=e*l-s*a,E=e*c-r*a,P=n*l-s*o,C=n*c-r*o,v=s*c-r*l,M=m*_-g*f,B=m*x-d*f,N=m*p-u*f,O=g*x-d*_,U=g*p-u*_,V=d*p-u*x,L=y*V-R*U+E*O+P*N-C*B+v*M;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/L;return t[0]=(o*V-l*U+c*O)*Y,t[1]=(s*U-n*V-r*O)*Y,t[2]=(_*v-x*C+p*P)*Y,t[3]=(d*C-g*v-u*P)*Y,t[4]=(l*N-a*V-c*B)*Y,t[5]=(e*V-s*N+r*B)*Y,t[6]=(x*E-f*v-p*R)*Y,t[7]=(m*v-d*E+u*R)*Y,t[8]=(a*U-o*N+c*M)*Y,t[9]=(n*N-e*U-r*M)*Y,t[10]=(f*C-_*E+p*y)*Y,t[11]=(g*E-m*C-u*y)*Y,t[12]=(o*B-a*O-l*M)*Y,t[13]=(e*O-n*B+s*M)*Y,t[14]=(_*R-f*P-x*y)*Y,t[15]=(m*P-g*R+d*y)*Y,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,m=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,m*o+n,m*l-s*a,0,c*l-s*o,m*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,m=a+a,g=o+o,d=r*c,u=r*m,f=r*g,_=a*m,x=a*g,p=o*g,y=l*c,R=l*m,E=l*g,P=n.x,C=n.y,v=n.z;return s[0]=(1-(_+p))*P,s[1]=(u+E)*P,s[2]=(f-R)*P,s[3]=0,s[4]=(u-E)*C,s[5]=(1-(d+p))*C,s[6]=(x+y)*C,s[7]=0,s[8]=(f+R)*v,s[9]=(x-y)*v,s[10]=(1-(d+_))*v,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=xs.set(s[0],s[1],s[2]).length(),o=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);let c=1/a,m=1/o,g=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=m,Un.elements[5]*=m,Un.elements[6]*=m,Un.elements[8]*=g,Un.elements[9]*=g,Un.elements[10]*=g,e.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=An,l=!1){let c=this.elements,m=2*r/(e-t),g=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s),f,_;if(l)f=r/(a-r),_=a*r/(a-r);else if(o===An)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ns)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=m,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=g,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=An,l=!1){let c=this.elements,m=2/(e-t),g=2/(n-s),d=-(e+t)/(e-t),u=-(n+s)/(n-s),f,_;if(l)f=1/(a-r),_=a/(a-r);else if(o===An)f=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ns)f=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=m,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=g,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};go.prototype.isMatrix4=!0;var pe=go,xs=new H,Un=new pe,uf=new H(0,0,0),df=new H(1,1,1),Ai=new H,ua=new H,yn=new H,ph=new pe,mh=new Cn,Kn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],m=s[9],g=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-m,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin(ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-g,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ue(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-m,c),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-m,u),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var fr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ff=0,gh=new H,_s=new Cn,ci=new pe,da=new H,nr=new H,pf=new H,mf=new Cn,xh=new H(1,0,0),_h=new H(0,1,0),vh=new H(0,0,1),yh={type:"added"},gf={type:"removed"},vs={type:"childadded",child:null},Pl={type:"childremoved",child:null},qe=class i extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new Kn,n=new Cn,s=new H(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new $t}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.multiply(_s),this}rotateOnWorldAxis(t,e){return _s.setFromAxisAngle(t,e),this.quaternion.premultiply(_s),this}rotateX(t){return this.rotateOnAxis(xh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(vh,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?da.copy(t):da.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(nr,da,this.up):ci.lookAt(da,nr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(ci),this.quaternion.premultiply(_s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yh),vs.child=t,this.dispatchEvent(vs),vs.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gf),Pl.child=t,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yh),vs.child=t,this.dispatchEvent(vs),vs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,pf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,mf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,m=l.length;c<m;c++){let g=l[c];r(t.shapes,g)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),m=a(t.images),g=a(t.shapes),d=a(t.skeletons),u=a(t.animations),f=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let l=[];for(let c in o){let m=o[c];delete m.metadata,l.push(m)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qe.DEFAULT_UP=new H(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=class extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},xf={type:"move"},Os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let x=e.getJointPose(_,n),p=this._getHandJoint(c,_);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let m=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],d=m.position.distanceTo(g.position),u=.02,f=.005;c.inputState.pinching&&d>u+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=u-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new cn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},fa={h:0,s:0,l:0};function Ll(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=he.workingColorSpace){if(t=rf(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ll(a,r,t+1/3),this.g=Ll(a,r,t),this.b=Ll(a,r,t-1/3)}return he.colorSpaceToWorking(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=Su[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return he.workingToColorSpace(on.copy(this),t),Math.round(ue(on.r*255,0,255))*65536+Math.round(ue(on.g*255,0,255))*256+Math.round(ue(on.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(on.copy(this),e);let n=on.r,s=on.g,r=on.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,m=(o+a)/2;if(o===a)l=0,c=0;else{let g=a-o;switch(c=m<=.5?g/(a+o):g/(2-a-o),a){case n:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-n)/g+2;break;case r:l=(n-s)/g+4;break}l/=6}return t.h=l,t.s=c,t.l=m,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=tn){he.workingToColorSpace(on.copy(this),t);let e=on.r,n=on.g,s=on.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(fa);let n=El(Ci.h,fa.h,e),s=El(Ci.s,fa.s,e),r=El(Ci.l,fa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Bt;Bt.NAMES=Su;var pr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mr=class extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new H,hi=new H,Nl=new H,ui=new H,ys=new H,Ms=new H,Mh=new H,Dl=new H,Ul=new H,Fl=new H,Ol=new Ie,Bl=new Ie,kl=new Ie,Li=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),hi.subVectors(n,e),Nl.subVectors(t,e);let a=Fn.dot(Fn),o=Fn.dot(hi),l=Fn.dot(Nl),c=hi.dot(hi),m=hi.dot(Nl),g=a*c-o*o;if(g===0)return r.set(0,0,0),null;let d=1/g,u=(c*l-o*m)*d,f=(a*m-o*l)*d;return r.set(1-u-f,f,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ol.setScalar(0),Bl.setScalar(0),kl.setScalar(0),Ol.fromBufferAttribute(t,e),Bl.fromBufferAttribute(t,n),kl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ol,r.x),a.addScaledVector(Bl,r.y),a.addScaledVector(kl,r.z),a}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),hi.subVectors(t,e),Fn.cross(hi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Fn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ys.subVectors(s,n),Ms.subVectors(r,n),Dl.subVectors(t,n);let l=ys.dot(Dl),c=Ms.dot(Dl);if(l<=0&&c<=0)return e.copy(n);Ul.subVectors(t,s);let m=ys.dot(Ul),g=Ms.dot(Ul);if(m>=0&&g<=m)return e.copy(s);let d=l*g-m*c;if(d<=0&&l>=0&&m<=0&&l-m>0)return a=l/(l-m),e.copy(n).addScaledVector(ys,a);Fl.subVectors(t,r);let u=ys.dot(Fl),f=Ms.dot(Fl);if(f>=0&&u<=f)return e.copy(r);let _=u*c-l*f;if(_<=0&&c>=0&&f<=0)return o=c/(c-f),e.copy(n).addScaledVector(Ms,o);let x=m*f-u*g;if(x<=0&&g-m>=0&&u-f>=0)return Mh.subVectors(r,s),o=(g-m)/(g-m+(u-f)),e.copy(s).addScaledVector(Mh,o);let p=1/(x+_+d);return a=_*p,o=d*p,e.copy(n).addScaledVector(ys,a).addScaledVector(Ms,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},jn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,On):On.fromBufferAttribute(r,a),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pa.copy(n.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),ma.subVectors(this.max,ir),Ss.subVectors(t.a,ir),bs.subVectors(t.b,ir),Ts.subVectors(t.c,ir),Ri.subVectors(bs,Ss),Ii.subVectors(Ts,bs),Ji.subVectors(Ss,Ts);let e=[0,-Ri.z,Ri.y,0,-Ii.z,Ii.y,0,-Ji.z,Ji.y,Ri.z,0,-Ri.x,Ii.z,0,-Ii.x,Ji.z,0,-Ji.x,-Ri.y,Ri.x,0,-Ii.y,Ii.x,0,-Ji.y,Ji.x,0];return!zl(e,Ss,bs,Ts,ma)||(e=[1,0,0,0,1,0,0,0,1],!zl(e,Ss,bs,Ts,ma))?!1:(ga.crossVectors(Ri,Ii),e=[ga.x,ga.y,ga.z],zl(e,Ss,bs,Ts,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},di=[new H,new H,new H,new H,new H,new H,new H,new H],On=new H,pa=new jn,Ss=new H,bs=new H,Ts=new H,Ri=new H,Ii=new H,Ji=new H,ir=new H,ma=new H,ga=new H,Ki=new H;function zl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ki.fromArray(i,r);let o=s.x*Math.abs(Ki.x)+s.y*Math.abs(Ki.y)+s.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),m=n.dot(Ki);if(Math.max(-Math.max(l,c,m),Math.min(l,c,m))>o)return!1}return!0}var Ge=new H,xa=new jt,_f=0,hn=class extends Jn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_f++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gu,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=t!==void 0?wc(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):af(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):of(t,this.array)}};var gr=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var xr=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var de=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},vf=new jn,sr=new H,Gl=new H,gi=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(Gl)),this.expandByPoint(sr.copy(t.center).sub(Gl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yf=0,En=new pe,Vl=new qe,ws=new H,Mn=new jn,rr=new jn,je=new H,Ye=class i extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nf(t)?xr:gr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return Vl.lookAt(t),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ws).negate(),this.translate(ws.x,ws.y,ws.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];rr.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(Mn.min,rr.min),Mn.expandByPoint(je),je.addVectors(Mn.max,rr.max),Mn.expandByPoint(je)):(Mn.expandByPoint(rr.min),Mn.expandByPoint(rr.max))}Mn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,m=o.count;c<m;c++)je.fromBufferAttribute(o,c),l&&(ws.fromBufferAttribute(t,c),je.add(ws)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let B=0;B<n.count;B++)o[B]=new H,l[B]=new H;let m=new H,g=new H,d=new H,u=new jt,f=new jt,_=new jt,x=new H,p=new H;function y(B,N,O){c[B]=c[N]=c[O]=1,m.fromBufferAttribute(n,B),g.fromBufferAttribute(n,N),d.fromBufferAttribute(n,O),u.fromBufferAttribute(r,B),f.fromBufferAttribute(r,N),_.fromBufferAttribute(r,O),g.sub(m),d.sub(m),f.sub(u),_.sub(u);let U=1/(f.x*_.y-_.x*f.y);isFinite(U)&&(x.copy(g).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(U),p.copy(d).multiplyScalar(f.x).addScaledVector(g,-_.x).multiplyScalar(U),o[B].add(x),o[N].add(x),o[O].add(x),l[B].add(p),l[N].add(p),l[O].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let B=0,N=R.length;B<N;++B){let O=R[B],U=O.start,V=O.count;for(let L=U,Y=U+V;L<Y;L+=3)y(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let E=new H,P=new H,C=new H,v=new H;function M(B){C.fromBufferAttribute(s,B),v.copy(C);let N=o[B];E.copy(N),E.sub(C.multiplyScalar(C.dot(N))).normalize(),P.crossVectors(v,N);let U=P.dot(l[B])<0?-1:1;a.setXYZW(B,E.x,E.y,E.z,U)}for(let B=0,N=n.count;B<N;++B)c[B]&&M(B);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,m=new H,g=new H;if(t)for(let d=0,u=t.count;d<u;d+=3){let f=t.getX(d+0),_=t.getX(d+1),x=t.getX(d+2);s.fromBufferAttribute(e,f),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,x),m.subVectors(a,r),g.subVectors(s,r),m.cross(g),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),o.add(m),l.add(m),c.add(m),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),m.subVectors(a,r),g.subVectors(s,r),m.cross(g),n.setXYZ(d+0,m.x,m.y,m.z),n.setXYZ(d+1,m.x,m.y,m.z),n.setXYZ(d+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,l){let c=o.array,m=o.itemSize,g=o.normalized,d=new c.constructor(l.length*m),u=0,f=0;for(let _=0,x=l.length;_<x;_++){o.isInterleavedBufferAttribute?u=l[_]*o.data.stride+o.offset:u=l[_]*m;for(let p=0;p<m;p++)d[f++]=c[u++]}return new hn(d,m,g)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let m=0,g=c.length;m<g;m++){let d=c[m],u=t(d,n);l.push(u)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],m=[];for(let g=0,d=c.length;g<d;g++){let u=c[g];m.push(u.toJSON(t.data))}m.length>0&&(s[l]=m,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let m=s[c];this.setAttribute(c,m.clone(e))}let r=t.morphAttributes;for(let c in r){let m=[],g=r[c];for(let d=0,u=g.length;d<u;d++)m.push(g[d].clone(e));this.morphAttributes[c]=m}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,m=a.length;c<m;c++){let g=a[c];this.addGroup(g.start,g.count,g.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Hl=new H,Mf=new H,Sf=new $t,Bn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Hl.subVectors(n,e).cross(Mf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Hl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Sf.getNormalMatrix(t),s=this.coplanarPoint(Hl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},bf=0,xi=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=ki,this.side=Bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sc,this.blendDst=rc,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var fi=new H,Wl=new H,_a=new H,va=new H,_r=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Wl.copy(t).add(e).multiplyScalar(.5),_a.copy(e).sub(t).normalize(),va.copy(this.origin).sub(Wl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_a),o=va.dot(this.direction),l=-va.dot(_a),c=va.lengthSq(),m=Math.abs(1-a*a),g,d,u,f;if(m>0)if(g=a*l-o,d=a*o-l,f=r*m,g>=0)if(d>=-f)if(d<=f){let _=1/m;g*=_,d*=_,u=g*(g+a*d+2*o)+d*(a*g+d+2*l)+c}else d=r,g=Math.max(0,-(a*d+o)),u=-g*g+d*(d+2*l)+c;else d=-r,g=Math.max(0,-(a*d+o)),u=-g*g+d*(d+2*l)+c;else d<=-f?(g=Math.max(0,-(-a*r+o)),d=g>0?-r:Math.min(Math.max(-r,-l),r),u=-g*g+d*(d+2*l)+c):d<=f?(g=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(g=Math.max(0,-(a*r+o)),d=g>0?r:Math.min(Math.max(-r,-l),r),u=-g*g+d*(d+2*l)+c);else d=a>0?-r:r,g=Math.max(0,-(a*d+o)),u=-g*g+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Wl).addScaledVector(_a,d),u}intersectSphere(t,e){if(t.radius<0)return null;fi.subVectors(t.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),m>=0?(r=(t.min.y-d.y)*m,a=(t.max.y-d.y)*m):(r=(t.max.y-d.y)*m,a=(t.min.y-d.y)*m),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(o=(t.min.z-d.z)*g,l=(t.max.z-d.z)*g):(o=(t.max.z-d.z)*g,l=(t.min.z-d.z)*g),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,m=o.z,g=t.x-a.x,d=t.y-a.y,u=t.z-a.z,f=e.x-a.x,_=e.y-a.y,x=e.z-a.z,p=n.x-a.x,y=n.y-a.y,R=n.z-a.z,E=Math.abs(l),P=Math.abs(c),C=Math.abs(m),v,M,B,N,O,U,V,L,Y,K,$,dt;if(E>=P&&E>=C?(B=l,U=g,Y=f,dt=p,l>=0?(v=c,M=m,N=d,O=u,V=_,L=x,K=y,$=R):(v=m,M=c,N=u,O=d,V=x,L=_,K=R,$=y)):P>=C?(B=c,U=d,Y=_,dt=y,c>=0?(v=m,M=l,N=u,O=g,V=x,L=f,K=R,$=p):(v=l,M=m,N=g,O=u,V=f,L=x,K=p,$=R)):(B=m,U=u,Y=x,dt=R,m>=0?(v=l,M=c,N=g,O=d,V=f,L=_,K=p,$=y):(v=c,M=l,N=d,O=g,V=_,L=f,K=y,$=p)),B===0)return null;let Q=v/B,ot=M/B,ct=1/B,Lt=N-Q*U,Xt=O-ot*U,it=V-Q*Y,bt=L-ot*Y,wt=K-Q*dt,Ft=$-ot*dt,gt=wt*bt-Ft*it,qt=Lt*Ft-Xt*wt,Se=it*Xt-bt*Lt;if(s){if(gt<0||qt<0||Se<0)return null}else if((gt<0||qt<0||Se<0)&&(gt>0||qt>0||Se>0))return null;let kt=gt+qt+Se;if(kt===0)return null;let ae=ct*(gt*U+qt*Y+Se*dt);return(kt>0?ae<0:ae>0)?null:this.at(ae/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class extends xi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Sh=new pe,ji=new _r,ya=new gi,bh=new H,Ma=new H,Sa=new H,ba=new H,Xl=new H,Ta=new H,Th=new H,wa=new H,Vt=class extends qe{constructor(t=new Ye,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let m=o[l],g=r[l];m!==0&&(Xl.fromBufferAttribute(g,t),a?Ta.addScaledVector(Xl,m):Ta.addScaledVector(Xl.sub(e),m))}e.add(Ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(r),ji.copy(t.ray).recast(t.near),!(ya.containsPoint(ji.origin)===!1&&(ji.intersectSphere(ya,bh)===null||ji.origin.distanceToSquared(bh)>(t.far-t.near)**2))&&(Sh.copy(r).invert(),ji.copy(t.ray).applyMatrix4(Sh),!(n.boundingBox!==null&&ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ji)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,m=r.attributes.uv1,g=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let x=d[f],p=a[x.materialIndex],y=Math.max(x.start,u.start),R=Math.min(o.count,Math.min(x.start+x.count,u.start+u.count));for(let E=y,P=R;E<P;E+=3){let C=o.getX(E),v=o.getX(E+1),M=o.getX(E+2);s=Ea(this,p,t,n,c,m,g,C,v,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let f=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let x=f,p=_;x<p;x+=3){let y=o.getX(x),R=o.getX(x+1),E=o.getX(x+2);s=Ea(this,a,t,n,c,m,g,y,R,E),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,_=d.length;f<_;f++){let x=d[f],p=a[x.materialIndex],y=Math.max(x.start,u.start),R=Math.min(l.count,Math.min(x.start+x.count,u.start+u.count));for(let E=y,P=R;E<P;E+=3){let C=E,v=E+1,M=E+2;s=Ea(this,p,t,n,c,m,g,C,v,M),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,e.push(s))}}else{let f=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let x=f,p=_;x<p;x+=3){let y=x,R=x+1,E=x+2;s=Ea(this,a,t,n,c,m,g,y,R,E),s&&(s.faceIndex=Math.floor(x/3),e.push(s))}}}};function Tf(i,t,e,n,s,r,a,o){let l;if(t.side===en?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Bi,o),l===null)return null;wa.copy(o),wa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wa);return c<e.near||c>e.far?null:{distance:c,point:wa.clone(),object:i}}function Ea(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ma),i.getVertexPosition(l,Sa),i.getVertexPosition(c,ba);let m=Tf(i,t,e,n,Ma,Sa,ba,Th);if(m){let g=new H;Li.getBarycoord(Th,Ma,Sa,ba,g),s&&(m.uv=Li.getInterpolatedAttribute(s,o,l,c,g,new jt)),r&&(m.uv1=Li.getInterpolatedAttribute(r,o,l,c,g,new jt)),a&&(m.normal=Li.getInterpolatedAttribute(a,o,l,c,g,new H),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new H,materialIndex:0};Li.getNormal(Ma,Sa,ba,d.normal),m.face=d,m.barycoord=g}return m}var ts=class extends un{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ve,m=Ve,g,d){super(null,a,o,l,c,m,s,r,g,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class extends hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Es=new pe,wh=new pe,Aa=[],Eh=new jn,wf=new pe,ar=new Vt,or=new gi,Rn=class extends Vt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,wf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),Eh.copy(t.boundingBox).applyMatrix4(Es),this.boundingBox.union(Eh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Es),or.copy(t.boundingSphere).applyMatrix4(Es),this.boundingSphere.union(or)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),or.copy(this.boundingSphere),or.applyMatrix4(n),t.ray.intersectsSphere(or)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Es),wh.multiplyMatrices(n,Es),ar.matrixWorld=wh,ar.raycast(t,Aa);for(let a=0,o=Aa.length;a<o;a++){let l=Aa[a];l.instanceId=r,l.object=this,e.push(l)}Aa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new vr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ts(new Float32Array(s*this.count),s,this.count,Ys,Ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qi=new gi,Ef=new jt(.5,.5),Ca=new H,Ni=class{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=An,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],m=r[4],g=r[5],d=r[6],u=r[7],f=r[8],_=r[9],x=r[10],p=r[11],y=r[12],R=r[13],E=r[14],P=r[15];if(s[0].setComponents(c-a,u-m,p-f,P-y).normalize(),s[1].setComponents(c+a,u+m,p+f,P+y).normalize(),s[2].setComponents(c+o,u+g,p+_,P+R).normalize(),s[3].setComponents(c-o,u-g,p-_,P-R).normalize(),n)s[4].setComponents(l,d,x,E).normalize(),s[5].setComponents(c-l,u-d,p-x,P-E).normalize();else if(s[4].setComponents(c-l,u-d,p-x,P-E).normalize(),e===An)s[5].setComponents(c+l,u+d,p+x,P+E).normalize();else if(e===Ns)s[5].setComponents(l,d,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){Qi.center.set(0,0,0);let e=Ef.distanceTo(t.center);return Qi.radius=.7071067811865476+e,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ca.x=s.normal.x>0?t.max.x:t.min.x,Ca.y=s.normal.y>0?t.max.y:t.min.y,Ca.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ah=new pe,Ka=class i{constructor(){this.coordinateSystem=An,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Ah.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ni),n[s].setFromProjectionMatrix(Ah,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ni),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var ja=class extends xi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ch=new pe,Kl=new _r,Ra=new gi,Ia=new H,Bs=class extends qe{constructor(t=new Ye,e=new ja){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(s),Ra.radius+=r,t.ray.intersectsSphere(Ra)===!1)return;Ch.copy(s).invert(),Kl.copy(t.ray).applyMatrix4(Ch);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,g=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let f=d,_=u;f<_;f++){let x=c.getX(f);Ia.fromBufferAttribute(g,x),Rh(Ia,x,l,s,t,e,this)}}else{let d=Math.max(0,a.start),u=Math.min(g.count,a.start+a.count);for(let f=d,_=u;f<_;f++)Ia.fromBufferAttribute(g,f),Rh(Ia,f,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Rh(i,t,e,n,s,r,a){let o=Kl.distanceSqToPoint(i);if(o<e){let l=new H;Kl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var yr=class extends un{constructor(t=[],e=ss,n,s,r,a,o,l,c,m){super(t,e,n,s,r,a,o,l,c,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Mr=class extends un{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends un{constructor(t,e,n=kn,s,r,a,o=Ve,l=Ve,c,m=mi,g=1){if(m!==mi&&m!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:g};super(d,s,r,a,o,l,m,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Sr=class extends _i{constructor(t,e=kn,n=ss,s,r,a=Ve,o=Ve,l,c=mi){let m={width:t,height:t,depth:1},g=[m,m,m,m,m,m];super(t,t,e,n,s,r,a,o,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},br=class extends un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vi=class i extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],m=[],g=[],d=0,u=0;f("z","y","x",-1,-1,n,e,t,a,r,0),f("z","y","x",1,-1,n,e,-t,a,r,1),f("x","z","y",1,1,t,n,e,s,a,2),f("x","z","y",1,-1,t,n,-e,s,a,3),f("x","y","z",1,-1,t,e,n,s,r,4),f("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(m,3)),this.setAttribute("uv",new de(g,2));function f(_,x,p,y,R,E,P,C,v,M,B){let N=E/v,O=P/M,U=E/2,V=P/2,L=C/2,Y=v+1,K=M+1,$=0,dt=0,Q=new H;for(let ot=0;ot<K;ot++){let ct=ot*O-V;for(let Lt=0;Lt<Y;Lt++){let Xt=Lt*N-U;Q[_]=Xt*y,Q[x]=ct*R,Q[p]=L,c.push(Q.x,Q.y,Q.z),Q[_]=0,Q[x]=0,Q[p]=C>0?1:-1,m.push(Q.x,Q.y,Q.z),g.push(Lt/v),g.push(1-ot/M),$+=1}}for(let ot=0;ot<M;ot++)for(let ct=0;ct<v;ct++){let Lt=d+ct+Y*ot,Xt=d+ct+Y*(ot+1),it=d+(ct+1)+Y*(ot+1),bt=d+(ct+1)+Y*ot;l.push(Lt,Xt,bt),l.push(Xt,it,bt),dt+=6}o.addGroup(u,dt,B),u+=dt,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Tr=class i extends Ye{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],m=e/2,g=Math.PI/2*t,d=e,u=2*g+d,f=n*2+r,_=s+1,x=new H,p=new H;for(let y=0;y<=f;y++){let R=0,E=0,P=0,C=0;if(y<=n){let B=y/n,N=B*Math.PI/2;E=-m-t*Math.cos(N),P=t*Math.sin(N),C=-t*Math.cos(N),R=B*g}else if(y<=n+r){let B=(y-n)/r;E=-m+B*e,P=t,C=0,R=g+B*d}else{let B=(y-n-r)/n,N=B*Math.PI/2;E=m+t*Math.sin(N),P=t*Math.cos(N),C=t*Math.sin(N),R=g+d+B*g}let v=Math.max(0,Math.min(1,R/u)),M=0;y===0?M=.5/s:y===f&&(M=-.5/s);for(let B=0;B<=s;B++){let N=B/s,O=N*Math.PI*2,U=Math.sin(O),V=Math.cos(O);p.x=-P*V,p.y=E,p.z=P*U,o.push(p.x,p.y,p.z),x.set(-P*V,C,P*U),x.normalize(),l.push(x.x,x.y,x.z),c.push(N+M,v)}if(y>0){let B=(y-1)*_;for(let N=0;N<s;N++){let O=B+N,U=B+N+1,V=y*_+N,L=y*_+N+1;a.push(O,U,V),a.push(U,L,V)}}}this.setIndex(a),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},wr=class i extends Ye{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new H,m=new jt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let g=0,d=3;g<=e;g++,d+=3){let u=n+g/e*s;c.x=t*Math.cos(u),c.y=t*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),m.x=(a[d]/t+1)/2,m.y=(a[d+1]/t+1)/2,l.push(m.x,m.y)}for(let g=1;g<=e;g++)r.push(g,g+1,0);this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(o,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},In=class i extends Ye{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let m=[],g=[],d=[],u=[],f=0,_=[],x=n/2,p=0;y(),a===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(m),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(u,2));function y(){let E=new H,P=new H,C=0,v=(e-t)/n;for(let M=0;M<=r;M++){let B=[],N=M/r,O=N*(e-t)+t;for(let U=0;U<=s;U++){let V=U/s,L=V*l+o,Y=Math.sin(L),K=Math.cos(L);P.x=O*Y,P.y=-N*n+x,P.z=O*K,g.push(P.x,P.y,P.z),E.set(Y,v,K).normalize(),d.push(E.x,E.y,E.z),u.push(V,1-N),B.push(f++)}_.push(B)}for(let M=0;M<s;M++)for(let B=0;B<r;B++){let N=_[B][M],O=_[B+1][M],U=_[B+1][M+1],V=_[B][M+1];(t>0||B!==0)&&(m.push(N,O,V),C+=3),(e>0||B!==r-1)&&(m.push(O,U,V),C+=3)}c.addGroup(p,C,0),p+=C}function R(E){let P=f,C=new jt,v=new H,M=0,B=E===!0?t:e,N=E===!0?1:-1;for(let U=1;U<=s;U++)g.push(0,x*N,0),d.push(0,N,0),u.push(.5,.5),f++;let O=f;for(let U=0;U<=s;U++){let L=U/s*l+o,Y=Math.cos(L),K=Math.sin(L);v.x=B*K,v.y=x*N,v.z=B*Y,g.push(v.x,v.y,v.z),d.push(0,N,0),C.x=Y*.5+.5,C.y=K*.5*N+.5,u.push(C.x,C.y),f++}for(let U=0;U<s;U++){let V=P+U,L=O+U;E===!0?m.push(L,L+1,V):m.push(L+1,L,V),M+=3}c.addGroup(p,M,E===!0?1:2),p+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ks=class i extends In{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var zs=class i extends Ye{constructor(t=[new jt(0,-.5),new jt(.5,0),new jt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ue(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],m=1/e,g=new H,d=new jt,u=new H,f=new H,_=new H,x=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:x=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,u.x=p*1,u.y=-x,u.z=p*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case t.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:x=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,u.x=p*1,u.y=-x,u.z=p*0,f.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(f)}for(let y=0;y<=e;y++){let R=n+y*m*s,E=Math.sin(R),P=Math.cos(R);for(let C=0;C<=t.length-1;C++){g.x=t[C].x*E,g.y=t[C].y,g.z=t[C].x*P,a.push(g.x,g.y,g.z),d.x=y/e,d.y=C/(t.length-1),o.push(d.x,d.y);let v=l[3*C+0]*E,M=l[3*C+1],B=l[3*C+0]*P;c.push(v,M,B)}}for(let y=0;y<e;y++)for(let R=0;R<t.length-1;R++){let E=R+y*t.length,P=E,C=E+t.length,v=E+t.length+1,M=E+1;r.push(P,C,M),r.push(v,M,C)}this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("uv",new de(o,2)),this.setAttribute("normal",new de(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var Di=class i extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,m=l+1,g=t/o,d=e/l,u=[],f=[],_=[],x=[];for(let p=0;p<m;p++){let y=p*d-a;for(let R=0;R<c;R++){let E=R*g-r;f.push(E,-y,0),_.push(0,0,1),x.push(R/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let R=y+c*p,E=y+c*(p+1),P=y+1+c*(p+1),C=y+1+c*p;u.push(R,E,C),u.push(E,P,C)}this.setIndex(u),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Er=class i extends Ye{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],m=[],g=t,d=(e-t)/s,u=new H,f=new jt;for(let _=0;_<=s;_++){for(let x=0;x<=n;x++){let p=r+x/n*a;u.x=g*Math.cos(p),u.y=g*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),f.x=(u.x/e+1)/2,f.y=(u.y/e+1)/2,m.push(f.x,f.y)}g+=d}for(let _=0;_<s;_++){let x=_*(n+1);for(let p=0;p<n;p++){let y=p+x,R=y,E=y+n+1,P=y+n+2,C=y+1;o.push(R,E,C),o.push(E,P,C)}}this.setIndex(o),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Pn=class i extends Ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,m=[],g=new H,d=new H,u=[],f=[],_=[],x=[];for(let p=0;p<=n;p++){let y=[],R=p/n,E=a+R*o,P=t*Math.cos(E),C=Math.sqrt(t*t-P*P),v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let M=0;M<=e;M++){let B=M/e,N=s+B*r;g.x=-C*Math.cos(N),g.y=P,g.z=C*Math.sin(N),f.push(g.x,g.y,g.z),d.copy(g).normalize(),_.push(d.x,d.y,d.z),x.push(B+v,1-R),y.push(c++)}m.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let R=m[p][y+1],E=m[p][y],P=m[p+1][y],C=m[p+1][y+1];(p!==0||a>0)&&u.push(R,E,C),(p!==n-1||l<Math.PI)&&u.push(E,P,C)}this.setIndex(u),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(_,3)),this.setAttribute("uv",new de(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ar=class i extends Ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],m=[],g=[],d=new H,u=new H,f=new H;for(let _=0;_<=n;_++){let x=a+_/n*o;for(let p=0;p<=s;p++){let y=p/s*r;u.x=(t+e*Math.cos(x))*Math.cos(y),u.y=(t+e*Math.cos(x))*Math.sin(y),u.z=e*Math.sin(x),c.push(u.x,u.y,u.z),d.x=t*Math.cos(y),d.y=t*Math.sin(y),f.subVectors(u,d).normalize(),m.push(f.x,f.y,f.z),g.push(p/s),g.push(_/n)}}for(let _=1;_<=n;_++)for(let x=1;x<=s;x++){let p=(s+1)*_+x-1,y=(s+1)*(_-1)+x-1,R=(s+1)*(_-1)+x,E=(s+1)*_+x;l.push(p,y,E),l.push(y,R,E)}this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(m,3)),this.setAttribute("uv",new de(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function as(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Ih(s))s.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Ih(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function dn(i){let t={};for(let e=0;e<i.length;e++){let n=as(i[e]);for(let s in n)t[s]=n[s]}return t}function Ih(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Af(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ec(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var bu={clone:as,merge:dn},Cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends xi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cf,this.fragmentShader=Rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=as(t.uniforms),this.uniformsGroups=Af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new jt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new H().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(s.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pe().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qa=class extends gn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var es=class extends xi{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Bt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var to=class extends xi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},eo=class extends xi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function As(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Pa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},no=class extends Ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zl:r=t,o=2*e-n;break;case Jl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zl:a=t,l=2*n-e;break;case Jl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,m=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*m,this._offsetNext=a*m}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,m=this._offsetPrev,g=this._offsetNext,d=this._weightPrev,u=this._weightNext,f=(n-e)/(s-e),_=f*f,x=_*f,p=-d*x+2*d*_-d*f,y=(1+d)*x+(-1.5-2*d)*_+(-.5+d)*f+1,R=(-1-u)*x+(1.5+u)*_+.5*f,E=u*x-u*_;for(let P=0;P!==o;++P)r[P]=p*a[m+P]+y*a[c+P]+R*a[l+P]+E*a[g+P];return r}},io=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,m=(n-e)/(s-e),g=1-m;for(let d=0;d!==o;++d)r[d]=a[c+d]*g+a[l+d]*m;return r}},so=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ro=class extends Ui{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,m=this.inTangents,g=this.outTangents;if(!m||!g){let f=(n-e)/(s-e),_=1-f;for(let x=0;x!==o;++x)r[x]=a[c+x]*_+a[l+x]*f;return r}let d=o*2,u=t-1;for(let f=0;f!==o;++f){let _=a[c+f],x=a[l+f],p=u*d+f*2,y=g[p],R=g[p+1],E=t*d+f*2,P=m[E],C=m[E+1],v=Pf(n,e,y,P,s);r[f]=Tu(v,_,R,C,x)}return r}};function Tu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function If(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Pf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Tu(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=If(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=As(e,this.TimeBufferType),this.values=As(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:As(t.times,Array),values:As(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Pa(t.settings)&&(n.settings={inTangents:As(t.settings.inTangents,Array),outTangents:As(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ro(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case cr:e=this.InterpolantFactoryMethodDiscrete;break;case qa:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break;case Yl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return qa;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return Yl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Pa(this.settings)&&(Ph(this.settings.inTangents,t),Ph(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Pa(this.settings)&&(Lh(this.settings.inTangents,t),Lh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Yt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&sf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Da,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],m=t[o+1];if(c!==m&&(o!==1||c!==t[0]))if(s)l=!0;else{let g=o*n,d=g-n,u=g+n;for(let f=0;f!==n;++f){let _=e[g+f];if(_!==e[d+f]||_!==e[u+f]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let g=o*n,d=a*n;for(let u=0;u!==n;++u)e[d+u]=e[g+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Pa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Ph(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Lh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=qa;var Fi=class extends bn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=cr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};ao.prototype.ValueTypeName="color";var oo=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};oo.prototype.ValueTypeName="number";var lo=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let m=c+o;c!==m;c+=4)Cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Cr=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new lo(this.times,this.values,this.getValueSize(),t)}};Cr.prototype.ValueTypeName="quaternion";Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends bn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=cr;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var co=class extends bn{constructor(t,e,n,s){super(t,e,n,s)}};co.prototype.ValueTypeName="vector";var Fa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Nh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Nh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Nh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ho=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(m){o++,r===!1&&s.onStart!==void 0&&s.onStart(m,a,o),r=!0},this.itemEnd=function(m){a++,s.onProgress!==void 0&&s.onProgress(m,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),l?l(m):m},this.setURLModifier=function(m){return l=m,this},this.addHandler=function(m,g){return c.push(m,g),this},this.removeHandler=function(m){let g=c.indexOf(m);return g!==-1&&c.splice(g,2),this},this.getHandler=function(m){for(let g=0,d=c.length;g<d;g+=2){let u=c[g],f=c[g+1];if(u.global&&(u.lastIndex=0),u.test(m))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wu=new ho,Gs=class{constructor(t){this.manager=t!==void 0?t:wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Gs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cs=new WeakMap,uo=class extends Gs{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Fa.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let g=Cs.get(a);g===void 0&&(g=[],Cs.set(a,g)),g.push({onLoad:e,onError:s})}return a}let o=Ds("img");function l(){m(),e&&e(this);let g=Cs.get(this)||[];for(let d=0;d<g.length;d++){let u=g[d];u.onLoad&&u.onLoad(this)}Cs.delete(this),r.manager.itemEnd(t)}function c(g){m(),s&&s(g),Fa.remove(`image:${t}`);let d=Cs.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onError&&f.onError(g)}Cs.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function m(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Fa.add(`image:${t}`,o),r.manager.itemStart(t),o.fetchPriority=this.priority,o.src=t,o}};var Rr=class extends Gs{constructor(t){super(t)}load(t,e,n,s){let r=new un,a=new uo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},Vs=class extends qe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ir=class extends Vs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ql=new pe,Dh=new H,Uh=new H,fo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ni,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dh),Uh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ql.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ql,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ns||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(ql)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},La=new H,Na=new Cn,$n=new H,Pr=class extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(La,Na,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(La,Na,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(La,Na,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Pi=new H,Fh=new jt,Oh=new jt,ln=class extends Pr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(wl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ya*2*Math.atan(Math.tan(wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-t/Pi.z)}getViewSize(t,e){return this.getViewBounds(t,Fh,Oh),e.subVectors(Oh,Fh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(wl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var jl=class extends fo{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},Lr=class extends Vs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},po=class extends Pr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=m*this.view.offsetY,l=o-m*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Nr=class extends Vs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Rs=-90,Is=1,Hs=class extends qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(Rs,Is,t,e);s.layers=this.layers,this.add(s);let r=new ln(Rs,Is,t,e);r.layers=this.layers,this.add(r);let a=new ln(Rs,Is,t,e);a.layers=this.layers,this.add(a);let o=new ln(Rs,Is,t,e);o.layers=this.layers,this.add(o);let l=new ln(Rs,Is,t,e);l.layers=this.layers,this.add(l);let c=new ln(Rs,Is,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ns)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,m]=this.children,g=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,m),t.setRenderTarget(g,d,u),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},mo=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Ac="\\[\\]\\.:\\/",Lf=new RegExp("["+Ac+"]","g"),Cc="[^"+Ac+"]",Nf="[^"+Ac.replace("\\.","")+"]",Df=/((?:WC+[\/:])*)/.source.replace("WC",Cc),Uf=/(WCOD+)?/.source.replace("WCOD",Nf),Ff=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),Of=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),Bf=new RegExp("^"+Df+Uf+Ff+Of+"$"),kf=["material","materials","bones","map"],Ql=class{constructor(t,e,n){let s=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lf,"")}static parseTrackName(t){let e=Bf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);kf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let m=0;m<t.length;m++)if(t[m].name===c){c=m;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=Ql;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Kx=new Float32Array(1);var Dc=class Dc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Dc.prototype.isMatrix2=!0;var tc=Dc;function Rc(i,t,e,n){let s=zf(n);switch(e){case _c:return i*t;case Ys:return i*t/s.components*s.byteLength;case bo:return i*t/s.components*s.byteLength;case zi:return i*t*2/s.components*s.byteLength;case To:return i*t*2/s.components*s.byteLength;case vc:return i*t*3/s.components*s.byteLength;case Gn:return i*t*4/s.components*s.byteLength;case wo:return i*t*4/s.components*s.byteLength;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kr:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:case Ro:return Math.max(i,16)*Math.max(t,8)/4;case Eo:case Co:return Math.max(i,8)*Math.max(t,8)/2;case Io:case Po:case No:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lo:case Gr:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jo:case Ko:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qo:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vr:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zf(i){switch(i){case vn:case pc:return{byteLength:1,components:1};case qs:case mc:case zn:return{byteLength:2,components:1};case Mo:case So:return{byteLength:2,components:4};case kn:case yo:case Ln:return{byteLength:4,components:1};case gc:case xc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Yu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vf(i){let t=new WeakMap;function e(o,l){let c=o.array,m=o.usage,g=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,m),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,l,c){let m=l.array,g=l.updateRanges;if(i.bindBuffer(c,o),g.length===0)i.bufferSubData(c,0,m);else{g.sort((u,f)=>u.start-f.start);let d=0;for(let u=1;u<g.length;u++){let f=g[d],_=g[u];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++d,g[d]=_)}g.length=d+1;for(let u=0,f=g.length;u<f;u++){let _=g[u];i.bufferSubData(c,_.start*m.BYTES_PER_ELEMENT,m,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let m=t.get(o);(!m||m.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wf=`#ifdef USE_ALPHAHASH
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
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$f=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zf=`#ifdef USE_AOMAP
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
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kf=`#ifdef USE_BATCHING
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
#endif`,jf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ep=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,np=`#ifdef USE_IRIDESCENCE
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
#endif`,ip=`#ifdef USE_BUMPMAP
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
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,up=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dp=`#define PI 3.141592653589793
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
} // validated`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_p="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
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
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
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
}`,Ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Np=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Up=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kp=`PhysicalMaterial material;
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
#endif`,zp=`uniform sampler2D dfgLUT;
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
}`,Gp=`
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$p=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jp=`#if defined( USE_POINTS_UV )
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
#endif`,Qp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,em=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nm=`#if defined( USE_MORPHCOLORS )
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
#endif`,im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`#ifdef USE_MORPHTARGETS
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
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,om=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
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
#endif`,dm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Am=`float getShadowMask() {
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
}`,Cm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rm=`#ifdef USE_SKINNING
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
#endif`,Im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
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
#endif`,Lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform float backgroundBlurriness;
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`#include <common>
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
}`,Zm=`#if DEPTH_PACKING == 3200
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
}`,Jm=`#define DISTANCE
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
}`,Km=`#define DISTANCE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`uniform float scale;
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define LAMBERT
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
}`,a0=`#define MATCAP
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
}`,o0=`#define MATCAP
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
}`,l0=`#define NORMAL
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
}`,c0=`#define NORMAL
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
}`,h0=`#define PHONG
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
}`,u0=`#define PHONG
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
}`,d0=`#define STANDARD
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
}`,f0=`#define STANDARD
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
}`,p0=`#define TOON
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
}`,m0=`#define TOON
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
}`,g0=`uniform float size;
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
}`,x0=`uniform vec3 diffuse;
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
}`,_0=`#include <common>
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
}`,v0=`uniform vec3 color;
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
}`,y0=`uniform float rotation;
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
}`,M0=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Hf,alphahash_pars_fragment:Wf,alphamap_fragment:Xf,alphamap_pars_fragment:qf,alphatest_fragment:Yf,alphatest_pars_fragment:$f,aomap_fragment:Zf,aomap_pars_fragment:Jf,batching_pars_vertex:Kf,batching_vertex:jf,begin_vertex:Qf,beginnormal_vertex:tp,bsdfs:ep,iridescence_fragment:np,bumpmap_pars_fragment:ip,clipping_planes_fragment:sp,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:ap,clipping_planes_vertex:op,color_fragment:lp,color_pars_fragment:cp,color_pars_vertex:hp,color_vertex:up,common:dp,defaultnormal_vertex:fp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:xp,colorspace_fragment:_p,colorspace_pars_fragment:vp,envmap_fragment:yp,envmap_common_pars_fragment:Mp,envmap_pars_fragment:Sp,envmap_pars_vertex:bp,envmap_physical_pars_fragment:Dp,envmap_vertex:Tp,fog_vertex:wp,fog_pars_vertex:Ep,fog_fragment:Ap,fog_pars_fragment:Cp,gradientmap_pars_fragment:Rp,lightmap_pars_fragment:Ip,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Lp,lights_pars_begin:Np,lights_toon_fragment:Up,lights_toon_pars_fragment:Fp,lights_phong_fragment:Op,lights_phong_pars_fragment:Bp,lights_physical_fragment:kp,lights_physical_pars_fragment:zp,lights_fragment_begin:Gp,lights_fragment_maps:Vp,lights_fragment_end:Hp,lightprobes_pars_fragment:Wp,logdepthbuf_fragment:Xp,logdepthbuf_pars_fragment:qp,logdepthbuf_pars_vertex:Yp,logdepthbuf_vertex:$p,map_fragment:Zp,map_pars_fragment:Jp,map_particle_fragment:Kp,map_particle_pars_fragment:jp,metalnessmap_fragment:Qp,metalnessmap_pars_fragment:tm,morphinstance_vertex:em,morphcolor_vertex:nm,morphnormal_vertex:im,morphtarget_pars_vertex:sm,morphtarget_vertex:rm,normal_fragment_begin:am,normal_fragment_maps:om,normal_pars_fragment:lm,normal_pars_vertex:cm,normal_vertex:hm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:dm,clearcoat_normal_fragment_maps:fm,clearcoat_pars_fragment:pm,iridescence_pars_fragment:mm,opaque_fragment:gm,packing:xm,premultiplied_alpha_fragment:_m,project_vertex:vm,dithering_fragment:ym,dithering_pars_fragment:Mm,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:bm,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:wm,shadowmap_vertex:Em,shadowmask_pars_fragment:Am,skinbase_vertex:Cm,skinning_pars_vertex:Rm,skinning_vertex:Im,skinnormal_vertex:Pm,specularmap_fragment:Lm,specularmap_pars_fragment:Nm,tonemapping_fragment:Dm,tonemapping_pars_fragment:Um,transmission_fragment:Fm,transmission_pars_fragment:Om,uv_pars_fragment:Bm,uv_pars_vertex:km,uv_vertex:zm,worldpos_vertex:Gm,background_vert:Vm,background_frag:Hm,backgroundCube_vert:Wm,backgroundCube_frag:Xm,cube_vert:qm,cube_frag:Ym,depth_vert:$m,depth_frag:Zm,distance_vert:Jm,distance_frag:Km,equirect_vert:jm,equirect_frag:Qm,linedashed_vert:t0,linedashed_frag:e0,meshbasic_vert:n0,meshbasic_frag:i0,meshlambert_vert:s0,meshlambert_frag:r0,meshmatcap_vert:a0,meshmatcap_frag:o0,meshnormal_vert:l0,meshnormal_frag:c0,meshphong_vert:h0,meshphong_frag:u0,meshphysical_vert:d0,meshphysical_frag:f0,meshtoon_vert:p0,meshtoon_frag:m0,points_vert:g0,points_frag:x0,shadow_vert:_0,shadow_frag:v0,sprite_vert:y0,sprite_frag:M0},Tt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ei={basic:{uniforms:dn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:dn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:dn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:dn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:dn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:dn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:dn([Tt.points,Tt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:dn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:dn([Tt.common,Tt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:dn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:dn([Tt.sprite,Tt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:dn([Tt.common,Tt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:dn([Tt.lights,Tt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};ei.physical={uniforms:dn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var il={r:0,b:0,g:0},S0=new pe,$u=new $t;$u.set(-1,0,0,0,1,0,0,0,1);function b0(i,t,e,n,s,r){let a=new Bt(0),o=s===!0?0:1,l,c,m=null,g=0,d=null;function u(y){let R=y.isScene===!0?y.background:null;if(R&&R.isTexture){let E=y.backgroundBlurriness>0;R=t.get(R,E)}return R}function f(y){let R=!1,E=u(y);E===null?x(a,o):E&&E.isColor&&(x(E,1),R=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?e.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,R){let E=u(R);E&&E.isCubeTexture?(c===void 0&&(c=new Vt(new vi(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:as(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(S0.makeRotationFromEuler(R.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($u),c.material.toneMapped=he.getTransfer(E.colorSpace)!==_e,(m!==E||g!==E.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,m=E,g=E.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Vt(new Di(2,2),new gn({name:"BackgroundMaterial",uniforms:as(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=he.getTransfer(E.colorSpace)!==_e,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(m!==E||g!==E.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,m=E,g=E.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function x(y,R){y.getRGB(il,Ec(i)),e.buffers.color.setClear(il.r,il.g,il.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,R=1){a.set(y),o=R,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,x(a,o)},render:f,addToRenderList:_,dispose:p}}function T0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(O,U,V,L,Y){let K=!1,$=g(O,L,V,U);r!==$&&(r=$,c(r.object)),K=u(O,L,V,Y),K&&f(O,L,V,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,E(O,U,V,L),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function m(O){return i.deleteVertexArray(O)}function g(O,U,V,L){let Y=L.wireframe===!0,K=n[U.id];K===void 0&&(K={},n[U.id]=K);let $=O.isInstancedMesh===!0?O.id:0,dt=K[$];dt===void 0&&(dt={},K[$]=dt);let Q=dt[V.id];Q===void 0&&(Q={},dt[V.id]=Q);let ot=Q[Y];return ot===void 0&&(ot=d(l()),Q[Y]=ot),ot}function d(O){let U=[],V=[],L=[];for(let Y=0;Y<e;Y++)U[Y]=0,V[Y]=0,L[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:L,object:O,attributes:{},index:null}}function u(O,U,V,L){let Y=r.attributes,K=U.attributes,$=0,dt=V.getAttributes();for(let Q in dt)if(dt[Q].location>=0){let ct=Y[Q],Lt=K[Q];if(Lt===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(Lt=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(Lt=O.instanceColor)),ct===void 0||ct.attribute!==Lt||Lt&&ct.data!==Lt.data)return!0;$++}return r.attributesNum!==$||r.index!==L}function f(O,U,V,L){let Y={},K=U.attributes,$=0,dt=V.getAttributes();for(let Q in dt)if(dt[Q].location>=0){let ct=K[Q];ct===void 0&&(Q==="instanceMatrix"&&O.instanceMatrix&&(ct=O.instanceMatrix),Q==="instanceColor"&&O.instanceColor&&(ct=O.instanceColor));let Lt={};Lt.attribute=ct,ct&&ct.data&&(Lt.data=ct.data),Y[Q]=Lt,$++}r.attributes=Y,r.attributesNum=$,r.index=L}function _(){let O=r.newAttributes;for(let U=0,V=O.length;U<V;U++)O[U]=0}function x(O){p(O,0)}function p(O,U){let V=r.newAttributes,L=r.enabledAttributes,Y=r.attributeDivisors;V[O]=1,L[O]===0&&(i.enableVertexAttribArray(O),L[O]=1),Y[O]!==U&&(i.vertexAttribDivisor(O,U),Y[O]=U)}function y(){let O=r.newAttributes,U=r.enabledAttributes;for(let V=0,L=U.length;V<L;V++)U[V]!==O[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function R(O,U,V,L,Y,K,$){$===!0?i.vertexAttribIPointer(O,U,V,Y,K):i.vertexAttribPointer(O,U,V,L,Y,K)}function E(O,U,V,L){_();let Y=L.attributes,K=V.getAttributes(),$=U.defaultAttributeValues;for(let dt in K){let Q=K[dt];if(Q.location>=0){let ot=Y[dt];if(ot===void 0&&(dt==="instanceMatrix"&&O.instanceMatrix&&(ot=O.instanceMatrix),dt==="instanceColor"&&O.instanceColor&&(ot=O.instanceColor)),ot!==void 0){let ct=ot.normalized,Lt=ot.itemSize,Xt=t.get(ot);if(Xt===void 0)continue;let it=Xt.buffer,bt=Xt.type,wt=Xt.bytesPerElement,Ft=bt===i.INT||bt===i.UNSIGNED_INT||ot.gpuType===yo;if(ot.isInterleavedBufferAttribute){let gt=ot.data,qt=gt.isInterleavedBuffer===!0?gt.stride:gt.itemSize,Se=ot.offset;if(gt.isInstancedInterleavedBuffer||gt.isInstancedBufferAttribute){for(let kt=0;kt<Q.locationSize;kt++)p(Q.location+kt,gt.meshPerAttribute);O.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let kt=0;kt<Q.locationSize;kt++)x(Q.location+kt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let kt=0;kt<Q.locationSize;kt++)R(Q.location+kt,Lt/Q.locationSize,bt,ct,qt*wt,(Se+Lt/Q.locationSize*kt)*wt,Ft)}else{if(ot.isInstancedBufferAttribute){for(let gt=0;gt<Q.locationSize;gt++)p(Q.location+gt,ot.meshPerAttribute);O.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let gt=0;gt<Q.locationSize;gt++)x(Q.location+gt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let gt=0;gt<Q.locationSize;gt++)R(Q.location+gt,Lt/Q.locationSize,bt,ct,Lt*wt,Lt/Q.locationSize*gt*wt,Ft)}}else if($!==void 0){let ct=$[dt];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(Q.location,ct);break;case 3:i.vertexAttrib3fv(Q.location,ct);break;case 4:i.vertexAttrib4fv(Q.location,ct);break;default:i.vertexAttrib1fv(Q.location,ct)}}}}y()}function P(){B();for(let O in n){let U=n[O];for(let V in U){let L=U[V];for(let Y in L){let K=L[Y];for(let $ in K)m(K[$].object),delete K[$];delete L[Y]}}delete n[O]}}function C(O){if(n[O.id]===void 0)return;let U=n[O.id];for(let V in U){let L=U[V];for(let Y in L){let K=L[Y];for(let $ in K)m(K[$].object),delete K[$];delete L[Y]}}delete n[O.id]}function v(O){for(let U in n){let V=n[U];for(let L in V){let Y=V[L];if(Y[O.id]===void 0)continue;let K=Y[O.id];for(let $ in K)m(K[$].object),delete K[$];delete Y[O.id]}}}function M(O){for(let U in n){let V=n[U],L=O.isInstancedMesh===!0?O.id:0,Y=V[L];if(Y!==void 0){for(let K in Y){let $=Y[K];for(let dt in $)m($[dt].object),delete $[dt];delete Y[K]}delete V[L],Object.keys(V).length===0&&delete n[U]}}}function B(){N(),a=!0,r!==s&&(r=s,c(r.object))}function N(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:N,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfObject:M,releaseStatesOfProgram:v,initAttributes:_,enableAttribute:x,disableUnusedAttributes:y}}function w0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,m){m!==0&&(i.drawArraysInstanced(n,l,c,m),e.update(c,n,m))}function o(l,c,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,m);let d=0;for(let u=0;u<m;u++)d+=c[u];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function E0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let v=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(v){return!(v!==Gn&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){let M=v===zn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(v!==vn&&v!==Ln&&!M&&n.convert(v)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",m=l(c);m!==c&&(Wt("WebGLRenderer:",c,"not supported, using",m,"instead."),c=m);let g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&g===!1;e.reversedDepthBuffer===!0&&g===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&g===!0&&Wt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:g,maxTextures:u,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:R,maxFragmentUniforms:E,maxSamples:P,samples:C}}function A0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Bn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,d){let u=g.length!==0||d||n!==0||s;return s=d,n=g.length,u},this.beginShadows=function(){r=!0,m(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,d){e=m(g,d,0)},this.setState=function(g,d,u){let f=g.clippingPlanes,_=g.clipIntersection,x=g.clipShadows,p=i.get(g);if(!s||f===null||f.length===0||r&&!x)r?m(null):c();else{let y=r?0:n,R=y*4,E=p.clippingState||null;l.value=E,E=m(f,d,R,u);for(let P=0;P!==R;++P)E[P]=e[P];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function m(g,d,u,f){let _=g!==null?g.length:0,x=null;if(_!==0){if(x=l.value,f!==!0||x===null){let p=u+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let R=0,E=u;R!==_;++R,E+=4)a.copy(g[R]).applyMatrix4(y,o),a.normal.toArray(x,E),x[E+3]=a.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,x}}var qr=class extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new yr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new vi(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ns});r.uniforms.tEquirect.value=e;let a=new Vt(s,r),o=e.minFilter;return e.minFilter===Mi&&(e.minFilter=pn),new Hs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Eu=256,C0=3,R0=20,Zu=256,Ju=16,I0=3,P0=new H,L0=new Bt,rl=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Hs(1,10,null),this._boxMesh=new Vt(new vi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=P0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),m=this._getSourceTarget(!0);e>0&&(m.texture.mipmapsAutoUpdate=!1);let g=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,f=l.autoClearStencil,_=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(t.background=l.getClearColor(L0));let x=new Hs(n,s,m);return x.position.copy(o),x.update(l,t),l.autoClear=g,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=f,t.background=_,e>0&&(m.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Eu,Mu(t))}_fromTexture(t,e){t.mapping===ss||t.mapping===Xs?this._setSize(t.image.length===0?Eu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Au(t,!1,!1),n=Math.log2(t)-C0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Au(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ss||t.mapping===Xs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ru()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=N0(),this._integrationMaterial=D0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Ju);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-I0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Zu*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=U0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Au(i,t,e){return new qr(i,{minFilter:Mi,generateMipmaps:t,type:zn,colorSpace:hr,depthBuffer:e})}function Yr(i,t,e){return new gn({name:i,uniforms:t,vertexShader:ne.cube_vert,fragmentShader:e,side:en,blending:ns,depthTest:!1,depthWrite:!1})}function N0(){return Yr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Zu}u

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
	`)}function D0(){return Yr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ju}},`

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
	`)}function U0(){return Yr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${R0}
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
	`)}function Cu(){return Yr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ru(){return Yr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function F0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===xo||u===_o)if(t.has(d)){let f=t.get(d).texture;return o(f,d.mapping)}else{let f=d.image;if(f&&f.height>0){let _=new qr(f.height);return _.fromEquirectangularTexture(i,d),t.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,f=u===xo||u===_o,_=u===ss||u===Xs;if(f||_){let x=e.get(d),p=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new rl(i)),x=f?n.fromEquirectangular(d,x):n.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),x.texture;if(x!==void 0)return x.texture;{let y=d.image;return f&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new rl(i)),x=f?n.fromEquirectangular(d):n.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,e.set(d,x),d.addEventListener("dispose",m),x.texture):null}}}return d}function o(d,u){return u===xo?d.mapping=ss:u===_o&&(d.mapping=Xs),d}function l(d){let u=0,f=6;for(let _=0;_<f;_++)d[_]!==void 0&&u++;return u===f}function c(d){let u=d.target;u.removeEventListener("dispose",c);let f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function m(d){let u=d.target;u.removeEventListener("dispose",m);let f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function O0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&lr("WebGLRenderer: "+n+" extension not supported."),s}}}function B0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(f=>delete s[f]);function o(f){l(f.target)}function l(f){f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);f.removeEventListener("dispose",o),delete s[f.id],a.unregister(f);let _=r.get(f);_&&(t.remove(_),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function c(f,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function m(f){let _=f.attributes;for(let x in _)t.update(_[x],i.ARRAY_BUFFER)}function g(f){let _=f.index,x=f.attributes.position,p=0;if(x===void 0)return;let y=_!==null?_.array.length:x.array.length/3-1,R=x.count>=65535?xr:gr,E=new R(Math.ceil(y/3)*6,1),P=E.array;if(_!==null){let v=_.array;p=_.version;for(let M=0,B=0;M<y;M+=3){let N=v[M+0],O=v[M+1],U=v[M+2];P[B++]=N,P[B++]=O,P[B++]=O,P[B++]=U,P[B++]=U,P[B++]=N}}else{p=x.version;for(let v=0,M=0;v<y;v+=3){let B=v+0,N=v+1,O=v+2;P[M++]=B,P[M++]=N,P[M++]=N,P[M++]=O,P[M++]=O,P[M++]=B}}E.version=p;let C=r.get(f);C&&t.remove(C),r.set(f,E)}function d(f){let _=r.get(f);if(_){let x=f.index;x!==null&&_.version<x.version&&g(f)}else g(f);return r.get(f)}function u(){for(let f in s){let _=s[f].deref();_!==void 0&&l(_)}}return{get:c,update:m,getWireframeAttribute:d,dispose:u}}function k0(i,t,e){let n;function s(g){n=g}let r,a;function o(g){r=g.type,a=g.bytesPerElement}function l(g,d){i.drawElements(n,d,r,g*a),e.update(d,n,1)}function c(g,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,g*a,u),e.update(d,n,u))}function m(g,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,g,0,u);let _=0;for(let x=0;x<u;x++)_+=d[x];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=m}function z0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function G0(i,t,e){let n=new WeakMap,s=new Ie;function r(a,o,l){let c=a.morphTargetInfluences,m=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=m!==void 0?m.length:0,d=n.get(o);if(d===void 0||d.count!==g){let B=function(){v.dispose(),n.delete(o),o.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],R=0;u===!0&&(R=1),f===!0&&(R=2),_===!0&&(R=3);let E=o.attributes.position.count*R,P=1;E>t.maxTextureSize&&(P=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);let C=new Float32Array(E*P*4*g),v=new dr(C,E,P,g);v.type=Ln,v.needsUpdate=!0;let M=R*4;for(let N=0;N<g;N++){let O=x[N],U=p[N],V=y[N],L=E*P*4*N;for(let Y=0;Y<O.count;Y++){let K=Y*M;u===!0&&(s.fromBufferAttribute(O,Y),C[L+K+0]=s.x,C[L+K+1]=s.y,C[L+K+2]=s.z,C[L+K+3]=0),f===!0&&(s.fromBufferAttribute(U,Y),C[L+K+4]=s.x,C[L+K+5]=s.y,C[L+K+6]=s.z,C[L+K+7]=0),_===!0&&(s.fromBufferAttribute(V,Y),C[L+K+8]=s.x,C[L+K+9]=s.y,C[L+K+10]=s.z,C[L+K+11]=V.itemSize===4?s.w:1)}}d={count:g,texture:v,size:new jt(E,P)},n.set(o,d),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let f=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function V0(i,t,e,n,s){let r=new WeakMap;function a(c){let m=s.render.frame,g=c.geometry,d=t.get(c,g);if(r.get(d)!==m&&(t.update(d),r.set(d,m)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==m&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,m))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==m&&(u.update(),r.set(u,m))}return d}function o(){r=new WeakMap}function l(c){let m=c.target;m.removeEventListener("dispose",l),n.releaseStatesOfObject(m),e.remove(m.instanceMatrix),m.instanceColor!==null&&e.remove(m.instanceColor)}return{update:a,dispose:o}}var H0={[oc]:"LINEAR_TONE_MAPPING",[lc]:"REINHARD_TONE_MAPPING",[cc]:"CINEON_TONE_MAPPING",[Ur]:"ACES_FILMIC_TONE_MAPPING",[uc]:"AGX_TONE_MAPPING",[dc]:"NEUTRAL_TONE_MAPPING",[hc]:"CUSTOM_TONE_MAPPING"};function W0(i,t,e,n,s,r){let a=new Sn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,m=new Ye;m.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new de([0,2,0,0,2,0],2));let g=new Qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Vt(m,g),u=new po(-1,1,1,-1,0,1),f=null,_=null,x=!1,p,y=null,R=[],E=!1;this.setSize=function(P,C){a.setSize(P,C),o!==null&&o.setSize(P,C),l!==null&&l.setSize(P,C);for(let v=0;v<R.length;v++){let M=R[v];M.setSize&&M.setSize(P,C)}},this.setEffects=function(P){R=P,E=R.length>0&&R[0].isRenderPass===!0;let C=a.width,v=a.height;R.length>0&&o===null&&(o=new Sn(C,v,{type:zn,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(C,v,{type:zn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&R.some(B=>B.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&c===null&&(c=new _i(C,v),r===!0&&(c.format=Si,c.type=rs)),a.dispose(),a.depthTexture=M?c:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let B=0;B<R.length;B++){let N=R[B];N.setSize&&N.setSize(C,v),M&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(P,C){if(x||P.toneMapping===Qn&&R.length===0)return!1;if(y=C,C!==null){let v=C.width,M=C.height;(a.width!==v||a.height!==M)&&this.setSize(v,M)}return E===!1&&P.setRenderTarget(a),p=P.toneMapping,P.toneMapping=Qn,!0},this.hasRenderPass=function(){return E},this.end=function(P,C){P.toneMapping=p,x=!0;let v=a,M=o;for(let B=0;B<R.length;B++){let N=R[B];N.enabled!==!1&&(N.render(P,M,v,C),N.needsSwap!==!1&&(v=M,M=M===o?l:o))}if(f!==P.outputColorSpace||_!==P.toneMapping){f=P.outputColorSpace,_=P.toneMapping,g.defines={},he.getTransfer(f)===_e&&(g.defines.SRGB_TRANSFER="");let B=H0[_];B&&(g.defines[B]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=v.texture,P.setRenderTarget(y),P.render(d,u),y=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),m.dispose(),g.dispose()}}var Ku=new un,ju=new _i(1,1),Qu=new Sr(1),td=new dr,ed=new Ja,nd=new yr,Iu=[],Pu=[],Lu=new Float32Array(16),Nu=new Float32Array(9),Du=new Float32Array(4);function Zs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Iu[s];if(r===void 0&&(r=new Float32Array(s),Iu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ol(i,t){let e=Pu[t];e===void 0&&(e=new Int32Array(t),Pu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function X0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),Ze(e,t)}}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),Ze(e,t)}}function $0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),Ze(e,t)}}function Z0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,n))return;Du.set(n),i.uniformMatrix2fv(this.addr,!1,Du),Ze(e,n)}}function J0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,n))return;Nu.set(n),i.uniformMatrix3fv(this.addr,!1,Nu),Ze(e,n)}}function K0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if($e(e,n))return;Lu.set(n),i.uniformMatrix4fv(this.addr,!1,Lu),Ze(e,n)}}function j0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),Ze(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),Ze(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),Ze(e,t)}}function ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),Ze(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),Ze(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),Ze(e,t)}}function ll(i){return i.version===0&&(i.compareFunction=Sc,i.needsUpdate=!0),i}function ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=ll(ju):r=Ku,e.setTexture2D(t||r,s)}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ed,s)}function lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=ll(Qu):r=nd,e.setTextureCube(t||r,s)}function cg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||td,s)}function hg(i){switch(i){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return $0;case 35674:return Z0;case 35675:return J0;case 35676:return K0;case 5124:case 35670:return j0;case 35667:case 35671:return Q0;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}function ug(i,t){i.uniform1fv(this.addr,t)}function dg(i,t){let e=Zs(t,this.size,2);i.uniform2fv(this.addr,e)}function fg(i,t){let e=Zs(t,this.size,3);i.uniform3fv(this.addr,e)}function pg(i,t){let e=Zs(t,this.size,4);i.uniform4fv(this.addr,e)}function mg(i,t){let e=Zs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function gg(i,t){let e=Zs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function xg(i,t){let e=Zs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _g(i,t){i.uniform1iv(this.addr,t)}function vg(i,t){i.uniform2iv(this.addr,t)}function yg(i,t){i.uniform3iv(this.addr,t)}function Mg(i,t){i.uniform4iv(this.addr,t)}function Sg(i,t){i.uniform1uiv(this.addr,t)}function bg(i,t){i.uniform2uiv(this.addr,t)}function Tg(i,t){i.uniform3uiv(this.addr,t)}function wg(i,t){i.uniform4uiv(this.addr,t)}function Eg(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ll(ju):a=Ku;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ag(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ed,r[a])}function Cg(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=ll(Qu):a=nd;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Rg(i,t,e){let n=this.cache,s=t.length,r=ol(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),Ze(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||td,r[a])}function Ig(i){switch(i){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return xg;case 5124:case 35670:return _g;case 35667:case 35671:return vg;case 35668:case 35672:return yg;case 35669:case 35673:return Mg;case 5125:return Sg;case 36294:return bg;case 36295:return Tg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Rg}}var Oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=hg(e.type)}},Bc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ig(e.type)}},kc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function Uu(i,t){i.seq.push(t),i.map[t.id]=t}function Pg(i,t,e){let n=i.name,s=n.length;for(Uc.lastIndex=0;;){let r=Uc.exec(n),a=Uc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Uu(e,c===void 0?new Oc(o,i,t):new Bc(o,i,t));break}else{let g=e.map[o];g===void 0&&(g=new kc(o),Uu(e,g)),e=g}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Pg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Fu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Lg=37297,Ng=0;function Dg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Ou=new $t;function Ug(i){he._getMatrix(Ou,he.workingColorSpace,i);let t=`mat3( ${Ou.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case ur:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Bu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Dg(i.getShaderSource(t),o)}else return r}function Fg(i,t){let e=Ug(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Og={[oc]:"Linear",[lc]:"Reinhard",[cc]:"Cineon",[Ur]:"ACESFilmic",[uc]:"AgX",[dc]:"Neutral",[hc]:"Custom"};function Bg(i,t){let e=Og[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sl=new H;function kg(){he.getLuminanceCoefficients(sl);let i=sl.x.toFixed(4),t=sl.y.toFixed(4),e=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function Gg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Xr(i){return i!==""}function ku(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function zu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(i){return i.replace(Hg,Wg)}function Wg(i,t){let e=ne[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return zc(e)}var Xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gu(i){return i.replace(Xg,qg)}function qg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Yg={[Dr]:"SHADOWMAP_TYPE_PCF",[Ws]:"SHADOWMAP_TYPE_VSM"};function $g(i){return Yg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Zg={[Xs]:"ENVMAP_MODE_REFRACTION"};function Jg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Zg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kg={[ac]:"ENVMAP_BLENDING_MULTIPLY",[ru]:"ENVMAP_BLENDING_MIX",[au]:"ENVMAP_BLENDING_ADD"};function jg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kg[i.combine]||"ENVMAP_BLENDING_NONE"}function Qg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=$g(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",m=Jg(e),g=jg(e),d=zg(e),u=Gg(r),f=s.createProgram(),_,x,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Xr).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Xr).join(`
`),x.length>0&&(x+=`
`)):(_=[Vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+m:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),x=[Vu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+m:"",e.envMap?"#define "+g:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?ne.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Fg("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xr).join(`
`)),a=zc(a),a=ku(a,e),a=zu(a,e),o=zc(o),o=ku(o,e),o=zu(o,e),a=Gu(a),o=Gu(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",e.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=p+_+a,R=p+x+o,E=Fu(s,s.VERTEX_SHADER,y),P=Fu(s,s.FRAGMENT_SHADER,R);s.attachShader(f,E),s.attachShader(f,P),e.index0AttributeName!==void 0?s.bindAttribLocation(f,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function C(N){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(f)||"",U=s.getShaderInfoLog(E)||"",V=s.getShaderInfoLog(P)||"",L=O.trim(),Y=U.trim(),K=V.trim(),$=!0,dt=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,E,P);else{let Q=Bu(s,E,"vertex"),ot=Bu(s,P,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+L+`
`+Q+`
`+ot)}else L!==""?Wt("WebGLProgram: Program Info Log:",L):(Y===""||K==="")&&(dt=!1);dt&&(N.diagnostics={runnable:$,programLog:L,vertexShader:{log:Y,prefix:_},fragmentShader:{log:K,prefix:x}})}s.deleteShader(E),s.deleteShader(P),v=new $s(s,f),M=Vg(s,f)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(f,Lg)),B},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ng++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=E,this.fragmentShader=P,this}var tx=0,Gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Vc(t),e.set(t,n)),n}},Vc=class{constructor(t){this.id=tx++,this.code=t,this.usedTimes=0}};function ex(i){return i===zi||i===Gr||i===Vr}function nx(i,t,e,n,s,r){let a=new fr,o=new Gc,l=new Set,c=[],m=new Map,g=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(v){return l.add(v),v===0?"uv":`uv${v}`}function f(v,M,B,N,O,U){let V=N.fog,L=O.geometry,Y=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,$=t.get(v.envMap||Y,K),dt=d[v.type],Q=n.precision;v.precision!==null&&(Q=n.getMaxPrecision(v.precision),Q!==v.precision&&Wt("WebGLProgram.getParameters:",v.precision,"not supported, using",Q,"instead."));let ot=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ct=ot!==void 0?ot.length:0,Lt=0;L.morphAttributes.position!==void 0&&(Lt=1),L.morphAttributes.normal!==void 0&&(Lt=2),L.morphAttributes.color!==void 0&&(Lt=3);let Xt,it,bt,wt;if(dt){let St=ei[dt];Xt=St.vertexShader,it=St.fragmentShader}else{Xt=v.vertexShader,it=v.fragmentShader;let St=o.getVertexShaderStage(v),oe=o.getFragmentShaderStage(v);o.update(v,St,oe),bt=St.id,wt=oe.id}let Ft=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),qt=O.isInstancedMesh===!0,Se=O.isBatchedMesh===!0,kt=!!v.map,ae=!!v.matcap,Qt=!!$,te=Qt&&$.isPMREMTexture===!0,ke=!!v.aoMap,De=!!v.lightMap,Je=!!v.bumpMap&&v.wireframe===!1,xe=!!v.normalMap,me=!!v.displacementMap,Ue=!!v.emissiveMap,Le=!!v.metalnessMap,Qe=!!v.roughnessMap,Fe=v.anisotropy>0,z=v.clearcoat>0,Xe=v.diffuseRoughness>0,ve=v.dispersion>0,be=v.retroreflectivity>0,xt=v.iridescence>0,Re=v.sheen>0,zt=v.transmission>0,It=Fe&&!!v.anisotropyMap,A=z&&!!v.clearcoatMap,b=z&&!!v.clearcoatNormalMap,W=z&&!!v.clearcoatRoughnessMap,rt=Xe&&!!v.diffuseRoughnessMap,at=xt&&!!v.iridescenceMap,yt=xt&&!!v.iridescenceThicknessMap,mt=Re&&!!v.sheenColorMap,j=Re&&!!v.sheenRoughnessMap,tt=!!v.specularMap,Mt=!!v.specularColorMap,D=!!v.specularIntensityMap,nt=zt&&!!v.transmissionMap,J=zt&&!!v.thicknessMap,_t=!!v.gradientMap,ht=!!v.alphaMap,ft=v.alphaTest>0,Dt=!!v.alphaHash,Zt=!!v.extensions,ut=Qn;v.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(ut=i.toneMapping);let lt=te?$.isCompressedCubeTexture?$.image[0].mipmaps:$.mipmaps:null,Ht={shaderID:dt,shaderType:v.type,shaderName:v.name,vertexShader:Xt,fragmentShader:it,defines:v.defines,customVertexShaderID:bt,customFragmentShaderID:wt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:Q,batching:Se,batchingColor:Se&&O._colorsTexture!==null,instancing:qt,instancingColor:qt&&O.instanceColor!==null,instancingMorph:qt&&O.morphTexture!==null,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:kt,matcap:ae,envMap:Qt,envMapMode:Qt&&$.mapping,envMapPMREM:te,envMapMaxLod:te?lt.length-1:null,envMapSize:te?lt[0].width:null,aoMap:ke,lightMap:De,bumpMap:Je,normalMap:xe,displacementMap:me,emissiveMap:Ue,normalMapObjectSpace:xe&&v.normalMapType===cu,normalMapTangentSpace:xe&&v.normalMapType===nl,packedNormalMap:xe&&v.normalMapType===nl&&ex(v.normalMap.format),metalnessMap:Le,roughnessMap:Qe,anisotropy:Fe,anisotropyMap:It,clearcoat:z,clearcoatMap:A,clearcoatNormalMap:b,clearcoatRoughnessMap:W,diffuseRoughness:Xe,diffuseRoughnessMap:rt,dispersion:ve,retroreflection:be,iridescence:xt,iridescenceMap:at,iridescenceThicknessMap:yt,sheen:Re,sheenColorMap:mt,sheenRoughnessMap:j,specularMap:tt,specularColorMap:Mt,specularIntensityMap:D,transmission:zt,transmissionMap:nt,thicknessMap:J,gradientMap:_t,opaque:v.transparent===!1&&v.blending===ki&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:ft,alphaHash:Dt,combine:v.combine,mapUv:kt&&u(v.map.channel),aoMapUv:ke&&u(v.aoMap.channel),lightMapUv:De&&u(v.lightMap.channel),bumpMapUv:Je&&u(v.bumpMap.channel),normalMapUv:xe&&u(v.normalMap.channel),displacementMapUv:me&&u(v.displacementMap.channel),emissiveMapUv:Ue&&u(v.emissiveMap.channel),metalnessMapUv:Le&&u(v.metalnessMap.channel),roughnessMapUv:Qe&&u(v.roughnessMap.channel),anisotropyMapUv:It&&u(v.anisotropyMap.channel),clearcoatMapUv:A&&u(v.clearcoatMap.channel),clearcoatNormalMapUv:b&&u(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&u(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:rt&&u(v.diffuseRoughnessMap.channel),iridescenceMapUv:at&&u(v.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&u(v.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&u(v.sheenColorMap.channel),sheenRoughnessMapUv:j&&u(v.sheenRoughnessMap.channel),specularMapUv:tt&&u(v.specularMap.channel),specularColorMapUv:Mt&&u(v.specularColorMap.channel),specularIntensityMapUv:D&&u(v.specularIntensityMap.channel),transmissionMapUv:nt&&u(v.transmissionMap.channel),thicknessMapUv:J&&u(v.thicknessMap.channel),alphaMapUv:ht&&u(v.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(xe||Fe),vertexNormals:!!L.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!L.attributes.uv&&(kt||ht),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||L.attributes.normal===void 0&&xe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:gt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Lt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:U.filter(St=>St.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:ut,decodeVideoTexture:kt&&v.map.isVideoTexture===!0&&he.getTransfer(v.map.colorSpace)===_e,decodeVideoTextureEmissive:Ue&&v.emissiveMap.isVideoTexture===!0&&he.getTransfer(v.emissiveMap.colorSpace)===_e,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===nn,flipSided:v.side===en,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Zt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&v.extensions.multiDraw===!0||Se)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function _(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let B in v.defines)M.push(B),M.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(x(M,v),p(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function x(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapPMREM),v.push(M.envMapMaxLod),v.push(M.envMapSize),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.diffuseRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.numLightProbeGrids),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function p(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function y(v){let M=d[v.type],B;if(M){let N=ei[M];B=bu.clone(N.uniforms)}else B=v.uniforms;return B}function R(v,M){let B=m.get(M);return B!==void 0?++B.usedTimes:(B=new Qg(i,M,v,s),c.push(B),m.set(M,B)),B}function E(v){if(--v.usedTimes===0){let M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),m.delete(v.cacheKey),v.destroy()}}function P(v){o.remove(v)}function C(){o.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:y,acquireProgram:R,releaseProgram:E,releaseShaderCache:P,programs:c,dispose:C}}function ix(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function sx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Hu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Wu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,f,_,x,p){let y=i[t];return y===void 0?(y={id:d.id,object:d,geometry:u,material:f,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},i[t]=y):(y.id=d.id,y.object=d,y.geometry=u,y.material=f,y.materialVariant=a(d),y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=x,y.group=p),t++,y}function l(d,u,f,_,x,p,y){y.reversedDepth===!0&&(x=-x);let R=o(d,u,f,_,x,p);f.transmission>0?n.push(R):f.transparent===!0?s.push(R):e.push(R)}function c(d,u,f,_,x,p){let y=o(d,u,f,_,x,p);f.transmission>0?n.unshift(y):f.transparent===!0?s.unshift(y):e.unshift(y)}function m(d,u){e.length>1&&e.sort(d||sx),n.length>1&&n.sort(u||Hu),s.length>1&&s.sort(u||Hu)}function g(){for(let d=t,u=i.length;d<u;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:g,sort:m}}function rx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Wu,i.set(n,[a])):s>=r.length?(a=new Wu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ax(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new Bt};break;case"SpotLight":e={position:new H,direction:new H,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function ox(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var lx=0;function cx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function hx(i){let t=new ax,e=ox(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let s=new H,r=new pe,a=new pe;function o(c){let m=0,g=0,d=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let u=0,f=0,_=0,x=0,p=0,y=0,R=0,E=0,P=0,C=0,v=0,M=0,B=0,N=0;c.sort(cx);for(let U=0,V=c.length;U<V;U++){let L=c[U],Y=L.color,K=L.intensity,$=L.distance,dt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===zi?dt=L.shadow.map.texture:dt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)m+=Y.r*K,g+=Y.g*K,d+=Y.b*K;else if(L.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(L.sh.coefficients[Q],K);N++}else if(L.isSunLight){let Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ot=L.shadow,ct=e.get(L);ct.shadowIntensity=ot.intensity,ct.shadowBias=ot.bias,ct.shadowNormalBias=ot.normalBias,ct.shadowRadius=ot.radius,ct.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),n.sunShadow[f]=ct,n.sunShadowMap[f]=dt;let Lt=ot.getViewportCount();for(let Xt=0;Xt<Lt;Xt++)n.sunShadowMatrix[_+Xt]=ot.getMatrix(Xt),n.sunShadowCascade[_+Xt]=ot._cascadeData[Xt];_+=Lt,f++}n.sun[u]=Q,u++}else if(L.isDirectionalLight){let Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ot=L.shadow,ct=e.get(L);ct.shadowIntensity=ot.intensity,ct.shadowBias=ot.bias,ct.shadowNormalBias=ot.normalBias,ct.shadowRadius=ot.radius,ct.shadowMapSize=ot.mapSize,n.directionalShadow[x]=ct,n.directionalShadowMap[x]=dt,n.directionalShadowMatrix[x]=L.shadow.matrix,P++}n.directional[x]=Q,x++}else if(L.isSpotLight){let Q=t.get(L);Q.position.setFromMatrixPosition(L.matrixWorld),Q.color.copy(Y).multiplyScalar(K),Q.distance=$,Q.coneCos=Math.cos(L.angle),Q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Q.decay=L.decay,n.spot[y]=Q;let ot=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,ot.updateMatrices(L),L.castShadow&&B++),n.spotLightMatrix[y]=ot.matrix,L.castShadow){let ct=e.get(L);ct.shadowIntensity=ot.intensity,ct.shadowBias=ot.bias,ct.shadowNormalBias=ot.normalBias,ct.shadowRadius=ot.radius,ct.shadowMapSize=ot.mapSize,n.spotShadow[y]=ct,n.spotShadowMap[y]=dt,v++}y++}else if(L.isRectAreaLight){let Q=t.get(L);Q.color.copy(Y).multiplyScalar(K),Q.halfWidth.set(L.width*.5,0,0),Q.halfHeight.set(0,L.height*.5,0),n.rectArea[R]=Q,R++}else if(L.isPointLight){let Q=t.get(L);if(Q.color.copy(L.color).multiplyScalar(L.intensity),Q.distance=L.distance,Q.decay=L.decay,L.castShadow){let ot=L.shadow,ct=e.get(L);ct.shadowIntensity=ot.intensity,ct.shadowBias=ot.bias,ct.shadowNormalBias=ot.normalBias,ct.shadowRadius=ot.radius,ct.shadowMapSize=ot.mapSize,ct.shadowCameraNear=ot.camera.near,ct.shadowCameraFar=ot.camera.far,n.pointShadow[p]=ct,n.pointShadowMap[p]=dt,n.pointShadowMatrix[p]=L.shadow.matrix,C++}n.point[p]=Q,p++}else if(L.isHemisphereLight){let Q=t.get(L);Q.skyColor.copy(L.color).multiplyScalar(K),Q.groundColor.copy(L.groundColor).multiplyScalar(K),n.hemi[E]=Q,E++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=d;let O=n.hash;(O.sunLength!==u||O.directionalLength!==x||O.pointLength!==p||O.spotLength!==y||O.rectAreaLength!==R||O.hemiLength!==E||O.numSunShadows!==f||O.numDirectionalShadows!==P||O.numPointShadows!==C||O.numSpotShadows!==v||O.numSpotMaps!==M||O.numLightProbes!==N)&&(n.sun.length=u,n.directional.length=x,n.spot.length=y,n.rectArea.length=R,n.point.length=p,n.hemi.length=E,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=P,n.directionalShadowMap.length=P,n.directionalShadowMatrix.length=P,n.pointShadow.length=C,n.pointShadowMap.length=C,n.pointShadowMatrix.length=C,n.spotShadow.length=v,n.spotShadowMap.length=v,n.spotLightMatrix.length=v+M-B,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=B,n.numLightProbes=N,O.sunLength=u,O.directionalLength=x,O.pointLength=p,O.spotLength=y,O.rectAreaLength=R,O.hemiLength=E,O.numSunShadows=f,O.numDirectionalShadows=P,O.numPointShadows=C,O.numSpotShadows=v,O.numSpotMaps=M,O.numLightProbes=N,n.version=lx++)}function l(c,m){let g=0,d=0,u=0,f=0,_=0,x=0,p=m.matrixWorldInverse;for(let y=0,R=c.length;y<R;y++){let E=c[y];if(E.isSunLight){let P=n.sun[g];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(p),g++}else if(E.isDirectionalLight){let P=n.directional[d];P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),d++}else if(E.isSpotLight){let P=n.spot[f];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(p),f++}else if(E.isRectAreaLight){let P=n.rectArea[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let P=n.point[u];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(p),u++}else if(E.isHemisphereLight){let P=n.hemi[x];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function Xu(i){let t=new hx(i),e=[],n=[],s=[];function r(g){m.camera=g,e.length=0,n.length=0,s.length=0}function a(g){g.isLightProbeGrid?s.push(g):e.push(g)}function o(g){n.push(g)}function l(){t.setup(e),s.sort((g,d)=>g.priority-d.priority||g.id-d.id)}function c(g){t.setupView(e,g)}let m={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ux(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Xu(i),t.set(s,[o])):r>=a.length?(o=new Xu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fx=`uniform sampler2D shadow_pass;
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
}`,px=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],mx=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],qu=new pe,Wr=new H,Fc=new H;function gx(i,t,e){let n=new Ni,s=new jt,r=new jt,a=new Ie,o=new to,l=new eo,c={},m=e.maxTextureSize,g={[Bi]:en,[en]:Bi,[nn]:nn},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:dx,fragmentShader:fx}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let f=new Ye;f.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Vt(f,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dr;let p=this.type;this.render=function(C,v,M){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===zh&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Dr);let B=i.getRenderTarget(),N=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),U=i.state;U.setBlending(ns),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let V=p!==this.type;V&&v.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(Y=>Y.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,Y=C.length;L<Y;L++){let K=C[L],$=K.shadow;if($===void 0){Wt("WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let dt=$.getFrameExtents();s.multiply(dt),r.copy($.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(r.x=Math.floor(m/dt.x),s.x=r.x*dt.x,$.mapSize.x=r.x),s.y>m&&(r.y=Math.floor(m/dt.y),s.y=r.y*dt.y,$.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=Q,$.map===null||V===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Ws){if(K.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Sn(s.x,s.y,{format:zi,type:zn,minFilter:pn,magFilter:pn,generateMipmaps:!1}),$.map.texture.name=K.name+".shadowMap",$.map.depthTexture=new _i(s.x,s.y,Ln),$.map.depthTexture.name=K.name+".shadowMapDepth",$.map.depthTexture.format=mi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ve,$.map.depthTexture.magFilter=Ve}else K.isPointLight?($.map=new qr(s.x),$.map.depthTexture=new Sr(s.x,kn)):($.map=new Sn(s.x,s.y),$.map.depthTexture=new _i(s.x,s.y,kn)),$.map.depthTexture.name=K.name+".shadowMap",$.map.depthTexture.format=mi,this.type===Dr?($.map.depthTexture.compareFunction=Q?Mc:yc,$.map.depthTexture.minFilter=pn,$.map.depthTexture.magFilter=pn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ve,$.map.depthTexture.magFilter=Ve);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let ot=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();K.isPointLight!==!0&&$.updateMatrices(K,M);let ct=($.camera.layers.mask&4294967294)!==0?$.camera.layers:M.layers;for(let Lt=0;Lt<ot;Lt++){let Xt=$.getCamera(Lt);if(K.isPointLight){let it=$.camera,bt=$.matrix,wt=K.distance||it.far;wt!==it.far&&(it.far=wt,it.updateProjectionMatrix()),Wr.setFromMatrixPosition(K.matrixWorld),it.position.copy(Wr),Fc.copy(it.position),Fc.add(px[Lt]),it.up.copy(mx[Lt]),it.lookAt(Fc),it.updateMatrixWorld(),bt.makeTranslation(-Wr.x,-Wr.y,-Wr.z),qu.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),$._frustum.setFromProjectionMatrix(qu,it.coordinateSystem,it.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,Lt),i.clear();else{Lt===0&&(i.setRenderTarget($.map),i.clear());let it=$.getViewport(Lt);a.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),U.viewport(a)}n=$.getFrustum(Lt),E(v,M,Xt,K,ct,this.type)}$.isPointLightShadow!==!0&&this.type===Ws&&y($,M),$.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(B,N,O)};function y(C,v){let M=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,u.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),C.mapPass===null?C.mapPass=new Sn(s.x,s.y,{format:zi,type:zn}):(C.mapPass.width!==C.map.width||C.mapPass.height!==C.map.height)&&C.mapPass.setSize(C.map.width,C.map.height),d.uniforms.shadow_pass.value=C.map.depthTexture,d.uniforms.resolution.value.set(C.map.width,C.map.height),d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(v,null,M,d,_,null),u.uniforms.shadow_pass.value=C.mapPass.texture,u.uniforms.resolution.value.set(C.map.width,C.map.height),u.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(v,null,M,u,_,null)}function R(C,v,M,B){let N=null,O=M.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(O!==void 0)N=O;else if(N=M.isPointLight===!0?l:o,i.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){let U=N.uuid,V=v.uuid,L=c[U];L===void 0&&(L={},c[U]=L);let Y=L[V];Y===void 0&&(Y=N.clone(),L[V]=Y,v.addEventListener("dispose",P)),N=Y}if(N.visible=v.visible,N.wireframe=v.wireframe,B===Ws?N.side=v.shadowSide!==null?v.shadowSide:v.side:N.side=v.shadowSide!==null?v.shadowSide:g[v.side],N.alphaMap=v.alphaMap,N.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,N.map=v.map,N.clipShadows=v.clipShadows,N.clippingPlanes=v.clippingPlanes,N.clipIntersection=v.clipIntersection,N.displacementMap=v.displacementMap,N.displacementScale=v.displacementScale,N.displacementBias=v.displacementBias,N.wireframeLinewidth=v.wireframeLinewidth,N.linewidth=v.linewidth,M.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let U=i.properties.get(N);U.light=M}return N}function E(C,v,M,B,N,O){if(C.visible===!1)return;if(C.layers.test(N)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&O===Ws)&&(!C.frustumCulled||C.intersectsFrustum(n))){C.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,C.matrixWorld);let L=t.update(C),Y=C.material;if(Array.isArray(Y)){let K=L.groups;for(let $=0,dt=K.length;$<dt;$++){let Q=K[$],ot=Y[Q.materialIndex];if(ot&&ot.visible){let ct=R(C,ot,B,O);C.onBeforeShadow(i,C,v,M,L,ct,Q),i.renderBufferDirect(M,null,L,ct,C,Q),C.onAfterShadow(i,C,v,M,L,ct,Q)}}}else if(Y.visible){let K=R(C,Y,B,O);C.onBeforeShadow(i,C,v,M,L,K,null),i.renderBufferDirect(M,null,L,K,C,null),C.onAfterShadow(i,C,v,M,L,K,null)}}let V=C.children;for(let L=0,Y=V.length;L<Y;L++)E(V[L],v,M,B,N,O)}function P(C){C.target.removeEventListener("dispose",P);for(let M in c){let B=c[M],N=C.target.uuid;N in B&&(B[N].dispose(),delete B[N])}}}function xx(i,t){function e(){let D=!1,nt=new Ie,J=null,_t=new Ie(0,0,0,0);return{setMask:function(ht){J!==ht&&!D&&(i.colorMask(ht,ht,ht,ht),J=ht)},setLocked:function(ht){D=ht},setClear:function(ht,ft,Dt,Zt,ut){ut===!0&&(ht*=Zt,ft*=Zt,Dt*=Zt),nt.set(ht,ft,Dt,Zt),_t.equals(nt)===!1&&(i.clearColor(ht,ft,Dt,Zt),_t.copy(nt))},reset:function(){D=!1,J=null,_t.set(-1,0,0,0)}}}function n(){let D=!1,nt=!1,J=null,_t=null,ht=null;return{setReversed:function(ft){if(nt!==ft){let Dt=t.get("EXT_clip_control");ft?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),nt=ft;let Zt=ht;ht=null,this.setClear(Zt)}},getReversed:function(){return nt},setTest:function(ft){ft?gt(i.DEPTH_TEST):qt(i.DEPTH_TEST)},setMask:function(ft){J!==ft&&!D&&(i.depthMask(ft),J=ft)},setFunc:function(ft){if(nt&&(ft=yu[ft]),_t!==ft){switch(ft){case Oa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case ka:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Ga:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=ft}},setLocked:function(ft){D=ft},setClear:function(ft){ht!==ft&&(ht=ft,nt&&(ft=1-ft),i.clearDepth(ft))},reset:function(){D=!1,J=null,_t=null,ht=null,nt=!1}}}function s(){let D=!1,nt=null,J=null,_t=null,ht=null,ft=null,Dt=null,Zt=null,ut=null;return{setTest:function(lt){D||(lt?gt(i.STENCIL_TEST):qt(i.STENCIL_TEST))},setMask:function(lt){nt!==lt&&!D&&(i.stencilMask(lt),nt=lt)},setFunc:function(lt,Ht,St){(J!==lt||_t!==Ht||ht!==St)&&(i.stencilFunc(lt,Ht,St),J=lt,_t=Ht,ht=St)},setOp:function(lt,Ht,St){(ft!==lt||Dt!==Ht||Zt!==St)&&(i.stencilOp(lt,Ht,St),ft=lt,Dt=Ht,Zt=St)},setLocked:function(lt){D=lt},setClear:function(lt){ut!==lt&&(i.clearStencil(lt),ut=lt)},reset:function(){D=!1,nt=null,J=null,_t=null,ht=null,ft=null,Dt=null,Zt=null,ut=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,m={},g={},d={},u=new WeakMap,f=[],_=null,x=!1,p=null,y=null,R=null,E=null,P=null,C=null,v=null,M=new Bt(0,0,0),B=0,N=!1,O=null,U=null,V=null,L=null,Y=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,dt=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(dt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),$=dt>=1):Q.indexOf("OpenGL ES")!==-1&&(dt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),$=dt>=2);let ot=null,ct={},Lt=i.getParameter(i.SCISSOR_BOX),Xt=i.getParameter(i.VIEWPORT),it=new Ie().fromArray(Lt),bt=new Ie().fromArray(Xt);function wt(D,nt,J,_t){let ht=new Uint8Array(4),ft=i.createTexture();i.bindTexture(D,ft),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<J;Dt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(nt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(nt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return ft}let Ft={};Ft[i.TEXTURE_2D]=wt(i.TEXTURE_2D,i.TEXTURE_2D,1),Ft[i.TEXTURE_CUBE_MAP]=wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ft[i.TEXTURE_2D_ARRAY]=wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ft[i.TEXTURE_3D]=wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),gt(i.DEPTH_TEST),a.setFunc(Ls),Je(!1),xe(ec),gt(i.CULL_FACE),ke(ns);function gt(D){m[D]!==!0&&(i.enable(D),m[D]=!0)}function qt(D){m[D]!==!1&&(i.disable(D),m[D]=!1)}function Se(D,nt){return d[D]!==nt?(i.bindFramebuffer(D,nt),d[D]=nt,D===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=nt),D===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=nt),!0):!1}function kt(D,nt){let J=f,_t=!1;if(D){J=u.get(nt),J===void 0&&(J=[],u.set(nt,J));let ht=D.textures;if(J.length!==ht.length||J[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Dt=ht.length;ft<Dt;ft++)J[ft]=i.COLOR_ATTACHMENT0+ft;J.length=ht.length,_t=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,_t=!0);_t&&i.drawBuffers(J)}function ae(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let Qt={[is]:i.FUNC_ADD,[Vh]:i.FUNC_SUBTRACT,[Hh]:i.FUNC_REVERSE_SUBTRACT};Qt[Wh]=i.MIN,Qt[Xh]=i.MAX;let te={[qh]:i.ZERO,[Yh]:i.ONE,[$h]:i.SRC_COLOR,[sc]:i.SRC_ALPHA,[tu]:i.SRC_ALPHA_SATURATE,[jh]:i.DST_COLOR,[Jh]:i.DST_ALPHA,[Zh]:i.ONE_MINUS_SRC_COLOR,[rc]:i.ONE_MINUS_SRC_ALPHA,[Qh]:i.ONE_MINUS_DST_COLOR,[Kh]:i.ONE_MINUS_DST_ALPHA,[eu]:i.CONSTANT_COLOR,[nu]:i.ONE_MINUS_CONSTANT_COLOR,[iu]:i.CONSTANT_ALPHA,[su]:i.ONE_MINUS_CONSTANT_ALPHA};function ke(D,nt,J,_t,ht,ft,Dt,Zt,ut,lt){if(D===ns){x===!0&&(qt(i.BLEND),x=!1);return}if(x===!1&&(gt(i.BLEND),x=!0),D!==Gh){if(D!==p||lt!==N){if((y!==is||P!==is)&&(i.blendEquation(i.FUNC_ADD),y=is,P=is),lt)switch(D){case ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFunc(i.ONE,i.ONE);break;case nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ic:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Yt("WebGLState: Invalid blending: ",D);break}else switch(D){case ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nc:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ic:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",D);break}R=null,E=null,C=null,v=null,M.set(0,0,0),B=0,p=D,N=lt}return}ht=ht||nt,ft=ft||J,Dt=Dt||_t,(nt!==y||ht!==P)&&(i.blendEquationSeparate(Qt[nt],Qt[ht]),y=nt,P=ht),(J!==R||_t!==E||ft!==C||Dt!==v)&&(i.blendFuncSeparate(te[J],te[_t],te[ft],te[Dt]),R=J,E=_t,C=ft,v=Dt),(Zt.equals(M)===!1||ut!==B)&&(i.blendColor(Zt.r,Zt.g,Zt.b,ut),M.copy(Zt),B=ut),p=D,N=!1}function De(D,nt){D.side===nn?qt(i.CULL_FACE):gt(i.CULL_FACE);let J=D.side===en;nt&&(J=!J),Je(J),D.blending===ki&&D.transparent===!1?ke(ns):ke(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let _t=D.stencilWrite;o.setTest(_t),_t&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ue(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):qt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(D){O!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),O=D)}function xe(D){D!==Bh?(gt(i.CULL_FACE),D!==U&&(D===ec?i.cullFace(i.BACK):D===kh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qt(i.CULL_FACE),U=D}function me(D){D!==V&&($&&i.lineWidth(D),V=D)}function Ue(D,nt,J){D?(gt(i.POLYGON_OFFSET_FILL),(L!==nt||Y!==J)&&(L=nt,Y=J,a.getReversed()&&(nt=-nt,J=-J),i.polygonOffset(nt,J))):qt(i.POLYGON_OFFSET_FILL)}function Le(D){D?gt(i.SCISSOR_TEST):qt(i.SCISSOR_TEST)}function Qe(D){D===void 0&&(D=i.TEXTURE0+K-1),ot!==D&&(i.activeTexture(D),ot=D)}function Fe(D,nt,J){J===void 0&&(ot===null?J=i.TEXTURE0+K-1:J=ot);let _t=ct[J];_t===void 0&&(_t={type:void 0,texture:void 0},ct[J]=_t),(_t.type!==D||_t.texture!==nt)&&(ot!==J&&(i.activeTexture(J),ot=J),i.bindTexture(D,nt||Ft[D]),_t.type=D,_t.texture=nt)}function z(){let D=ct[ot];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Xe(){try{i.compressedTexImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function ve(){try{i.compressedTexImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function be(){try{i.texSubImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function xt(){try{i.texSubImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function Re(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function zt(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function It(){try{i.texStorage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function A(){try{i.texStorage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function b(){try{i.texImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function W(){try{i.texImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function rt(D){return g[D]!==void 0?g[D]:i.getParameter(D)}function at(D,nt){g[D]!==nt&&(i.pixelStorei(D,nt),g[D]=nt)}function yt(D){it.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),it.copy(D))}function mt(D){bt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),bt.copy(D))}function j(D,nt){let J=c.get(nt);J===void 0&&(J=new WeakMap,c.set(nt,J));let _t=J.get(D);_t===void 0&&(_t=i.getUniformBlockIndex(nt,D.name),i.uniformBlockBinding(nt,_t,_t),J.set(D,_t))}function tt(D,nt,J){let ht=c.get(nt).get(D);l[ht]!==J&&(i.bindBufferBase(i.UNIFORM_BUFFER,ht,J),l[ht]=J)}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),m={},g={},ot=null,ct={},d={},l={},u=new WeakMap,f=[],_=null,x=!1,p=null,y=null,R=null,E=null,P=null,C=null,v=null,M=new Bt(0,0,0),B=0,N=!1,O=null,U=null,V=null,L=null,Y=null,it.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:gt,disable:qt,bindFramebuffer:Se,drawBuffers:kt,useProgram:ae,setBlending:ke,setMaterial:De,setFlipSided:Je,setCullFace:xe,setLineWidth:me,setPolygonOffset:Ue,setScissorTest:Le,activeTexture:Qe,bindTexture:Fe,unbindTexture:z,compressedTexImage2D:Xe,compressedTexImage3D:ve,texImage2D:b,texImage3D:W,pixelStorei:at,getParameter:rt,updateUBOMapping:j,uniformBlockBinding:tt,texStorage2D:It,texStorage3D:A,texSubImage2D:be,texSubImage3D:xt,compressedTexSubImage2D:Re,compressedTexSubImage3D:zt,scissor:yt,viewport:mt,reset:Mt}}function _x(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,m=new WeakMap,g=new Set,d,u=new WeakMap,f=new Set,_=new FinalizationRegistry(A=>f.delete(A)),x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,b){return x?new OffscreenCanvas(A,b):Ds("canvas")}function y(A,b,W){let rt=1,at=It(A);if((at.width>W||at.height>W)&&(rt=W/Math.max(at.width,at.height)),rt<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let yt=Math.floor(rt*at.width),mt=Math.floor(rt*at.height);d===void 0&&(d=p(yt,mt));let j=b?p(yt,mt):d;return j.width=yt,j.height=mt,j.getContext("2d").drawImage(A,0,0,yt,mt),Wt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+yt+"x"+mt+")."),j}else return"data"in A&&Wt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),A;return A}function R(A){return A.generateMipmaps}function E(A){i.generateMipmap(A)}function P(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(A,b,W,rt,at,yt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;rt&&(mt=t.get("EXT_texture_norm16"),mt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=b;if(b===i.RED&&(W===i.FLOAT&&(j=i.R32F),W===i.HALF_FLOAT&&(j=i.R16F),W===i.UNSIGNED_BYTE&&(j=i.R8),W===i.UNSIGNED_SHORT&&mt&&(j=mt.R16_EXT),W===i.SHORT&&mt&&(j=mt.R16_SNORM_EXT)),b===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.R8UI),W===i.UNSIGNED_SHORT&&(j=i.R16UI),W===i.UNSIGNED_INT&&(j=i.R32UI),W===i.BYTE&&(j=i.R8I),W===i.SHORT&&(j=i.R16I),W===i.INT&&(j=i.R32I)),b===i.RG&&(W===i.FLOAT&&(j=i.RG32F),W===i.HALF_FLOAT&&(j=i.RG16F),W===i.UNSIGNED_BYTE&&(j=i.RG8),W===i.UNSIGNED_SHORT&&mt&&(j=mt.RG16_EXT),W===i.SHORT&&mt&&(j=mt.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RG8UI),W===i.UNSIGNED_SHORT&&(j=i.RG16UI),W===i.UNSIGNED_INT&&(j=i.RG32UI),W===i.BYTE&&(j=i.RG8I),W===i.SHORT&&(j=i.RG16I),W===i.INT&&(j=i.RG32I)),b===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGB8UI),W===i.UNSIGNED_SHORT&&(j=i.RGB16UI),W===i.UNSIGNED_INT&&(j=i.RGB32UI),W===i.BYTE&&(j=i.RGB8I),W===i.SHORT&&(j=i.RGB16I),W===i.INT&&(j=i.RGB32I)),b===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),W===i.UNSIGNED_INT&&(j=i.RGBA32UI),W===i.BYTE&&(j=i.RGBA8I),W===i.SHORT&&(j=i.RGBA16I),W===i.INT&&(j=i.RGBA32I)),b===i.RGB&&(W===i.UNSIGNED_SHORT&&mt&&(j=mt.RGB16_EXT),W===i.SHORT&&mt&&(j=mt.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),b===i.RGBA){let tt=yt?ur:he.getTransfer(at);W===i.FLOAT&&(j=i.RGBA32F),W===i.HALF_FLOAT&&(j=i.RGBA16F),W===i.UNSIGNED_BYTE&&(j=tt===_e?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&mt&&(j=mt.RGBA16_EXT),W===i.SHORT&&mt&&(j=mt.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function v(A,b){let W;return A?b===null||b===kn||b===rs?W=i.DEPTH24_STENCIL8:b===Ln?W=i.DEPTH32F_STENCIL8:b===qs&&(W=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===kn||b===rs?W=i.DEPTH_COMPONENT24:b===Ln?W=i.DEPTH_COMPONENT32F:b===qs&&(W=i.DEPTH_COMPONENT16),W}function M(A,b){return R(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ve&&A.minFilter!==pn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function B(A){let b=new WeakRef(A);n.get(A).__ref=b,f.add(b),_.register(A,b,b)}function N(A){let b=n.get(A).__ref;b!==void 0&&(f.delete(b),_.unregister(b))}function O(A){V(A.target)}function U(A){L(A.target)}function V(A){A.removeEventListener("dispose",O),N(A),K(A),A.isVideoTexture&&m.delete(A),A.isHTMLTexture&&g.delete(A)}function L(A){A.removeEventListener("dispose",U),N(A),dt(A)}function Y(){for(let A of f){let b=A.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):V(b))}f.clear(),g.clear()}function K(A){let b=n.get(A);if(b.__webglInit===void 0)return;let W=A.source,rt=u.get(W);if(rt){let at=rt[b.__cacheKey];at.usedTimes--,at.usedTimes===0&&$(A),Object.keys(rt).length===0&&u.delete(W)}n.remove(A)}function $(A){let b=n.get(A);i.deleteTexture(b.__webglTexture);let W=A.source,rt=u.get(W);delete rt[b.__cacheKey],a.memory.textures--}function dt(A){let b=n.get(A);b.__depthDisposeCallback&&b.__depthDisposeCallback();let W=A.depthTexture;if(W&&W.renderTarget===A&&V(W),A.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(b.__webglFramebuffer[at]))for(let yt=0;yt<b.__webglFramebuffer[at].length;yt++)i.deleteFramebuffer(b.__webglFramebuffer[at][yt]);else i.deleteFramebuffer(b.__webglFramebuffer[at]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[at])}else{if(Array.isArray(b.__webglFramebuffer))for(let at=0;at<b.__webglFramebuffer.length;at++)i.deleteFramebuffer(b.__webglFramebuffer[at]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let at=0;at<b.__webglColorRenderbuffer.length;at++)b.__webglColorRenderbuffer[at]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[at]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let rt=A.textures;for(let at=0,yt=rt.length;at<yt;at++){let mt=n.get(rt[at]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),a.memory.textures--),n.remove(rt[at])}n.remove(A)}let Q=0;function ot(){Q=0}function ct(){return Q}function Lt(A){Q=A}function Xt(){let A=Q;return A>=s.maxTextures&&Wt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),Q+=1,A}function it(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.mipmapsAutoUpdate),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function bt(A,b){let W=n.get(A);if(A.isVideoTexture&&Re(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&W.__version!==A.version){let rt=A.image;if(rt===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{De(W,A,b);return}}else A.isExternalTexture&&(W.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+b)}function wt(A,b){let W=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){De(W,A,b);return}else A.isExternalTexture&&(W.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+b)}function Ft(A,b){let W=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){De(W,A,b);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+b)}function gt(A,b){let W=n.get(A);if(A.version>0&&W.__version!==A.version){Je(W,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+b)}let qt={[Wa]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[Xa]:i.MIRRORED_REPEAT},Se={[Ve]:i.NEAREST,[ou]:i.NEAREST_MIPMAP_NEAREST,[Fr]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[vo]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},kt={[uu]:i.NEVER,[Sc]:i.ALWAYS,[du]:i.LESS,[yc]:i.LEQUAL,[fu]:i.EQUAL,[Mc]:i.GEQUAL,[pu]:i.GREATER,[mu]:i.NOTEQUAL};function ae(A,b){if(b.type===Ln&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===pn||b.magFilter===vo||b.magFilter===Fr||b.magFilter===Mi||b.minFilter===pn||b.minFilter===vo||b.minFilter===Fr||b.minFilter===Mi)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,qt[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,qt[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,qt[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Se[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,kt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Ve||b.minFilter!==Fr&&b.minFilter!==Mi||b.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Qt(A,b){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",O),B(b));let rt=b.source,at=u.get(rt);at===void 0&&(at={},u.set(rt,at));let yt=it(b);if(yt!==A.__cacheKey){at[yt]===void 0&&(at[yt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),at[yt].usedTimes++;let mt=at[A.__cacheKey];mt!==void 0&&(at[A.__cacheKey].usedTimes--,mt.usedTimes===0&&$(b)),A.__cacheKey=yt,A.__webglTexture=at[yt].texture}return W}function te(A,b,W){return Math.floor(Math.floor(A/W)/b)}function ke(A,b,W,rt){let yt=A.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,W,rt,b.data);else{yt.sort((D,nt)=>D.start-nt.start);let mt=0;for(let D=1;D<yt.length;D++){let nt=yt[mt],J=yt[D],_t=nt.start+nt.count,ht=te(J.start,b.width,4),ft=te(nt.start,b.width,4);J.start<=_t+1&&ht===ft&&te(J.start+J.count-1,b.width,4)===ht?nt.count=Math.max(nt.count,J.start+J.count-nt.start):(++mt,yt[mt]=J)}yt.length=mt+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),tt=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let D=0,nt=yt.length;D<nt;D++){let J=yt[D],_t=Math.floor(J.start/4),ht=Math.ceil(J.count/4),ft=_t%b.width,Dt=Math.floor(_t/b.width),Zt=ht,ut=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(i.TEXTURE_2D,0,ft,Dt,Zt,ut,W,rt,b.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function De(A,b,W){let rt=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(rt=i.TEXTURE_3D);let at=Qt(A,b),yt=b.source;e.bindTexture(rt,A.__webglTexture,i.TEXTURE0+W);let mt=n.get(yt);if(yt.version!==mt.__version||at===!0){if(e.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let ut=he.getPrimaries(he.workingColorSpace),lt=b.colorSpace===bi?null:he.getPrimaries(b.colorSpace),Ht=b.colorSpace===bi||ut===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht)}e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let tt=y(b.image,!1,s.maxTextureSize);tt=zt(b,tt);let Mt=r.convert(b.format,b.colorSpace),D=r.convert(b.type),nt=C(b.internalFormat,Mt,D,b.normalized,b.colorSpace,b.isVideoTexture);ae(rt,b);let J,_t=b.mipmaps,ht=b.isVideoTexture!==!0,ft=mt.__version===void 0||at===!0,Dt=yt.dataReady,Zt=M(b,tt);if(b.isDepthTexture)nt=v(b.format===Si,b.type),ft&&(ht?e.texStorage2D(i.TEXTURE_2D,1,nt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,nt,tt.width,tt.height,0,Mt,D,null));else if(b.isDataTexture)if(_t.length>0){ht&&ft&&e.texStorage2D(i.TEXTURE_2D,Zt,nt,_t[0].width,_t[0].height);for(let ut=0,lt=_t.length;ut<lt;ut++)J=_t[ut],ht?Dt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,J.width,J.height,Mt,D,J.data):e.texImage2D(i.TEXTURE_2D,ut,nt,J.width,J.height,0,Mt,D,J.data);b.generateMipmaps=!1}else ht?(ft&&e.texStorage2D(i.TEXTURE_2D,Zt,nt,tt.width,tt.height),Dt&&ke(b,tt,Mt,D)):e.texImage2D(i.TEXTURE_2D,0,nt,tt.width,tt.height,0,Mt,D,tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ht&&ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,nt,_t[0].width,_t[0].height,tt.depth);for(let ut=0,lt=_t.length;ut<lt;ut++)if(J=_t[ut],b.format!==Gn)if(Mt!==null)if(ht){if(Dt)if(b.layerUpdates.size>0){let Ht=Rc(J.width,J.height,b.format,b.type);for(let St of b.layerUpdates){let oe=J.data.subarray(St*Ht/J.data.BYTES_PER_ELEMENT,(St+1)*Ht/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,St,J.width,J.height,1,Mt,oe)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,tt.depth,Mt,J.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ut,nt,J.width,J.height,tt.depth,0,J.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?Dt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ut,0,0,0,J.width,J.height,tt.depth,Mt,D,J.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ut,nt,J.width,J.height,tt.depth,0,Mt,D,J.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{ht&&ft&&e.texStorage2D(i.TEXTURE_2D,Zt,nt,_t[0].width,_t[0].height);for(let ut=0,lt=_t.length;ut<lt;ut++)J=_t[ut],b.format!==Gn?Mt!==null?ht?Dt&&e.compressedTexSubImage2D(i.TEXTURE_2D,ut,0,0,J.width,J.height,Mt,J.data):e.compressedTexImage2D(i.TEXTURE_2D,ut,nt,J.width,J.height,0,J.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?Dt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,J.width,J.height,Mt,D,J.data):e.texImage2D(i.TEXTURE_2D,ut,nt,J.width,J.height,0,Mt,D,J.data)}else if(b.isDataArrayTexture)if(ht){if(ft&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,nt,tt.width,tt.height,tt.depth),Dt)if(b.layerUpdates.size>0){let ut=Rc(tt.width,tt.height,b.format,b.type);for(let lt of b.layerUpdates){let Ht=tt.data.subarray(lt*ut/tt.data.BYTES_PER_ELEMENT,(lt+1)*ut/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,tt.width,tt.height,1,Mt,D,Ht)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Mt,D,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,nt,tt.width,tt.height,tt.depth,0,Mt,D,tt.data);else if(b.isData3DTexture)ht?(ft&&e.texStorage3D(i.TEXTURE_3D,Zt,nt,tt.width,tt.height,tt.depth),Dt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Mt,D,tt.data)):e.texImage3D(i.TEXTURE_3D,0,nt,tt.width,tt.height,tt.depth,0,Mt,D,tt.data);else if(b.isFramebufferTexture){if(ft)if(ht)e.texStorage2D(i.TEXTURE_2D,Zt,nt,tt.width,tt.height);else{let ut=tt.width,lt=tt.height;for(let Ht=0;Ht<Zt;Ht++)e.texImage2D(i.TEXTURE_2D,Ht,nt,ut,lt,0,Mt,D,null),ut>>=1,lt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let ut=i.canvas;if(ut.hasAttribute("layoutsubtree")||ut.setAttribute("layoutsubtree","true"),tt.parentNode!==ut){ut.appendChild(tt),g.add(b),ut.onpaint=lt=>{let Ht=lt.changedElements;for(let St of g)Ht.includes(St.image)&&(St.needsUpdate=!0)},ut.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,tt);else{let Ht=i.RGBA,St=i.RGBA,oe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ht,St,oe,tt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(_t.length>0){if(ht&&ft){let ut=It(_t[0]);e.texStorage2D(i.TEXTURE_2D,Zt,nt,ut.width,ut.height)}for(let ut=0,lt=_t.length;ut<lt;ut++)J=_t[ut],ht?Dt&&e.texSubImage2D(i.TEXTURE_2D,ut,0,0,Mt,D,J):e.texImage2D(i.TEXTURE_2D,ut,nt,Mt,D,J);b.generateMipmaps=!1}else if(ht){if(ft){let ut=It(tt);e.texStorage2D(i.TEXTURE_2D,Zt,nt,ut.width,ut.height)}Dt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,D,tt)}else e.texImage2D(i.TEXTURE_2D,0,nt,Mt,D,tt);R(b)&&b.mipmapsAutoUpdate===!0&&E(rt),mt.__version=yt.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Je(A,b,W){if(b.image.length!==6)return;let rt=Qt(A,b),at=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);let yt=n.get(at);if(at.version!==yt.__version||rt===!0){e.activeTexture(i.TEXTURE0+W);let mt=he.getPrimaries(he.workingColorSpace),j=b.colorSpace===bi?null:he.getPrimaries(b.colorSpace),tt=b.colorSpace===bi||mt===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Mt=b.isCompressedTexture||b.image[0].isCompressedTexture,D=b.image[0]&&b.image[0].isDataTexture,nt=[];for(let St=0;St<6;St++)!Mt&&!D?nt[St]=y(b.image[St],!0,s.maxCubemapSize):nt[St]=D?b.image[St].image:b.image[St],nt[St]=zt(b,nt[St]);let J=nt[0],_t=r.convert(b.format,b.colorSpace),ht=r.convert(b.type),ft=C(b.internalFormat,_t,ht,b.normalized,b.colorSpace),Dt=b.isVideoTexture!==!0,Zt=yt.__version===void 0||rt===!0,ut=at.dataReady,lt=M(b,J);ae(i.TEXTURE_CUBE_MAP,b);let Ht;if(b.isDepthTexture){if(ft=v(b.format===Si,b.type),Zt)if(Dt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ft,J.width,J.height);else for(let St=0;St<6;St++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ft,J.width,J.height,0,_t,ht,null)}else if(Mt){Dt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,ft,J.width,J.height);for(let St=0;St<6;St++){Ht=nt[St].mipmaps;for(let oe=0;oe<Ht.length;oe++){let ye=Ht[oe];b.format!==Gn?_t!==null?Dt?ut&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe,0,0,ye.width,ye.height,_t,ye.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe,ft,ye.width,ye.height,0,ye.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe,0,0,ye.width,ye.height,_t,ht,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe,ft,ye.width,ye.height,0,_t,ht,ye.data)}}}else{if(Ht=b.mipmaps,Dt&&Zt){Ht.length>0&&lt++;let St=It(nt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,ft,St.width,St.height)}for(let St=0;St<6;St++)if(D){Dt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,nt[St].width,nt[St].height,_t,ht,nt[St].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ft,nt[St].width,nt[St].height,0,_t,ht,nt[St].data);for(let oe=0;oe<Ht.length;oe++){let Ke=Ht[oe].image[St].image;Dt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe+1,0,0,Ke.width,Ke.height,_t,ht,Ke.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe+1,ft,Ke.width,Ke.height,0,_t,ht,Ke.data)}}else{Dt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,_t,ht,nt[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ft,_t,ht,nt[St]);for(let oe=0;oe<Ht.length;oe++){let ye=Ht[oe];Dt?ut&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe+1,0,0,_t,ht,ye.image[St]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+St,oe+1,ft,_t,ht,ye.image[St])}}}R(b)&&b.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),yt.__version=at.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function xe(A,b,W,rt,at,yt){let mt=r.convert(W.format,W.colorSpace),j=r.convert(W.type),tt=C(W.internalFormat,mt,j,W.normalized,W.colorSpace),Mt=n.get(b),D=n.get(W);if(D.__renderTarget=b,!Mt.__hasExternalTextures){let nt=Math.max(1,b.width>>yt),J=Math.max(1,b.height>>yt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,yt,tt,nt,J,b.depth,0,mt,j,null):e.texImage2D(at,yt,tt,nt,J,0,mt,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),xt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,at,D.__webglTexture,0,be(b)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,at,D.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function me(A,b,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){let rt=b.depthTexture,at=rt&&rt.isDepthTexture?rt.type:null,yt=v(b.stencilBuffer,at),mt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be(b),yt,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,be(b),yt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,yt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,A)}else{let rt=b.textures;for(let at=0;at<rt.length;at++){let yt=rt[at],mt=r.convert(yt.format,yt.colorSpace),j=r.convert(yt.type),tt=C(yt.internalFormat,mt,j,yt.normalized,yt.colorSpace);xt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be(b),tt,b.width,b.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,be(b),tt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,tt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ue(A,b,W){let rt=b.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=n.get(b.depthTexture);at.__renderTarget=b;let yt=rt?b.depthTexture.image[0]:b.depthTexture.image;(!at.__webglTexture||yt.width!==b.width||yt.height!==b.height)&&(yt.width=b.width,yt.height=b.height,b.depthTexture.needsUpdate=!0),rt?gt(b.depthTexture,0):bt(b.depthTexture,0);let mt=at.__webglTexture,j=be(b),tt=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,Mt=b.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===mi)xt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,tt,mt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,tt,mt,0);else if(b.depthTexture.format===Si)xt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Mt,tt,mt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,Mt,tt,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Le(A){let b=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let rt=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),rt){let at=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,rt.removeEventListener("dispose",at)};rt.addEventListener("dispose",at),b.__depthDisposeCallback=at}b.__boundDepthTexture=rt}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let rt=0;rt<6;rt++)Ue(b.__webglFramebuffer[rt],A,rt);else A.texture.mipmaps.length>0?Ue(b.__webglFramebuffer[0],A,0):Ue(b.__webglFramebuffer,A,0);else if(W){b.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[rt]),b.__webglDepthbuffer[rt]===void 0)b.__webglDepthbuffer[rt]=i.createRenderbuffer(),me(b.__webglDepthbuffer[rt],A,!1);else{let at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=b.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,yt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),me(b.__webglDepthbuffer,A,!1);else{let at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,yt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(A,b,W){let rt=n.get(A);b!==void 0&&xe(rt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Le(A)}function Fe(A){let b=A.texture,W=n.get(A),rt=n.get(b);A.addEventListener("dispose",U),B(A);let at=A.textures,yt=A.isWebGLCubeRenderTarget===!0,mt=at.length>1;if(mt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=b.version,a.memory.textures++),yt){W.__webglFramebuffer=[];for(let j=0;j<6;j++)if(b.mipmaps.length>0){W.__webglFramebuffer[j]=[];for(let tt=0;tt<b.mipmaps.length;tt++)W.__webglFramebuffer[j][tt]=i.createFramebuffer()}else W.__webglFramebuffer[j]=i.createFramebuffer()}else{if(b.mipmaps.length>0){W.__webglFramebuffer=[];for(let j=0;j<b.mipmaps.length;j++)W.__webglFramebuffer[j]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(mt)for(let j=0,tt=at.length;j<tt;j++){let Mt=n.get(at[j]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&xt(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let j=0;j<at.length;j++){let tt=at[j];W.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[j]);let Mt=r.convert(tt.format,tt.colorSpace),D=r.convert(tt.type),nt=C(tt.internalFormat,Mt,D,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),J=be(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,J,nt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,W.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),me(W.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),ae(i.TEXTURE_CUBE_MAP,b);for(let j=0;j<6;j++)if(b.mipmaps.length>0)for(let tt=0;tt<b.mipmaps.length;tt++)xe(W.__webglFramebuffer[j][tt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,tt);else xe(W.__webglFramebuffer[j],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);R(b)?E(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let j=0,tt=at.length;j<tt;j++){let Mt=at[j],D=n.get(Mt),nt=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(nt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,D.__webglTexture),ae(nt,Mt),xe(W.__webglFramebuffer,A,Mt,i.COLOR_ATTACHMENT0+j,nt,0),R(Mt)&&E(nt)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,rt.__webglTexture),ae(j,b),b.mipmaps.length>0)for(let tt=0;tt<b.mipmaps.length;tt++)xe(W.__webglFramebuffer[tt],A,b,i.COLOR_ATTACHMENT0,j,tt);else xe(W.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,j,0);R(b)?E(j):b.mipmaps.length>0&&i.texParameteri(j,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&Le(A)}function z(A){let b=A.textures;for(let W=0,rt=b.length;W<rt;W++){let at=b[W];if(R(at)&&at.mipmapsAutoUpdate===!0){let yt=P(A),mt=n.get(at).__webglTexture;e.bindTexture(yt,mt),E(yt),e.unbindTexture()}}}let Xe=[];function ve(A){if(A.samples>0){if(xt(A)===!1){let b=A.textures,W=A.width,rt=A.height,at=i.COLOR_BUFFER_BIT,yt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(A),j=b.length>1;if(j)for(let Mt=0;Mt<b.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let Mt=0;Mt<b.length;Mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[Mt]);let D=n.get(b[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,W,rt,0,0,W,rt,at,i.NEAREST),l===!0&&(Xe.length=0,Xe.push(i.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&Xe.push(yt),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let Mt=0;Mt<b.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[Mt]);let D=n.get(b[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,D,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function be(A){return Math.min(s.maxSamples,A.samples)}function xt(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Re(A){let b=a.render.frame;m.get(A)!==b&&(m.set(A,b),A.update())}function zt(A,b){let W=A.colorSpace,rt=A.format,at=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==hr&&W!==bi&&(he.getTransfer(W)===_e?(rt!==Gn||at!==vn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",W)),b}function It(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Xt,this.resetTextureUnits=ot,this.getTextureUnits=ct,this.setTextureUnits=Lt,this.setTexture2D=bt,this.setTexture2DArray=wt,this.setTexture3D=Ft,this.setTextureCube=gt,this.rebindTextures=Qe,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=xt,this.dispose=Y}function vx(i,t){function e(n,s=bi){let r,a=he.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===Mo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===So)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pc)return i.BYTE;if(n===mc)return i.SHORT;if(n===qs)return i.UNSIGNED_SHORT;if(n===yo)return i.INT;if(n===kn)return i.UNSIGNED_INT;if(n===Ln)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===_c)return i.ALPHA;if(n===vc)return i.RGB;if(n===Gn)return i.RGBA;if(n===mi)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===Ys)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===zi)return i.RG;if(n===To)return i.RG_INTEGER;if(n===wo)return i.RGBA_INTEGER;if(n===Or||n===Br||n===kr||n===zr)if(a===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===Ao||n===Co||n===Ro)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Io||n===Po||n===Lo||n===No||n===Do||n===Gr||n===Uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Io||n===Po)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===No)return r.COMPRESSED_R11_EAC;if(n===Do)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gr)return r.COMPRESSED_RG11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fo||n===Oo||n===Bo||n===ko||n===zo||n===Go||n===Vo||n===Ho||n===Wo||n===Xo||n===qo||n===Yo||n===$o||n===Zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ko)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Go)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ho)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$o)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===Ko||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jo)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===tl||n===Vr||n===el)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var yx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mx=`
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

}`,Hc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new br(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new gn({vertexShader:yx,fragmentShader:Mx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new Di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wc=class extends Jn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,m=null,g=null,d=null,u=null,f=null,_=typeof XRWebGLBinding<"u",x=new Hc,p={},y=e.getContextAttributes(),R=null,E=null,P=[],C=[],v=new jt,M=null,B=null,N=new ln;N.viewport=new Ie;let O=new ln;O.viewport=new Ie;let U=[N,O],V=new mo,L=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let bt=P[it];return bt===void 0&&(bt=new Os,P[it]=bt),bt.getTargetRaySpace()},this.getControllerGrip=function(it){let bt=P[it];return bt===void 0&&(bt=new Os,P[it]=bt),bt.getGripSpace()},this.getHand=function(it){let bt=P[it];return bt===void 0&&(bt=new Os,P[it]=bt),bt.getHandSpace()};function K(it){let bt=C.indexOf(it.inputSource);if(bt===-1)return;let wt=P[bt];wt!==void 0&&(wt.update(it.inputSource,it.frame,c||a),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function $(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",dt);for(let it=0;it<P.length;it++){let bt=C[it];bt!==null&&(C[it]=null,P[it].disconnect(bt))}L=null,Y=null,x.reset();for(let it in p)delete p[it];if(t.setRenderTarget(R),u=null,d=null,g=null,s=null,E=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(M),t.setSize(v.width,v.height,!1),B!==null){let it=B.camera;it.fov=B.fov,it.zoom=B.zoom,it.updateProjectionMatrix(),B=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return g===null&&_&&(g=new XRWebGLBinding(s,e)),g},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",$),s.addEventListener("inputsourceschange",dt),y.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(v),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ft=null,gt=null;y.depth&&(gt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=y.stencil?Si:mi,Ft=y.stencil?rs:kn);let qt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};g=this.getBinding(),d=g.createProjectionLayer(qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),E=new Sn(d.textureWidth,d.textureHeight,{format:Gn,type:vn,depthTexture:new _i(d.textureWidth,d.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let wt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new Sn(u.framebufferWidth,u.framebufferHeight,{format:Gn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function dt(it){for(let bt=0;bt<it.removed.length;bt++){let wt=it.removed[bt],Ft=C.indexOf(wt);Ft>=0&&(C[Ft]=null,P[Ft].disconnect(wt))}for(let bt=0;bt<it.added.length;bt++){let wt=it.added[bt],Ft=C.indexOf(wt);if(Ft===-1){for(let qt=0;qt<P.length;qt++)if(qt>=C.length){C.push(wt),Ft=qt;break}else if(C[qt]===null){C[qt]=wt,Ft=qt;break}if(Ft===-1)break}let gt=P[Ft];gt&&gt.connect(wt)}}function Q(it,bt){bt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(bt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let bt=it.near,wt=it.far;x.texture!==null&&(x.depthNear>0&&(bt=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),V.near=O.near=N.near=bt,V.far=O.far=N.far=wt,(L!==V.near||Y!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),L=V.near,Y=V.far),V.layers.mask=it.layers.mask|6,N.layers.mask=V.layers.mask&-5,O.layers.mask=V.layers.mask&-3;let Ft=it.parent,gt=V.cameras;Q(V,Ft);for(let qt=0;qt<gt.length;qt++)Q(gt[qt],Ft);V.projectionMatrix.copy(N.projectionMatrix),V.projectionMatrixInverse.copy(N.projectionMatrixInverse),B===null&&it.isPerspectiveCamera&&(B={camera:it,fov:it.fov,zoom:it.zoom}),ot(it,V,Ft)};function ot(it,bt,wt){wt===null?it.matrix.copy(bt.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(bt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(bt.projectionMatrix),it.projectionMatrixInverse.copy(bt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Ya*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(it){l=it,d!==null&&(d.fixedFoveation=it),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=it)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(V)},this.getCameraTexture=function(it){return p[it]};let ct=null;function Lt(it,bt){if(m=bt.getViewerPose(c||a),f=bt,m!==null){let wt=m.views;u!==null&&(t.setRenderTargetFramebuffer(E,u.framebuffer),t.setRenderTarget(E));let Ft=!1;wt.length!==V.cameras.length&&(V.cameras.length=0,Ft=!0);for(let kt=0;kt<wt.length;kt++){let ae=wt[kt],Qt=null;if(u!==null)Qt=u.getViewport(ae);else{let ke=g.getViewSubImage(d,ae);Qt=ke.viewport,kt===0&&(t.setRenderTargetTextures(E,ke.colorTexture,ke.depthStencilTexture),t.setRenderTarget(E))}let te=U[kt];te===void 0&&(te=new ln,te.layers.enable(kt),te.viewport=new Ie,U[kt]=te),te.matrix.fromArray(ae.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(ae.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),kt===0&&(V.matrix.copy(te.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Ft===!0&&V.cameras.push(te)}let gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){g=n.getBinding();let kt=g.getDepthInformation(wt[0]);kt&&kt.isValid&&kt.texture&&x.init(kt,s.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),g=n.getBinding();for(let kt=0;kt<wt.length;kt++){let ae=wt[kt].camera;if(ae){let Qt=p[ae];Qt||(Qt=new br,p[ae]=Qt);let te=g.getCameraImage(ae);Qt.sourceTexture=te}}}}for(let wt=0;wt<P.length;wt++){let Ft=C[wt],gt=P[wt];Ft!==null&&gt!==void 0&&gt.update(Ft,bt,c||a)}ct&&ct(it,bt),bt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:bt}),f=null}let Xt=new Yu;Xt.setAnimationLoop(Lt),this.setAnimationLoop=function(it){ct=it},this.dispose=function(){}}},Sx=new pe,id=new $t;id.set(-1,0,0,0,1,0,0,0,1);function bx(i,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Ec(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,y,R,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(x,p):p.isMeshLambertMaterial?(r(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(x,p),g(x,p)):p.isMeshPhongMaterial?(r(x,p),m(x,p),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(x,p),d(x,p),p.isMeshPhysicalMaterial&&u(x,p,E)):p.isMeshMatcapMaterial?(r(x,p),f(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),_(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?l(x,p,y,R):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===en&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===en&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let y=t.get(p),R=y.envMap,E=y.envMapRotation;R&&(x.envMap.value=R,x.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(E)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(id),x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,y,R){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=R*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function m(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function g(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function u(x,p,y){x.ior.value=p.ior,p.diffuseRoughness>0&&(x.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.retroreflectivity>0&&(x.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function f(x,p){p.matcap&&(x.matcap.value=p.matcap)}function _(x,p){let y=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Tx(i,t,e,n){let s={},r={};function a(y,R){let E=R.program;n.uniformBlockBinding(y,E,s[y.id])}function o(y,R){let E=s[y.id];E===void 0&&(f(y),E=l(y),s[y.id]=E,y.addEventListener("dispose",x));let P=R.program;n.updateUBOMapping(y,P);let C=t.render.frame;r[y.id]!==C&&(c(y),r[y.id]=C)}function l(y){let R=i.createBuffer(),E=y.__size,P=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,E,P),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function c(y){let R=s[y.id],E=y.uniforms,P=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let C=0,v=E.length;C<v;C++){let M=E[C];if(Array.isArray(M))for(let B=0,N=M.length;B<N;B++)m(M[B],C,B,P);else m(M,C,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,R,E,P){if(d(y,R,E,P)===!0){let C=y.__offset,v=y.value;if(Array.isArray(v)){let M=0;for(let B=0;B<v.length;B++){let N=v[B],O=_(N,!0);g(N,y.__data,M),M+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else g(v,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,C,y.__data)}}function g(y,R,E){typeof y=="number"||typeof y=="boolean"?R[E]=y:y.isMatrix3?(R[E]=y.elements[0],R[E+1]=y.elements[1],R[E+2]=y.elements[2],R[E+3]=0,R[E+4]=y.elements[3],R[E+5]=y.elements[4],R[E+6]=y.elements[5],R[E+7]=0,R[E+8]=y.elements[6],R[E+9]=y.elements[7],R[E+10]=y.elements[8],R[E+11]=0):ArrayBuffer.isView(y)?R.set(y.subarray(0,R.length-E),E):y.toArray(R,E)}function d(y,R,E,P){let C=y.value,v=R+"_"+E;if(Array.isArray(C)){P[v]===void 0&&(P[v]=[]);let M=P[v],B=!1;for(let N=0;N<C.length;N++)u(C[N],M,N)===!0&&(B=!0);return B}return u(C,P,v)}function u(y,R,E){if(R[E]===void 0)return typeof y=="number"||typeof y=="boolean"?R[E]=y:ArrayBuffer.isView(y)?R[E]=y.slice():R[E]=y.clone(),!0;{let P=R[E];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return R[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function f(y){let R=y.uniforms,E=0,P=16;for(let v=0,M=R.length;v<M;v++){let B=Array.isArray(R[v])?R[v]:[R[v]];for(let N=0,O=B.length;N<O;N++){let U=B[N],V=Array.isArray(U.value)?U.value:[U.value],L=Array.isArray(R[v])||Array.isArray(U.value),Y=E;for(let $=0,dt=V.length;$<dt;$++){let Q=V[$],ot=_(Q,L),ct=E%P,Lt=ct%ot.boundary,Xt=ct+Lt;E+=Lt,Xt!==0&&P-Xt<ot.storage&&(E+=P-Xt),$===0&&(Y=E),E+=ot.storage}let K=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new K((E-Y)/Float32Array.BYTES_PER_ELEMENT),U.__offset=Y}}let C=E%P;return C>0&&(E+=P-C),y.__size=E,y.__cache={},this}function _(y,R){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=16,E.storage=48):y.isMatrix4?(E.boundary=16,E.storage=64):y.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",y),R===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function x(y){let R=y.target;R.removeEventListener("dispose",x),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:p}}var wx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function Ex(){return ti===null&&(ti=new ts(wx,16,16,zi,zn),ti.name="DFG_LUT",ti.minFilter=pn,ti.magFilter=pn,ti.wrapS=Zn,ti.wrapT=Zn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var al=class{constructor(t={}){let{canvas:e=xu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:d=!1,outputBufferType:u=vn}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let _=u,x=new Set([wo,To,bo]),p=new Set([vn,kn,qs,rs,Mo,So]),y=new Uint32Array(4),R=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]},P=null,C=null,v=[],M=[],B=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,O=!1,U=null,V=null,L=null,Y=null;this._outputColorSpace=tn;let K=0,$=0,dt=null,Q=-1,ot=null,ct=new Ie,Lt=new Ie,Xt=null,it=new Bt(0),bt=0,wt=e.width,Ft=e.height,gt=1,qt=null,Se=null,kt=new Ie(0,0,wt,Ft),ae=new Ie(0,0,wt,Ft),Qt=!1,te=new Ni,ke=new Ka,De=!1,Je=!1,xe=new pe,me=new H,Ue=new Ie,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function Fe(){return dt===null?gt:1}let z=n;function Xe(h,S){return e.getContext(h,S)}let ve,be,xt,Re,zt,It,A,b,W,rt,at,yt,mt,j,tt,Mt,D,nt,J,_t,ht,ft,Dt;try{let h={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Ht,!1),e.addEventListener("webglcontextcreationerror",St,!1),z===null){let S="webgl2";if(z=Xe(S,h),z===null)throw Xe(S)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(h){throw e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",St,!1),Yt("WebGLRenderer: "+h.message),h}function Zt(){ve=new O0(z),ve.init(),ht=new vx(z,ve),be=new E0(z,ve,t,ht),xt=new xx(z,ve),be.reversedDepthBuffer&&d&&xt.buffers.depth.setReversed(!0),V=z.createFramebuffer(),L=z.createFramebuffer(),Y=z.createFramebuffer(),Re=new z0(z),zt=new ix,It=new _x(z,ve,xt,zt,be,ht,Re),A=new F0(N),b=new Vf(z),ft=new T0(z,b),W=new B0(z,b,Re,ft),rt=new V0(z,W,b,ft,Re),nt=new G0(z,be,It),tt=new A0(zt),at=new nx(N,A,ve,be,ft,tt),yt=new bx(N,zt),mt=new rx,j=new ux(ve),D=new b0(N,A,xt,rt,f,l),Mt=new gx(N,rt,be),Dt=new Tx(z,Re,be,xt),J=new w0(z,ve,Re),_t=new k0(z,ve,Re),Re.programs=at.programs,N.capabilities=be,N.extensions=ve,N.properties=zt,N.renderLists=mt,N.shadowMap=Mt,N.state=xt,N.info=Re}_!==vn&&(B=new W0(_,e.width,e.height,o,s,r));let ut=new Wc(N,z);this.xr=ut,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let h=ve.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){let h=ve.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(h){h!==void 0&&(gt=h,this.setSize(wt,Ft,!1))},this.getSize=function(h){return h.set(wt,Ft)},this.setSize=function(h,S,T=!0){if(ut.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=h,Ft=S,e.width=Math.floor(h*gt),e.height=Math.floor(S*gt),T===!0&&(e.style.width=h+"px",e.style.height=S+"px"),B!==null&&B.setSize(e.width,e.height),this.setViewport(0,0,h,S)},this.getDrawingBufferSize=function(h){return h.set(wt*gt,Ft*gt).floor()},this.setDrawingBufferSize=function(h,S,T){wt=h,Ft=S,gt=T,e.width=Math.floor(h*T),e.height=Math.floor(S*T),this.setViewport(0,0,h,S)},this.setEffects=function(h){if(_===vn){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(h){for(let S=0;S<h.length;S++)if(h[S].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(h||[])},this.getCurrentViewport=function(h){return h.copy(ct)},this.getViewport=function(h){return h.copy(kt)},this.setViewport=function(h,S,T,I){h.isVector4?kt.set(h.x,h.y,h.z,h.w):kt.set(h,S,T,I),xt.viewport(ct.copy(kt).multiplyScalar(Fe()).round())},this.getScissor=function(h){return h.copy(ae)},this.setScissor=function(h,S,T,I){h.isVector4?ae.set(h.x,h.y,h.z,h.w):ae.set(h,S,T,I),xt.scissor(Lt.copy(ae).multiplyScalar(Fe()).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(h){xt.setScissorTest(Qt=h)},this.setOpaqueSort=function(h){qt=h},this.setTransparentSort=function(h){Se=h},this.getClearColor=function(h){return h.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(h=!0,S=!0,T=!0){let I=0;if(h){let w=!1;if(dt!==null){let k=dt.texture.format;w=x.has(k)}if(w){let k=dt.texture.type,et=p.has(k),F=D.getClearColor(),q=D.getClearAlpha(),Z=F.r,st=F.g,pt=F.b;et?(y[0]=Z,y[1]=st,y[2]=pt,y[3]=q,z.clearBufferuiv(z.COLOR,0,y)):(R[0]=Z,R[1]=st,R[2]=pt,R[3]=q,z.clearBufferiv(z.COLOR,0,R))}else I|=z.COLOR_BUFFER_BIT}S&&(I|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),T&&(I|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I!==0&&z.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(h){h.setRenderer(this),U=h},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Ht,!1),e.removeEventListener("webglcontextcreationerror",St,!1),D.dispose(),mt.dispose(),j.dispose(),It.dispose(),zt.dispose(),A.dispose(),rt.dispose(),W.dispose(),ft.dispose(),Dt.dispose(),at.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Qs),ut.removeEventListener("sessionend",se),wn.stop()};function lt(h){h.preventDefault(),Tc("WebGLRenderer: Context Lost."),O=!0}function Ht(){Tc("WebGLRenderer: Context Restored."),O=!1;let h=Re.autoReset,S=Mt.enabled,T=Mt.autoUpdate,I=Mt.needsUpdate,w=Mt.type;Zt(),Re.autoReset=h,Mt.enabled=S,Mt.autoUpdate=T,Mt.needsUpdate=I,Mt.type=w}function St(h){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function oe(h){let S=h.target;S.removeEventListener("dispose",oe),ye(S)}function ye(h){Ke(h),zt.remove(h)}function Ke(h){let S=zt.get(h).programs;S!==void 0&&(S.forEach(function(T){at.releaseProgram(T)}),h.isShaderMaterial&&at.releaseShaderCache(h))}this.renderBufferDirect=function(h,S,T,I,w,k){S===null&&(S=Le);let et=w.isMesh&&w.matrixWorld.determinantAffine()<0,F=ca(h,S,T,I,w);xt.setMaterial(I,et);let q=T.index,Z=1;if(I.wireframe===!0){if(q=W.getWireframeAttribute(T),q===void 0)return;Z=2}let st=T.drawRange,pt=T.attributes.position,Et=st.start*Z,Jt=(st.start+st.count)*Z;k!==null&&(Et=Math.max(Et,k.start*Z),Jt=Math.min(Jt,(k.start+k.count)*Z)),q!==null?(Et=Math.max(Et,0),Jt=Math.min(Jt,q.count)):pt!=null&&(Et=Math.max(Et,0),Jt=Math.min(Jt,pt.count));let Te=Jt-Et;if(Te<0||Te===1/0)return;ft.setup(w,I,F,T,q);let ee,fe=J;if(q!==null&&(ee=b.get(q),fe=_t,fe.setIndex(ee)),w.isMesh)I.wireframe===!0?(xt.setLineWidth(I.wireframeLinewidth*Fe()),fe.setMode(z.LINES)):fe.setMode(z.TRIANGLES);else if(w.isLine){let le=I.linewidth;le===void 0&&(le=1),xt.setLineWidth(le*Fe()),w.isLineSegments?fe.setMode(z.LINES):w.isLineLoop?fe.setMode(z.LINE_LOOP):fe.setMode(z.LINE_STRIP)}else w.isPoints?fe.setMode(z.POINTS):w.isSprite&&fe.setMode(z.TRIANGLES);if(w.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))fe.renderMultiDraw(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount);else{let le=w._multiDrawStarts,Rt=w._multiDrawCounts,ze=w._multiDrawCount,Kt=q?b.get(q).bytesPerElement:1,Ae=zt.get(I).currentProgram.getUniforms();for(let we=0;we<ze;we++)Ae.setValue(z,"_gl_DrawID",we),fe.render(le[we]/Kt,Rt[we])}else if(w.isInstancedMesh)fe.renderInstances(Et,Te,w.count);else if(T.isInstancedBufferGeometry){let le=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,Rt=Math.min(T.instanceCount,le);fe.renderInstances(Et,Te,Rt)}else fe.render(Et,Te)};function us(h,S,T,I){U!==null&&h.isNodeMaterial&&U.setObject(I,h),De===!0&&tt.setState(h,T,!1),h.transparent===!0&&h.side===nn&&h.forceSinglePass===!1?(h.side=en,h.needsUpdate=!0,Yn(h,S,I),h.side=Bi,h.needsUpdate=!0,Yn(h,S,I),h.side=nn):Yn(h,S,I)}this.compile=function(h,S,T=null){T===null&&(T=h),U!==null&&U.renderStart(h,S,T),C=j.get(T),C.init(S),M.push(C),T.traverseVisible(function(w){w.isLight&&w.layers.test(S.layers)&&(C.pushLight(w),w.castShadow&&C.pushShadow(w))}),h!==T&&h.traverseVisible(function(w){w.isLight&&w.layers.test(S.layers)&&(C.pushLight(w),w.castShadow&&C.pushShadow(w))}),C.setupLights(),U!==null&&U.updateLights(C.state.lightsArray),Je=this.localClippingEnabled,De=tt.init(this.clippingPlanes,Je),De===!0&&tt.setGlobalState(this.clippingPlanes,S),U!==null&&Mt.render(C.state.shadowsArray,T,S);let I=new Set;return h.traverse(function(w){if(!(w.isMesh||w.isPoints||w.isLine||w.isSprite))return;let k=w.material;if(k)if(Array.isArray(k))for(let et=0;et<k.length;et++){let F=k[et];us(F,T,S,w),I.add(F)}else us(k,T,S,w),I.add(k)}),C=M.pop(),U!==null&&U.renderEnd(),I},this.compileAsync=function(h,S,T=null){let I=this.compile(h,S,T);return new Promise(w=>{function k(){if(I.forEach(function(et){let q=zt.get(et).currentProgram;(q===void 0||q.isReady())&&I.delete(et)}),I.size===0){w(h);return}setTimeout(k,10)}ve.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let ds=null;function aa(h){ds&&ds(h)}function Qs(){wn.stop()}function se(){wn.start()}let wn=new Yu;wn.setAnimationLoop(aa),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(h){ds=h,ut.setAnimationLoop(h),h===null?wn.stop():wn.start()},ut.addEventListener("sessionstart",Qs),ut.addEventListener("sessionend",se),this.render=function(h,S){if(S!==void 0&&S.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;U!==null&&U.renderStart(h,S);let T=ut.enabled===!0&&ut.isPresenting===!0,I=B!==null&&(dt===null||T)&&B.begin(N,dt);if(h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(S),S=ut.getCamera()),h.isScene===!0&&h.onBeforeRender(N,h,S,dt),C=j.get(h,M.length),C.init(S),C.state.textureUnits=It.getTextureUnits(),M.push(C),xe.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),S.isArrayCamera?ke.setFromArrayCamera(S):te.setFromProjectionMatrix(xe,An,S.reversedDepth),Je=this.localClippingEnabled,De=tt.init(this.clippingPlanes,Je),P=mt.get(h,v.length),P.init(),v.push(P),this.info.render.frame++,ut.enabled===!0&&ut.isPresenting===!0){let et=N.xr.getDepthSensingMesh();et!==null&&fs(et,S,-1/0,N.sortObjects)}fs(h,S,0,N.sortObjects),P.finish(),U!==null&&U.updateLights(C.state.lightsArray),N.sortObjects===!0&&P.sort(qt,Se),Qe=ut.enabled===!1||ut.isPresenting===!1||ut.hasDepthSensing()===!1,Qe&&D.addToRenderList(P,h),this.info.autoReset===!0&&this.info.reset(),De===!0&&tt.beginShadows();let w=C.state.shadowsArray;if(Mt.render(w,h,S),De===!0&&tt.endShadows(),(I&&B.hasRenderPass())===!1){let et=P.opaque,F=P.transmissive;if(C.setupLights(),S.isArrayCamera){let q=S.cameras;if(F.length>0)for(let Z=0,st=q.length;Z<st;Z++){let pt=q[Z];qi(et,F,h,pt)}Qe&&D.render(h);for(let Z=0,st=q.length;Z<st;Z++){let pt=q[Z];ps(P,h,pt,pt.viewport)}}else F.length>0&&qi(et,F,h,S),Qe&&D.render(h),ps(P,h,S)}dt!==null&&$===0&&(It.updateMultisampleRenderTarget(dt),It.updateRenderTargetMipmap(dt)),I&&B.end(N),h.isScene===!0&&h.onAfterRender(N,h,S),ft.resetDefaultState(),Q=-1,ot=null,M.pop(),M.length>0?(C=M[M.length-1],It.setTextureUnits(C.state.textureUnits),De===!0&&tt.setGlobalState(N.clippingPlanes,C.state.camera)):C=null,v.pop(),v.length>0?P=v[v.length-1]:P=null,U!==null&&U.renderEnd()};function fs(h,S,T,I){if(h.visible===!1)return;if(h.layers.test(S.layers)){if(h.isGroup)T=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(S);else if(h.isLight)C.pushLight(h),h.castShadow&&C.pushShadow(h);else if(h.isSprite){let et=S.isArrayCamera?ke:te;if(!h.frustumCulled||h.intersectsFrustum(et)){I&&Ue.setFromMatrixPosition(h.matrixWorld).applyMatrix4(xe);let F=rt.update(h),q=h.material;q.visible&&P.push(h,F,q,T,Ue.z,null,S)}}else if(h.isMesh||h.isLine||h.isPoints){let et=S.isArrayCamera?ke:te;if(!h.frustumCulled||h.intersectsFrustum(et)){let F=rt.update(h),q=h.material;if(I&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),Ue.copy(h.boundingSphere.center)):(F.boundingSphere===null&&F.computeBoundingSphere(),Ue.copy(F.boundingSphere.center)),Ue.applyMatrix4(h.matrixWorld).applyMatrix4(xe)),Array.isArray(q)){let Z=F.groups;for(let st=0,pt=Z.length;st<pt;st++){let Et=Z[st],Jt=q[Et.materialIndex];Jt&&Jt.visible&&P.push(h,F,Jt,T,Ue.z,Et,S)}}else q.visible&&P.push(h,F,q,T,Ue.z,null,S)}}}let k=h.children;for(let et=0,F=k.length;et<F;et++)fs(k[et],S,T,I)}function ps(h,S,T,I){let{opaque:w,transmissive:k,transparent:et}=h;C.setupLightsView(T),De===!0&&tt.setGlobalState(N.clippingPlanes,T),I&&xt.viewport(ct.copy(I)),w.length>0&&ms(w,S,T),k.length>0&&ms(k,S,T),et.length>0&&ms(et,S,T),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function qi(h,S,T,I){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[I.id]===void 0){let Et=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[I.id]=new Sn(1,1,{generateMipmaps:!0,type:Et?zn:vn,minFilter:Mi,samples:Math.max(4,be.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}let k=C.state.transmissionRenderTarget[I.id],et=I.viewport||ct;k.setSize(et.z*N.transmissionResolutionScale,et.w*N.transmissionResolutionScale);let F=N.getRenderTarget(),q=N.getActiveCubeFace(),Z=N.getActiveMipmapLevel();N.setRenderTarget(k),N.getClearColor(it),bt=N.getClearAlpha(),bt<1&&N.setClearColor(16777215,.5),N.clear(),Qe&&D.render(T);let st=N.toneMapping;N.toneMapping=Qn;let pt=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),C.setupLightsView(I),De===!0&&tt.setGlobalState(N.clippingPlanes,I),ms(h,T,I),It.updateMultisampleRenderTarget(k),It.updateRenderTargetMipmap(k),ve.has("WEBGL_multisampled_render_to_texture")===!1){let Et=!1;for(let Jt=0,Te=S.length;Jt<Te;Jt++){let ee=S[Jt],{object:fe,geometry:le,material:Rt,group:ze}=ee;if(Rt.side===nn&&fe.layers.test(I.layers)){let Kt=Rt.side;Rt.side=en,Rt.needsUpdate=!0,Ei(fe,T,I,le,Rt,ze),Rt.side=Kt,Rt.needsUpdate=!0,Et=!0}}Et===!0&&(It.updateMultisampleRenderTarget(k),It.updateRenderTargetMipmap(k))}N.setRenderTarget(F,q,Z),N.setClearColor(it,bt),pt!==void 0&&(I.viewport=pt),N.toneMapping=st}function ms(h,S,T){let I=S.isScene===!0?S.overrideMaterial:null;for(let w=0,k=h.length;w<k;w++){let et=h[w],{object:F,geometry:q,group:Z}=et,st=et.material;st.allowOverride===!0&&I!==null&&(st=I),F.layers.test(T.layers)&&Ei(F,S,T,q,st,Z)}}function Ei(h,S,T,I,w,k){U!==null&&w.isNodeMaterial&&U.setObject(h,w),h.onBeforeRender(N,S,T,I,w,k),h.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),w.onBeforeRender(N,S,T,I,h,k),w.transparent===!0&&w.side===nn&&w.forceSinglePass===!1?(w.side=en,w.needsUpdate=!0,N.renderBufferDirect(T,S,I,w,h,k),w.side=Bi,w.needsUpdate=!0,N.renderBufferDirect(T,S,I,w,h,k),w.side=nn):N.renderBufferDirect(T,S,I,w,h,k),h.onAfterRender(N,S,T,I,w,k)}function oa(h){let S=0;for(let T of h)T.texture!==null&&S++;return S}function Yn(h,S,T){S.isScene!==!0&&(S=Le);let I=zt.get(h),w=C.state.lights,k=C.state.shadowsArray,et=w.state.version,F=at.getParameters(h,w.state,k,S,T,C.state.lightProbeGridArray),q=at.getProgramCacheKey(F),Z=I.programs;I.environment=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?S.environment:null,I.fog=S.fog;let st=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap;I.envMap=A.get(h.envMap||I.environment,st),I.envMapRotation=I.environment!==null&&h.envMap===null?S.environmentRotation:h.envMapRotation,Z===void 0&&(h.addEventListener("dispose",oe),Z=new Map,I.programs=Z,I.programVariants=new Map);let pt=Z.get(q);if(pt!==void 0){if(I.currentProgram===pt&&I.lightsStateVersion===et)return la(h,F),pt}else F.uniforms=at.getUniforms(h),U!==null&&h.isNodeMaterial&&U.build(h,T,F),h.onBeforeCompile(F,N),pt=at.acquireProgram(F,q),Z.set(q,pt),I.uniforms=F.uniforms;let Et=I.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(Et.clippingPlanes=tt.uniform),la(h,F),I.needsLights=Yi(h),I.lightsStateVersion=et,I.needsLights&&(Et.ambientLightColor.value=w.state.ambient,Et.lightProbe.value=w.state.probe,Et.sunLights.value=w.state.sun,Et.sunLightShadows.value=w.state.sunShadow,Et.directionalLights.value=w.state.directional,Et.directionalLightShadows.value=w.state.directionalShadow,Et.spotLights.value=w.state.spot,Et.spotLightShadows.value=w.state.spotShadow,Et.rectAreaLights.value=w.state.rectArea,Et.ltc_1.value=w.state.rectAreaLTC1,Et.ltc_2.value=w.state.rectAreaLTC2,Et.pointLights.value=w.state.point,Et.pointLightShadows.value=w.state.pointShadow,Et.hemisphereLights.value=w.state.hemi,Et.sunShadowMatrix.value=w.state.sunShadowMatrix,Et.sunShadowCascade.value=w.state.sunShadowCascade,Et.directionalShadowMatrix.value=w.state.directionalShadowMatrix,Et.spotLightMatrix.value=w.state.spotLightMatrix,Et.spotLightMap.value=w.state.spotLightMap,Et.pointShadowMatrix.value=w.state.pointShadowMatrix),I.numLightProbeGrids=oa(C.state.lightProbeGridArray),I.currentProgram=pt,I.uniformsList=null,pt}function oi(h,S,T,I,w){let k=zt.get(h),et=k.currentProgram.id+","+I+","+w,F=k.programVariants.get(et);return F===void 0?(F=Yn(h,S,T),k.programVariants.set(et,F)):(k.currentProgram=F,k.uniformsList=null,k.outputColorSpace=I,k.toneMapping=w),F}function tr(h){if(h.uniformsList===null){let S=h.currentProgram.getUniforms();h.uniformsList=$s.seqWithValue(S.seq,h.uniforms)}return h.uniformsList}function la(h,S){let T=zt.get(h);T.outputColorSpace=S.outputColorSpace,T.batching=S.batching,T.batchingColor=S.batchingColor,T.instancing=S.instancing,T.instancingColor=S.instancingColor,T.instancingMorph=S.instancingMorph,T.skinning=S.skinning,T.morphTargets=S.morphTargets,T.morphNormals=S.morphNormals,T.morphColors=S.morphColors,T.morphTargetsCount=S.morphTargetsCount,T.numClippingPlanes=S.numClippingPlanes,T.numIntersection=S.numClipIntersection,T.vertexAlphas=S.vertexAlphas,T.vertexTangents=S.vertexTangents,T.toneMapping=S.toneMapping}function ca(h,S,T,I,w){S.isScene!==!0&&(S=Le),It.resetTextureUnits();let k=S.fog,et=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?S.environment:null,F=dt===null?N.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:he.workingColorSpace,q=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap,Z=A.get(I.envMap||et,q),st=I.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pt=!!T.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Et=!!T.morphAttributes.position,Jt=!!T.morphAttributes.normal,Te=!!T.morphAttributes.color,ee=Qn;I.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ee=N.toneMapping);let fe=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,le=fe!==void 0?fe.length:0,Rt=zt.get(I),ze=C.state.lights;if(De===!0&&(Je===!0||h!==ot)){let G=h===ot&&I.id===Q;tt.setState(I,h,G)}let Kt=!1,Ae=!1;I.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==ze.state.version||w.isBatchedMesh&&Rt.batching===!1||!w.isBatchedMesh&&Rt.batching===!0||w.isBatchedMesh&&Rt.batchingColor===!0&&w._colorsTexture===null||w.isBatchedMesh&&Rt.batchingColor===!1&&w._colorsTexture!==null||w.isInstancedMesh&&Rt.instancing===!1||!w.isInstancedMesh&&Rt.instancing===!0||w.isSkinnedMesh&&Rt.skinning===!1||!w.isSkinnedMesh&&Rt.skinning===!0||w.isInstancedMesh&&Rt.instancingColor===!0&&w.instanceColor===null||w.isInstancedMesh&&Rt.instancingColor===!1&&w.instanceColor!==null||w.isInstancedMesh&&Rt.instancingMorph===!0&&w.morphTexture===null||w.isInstancedMesh&&Rt.instancingMorph===!1&&w.morphTexture!==null||Rt.envMap!==Z||I.fog===!0&&Rt.fog!==k||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==tt.numPlanes||Rt.numIntersection!==tt.numIntersection)||Rt.vertexAlphas!==st||Rt.vertexTangents!==pt||Rt.morphTargets!==Et||Rt.morphNormals!==Jt||Rt.morphColors!==Te||Rt.morphTargetsCount!==le||Rt.numLightProbeGrids!==oa(C.state.lightProbeGridArray)?Kt=!0:(Rt.outputColorSpace!==F||Rt.toneMapping!==ee)&&(Ae=!0):(Kt=!0,Rt.__version=I.version);let we=Rt.currentProgram;(Kt===!0||Ae===!0)&&(we=Ae===!0?oi(I,S,w,F,ee):Yn(I,S,w),U&&I.isNodeMaterial&&U.onUpdateProgram(I,we,Rt));let Ct=!1,At=!1,Nt=!1,vt=we.getUniforms(),Pt=Rt.uniforms;if(xt.useProgram(we.program)&&(Ct=!0,At=!0,Nt=!0),I.id!==Q&&(Q=I.id,At=!0),Ct||ot!==h){xt.buffers.depth.getReversed()&&h.reversedDepth!==!0&&(h._reversedDepth=!0,h.updateProjectionMatrix()),vt.setValue(z,"projectionMatrix",h.projectionMatrix),vt.setValue(z,"viewMatrix",h.matrixWorldInverse);let X=vt.map.cameraPosition;X!==void 0&&X.setValue(z,me.setFromMatrixPosition(h.matrixWorld)),be.logarithmicDepthBuffer&&vt.setValue(z,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&vt.setValue(z,"isOrthographic",h.isOrthographicCamera===!0),ot!==h&&(ot=h,At=!0,Nt=!0)}if(Rt.needsLights&&(ze.state.sunShadowMap.length>0&&vt.setValue(z,"sunShadowMap",ze.state.sunShadowMap,It),ze.state.directionalShadowMap.length>0&&vt.setValue(z,"directionalShadowMap",ze.state.directionalShadowMap,It),ze.state.spotShadowMap.length>0&&vt.setValue(z,"spotShadowMap",ze.state.spotShadowMap,It),ze.state.pointShadowMap.length>0&&vt.setValue(z,"pointShadowMap",ze.state.pointShadowMap,It)),w.isSkinnedMesh){vt.setOptional(z,w,"bindMatrix"),vt.setOptional(z,w,"bindMatrixInverse");let G=w.skeleton;G&&(G.boneTexture===null&&G.computeBoneTexture(),vt.setValue(z,"boneTexture",G.boneTexture,It))}w.isBatchedMesh&&(vt.setOptional(z,w,"batchingTexture"),vt.setValue(z,"batchingTexture",w._matricesTexture,It),vt.setOptional(z,w,"batchingIdTexture"),vt.setValue(z,"batchingIdTexture",w._indirectTexture,It),vt.setOptional(z,w,"batchingColorTexture"),w._colorsTexture!==null&&vt.setValue(z,"batchingColorTexture",w._colorsTexture,It));let Ot=T.morphAttributes;if((Ot.position!==void 0||Ot.normal!==void 0||Ot.color!==void 0)&&nt.update(w,T,we),(At||Rt.receiveShadow!==w.receiveShadow)&&(Rt.receiveShadow=w.receiveShadow,vt.setValue(z,"receiveShadow",w.receiveShadow)),(I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial)&&I.envMap===null&&S.environment!==null&&(Pt.envMapIntensity.value=S.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Ex()),At){if(vt.setValue(z,"toneMappingExposure",N.toneMappingExposure),Rt.needsLights&&ha(Pt,Nt),k&&I.fog===!0&&yt.refreshFogUniforms(Pt,k),yt.refreshMaterialUniforms(Pt,I,gt,Ft,C.state.transmissionRenderTarget[h.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){let G=E,X=0;for(let Ut of C.state.lightProbeGridArray)Ut.texture!==null&&(G.textures[X]=Ut.texture,G.min[X]=Ut.boundingBox.min,G.max[X]=Ut.boundingBox.max,G.resolution[X]=Ut.resolution,X++);for(let Ut in G)G[Ut].length=X;Pt.probesSH.value=G.textures,Pt.probesMin.value=G.min,Pt.probesMax.value=G.max,Pt.probesResolution.value=G.resolution}$s.upload(z,tr(Rt),Pt,It)}if(I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&($s.upload(z,tr(Rt),Pt,It),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&vt.setValue(z,"center",w.center),vt.setValue(z,"modelViewMatrix",w.modelViewMatrix),vt.setValue(z,"normalMatrix",w.normalMatrix),vt.setValue(z,"modelMatrix",w.matrixWorld),I.uniformsGroups!==void 0){let G=I.uniformsGroups;for(let X=0,Ut=G.length;X<Ut;X++){let ce=G[X];Dt.update(ce,we),Dt.bind(ce,we)}}return we}function ha(h,S){h.ambientLightColor.needsUpdate=S,h.lightProbe.needsUpdate=S,h.sunLights.needsUpdate=S,h.sunLightShadows.needsUpdate=S,h.directionalLights.needsUpdate=S,h.directionalLightShadows.needsUpdate=S,h.pointLights.needsUpdate=S,h.pointLightShadows.needsUpdate=S,h.spotLights.needsUpdate=S,h.spotLightShadows.needsUpdate=S,h.rectAreaLights.needsUpdate=S,h.hemisphereLights.needsUpdate=S}function Yi(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return dt},this.setRenderTargetTextures=function(h,S,T){let I=zt.get(h);I.__autoAllocateDepthBuffer=h.resolveDepthBuffer===!1,I.__autoAllocateDepthBuffer===!1&&(I.__useRenderToTexture=!1),zt.get(h.texture).__webglTexture=S,zt.get(h.depthTexture).__webglTexture=I.__autoAllocateDepthBuffer?void 0:T,I.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(h,S){let T=zt.get(h);T.__webglFramebuffer=S,T.__useDefaultFramebuffer=S===void 0},this.setRenderTarget=function(h,S=0,T=0){dt=h,K=S,$=T;let I=null,w=!1,k=!1;if(h){let F=zt.get(h);if(F.__useDefaultFramebuffer!==void 0){xt.bindFramebuffer(z.FRAMEBUFFER,F.__webglFramebuffer),ct.copy(h.viewport),Lt.copy(h.scissor),Xt=h.scissorTest,xt.viewport(ct),xt.scissor(Lt),xt.setScissorTest(Xt),Q=-1;return}else if(F.__webglFramebuffer===void 0)It.setupRenderTarget(h);else if(F.__hasExternalTextures)It.rebindTextures(h,zt.get(h.texture).__webglTexture,zt.get(h.depthTexture).__webglTexture);else if(h.depthBuffer){let st=h.depthTexture;if(F.__boundDepthTexture!==st){if(st!==null&&zt.has(st)&&(h.width!==st.image.width||h.height!==st.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(h)}}let q=h.texture;(q.isData3DTexture||q.isDataArrayTexture||q.isCompressedArrayTexture)&&(k=!0);let Z=zt.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(Z[S])?I=Z[S][T]:I=Z[S],w=!0):h.samples>0&&It.useMultisampledRTT(h)===!1?I=zt.get(h).__webglMultisampledFramebuffer:Array.isArray(Z)?I=Z[T]:I=Z,ct.copy(h.viewport),Lt.copy(h.scissor),Xt=h.scissorTest}else ct.copy(kt).multiplyScalar(gt).floor(),Lt.copy(ae).multiplyScalar(gt).floor(),Xt=Qt;if(T!==0&&(I=V),xt.bindFramebuffer(z.FRAMEBUFFER,I)&&xt.drawBuffers(h,I),xt.viewport(ct),xt.scissor(Lt),xt.setScissorTest(Xt),w){let F=zt.get(h.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+S,F.__webglTexture,T)}else if(k){let F=S;for(let q=0;q<h.textures.length;q++){let Z=zt.get(h.textures[q]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+q,Z.__webglTexture,T,F)}}else if(h!==null&&T!==0){let F=zt.get(h.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,F.__webglTexture,T)}Q=-1};function $i(h){let S=zt.get(h);return(S.__readFormat!==h.format||S.__readType!==h.type)&&(S.__readFormat=h.format,S.__readType=h.type,S.__formatReadable=be.textureFormatReadable(h.format),S.__typeReadable=be.textureTypeReadable(h.type)),S}this.readRenderTargetPixels=function(h,S,T,I,w,k,et,F=0){if(!(h&&h.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q=zt.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&et!==void 0&&(q=q[et],Array.isArray(q)&&(q=q[0])),q){xt.bindFramebuffer(z.FRAMEBUFFER,q);try{let Z=h.textures[F],st=Z.format,pt=Z.type;h.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+F);let Et=$i(Z);if(Et.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Et.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}S>=0&&S<=h.width-I&&T>=0&&T<=h.height-w&&z.readPixels(S,T,I,w,ht.convert(st),ht.convert(pt),k)}finally{let Z=dt!==null?zt.get(dt).__webglFramebuffer:null;xt.bindFramebuffer(z.FRAMEBUFFER,Z)}}},this.readRenderTargetPixelsAsync=async function(h,S,T,I,w,k,et,F=0){if(!(h&&h.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let q=zt.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&et!==void 0&&(q=q[et],Array.isArray(q)&&(q=q[0])),q)if(S>=0&&S<=h.width-I&&T>=0&&T<=h.height-w){xt.bindFramebuffer(z.FRAMEBUFFER,q);let Z=h.textures[F],st=Z.format,pt=Z.type;h.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+F);let Et=$i(Z);if(Et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Jt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Jt),z.bufferData(z.PIXEL_PACK_BUFFER,k.byteLength,z.STREAM_READ),z.readPixels(S,T,I,w,ht.convert(st),ht.convert(pt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Te=dt!==null?zt.get(dt).__webglFramebuffer:null;xt.bindFramebuffer(z.FRAMEBUFFER,Te);let ee=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await vu(z,ee,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Jt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,k),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(Jt),z.deleteSync(ee),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(h,S=null,T=0){let I=Math.pow(2,-T),w=Math.floor(h.image.width*I),k=Math.floor(h.image.height*I),et=S!==null?S.x:0,F=S!==null?S.y:0;It.setTexture2D(h,0),z.copyTexSubImage2D(z.TEXTURE_2D,T,0,0,et,F,w,k),xt.unbindTexture()},this.copyTextureToTexture=function(h,S,T=null,I=null,w=0,k=0){let et,F,q,Z,st,pt,Et,Jt,Te,ee=h.isCompressedTexture?h.mipmaps[k]:h.image;if(T!==null)et=T.max.x-T.min.x,F=T.max.y-T.min.y,q=T.isBox3?T.max.z-T.min.z:1,Z=T.min.x,st=T.min.y,pt=T.isBox3?T.min.z:0;else{let vt=Math.pow(2,-w);et=Math.floor(ee.width*vt),F=Math.floor(ee.height*vt),h.isDataArrayTexture?q=ee.depth:h.isData3DTexture?q=Math.floor(ee.depth*vt):q=1,Z=0,st=0,pt=0}I!==null?(Et=I.x,Jt=I.y,Te=I.z):(Et=0,Jt=0,Te=0);let fe=ht.convert(S.format),le=ht.convert(S.type),Rt;S.isData3DTexture?(It.setTexture3D(S,0),Rt=z.TEXTURE_3D):S.isDataArrayTexture||S.isCompressedArrayTexture?(It.setTexture2DArray(S,0),Rt=z.TEXTURE_2D_ARRAY):(It.setTexture2D(S,0),Rt=z.TEXTURE_2D),xt.activeTexture(z.TEXTURE0),xt.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,S.flipY),xt.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),xt.pixelStorei(z.UNPACK_ALIGNMENT,S.unpackAlignment);let ze=xt.getParameter(z.UNPACK_ROW_LENGTH),Kt=xt.getParameter(z.UNPACK_IMAGE_HEIGHT),Ae=xt.getParameter(z.UNPACK_SKIP_PIXELS),we=xt.getParameter(z.UNPACK_SKIP_ROWS),Ct=xt.getParameter(z.UNPACK_SKIP_IMAGES);xt.pixelStorei(z.UNPACK_ROW_LENGTH,ee.width),xt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ee.height),xt.pixelStorei(z.UNPACK_SKIP_PIXELS,Z),xt.pixelStorei(z.UNPACK_SKIP_ROWS,st),xt.pixelStorei(z.UNPACK_SKIP_IMAGES,pt);let At=h.isDataArrayTexture||h.isData3DTexture,Nt=S.isDataArrayTexture||S.isData3DTexture;if(h.isDepthTexture){let vt=zt.get(h),Pt=zt.get(S),Ot=zt.get(vt.__renderTarget),G=zt.get(Pt.__renderTarget);xt.bindFramebuffer(z.READ_FRAMEBUFFER,Ot.__webglFramebuffer),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let X=0;X<q;X++)At&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(h).__webglTexture,w,pt+X),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,zt.get(S).__webglTexture,k,Te+X)),z.blitFramebuffer(Z,st,Z+et,st+F,Et,Jt,Et+et,Jt+F,z.DEPTH_BUFFER_BIT,z.NEAREST);xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(w!==0||h.isRenderTargetTexture||zt.has(h)){let vt=zt.get(h),Pt=zt.get(S);xt.bindFramebuffer(z.READ_FRAMEBUFFER,L),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Y);for(let Ot=0;Ot<q;Ot++)At?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,vt.__webglTexture,w,pt+Ot):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,vt.__webglTexture,w),Nt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pt.__webglTexture,k,Te+Ot):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Pt.__webglTexture,k),w!==0?z.blitFramebuffer(Z,st,Z+et,st+F,Et,Jt,Et+et,Jt+F,z.COLOR_BUFFER_BIT,z.NEAREST):Nt?z.copyTexSubImage3D(Rt,k,Et,Jt,Te+Ot,Z,st,et,F):z.copyTexSubImage2D(Rt,k,Et,Jt,Z,st,et,F);xt.bindFramebuffer(z.READ_FRAMEBUFFER,null),xt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Nt?h.isDataTexture||h.isData3DTexture?z.texSubImage3D(Rt,k,Et,Jt,Te,et,F,q,fe,le,ee.data):S.isCompressedArrayTexture?z.compressedTexSubImage3D(Rt,k,Et,Jt,Te,et,F,q,fe,ee.data):z.texSubImage3D(Rt,k,Et,Jt,Te,et,F,q,fe,le,ee):h.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,k,Et,Jt,et,F,fe,le,ee.data):h.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,k,Et,Jt,ee.width,ee.height,fe,ee.data):z.texSubImage2D(z.TEXTURE_2D,k,Et,Jt,et,F,fe,le,ee);xt.pixelStorei(z.UNPACK_ROW_LENGTH,ze),xt.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Kt),xt.pixelStorei(z.UNPACK_SKIP_PIXELS,Ae),xt.pixelStorei(z.UNPACK_SKIP_ROWS,we),xt.pixelStorei(z.UNPACK_SKIP_IMAGES,Ct),k===0&&S.generateMipmaps===!0&&S.mipmapsAutoUpdate===!0&&z.generateMipmap(Rt),xt.unbindTexture()},this.initRenderTarget=function(h){zt.get(h).__webglFramebuffer===void 0&&It.setupRenderTarget(h)},this.initTexture=function(h){h.isCubeTexture?It.setTextureCube(h,0):h.isData3DTexture?It.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?It.setTexture2DArray(h,0):It.setTexture2D(h,0),xt.unbindTexture()},this.resetState=function(){K=0,$=0,dt=null,xt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var sd=[["red",16731486],["orange",16752412],["gold",16765503],["lime",10216804],["green",3064446],["teal",2085313],["cyan",4114431],["blue",5078271],["purple",10182117],["pink",16740277],["white",15921906],["black",3816008],["brown",11037500],["silver",12109014],["rose",16748451]],cl=new Map(sd.map(([i,t])=>[i,t]));cl.set("yellow",16765503);cl.set("violet",10182117);cl.set("grey",12109014);cl.set("gray",12109014);function Ax(i){let t=2166136261;for(let e of String(i))t^=e.codePointAt(0),t=Math.imul(t,16777619);return t>>>0}var rd=i=>sd[Ax(i)%10][1];function Xc(i){let t=String(i||"").replace(/[\u0000-\u001f\u200b-\u200f\u202a-\u202e]/g,"").replace(/\s+/g," ").trim(),e=[...t];return(e.length>16?e.slice(0,15).join("")+"\u2026":t)||"Viewer"}var ad=i=>String(i||"").toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}]/gu,"");var hl=["Pixel","Mochi","Bolt","Nugget","Waffles","Ziggy","Pebble","Turbo","Biscuit","Gizmo","Noodle","Sprocket","Muffin","Rocket","Tofu","Dumpling","Jelly","Comet","Pickle","Bean","Sushi","Taco","Nacho","Boba"];var Tn=[{id:"library",name:"The Whispering Library",trap:"books",monster:"mimic",mname:"the Hungry Tome",fog:2759226,floor:7031347,wall:5917290,light:16757611},{id:"crypt",name:"The Bone Crypt",trap:"hands",monster:"ghost",mname:"the Restless Ghoul",fog:1450026,floor:5922662,wall:4870232,light:10477823},{id:"mirror",name:"The Hall of Mirrors",trap:"shards",monster:"ghost",mname:"the Mirror Wraith",fog:2038330,floor:9077936,wall:6971536,light:13809919},{id:"clock",name:"The Clockwork Room",trap:"pendulum",monster:"spider",mname:"the Clockwork Spider",fog:2760724,floor:8018474,wall:6967344,light:16761963},{id:"attic",name:"The Spider Attic",trap:"web",monster:"spider",mname:"the Giant Spider",fog:2234900,floor:5916210,wall:4864556,light:16754266},{id:"lab",name:"The Alchemist's Lab",trap:"gas",monster:"mimic",mname:"the Greedy Mimic",fog:1058332,floor:4086346,wall:3493951,light:9174938},{id:"ballroom",name:"The Ghostly Ballroom",trap:"chandelier",monster:"ghost",mname:"the Dancing Banshee",fog:2757680,floor:8010330,wall:5909066,light:16751317}],Vn={id:"belfry",name:"The Bell Tower",trap:"hands",monster:"boss",fog:1313830,floor:4866144,wall:3813456,light:11570431},Hn={id:"gate",name:"The Tower Gate",trap:"hands",monster:"ghost",fog:1708080,floor:5917296,wall:4536410,light:16757611},qc=["The Hollow Bride","Count Cobweb","The Clockwork Wraith","The King of Crows","The Pale Organist","The Lantern Eater"],ul={treasure:"\u{1F4B0}",trap:"\u{1F480}",monster:"\u{1F479}",riddle:"\u2753"},Wn=[["I'm tall when I'm young and short when I'm old. What am I?",["candle"]],["What has hands but cannot clap?",["clock","watch"]],["The more you take, the more you leave behind. What are they?",["footsteps","steps","footprints"]],["I speak without a mouth and hear without ears. What am I?",["echo"]],["What has keys but cannot open locks?",["piano","keyboard"]],["What gets wetter the more it dries?",["towel"]],["What has a neck but no head?",["bottle","shirt"]],["I have cities but no houses, forests but no trees. What am I?",["map"]],["What has one eye but cannot see?",["needle","hurricane","storm"]],["What can fill a room but takes up no space?",["light","air","sound","darkness"]],["What must be broken before you can use it?",["egg"]],["The more of me there is, the less you see. What am I?",["darkness","dark","fog"]],["What has a head and a tail but no body?",["coin"]],["What has teeth but cannot bite?",["comb","saw","zipper","gear"]],["What is full of holes but still holds water?",["sponge"]],["What flies without wings and cries without eyes?",["cloud","clouds","wind"]],["What has many rings but no fingers?",["tree","phone","telephone","saturn"]],["What runs but never walks, has a bed but never sleeps?",["river","water","stream"]],["What has legs but cannot walk?",["table","chair","bed","desk"]],["What is black when clean and white when dirty?",["chalkboard","blackboard"]],["What goes up but never comes down?",["age","your age"]],["What belongs to you, but others use it more than you?",["name","your name"]],["What can you catch but not throw?",["cold","a cold","breath","feelings"]],["I follow you all day but vanish in the dark. What am I?",["shadow"]],["What has a face and two hands, but no arms or legs?",["clock","watch"]],["What kind of room has no doors or windows?",["mushroom"]],["What can travel around the world while staying in a corner?",["stamp"]],["What comes down but never goes up?",["rain","snow"]],["I have a spine but no bones. What am I?",["book"]],["What has a ring but no finger, and a bell but no church?",["phone","telephone","doorbell"]]];function od(i,t){let e=String(i||"").toLowerCase().normalize("NFKD").replace(/[^\p{L}\p{N}\s]/gu," ").split(/\s+/).filter(Boolean),n=" "+e.join(" ")+" ";for(let s of t){let r=" "+s.toLowerCase()+" ";if(n.includes(r)||!s.includes(" ")&&e.some(a=>a===s+"s"||a.length>3&&a+"s"===s))return s}return null}var $r=[{id:"boss",min:500,label:"GHOST BOSS",icon:"\u{1F47B}",desc:"summon a boss fight: huge loot"},{id:"skip",min:100,label:"SKIP FLOOR",icon:"\u{1FA84}",desc:"Mira's lift: rise safely"},{id:"rescue",min:30,label:"RESCUE",icon:"\u{1F496}",desc:"the fallen rise + lantern oil"},{id:"shield",min:5,label:"SHIELD",icon:"\u{1F6E1}\uFE0F",desc:"blocks the next trap"},{id:"prophecy",min:1,label:"PROPHECY",icon:"\u{1F52E}",desc:"Mira reveals the safe door"}],ld=i=>{let t=Number(i)||0;return $r.find(e=>t>=e.min)||$r[$r.length-1]},Cx={"1\uFE0F\u20E3":1,"2\uFE0F\u20E3":2,"3\uFE0F\u20E3":3,"\u2460":1,"\u2461":2,"\u2462":3};function cd(i){let t=String(i||"").trim().toLowerCase().replace(/[!.?]+$/,"").replace(/\s+/g," ");if(!t)return{cmd:"none"};for(let[n,s]of Object.entries(Cx))if(t.replace(/\uFE0F/g,"")===n.replace(/\uFE0F/g,""))return{cmd:"vote",door:s};let e=t.match(/^(?:door|d|#|no\.?|number)?\s*([123])(?:\1)*$/);return e?{cmd:"vote",door:Number(e[1])}:(e=t.match(/^(?:door\s+)?(one|two|three)$/),e?{cmd:"vote",door:{one:1,two:2,three:3}[e[1]]}:/^(?:go\s+)?(?:left|l|⬅️?|👈|lft)$/u.test(t)?{cmd:"vote",door:"L"}:/^(?:go\s+)?(?:right|r|➡️?|👉|rite)$/u.test(t)?{cmd:"vote",door:"R"}:/^(?:go\s+)?(?:middle|mid|center|centre|straight|m|⬆️?)$/u.test(t)?{cmd:"vote",door:"M"}:/^(?:attack|atk|hit|fight|punch|smash|kill|⚔️?|🗡️?|👊|🥊|💥|🔥)+/u.test(t)?{cmd:"attack",strong:!0}:{cmd:"chat",key:ad(t)})}function hd(i,t){if(i==="L")return 0;if(i==="R")return t-1;if(i==="M")return t===3?1:-1;let e=Number(i)-1;return e>=0&&e<t?e:-1}var ge=9,Ee=-7.2,os=i=>i===2?[-2.9,2.9]:[-4.3,0,4.3],Me={x:6.3,z:-2.2,r:1.55};var Pe={alive:1,ghost:2,bot:4,cmd:8,shield:16,crown:32,life:64,hit:128,gift:256},Yc=9;var Rx={gatherSeconds:16,enterSeconds:4.5,voteSeconds:12,revealSeconds:2.6,treasureSeconds:4.5,trapSeconds:4.5,monsterSeconds:14,riddleSeconds:22,bossSeconds:32,victorySeconds:4.5,climbSeconds:4.2,endSeconds:13,minParty:6,bots:!0,fuelDrain:.3,likeFuel:.12,likeRain:300,bossEvery:5,startFloor:1,sendCap:70,ghostCap:16,botHitRate:.55,dmgMul:1,monsterHpMul:1,topFloor:30},Ix=3.6,dl=class{constructor(t={},e=Math.random){this.o={...Rx,...t},this.rng=e,this.t=0,this.run=0,this.floor=0,this.theme=null,this.themeIdx=-1,this.people=new Map,this.byId=new Map,this.nextId=1,this.ev=[],this.rAdd=[],this.rDel=[],this.fuel=100,this.hype=0,this.likes=0,this.shields=0,this.bankProphecy=0,this.doors=3,this.kinds=[],this.voteCounts=[0,0,0],this.prophecy=-1,this.chosen=-1,this.outcome="",this.monster=null,this.riddle=null,this.predict=null,this.pendingSummon=null,this.lowWarned=!1,this.sessionBest=0,this.lastResult=null,this.liftFloor=-9,this.summonFloor=-9,this.recentRiddles=[],this.humanAt=-999,this.bossCount=0,this.startRun()}r(t){return Math.floor(this.rng()*t)}emit(t){this.ev.push(t)}drain(){let t=this.ev;return this.ev=[],t}drainRoster(){let t={add:this.rAdd,del:this.rDel};return this.rAdd=[],this.rDel=[],t}rosterEntry(t){return{id:t.id,name:t.name,color:t.color,bot:t.bot}}get alive(){let t=0;for(let e of this.people.values())e.alive&&t++;return t}get humans(){let t=0;for(let e of this.people.values())e.alive&&!e.bot&&t++;return t}aliveList(){return[...this.people.values()].filter(t=>t.alive)}ghosts(){return[...this.people.values()].filter(t=>t.inRun&&!t.alive)}member(t,e,n=!1){let s=this.people.get(t);if(!s)s={id:this.nextId++,uid:t,name:Xc(e),color:rd(t),bot:n,alive:!1,inRun:!1,lives:0,pts:0,runPts:0,floors:0,riddles:0,hits:0,lastAct:this.t,cmdT:-9,hitT:-9,door:-1,x:0,y:0,z:6,face:Math.PI,climb:null,giftT:-9,attackT:-9,fell:0},this.people.set(t,s),this.byId.set(s.id,s),this.rAdd.push(this.rosterEntry(s));else if(e&&!n){let r=Xc(e);r!==s.name&&(s.name=r,this.rAdd.push(this.rosterEntry(s)))}return s}join(t){return t.lastAct=this.t,t.bot||(this.humanAt=this.t),t.alive||t.inRun&&this.phase!=="gather"?!1:(t.alive=!0,t.inRun=!0,t.door=-1,t.climb=null,this.phase==="gather"?(t.x=(this.rng()-.5)*6,t.z=8.5):(t.x=Me.x-Me.r,t.z=Me.z),t.y=0,this.emit({k:"join",id:t.id,bot:t.bot}),t.bot||this.trimBots(),!0)}trimBots(){if(this.humans+this.botsAlive()<=this.o.minParty)return;let t=[...this.people.values()].find(e=>e.bot&&e.alive);t&&this.phase==="gather"&&(t.alive=!1,t.inRun=!1,this.emit({k:"leave",id:t.id}))}botsAlive(){let t=0;for(let e of this.people.values())e.bot&&e.alive&&t++;return t}fillBots(){if(!this.o.bots)return;let t=this.o.minParty-this.alive;for(let e=0;e<hl.length&&t>0;e++){let n=hl[(e+this.run*5)%hl.length],s=this.member("bot:"+n,"Bot "+n,!0);s.alive||(s.inRun=!1,this.join(s),t--)}}input(t){if(!t||!t.uid)return{ok:!1};let e=this.member(String(t.uid),t.name||t.uid);switch(t.type){case"chat":case"comment":return this.chat(e,String(t.text||""));case"like":return this.like(e,Math.max(1,Math.min(100,Number(t.count)||1)));case"gift":return this.gift(e,(Number(t.coins)||1)*Math.max(1,Number(t.count)||1),t.giftName||"gift");case"follow":return this.join(e),e.lives=Math.min(2,e.lives+1),this.emit({k:"follow",id:e.id}),{ok:!0};case"share":return this.join(e),e.lives=Math.min(2,e.lives+1),this.addFuel(5),this.emit({k:"share",id:e.id}),{ok:!0};case"join":return this.join(e),{ok:!0}}return{ok:!0}}chat(t,e){let n=cd(e),s=this.join(t);if(t.cmdT=this.t,this.phase==="vote"&&n.cmd==="vote"){let r=hd(n.door,this.doors);if(r>=0)return t.door!==r&&(t.door=r,this.countVotes(),this.emit({k:"vote",id:t.id,d:r})),{ok:!0,cmd:"vote",door:r+1}}if(this.phase==="riddle"&&this.riddle&&!this.riddle.solved){let r=od(e,this.riddle.a);if(r)return this.solveRiddle(t,r),{ok:!0,cmd:"riddle"}}return(this.phase==="monster"||this.phase==="boss")&&this.monster&&t.alive?(this.hit(t,n.cmd==="attack"?1.5:1),{ok:!0,cmd:"hit"}):{ok:!0,cmd:s?"join":n.cmd}}like(t,e){if(this.join(t),this.likes+=e,this.hype+=e,this.addFuel(e*this.o.likeFuel),(this.phase==="monster"||this.phase==="boss")&&this.monster&&this.damage(t,e*.25,!1,!0),this.hype>=this.o.likeRain){this.hype-=this.o.likeRain,this.addFuel(15);let n=this.ghosts().sort((s,r)=>r.fell-s.fell)[0];n&&this.rise(n,"likes");for(let s of this.aliveList())s.runPts+=2;this.emit({k:"blaze",rescued:n?n.id:0})}return{ok:!0}}gift(t,e,n){this.join(t);let s=ld(e);t.giftT=this.t,t.runPts+=Math.min(50,3+e),t.pts+=0;let r={k:"gift",id:t.id,tier:s.id,coins:e,giftName:n};switch(s.id){case"prophecy":{this.addFuel(Math.min(12,3*e)),this.phase==="vote"&&this.prophecy<0?(this.prophecy=this.safeDoor(),r.door=this.prophecy):this.prophecy<0&&(this.bankProphecy=1,r.banked=!0);break}case"shield":this.shields=Math.min(3,this.shields+1),this.addFuel(6),t.inRun&&!t.alive&&this.rise(t,"gift"),r.shields=this.shields;break;case"rescue":{this.addFuel(25);let a=this.ghosts().sort((o,l)=>(l===t)-(o===t)||l.fell-o.fell).slice(0,5);for(let o of a)this.rise(o,"gift");r.n=a.length;break}case"skip":{if(this.addFuel(10),this.monster)this.damage(t,this.monster.max*(this.monster.boss?.3:1),!0),r.hitBoss=!0;else if(this.liftFloor>=this.floor-1||this.skipBanked){this.addFuel(15);for(let a of this.ghosts().slice(0,2))this.rise(a,"gift");r.blessing=!0}else{if(["enter","vote","reveal","riddle","trap","treasure"].includes(this.phase))return this.emit(r),this.startClimb(!0),{ok:!0,tier:s.id};this.skipBanked=!0}break}case"boss":{if(this.addFuel(20),this.monster&&this.monster.boss)this.damage(t,this.monster.max*.35,!0),r.hitBoss=!0;else if(this.pendingSummon||this.floor-this.summonFloor<3){this.addFuel(30);for(let a of this.ghosts())this.rise(a,"gift");r.blessing=!0}else this.pendingSummon={by:t.id},this.summonFloor=this.floor;break}}return this.emit(r),{ok:!0,tier:s.id}}addFuel(t){this.fuel=Math.max(0,Math.min(100,this.fuel+t)),this.fuel>35&&(this.lowWarned=!1)}setPhase(t,e){this.phase=t,this.phaseStart=this.t,this.phaseEnd=this.t+e}startRun(){this.run++,this.floor=this.o.startFloor-1,this.fuel=100,this.shields=0,this.bankProphecy=0,this.pendingSummon=null,this.skipBanked=!1,this.liftFloor=-9,this.summonFloor=-9,this.monster=null,this.riddle=null,this.predict=null,this.kinds=[],this.chosen=-1,this.outcome="",this.lowWarned=!1,this.themeIdx=-1,this.theme={id:"gate",name:"The Tower Gate"},this.liftPending=!1,this.upcoming=null;for(let[t,e]of this.people)!e.bot&&this.t-e.lastAct>1200&&(this.people.delete(t),this.byId.delete(e.id),this.rDel.push(e.id));for(let t of this.people.values())t.alive=!1,t.inRun=!1,t.runPts=0,t.door=-1,t.climb=null,t.lives=Math.min(t.lives,1),t.z=8,t.y=0;this.setPhase("gather",this.o.gatherSeconds);for(let t of this.people.values())!t.bot&&this.t-t.lastAct<180&&this.join(t);this.fillBots(),this.emit({k:"gather",run:this.run})}nextFloor(){this.floor++;for(let n of this.people.values())n.door=-1,n.climb&&(n.climb=null,n.y=0);this.kinds=[],this.chosen=-1,this.outcome="",this.prophecy=-1,this.voteCounts=[0,0,0],this.riddle=null,this.monster=null,this.liftPending&&(this.liftPending=!1,this.floor++);let t=this.floor%this.o.bossEvery===0,e=this.nextTheme(this.floor);if(this.themeIdx=e,this.theme=t?Vn:Tn[e],this.upcoming=null,this.doors=t?0:this.floor%3===2?2:3,this.setPhase("enter",this.o.enterSeconds),this.predict=null,!t){let n=this.aliveList(),s=n.filter(a=>!a.bot),r=s.length?s:n;if(r.length){let a=r[this.r(r.length)];this.predict={id:a.id,kind:this.rng()<.62?"fall":"gold"}}}this.emit({k:"floor",n:this.floor,th:this.themeIdx,boss:t,doors:this.doors,predict:this.predict})}nextTheme(t){if(t%this.o.bossEvery===0)return-2;if(this.upcoming&&this.upcoming.n===t)return this.upcoming.th;let e;do e=this.r(Tn.length);while(e===this.themeIdx&&Tn.length>1);return this.upcoming={n:t,th:e},e}startVote(){let t=this.doors,e=[],n=Math.min(.5,.15+this.floor*.02),s=["treasure"];for(s.push(this.rng()<.55?"trap":"monster"),t===3&&s.push(this.rng()<.55?"riddle":this.rng()<n?"trap":this.rng()<.5?"monster":"riddle");s.length;)e.push(s.splice(this.r(s.length),1)[0]);this.kinds=e;for(let r of this.people.values())r.door=-1;this.voteCounts=[0,0,0],this.setPhase("vote",this.o.voteSeconds),this.bankProphecy&&(this.bankProphecy=0,this.prophecy=this.safeDoor(),this.emit({k:"prophecy",door:this.prophecy,banked:!0})),this.emit({k:"vote",start:!0,doors:t})}safeDoor(){let t=this.kinds.indexOf("treasure");return t>=0?t:Math.max(0,this.kinds.indexOf("riddle"))}countVotes(){let t=[0,0,0];for(let e of this.people.values())e.door>=0&&t[e.door]++;this.voteCounts=t}closeVote(){this.countVotes();let t=this.voteCounts.slice(0,this.doors),e=Math.max(...t),n=t.map((s,r)=>s===e?r:-1).filter(s=>s>=0);this.chosen=n[this.r(n.length)],this.outcome=this.kinds[this.chosen],this.setPhase("reveal",this.o.revealSeconds),this.emit({k:"reveal",door:this.chosen,kinds:this.kinds.slice(),votes:t,none:e===0})}resolve(){let t=this.outcome,e=new Set([...this.people.values()].filter(n=>n.door===this.chosen).map(n=>n.id));if(t==="treasure"){this.addFuel(Math.max(8,20-this.floor*.6));for(let s of this.aliveList())s.runPts+=e.has(s.id)?15:10;let n=null;if(this.predict&&this.predict.kind==="gold"){let s=this.byId.get(this.predict.id);s&&s.alive&&(s.runPts+=25,n=s.id)}this.setPhase("treasure",this.o.treasureSeconds),this.emit({k:"treasure",door:this.chosen,lucky:n})}else if(t==="trap"){this.setPhase("trap",this.o.trapSeconds);let n=this.casualties(Math.min(.4,.14+this.floor*.015),e);this.emit({k:"trap",trap:this.theme.trap,...n})}else if(t==="monster")this.spawnMonster(!1);else{let n;do n=this.r(Wn.length);while(this.recentRiddles.includes(n)&&this.recentRiddles.length<Wn.length-1);this.recentRiddles.push(n),this.recentRiddles.length>12&&this.recentRiddles.shift(),this.riddle={i:n,q:Wn[n][0],a:Wn[n][1],solved:null,botAt:this.t+8+this.rng()*9},this.setPhase("riddle",this.o.riddleSeconds),this.emit({k:"riddle",i:n})}}casualties(t,e=new Set,n=1){if(this.shields>0)return this.shields--,{blocked:!0,fell:[],saved:[]};let s=this.aliveList(),r=Math.max(n,Math.round(s.length*t));s.length<=1?r=this.rng()<.5?1:0:r=Math.min(r,s.length-1);let a=[],o=[],l=[];if(this.predict&&this.predict.kind==="fall"&&!this.predict.done){let m=this.byId.get(this.predict.id);m&&m.alive&&this.rng()<.75&&r>0&&(l.push(m),this.predict.done=!0)}let c=s.filter(m=>!l.includes(m)).map(m=>({m,w:(e.has(m.id)?2:1)*(m.bot?1.4:1)*(this.t-m.giftT<60?.5:1)}));for(;l.length<r&&c.length;){let m=0;for(let u of c)m+=u.w;let g=this.rng()*m,d=0;for(;d<c.length-1&&(g-=c[d].w,!(g<=0));d++);l.push(c.splice(d,1)[0].m)}for(let m of l){if(m.lives>0){m.lives--,o.push(m.id);continue}this.fall(m),a.push(m.id)}return{blocked:!1,fell:a,saved:o,foretold:this.predict&&this.predict.done&&l[0]&&l[0].id===this.predict.id&&a.includes(this.predict.id)?this.predict.id:0}}fall(t){t.alive=!1,t.fell=this.t,t.climb=null,t.door=-1,this.emit({k:"fall",id:t.id})}rise(t,e){t.alive||(t.alive=!0,t.inRun=!0,t.climb=null,t.y=0,this.emit({k:"rise",id:t.id,why:e}))}spawnMonster(t,e=!1){let n=this.alive,s=t?(70+9*n)*(1+this.floor*.1)*(e?1.25:1):(18+3*n)*(1+this.floor*.07),r=Math.round(s*this.o.monsterHpMul),a=t?qc[this.bossCount++%qc.length]:this.theme.mname||"a monster";this.monster={kind:t?"boss":this.theme.monster,name:a,hp:r,max:r,boss:t,summoned:e,nextAtk:this.t+(t?4.5:3.5),atkN:0,hitters:new Map},this.setPhase(t?"boss":"monster",t?this.o.bossSeconds:this.o.monsterSeconds),this.emit({k:"monster",kind:this.monster.kind,name:a,hp:r,boss:t,summoned:e})}hit(t,e){if(this.t-t.attackT<.35)return;t.attackT=this.t;let n=this.rng()<.15;this.damage(t,(2+this.rng()*2)*e*(n?2:1)*this.o.dmgMul,n)}damage(t,e,n,s=!1){let r=this.monster;!r||r.hp<=0||(e=Math.max(.1,e),r.hp=Math.max(0,r.hp-e),r.hitters.set(t.id,(r.hitters.get(t.id)||0)+e),t.hits++,t.hitT=this.t,(!s||e>=1)&&this.emit({k:"hit",id:t.id,d:Math.round(e),c:n?1:0}),r.hp<=0&&this.monsterDown())}monsterDown(){let t=this.monster,e=[...t.hitters.entries()].sort((s,r)=>r[1]-s[1]);for(let[s,r]of e){let a=this.byId.get(s);a&&(a.runPts+=Math.min(40,5+Math.round(r/3)))}let n=e.length?e[0][0]:0;if(n&&(this.byId.get(n).runPts+=t.boss?40:15),t.boss){let s=this.ghosts();for(let r of s)this.rise(r,"boss");this.addFuel(t.summoned?100:35),this.emit({k:"mwin",boss:!0,name:t.name,top:n,rescued:s.length,summoned:t.summoned}),this.monster=null,this.setPhase("victory",this.o.victorySeconds),t.summoned&&(this.skipBanked=!0)}else this.addFuel(10),this.emit({k:"mwin",boss:!1,name:t.name,top:n}),this.monster=null,this.setPhase("victory",this.o.victorySeconds*.8)}monsterWins(){let t=this.monster,e=this.casualties(t.boss?.3:.2);this.addFuel(t.boss?-28:-12),this.emit({k:"mlose",boss:t.boss,name:t.name,...e}),this.monster=null,this.setPhase("trap",this.o.trapSeconds*.8)}solveRiddle(t,e){this.riddle.solved=t.id,t.runPts+=40,t.riddles++,this.addFuel(12),this.emit({k:"rwin",id:t.id,a:e,bot:t.bot}),this.phaseEnd=Math.min(this.phaseEnd,this.t+4.5)}startClimb(t=!1){if(this.pendingSummon&&!this.monster){let r=this.pendingSummon.by;this.pendingSummon=null,this.emit({k:"summon",id:r}),this.spawnMonster(!0,!0);return}this.monster=null,this.riddle=null;for(let r of this.aliveList())r.runPts+=10,r.floors++;let e=this.aliveList().sort((r,a)=>Math.hypot(r.x-Me.x,r.z-Me.z)-Math.hypot(a.x-Me.x,a.z-Me.z)),n=this.o.climbSeconds,s=Math.min(.14,n*.5/Math.max(1,e.length));e.forEach((r,a)=>{r.climb={delay:this.t+a*s,s:0,on:!1},r.door=-1}),this.lift=t||this.skipBanked,this.skipBanked=!1,this.setPhase("climb",n),this.emit({k:"climb",lift:this.lift,floor:this.floor}),this.lift&&(this.liftPending=!0,this.addFuel(10),this.liftFloor=this.floor+2),this.nextTheme(this.floor+(this.lift?2:1))}endRun(t){let e=[...this.people.values()].filter(a=>a.inRun&&!a.bot),n=[...this.people.values()].filter(a=>a.inRun&&!a.bot&&a.runPts>0).sort((a,o)=>o.runPts-a.runPts).slice(0,3),s=[...this.people.values()].filter(a=>a.inRun).sort((a,o)=>o.runPts-a.runPts);for(let a of e)a.pts+=a.runPts;let r=this.floor;this.sessionBest=Math.max(this.sessionBest,r),this.lastResult={run:this.run,floor:r,reason:t,players:e.map(a=>({uid:a.uid,name:a.name,pts:a.runPts,floors:a.floors,riddles:a.riddles})),top:n.map(a=>a.id)},this.monster=null,this.riddle=null,this.kinds=[];for(let a of this.people.values())a.climb=null;this.setPhase("end",this.o.endSeconds),this.emit({k:"end",floor:r,reason:t,top:(n.length?n:s.slice(0,3)).map(a=>a.id),best:this.sessionBest})}step(t){this.t+=t;let e=this.phase;if(e!=="gather"&&e!=="end"&&(this.fuel=Math.max(0,this.fuel-this.o.fuelDrain*(1+this.floor*.07)*t*(e==="climb"||e==="enter"?.5:1)),this.fuel<25&&!this.lowWarned&&(this.lowWarned=!0,this.emit({k:"lowfuel"}))),this.bots(t),this.monster&&this.t>=this.monster.nextAtk&&this.monsterAttack(),this.riddle&&!this.riddle.solved&&this.o.bots&&this.t>this.riddle.botAt&&this.t-this.humanAt>45&&(this.riddle.botAt=1e9,this.rng()<.7)){let n=this.aliveList().filter(s=>s.bot);n.length&&this.solveRiddle(n[this.r(n.length)],this.riddle.a[0])}if(this.move(t),e!=="gather"&&e!=="end"){if(this.alive===0)return this.endRun("fallen");if(this.fuel<=0)return this.endRun("dark")}if(!(this.t<this.phaseEnd))switch(e){case"gather":if(this.alive===0&&(this.fillBots(),!this.alive)){this.phaseEnd=this.t+2;return}this.nextFloor();break;case"enter":this.doors===0?this.spawnMonster(!0):this.startVote();break;case"vote":this.closeVote();break;case"reveal":this.resolve();break;case"monster":case"boss":this.monsterWins();break;case"riddle":if(!this.riddle.solved){this.addFuel(-10),this.emit({k:"rfail",a:this.riddle.a[0]}),this.riddle.solved=-1,this.phaseEnd=this.t+3.5;return}this.startClimb();break;case"treasure":case"trap":case"victory":this.startClimb();break;case"climb":this.floor>=this.o.topFloor?(this.floor=this.o.topFloor,this.endRun("top")):this.nextFloor();break;case"end":this.startRun();break}}monsterAttack(){let t=this.monster;t.atkN++,t.nextAtk=this.t+(t.boss?4:3.2),this.addFuel(t.boss?-4:-3);let e=null;t.boss&&t.atkN%3===0&&(e=this.casualties(.08,new Set,1)),this.emit({k:"matk",boss:t.boss,slam:!!e,...e||{}})}bots(t){if(this.o.bots){for(let e of this.people.values())if(!(!e.bot||!e.alive)){if(this.phase==="vote"&&e.door<0&&this.rng()<t*.25&&this.t-this.phaseStart<this.o.voteSeconds*.8){let n=this.prophecy>=0&&this.rng()<.5?this.prophecy:this.r(this.doors);e.door=n,this.countVotes(),this.emit({k:"vote",id:e.id,d:n})}this.monster&&this.rng()<t*this.o.botHitRate&&this.damage(e,(1.2+this.rng()*1.6)*this.o.dmgMul,!1)}}}move(t){let e=[];for(let d of this.people.values())d.alive&&e.push(d);e.sort((d,u)=>d.id-u.id);let n=this.doors?os(this.doors):[],s=[[],[],[]],r=[];for(let d of e)(this.phase==="vote"||this.phase==="reveal")&&d.door>=0?s[d.door].push(d):r.push(d);let a=(d,u,f,_,x)=>d.forEach((p,y)=>{let R=_*Math.sqrt(y+.5),E=y*2.39996;p.tx=u+Math.cos(E)*R,p.tz=f+Math.sin(E)*R*x}),o=this.phase==="monster"||this.phase==="boss",l=r.length>40?.52:r.length>20?.6:.7;a(r,0,o?-.6:-1.9,l,.55),s.forEach((d,u)=>{d.length&&a(d,n[u],Ee+3,.5,.7)});let c=this.phase==="climb",m=Me.x-Me.r,g=Me.z;for(let d of e){if(c&&d.climb){let x=d.climb;if(this.t<x.delay?(d.tx=m-.6,d.tz=g+1.2):x.on||(d.tx=m,d.tz=g,(Math.hypot(d.x-m,d.z-g)<.5||this.t-x.delay>1.6)&&(x.on=!0,x.s=0)),x.on){x.s=Math.min(1,x.s+t/1.7);let p=Math.PI-x.s*Math.PI*2,y=Me.x+Math.cos(p)*Me.r,R=Me.z+Math.sin(p)*Me.r;d.face=Math.atan2(y-d.x,R-d.z)||d.face,d.x=y,d.z=R,d.y=x.s*ge;continue}}let u=d.tx-d.x,f=d.tz-d.z,_=Math.hypot(u,f);if(_>.05){let x=Math.min(_,Ix*t*(_>3?1.4:1));d.x+=u/_*x,d.z+=f/_*x,_>.3&&(d.face=Math.atan2(u,f))}else(o||this.phase==="vote"||this.phase==="enter")&&(d.face=Math.PI)}}snapshot(){let t=[],e=[],n=[];for(let l of this.people.values())l.alive?e.push(l):l.inRun&&n.push(l);let s=e;e.length>this.o.sendCap&&(s=e.slice().sort((l,c)=>(c.bot?0:1)-(l.bot?0:1)||c.lastAct-l.lastAct).slice(0,this.o.sendCap));let r=0,a=0;for(let l of e)!l.bot&&l.runPts>a&&(a=l.runPts,r=l.id);for(let l of s){let c=Pe.alive|(l.bot?Pe.bot:0)|(this.t-l.cmdT<1.2?Pe.cmd:0)|(l.lives?Pe.life:0)|(l.id===r?Pe.crown:0)|(this.t-l.hitT<.3?Pe.hit:0)|(this.t-l.giftT<3?Pe.gift:0);(this.phase==="vote"||this.phase==="reveal")&&l.door>=0&&(c|=l.door+1<<Yc),l.climb&&l.climb.on&&(c|=2048),t.push(l.id,Math.round(l.x*100)/100,Math.round(l.y*100)/100,Math.round(l.z*100)/100,Math.round(l.face*100)/100,c)}n.sort((l,c)=>c.fell-l.fell);for(let l of n.slice(0,this.o.ghostCap))t.push(l.id,0,0,0,0,Pe.ghost|(l.bot?Pe.bot:0));let o=this.monster;return{tm:Math.round(this.t*1e3)/1e3,ph:this.phase,tl:Math.max(0,Math.round((this.phaseEnd-this.t)*10)/10),pd:Math.round((this.phaseEnd-this.phaseStart)*10)/10,fl:this.floor,th:this.themeIdx,nd:this.doors,vc:this.voteCounts.slice(0,this.doors),pr:this.prophecy,ch:this.chosen,kinds:this.phase==="vote"||this.phase==="enter"?null:this.kinds,fuel:Math.round(this.fuel*10)/10,sh:this.shields,n:e.length,gh:n.length,hype:this.hype,run:this.run,best:this.sessionBest,mo:o?{k:o.kind,n:o.name,hp:Math.ceil(o.hp),max:o.max,b:o.boss?1:0}:null,ri:this.riddle?this.riddle.i:-1,rs:this.riddle&&this.riddle.solved||0,pdc:this.predict?this.predict.id:0,pk:this.predict?this.predict.kind:"",lift:this.phase==="climb"&&this.lift?1:0,nth:this.phase==="climb"&&this.upcoming?this.upcoming.th:-9,f:t}}board(t=8){let e=new Map;for(let n of this.people.values())!n.bot&&(n.pts||n.runPts)&&e.set(n.uid,{name:n.name,pts:n.pts+(n.inRun&&this.phase!=="end"?n.runPts:0),riddles:n.riddles,floors:n.floors});return[...e.values()].sort((n,s)=>s.pts-n.pts).slice(0,t)}};var Be=Math.PI*2,ud=[16767416,15843471,14262374,11037509,8014380,16769999],dd={treasure:16761402,trap:16724804,monster:6160250,riddle:11566335},fd=i=>i===-2?Vn:i===-1||i===void 0||i<-2?Hn:Tn[i]||Hn,Ti=10.2;function pd(i,t={}){let e=new al({canvas:i,antialias:!!t.aa,alpha:!1,depth:!0,stencil:!1,powerPreference:"default",preserveDrawingBuffer:!!t.preserve,failIfMajorPerformanceCaveat:!1});if(!e.getContext())throw new Error("no webgl");e.outputColorSpace=tn,e.toneMapping=Ur,e.toneMappingExposure=1.1,e.shadowMap.enabled=!1;let n=new mr;n.background=new Bt(1182240),n.fog=new pr(1708080,14,42);let s=new ln(62,9/16,.4,120),r=[],a=h=>(r.push(h),h),o=new Ir(12166911,3809328,1.15);n.add(o);let l=new Nr(6969994,.35);n.add(l);let c=new Lr(16757611,30,26,1.6);n.add(c);let m=a(new ts(new Uint8Array([80,165,255]),3,1,Ys));m.minFilter=m.magFilter=Ve,m.needsUpdate=!0;let g=(h,S={})=>a(new es({color:h,gradientMap:m,...S}));function d(h,S,T,I=r,{mip:w=!0,repeat:k=null}={}){let et=document.createElement("canvas");et.width=h,et.height=S,T(et.getContext("2d"),h,S);let F=new Mr(et);return F.colorSpace=tn,F.generateMipmaps=w,w||(F.minFilter=1006),F.anisotropy=2,k&&(F.wrapS=F.wrapT=1e3,F.repeat.set(k[0],k[1])),I.push(F),F}let u=7,f=()=>(u=u*16807%2147483647,(u-1)/2147483646),_=d(256,256,(h,S,T)=>{h.fillStyle="#5a5262",h.fillRect(0,0,S,T);let I=8;for(let w=0;w<I;w++){let k=T/I,et=w%2*.5;for(let F=-1;F<5;F++){let q=S/4,Z=(F+et)*q,st=w*k;h.fillStyle=`hsl(${250+f()*30}, ${8+f()*8}%, ${52+f()*22}%)`,h.fillRect(Z+3,st+3,q-6,k-6),h.fillStyle="rgba(0,0,0,0.12)",h.fillRect(Z+3,st+k-9,q-6,6);for(let pt=0;pt<6;pt++)h.fillStyle=`rgba(0,0,0,${f()*.12})`,h.fillRect(Z+f()*q,st+f()*k,6+f()*10,3+f()*5)}}},r,{repeat:[5,1.6]}),x=d(64,64,(h,S)=>{let T=h.createRadialGradient(S/2,S/2,0,S/2,S/2,S/2);T.addColorStop(0,"rgba(0,0,0,0.6)"),T.addColorStop(.6,"rgba(0,0,0,0.28)"),T.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=T,h.fillRect(0,0,S,S)},r,{mip:!1}),p=d(128,256,(h,S,T)=>{h.fillStyle="#4a2a1a",h.fillRect(0,0,S,T);for(let I=0;I<4;I++){h.fillStyle=`hsl(22, 45%, ${22+f()*10}%)`,h.fillRect(I*32+2,0,28,T),h.fillStyle="rgba(0,0,0,0.25)";for(let w=0;w<8;w++)h.fillRect(I*32+4+f()*22,f()*T,2,20+f()*40)}for(let I of[40,210]){h.fillStyle="#2a2a30",h.fillRect(0,I,S,14),h.fillStyle="#6a6a78";for(let w=8;w<S;w+=24)h.beginPath(),h.arc(w,I+7,3,0,Be),h.fill()}h.strokeStyle="#c9a24a",h.lineWidth=5,h.beginPath(),h.arc(S*.78,T*.55,10,0,Be),h.stroke()}),y=[1,2,3].map(h=>d(128,128,S=>{let T=S.createRadialGradient(64,64,10,64,64,62);T.addColorStop(0,"#fff3c4"),T.addColorStop(.75,"#f0b43c"),T.addColorStop(1,"#8a4a10"),S.fillStyle=T,S.beginPath(),S.arc(64,64,60,0,Be),S.fill(),S.lineWidth=6,S.strokeStyle="#5a2a00",S.stroke(),S.font="900 86px -apple-system, Arial Black, sans-serif",S.textAlign="center",S.textBaseline="middle",S.fillStyle="#3a1300",S.fillText(String(h),64,70)})),R=d(128,128,(h,S)=>{h.strokeStyle="rgba(255,255,255,0.75)",h.lineWidth=1.5;for(let T=0;T<7;T++){let I=T/6*(Math.PI/2);h.beginPath(),h.moveTo(0,0),h.lineTo(Math.cos(I)*S*1.4,Math.sin(I)*S*1.4),h.stroke()}for(let T=14;T<S*1.3;T+=16){h.beginPath();for(let I=0;I<=6;I++){let w=I/6*(Math.PI/2),k=T*(.92+I%2*.08);I?h.lineTo(Math.cos(w)*k,Math.sin(w)*k):h.moveTo(Math.cos(w)*k,Math.sin(w)*k)}h.stroke()}}),E=d(128,128,(h,S,T)=>{h.fillStyle="#3a2214",h.fillRect(0,0,S,T);for(let I=0;I<4;I++){let w=4,k=I*32;for(h.fillStyle="#24140a",h.fillRect(0,k+28,S,4);w<S-6;){let et=5+f()*8,F=18+f()*8;h.fillStyle=`hsl(${f()*360}, 45%, ${28+f()*22}%)`,h.fillRect(w,k+28-F,et,F),h.fillStyle="rgba(255,220,140,0.35)",h.fillRect(w,k+28-F+3,et,2),w+=et+1}}}),P=d(256,256,(h,S)=>{let T=S/2;h.fillStyle="#f3e3bc",h.beginPath(),h.arc(T,T,T-6,0,Be),h.fill(),h.lineWidth=12,h.strokeStyle="#8a5a1a",h.stroke(),h.fillStyle="#3a2410",h.font="bold 30px Georgia, serif",h.textAlign="center",h.textBaseline="middle",["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"].forEach((I,w)=>{let k=w/12*Be-Math.PI/2;h.fillText(I,T+Math.cos(k)*(T-34),T+Math.sin(k)*(T-34))})}),C=d(64,128,(h,S,T)=>{let I=h.createLinearGradient(0,0,S,T);I.addColorStop(0,"#b9c8ff"),I.addColorStop(.45,"#3a3870"),I.addColorStop(.55,"#d8e0ff"),I.addColorStop(1,"#2a2450"),h.fillStyle=I,h.fillRect(0,0,S,T)});C.wrapT=1e3;let v=(h,S)=>d(256,256,(T,I,w)=>{let k=h==="belfry"?Vn:h==="gate"?Hn:Tn.find(Z=>Z.id===h)||Hn,et=new Bt(k.floor),F=(Z,st)=>"#"+Z.clone().multiplyScalar(st).getHexString();if(T.fillStyle=F(et,1),T.fillRect(0,0,I,w),h==="library"||h==="attic"||h==="gate"){for(let Z=0;Z<8;Z++){T.fillStyle=F(et,.85+f()*.3),T.fillRect(Z*32+1,0,30,w);for(let st=0;st<2;st++)T.fillStyle="rgba(0,0,0,0.35)",T.fillRect(Z*32+1,f()*w,30,2);for(let st=0;st<10;st++)T.fillStyle="rgba(0,0,0,0.12)",T.fillRect(Z*32+3+f()*24,f()*w,1.5,14+f()*30)}h!=="attic"&&(T.fillStyle="rgba(120,20,40,0.55)",T.fillRect(I*.32,0,I*.36,w),T.fillStyle="rgba(255,200,90,0.5)",T.fillRect(I*.32,0,4,w),T.fillRect(I*.68-4,0,4,w))}else if(h==="mirror"||h==="ballroom")for(let Z=0;Z<8;Z++)for(let st=0;st<8;st++)T.fillStyle=(st+Z)%2?F(et,1.25):F(et,.45),T.fillRect(st*32,Z*32,32,32);else if(h==="clock"){for(let Z=0;Z<4;Z++)for(let st=0;st<4;st++)T.fillStyle=F(et,.8+f()*.4),T.fillRect(st*64+2,Z*64+2,60,60);T.strokeStyle="rgba(255,210,120,0.6)",T.lineWidth=3;for(let Z of[40,80,118])T.beginPath(),T.arc(I/2,w/2,Z,0,Be),T.stroke()}else{for(let Z=0;Z<6;Z++)for(let st=0;st<6;st++)T.fillStyle=F(et,.7+f()*.45),T.fillRect(st*43+2+Z%2*20,Z*43+2,39,39);if(h==="lab"){T.strokeStyle="rgba(140,255,170,0.5)",T.lineWidth=3,T.beginPath(),T.arc(I/2,w/2,70,0,Be),T.stroke();for(let Z=0;Z<6;Z++){let st=Z/6*Be;T.beginPath(),T.moveTo(I/2,w/2),T.lineTo(I/2+Math.cos(st)*70,w/2+Math.sin(st)*70),T.stroke()}}if(h==="belfry"||h==="crypt"){T.strokeStyle="rgba(190,150,255,0.55)",T.lineWidth=4,T.beginPath();for(let Z=0;Z<=5;Z++){let st=Z*2/5*Be-Math.PI/2;T.lineTo(I/2+Math.cos(st)*90,w/2+Math.sin(st)*90)}T.stroke(),T.beginPath(),T.arc(I/2,w/2,98,0,Be),T.stroke()}}let q=T.createRadialGradient(I/2,w/2,I*.2,I/2,w/2,I*.7);q.addColorStop(0,"rgba(0,0,0,0)"),q.addColorStop(1,"rgba(0,0,0,0.45)"),T.fillStyle=q,T.fillRect(0,0,I,w)},S),M={box:a(new vi(1,1,1)),cyl:a(new In(.5,.5,1,10)),cyl6:a(new In(.5,.5,1,6)),sph:a(new Pn(.5,12,8)),plane:a(new Di(1,1)),cone:a(new ks(.5,1,6)),torus:a(new Ar(1,.08,6,24)),floor:a(new wr(Ti,8).rotateX(-Math.PI/2).rotateY(Math.PI/8)),wall:a(new In(Ti,Ti,ge,8,1,!0).rotateY(Math.PI/8).translate(0,ge/2,0)),step:a(new vi(1.5,.22,.7)),gear:a(new In(1,1,.25,12)),ghost:a(new zs([[0,0],[.44,.02],[.47,.3],[.43,.62],[.35,.86],[.2,1.02],[0,1.08]].map(([h,S])=>new jt(h,S)),12)),bell:a(new zs([[.05,1.6],[.45,1.55],[.6,1.2],[.7,.6],[.95,.15],[1.05,0],[0,0]].map(([h,S])=>new jt(h,S)),14))};{let h=M.ghost.attributes.position;for(let S=0;S<h.count;S++){let T=h.getY(S);if(T<.05){let I=Math.atan2(h.getZ(S),h.getX(S));h.setY(S,T-.08-.08*Math.sin(I*6))}}M.ghost.computeVertexNormals()}let B=new Map,N=new pe,O=new pe,U=new Cn,V=new Kn,L=new H,Y=new H,K=new pe;function $(h,S,T){let I=fd(S),w=I.id,k=[],et=new cn,F=Ct=>{let At=new es({gradientMap:m,...Ct});return k.push(At),At},q=Ct=>{let At=new mn(Ct);return k.push(At),At},Z=Ct=>(et.add(Ct),Ct),st=(Ct,At,Nt)=>Z(new Rn(Ct,At,Nt)),pt=(Ct,At,Nt,vt,Pt,Ot,G,X,Ut=0,ce=0,Ne=0)=>{U.setFromEuler(V.set(ce,Ut,Ne)),Ct.setMatrixAt(At,N.compose(L.set(Nt,vt,Pt),U,Y.set(Ot,G,X)))};et.position.y=h*ge,Z(new Vt(M.floor,F({map:v(w,k),side:nn}))),Z(new Vt(M.wall,F({map:_,color:I.wall,side:en})));let Et=st(M.box,F({color:new Bt(I.wall).multiplyScalar(.7)}),8);for(let Ct=0;Ct<8;Ct++){let At=Ct/8*Be;if(Math.sin(At)>.3){pt(Et,Ct,0,-50,0,.01,.01,.01,0);continue}pt(Et,Ct,Math.cos(At)*(Ti-.3),ge/2,Math.sin(At)*(Ti-.3),.9,ge,.9,-At)}let Jt=Z(new Vt(M.torus,F({color:9071162,emissive:2759176})));Jt.rotation.x=Math.PI/2,Jt.scale.set(Ti-.4,Ti-.4,2),Jt.position.y=.05;let Te=st(M.step,F({color:6971504}),16);for(let Ct=0;Ct<16;Ct++){let At=(Ct+.5)/16,Nt=Math.PI-At*Be;pt(Te,Ct,Me.x+Math.cos(Nt)*Me.r,At*ge-.1,Me.z+Math.sin(Nt)*Me.r,1,1,1,-Nt)}let ee=Z(new Vt(M.cyl,F({color:4866128})));ee.position.set(Me.x,ge/2,Me.z),ee.scale.set(.5,ge,.5);let fe=[],le=[];for(let Ct=0;Ct<10;Ct++){let At=-Math.PI*.95+Ct/9*Math.PI*1.9+Math.PI/2,Nt=Ti-1.2,vt=Math.cos(At)*Nt,Pt=Math.sin(At)*Nt;Math.hypot(vt-Me.x,Pt-Me.z)<2.6||Pt>3||le.push([vt,Pt,.5+Ct%3*.35])}let Rt=st(M.cyl,F({color:15985362,emissive:3811856}),le.length),ze=st(M.cyl6,F({color:6965802}),le.length);le.forEach(([Ct,At,Nt],vt)=>{pt(Rt,vt,Ct,Nt/2+.6,At,.22,Nt,.22),pt(ze,vt,Ct,.3,At,.5,.6,.5),fe.push([Ct,Nt+.75,At])});let Kt=[],Ae={fi:h,th:S,id:w,grp:et,list:k,doors:[],flames:fe,anim:Kt,nd:T,extra:{}};if(T){let Ct=os(T),At=st(M.box,F({color:3813440}),T*3);Ct.forEach((Nt,vt)=>{pt(At,vt*3,Nt-1.2,2,Ee,.45,4.2,.7),pt(At,vt*3+1,Nt+1.2,2,Ee,.45,4.2,.7),pt(At,vt*3+2,Nt,4.2,Ee,2.9,.55,.75);let Pt=Z(new Vt(M.plane,q({color:328200})));Pt.position.set(Nt,2,Ee-.05),Pt.scale.set(2,4,1);let Ot=Z(new Vt(M.plane,q({color:0,transparent:!0,blending:yi,depthWrite:!1})));Ot.position.set(Nt,2,Ee-.02),Ot.scale.set(2,4,1);let G=Z(new qe);G.position.set(Nt-.98,0,Ee+.08);let X=new Vt(M.box,F({map:p}));X.scale.set(1.95,3.95,.16),X.position.set(.975,1.98,0),G.add(X);let Ut=Z(new Vt(M.plane,q({map:y[vt],transparent:!0})));Ut.position.set(Nt,5.05,Ee+.42),Ut.scale.set(1.25,1.25,1),Ae.doors.push({x:Nt,pivot:G,glow:Ot,plaque:Ut,open:0})})}let we=[[-8.2,-1.5,Math.PI/2],[-7.2,3.6,Math.PI/2+.5],[8.4,3.2,-Math.PI/2-.4],[-6.6,-5.6,Math.PI/4]];if(w==="library"||w==="gate"){let Ct=st(M.box,F({map:E}),4);if(we.forEach(([At,Nt,vt],Pt)=>pt(Ct,Pt,At,2.2,Nt,2.6,4.4,.9,vt)),w==="library"){let At=st(M.box,F({color:16777215}),10),Nt=new Bt;for(let vt=0;vt<10;vt++)At.setColorAt(vt,Nt.setHSL(f(),.6,.45));Kt.push(vt=>{for(let Pt=0;Pt<10;Pt++){let Ot=vt*.3+Pt*.63;pt(At,Pt,Math.cos(Ot)*(3+Pt%3),4.6+Math.sin(vt*1.3+Pt)*.5,-1.5+Math.sin(Ot)*2.5,.5,.12,.38,vt*.8+Pt,Math.sin(vt+Pt)*.4)}At.instanceMatrix.needsUpdate=!0})}else{let At=Z(new Vt(M.plane,q({color:6953546,side:nn})));At.position.set(0,5.6,Ee+.5),At.scale.set(3,1.6,1)}}else if(w==="crypt"){let Ct=st(M.cyl6,F({color:4864560}),3);[[-7.6,-1,.3],[-6.8,3.2,-.4],[8.1,3.8,.5]].forEach(([vt,Pt,Ot],G)=>pt(Ct,G,vt,.45,Pt,1.3,2.5,.8,Ot,Math.PI/2));let At=st(M.sph,F({color:15524556}),9);for(let vt=0;vt<9;vt++){let Pt=f()*Be,Ot=7+f()*1.6;pt(At,vt,Math.cos(Pt)*Ot,.25,Math.abs(Math.sin(Pt))*Ot*.8-2,.5,.45,.5)}let Nt=st(M.box,F({color:5921382}),3);[[-5.6,-5.8],[3.2,-5.4],[-8.2,1.6]].forEach(([vt,Pt],Ot)=>pt(Nt,Ot,vt,.7,Pt,1,1.4,.3,f()*.3))}else if(w==="mirror"){let Ct=st(M.box,F({color:13214282,emissive:3811840}),4),At=st(M.plane,q({map:C}),4);[[-8.6,-2.5,Math.PI/2],[-8,2.4,Math.PI/2+.3],[8.8,2.6,-Math.PI/2-.3],[-6.4,-6.2,Math.PI/4]].forEach(([Nt,vt,Pt],Ot)=>{pt(Ct,Ot,Nt,2.6,vt,1.7,4,.2,Pt),pt(At,Ot,Nt+Math.sin(Pt)*.13,2.6,vt+Math.cos(Pt)*.13,1.4,3.6,1,Pt)}),Kt.push(Nt=>{C.offset.y=Nt*.05%1})}else if(w==="clock"){let Ct=Z(new Vt(M.plane,q({map:P,transparent:!0})));Ct.position.set(-8.5,4.4,-1.2),Ct.rotation.y=Math.PI/2,Ct.scale.set(4.2,4.2,1);let At=st(M.box,F({color:2759178}),2),Nt=st(M.gear,F({color:12618298,emissive:2759168}),5),vt=[[-7.6,1.2,3.6,1.2],[-6.6,6.2,-5.5,1.6],[8.3,5.4,2.4,1.4],[8.6,1.5,4.8,.9],[-8.4,7,2.4,1]];Kt.push(Pt=>{let Ot=Pt*.08,G=Pt*1;pt(At,0,-8.42,4.4+Math.cos(Ot)*.6,-1.2-Math.sin(Ot)*.6,.05,1.2,.14,0,Ot),pt(At,1,-8.4,4.4+Math.cos(G)*.85,-1.2-Math.sin(G)*.85,.05,1.7,.09,0,G),At.instanceMatrix.needsUpdate=!0,vt.forEach(([X,Ut,ce,Ne],fn)=>pt(Nt,fn,X,Ut,ce,Ne,1,Ne,Math.atan2(-X,-ce),Math.PI/2,(fn%2?-1:1)*Pt*.7/Ne)),Nt.instanceMatrix.needsUpdate=!0})}else if(w==="attic"){let Ct=st(M.box,F({color:4861984}),5);for(let Ot=0;Ot<5;Ot++)pt(Ct,Ot,0,ge-1.2,-6+Ot*3,Ti*2,.5,.5);let At=st(M.box,F({color:8018480}),6);[[-7.8,.6,-2.6,1.2],[-7.4,.5,2.2,1],[-7.6,1.6,-2.4,.8],[8.2,.6,3.2,1.2],[-5.5,.5,-6,1],[8.4,1.6,3.4,.8]].forEach(([Ot,G,X,Ut],ce)=>pt(At,ce,Ot,G,X,Ut,Ut,Ut,f()));let Nt=st(M.plane,q({map:R,transparent:!0,depthWrite:!1,side:nn,opacity:.8}),4);pt(Nt,0,-6.8,ge-2.2,-6.8,4,4,1,Math.PI/4),pt(Nt,1,7.2,ge-2.2,-6.4,4,4,1,-Math.PI/4,0,Math.PI/2),pt(Nt,2,-9.2,3.5,2.5,3,3,1,Math.PI/2),pt(Nt,3,4.6,6.4,-7.4,3,3,1,0,0,Math.PI);let vt=st(M.sph,F({color:1708056}),3),Pt=st(M.cyl6,q({color:14540253}),3);Kt.push(Ot=>{for(let G=0;G<3;G++){let X=[-3.5,2.4,5.4][G],Ut=[-3.2,-4.5,.5][G],ce=5.5+Math.sin(Ot*.9+G*2)*1.2;pt(vt,G,X,ce,Ut,.45,.4,.5),pt(Pt,G,X,(ce+ge)/2,Ut,.02,ge-ce,.02)}vt.instanceMatrix.needsUpdate=!0,Pt.instanceMatrix.needsUpdate=!0})}else if(w==="lab"){let Ct=st(M.box,F({color:4863012}),2);pt(Ct,0,-7.6,.9,0,1.6,.25,4.5),pt(Ct,1,7.9,.9,3.6,1.4,.25,3,.3);let At=st(M.cyl,F({color:16777215,emissive:1118481}),12),Nt=new Bt;for(let Ot=0;Ot<12;Ot++){let G=Ot<7;pt(At,Ot,G?-7.6+(f()-.5):7.9+(f()-.5)*.8,1.35,G?-2+Ot*.6:2.6+(Ot-7)*.55,.3,.5+f()*.5,.3),At.setColorAt(Ot,Nt.setHSL([.33,.8,.55,.15][Ot%4],.9,.55))}let vt=Z(new Vt(M.sph,F({color:2236968})));vt.position.set(-4.6,.8,-4.4),vt.scale.set(2,1.6,2);let Pt=Z(new Vt(M.floor,q({color:8257386})));Pt.position.set(-4.6,1.45,-4.4),Pt.scale.setScalar(.09),Ae.extra.brew=[-4.6,1.6,-4.4]}else if(w==="ballroom"){let Ct=st(M.torus,F({color:14266442,emissive:4861952}),2);pt(Ct,0,-3,ge-2,0,1.4,1.4,1.4,0,Math.PI/2),pt(Ct,1,3.5,ge-2.4,-2.5,1.1,1.1,1.1,0,Math.PI/2),Ae.extra.chand=[[-3,ge-2,0],[3.5,ge-2.4,-2.5]];let At=st(M.ghost,q({color:13219583,transparent:!0,opacity:.32,depthWrite:!1}),4);Kt.push(Nt=>{for(let vt=0;vt<4;vt++){let Pt=Nt*.35+vt*Be/4;pt(At,vt,Math.cos(Pt)*6.8,1+Math.sin(Nt*2+vt)*.25,Math.sin(Pt)*6.8-.5,1.1,1.6,1.1,-Pt+Math.sin(Nt*3+vt)*.4)}At.instanceMatrix.needsUpdate=!0})}else if(w==="belfry"){let Ct=Z(new Vt(M.bell,F({color:13210938,emissive:3810304,side:nn})));Ct.position.set(0,ge-3.6,-4.5),Ct.scale.setScalar(1.5),Kt.push(Nt=>{Ct.rotation.z=Math.sin(Nt*1.6)*.25});let At=st(M.plane,q({color:10466559}),2);pt(At,0,-9.3,5,-1.5,2,3.2,1,Math.PI/2),pt(At,1,9.3,5,1.5,2,3.2,1,-Math.PI/2),Ae.extra.win=At}if(w==="attic"||w==="mirror"||w==="crypt"){let Ct=st(M.plane,q({color:6978228}),1);pt(Ct,0,-9.3,5.2,-3,1.8,2.8,1,Math.PI/2),Ae.extra.win=Ct}return et.traverse(Ct=>{Ct.isInstancedMesh&&(Ct.instanceMatrix.needsUpdate=!0,Ct.instanceColor&&(Ct.instanceColor.needsUpdate=!0),Ct.frustumCulled=!1)}),n.add(et),Ae}function dt(h){n.remove(h.grp);for(let S of h.list)S.dispose();h.grp.traverse(S=>{S.isInstancedMesh&&S.dispose()})}function Q(h,S,T){let I=B.get(h);return I&&(I.th!==S||I.nd!==T)&&(dt(I),B.delete(h),I=null),I||(I=$(h,S,T),B.set(h,I)),I}let ot=a(new gn({transparent:!0,depthWrite:!1,fog:!1,uniforms:{map:{value:null},time:{value:0},talk:{value:0},op:{value:0}},vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vU; uniform sampler2D map; uniform float time; uniform float talk; uniform float op;
      void main(){ vec4 c = texture2D(map, vU); if (c.a < 0.05) discard;
        float scan = 0.94 + 0.06 * sin(vU.y * 140.0 + time * 6.0);
        vec3 col = c.rgb * scan * (1.0 + talk * 0.22) + vec3(0.55,0.3,0.9) * (0.1 + talk * 0.14);
        gl_FragColor = vec4(col, c.a * op * (0.9 + 0.1 * sin(time * 2.0))); }`})),ct=new Vt(M.plane,ot);ct.scale.set(2.55,4.08,1),ct.renderOrder=7,ct.visible=!1,n.add(ct),new Rr().load(t.miraUrl||"/assets/mira-tower.png",h=>{h.colorSpace=tn,a(h),ot.uniforms.map.value=h,ct.visible=!0});let Lt=0,Xt=!1,it=1,bt=new H(-6.1,1.1,-4.9),wt=t.maxChars||60,Ft=(h,S,T=1)=>{let I=new Rn(h,S,wt*T);I.frustumCulled=!1,I.count=0;let w=new Bt(1,1,1);for(let k=0;k<wt*T;k++)I.setColorAt(k,w);return n.add(I),I},gt={body:Ft(a(new Tr(.27,.24,3,10)),g(16777215)),head:Ft(a(new Pn(.36,14,10)),g(16777215)),hair:Ft(a(new Pn(.385,14,8,0,Be,0,Math.PI*.52)),g(16777215)),eyes:Ft(a(new Pn(.058,8,6)),a(new mn({color:1774640})),2),hands:Ft(a(new Pn(.13,10,8)),g(16777215),2),feet:Ft(a(new Pn(.12,8,6)),g(2761272),2),lantern:Ft(a(new In(.11,.13,.26,6)),g(16770976,{emissive:16752672})),shadow:Ft(a(new Di(1,1).rotateX(-Math.PI/2)),a(new mn({map:x,transparent:!0,depthWrite:!1})))};gt.shadow.renderOrder=2;let qt=16,Se=new Rn(M.ghost,a(new mn({color:14214399,transparent:!0,opacity:.5,depthWrite:!1})),qt);Se.frustumCulled=!1,Se.count=0,Se.renderOrder=6,n.add(Se);let kt=new Rn(a(new Pn(.07,6,5)),a(new mn({color:1708080})),qt*2);kt.frustumCulled=!1,kt.count=0,n.add(kt);let ae=new Vt(a(new Pn(1,20,12,0,Be,0,Math.PI/2)),a(new gn({transparent:!0,depthWrite:!1,blending:yi,uniforms:{time:{value:0},a:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; varying float vY; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); vY = position.y; gl_Position = projectionMatrix * mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; varying float vY; uniform float time; uniform float a; void main(){ float f = 1.0 - abs(dot(vN, vV)); float band = 0.5 + 0.5*sin(vY*30.0 - time*3.0); gl_FragColor = vec4(vec3(0.35,0.75,1.0) * (pow(f,2.0)*0.9 + band*0.08) * a, 1.0); }"})));ae.visible=!1,ae.renderOrder=8,n.add(ae);let Qt=new cn;Qt.visible=!1,n.add(Qt);let te=a(new es({color:15265023,gradientMap:m,emissive:2763360,transparent:!0,opacity:.9})),ke=a(new mn({color:1181720})),De=a(new mn({color:16726586})),Je=[],xe={};{let h=new cn,S=new Vt(M.ghost,te);S.scale.set(2.6,2.8,2.6),h.add(S);for(let w of[-1,1]){let k=new Vt(M.sph,ke);k.position.set(w*.42,2.15,1),k.scale.set(.42,.62,.3),h.add(k);let et=new Vt(M.sph,De);et.position.set(w*.42,2.12,1.15),et.scale.set(.14,.18,.1),h.add(et)}let T=new Vt(M.sph,ke);T.position.set(0,1.55,1.12),T.scale.set(.5,.42,.2),h.add(T);for(let w of[-1,1]){let k=new Vt(M.ghost,te);k.scale.set(.5,1.2,.5),k.position.set(w*1.25,1.1,.3),k.rotation.z=w*2.2,h.add(k)}let I=new Vt(a(new In(.62,.5,.5,6,1,!0)),g(16765773,{emissive:6965760,side:nn}));I.position.set(0,3.15,0),h.add(I),h.userData={mouth:T,crown:I},xe.ghost=h,Qt.add(h)}{let h=new cn,S=g(2759210,{emissive:1048584});Je.push(S);let T=new Vt(M.sph,S);T.scale.set(2.2,1.7,2.6),T.position.set(0,1.5,-.9),h.add(T);let I=new Vt(M.sph,S);I.scale.set(1.2,1,1.1),I.position.set(0,1.3,.8),h.add(I);for(let et=0;et<6;et++){let F=new Vt(M.sph,De);F.position.set((et%3-1)*.28,1.55+Math.floor(et/3)*.2,1.3),F.scale.setScalar(.14),h.add(F)}let w=new Vt(M.sph,g(16726586,{emissive:6946816}));w.scale.set(.6,.6,.2),w.position.set(0,2.25,-1.4),w.rotation.x=-.9,h.add(w);let k=[];for(let et=0;et<8;et++){let F=et<4?-1:1,q=et%4,Z=new cn;Z.position.set(F*.6,1.4,.6-q*.5);let st=new Vt(M.cyl6,S);st.scale.set(.16,1.6,.16),st.position.set(F*.6,.45,0),st.rotation.z=-F*1,Z.add(st);let pt=new Vt(M.cyl6,S);pt.scale.set(.12,1.8,.12),pt.position.set(F*1.55,-.35,0),pt.rotation.z=F*.5,Z.add(pt),Z.rotation.y=F*(q-1.5)*.35,h.add(Z),k.push(Z)}h.userData={legs:k},xe.spider=h,Qt.add(h)}{let h=new cn,S=g(8011292),T=g(14725184,{emissive:3810304});Je.push(S);let I=new Vt(M.box,S);I.scale.set(2.6,1.3,1.7),I.position.y=.65,h.add(I);let w=new Vt(M.box,T);w.scale.set(2.7,.2,1.8),w.position.y=1.2,h.add(w);let k=new qe;k.position.set(0,1.3,-.85),h.add(k);let et=new Vt(M.box,S);et.scale.set(2.6,.6,1.7),et.position.set(0,.3,.85),k.add(et);let F=new Rn(M.cone,g(16774880),12);F.frustumCulled=!1;for(let st=0;st<12;st++){let pt=st>=6;U.setFromEuler(V.set(pt?Math.PI:0,0,0)),F.setMatrixAt(st,N.compose(L.set(-1.05+st%6*.42,pt?1.15:1.45,.75),U,Y.set(.22,.4,.22)))}h.add(F);let q=new Vt(M.sph,g(16730746));q.scale.set(.7,.25,1.4),q.position.set(0,1.35,.6),h.add(q);let Z=a(new mn({color:16769354}));for(let st of[-1,1]){let pt=new Vt(M.sph,Z);pt.position.set(st*.6,.65,.75),pt.scale.setScalar(.3),k.add(pt)}h.userData={lidP:k},xe.mimic=h,Qt.add(h)}let me=new cn;me.visible=!1,n.add(me);{let h=g(9062944),S=g(16761402,{emissive:6963200}),T=new Vt(M.box,h);T.scale.set(1.6,.9,1),T.position.y=.45,me.add(T);let I=new Vt(M.box,S);I.scale.set(1.68,.16,1.08),I.position.y=.8,me.add(I);let w=new qe;w.position.set(0,.9,-.5),me.add(w);let k=new Vt(M.box,h);k.scale.set(1.6,.36,1),k.position.set(0,.18,.5),w.add(k);let et=new Vt(M.box,S);et.scale.set(.3,.4,1.06),et.position.set(0,.18,.5),w.add(et);let F=new Vt(M.box,a(new mn({color:16771488})));F.scale.set(1.4,.1,.8),F.position.y=.86,me.add(F),me.userData={lp:w}}let Ue=24,Le=new Rn(M.box,g(16777215),Ue);Le.frustumCulled=!1,Le.count=0;{let h=new Bt(1,1,1);for(let S=0;S<Ue;S++)Le.setColorAt(S,h)}n.add(Le);let Qe=[],Fe=new cn;Fe.visible=!1,n.add(Fe);{let h=new Vt(M.cyl6,g(9075306));h.scale.set(.12,7,.12),h.position.y=-3.5,Fe.add(h);let S=new Vt(a(new In(1.6,1.6,.12,16,1,!1,0,Math.PI)),g(14212584,{emissive:2236979}));S.rotation.set(0,Math.PI/2,Math.PI/2),S.position.y=-7,Fe.add(S)}let z=12,Xe=new Rn(a(new ks(.22,1.3,5)),g(14217424,{emissive:2113568}),z);Xe.frustumCulled=!1,Xe.count=0,n.add(Xe);let ve=[],be=40,xt=new Rn(a(new Er(.86,1,36).rotateX(-Math.PI/2)),a(new mn({color:16777215,transparent:!0,depthWrite:!1,blending:yi,side:nn})),be);xt.frustumCulled=!1,xt.renderOrder=4;{let h=new Bt(0,0,0);for(let S=0;S<be;S++)xt.setColorAt(S,h)}n.add(xt);let Re=[];function zt(h,S){let T=a(new Ye),I=new Float32Array(h*3),w=new Float32Array(h*4),k=new Float32Array(h);T.setAttribute("position",new hn(I,3)),T.setAttribute("col",new hn(w,4)),T.setAttribute("size",new hn(k,1));let et=a(new gn({transparent:!0,depthWrite:!1,blending:S?yi:ki,uniforms:{px:{value:400}},vertexShader:"attribute vec4 col; attribute float size; uniform float px; varying vec4 vC; void main(){ vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(size * px / max(0.5, -mv.z), 180.0); gl_Position = projectionMatrix * mv; }",fragmentShader:S?"varying vec4 vC; void main(){ float d = length(gl_PointCoord-0.5)*2.0; float a = pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vC.rgb * a * vC.a, 1.0); }":"varying vec4 vC; void main(){ vec2 p = gl_PointCoord-0.5; if (vC.a < 0.0) { if (abs(p.x) > 0.5 || abs(p.y) > 0.28) discard; gl_FragColor = vec4(vC.rgb, 1.0); } else { float d = length(p)*2.0; if (d > 1.0) discard; gl_FragColor = vec4(vC.rgb, vC.a * (1.0 - d*d)); } }"})),F=new Bs(T,et);return F.frustumCulled=!1,n.add(F),{geo:T,pos:I,col:w,size:k,mat:et,pts:F,list:[],cap:h}}let It=zt(t.particles||900,!0),A=zt(Math.round((t.particles||900)*.45),!1);It.pts.renderOrder=9,A.pts.renderOrder=5;let b=1,W=new Bt;function rt(h,S,T,I,w,k){S=Math.max(1,Math.round(S*b));for(let et=0;et<S&&h.list.length<h.cap-80;et++){let F=Math.random()*Be,q=(k.up??.5)+Math.random()*(k.spreadUp??.5),Z=(k.speed||4)*(.4+Math.random()*.8);W.set(k.colors?k.colors[Math.random()*k.colors.length|0]:k.color),h.list.push({x:T+(Math.random()-.5)*(k.jitter||0),y:I+(Math.random()-.5)*(k.jy||0),z:w+(Math.random()-.5)*(k.jitter||0),vx:Math.cos(F)*Z*(1-q*.6),vy:Z*q*(k.vyMul??1),vz:Math.sin(F)*Z*(1-q*.6),g:k.g??9,drag:k.drag??1.5,life:(k.life||.6)*(.7+Math.random()*.6),t:0,s0:k.size||.3,s1:k.size1??(k.size||.3)*.3,r:W.r,gg:W.g,b:W.b,a:k.alpha??1,conf:!!k.confetti,spin:Math.random()*Be,floor:k.floorY??-1e9})}}function at(h,S,T){let I=h.list,w=0;for(let F=0;F<I.length;F++){let q=I[F];if(q.t+=S,q.t>=q.life)continue;q.vy-=q.g*S;let Z=Math.exp(-q.drag*S);q.vx*=Z,q.vy*=Z,q.vz*=Z,q.conf&&(q.spin+=S*6,q.vx+=Math.sin(q.spin)*S*2),q.x+=q.vx*S,q.y+=q.vy*S,q.z+=q.vz*S,q.y<q.floor+.05&&q.g>0&&(q.y=q.floor+.05,q.vy*=-.3,q.vx*=.7,q.vz*=.7),I[w++]=q}I.length=w;let k=0,et=(F,q,Z,st,pt,Et,Jt,Te)=>{h.pos[k*3]=F,h.pos[k*3+1]=q,h.pos[k*3+2]=Z,h.col[k*4]=st,h.col[k*4+1]=pt,h.col[k*4+2]=Et,h.col[k*4+3]=Jt,h.size[k]=Te,k++};if(T)for(let F of T)k<h.cap-1&&et(F[0],F[1],F[2],F[3],F[4],F[5],F[6],F[7]);for(let F of I){if(k>=h.cap)break;let q=F.t/F.life,Z=F.conf?1:1-q*q;et(F.x,F.y,F.z,F.r,F.gg,F.b,F.conf?-1:F.a*Z,F.s0+(F.s1-F.s0)*q)}h.geo.setDrawRange(0,k);for(let F of["position","col","size"]){let q=h.geo.attributes[F];q.needsUpdate=!0,q.clearUpdateRanges?.(),q.addUpdateRange?.(0,k*q.itemSize)}}let yt=a(new Ye);{let S=new Float32Array(450);for(let T=0;T<150;T++)S.set([Math.random(),Math.random(),Math.random()],T*3);yt.setAttribute("position",new hn(S,3))}let mt=new Bs(yt,a(new gn({transparent:!0,depthWrite:!1,blending:yi,uniforms:{time:{value:0},base:{value:0},px:{value:300},tint:{value:new Bt(16767136)}},vertexShader:`uniform float time; uniform float base; uniform float px; varying float vA;
      void main(){ vec3 s = position; float t = time * (0.02 + s.x * 0.03); float fy = fract(s.y + t * 0.4);
        vec3 p = vec3((fract(s.x + sin(t + s.z * 6.0) * 0.05) - 0.5) * 18.0, base + fy * 8.5, (fract(s.z + cos(t * 0.7 + s.x * 5.0) * 0.05) - 0.5) * 16.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vA = (0.4 + 0.6 * (0.5 + 0.5 * sin(time * 1.5 + s.x * 40.0))) * smoothstep(0.0, 0.15, fy) * smoothstep(1.0, 0.8, fy);
        vA *= smoothstep(2.5, 7.0, -mv.z); gl_PointSize = min((0.07 + s.z * 0.1) * px / max(1.0, -mv.z), 14.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 tint; varying float vA; void main(){ float d = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(tint * vA * max(0.0, 1.0-d) * 0.55, 1.0); }"})));mt.frustumCulled=!1,mt.renderOrder=3,n.add(mt);let j=new Map,tt=new Map,Mt=new Bt(1,1,1),D=new Bt,nt=new Bt,J={particles:1,halos:!0,maxChars:wt},_t=0,ht=0,ft=-9,Dt=-9,Zt=0,ut=0,lt=0,Ht=null,St=new H(0,10,20),oe=new H(0,2.6,-2.4),ye=new H,Ke=new H,us=new Bt(1708080),ds=new Bt,aa=new Bt(16757611),Qs=new Bt,se={kind:"",t0:0,hitT:-9,atkT:-9,dieT:-9,x:0,z:-4},wn=-9,fs=0,ps=-9,qi=[];function ms(h,S){let T=j.get(h.id);return T||(T={walk:Math.random()*10,hit:-9,spawn:S,skin:ud[h.id%ud.length],x:h.x,y:h.y,z:h.z,seen:S},j.set(h.id,T)),T}let Ei=(h,S)=>h&&h.doors[S]?h.doors[S].x:0;function oa(h,S,T){Ht=h,_t=T;let I=fd(h.th);ut=h.floor,lt=ut*ge;let w=Q(ut,h.th,h.nd||0);w.born||(w.born=T);let k=null;h.phase==="climb"&&h.nth>-9&&(k=Q(ut+(h.lift?2:1),h.nth,0));for(let[G,X]of B)X!==w&&X!==k&&!(G<ut&&G>=ut-2&&T-w.born<2.5)&&(dt(X),B.delete(G));let et=h.phase==="vote"||h.phase==="enter";for(let G=0;G<w.doors.length;G++){let X=w.doors[G];X.open+=((!et&&h.ch===G?1.75:0)-X.open)*Math.min(1,S*5),X.pivot.rotation.y=-X.open;let Ut=h.kinds?h.kinds[G]:"",ce=0,Ne=0;if(Ut&&!et&&(h.ch===G||h.phase!=="reveal"))ce=dd[Ut],Ne=h.ch===G?.95:.3;else if(h.pr===G&&h.phase==="vote")ce=11566335,Ne=.6+.35*Math.sin(T*6);else if(h.phase==="vote"&&h.vc){let Oe=h.vc.reduce((li,rn)=>li+rn,0)||1;ce=16757611,Ne=.1+.5*(h.vc[G]||0)/Oe}X.glow.material.color.setHex(ce).multiplyScalar(Ne);let fn=h.phase==="vote"?1+.07*Math.sin(T*5+G*2):1;X.plaque.scale.set(1.25*fn,1.25*fn,1)}for(let G of B.values())for(let X of G.anim)X(T);let F=Math.max(0,Math.min(100,h.fuel??100))/100;ds.setHex(I.fog).multiplyScalar(.55+.45*F),us.lerp(ds,Math.min(1,S*1.5)),n.fog.color.copy(us),n.background.copy(us).multiplyScalar(.6),n.fog.far=26+20*F,n.fog.near=7+7*F,Qs.setHex(I.light),aa.lerp(Qs,Math.min(1,S*2));let q=.82+.1*Math.sin(T*13.1)+.06*Math.sin(T*7.3+1.7)+.05*Math.sin(T*23.7);c.color.copy(aa),c.intensity=(18+26*F)*q*(T-ft<.15?2.5:1),c.position.set(0,lt+4.2,1.5);let Z=T-Dt<.12||T-Dt>.22&&T-Dt<.3;o.intensity=.6+.7*F+(Z?2.2:0),w.extra.win&&Math.random()<S/9&&(Dt=T,Zt=T+.45);for(let G of B.values())G.extra.win&&G.extra.win.material.color.setHex(Z?16777215:5925540);let st=h.pd>0?1-Math.max(0,Math.min(1,h.tl/h.pd)):1;if(h.phase==="climb"){let G=h.lift?2:1,X=Math.max(0,Math.min(1,(st-.15)/.8)),Ut=X*X*(3-2*X)*ge*G;ye.set(Me.x-9+Math.sin(X*Math.PI)*2.6,lt+6.2+Ut,12.5-Math.sin(X*Math.PI)*3),Ke.set(Me.x-1.2,lt+2.6+Ut,Me.z)}else if(h.phase==="reveal"&&h.ch>=0){let G=Ei(w,h.ch),X=st*st*(3-2*st);ye.set(G*.5,lt+7.6,15-X*2.6),Ke.set(G*.85,lt+2.4,Ee)}else if((h.phase==="treasure"||h.phase==="trap")&&h.ch>=0){let G=Ei(w,h.ch);ye.set(G*.35,lt+8.6,16.5),Ke.set(G*.6,lt+2.2,-4.2)}else if(h.phase==="monster"||h.phase==="boss"){let G=h.phase==="boss";ye.set(Math.sin(T*.25)*1.4,lt+(G?11.4:10.4),G?22:20.4),Ke.set(0,lt+(G?3.6:2.8),-3)}else if(h.phase==="end"){let G=T*.18;ye.set(Math.sin(G)*9,lt+6,3+Math.cos(G)*9),Ke.set(0,lt+1.4,2.4)}else if(h.phase==="vote"){let G=0,X=0;(h.vc||[]).forEach((ce,Ne)=>{ce>X&&(X=ce,G=Ne)});let Ut=X?Ei(w,G)*.25:0;ye.set(Ut*.6,lt+9.8,19.4),Ke.set(Ut,lt+2.7,-2.8)}else ye.set(0,lt+10,20),Ke.set(0,lt+2.6,-2.4);let pt=Math.min(1,S*(h.phase==="climb"?3.2:2.2));St.distanceTo(ye)>30&&(St.copy(ye),oe.copy(Ke)),St.lerp(ye,pt),oe.lerp(Ke,pt),ht=Math.max(0,ht-S*2.2);let Et=(Math.random()-.5)*ht*.5,Jt=(Math.random()-.5)*ht*.5;s.position.set(St.x+Et+Math.sin(T*.4)*.15,St.y+Jt+Math.sin(T*.55)*.08,St.z),s.lookAt(oe.x+Et,oe.y+Jt,oe.z);let Te=lt+1+Math.sin(T*1.3)*.18;h.phase==="climb"?bt.set(-4.6,oe.y-1.6,-3.6):h.phase==="monster"||h.phase==="boss"?bt.set(-5,Te+1.2,.2):["reveal","treasure","trap"].includes(h.phase)?bt.set(-6.4,Te+2.4,-5.2):bt.set(-4.7,Te+.9,-1.4),ct.position.lerp(bt,Math.min(1,S*3)),ct.quaternion.copy(s.quaternion),Lt+=((Xt?1:0)-Lt)*Math.min(1,S*6),it=Math.min(1,it+S*1.5),ot.uniforms.time.value=T,ot.uniforms.talk.value=Lt,ot.uniforms.op.value=it;let ee=[];for(let G of[w,k])if(G)for(let X of G.flames){let Ut=.7+.3*Math.sin(T*(9+X[0])+X[2]);ee.push([X[0],G.fi*ge+X[1],X[2],1,.62*Ut,.25*Ut,(.5+.5*F)*Ut,1.5]),ee.push([X[0],G.fi*ge+X[1]-.05,X[2],1,.9,.6,1,.35])}if(w.extra.brew){let G=w.extra.brew;ee.push([G[0],lt+G[1],G[2],.3,1,.35,.7+.2*Math.sin(T*4),5]),Math.random()<S*6&&rt(It,1,G[0]+(Math.random()-.5),lt+1.5,G[2]+(Math.random()-.5),{color:8257386,up:1,speed:1.2,g:-1,life:1.2,size:.4})}if(w.extra.chand)for(let G of w.extra.chand)ee.push([G[0],lt+G[1]-.2,G[2],1,.8,.45,.8,4]);ee.push([ct.position.x,ct.position.y+.2,ct.position.z-.3,.6,.35,1,.4+Lt*.45,7]),qi.length=0;let fe=h.members.length>Math.min(wt,J.maxChars||wt)?h.members.slice(0,Math.min(wt,J.maxChars||wt)):h.members,le=0,Rt=0,ze=0,Kt=0,Ae=(G,X,Ut,ce,Ne,fn,Oe,li,rn=0,er=0,Zi=null)=>{O.compose(L.set(Ut,ce,Ne),U.setFromEuler(V.set(rn,0,er)),Y.set(fn,Oe,li)),N.multiplyMatrices(K,O),G.setMatrixAt(X,N),Zi&&G.setColorAt(X,Zi)};for(let G of fe){let X=ms(G,T);X.seen=T;let Ut=Math.hypot(G.x-X.x,G.z-X.z)/Math.max(S,.001);X.x=G.x,X.y=G.y,X.z=G.z;let ce=Ut>.4||G.flags&2048;X.walk+=S*(ce?11:0);let Ne=Math.max(0,1-(T-X.hit)/.35),fn=Math.min(1,(T-X.spawn)/.35),Oe=(.3+.7*fn)*(1+.15*Math.sin(fn*Math.PI)),li=lt+G.y+(ce?Math.abs(Math.sin(X.walk))*.12:0)+(G.flags&Pe.cmd?Math.abs(Math.sin(T*12))*.18:0);K.compose(L.set(G.x,li,G.z),U.setFromEuler(V.set(0,G.face,0)),Y.set(Oe,Oe,Oe));let rn=G.info||{};D.setHex(rn.color??16777215);let er=Ne>0?nt.copy(D).lerp(Mt,Ne):D,Zi=ce?Math.sin(X.walk):0;Ae(gt.body,le,0,.52,0,1,1,1,0,0,er),nt.setHex(X.skin),Ae(gt.head,le,0,1.06,0,1,1,1,0,0,nt),nt.copy(D).multiplyScalar(.55),Ae(gt.hair,le,0,1.1,-.02,1,1,1,-.15,0,nt);let ch=(T+G.id*.37)%4.2<.12?.15:1;Ae(gt.eyes,le*2,-.13,1.08,.31,1,ch,1),Ae(gt.eyes,le*2+1,.13,1.08,.31,1,ch,1),Ae(gt.hands,le*2,-.36,.5+Zi*.05,Zi*.12,1,1,1,0,0,D),Ae(gt.hands,le*2+1,.34,.66,.26,1,1,1,0,0,D),Ae(gt.lantern,le,.36,.42+Math.sin(T*3+G.id)*.02,.32,1,1,1,Math.sin(T*2+G.id)*.15,0),Ae(gt.feet,le*2,-.13,.08,Zi*.18,1,1,1),Ae(gt.feet,le*2+1,.13,.08,-Zi*.18,1,1,1),O.compose(L.set(G.x,lt+G.y+.02,G.z),U.identity(),Y.set(1.1,1,1.1)),gt.shadow.setMatrixAt(le,O),L.set(.36,.45,.32).applyMatrix4(K),(J.halos||le<16)&&ee.push([L.x,L.y,L.z,1,.7,.3,(.35+.65*F)*(G.flags&Pe.gift?1.7:1),1.5+1.5*F]),qi.push({id:G.id,x:G.x,y:li+1.55*Oe,z:G.z,info:rn,flags:G.flags}),G.y<.5&&(Rt+=G.x,ze+=G.z,Kt++),le++}for(let G of Object.keys(gt)){let X=gt[G];X.count=G==="eyes"||G==="hands"||G==="feet"?le*2:le,X.instanceMatrix.needsUpdate=!0,X.instanceColor&&(X.instanceColor.needsUpdate=!0)}let we=0;for(let G of h.ghosts||[]){if(we>=qt)break;let X=tt.get(G.id);if(!X){let Oe=j.get(G.id);X={x:Oe?Oe.x:(Math.random()-.5)*6,z:Oe?Oe.z:5,born:T-2,ph:Math.random()*Be},tt.set(G.id,X)}X.seen=T;let Ut=-6+we%8*1.7,ce=6.6+Math.floor(we/8)*1.3;X.x+=(Ut-X.x)*Math.min(1,S*.8),X.z+=(ce-X.z)*Math.min(1,S*.8);let Ne=Math.min(1,(T-X.born)/1.5),fn=lt+.6+Ne*1.6+Math.sin(T*1.7+X.ph)*.25;K.compose(L.set(X.x,fn,X.z),U.setFromEuler(V.set(0,Math.sin(T+X.ph)*.4,Math.sin(T*1.3+X.ph)*.12)),Y.set(.7,.7,.7)),Se.setMatrixAt(we,K);for(let Oe of[0,1])O.compose(L.set(Oe?.13:-.13,.72,.4),U.identity(),Y.set(1,1.3,1)),N.multiplyMatrices(K,O),kt.setMatrixAt(we*2+Oe,N);qi.push({id:G.id,x:X.x,y:fn+.9,z:X.z,info:G.info||{},flags:G.flags,ghost:!0}),we++}if(Se.count=we,kt.count=we*2,Se.instanceMatrix.needsUpdate=!0,kt.instanceMatrix.needsUpdate=!0,Math.random()<.02){for(let[G,X]of tt)T-X.seen>3&&tt.delete(G);for(let[G,X]of j)T-X.seen>5&&j.delete(G)}let Ct=(h.sh||0)>0,At=ae.material.uniforms;if(At.a.value+=((Ct?["trap","monster","boss"].includes(h.phase)?.75:.4:0)-At.a.value)*Math.min(1,S*3),At.time.value=T,ae.visible=At.a.value>.02,Kt){ae.position.set(Rt/Kt,lt,ze/Kt);let G=1.7+Math.sqrt(Kt)*.62;ae.scale.set(G,G*.62,G*.75)}let Nt=h.mo;if(Nt&&(h.phase==="monster"||h.phase==="boss")){(se.kind!==Nt.k||!Qt.visible||se.dieT>0)&&(se={kind:Nt.k,t0:T,hitT:-9,atkT:-9,dieT:-9,x:h.ch>=0?Ei(w,h.ch):0,z:Ee+.5});let G=Nt.k==="boss"?"ghost":Nt.k,X=Nt.k==="boss";for(let rn of Object.keys(xe))xe[rn].visible=rn===G;Qt.visible=!0;let Ut=xe[G],ce=Math.min(1,(T-se.t0)/1.2);se.x+=(0-se.x)*Math.min(1,S*2),se.z+=((X?-3.8:-3.4)-se.z)*Math.min(1,S*2);let Ne=Math.max(0,1-(T-se.atkT)/.6),fn=Math.sin(Math.min(1,(T-se.atkT)/.6)*Math.PI)*1.6,Oe=Math.max(0,1-(T-se.hitT)/.18),li=(X?1.7:1.05)*(.2+.8*ce)*(1+Oe*.06);if(Qt.position.set(se.x+(Oe>0?(Math.random()-.5)*.15:0),lt+(G==="ghost"?.4+Math.sin(T*1.8)*.3:0),se.z+fn),Qt.scale.setScalar(li),Qt.rotation.set(0,Math.sin(T*.8)*.15,G==="ghost"?Math.sin(T*1.3)*.06:0),G==="ghost"){let rn=Ut.userData;rn.crown.visible=X,te.color.setHex(X?13285631:15265023),te.emissive.setHex(Oe>0?16777215:X?3807850:2763360),rn.mouth.scale.set(.5,.42+Ne*.5+Math.sin(T*5)*.06,.2)}G==="spider"&&Ut.userData.legs.forEach((rn,er)=>{rn.rotation.x=Math.sin(T*10+er*1.3)*.25*(1+Ne)}),G==="mimic"&&(Ut.userData.lidP.rotation.x=-.35-Math.abs(Math.sin(T*4))*.5-Ne*.6);for(let rn of Je)rn.emissive.setHex(Oe>0?8947848:1048584);ee.push([se.x,lt+2.2*li,se.z+.5,X?.6:.3,X?.3:1,X?1:.4,.35,X?14:8])}else Qt.visible&&(se.dieT<0&&(se.dieT=T),Qt.scale.multiplyScalar(Math.max(.01,1-S*4)),Qt.rotation.y+=S*8,T-se.dieT>.5&&(Qt.visible=!1));if(h.phase==="treasure"||h.phase==="climb"&&T-wn<3){me.visible||(me.visible=!0,wn=T,fs=Ei(w,h.ch));let G=T-wn,X=Math.min(1,G/1);me.position.set(fs*(1-X),lt+Math.sin(X*Math.PI)*1.2,Ee+2.4+X*3.2),me.scale.setScalar(1.3),me.userData.lp.rotation.x=G>1.1?-Math.min(1.9,(G-1.1)*5):0,G>1.1&&G<3.4&&Math.random()<.7&&rt(It,2,me.position.x,me.position.y+1.2,me.position.z,{colors:[16765773,16773792,16752672],up:1.2,speed:6,g:9,life:1.1,size:.35,floorY:lt}),ee.push([me.position.x,me.position.y+1.3,me.position.z,1,.8,.3,G>1.1?.9:.2,7])}else me.visible=!1;if(T-ps<2.2){Fe.visible=!0;let G=(T-ps)/2.2;Fe.position.set(0,lt+ge-.5,2.6),Fe.rotation.z=Math.cos(G*Math.PI*2.5)*1.15*(1-G*.3)}else Fe.visible=!1;let vt=0;for(let G=Qe.length-1;G>=0;G--){let X=Qe[G],Ut=T-X.t0;if(Ut>X.life){Qe.splice(G,1);continue}Ut<0||(X.vy-=22*S,X.y+=X.vy*S,X.rx+=S*X.spin,X.y<lt+X.s*.18&&(X.landed||(X.landed=!0,rt(A,4,X.x,lt+.3,X.z,{color:9075306,up:.4,speed:3,life:.6,size:.4,alpha:.8,floorY:lt})),X.y=lt+X.s*.18,X.vy=0,X.spin=0),vt<Ue&&(U.setFromEuler(V.set(X.rx,X.ry,0)),Le.setMatrixAt(vt,N.compose(L.set(X.x,X.y,X.z),U,Y.set(X.s*X.sx,X.s*.35,X.s))),Le.setColorAt(vt,nt.setHex(X.col)),vt++))}Le.count=vt,Le.instanceMatrix.needsUpdate=!0,Le.instanceColor&&(Le.instanceColor.needsUpdate=!0);let Pt=0;for(let G=ve.length-1;G>=0;G--){let X=ve[G],Ut=T-X.t0;if(Ut>1.6){ve.splice(G,1);continue}let ce=Math.sin(Math.max(0,Math.min(1,Ut/1.6))*Math.PI);Pt<z&&(U.setFromEuler(V.set(Math.sin(Ut*8+G)*.2,0,Math.sin(Ut*6+G)*.25)),Xe.setMatrixAt(Pt++,N.compose(L.set(X.x,lt-.6+ce*1.2,X.z),U,Y.set(1,1,1))))}Xe.count=Pt,Xe.instanceMatrix.needsUpdate=!0;let Ot=0;for(let G=Re.length-1;G>=0;G--){let X=Re[G],Ut=(T-X.t0)/X.dur;if(Ut>=1){Re.splice(G,1);continue}if(Ut<0)continue;let ce=X.r0+(X.r1-X.r0)*(1-(1-Ut)*(1-Ut));Ot<be&&(xt.setMatrixAt(Ot,N.compose(L.set(X.x,X.y,X.z),U.identity(),Y.set(ce,1,ce))),xt.setColorAt(Ot,nt.copy(X.col).multiplyScalar(1-Ut)),Ot++)}xt.count=Ot,xt.instanceMatrix.needsUpdate=!0,xt.instanceColor&&(xt.instanceColor.needsUpdate=!0),mt.material.uniforms.time.value=T,mt.material.uniforms.base.value=oe.y-2.5,mt.material.uniforms.tint.value.setHex(I.light),mt.visible=J.particles>.4,at(It,S,J.halos?ee:ee.slice(0,24)),at(A,S,null),e.render(n,s)}let Yn=h=>{let S=j.get(h);return S?{x:S.x,y:lt+S.y,z:S.z}:null},oi=(h,S,T,I,w,k,et=.1)=>Re.push({x:h,y:lt+et,z:S,t0:_t,dur:T,r0:I,r1:w,col:new Bt(k)}),tr=[16739029,16769354,6222079,10182117,8257402];function la(h,S){let T=_t,I=B.get(ut);switch(h.k){case"hit":{se.hitT=T;let w=j.get(h.id);w&&(w.hit=T);let k=Ht&&Ht.mo&&Ht.mo.b;rt(It,h.c?10:4,se.x+(Math.random()-.5)*1.5,lt+(k?3.4:2)+(Math.random()-.5),se.z+1,{colors:h.c?[16769354,16777215]:[16757611,16777215,16739029],up:.6,speed:h.c?7:4,life:.4,size:h.c?.5:.35}),h.c&&(ht=Math.max(ht,.4));break}case"matk":se.atkT=T,ht=Math.max(ht,h.boss?1:.6),oi(se.x,se.z+2,.7,1,h.boss?9:6,h.boss?11566335:6160250),h.slam&&(ft=T,rt(A,20,se.x,lt+.3,se.z+2,{color:6969978,up:.4,speed:7,life:.8,size:.5,alpha:.7,floorY:lt}));break;case"fall":{let w=Yn(h.id);if(!w)break;rt(A,14,w.x,w.y+.6,w.z,{colors:[5913210,3811930,9071272],up:.6,speed:3,g:-1,life:1.1,size:.7,alpha:.85}),rt(It,10,w.x,w.y+.8,w.z,{colors:[11566335,16777215],up:1,speed:3,g:-2,life:.9,size:.35}),tt.set(h.id,{x:w.x,z:w.z,born:T,ph:Math.random()*Be});break}case"rise":{let w=tt.get(h.id),k=w?w.x:0,et=w?w.z:4;tt.delete(h.id),rt(It,18,k,lt+1,et,{colors:[16771488,16777215,10477823],up:1.2,speed:4,g:1,life:1,size:.4}),oi(k,et,.8,.3,2.6,16771488);let F=j.get(h.id);F&&(F.spawn=T);break}case"join":{let w=j.get(h.id);w&&(w.spawn=T);break}case"reveal":I&&I.doors[h.door]&&rt(It,26,I.doors[h.door].x,lt+2,Ee+.6,{color:dd[h.kinds[h.door]]||16777215,up:.3,speed:6,g:0,drag:2.5,life:.9,size:.6,jy:3});break;case"prophecy":case"gift":{let w=h.id?Yn(h.id):null;w&&rt(It,h.tier==="boss"||h.tier==="skip"?40:16,w.x,w.y+1,w.z,{colors:[16769354,16739029,10477823,16777215],up:1.2,speed:5,g:2,life:1.1,size:.4});let k=h.door??-1;k>=0&&I&&I.doors[k]&&rt(It,30,I.doors[k].x,lt+2.4,Ee+.8,{colors:[11566335,16771488],up:.2,speed:3,g:-.5,life:1.4,size:.5,jy:3,jitter:1.6}),h.tier==="shield"&&oi(0,2.5,.9,1,8,5949695,.15),(h.tier==="boss"||h.tier==="rescue")&&(ft=T);break}case"treasure":wn=T,me.visible=!1;break;case"trap":case"mlose":{let w=h.k==="mlose"?"hands":h.trap;ht=Math.max(ht,.8),ft=T;let k=(h.fell||[]).concat(h.saved||[]).map(Yn).filter(Boolean);if(h.blocked){oi(0,2.6,.9,2,9,5949695,.2),rt(It,40,0,lt+3,2.6,{colors:[5949695,16777215],up:.6,speed:7,g:1,life:.8,size:.4});break}let et=k.length?k:[{x:0,z:2.5}];if(w==="books"||w==="chandelier"||w==="web"){let F=w==="books"?[9054778,2775690,3832378,9071146,6961802]:w==="web"?[15658734]:[14266442];for(let q of et)for(let Z=0;Z<(w==="books"?3:1);Z++)Qe.push({x:q.x+(Math.random()-.5)*.6,z:q.z+(Math.random()-.5)*.6,y:lt+ge-1,vy:0,t0:T+Z*.12+Math.random()*.2,life:2.6,s:w==="books"?.7:w==="web"?1.6:1.4,sx:w==="web"?1:1.4,rx:0,ry:Math.random()*Be,spin:6,col:F[Math.random()*F.length|0]});if(w==="chandelier")for(let q of et)rt(It,16,q.x,lt+.5,q.z,{colors:[16765773,16777215],up:.6,speed:6,life:.6,size:.3,floorY:lt})}else if(w==="hands")for(let F of et){for(let q=0;q<3;q++)ve.push({x:F.x+Math.cos(q*2.1)*.45,z:F.z+Math.sin(q*2.1)*.45,t0:T+q*.05});oi(F.x,F.z,1.2,.4,1.4,6160250,.08)}else if(w==="shards"){for(let F of et)rt(It,18,F.x,lt+2,F.z,{colors:[14213375,10477823,16777215],up:.2,speed:8,g:12,life:.9,size:.3,floorY:lt});rt(It,30,0,lt+3,Ee+1,{colors:[14213375,16777215],up:.3,speed:10,g:10,life:.9,size:.35,floorY:lt})}else if(w==="pendulum")ps=T;else if(w==="gas")for(let F=0;F<6;F++)rt(A,6,(Math.random()-.5)*8,lt+.5,2+(Math.random()-.5)*5,{colors:[5963642,2793546,9109402],up:.5,speed:1.6,g:-.6,life:2.2,size:2.2,alpha:.45});break}case"monster":se.t0=T,se.dieT=-9,h.boss&&(ft=T,ht=1.2),I&&S&&S.ch>=0&&I.doors[S.ch]&&rt(A,20,I.doors[S.ch].x,lt+1,Ee+1,{colors:[2759226,4864602],up:.5,speed:4,life:1,size:1,alpha:.8});break;case"mwin":if(ft=T,ht=Math.max(ht,h.boss?1.4:.8),rt(It,h.boss?90:50,se.x,lt+2,se.z+.5,{colors:[16777215,11566335,16769354,6160250],up:.8,speed:h.boss?11:8,g:3,life:1.3,size:.5}),oi(se.x,se.z,1,1,12,16771488,.2),h.boss)for(let w=0;w<5;w++)rt(A,26,(Math.random()-.5)*6,lt+5,1+Math.random()*3,{colors:tr,up:.6,speed:5,g:4,drag:1.2,life:3,size:.3,confetti:!0,floorY:lt});break;case"rwin":{let w=Yn(h.id);w&&(rt(It,30,w.x,w.y+1.2,w.z,{colors:[16769354,16777215,11566335],up:1,speed:6,g:3,life:1.2,size:.45}),oi(w.x,w.z,.8,.3,3.5,16769354));break}case"blaze":ft=T;for(let w of j.values())_t-w.seen<1&&rt(It,2,w.x,lt+w.y+.6,w.z,{colors:[16757611,16771488],up:1.4,speed:3,g:-1,life:.9,size:.5});break;case"climb":if(h.lift)for(let w=0;w<4;w++)rt(It,20,Me.x,lt+.5+w,Me.z,{colors:[11566335,16771488,6222079],up:1,speed:3,g:-3,life:2,size:.45,jitter:3});break;case"floor":it=0,rt(It,30,-6.1,h.n*ge+2,-4.9,{colors:[11566335,16777215],up:.4,speed:4,g:0,drag:2,life:1.1,size:.5,jy:3});break;case"end":if(h.reason==="top")for(let w=0;w<6;w++)rt(A,30,(Math.random()-.5)*8,lt+6,2+Math.random()*3,{colors:tr,up:.5,speed:5,g:4,drag:1.2,life:3.5,size:.3,confetti:!0,floorY:lt});break}}let ca=390,ha=844,Yi=new H,$i=(h,S,T)=>(Yi.set(h,S,T).project(s),{x:(Yi.x*.5+.5)*ca,y:(-Yi.y*.5+.5)*ha,vis:Yi.z<1&&Yi.z>-1});return{kind:"webgl",renderer:e,resize(h,S,T){ca=h,ha=S,e.setPixelRatio(T),e.setSize(h,S,!1),s.aspect=h/S,s.fov=h/S<.7?50:42,s.updateProjectionMatrix(),It.mat.uniforms.px.value=A.mat.uniforms.px.value=S*T*.9,mt.material.uniforms.px.value=S*T*.5},setQuality(h){J=h,b=h.particles},frame:oa,fx:la,project:$i,speaking(h){Xt=h},doorTop(h){let S=B.get(ut);return!S||!S.doors[h]?null:$i(S.doors[h].x,lt+5.95,Ee+.4)},monsterTop(){return!Qt.visible||se.dieT>0?null:$i(se.x,lt+(Ht&&Ht.mo&&Ht.mo.b?6.6:3.9),se.z)},miraTop(){return $i(ct.position.x,ct.position.y+2.2,ct.position.z)},drawn:()=>qi,thunder(){return Zt&&_t>=Zt?(Zt=0,!0):!1},stats(){let h=e.info;return{calls:h.render.calls,tris:h.render.triangles,tex:h.memory.textures,geo:h.memory.geometries,chars:gt.body.count,parts:It.list.length+A.list.length,rooms:B.size}},dispose(){for(let h of B.values())dt(h);B.clear(),n.traverse(h=>{h.isInstancedMesh&&h.dispose()});for(let h of r)h.dispose?.();e.dispose()},loseContext(){try{e.forceContextLoss()}catch{}}}}var fl=i=>"#"+(i>>>0).toString(16).padStart(6,"0");function md(i,t={}){let e=i.getContext("2d"),n=390,s=844,r=1,a=0,o=0,l=null,c=-9,m=[],g=p=>n/2+p*n/17,d=(p,y)=>s*.5+(y-1)*s*.022-p*s*.03,u=(p,y,R)=>({x:g(p),y:d(y-(l?l.floor*ge:0),R),vis:!0}),f=new Image;f.src=t.miraUrl||"/assets/mira-tower.png";let _=p=>p.th===-2?Vn:p.th===-1?Hn:Tn[p.th]||Hn;function x(p,y,R){l=p,a=R,m.length=0;let E=_(p),P=Math.max(.15,(p.fuel??100)/100);e.setTransform(r,0,0,r,0,0);let C=o>0?(o-=y,(Math.random()-.5)*8*o):0;e.translate(C,0),e.fillStyle=fl(E.fog),e.fillRect(-10,0,n+20,s),e.fillStyle=fl(E.wall),e.fillRect(-10,s*.14,n+20,d(0,Ee)-s*.14);let v=e.createLinearGradient(0,d(0,Ee),0,s*.8);v.addColorStop(0,fl(E.floor)),v.addColorStop(1,"#0a0612"),e.fillStyle=v,e.fillRect(-10,d(0,Ee),n+20,s),(p.nd?os(p.nd):[]).forEach((O,U)=>{let V=g(O),L=n*.17,Y=d(5.6,Ee),K=d(0,Ee),$=p.ch===U&&!["vote","enter","gather"].includes(p.phase);e.fillStyle=$?"#ffe9a0":"#3a2416",e.beginPath(),e.moveTo(V-L/2,K),e.lineTo(V-L/2,Y+L/2),e.arc(V,Y+L/2,L/2,Math.PI,0),e.lineTo(V+L/2,K),e.fill(),e.strokeStyle=p.pr===U?"#c07cff":"#8a6a40",e.lineWidth=4,e.stroke(),e.fillStyle="#ffd36a",e.font=`900 ${n*.07}px sans-serif`,e.textAlign="center",e.textBaseline="middle",e.fillText(p.kinds&&p.kinds[U]?ul[p.kinds[U]]||"":String(U+1),V,(Y+K)/2)});let B=e.createRadialGradient(n/2,s*.55,10,n/2,s*.55,n*.8*P);if(B.addColorStop(0,"rgba(255,180,100,0.25)"),B.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=B,e.fillRect(0,0,n,s),f.complete&&f.naturalWidth){let O=s*.2,U=O*f.naturalWidth/f.naturalHeight;e.globalAlpha=.9,e.drawImage(f,n*.02,s*.3+Math.sin(R*1.6)*4,U,O),e.globalAlpha=1}if(p.mo){let O=p.mo.b?1.6:1,U=g(0),V=d(1.8,-3.5);e.fillStyle=p.mo.k==="spider"?"#2a1a2a":p.mo.k==="mimic"?"#7a4a20":"rgba(220,210,255,0.85)",e.beginPath(),e.ellipse(U,V,n*.12*O,s*.07*O,0,0,Math.PI*2),e.fill(),e.fillStyle="#ff3050",e.fillRect(U-14*O,V-8,8,8),e.fillRect(U+6*O,V-8,8,8)}let N=p.floor*ge;for(let O of p.members){let U=g(O.x),V=d(O.y,O.z),L=n*.022;e.fillStyle=fl(O.info?.color??16777215),e.beginPath(),e.arc(U,V-L,L,0,Math.PI*2),e.fill(),e.fillStyle="#ffd36a",e.beginPath(),e.arc(U+L,V-L*.4,L*.4,0,Math.PI*2),e.fill(),O.flags&Pe.shield&&(e.strokeStyle="#5ef0ff",e.lineWidth=2,e.beginPath(),e.arc(U,V-L,L*1.6,0,Math.PI*2),e.stroke()),m.push({id:O.id,x:O.x,y:N+O.y+1.6,z:O.z,info:O.info,flags:O.flags})}p.ghosts.forEach((O,U)=>{let V=g(-5+U%8*1.4),L=d(3+Math.sin(R*2+U)*.3+Math.floor(U/8),-5);e.fillStyle="rgba(200,220,255,0.45)",e.beginPath(),e.arc(V,L,n*.02,0,Math.PI*2),e.fill()}),e.fillStyle=`rgba(0,0,0,${(1-P)*.55})`,e.fillRect(0,0,n,s),R-c<.4&&(e.fillStyle=`rgba(255,255,255,${.6*(1-(R-c)/.4)})`,e.fillRect(0,0,n,s)),e.setTransform(1,0,0,1,0,0)}return{kind:"2d",resize(p,y,R){n=p,s=y,r=R,i.width=Math.round(p*R),i.height=Math.round(y*R)},setQuality(){},frame:x,project:u,fx(p){(p.k==="trap"||p.k==="matk"||p.k==="mlose")&&(o=.5),(p.k==="reveal"||p.k==="floor")&&(c=a)},speaking(){},doorTop(p){if(!l)return null;let y=l.nd?os(l.nd):[];return y[p]===void 0?null:{x:g(y[p]),y:d(5.9,Ee),vis:!0}},monsterTop(){return l&&l.mo?{x:g(0),y:d(l.mo.b?4.5:3.4,-3.5),vis:!0}:null},miraTop(){return{x:n*.12,y:s*.3,vis:!0}},drawn:()=>m,thunder:()=>!1,stats:()=>({kind:"2d"}),dispose(){},loseContext(){}}}function gd({silenceUrl:i="/assets/silence.mp3",record:t=!1}={}){let e={ctx:null,master:null,sfxGain:null,voiceGain:null,unlocked:!1,played:0,fails:0,cues:[],record:t,last:{},speakingUntil:0,muted:!1};try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}let n=new Audio;n.setAttribute("playsinline",""),n.preload="auto";function s(){if(e.ctx||t)return e.ctx;let u=window.AudioContext||window.webkitAudioContext;if(!u)return null;try{e.ctx=new u}catch{return null}return r(e.ctx,e.ctx.destination,e),e.ctx}function r(u,f,_){let x=u.createDynamicsCompressor();x.threshold.value=-14,x.ratio.value=6,x.attack.value=.003,x.release.value=.2,_.master=u.createGain(),_.master.gain.value=.9,_.sfxGain=u.createGain(),_.sfxGain.gain.value=.55,_.voiceGain=u.createGain(),_.voiceGain.gain.value=1,_.sfxGain.connect(_.master),_.voiceGain.connect(_.master),_.master.connect(x),x.connect(f)}e.unlock=()=>{let u=s();if(u){try{u.resume();let f=u.createBuffer(1,1,22050),_=u.createBufferSource();_.buffer=f,_.connect(u.destination),_.start(0)}catch{}e.elUnlocked||(n.src=i,n.play().then(()=>{n.pause(),e.elUnlocked=!0}).catch(()=>{})),e.unlocked=u.state==="running",setTimeout(()=>{e.unlocked=u.state==="running",e.onstate&&e.onstate(e.unlocked)},120)}},e.resume=()=>{e.ctx&&e.ctx.state!=="running"&&e.ctx.resume().catch(()=>{})},e.state=()=>t?"record":e.ctx?e.ctx.state:"none";let a=u=>{if(u.__noise)return u.__noise;let f=u.sampleRate,_=u.createBuffer(1,f,f),x=_.getChannelData(0),p=1;for(let y=0;y<f;y++)p=p*16807%2147483647,x[y]=p/10737418235e-1-1;return u.__noise=_,_};function o(u,f,_,x,p,y){f.gain.setValueAtTime(1e-4,_),f.gain.exponentialRampToValueAtTime(p,_+x),f.gain.exponentialRampToValueAtTime(1e-4,_+x+y)}function l(u,f,_,{type:x="sine",f0:p=440,f1:y=p,a:R=.005,d:E=.2,peak:P=.3,det:C=0}){let v=u.createOscillator(),M=u.createGain();v.type=x,v.frequency.setValueAtTime(p,_),y!==p&&v.frequency.exponentialRampToValueAtTime(Math.max(20,y),_+R+E),v.detune.value=C,o(u,M,_,R,P,E),v.connect(M).connect(f),v.start(_),v.stop(_+R+E+.05)}function c(u,f,_,{type:x="lowpass",f0:p=1e3,f1:y=p,q:R=.7,a:E=.003,d:P=.15,peak:C=.4}){let v=u.createBufferSource(),M=u.createBiquadFilter(),B=u.createGain();v.buffer=a(u),M.type=x,M.Q.value=R,M.frequency.setValueAtTime(p,_),y!==p&&M.frequency.exponentialRampToValueAtTime(Math.max(30,y),_+E+P),o(u,B,_,E,C,P),v.connect(M).connect(B).connect(f),v.start(_,Math.random()*.5),v.stop(_+E+P+.05)}let m={punch:(u,f,_,x=1)=>{c(u,f,_,{f0:1400,f1:300,d:.08,peak:.5*x}),l(u,f,_,{f0:150,f1:55,d:.1,peak:.55*x})},crit:(u,f,_)=>{m.punch(u,f,_,1.2),l(u,f,_,{type:"square",f0:1800,f1:900,d:.06,peak:.12}),c(u,f,_+.01,{type:"highpass",f0:3e3,d:.12,peak:.25})},block:(u,f,_)=>{l(u,f,_,{type:"triangle",f0:1200,f1:1100,d:.18,peak:.18}),l(u,f,_,{type:"triangle",f0:1810,d:.14,peak:.1})},ko:(u,f,_)=>{l(u,f,_,{type:"sine",f0:260,f1:980,a:.005,d:.16,peak:.35}),c(u,f,_,{type:"bandpass",f0:2500,f1:600,q:1.2,d:.25,peak:.35}),l(u,f,_+.09,{type:"triangle",f0:1320,d:.2,peak:.12})},dash:(u,f,_)=>{c(u,f,_,{type:"bandpass",f0:500,f1:3500,q:2,a:.04,d:.22,peak:.45})},shield:(u,f,_)=>{[880,1320,1760].forEach((x,p)=>l(u,f,_+p*.03,{type:"sine",f0:x,d:.45,peak:.09}))},boom:(u,f,_,x=1)=>{c(u,f,_,{f0:900,f1:80,a:.004,d:.9,peak:.8*x}),l(u,f,_,{f0:90,f1:28,d:.8,peak:.8*x})},whistle:(u,f,_)=>{l(u,f,_,{type:"sine",f0:1900,f1:500,a:.05,d:.95,peak:.07})},coin:(u,f,_)=>{l(u,f,_,{type:"square",f0:988,d:.07,peak:.1}),l(u,f,_+.07,{type:"square",f0:1319,d:.28,peak:.1})},power:(u,f,_)=>{[523,659,784,1047].forEach((x,p)=>l(u,f,_+p*.05,{type:"triangle",f0:x,d:.3,peak:.14})),c(u,f,_,{type:"highpass",f0:2e3,f1:6e3,a:.1,d:.4,peak:.12})},heal:(u,f,_)=>{[660,880,1100].forEach((x,p)=>l(u,f,_+p*.06,{f0:x,d:.25,peak:.08}))},beep:(u,f,_)=>{l(u,f,_,{f0:880,d:.12,peak:.22})},go:(u,f,_)=>{l(u,f,_,{type:"sawtooth",f0:660,d:.5,peak:.12}),l(u,f,_,{type:"square",f0:1320,d:.5,peak:.08}),c(u,f,_,{f0:4e3,f1:500,d:.4,peak:.25})},land:(u,f,_)=>{l(u,f,_,{f0:120,f1:50,d:.12,peak:.3}),c(u,f,_,{f0:600,d:.1,peak:.15})},spin:(u,f,_)=>{c(u,f,_,{type:"bandpass",f0:300,f1:2400,q:3,a:.08,d:.35,peak:.5}),m.punch(u,f,_+.25,1.1)},cheer:(u,f,_)=>{c(u,f,_,{type:"bandpass",f0:1200,f1:1500,q:.6,a:.25,d:2.2,peak:.35}),c(u,f,_+.1,{type:"bandpass",f0:2600,f1:2200,q:.8,a:.3,d:2,peak:.18})},fanfare:(u,f,_)=>{[[523,0],[659,.12],[784,.24],[1047,.38],[784,.6],[1047,.72]].forEach(([x,p],y)=>{l(u,f,_+p,{type:"sawtooth",f0:x,d:y===5?.9:.16,peak:.07}),l(u,f,_+p,{type:"triangle",f0:x*2,d:y===5?.9:.16,peak:.05})}),m.cheer(u,f,_+.2)},nuke:(u,f,_)=>{m.boom(u,f,_,1.3),m.boom(u,f,_+.25,1),l(u,f,_,{type:"sawtooth",f0:220,f1:40,d:1.6,peak:.25})},pop:(u,f,_)=>{l(u,f,_,{f0:500,f1:1400,d:.07,peak:.15})},creak:(u,f,_)=>{l(u,f,_,{type:"sawtooth",f0:95,f1:140,a:.08,d:.7,peak:.07,det:8}),l(u,f,_+.05,{type:"square",f0:190,f1:120,a:.1,d:.6,peak:.03}),c(u,f,_,{type:"bandpass",f0:900,f1:500,q:6,a:.1,d:.6,peak:.12})},ghost:(u,f,_)=>{l(u,f,_,{type:"sine",f0:520,f1:760,a:.25,d:.9,peak:.08,det:15}),l(u,f,_+.1,{type:"sine",f0:780,f1:500,a:.3,d:.9,peak:.05})},thunder:(u,f,_)=>{c(u,f,_,{f0:500,f1:60,a:.02,d:1.8,peak:.6}),c(u,f,_+.15,{f0:250,f1:50,a:.1,d:1.6,peak:.45})},bell:(u,f,_)=>{[[110,.25],[220,.12],[277,.07],[330,.06],[440,.04]].forEach(([x,p])=>l(u,f,_,{type:"sine",f0:x,a:.004,d:2.6,peak:p}))},organ:(u,f,_)=>{[[147,0],[175,0],[220,0],[294,.02],[131,.6],[165,.6],[196,.6],[262,.62]].forEach(([x,p])=>{l(u,f,_+p,{type:"sawtooth",f0:x,a:.04,d:p?.9:.55,peak:.035}),l(u,f,_+p,{type:"triangle",f0:x*2,a:.04,d:p?.9:.55,peak:.03})})},heart:(u,f,_)=>{l(u,f,_,{f0:70,f1:45,d:.12,peak:.45}),l(u,f,_+.17,{f0:62,f1:40,d:.14,peak:.35})},chime:(u,f,_)=>{[1319,1568,1976,2637].forEach((x,p)=>l(u,f,_+p*.07,{type:"sine",f0:x,d:.6,peak:.07}))},trap:(u,f,_)=>{c(u,f,_,{type:"bandpass",f0:3e3,f1:300,q:1.5,a:.01,d:.35,peak:.4}),m.boom(u,f,_+.22,.7)},shatter:(u,f,_)=>{for(let x=0;x<6;x++)l(u,f,_+x*.035,{type:"triangle",f0:2200+x*430,f1:1800,d:.12,peak:.06});c(u,f,_,{type:"highpass",f0:4e3,d:.4,peak:.3})},wind:(u,f,_)=>{c(u,f,_,{type:"bandpass",f0:380,f1:700,q:4,a:.9,d:2.2,peak:.12})},squeak:(u,f,_)=>{l(u,f,_,{type:"triangle",f0:900,f1:1300,d:.08,peak:.07})},roar:(u,f,_)=>{l(u,f,_,{type:"sawtooth",f0:120,f1:60,a:.05,d:.9,peak:.16,det:20}),c(u,f,_,{type:"lowpass",f0:1200,f1:300,a:.05,d:.9,peak:.35})}},g={squeak:.06,ghost:.25,heart:.3,punch:.045,crit:.06,block:.08,ko:.08,heal:.15,land:.06,pop:.05,coin:.05,boom:.06};e.sfx=(u,f=e.now(),_=1)=>{if(e.muted||!m[u])return;let x=g[u]||.03;if(e.last[u]&&f-e.last[u]<x)return;if(e.last[u]=f,t){e.cues.push({k:"sfx",kind:u,t:f,v:_});return}let p=e.ctx;if(!(!p||p.state!=="running"))try{m[u](p,e.sfxGain,p.currentTime+.01,_)}catch{}},e.now=()=>t?e.clock():e.ctx?e.ctx.currentTime:0,e.clock=()=>0;let d=null;return e.voice=async(u,f)=>{if(e.muted||!u)return!1;if(e.speakingUntil=e.now()+(f||2),t)return e.cues.push({k:"voice",url:u,t:e.now(),dur:f}),!0;let _=e.ctx;if(_&&_.state!=="running"&&e.resume(),_&&_.state==="running")try{let x=await fetch(u).then(E=>{if(!E.ok)throw new Error("HTTP "+E.status);return E.arrayBuffer()}),p=await new Promise((E,P)=>{let C=_.decodeAudioData(x,E,P);C&&C.catch&&C.catch(P)});if(d)try{d.stop()}catch{}let y=_.createBufferSource();y.buffer=p,y.connect(e.voiceGain);let R=_.currentTime+.02;return e.sfxGain.gain.setTargetAtTime(.28,R,.05),e.sfxGain.gain.setTargetAtTime(.55,R+p.duration,.2),y.start(R),d=y,e.played++,y.onended=()=>{d===y&&(d=null)},!0}catch{e.fails++}try{return n.src=u,await n.play(),e.played++,!0}catch{return e.fails++,!1}},e.mix=async(u,f=44100)=>{let _=window.OfflineAudioContext||window.webkitOfflineAudioContext,x=new _(2,Math.ceil(u*f),f),p={};r(x,x.destination,p);let y=e.cues.filter(U=>U.k==="voice"),R=await Promise.all(y.map(U=>fetch(U.url).then(V=>V.arrayBuffer()).then(V=>x.decodeAudioData(V)).catch(()=>null)));for(let U of e.cues)if(U.k==="sfx"&&U.t<u)try{m[U.kind](x,p.sfxGain,U.t+.01,U.v)}catch{}y.forEach((U,V)=>{let L=R[V];if(!L||U.t>=u)return;let Y=x.createBufferSource();Y.buffer=L,Y.connect(p.voiceGain),Y.start(U.t+.02),p.sfxGain.gain.setTargetAtTime(.28,U.t,.05),p.sfxGain.gain.setTargetAtTime(.55,U.t+L.duration,.2)});let E=await x.startRendering(),P=E.length,C=[E.getChannelData(0),E.getChannelData(1)],v=new DataView(new ArrayBuffer(44+P*4)),M=(U,V)=>{for(let L=0;L<V.length;L++)v.setUint8(U+L,V.charCodeAt(L))};M(0,"RIFF"),v.setUint32(4,36+P*4,!0),M(8,"WAVEfmt "),v.setUint32(16,16,!0),v.setUint16(20,1,!0),v.setUint16(22,2,!0),v.setUint32(24,f,!0),v.setUint32(28,f*4,!0),v.setUint16(32,4,!0),v.setUint16(34,16,!0),M(36,"data"),v.setUint32(40,P*4,!0);let B=44;for(let U=0;U<P;U++)for(let V=0;V<2;V++){let L=Math.max(-1,Math.min(1,C[V][U]));v.setInt16(B,L*32767,!0),B+=2}let N=new Uint8Array(v.buffer),O="";for(let U=0;U<N.length;U+=32768)O+=String.fromCharCode.apply(null,N.subarray(U,U+32768));return btoa(O)},e}function xd(i,{off:t=!1}={}){let e=Math.random().toString(36).slice(2,8),n=performance.now(),s=[];addEventListener("error",o=>{s.push(String(o.message||"error").slice(0,110)),s.length>3&&s.shift()}),addEventListener("unhandledrejection",o=>{s.push(("rej "+(o.reason&&o.reason.message||o.reason)).slice(0,110)),s.length>3&&s.shift()});let r=o=>{let l=i();return{id:e,reason:o,up:(performance.now()-n)/1e3,ua:navigator.userAgent.slice(0,160),scr:{w:screen.width,h:screen.height,dpr:devicePixelRatio},vis:document.visibilityState,errs:s.slice(),...l,mem:{...l.mem||{},heap:performance.memory?performance.memory.usedJSHeapSize/1048576:void 0}}},a=o=>{if(t)return;let l=r(o),c=JSON.stringify(l);if(o==="start")try{let m=JSON.parse(localStorage.getItem("lg_diagLast")||"null");m&&m.reason!=="pagehide"&&(c=JSON.stringify({...l,prev:m}))}catch{}try{localStorage.setItem("lg_diagLast",JSON.stringify(l))}catch{}try{navigator.sendBeacon&&navigator.sendBeacon("/diag",new Blob([c],{type:"text/plain"}))||fetch("/diag",{method:"POST",body:c,keepalive:!0}).catch(()=>{})}catch{}};return setTimeout(()=>a("start"),4e3),setInterval(()=>a("tick"),3e4),document.addEventListener("visibilitychange",()=>{document.hidden&&a("hidden")}),addEventListener("pagehide",()=>a("pagehide")),{send:a,errs:s}}var ls=(i,t)=>i[Math.floor(t()*i.length)%i.length],Px=["one","two","three"],Lx={library:["The books are whispering your names...","Shh. The books are listening."],crypt:["Mind the bones, darlings. Some of them still move.","Cold, is it not? The dead like it that way."],mirror:["Do not trust your reflection in here.","So many of you... and so many mirrors."],clock:["Tick, tock. Time is not on your side.","Every gear in here wants a finger."],attic:["Something with too many legs lives up here.","Watch the webs, little lanterns."],lab:["Do not drink anything green.","Bubbling potions, and bubbling trouble."],ballroom:["The ghosts are still dancing. Do not cut in.","One last waltz for the dead."]};function _d({nameOf:i,rng:t=Math.random}){let e=[],n=0,s=(a,o,l,c={})=>({text:a,pri:o,banner:l||null,...c}),r=a=>{let o=a.map(i).filter(Boolean);if(!o.length)return"";let l=o.slice(0,3),c=o.length-l.length;return(l.length===1?l[0]:l.slice(0,-1).join(", ")+" and "+l[l.length-1])+(c>0?` and ${c} more`:"")};return{lines(a,o){let l=[];for(let c of a){let m=c.id?i(c.id):null;switch(c.k){case"gather":l.push(s(ls(["Gather, climbers! Comment anything to take a lantern. The tower is waiting.","A new climb begins. Comment to join the party, my darlings."],t),6,"NEW CLIMB"));break;case"floor":{let g=c.boss?Vn:Tn[c.th];if(c.boss){l.push(s(`Floor ${c.n}. The bell tower. Can you hear it? Something is coming.`,8,`FLOOR ${c.n} \xB7 BOSS`));break}let d=`Floor ${c.n}. ${g.name}. ${ls(Lx[g.id]||[""],t)}`,u=c.predict?i(c.predict.id):null;u&&(d+=c.predict.kind==="fall"?` I foresee... ${u} will fall.`:` I foresee gold in ${u}'s future.`),l.push(s(d,7,`FLOOR ${c.n}`));break}case"vote":c.start&&l.push(s(c.doors===2?"Left or right? Comment one or two!":"Choose a door. Comment one, two, or three!",6,"VOTE!"));break;case"prophecy":l.push(s(`The cards have spoken. Door ${Px[c.door]} is safe.`,8));break;case"reveal":{let g=c.kinds[c.door],d=c.none?"Nobody chose? Then I choose for you. ":"";l.push(s(d+{treasure:ls(["Treasure! The spirits smile on you.","Gold! Lovely, lovely gold."],t),trap:ls(["A trap! Run, little lanterns!","Oh dear. A trap."],t),monster:ls(["Something hungry wakes up...","A monster! Fight it! Spam the chat!"],t),riddle:"A riddle blocks the way."}[g],7,{treasure:"TREASURE!",trap:"TRAP!",monster:"MONSTER!",riddle:"RIDDLE!"}[g]));break}case"treasure":c.lucky&&l.push(s(`Just as I foresaw. ${i(c.lucky)} grabs the biggest jewel.`,6));break;case"trap":case"mlose":{if(c.k==="mlose"&&l.push(s(c.boss?`${c.name} wins this time... the lanterns flicker.`:"The beast was too strong.",7)),c.blocked){l.push(s("The shield holds! Nobody falls.",7,"BLOCKED!"));break}c.foretold&&l.push(s(`Just as I foresaw. Poor ${i(c.foretold)}.`,8,"FORETOLD"));let g=c.fell.filter(d=>d!==c.foretold);g.length&&l.push(s(`${r(g)} ${g.length>1?"fall":"falls"} into the dark.`,6)),c.saved&&c.saved.length&&l.push(s(`${r(c.saved)} ${c.saved.length>1?"were":"was"} saved by a spare life!`,5));break}case"monster":c.boss?l.push(s(c.summoned?`${c.name} has been summoned! Fight, all of you! Spam the chat!`:`${c.name} rises! Spam the chat to fight! Likes hurt it too!`,9,c.summoned?"GHOST BOSS!":"BOSS FIGHT!")):l.push(s(`It is ${c.name}! Comment anything to hit it!`,7));break;case"mwin":{let g=c.top?i(c.top):null;c.boss?l.push(s(`${c.name} is banished!${g?` ${g} struck hardest!`:""}${c.rescued?" The fallen rise again!":""}`,9,"BOSS DOWN!")):l.push(s(`Banished!${g?` ${g} struck hardest.`:""}`,6,"VICTORY!"));break}case"matk":c.slam&&l.push(s(c.blocked?"The boss slams down! The shield holds!":"The boss slams the floor!",5));break;case"riddle":l.push(s(`Answer me this. ${Wn[c.i][0]} First to comment the answer wins!`,9,"RIDDLE!",{riddle:1}));break;case"rwin":l.push(s(c.bot?`${m} solved it. The answer was ${c.a}. Come on chat, beat the bots!`:`${m} has it! The answer was ${c.a}. Clever soul!`,9,c.bot?null:"SOLVED!",{win:1}));break;case"rfail":l.push(s(`Nobody? The answer was ${c.a}. The tower takes some of your light.`,7));break;case"climb":l.push(s(c.lift?"Into my lift, darlings! We rise past a floor!":ls(["Up the stairs we go.","Onward. Upward.","Keep climbing. Keep your lanterns lit."],t),c.lift?7:3,c.lift?"MIRA'S LIFT":null));break;case"gift":{let g={prophecy:c.banked?`${m} lights a candle. I will reveal the next safe door.`:`${m} asks the cards. Look, the safe door glows!`,shield:`${m} casts a shield over the party!`,rescue:c.n?`${m} rescues the fallen! Rise, little ghosts!`:`${m} fills the lanterns! Thank you!`,skip:c.blessing?`${m} blesses the party! Thank you!`:c.hitBoss?`${m} strikes with magic!`:`${m} calls my lift!`,boss:c.blessing?`${m} blesses the whole tower! The fallen rise!`:c.hitBoss?`${m} hurls a ghost bomb at the boss!`:`${m} summons a ghost boss! Brave... or foolish.`}[c.tier];g&&l.push(s(g,{prophecy:6,shield:7,rescue:8,skip:8,boss:9}[c.tier],{prophecy:c.banked?null:"PROPHECY",shield:"SHIELD!",rescue:"RESCUE!",skip:c.blessing?"BLESSING":"MIRA'S LIFT",boss:c.blessing?"BLESSING":"GHOST BOSS!"}[c.tier],{gift:c.tier}));break}case"follow":l.push(s(`Thank you for the follow, ${m}. A spare life for you.`,4));break;case"share":l.push(s(`${m} shared the tower! A spare life, and more oil.`,4));break;case"blaze":l.push(s(c.rescued?`The lanterns blaze! Thank you for the likes! ${i(c.rescued)} rises again!`:"The lanterns blaze! Thank you for the likes!",5,"LANTERNS BLAZE"));break;case"lowfuel":l.push(s("Your lanterns are fading! Tap the screen, send likes, keep them lit!",7,"LOW OIL!"));break;case"join":c.bot||e.push(c.id);break;case"end":{let g=c.top&&c.top.length?i(c.top[0]):null,d=c.reason==="top"?`You reached the top of my tower! Floor ${c.floor}!`:c.reason==="dark"?`The lanterns go dark on floor ${c.floor}.`:`Everyone has fallen on floor ${c.floor}.`;l.push(s(`${d}${g?` Top climber: ${g}! Shoutout to ${g}!`:""} A new climb begins soon.`,10,c.reason==="top"?"THE TOP!":`FLOOR ${c.floor}`,{win:1}));break}}}if(e.length&&o-n>6){n=o;let c=e.splice(0,60);l.push(s(ls([`Welcome ${r(c)}. Take a lantern.`,`${r(c)} joined the climb.`],t),2))}return l}}}var vd=["Sara","Ali","Hina","Omar","Zara","Bilal","Noor","Ayan","Esha","Faraz","Iman","Junaid","Kinza","Laiba","Moiz","Nimra","Rida","Saad","Tania","Umer","Maya","Leo","Aisha","Yusuf","Lina","Kai","Mia","Zain","Sofia","Adam","Hamza","Amna","Riya","Dev","Luna","Max"],yd=["","_x","22",".official","_99","\u{1F338}","xo","_07",".live","\u2728","_pk","786"],Md=["hi","join","lets go","me!","hello from dubai","gg","this is fire","shield","dash","\u{1F4A8}","\u{1F6E1}\uFE0F","dance","color pink","color gold","revenge","wow","\u{1F525}\u{1F525}","i will win","play","1","2","3","2","left","right","3\uFE0F\u20E3","candle","clock","echo","map","attack"],Sd=[["Rose",1],["TikTok",1],["Finger Heart",5],["GG",1],["Doughnut",30],["Hand Hearts",100],["Corgi",299],["Money Gun",500],["Lion",29999]];function bd(i="busy",t=Math.random){let e=c=>Math.floor(t()*c),n=[],s=()=>{let c=vd[e(vd.length)]+yd[e(yd.length)],m={uid:c.toLowerCase().replace(/[^\w.]/g,"")+n.length,name:c};return n.push(m),m},r=()=>n.length?n[e(n.length)]:s(),a=0,o=0,l=i==="quiet"?3:i==="gifts"?30:i==="demo"?40:220;return{people:n,tick(c){a+=c,o+=c;let m=[],g=i==="quiet"?.6:i==="busy"?Math.min(14,2+a/6):i==="demo"?5:4;for(;o>1/g;){o-=1/g;let u=n.length<Math.min(l,i==="busy"?10+a*2.5:l)&&t()<.6?s():r(),f=t();if(f<.5){let _=Md[e(Md.length)];if(t()<.25&&n.length>2){let x=r();x!==u&&(_=(t()<.5?"attack ":"\u2694\uFE0F ")+x.name.replace(/[^\w]/g,"").slice(0,6))}m.push({type:"chat",uid:u.uid,name:u.name,text:_})}else if(f<.8)m.push({type:"like",uid:u.uid,name:u.name,count:1+e(15)});else if(f<(i==="gifts"?.98:.9)){let _=t()<.75?Sd[e(4)]:Sd[4+e(i==="gifts"?4:3)];m.push({type:"gift",uid:u.uid,name:u.name,giftName:_[0],coins:_[1],count:t()<.2?1+e(5):1})}else f<.95?m.push({type:"follow",uid:u.uid,name:u.name}):m.push({type:"share",uid:u.uid,name:u.name})}return m}}}var He=new URLSearchParams(location.search),ie=i=>document.getElementById(i),bl=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,ia=He.get("mode")==="phone"||He.get("mode")!=="pc"&&(bl||/Android|Mobile/.test(navigator.userAgent)),Dn=He.get("render")==="1",js=Dn||He.get("local")==="1",th=He.get("key")||"",sa=Number(He.get("fps"))||(ia?30:60),zd=He.get("mute")==="1";He.get("clean")==="1"&&document.body.classList.add("clean");var Gd=ia?[{pr:1.5,maxW:780,labels:22,particles:1,dust:!0,props:!0},{pr:1.25,maxW:700,labels:16,particles:.75,dust:!0,props:!0},{pr:1,maxW:600,labels:12,particles:.5,dust:!1,props:!0},{pr:.8,maxW:480,labels:9,particles:.35,dust:!1,props:!1}]:[{pr:2,maxW:Number(He.get("maxw"))||1080,labels:28,particles:1,dust:!0,props:!0},{pr:1.5,maxW:900,labels:22,particles:1,dust:!0,props:!0},{pr:1,maxW:700,labels:16,particles:.6,dust:!1,props:!0},{pr:.8,maxW:540,labels:11,particles:.4,dust:!1,props:!1}],xn=He.has("q")?Math.max(0,Math.min(3,Number(He.get("q")))):0,Nx=He.has("q"),ii=ie("gl"),re=null,Vd=0,Hd=0,_l=[],Hi=!1,hs=ie("hud"),Gt=hs.getContext("2d");function Wd(){if(!(He.get("view")==="2d"||localStorage.getItem("lg_force2d")==="1"))try{re=pd(ii,{maxChars:60,particles:ia?700:1100,aa:!ia||bl,preserve:Dn}),ii.addEventListener("webglcontextlost",ra,!1),ii.addEventListener("webglcontextrestored",Xd,!1);return}catch{ri("gl-fail")}Tl()}function Tl(){if(re&&re.kind==="2d")return;try{re&&re.dispose(),re&&re.loseContext&&re.loseContext()}catch{}let i=document.createElement("canvas");i.id="gl",ii.replaceWith(i),ii=i,re=md(ii,{}),ri("view-2d"),Wi()}function ra(i){i.preventDefault(),Vd++,Hi=!0,ri("ctx-lost"),_l.push(performance.now()),_l=_l.filter(t=>performance.now()-t<12e4),Qd("Graphics reset\u2026 recovering"),clearTimeout(ra.t),ra.t=setTimeout(()=>{Hi&&(localStorage.setItem("lg_force2d","1"),Tl(),Hi=!1,Sl())},4e3),oh&&oh.send("ctxlost")}function Xd(){if(clearTimeout(ra.t),Hd++,ri("ctx-restored"),_l.length>=3){localStorage.setItem("lg_force2d","1"),Tl(),Hi=!1,Sl();return}try{re.dispose()}catch{}ii.removeEventListener("webglcontextlost",ra),ii.removeEventListener("webglcontextrestored",Xd),re=null,Wd(),xn=Math.min(3,xn+1),Wi(),Hi=!1,Sl()}var eh=390,Js=844;function Wi(){let i=window.innerWidth,t=window.innerHeight,e=ie("stage"),n=i,s=t;i/t>.7&&(n=Math.round(Math.min(i,t*9/16)),s=Math.round(Math.min(t,n*16/9))),e.style.width=n+"px",e.style.height=s+"px",eh=n,Js=s,document.documentElement.style.setProperty("--u",(n/100).toFixed(3)+"px");let r=Gd[xn],a=window.devicePixelRatio||1,o=Math.min(a,r.pr,r.maxW/n);re&&(re.resize(n,s,o),re.setQuality(r));let l=Math.min(a,2,900/n);hs.width=Math.round(n*l),hs.height=Math.round(s*l),hs.__pr=l}addEventListener("resize",()=>{clearTimeout(Wi.t),Wi.t=setTimeout(Wi,120)});var We=gd({record:Dn});We.muted=zd;var qd=ie("soundChip");function Dx(){We.unlock(),setTimeout(()=>{We.state()==="running"&&(qd.hidden=!0)},200)}["pointerdown","touchstart","click","keydown"].forEach(i=>addEventListener(i,Dx,{passive:!0}));document.addEventListener("visibilitychange",()=>{document.hidden||We.resume()});!Dn&&!zd&&(We.unlock(),setTimeout(()=>{We.state()!=="running"&&(qd.hidden=!1)},700));var si=new Map,vl=[],ri=i=>{vl.push(i),vl.length>8&&vl.shift()},ai={ws:0,snaps:0,ev:0,err:0,say:0},_n=[],wi=null,Td=0,wd="",Ml=$r,ni=null,pl="",sn={phase:"gather",members:[],ghosts:[],tl:0,pd:1,floor:0,th:-1,nd:3,vc:[0,0,0],pr:-1,ch:-1,kinds:null,fuel:100,sh:0,mo:null,lift:0,nth:-9,n:0,gh:0,hype:0,run:0,best:0,ri:-1,rs:0};function nh(i=[],t=[]){for(let e of t)si.delete(e);for(let e of i)si.set(e.id,e)}var Xn=null,Zr=1e3;function ih(){let i=(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws?game=tower"+(th?"&key="+encodeURIComponent(th):"");try{Xn=new WebSocket(i)}catch{return setTimeout(ih,Zr)}Xn.onopen=()=>{ai.ws++,Zr=1e3,ri("ws-open"),Sl();try{let t=JSON.parse(localStorage.getItem("lg_towerBoard")||"null");t&&t.json&&t.sig&&Xn.send(JSON.stringify({t:"restore",json:t.json,sig:t.sig}))}catch{}},Xn.onmessage=t=>{let e;try{e=JSON.parse(t.data)}catch{return}Ux(e)},Xn.onclose=()=>{Xn=null,ri("ws-close"),setTimeout(ih,Zr),Zr=Math.min(1e4,Zr*1.7),ai.ws&&Qd("Reconnecting\u2026")},Xn.onerror=()=>{}}function Ux(i){switch(i.t){case"hello":si.clear(),nh(i.roster),_n=[],wi=null,Ml=i.tiers||Ml,jd(),Dd(i),Ed(i.snap);break;case"roster":nh(i.add,i.del);break;case"s":Ed(i);break;case"say":Kd(i.text,i.url,i.dur);break;case"banner":Jd(i.text);break;case"board":Dd(i);break;case"status":pl=i.tiktok?.state||"",ie("conn").className=pl==="connected"?"connected":/wait|connecting|reconnect/.test(pl)?"waiting":pl==="error"?"error":"",Jx(i.tiktok);break}}function Ed(i){if(!i)return;ai.snaps++;let e=performance.now()/1e3-i.tm;wi===null||e<wi||Math.abs(e-wi)>2?wi=e:wi+=(e-wi)*.02,_n.length&&i.tm<_n[_n.length-1].tm-1&&(_n=[],wi=e),_n.push({tm:i.tm,s:i,done:!1}),_n.length>40&&_n.shift()}var Fx=.16;function Ox(i){if(!_n.length)return sn;let t=i-wi-Fx;for(let r of _n)if(!r.done&&r.tm<=t){r.done=!0;let a=t-r.tm>1.2;for(let o of r.s.ev||[])Zd(o,a)}let e=_n[0],n=null;for(let r=0;r<_n.length;r++)if(_n[r].tm<=t)e=_n[r];else{n=_n[r];break}if(!n||n===e)return sh(e.s,null,0);let s=Math.max(0,Math.min(1,(t-e.tm)/Math.max(.001,n.tm-e.tm)));return sh(e.s,n.s,s)}var Ad=[],Cd=[];function sh(i,t,e){t&&t.fl!==i.fl&&(t=null);let n=[],s=[],r=new Map;if(t)for(let m=0;m<t.f.length;m+=6)r.set(t.f[m],m);let a=0,o=0;for(let m=0;m<i.f.length;m+=6){let g=i.f[m],d=i.f[m+5];if(d&Pe.ghost){let _=Cd[o]||(Cd[o]={});o++,_.id=g,_.flags=d,_.info=si.get(g)||{name:"?",color:16777215},s.push(_);continue}let u=Ad[a]||(Ad[a]={});a++,u.id=g,u.x=i.f[m+1],u.y=i.f[m+2],u.z=i.f[m+3],u.face=i.f[m+4],u.flags=d;let f=r.get(g);if(f!==void 0&&t&&!(t.f[f+5]&Pe.ghost)){let _=t.f;u.x+=(_[f+1]-u.x)*e,u.y+=(_[f+2]-u.y)*e,u.z+=(_[f+3]-u.z)*e;let x=_[f+4]-u.face;x=Math.atan2(Math.sin(x),Math.cos(x)),u.face+=x*e}u.info=si.get(g)||{name:"?",color:16777215},n.push(u)}let l=t&&e>.5?t:i;l.ph!==wd&&(wd=l.ph,Td=cs());let c=l.mo;return c&&t&&i.mo&&t.mo&&(c={...l.mo,hp:i.mo.hp+(t.mo.hp-i.mo.hp)*e}),sn={phase:l.ph,members:n,ghosts:s,tl:l.tl,pd:l.pd,floor:l.fl,th:l.th,nd:l.nd,vc:l.vc,pr:l.pr,ch:l.ch,kinds:l.kinds,fuel:t?i.fuel+(t.fuel-i.fuel)*e:i.fuel,sh:l.sh,mo:c,lift:l.lift,nth:l.nth,n:l.n,gh:l.gh,hype:l.hype,run:l.run,best:l.best,ri:l.ri,rs:l.rs,pdc:l.pdc,pk:l.pk,phaseStart:Td},sn}var Nn=null,rh=null,Yd=null,Vi=[],Rd=0,ah=0;function Bx(){let i={};for(let n of["gatherSeconds","enterSeconds","voteSeconds","revealSeconds","treasureSeconds","trapSeconds","monsterSeconds","riddleSeconds","bossSeconds","victorySeconds","climbSeconds","endSeconds","minParty","startFloor","bossEvery","fuelDrain","monsterHpMul","dmgMul","topFloor"])He.has(n)&&(i[n]=Number(He.get(n)));He.get("bots")==="0"&&(i.bots=!1);let t=Number(He.get("seed")||7),e=()=>(t=t*16807%2147483647,(t-1)/2147483646);Nn=new dl(i,Dn?e:Math.random),Yd=_d({nameOf:n=>Nn.byId.get(n)?.name||null,rng:Dn?e:Math.random}),He.get("crowd")&&(rh=bd(He.get("crowd"),Dn?e:Math.random)),window.__input=n=>Nn.input(n),window.__tower=Nn}var $c=0;function kx(i,t){if(rh)for(let r of rh.tick(i))Nn.input(r);for($c+=i;$c>=.05;)$c-=.05,Nn.step(.05);let e=Nn.drainRoster();nh(e.add,e.del);let n=Nn.drain();for(let r of Yd.lines(n,Nn.t))zx(r,t);let s=Nn.snapshot();for(let r of n)Zd(r,!1);return n.some(r=>r.k==="end"||r.k==="rwin"||r.k==="mwin")&&(ni={session:Nn.board(8),all:[],sessionBest:Nn.sessionBest}),sh(s,null,0)}function zx(i,t){i.banner&&Jd(i.banner);let e={...i,at:t,p:null};for(e.p=fetch("/api/say?voice=mira&text="+encodeURIComponent(i.text)).then(n=>n.json()).catch(()=>({url:null})),ah++,e.p.finally(()=>ah--),Vi.push(e),Vi.sort((n,s)=>s.pri-n.pri||n.at-s.at);Vi.length>3;)Vi.pop()}async function ta(i){if(i<Rd||!Vi.length||ta.busy)return;let t=Vi.shift();if(!t.win&&!t.riddle&&i-t.at>(t.pri>=7?9:6))return;ta.busy=!0;let e=await t.p;ta.busy=!1;let n=cs(),s=e.dur||Math.min(6,.9+t.text.length/15);Kd(t.text,e.url,s),Rd=n+s+.25}var Xi=i=>si.get(i)?.name||"?",$d=i=>"#"+((si.get(i)?.color??16777215)>>>0).toString(16).padStart(6,"0"),qn=i=>String(i).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ml=i=>`<span style="color:${$d(i)}">${qn(Xi(i))}</span>`,ea=[],Id=0,Pd=0,jr=null;function Zd(i,t){if(ai.ev++,!t&&re&&!Hi)try{re.fx(i,sn)}catch{ai.err++}let e=(n,s)=>{t||We.sfx(n,We.now(),s)};switch(i.k){case"gather":e("wind"),ie("feed").innerHTML="",jr=null;break;case"floor":e(i.boss?"bell":"creak"),i.boss&&e("organ"),jr=null;break;case"vote":i.start?e("chime"):cs()-Id>.12&&(Id=cs(),e("squeak",.35));break;case"prophecy":e("chime"),Qr("prophecy",`\u{1F52E} Door ${i.door+1} is SAFE`,i.banked?"Mira kept a prophecy for you":"the cards have spoken");break;case"reveal":e("creak"),e({treasure:"coin",trap:"trap",monster:"roar",riddle:"organ"}[i.kinds[i.door]]||"creak");break;case"treasure":e("coin"),e("fanfare",.5);break;case"trap":e("trap"),(i.trap==="shards"||i.trap==="chandelier")&&e("shatter"),i.blocked&&e("shield");break;case"fall":e("ghost",.6),t||gl("fall",`\u{1F47B} ${ml(i.id)} fell`);break;case"rise":e("heal",.6),t||gl("rise",`\u2728 ${ml(i.id)} rises again`);break;case"monster":e("roar"),e(i.boss?"organ":"heart");break;case"hit":{cs()-Pd>.06&&(Pd=cs(),e(i.c?"crit":"punch",.55)),!t&&ea.length<28&&ea.push({v:i.d,c:i.c,t0:cs(),j:(Math.random()-.5)*2});break}case"matk":e(i.slam?"boom":"roar",i.slam?1:.5);break;case"mwin":e("fanfare"),e("cheer"),!t&&i.top&&gl("win",`\u2694\uFE0F ${ml(i.top)} struck hardest`);break;case"mlose":e("trap"),e("ghost");break;case"riddle":e("organ"),e("chime");break;case"rwin":e("fanfare"),e("coin"),jr={id:i.id,a:i.a},t||gl("win",`\u2753 ${ml(i.id)} solved it: <b>${qn(i.a)}</b>`);break;case"rfail":e("ghost"),jr={id:0,a:i.a};break;case"climb":e(i.lift?"power":"creak",.6);break;case"gift":e("coin"),Gx(i);break;case"summon":e("bell"),e("organ");break;case"follow":e("power"),Qr("perk",`\u2795 ${qn(Xi(i.id))} followed`,"\u2192 spare life");break;case"share":e("power"),Qr("perk",`\u{1F501} ${qn(Xi(i.id))} shared`,"\u2192 spare life + oil");break;case"blaze":e("heal"),e("cheer"),Qr("perk","\u2764\uFE0F LANTERNS BLAZE!",i.rescued?`${qn(Xi(i.rescued))} rises + full glow`:"oil refilled");break;case"lowfuel":e("heart");break;case"end":e(i.reason==="top"?"fanfare":"bell"),i.reason==="top"&&e("cheer"),Hx(i);break}i.k!=="hit"&&i.k!=="vote"&&ri(i.k)}function Gx(i){let t=Ml.find(n=>n.id===i.tier)||{},e=`\u2192 ${t.label||i.tier}`;i.tier==="prophecy"&&(e=i.door!==void 0?`\u2192 \u{1F52E} door ${i.door+1} is safe`:i.banked?"\u2192 \u{1F52E} prophecy saved for the next vote":"\u2192 \u{1F52E} + lantern oil"),i.tier==="shield"&&(e=`\u2192 \u{1F6E1}\uFE0F shield \xD7${i.shields}`),i.tier==="rescue"&&(e=`\u2192 \u{1F496} ${i.n||0} fallen rise + oil`),i.tier==="skip"&&(e=i.hitBoss?"\u2192 \u{1FA84} massive hit!":i.blessing?"\u2192 \u{1FA84} blessing: oil + rescues":"\u2192 \u{1FA84} Mira's lift: skip a floor"),i.tier==="boss"&&(e=i.hitBoss?"\u2192 \u{1F47B} crushing blow!":i.blessing?"\u2192 \u{1F47B} blessing: all fallen rise":"\u2192 \u{1F47B} GHOST BOSS incoming"),Qr(i.tier,`${t.icon||"\u{1F381}"} ${qn(Xi(i.id))} sent ${qn(i.giftName||"a gift")}`,e)}function cs(){return Dn?Ks:performance.now()/1e3}function gl(i,t){let e=document.createElement("div");e.className="k "+i,e.innerHTML=t;let n=ie("feed");for(n.prepend(e);n.children.length>3;)n.lastChild.remove()}function Qr(i,t,e){let n=document.createElement("div");n.className="t "+i,n.innerHTML=`${t}<small>${e}</small>`;let s=ie("toasts");for(s.prepend(n);s.children.length>2;)s.lastChild.remove();lh(()=>n.remove(),3800)}var Ld=0;function Jd(i){let t=ie("banner");t.hidden=!1,t.classList.remove("show"),t.offsetWidth,t.textContent=i,t.classList.add("show"),clearTimeout(Ld),Ld=lh(()=>{t.hidden=!0},1650)}function Vx(i=.7){let t=ie("flash");t.style.transition="none",t.style.opacity=String(i),t.offsetWidth,t.style.transition="opacity 0.9s ease-out",t.style.opacity="0"}var Nd=0;function Kd(i,t,e){ai.say++;let n=ie("say");n.hidden=!1,n.className="mira",n.innerHTML=`<img src="/assets/mira-face.jpg" alt=""><div class="txt"><span class="who">\u{1F52E} MYSTIC MIRA</span>${qn(i)}</div>`;let s=Math.max(1800,(e||2)*1e3+600);re&&re.speaking(!0),clearTimeout(Nd),Nd=lh(()=>{n.hidden=!0,re&&re.speaking(!1)},s),t&&We.voice(t,e)}function Hx(i){let t=ie("winner");ie("winTitle").textContent=i.reason==="top"?"\u{1F451} THE TOP OF THE TOWER!":i.reason==="dark"?`\u{1F56F}\uFE0F LIGHTS OUT \xB7 FLOOR ${i.floor}`:`\u{1F47B} ALL FALLEN \xB7 FLOOR ${i.floor}`;let e=(i.top||[]).filter(n=>si.has(n));e.length?(ie("winName").textContent=Xi(e[0]),ie("winName").style.color=$d(e[0]),ie("winSub").textContent=(e.length>1?`with ${e.slice(1,3).map(Xi).join(" & ")} \xB7 `:"")+(si.get(e[0])?.bot?"bots led the climb \u2013 comment to beat them!":"top climber! \u{1F389}")):(ie("winName").textContent="The tower wins",ie("winName").style.color="#d08cff",ie("winSub").textContent="comment to start a new climb"),t.hidden=!1,t.style.animation="none",t.offsetWidth,t.style.animation=""}function jd(){ie("gifts").innerHTML=[...Ml].reverse().map(i=>`<div><span>${i.icon} ${qn(i.label)}</span><b>${i.min}\u{1FA99}</b></div>`).join("")}function Dd(i){if(!(!i||!i.session&&!i.all)&&(ni=i,i.signed))try{localStorage.setItem("lg_towerBoard",JSON.stringify(i.signed))}catch{}}var Ud=0,Fd=0;function Wx(i){let t=["gather","end","climb","treasure"].includes(sn.phase),e=ie("board");if(e.hidden=!t,!t||!ni)return;i-Fd>7&&(Fd=i,Ud^=1);let n=Ud&&ni.all&&ni.all.length,s=(n?ni.all:ni.session)||[],r=n?ni.bestFloor:ni.sessionBest,a=(n?"\u{1F451} ALL-TIME CLIMBERS":"\u{1F3F0} TODAY'S CLIMBERS")+(r?` \xB7 best F${r}`:""),o=s.length?s.slice(0,5).map(c=>`<li><span class="nm">${qn(c.name)}</span><span class="sc">${c.pts}\u2728${c.best||c.floors?" F"+(c.best||c.floors):""}</span></li>`).join(""):"",l=a+o;e.__k!==l&&(e.__k=l,ie("boardTitle").textContent=a,ie("boardList").innerHTML=o||'<div class="empty">No climbers yet \u2013 comment to grab a lantern! \u{1F3EE}</div>')}function Xx(i){let t=hs.__pr||1,e=eh/100;if(Gt.setTransform(1,0,0,1,0,0),Gt.clearRect(0,0,hs.width,hs.height),Gt.setTransform(t,0,0,t,0,0),!re||Hi)return;let n=sn,s=Gd[xn];Gt.textAlign="center",Gt.textBaseline="middle",Gt.lineJoin="round";let r=(g,d)=>`${g} ${d}px -apple-system, "Segoe UI", Roboto, sans-serif`;if(n.nd&&["vote","reveal","treasure","trap","monster","riddle","victory","enter"].includes(n.phase)){let g=(n.vc||[]).reduce((d,u)=>d+u,0)||1;for(let d=0;d<n.nd;d++){let u=re.doorTop(d);if(!u||!u.vis)continue;let f=Math.max(Js*.38,Math.min(Js*.6,u.y+Js*.105));if(n.phase==="vote"||n.phase==="enter"){let _=n.vc&&n.vc[d]||0,x=_>0&&_===Math.max(...n.vc),p=e*15,y=e*7.2;if(Gt.fillStyle=x?"rgba(120,50,200,0.92)":"rgba(20,8,40,0.82)",Jr(u.x-p/2,f-y,p,y,e*2),Gt.fill(),Gt.strokeStyle=x?"#ffd36a":"rgba(255,255,255,0.35)",Gt.lineWidth=e*.5,Gt.stroke(),Gt.fillStyle="#ffd36a",Gt.font=r(900,e*4.6),Gt.fillText(String(d+1),u.x-p*.24,f-y*.52),Gt.fillStyle="#fff",Gt.font=r(900,e*3.6),Gt.fillText(String(_),u.x+p*.2,f-y*.52),Gt.fillStyle="rgba(255,255,255,0.18)",Jr(u.x-p/2+e,f-e*1.6,p-e*2,e*.9,e*.45),Gt.fill(),Gt.fillStyle="#ffd36a",Jr(u.x-p/2+e,f-e*1.6,(p-e*2)*(_/g),e*.9,e*.45),Gt.fill(),n.pr===d){let R=1+Math.sin(i*6)*.06;Gt.font=r(900,e*3.6*R),Gt.lineWidth=e*.9,Gt.strokeStyle="#2a0050",Gt.strokeText("\u{1F52E} SAFE",u.x,f-y-e*3),Gt.fillStyle="#e8c8ff",Gt.fillText("\u{1F52E} SAFE",u.x,f-y-e*3)}}else if(n.kinds&&n.kinds[d]){let _=n.ch===d;Gt.globalAlpha=_?1:.6,Gt.font=r(900,e*(_?8:5.5)),Gt.fillText(ul[n.kinds[d]]||"",u.x,f-e*3.5),Gt.globalAlpha=1}}}let o=(re.drawn()||[]).filter(g=>!g.ghost).map(g=>({f:g,s:(g.flags&Pe.cmd?8:0)+(g.flags&Pe.crown?6:0)+(g.flags&Pe.gift?5:0)+(g.flags&Pe.bot?0:3)+(n.pdc===g.id?9:0)}));o.sort((g,d)=>d.s-g.s);let l=Math.round(e*(o.length>14?2.5:2.9)),c=[];for(let{f:g}of o.slice(0,s.labels)){let d=re.project(g.x,g.y,g.z);if(!d.vis||d.x<-40||d.x>eh+40||d.y<Js*.3||d.y>Js*.9||c.some(P=>Math.abs(P.x-d.x)<e*9&&Math.abs(P.y-d.y)<e*3.6))continue;c.push(d);let u=g.info||{},f=g.flags&Pe.bot,_=n.pdc===g.id,x=g.flags>>Yc&3,p=(_?n.pk==="fall"?"\u{1F480} ":"\u{1F4B0} ":f?"\u{1F916} ":g.flags&Pe.crown?"\u{1F451} ":"")+u.name+(g.flags&Pe.life?" \u2764\uFE0F":"")+(x&&n.phase==="vote"?` \u2192${x}`:"");Gt.font=r(800,l);let y=Math.min(Gt.measureText(p).width,e*30),R=l*1.35,E=d.y-R*.6;Gt.fillStyle=_?"rgba(90,0,60,0.85)":f?"rgba(40,40,60,0.7)":"rgba(14,6,34,0.78)",Jr(d.x-y/2-e*1.3,E-R/2,y+e*2.6,R,R/2),Gt.fill(),Gt.fillStyle="#"+((u.color??16777215)>>>0).toString(16).padStart(6,"0"),Jr(d.x-y/2-e*1.3,E-R/2,e*.9,R,e*.45),Gt.fill(),Gt.fillStyle=f?"#c8c8d8":"#fff",Gt.fillText(p,d.x+e*.2,E+1,e*30)}let m=re.monsterTop&&re.monsterTop();for(let g=ea.length-1;g>=0;g--){let d=ea[g],u=(i-d.t0)/.8;if(u>=1||u<0||!m){ea.splice(g,1);continue}let f=1+.9*Math.pow(Math.max(0,1-u*4),2),_=e*(d.c?6.4:4.2)*f;Gt.font=r(900,_),Gt.globalAlpha=Math.min(1,(1-u)*2.2);let x=m.x+d.j*e*9,p=m.y+e*6-u*e*10,y=d.c?d.v+"!":String(d.v);Gt.lineWidth=_*.18,Gt.strokeStyle="rgba(40,0,40,0.85)",Gt.strokeText(y,x,p),Gt.fillStyle=d.c?"#ffe03a":"#ffffff",Gt.fillText(y,x,p)}Gt.globalAlpha=1}function Jr(i,t,e,n,s){Gt.beginPath(),Gt.moveTo(i+s,t),Gt.arcTo(i+e,t,i+e,t+n,s),Gt.arcTo(i+e,t+n,i,t+n,s),Gt.arcTo(i,t+n,i,t,s),Gt.arcTo(i,t,i+e,t,s),Gt.closePath()}var qx=i=>i.th===-2?Vn.name:i.th===-1?Hn.name:(Tn[i.th]||Hn).name,Zc=-1;function Gi(i,t){let e=ie(i);e.__t!==t&&(e.__t=t,e.textContent=t)}function Yx(i){let t=sn,e=document.body,n=t.phase==="monster"||t.phase==="boss",s=t.phase==="riddle"&&t.ri>=0,r="\u2764\uFE0F LIKES = LANTERN OIL",a="",o=["\u{1F6AA} vote doors 1 \xB7 2 \xB7 3","\u2753 answer riddles","\u{1F381} gifts = powers"];t.phase==="gather"||t.phase==="end"?(r="\u{1F3EE} COMMENT TO JOIN!",o=["\u{1F6AA} vote doors 1 \xB7 2 \xB7 3","\u2764\uFE0F likes = lantern oil","\u2795 follow = spare life"]):t.phase==="vote"||t.phase==="enter"?(r=t.nd===2?"\u{1F6AA} COMMENT 1 OR 2!":"\u{1F6AA} COMMENT 1 \xB7 2 \xB7 3!",a="vote",o=["\u{1F52E} any gift = safe door","\u{1F6E1}\uFE0F 5\u{1FA99} = shield"]):n?(r=t.phase==="boss"?"\u{1F47B} BOSS! SPAM CHAT!":"\u2694\uFE0F SPAM CHAT TO HIT!",a="fight",o=["\u{1F4AC} every comment = a hit","\u2764\uFE0F likes hit too","\u{1F381} gifts = huge hits"]):s&&(r="\u2753 ANSWER IN CHAT!",a="riddle",o=["\u{1F3C6} first right answer wins"]);let l=o.join("|");ie("howChips").__k!==l&&(ie("howChips").__k=l,ie("howChips").innerHTML=o.map(_=>`<span>${qn(_)}</span>`).join("")),Gi("howTitle",r),ie("howTitle").className="title"+(a?" "+a:"");let c,m=t.floor?`FLOOR ${t.floor}`:"THE GATE";t.phase==="gather"?c=`\u{1F3EE} CLIMB #${t.run+1} IN ${Math.ceil(t.tl)}s \xB7 ${t.n} climbers`:t.phase==="end"?c=`\u{1F3F0} CLIMB OVER \xB7 ${m}${t.best?" \xB7 best "+t.best:""}`:t.phase==="climb"?c=`\u{1FA9C} CLIMBING${t.lift?" \xB7 MIRA'S LIFT \u2728":"\u2026"} \xB7 \u{1F465} ${t.n}`:c=`${m} \xB7 ${qx(t).toUpperCase()}${["vote","monster","boss","riddle"].includes(t.phase)?` \xB7 \u23F3${Math.ceil(t.tl)}s`:""} \xB7 \u{1F465} ${t.n}${t.gh?" \u{1F47B} "+t.gh:""}`,Gi("pillTxt",c),ie("pill").className=t.phase==="boss"||t.th===-2?"boss":t.phase==="end"?"end":t.phase;let g=Math.max(0,Math.min(100,t.fuel));ie("fuelBar").style.width=g.toFixed(1)+"%",Gi("fuelN",Math.round(g)+"%"),Gi("shields",t.sh?"\u{1F6E1}\uFE0F\xD7"+t.sh:""),ie("fuel").className=g<25&&t.phase!=="gather"&&t.phase!=="end"?"low":"",e.classList.toggle("dark",g<20&&t.phase!=="gather");let d=ie("bossbar");d.hidden=!(n&&t.mo),d.hidden||(Gi("bossName",`${t.mo.b?"\u{1F47B}":t.mo.k==="spider"?"\u{1F577}\uFE0F":t.mo.k==="mimic"?"\u{1F4E6}":"\u{1F47B}"} ${t.mo.n.toUpperCase()} \xB7 ${Math.max(0,Math.ceil(t.mo.hp))}`),ie("bossHp").style.width=Math.max(0,t.mo.hp/t.mo.max*100).toFixed(1)+"%");let u=ie("riddle");if(u.hidden=!s,s){Gi("riddleQ",Wn[t.ri]?Wn[t.ri][0]:"");let _=jr||(t.rs?{id:t.rs>0?t.rs:0,a:Wn[t.ri][1][0]}:null);u.classList.toggle("solved",!!(_&&_.id)),Gi("riddleA",_?_.id?`\u2705 ${Xi(_.id)}: ${_.a.toUpperCase()}`:`\u274C It was: ${_.a.toUpperCase()}`:`\u270D\uFE0F First to comment the answer wins! \u23F3${Math.ceil(t.tl)}s`)}e.classList.toggle("voting",["enter","vote","reveal"].includes(t.phase)),e.classList.toggle("fighting",n&&!!t.mo),e.classList.toggle("riddling",s),Gi("likeN",String(t.hype||0)),ie("likeBar").style.width=Math.min(100,(t.hype||0)/300*100)+"%";let f=ie("count");if((t.phase==="vote"||t.phase==="gather")&&t.tl<=5&&t.tl>0&&!(t.phase==="gather"&&t.n<1)){let _=Math.ceil(t.tl);_!==Zc&&(Zc=_,f.hidden=!1,f.textContent=_,f.classList.remove("tick"),f.offsetWidth,f.classList.add("tick"),We.sfx(t.phase==="vote"&&_<=3?"heart":"beep"))}else f.hidden||(f.hidden=!0),Zc=-1;t.phase!=="end"&&(ie("winner").hidden=!0),Wx(i)}var yl=[];function lh(i,t){if(!Dn)return setTimeout(i,t);let e={at:Ks+t/1e3,fn:i};return yl.push(e),e}function $x(){for(let i=yl.length-1;i>=0;i--)yl[i].at<=Ks&&yl.splice(i,1)[0].fn()}function Qd(i){let t=ie("notice");t.textContent=i,t.hidden=!1}function Sl(){ie("notice").hidden=!0}var Kr=0,Jc=0,Kc=0,na=0,jc=0,xl=0,Od=0,Bd=6,Qc=new Map;function tf(i,t){if(js?sn=kx(i,t):sn=Ox(t),js&&ta(t),re&&!Hi)try{re.frame(sn,i,t)}catch{ai.err++,ri("frame-err"),ai.err>30&&Tl()}re&&re.thunder()&&(We.sfx("thunder"),Vx(.35)),t>Bd&&(Bd=t+11+Math.random()*9,sn.phase!=="monster"&&sn.phase!=="boss"&&We.sfx("wind",We.now(),.5)),Xx(t),t-Od>.25&&(Od=t,Yx(t))}function Zx(i){Jc++,!(i-Kc<2)&&(na=Jc/(i-Kc),Jc=0,Kc=i,!(Nx||Dn||document.hidden)&&(i<6||(na<sa*.8&&xn<3?++jc>=2&&(Qc.set(xn,(Qc.get(xn)||0)+1),xn++,jc=0,xl=0,Wi(),ri("q"+xn)):(jc=0,na>=sa*.95&&xn>0&&(Qc.get(xn-1)||0)<2?++xl>=6&&(xn--,xl=0,Wi(),ri("q"+xn)):xl=0))))}function ef(i){if(requestAnimationFrame(ef),document.hidden)return;let t=i/1e3;if(Kr&&t-Kr<1/sa-.004)return;let e=Math.min(.1,Kr?t-Kr:1/sa);Kr=t,tf(e,t),Zx(t)}var Ks=0;Dn&&(We.clock=()=>Ks,window.__render={async frame(i){Ks+=i,$x();for(let t=0;t<100&&(ta.busy||Vi.length&&Vi[0].p&&ah);t++)await new Promise(e=>setTimeout(e,30));return tf(i,Ks),{phase:sn.phase,n:sn.n,floor:sn.floor,fuel:sn.fuel}},mix:i=>We.mix(i),stats:()=>re.stats()});var kd=!1;function Jx(i){if(kd||bl||js||!th||!i||!/tikfinity|both/.test(i.source||""))return;kd=!0;let t=document.createElement("script");t.src="/shared/tikfinity.js",t.onload=()=>{let e=window.TikFinity;e.setSink(n=>{!Xn||Xn.readyState!==1||(n.type==="status"?Xn.send(JSON.stringify({t:"tf-status",state:n.mode==="live"?"connected":"waiting",message:n.message})):Xn.send(JSON.stringify({t:"tf",ev:n})))}),e.connect()},document.head.appendChild(t)}var oh=null;Wd();Wi();jd();js?(Bx(),ni={session:[],all:[]}):ih();Dn||(requestAnimationFrame(ef),setInterval(()=>{!document.hidden&&!js&&fetch("/healthz?overlay=1",{cache:"no-store"}).catch(()=>{})},4*6e4),oh=xd(()=>({mode:{phone:ia,ios:bl,kind:re?re.kind:"none",game:"tower",q:xn,fps:Math.round(na*10)/10,cap:sa},cv:{w:ii.width,h:ii.height},gl:{...re?re.stats():{},lost:Vd,restored:Hd},n:{...ai},last:vl.slice(),audio:{unlocked:We.state()==="running",ctx:We.state(),played:We.played,fails:We.fails}}),{off:He.get("diag")==="0"||js}));window.__towerUI={get world(){return sn},get level(){return xn},get fps(){return na},get view(){return re},stats:()=>re?re.stats():null,N:ai,audio:We,roster:si};})();
