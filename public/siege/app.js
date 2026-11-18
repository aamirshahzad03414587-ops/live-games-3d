(()=>{var gu=0,Cc=1,xu=2;var ca=1,_u=2,lr=3,os=0,fn=1,an=2,As=0,ls=1,Fn=2,Rc=3,Ic=4,vu=5;var Cs=100,yu=101,Mu=102,Su=103,bu=104,wu=200,Tu=201,Eu=202,Au=203,Pc=204,Lc=205,Cu=206,Ru=207,Iu=208,Pu=209,Lu=210,Nu=211,Du=212,Uu=213,Fu=214,oo=0,lo=1,co=2,tr=3,ho=4,uo=5,fo=6,po=7,Nc=0,Ou=1,Bu=2,_i=0,Dc=1,Uc=2,Fc=3,ha=4,Oc=5,Bc=6,kc=7;var zc=300,Rs=301,cr=302,ko=303,zo=304,mo=1e3,di=1001,go=1002,Yt=1003,ku=1004;var ua=1005;var yn=1006,Go=1007;var zi=1008;var Cn=1009,Gc=1010,Vc=1011,hr=1012,Vo=1013,ni=1014,Vn=1015,ii=1016,Ho=1017,Wo=1018,Is=1020,Hc=35902,Wc=35899,Xc=1021,qc=1022,si=1023,Ui=1026,Gi=1027,ur=1028,Xo=1029,cs=1030,qo=1031;var Yo=1033,da=33776,fa=33777,pa=33778,ma=33779,$o=35840,Zo=35841,Jo=35842,Ko=35843,jo=36196,Qo=37492,el=37496,tl=37488,nl=37489,ga=37490,il=37491,sl=37808,rl=37809,al=37810,ol=37811,ll=37812,cl=37813,hl=37814,ul=37815,dl=37816,fl=37817,pl=37818,ml=37819,gl=37820,xl=37821,_l=36492,vl=36494,yl=36495,Ml=36283,Sl=36284,xa=36285,bl=36286;var Dr=2300,xo=2301,ro=2302,vc=2303,yc=2400,Mc=2401,Sc=2402;var zu=3200;var wl=0,Gu=1,Vi="",gn="srgb",Ur="srgb-linear",Fr="linear",xt="srgb";var ao=7680;var Vu=519,Hu=512,Wu=513,Xu=514,Yc=515,qu=516,Yu=517,$c=518,Zc=519,$u=35044;var Jc="300 es",kn=2e3,nr=2001;function Gf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zu(){let i=Or("canvas");return i.style.display="block",i}var Hh={},ir=null;function Kc(...i){let e="THREE."+i.shift();ir?ir("log",e,...i):console.log(e,...i)}function Ju(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function We(...i){i=Ju(i);let e="THREE."+i.shift();if(ir)ir("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=Ju(i);let e="THREE."+i.shift();if(ir)ir("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Nr(...i){let e=i.join(" ");e in Hh||(Hh[e]=!0,We(...i))}function Ku(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ju={[oo]:oo,[co]:fo,[ho]:ho,[tr]:uo,[lo]:lo,[fo]:co,[po]:po,[uo]:tr},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Kl=Math.PI/180,_o=180/Math.PI;function _a(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function Hf(i,e){return(i%e+e)%e}function jl(i,e,t){return(1-t)*i+t*e}function Qu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Wf(i,e){if(e.constructor===Float32Array)return i;let t=jc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Xf(i,e){if(e.constructor===Float32Array)return i;let t=jc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var ih=class ih{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ih.prototype.isVector2=!0;var et=ih,zn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],m=n[s+3],f=r[a+0],h=r[a+1],d=r[a+2],_=r[a+3];if(m!==_||l!==f||c!==h||u!==d){let g=l*f+c*h+u*d+m*_;g<0&&(f=-f,h=-h,d=-d,_=-_,g=-g);let p=1-o;if(g<.9995){let v=Math.acos(g),R=Math.sin(v);p=Math.sin(p*v)/R,o=Math.sin(o*v)/R,l=l*p+f*o,c=c*p+h*o,u=u*p+d*o,m=m*p+_*o}else{l=l*p+f*o,c=c*p+h*o,u=u*p+d*o,m=m*p+_*o;let v=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=v,c*=v,u*=v,m*=v}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],m=r[a],f=r[a+1],h=r[a+2],d=r[a+3];return e[t]=o*d+u*m+l*h-c*f,e[t+1]=l*d+u*f+c*m-o*h,e[t+2]=c*d+u*h+o*f-l*m,e[t+3]=u*d-o*m-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),m=o(r/2),f=l(n/2),h=l(s/2),d=l(r/2);switch(a){case"XYZ":this._x=f*u*m+c*h*d,this._y=c*h*m-f*u*d,this._z=c*u*d+f*h*m,this._w=c*u*m-f*h*d;break;case"YXZ":this._x=f*u*m+c*h*d,this._y=c*h*m-f*u*d,this._z=c*u*d-f*h*m,this._w=c*u*m+f*h*d;break;case"ZXY":this._x=f*u*m-c*h*d,this._y=c*h*m+f*u*d,this._z=c*u*d+f*h*m,this._w=c*u*m-f*h*d;break;case"ZYX":this._x=f*u*m-c*h*d,this._y=c*h*m+f*u*d,this._z=c*u*d-f*h*m,this._w=c*u*m+f*h*d;break;case"YZX":this._x=f*u*m+c*h*d,this._y=c*h*m+f*u*d,this._z=c*u*d-f*h*m,this._w=c*u*m-f*h*d;break;case"XZY":this._x=f*u*m-c*h*d,this._y=c*h*m-f*u*d,this._z=c*u*d+f*h*m,this._w=c*u*m+f*h*d;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],m=t[10],f=n+o+m;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>m){let h=2*Math.sqrt(1+n-o-m);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>m){let h=2*Math.sqrt(1+o-n-m);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+m-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},sh=class sh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*u,this.y=n+l*u+o*c-r*m,this.z=s+l*m+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ql.copy(this).projectOnVector(e),this.sub(Ql)}reflect(e){return this.sub(Ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;var V=sh,Ql=new V,Wh=new zn,rh=class rh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],m=n[7],f=n[2],h=n[5],d=n[8],_=s[0],g=s[3],p=s[6],v=s[1],R=s[4],y=s[7],C=s[2],T=s[5],x=s[8];return r[0]=a*_+o*v+l*C,r[3]=a*g+o*R+l*T,r[6]=a*p+o*y+l*x,r[1]=c*_+u*v+m*C,r[4]=c*g+u*R+m*T,r[7]=c*p+u*y+m*x,r[2]=f*_+h*v+d*C,r[5]=f*g+h*R+d*T,r[8]=f*p+h*y+d*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=u*a-o*c,f=o*l-u*r,h=c*r-a*l,d=t*m+n*f+s*h;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/d;return e[0]=m*_,e[1]=(s*c-u*n)*_,e[2]=(o*n-s*a)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Nr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ec.makeScale(e,t)),this}rotate(e){return Nr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return Nr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};rh.prototype.isMatrix3=!0;var Ke=rh,ec=new Ke,Xh=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qh=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){let i={enabled:!0,workingColorSpace:Ur,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vi?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ur]:{primaries:e,whitePoint:n,transfer:Fr,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:Xh,fromXYZ:qh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),i}var at=qf();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zs,vo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zs===void 0&&(zs=Or("canvas")),zs.width=e.width,zs.height=e.height;let s=zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Or("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Yf=0,sr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=_a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tc(s[a].image)):r.push(tc(s[a]))}else r=tc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function tc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}var $f=0,nc=new V,Mn=class i extends fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=di,s=di,r=yn,a=zi,o=si,l=Cn,c=i.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=_a(),this.name="",this.source=new sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(nc).x}get height(){return this.source.getSize(nc).y}get depth(){return this.source.getSize(nc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mo:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mo:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mn.DEFAULT_IMAGE=null;Mn.DEFAULT_MAPPING=zc;Mn.DEFAULT_ANISOTROPY=1;var ah=class ah{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],m=l[8],f=l[1],h=l[5],d=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(m-_)<.01&&Math.abs(d-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(m+_)<.1&&Math.abs(d+g)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,y=(h+1)/2,C=(p+1)/2,T=(u+f)/4,x=(m+_)/4,b=(d+g)/4;return R>y&&R>C?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=x/n):y>C?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=b/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=x/r,s=b/r),this.set(n,s,r,t),this}let v=Math.sqrt((g-d)*(g-d)+(m-_)*(m-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(g-d)/v,this.y=(m-_)/v,this.z=(f-u)/v,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ah.prototype.isVector4=!0;var Ut=ah,yo=class extends fi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Mn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new sr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ln=class extends yo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Br=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Mo=class extends Mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Bo=class Bo{constructor(e,t,n,s,r,a,o,l,c,u,m,f,h,d,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,m,f,h,d,_,g)}set(e,t,n,s,r,a,o,l,c,u,m,f,h,d,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=m,p[14]=f,p[3]=h,p[7]=d,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Gs.setFromMatrixColumn(e,0).length(),r=1/Gs.setFromMatrixColumn(e,1).length(),a=1/Gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let f=a*u,h=a*m,d=o*u,_=o*m;t[0]=l*u,t[4]=-l*m,t[8]=c,t[1]=h+d*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=d+h*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,h=l*m,d=c*u,_=c*m;t[0]=f+_*o,t[4]=d*o-h,t[8]=a*c,t[1]=a*m,t[5]=a*u,t[9]=-o,t[2]=h*o-d,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,h=l*m,d=c*u,_=c*m;t[0]=f-_*o,t[4]=-a*m,t[8]=d+h*o,t[1]=h+d*o,t[5]=a*u,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,h=a*m,d=o*u,_=o*m;t[0]=l*u,t[4]=d*c-h,t[8]=f*c+_,t[1]=l*m,t[5]=_*c+f,t[9]=h*c-d,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,h=a*c,d=o*l,_=o*c;t[0]=l*u,t[4]=_-f*m,t[8]=d*m+h,t[1]=m,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*m+d,t[10]=f-_*m}else if(e.order==="XZY"){let f=a*l,h=a*c,d=o*l,_=o*c;t[0]=l*u,t[4]=-m,t[8]=c*u,t[1]=f*m+_,t[5]=a*u,t[9]=h*m-d,t[2]=d*m-h,t[6]=o*u,t[10]=_*m+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zf,e,Jf)}lookAt(e,t,n){let s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Ki.crossVectors(n,In),Ki.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ki.crossVectors(n,In)),Ki.normalize(),Fa.crossVectors(In,Ki),s[0]=Ki.x,s[4]=Fa.x,s[8]=In.x,s[1]=Ki.y,s[5]=Fa.y,s[9]=In.y,s[2]=Ki.z,s[6]=Fa.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],m=n[5],f=n[9],h=n[13],d=n[2],_=n[6],g=n[10],p=n[14],v=n[3],R=n[7],y=n[11],C=n[15],T=s[0],x=s[4],b=s[8],D=s[12],I=s[1],k=s[5],O=s[9],$=s[13],N=s[2],J=s[6],te=s[10],B=s[14],oe=s[3],G=s[7],j=s[11],le=s[15];return r[0]=a*T+o*I+l*N+c*oe,r[4]=a*x+o*k+l*J+c*G,r[8]=a*b+o*O+l*te+c*j,r[12]=a*D+o*$+l*B+c*le,r[1]=u*T+m*I+f*N+h*oe,r[5]=u*x+m*k+f*J+h*G,r[9]=u*b+m*O+f*te+h*j,r[13]=u*D+m*$+f*B+h*le,r[2]=d*T+_*I+g*N+p*oe,r[6]=d*x+_*k+g*J+p*G,r[10]=d*b+_*O+g*te+p*j,r[14]=d*D+_*$+g*B+p*le,r[3]=v*T+R*I+y*N+C*oe,r[7]=v*x+R*k+y*J+C*G,r[11]=v*b+R*O+y*te+C*j,r[15]=v*D+R*$+y*B+C*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],m=e[6],f=e[10],h=e[14],d=e[3],_=e[7],g=e[11],p=e[15],v=l*h-c*f,R=o*h-c*m,y=o*f-l*m,C=a*h-c*u,T=a*f-l*u,x=a*m-o*u;return t*(_*v-g*R+p*y)-n*(d*v-g*C+p*T)+s*(d*R-_*C+p*x)-r*(d*y-_*T+g*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],m=e[9],f=e[10],h=e[11],d=e[12],_=e[13],g=e[14],p=e[15],v=t*o-n*a,R=t*l-s*a,y=t*c-r*a,C=n*l-s*o,T=n*c-r*o,x=s*c-r*l,b=u*_-m*d,D=u*g-f*d,I=u*p-h*d,k=m*g-f*_,O=m*p-h*_,$=f*p-h*g,N=v*$-R*O+y*k+C*I-T*D+x*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/N;return e[0]=(o*$-l*O+c*k)*J,e[1]=(s*O-n*$-r*k)*J,e[2]=(_*x-g*T+p*C)*J,e[3]=(f*T-m*x-h*C)*J,e[4]=(l*I-a*$-c*D)*J,e[5]=(t*$-s*I+r*D)*J,e[6]=(g*y-d*x-p*R)*J,e[7]=(u*x-f*y+h*R)*J,e[8]=(a*O-o*I+c*b)*J,e[9]=(n*I-t*O-r*b)*J,e[10]=(d*T-_*y+p*v)*J,e[11]=(m*y-u*T-h*v)*J,e[12]=(o*D-a*k-l*b)*J,e[13]=(t*k-n*D+s*b)*J,e[14]=(_*R-d*C-g*v)*J,e[15]=(u*C-m*R+f*v)*J,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,m=o+o,f=r*c,h=r*u,d=r*m,_=a*u,g=a*m,p=o*m,v=l*c,R=l*u,y=l*m,C=n.x,T=n.y,x=n.z;return s[0]=(1-(_+p))*C,s[1]=(h+y)*C,s[2]=(d-R)*C,s[3]=0,s[4]=(h-y)*T,s[5]=(1-(f+p))*T,s[6]=(g+v)*T,s[7]=0,s[8]=(d+R)*x,s[9]=(g-v)*x,s[10]=(1-(f+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Gs.set(s[0],s[1],s[2]).length(),o=Gs.set(s[4],s[5],s[6]).length(),l=Gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Kn.copy(this);let c=1/a,u=1/o,m=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=m,Kn.elements[9]*=m,Kn.elements[10]*=m,t.setFromRotationMatrix(Kn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=kn,l=!1){let c=this.elements,u=2*r/(t-e),m=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s),d,_;if(l)d=r/(a-r),_=a*r/(a-r);else if(o===kn)d=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===nr)d=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=m,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=kn,l=!1){let c=this.elements,u=2/(t-e),m=2/(n-s),f=-(t+e)/(t-e),h=-(n+s)/(n-s),d,_;if(l)d=1/(a-r),_=a/(a-r);else if(o===kn)d=-2/(a-r),_=-(a+r)/(a-r);else if(o===nr)d=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=m,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Bo.prototype.isMatrix4=!0;var ht=Bo,Gs=new V,Kn=new ht,Zf=new V(0,0,0),Jf=new V(1,1,1),Ki=new V,Fa=new V,In=new V,Yh=new ht,$h=new zn,pi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],m=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $h.setFromEuler(this),this.setFromQuaternion($h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pi.DEFAULT_ORDER="XYZ";var kr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kf=0,Zh=new V,Vs=new zn,Ri=new ht,Oa=new V,Ar=new V,jf=new V,Qf=new zn,Jh=new V(1,0,0),Kh=new V(0,1,0),jh=new V(0,0,1),Qh={type:"added"},ep={type:"removed"},Hs={type:"childadded",child:null},ic={type:"childremoved",child:null},un=class i extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new V,t=new pi,n=new zn,s=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ke}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Jh,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(jh,e)}translateOnAxis(e,t){return Zh.copy(e).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jh,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(jh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oa.copy(e):Oa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ri.lookAt(Ar,Oa,this.up):Ri.lookAt(Oa,Ar,this.up),this.quaternion.setFromRotationMatrix(Ri),s&&(Ri.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(Ri),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qh),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ep),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qh),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,jf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Qf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),m=a(e.shapes),f=a(e.skeletons),h=a(e.animations),d=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),d.length>0&&(n.nodes=d)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};un.DEFAULT_UP=new V(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qt=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},tp={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],f=u.position.distanceTo(m.position),h=.02,d=.005;c.inputState.pinching&&f>h+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function sc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=at.workingColorSpace){if(e=Hf(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sc(a,r,e+1/3),this.g=sc(a,r,e),this.b=sc(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=gn){function n(r){r!==void 0&&parseFloat(r)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){let n=ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return at.workingToColorSpace(mn.copy(this),e),Math.round(ot(mn.r*255,0,255))*65536+Math.round(ot(mn.g*255,0,255))*256+Math.round(ot(mn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(mn.copy(this),t);let n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=u<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=gn){at.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,s=mn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+t,ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ji),e.getHSL(Ba);let n=jl(ji.h,Ba.h,t),s=jl(ji.s,Ba.s,t),r=jl(ji.l,Ba.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new ke;ke.NAMES=ed;var zr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ke(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gr=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},jn=new V,Ii=new V,rc=new V,Pi=new V,Ws=new V,Xs=new V,eu=new V,ac=new V,oc=new V,lc=new V,cc=new Ut,hc=new Ut,uc=new Ut,ns=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jn.subVectors(e,t),s.cross(jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jn.subVectors(s,t),Ii.subVectors(n,t),rc.subVectors(e,t);let a=jn.dot(jn),o=jn.dot(Ii),l=jn.dot(rc),c=Ii.dot(Ii),u=Ii.dot(rc),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let f=1/m,h=(c*l-o*u)*f,d=(a*u-o*l)*f;return r.set(1-h-d,d,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return cc.setScalar(0),hc.setScalar(0),uc.setScalar(0),cc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,n),uc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cc,r.x),a.addScaledVector(hc,r.y),a.addScaledVector(uc,r.z),a}static isFrontFacing(e,t,n,s){return jn.subVectors(n,t),Ii.subVectors(e,t),jn.cross(Ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),jn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ws.subVectors(s,n),Xs.subVectors(r,n),ac.subVectors(e,n);let l=Ws.dot(ac),c=Xs.dot(ac);if(l<=0&&c<=0)return t.copy(n);oc.subVectors(e,s);let u=Ws.dot(oc),m=Xs.dot(oc);if(u>=0&&m<=u)return t.copy(s);let f=l*m-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Ws,a);lc.subVectors(e,r);let h=Ws.dot(lc),d=Xs.dot(lc);if(d>=0&&h<=d)return t.copy(r);let _=h*c-l*d;if(_<=0&&c>=0&&d<=0)return o=c/(c-d),t.copy(n).addScaledVector(Xs,o);let g=u*d-h*m;if(g<=0&&m-u>=0&&h-d>=0)return eu.subVectors(r,s),o=(m-u)/(m-u+(h-d)),t.copy(s).addScaledVector(eu,o);let p=1/(g+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(Ws,a).addScaledVector(Xs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(r,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ka.copy(n.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),za.subVectors(this.max,Cr),qs.subVectors(e.a,Cr),Ys.subVectors(e.b,Cr),$s.subVectors(e.c,Cr),Qi.subVectors(Ys,qs),es.subVectors($s,Ys),vs.subVectors(qs,$s);let t=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-vs.z,vs.y,Qi.z,0,-Qi.x,es.z,0,-es.x,vs.z,0,-vs.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-vs.y,vs.x,0];return!dc(t,qs,Ys,$s,za)||(t=[1,0,0,0,1,0,0,0,1],!dc(t,qs,Ys,$s,za))?!1:(Ga.crossVectors(Qi,es),t=[Ga.x,Ga.y,Ga.z],dc(t,qs,Ys,$s,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Li=[new V,new V,new V,new V,new V,new V,new V,new V],Qn=new V,ka=new mi,qs=new V,Ys=new V,$s=new V,Qi=new V,es=new V,vs=new V,Cr=new V,za=new V,Ga=new V,ys=new V;function dc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ys.fromArray(i,r);let o=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),u=n.dot(ys);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Xt=new V,Va=new et,np=0,hn=class extends fi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:np++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=Vn,this.version=0,this._normalizationScale=e!==void 0?jc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Va.fromBufferAttribute(this,t),Va.applyMatrix3(e),this.setXY(t,Va.x,Va.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Wf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Xf(e,this.array)}};var Vr=class extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Hr=class extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}},ip=new mi,Rr=new V,fc=new V,Fi=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ip.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rr.subVectors(e,this.center);let t=Rr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Rr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rr.copy(e.center).add(fc)),this.expandByPoint(Rr.copy(e.center).sub(fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},sp=0,Bn=new ht,pc=new un,Zs=new V,Pn=new mi,Ir=new mi,rn=new V,$t=class i extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gf(e)?Hr:Vr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,n){return Bn.makeTranslation(e,t,n),this.applyMatrix4(Bn),this}scale(e,t,n){return Bn.makeScale(e,t,n),this.applyMatrix4(Bn),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ir.setFromBufferAttribute(o),this.morphTargetsRelative?(rn.addVectors(Pn.min,Ir.min),Pn.expandByPoint(rn),rn.addVectors(Pn.max,Ir.max),Pn.expandByPoint(rn)):(Pn.expandByPoint(Ir.min),Pn.expandByPoint(Ir.max))}Pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)rn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(rn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)rn.fromBufferAttribute(o,c),l&&(Zs.fromBufferAttribute(e,c),rn.add(Zs)),s=Math.max(s,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new V,l[D]=new V;let u=new V,m=new V,f=new V,h=new et,d=new et,_=new et,g=new V,p=new V;function v(D,I,k){c[D]=c[I]=c[k]=1,u.fromBufferAttribute(n,D),m.fromBufferAttribute(n,I),f.fromBufferAttribute(n,k),h.fromBufferAttribute(r,D),d.fromBufferAttribute(r,I),_.fromBufferAttribute(r,k),m.sub(u),f.sub(u),d.sub(h),_.sub(h);let O=1/(d.x*_.y-_.x*d.y);isFinite(O)&&(g.copy(m).multiplyScalar(_.y).addScaledVector(f,-d.y).multiplyScalar(O),p.copy(f).multiplyScalar(d.x).addScaledVector(m,-_.x).multiplyScalar(O),o[D].add(g),o[I].add(g),o[k].add(g),l[D].add(p),l[I].add(p),l[k].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,I=R.length;D<I;++D){let k=R[D],O=k.start,$=k.count;for(let N=O,J=O+$;N<J;N+=3)v(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let y=new V,C=new V,T=new V,x=new V;function b(D){T.fromBufferAttribute(s,D),x.copy(T);let I=o[D];y.copy(I),y.sub(T.multiplyScalar(T.dot(I))).normalize(),C.crossVectors(x,I);let O=C.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,O)}for(let D=0,I=n.count;D<I;++D)c[D]&&b(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let s=new V,r=new V,a=new V,o=new V,l=new V,c=new V,u=new V,m=new V;if(e)for(let f=0,h=e.count;f<h;f+=3){let d=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,d),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),o.fromBufferAttribute(n,d),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(d,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),m.subVectors(s,r),u.cross(m),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,m=o.normalized,f=new c.constructor(l.length*u),h=0,d=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let p=0;p<u;p++)f[d++]=c[h++]}return new hn(f,u,m)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,m=c.length;u<m;u++){let f=c[u],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let m=0,f=c.length;m<f;m++){let h=c[m];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],m=r[c];for(let f=0,h=m.length;f<h;f++)u.push(m[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var mc=new V,rp=new V,ap=new Ke,ei=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=mc.subVectors(n,t).cross(rp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(mc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ap.getNormalMatrix(e),s=this.coplanarPoint(mc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},op=0,Oi=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=ls,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Lc,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ao,this.stencilZFail=ao,this.stencilZPass=ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ei().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new et().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ni=new V,gc=new V,Ha=new V,Wa=new V,Wr=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gc.copy(e).add(t).multiplyScalar(.5),Ha.copy(t).sub(e).normalize(),Wa.copy(this.origin).sub(gc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ha),o=Wa.dot(this.direction),l=-Wa.dot(Ha),c=Wa.lengthSq(),u=Math.abs(1-a*a),m,f,h,d;if(u>0)if(m=a*l-o,f=a*o-l,d=r*u,m>=0)if(f>=-d)if(f<=d){let _=1/u;m*=_,f*=_,h=m*(m+a*f+2*o)+f*(a*m+f+2*l)+c}else f=r,m=Math.max(0,-(a*f+o)),h=-m*m+f*(f+2*l)+c;else f=-r,m=Math.max(0,-(a*f+o)),h=-m*m+f*(f+2*l)+c;else f<=-d?(m=Math.max(0,-(-a*r+o)),f=m>0?-r:Math.min(Math.max(-r,-l),r),h=-m*m+f*(f+2*l)+c):f<=d?(m=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(m=Math.max(0,-(a*r+o)),f=m>0?r:Math.min(Math.max(-r,-l),r),h=-m*m+f*(f+2*l)+c);else f=a>0?-r:r,m=Math.max(0,-(a*f+o)),h=-m*m+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(gc).addScaledVector(Ha,f),h}intersectSphere(e,t){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);let n=Ni.dot(this.direction),s=Ni.dot(Ni)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-f.z)*m,l=(e.max.z-f.z)*m):(o=(e.max.z-f.z)*m,l=(e.min.z-f.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,m=e.x-a.x,f=e.y-a.y,h=e.z-a.z,d=t.x-a.x,_=t.y-a.y,g=t.z-a.z,p=n.x-a.x,v=n.y-a.y,R=n.z-a.z,y=Math.abs(l),C=Math.abs(c),T=Math.abs(u),x,b,D,I,k,O,$,N,J,te,B,oe;if(y>=C&&y>=T?(D=l,O=m,J=d,oe=p,l>=0?(x=c,b=u,I=f,k=h,$=_,N=g,te=v,B=R):(x=u,b=c,I=h,k=f,$=g,N=_,te=R,B=v)):C>=T?(D=c,O=f,J=_,oe=v,c>=0?(x=u,b=l,I=h,k=m,$=g,N=d,te=R,B=p):(x=l,b=u,I=m,k=h,$=d,N=g,te=p,B=R)):(D=u,O=h,J=g,oe=R,u>=0?(x=l,b=c,I=m,k=f,$=d,N=_,te=p,B=v):(x=c,b=l,I=f,k=m,$=_,N=d,te=v,B=p)),D===0)return null;let G=x/D,j=b/D,le=1/D,Le=I-G*O,Xe=k-j*O,ie=$-G*J,we=N-j*J,De=te-G*oe,Be=B-j*oe,Ee=De*we-Be*ie,qe=Le*Be-Xe*De,Nt=ie*Xe-we*Le;if(s){if(Ee<0||qe<0||Nt<0)return null}else if((Ee<0||qe<0||Nt<0)&&(Ee>0||qe>0||Nt>0))return null;let ze=Ee+qe+Nt;if(ze===0)return null;let dt=le*(Ee*O+qe*J+Nt*oe);return(ze>0?dt<0:dt>0)?null:this.at(dt/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},gi=class extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},tu=new ht,Ms=new Wr,Xa=new Fi,nu=new V,qa=new V,Ya=new V,$a=new V,xc=new V,Za=new V,iu=new V,Ja=new V,lt=class extends un{constructor(e=new $t,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Za.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],m=r[l];u!==0&&(xc.fromBufferAttribute(m,e),a?Za.addScaledVector(xc,u):Za.addScaledVector(xc.sub(t),u))}t.add(Za)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!(Xa.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Xa,nu)===null||Ms.origin.distanceToSquared(nu)>(e.far-e.near)**2))&&(tu.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(tu),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,m=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let d=0,_=f.length;d<_;d++){let g=f[d],p=a[g.materialIndex],v=Math.max(g.start,h.start),R=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let y=v,C=R;y<C;y+=3){let T=o.getX(y),x=o.getX(y+1),b=o.getX(y+2);s=Ka(this,p,e,n,c,u,m,T,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let d=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=d,p=_;g<p;g+=3){let v=o.getX(g),R=o.getX(g+1),y=o.getX(g+2);s=Ka(this,a,e,n,c,u,m,v,R,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let d=0,_=f.length;d<_;d++){let g=f[d],p=a[g.materialIndex],v=Math.max(g.start,h.start),R=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let y=v,C=R;y<C;y+=3){let T=y,x=y+1,b=y+2;s=Ka(this,p,e,n,c,u,m,T,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let d=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let g=d,p=_;g<p;g+=3){let v=g,R=g+1,y=g+2;s=Ka(this,a,e,n,c,u,m,v,R,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function lp(i,e,t,n,s,r,a,o){let l;if(e.side===fn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===os,o),l===null)return null;Ja.copy(o),Ja.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ja);return c<t.near||c>t.far?null:{distance:c,point:Ja.clone(),object:i}}function Ka(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,qa),i.getVertexPosition(l,Ya),i.getVertexPosition(c,$a);let u=lp(i,e,t,n,qa,Ya,$a,iu);if(u){let m=new V;ns.getBarycoord(iu,qa,Ya,$a,m),s&&(u.uv=ns.getInterpolatedAttribute(s,o,l,c,m,new et)),r&&(u.uv1=ns.getInterpolatedAttribute(r,o,l,c,m,new et)),a&&(u.normal=ns.getInterpolatedAttribute(a,o,l,c,m,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new V,materialIndex:0};ns.getNormal(qa,Ya,$a,f.normal),u.face=f,u.barycoord=m}return u}var bs=class extends Mn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Yt,u=Yt,m,f){super(null,a,o,l,c,u,s,r,m,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Xr=class extends hn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Js=new ht,su=new ht,ja=[],ru=new mi,cp=new ht,Pr=new lt,Lr=new Fi,An=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),ru.copy(e.boundingBox).applyMatrix4(Js),this.boundingBox.union(ru)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Js),Lr.copy(e.boundingSphere).applyMatrix4(Js),this.boundingSphere.union(Lr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Pr.geometry=this.geometry,Pr.material=this.material,Pr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lr.copy(this.boundingSphere),Lr.applyMatrix4(n),e.ray.intersectsSphere(Lr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Js),su.multiplyMatrices(n,Js),Pr.matrixWorld=su,Pr.raycast(e,ja);for(let a=0,o=ja.length;a<o;a++){let l=ja[a];l.instanceId=r,l.object=this,t.push(l)}ja.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bs(new Float32Array(s*this.count),s,this.count,ur,Vn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ss=new Fi,hp=new et(.5,.5),Qa=new V,is=class{constructor(e=new ei,t=new ei,n=new ei,s=new ei,r=new ei,a=new ei){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],m=r[5],f=r[6],h=r[7],d=r[8],_=r[9],g=r[10],p=r[11],v=r[12],R=r[13],y=r[14],C=r[15];if(s[0].setComponents(c-a,h-u,p-d,C-v).normalize(),s[1].setComponents(c+a,h+u,p+d,C+v).normalize(),s[2].setComponents(c+o,h+m,p+_,C+R).normalize(),s[3].setComponents(c-o,h-m,p-_,C-R).normalize(),n)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(c-l,h-f,p-g,C-y).normalize();else if(s[4].setComponents(c-l,h-f,p-g,C-y).normalize(),t===kn)s[5].setComponents(c+l,h+f,p+g,C+y).normalize();else if(t===nr)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);let t=hp.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qa.x=s.normal.x>0?e.max.x:e.min.x,Qa.y=s.normal.y>0?e.max.y:e.min.y,Qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},au=new ht,So=class i{constructor(){this.coordinateSystem=kn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];au.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new is),n[s].setFromProjectionMatrix(au,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new is),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var bo=class extends Oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ou=new ht,bc=new Wr,eo=new Fi,to=new V,ws=class extends un{constructor(e=new $t,t=new bo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),eo.radius+=r,e.ray.intersectsSphere(eo)===!1)return;ou.copy(s).invert(),bc.copy(e.ray).applyMatrix4(ou);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,m=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let d=f,_=h;d<_;d++){let g=c.getX(d);to.fromBufferAttribute(m,g),lu(to,g,l,s,e,t,this)}}else{let f=Math.max(0,a.start),h=Math.min(m.count,a.start+a.count);for(let d=f,_=h;d<_;d++)to.fromBufferAttribute(m,d),lu(to,d,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lu(i,e,t,n,s,r,a){let o=bc.distanceSqToPoint(i);if(o<t){let l=new V;bc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var qr=class extends Mn{constructor(e=[],t=Rs,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yr=class extends Mn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bi=class extends Mn{constructor(e,t,n=ni,s,r,a,o=Yt,l=Yt,c,u=Ui,m=1){if(u!==Ui&&u!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:m};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},$r=class extends Bi{constructor(e,t=ni,n=Rs,s,r,a=Yt,o=Yt,l,c=Ui){let u={width:e,height:e,depth:1},m=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zr=class extends Mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ki=class i extends $t{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],m=[],f=0,h=0;d("z","y","x",-1,-1,n,t,e,a,r,0),d("z","y","x",1,-1,n,t,-e,a,r,1),d("x","z","y",1,1,e,n,t,s,a,2),d("x","z","y",1,-1,e,n,-t,s,a,3),d("x","y","z",1,-1,e,t,n,s,r,4),d("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(m,2));function d(_,g,p,v,R,y,C,T,x,b,D){let I=y/x,k=C/b,O=y/2,$=C/2,N=T/2,J=x+1,te=b+1,B=0,oe=0,G=new V;for(let j=0;j<te;j++){let le=j*k-$;for(let Le=0;Le<J;Le++){let Xe=Le*I-O;G[_]=Xe*v,G[g]=le*R,G[p]=N,c.push(G.x,G.y,G.z),G[_]=0,G[g]=0,G[p]=T>0?1:-1,u.push(G.x,G.y,G.z),m.push(Le/x),m.push(1-j/b),B+=1}}for(let j=0;j<b;j++)for(let le=0;le<x;le++){let Le=f+le+J*j,Xe=f+le+J*(j+1),ie=f+(le+1)+J*(j+1),we=f+(le+1)+J*j;l.push(Le,Xe,we),l.push(Xe,ie,we),oe+=6}o.addGroup(h,oe,D),h+=oe,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},xi=class i extends $t{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,m=Math.PI/2*e,f=t,h=2*m+f,d=n*2+r,_=s+1,g=new V,p=new V;for(let v=0;v<=d;v++){let R=0,y=0,C=0,T=0;if(v<=n){let D=v/n,I=D*Math.PI/2;y=-u-e*Math.cos(I),C=e*Math.sin(I),T=-e*Math.cos(I),R=D*m}else if(v<=n+r){let D=(v-n)/r;y=-u+D*t,C=e,T=0,R=m+D*f}else{let D=(v-n-r)/n,I=D*Math.PI/2;y=u+e*Math.sin(I),C=e*Math.cos(I),T=e*Math.sin(I),R=m+f+D*m}let x=Math.max(0,Math.min(1,R/h)),b=0;v===0?b=.5/s:v===d&&(b=-.5/s);for(let D=0;D<=s;D++){let I=D/s,k=I*Math.PI*2,O=Math.sin(k),$=Math.cos(k);p.x=-C*$,p.y=y,p.z=C*O,o.push(p.x,p.y,p.z),g.set(-C*$,T,C*O),g.normalize(),l.push(g.x,g.y,g.z),c.push(I+b,x)}if(v>0){let D=(v-1)*_;for(let I=0;I<s;I++){let k=D+I,O=D+I+1,$=v*_+I,N=v*_+I+1;a.push(k,O,$),a.push(O,N,$)}}}this.setIndex(a),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Jr=class i extends $t{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new V,u=new et;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let m=0,f=3;m<=t;m++,f+=3){let h=n+m/t*s;c.x=e*Math.cos(h),c.y=e*Math.sin(h),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let m=1;m<=t;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(o,3)),this.setAttribute("uv",new ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gn=class i extends $t{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],m=[],f=[],h=[],d=0,_=[],g=n/2,p=0;v(),a===!1&&(e>0&&R(!0),t>0&&R(!1)),this.setIndex(u),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(h,2));function v(){let y=new V,C=new V,T=0,x=(t-e)/n;for(let b=0;b<=r;b++){let D=[],I=b/r,k=I*(t-e)+e;for(let O=0;O<=s;O++){let $=O/s,N=$*l+o,J=Math.sin(N),te=Math.cos(N);C.x=k*J,C.y=-I*n+g,C.z=k*te,m.push(C.x,C.y,C.z),y.set(J,x,te).normalize(),f.push(y.x,y.y,y.z),h.push($,1-I),D.push(d++)}_.push(D)}for(let b=0;b<s;b++)for(let D=0;D<r;D++){let I=_[D][b],k=_[D+1][b],O=_[D+1][b+1],$=_[D][b+1];(e>0||D!==0)&&(u.push(I,k,$),T+=3),(t>0||D!==r-1)&&(u.push(k,O,$),T+=3)}c.addGroup(p,T,0),p+=T}function R(y){let C=d,T=new et,x=new V,b=0,D=y===!0?e:t,I=y===!0?1:-1;for(let O=1;O<=s;O++)m.push(0,g*I,0),f.push(0,I,0),h.push(.5,.5),d++;let k=d;for(let O=0;O<=s;O++){let N=O/s*l+o,J=Math.cos(N),te=Math.sin(N);x.x=D*te,x.y=g*I,x.z=D*J,m.push(x.x,x.y,x.z),f.push(0,I,0),T.x=J*.5+.5,T.y=te*.5*I+.5,h.push(T.x,T.y),d++}for(let O=0;O<s;O++){let $=C+O,N=k+O;y===!0?u.push(N,N+1,$):u.push(N+1,N,$),b+=3}c.addGroup(p,b,y===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ti=class i extends Gn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Kr=class i extends $t{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let R=new V,y=new V,C=new V;for(let T=0;T<t.length;T+=3)h(t[T+0],R),h(t[T+1],y),h(t[T+2],C),l(R,y,C,v)}function l(v,R,y,C){let T=C+1,x=[];for(let b=0;b<=T;b++){x[b]=[];let D=v.clone().lerp(y,b/T),I=R.clone().lerp(y,b/T),k=T-b;for(let O=0;O<=k;O++)O===0&&b===T?x[b][O]=D:x[b][O]=D.clone().lerp(I,O/k)}for(let b=0;b<T;b++)for(let D=0;D<2*(T-b)-1;D++){let I=Math.floor(D/2);D%2===0?(f(x[b][I+1]),f(x[b+1][I]),f(x[b][I])):(f(x[b][I+1]),f(x[b+1][I+1]),f(x[b+1][I]))}}function c(v){let R=new V;for(let y=0;y<r.length;y+=3)R.x=r[y+0],R.y=r[y+1],R.z=r[y+2],R.normalize().multiplyScalar(v),r[y+0]=R.x,r[y+1]=R.y,r[y+2]=R.z}function u(){let v=new V;for(let R=0;R<r.length;R+=3){v.x=r[R+0],v.y=r[R+1],v.z=r[R+2];let y=g(v)/2/Math.PI+.5,C=p(v)/Math.PI+.5;a.push(y,1-C)}d(),m()}function m(){for(let v=0;v<a.length;v+=6){let R=a[v+0],y=a[v+2],C=a[v+4],T=Math.max(R,y,C),x=Math.min(R,y,C);T>.9&&x<.1&&(R<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function h(v,R){let y=v*3;R.x=e[y+0],R.y=e[y+1],R.z=e[y+2]}function d(){let v=new V,R=new V,y=new V,C=new V,T=new et,x=new et,b=new et;for(let D=0,I=0;D<r.length;D+=9,I+=6){v.set(r[D+0],r[D+1],r[D+2]),R.set(r[D+3],r[D+4],r[D+5]),y.set(r[D+6],r[D+7],r[D+8]),T.set(a[I+0],a[I+1]),x.set(a[I+2],a[I+3]),b.set(a[I+4],a[I+5]),C.copy(v).add(R).add(y).divideScalar(3);let k=g(C);_(T,I+0,v,k),_(x,I+2,R,k),_(b,I+4,y,k)}}function _(v,R,y,C){C<0&&v.x===1&&(a[R]=v.x-1),y.x===0&&y.z===0&&(a[R]=C/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var jr=class i extends Kr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Qr=class i extends Kr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Nn=class i extends $t{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,m=e/o,f=t/l,h=[],d=[],_=[],g=[];for(let p=0;p<u;p++){let v=p*f-a;for(let R=0;R<c;R++){let y=R*m-r;d.push(y,-v,0),_.push(0,0,1),g.push(R/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){let R=v+c*p,y=v+c*(p+1),C=v+1+c*(p+1),T=v+1+c*p;h.push(R,y,T),h.push(y,C,T)}this.setIndex(h),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ea=class i extends $t{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],m=e,f=(t-e)/s,h=new V,d=new et;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){let p=r+g/n*a;h.x=m*Math.cos(p),h.y=m*Math.sin(p),l.push(h.x,h.y,h.z),c.push(0,0,1),d.x=(h.x/t+1)/2,d.y=(h.y/t+1)/2,u.push(d.x,d.y)}m+=f}for(let _=0;_<s;_++){let g=_*(n+1);for(let p=0;p<n;p++){let v=p+g,R=v,y=v+n+1,C=v+n+2,T=v+1;o.push(R,y,T),o.push(y,C,T)}}this.setIndex(o),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Dn=class i extends $t{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],m=new V,f=new V,h=[],d=[],_=[],g=[];for(let p=0;p<=n;p++){let v=[],R=p/n,y=a+R*o,C=e*Math.cos(y),T=Math.sqrt(e*e-C*C),x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let D=b/t,I=s+D*r;m.x=-T*Math.cos(I),m.y=C,m.z=T*Math.sin(I),d.push(m.x,m.y,m.z),f.copy(m).normalize(),_.push(f.x,f.y,f.z),g.push(D+x,1-R),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let R=u[p][v+1],y=u[p][v],C=u[p+1][v],T=u[p+1][v+1];(p!==0||a>0)&&h.push(R,y,T),(p!==n-1||l<Math.PI)&&h.push(y,C,T)}this.setIndex(h),this.setAttribute("position",new ut(d,3)),this.setAttribute("normal",new ut(_,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ts=class i extends $t{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],m=[],f=new V,h=new V,d=new V;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let p=0;p<=s;p++){let v=p/s*r;h.x=(e+t*Math.cos(g))*Math.cos(v),h.y=(e+t*Math.cos(g))*Math.sin(v),h.z=t*Math.sin(g),c.push(h.x,h.y,h.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),d.subVectors(h,f).normalize(),u.push(d.x,d.y,d.z),m.push(p/s),m.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let p=(s+1)*_+g-1,v=(s+1)*(_-1)+g-1,R=(s+1)*(_-1)+g,y=(s+1)*_+g;l.push(p,v,y),l.push(v,R,y)}this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Ps(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(cu(s))s.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(cu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=Ps(i[t]);for(let s in n)e[s]=n[s]}return e}function cu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function up(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Qc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var td={clone:Ps,merge:_n},dp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dp,this.fragmentShader=fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=up(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ke().setHex(s.value);break;case"v2":this.uniforms[n].value=new et().fromArray(s.value);break;case"v3":this.uniforms[n].value=new V().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},wo=class extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ta=class extends Oi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ke(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wl,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var To=class extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Eo=class extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ks(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function no(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ss=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ao=class extends ss{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mc:r=e,o=2*t-n;break;case Sc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mc:a=e,l=2*n-t;break;case Sc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,m=this._offsetNext,f=this._weightPrev,h=this._weightNext,d=(n-t)/(s-t),_=d*d,g=_*d,p=-f*g+2*f*_-f*d,v=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*d+1,R=(-1-h)*g+(1.5+h)*_+.5*d,y=h*g-h*_;for(let C=0;C!==o;++C)r[C]=p*a[u+C]+v*a[c+C]+R*a[l+C]+y*a[m+C];return r}},Co=class extends ss{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),m=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*m+a[l+f]*u;return r}},Ro=class extends ss{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Io=class extends ss{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,m=this.outTangents;if(!u||!m){let d=(n-t)/(s-t),_=1-d;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*d;return r}let f=o*2,h=e-1;for(let d=0;d!==o;++d){let _=a[c+d],g=a[l+d],p=h*f+d*2,v=m[p],R=m[p+1],y=e*f+d*2,C=u[y],T=u[y+1],x=mp(n,t,v,C,s);r[d]=nd(x,_,R,T,g)}return r}};function nd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function pp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function mp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=nd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=pp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Un=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ks(t,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ks(e.times,Array),values:Ks(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),no(e.settings)&&(n.settings={inTangents:Ks(e.settings.inTangents,Array),outTangents:Ks(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Io(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Dr:t=this.InterpolantFactoryMethodDiscrete;break;case xo:t=this.InterpolantFactoryMethodLinear;break;case ro:t=this.InterpolantFactoryMethodSmooth;break;case vc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return We("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return ro;case this.InterpolantFactoryMethodBezier:return vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;no(this.settings)&&(hu(this.settings.inTangents,e),hu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;no(this.settings)&&(uu(this.settings.inTangents,e),uu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Vf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ro,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let m=o*n,f=m-n,h=m+n;for(let d=0;d!==n;++d){let _=t[m+d];if(_!==t[f+d]||_!==t[h+d]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,f=a*n;for(let h=0;h!==n;++h)t[f+h]=t[m+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,no(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function uu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=xo;var rs=class extends Un{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Dr;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};Po.prototype.ValueTypeName="color";var Lo=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};Lo.prototype.ValueTypeName="number";var No=class extends ss{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},na=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new No(this.times,this.values,this.getValueSize(),e)}};na.prototype.ValueTypeName="quaternion";na.prototype.InterpolantFactoryMethodSmooth=void 0;var as=class extends Un{constructor(e,t,n){super(e,t,n)}};as.prototype.ValueTypeName="string";as.prototype.ValueBufferType=Array;as.prototype.DefaultInterpolation=Dr;as.prototype.InterpolantFactoryMethodLinear=void 0;as.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}};Do.prototype.ValueTypeName="vector";var Uo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,m){return c.push(u,m),this},this.removeHandler=function(u){let m=c.indexOf(u);return m!==-1&&c.splice(m,2),this},this.getHandler=function(u){for(let m=0,f=c.length;m<f;m+=2){let h=c[m],d=c[m+1];if(h.global&&(h.lastIndex=0),h.test(u))return d}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},id=new Uo,Fo=class{constructor(e){this.manager=e!==void 0?e:id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Fo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es=class extends un{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ia=class extends Es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ke(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},_c=new ht,du=new V,fu=new V,sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new is,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;du.setFromMatrixPosition(e.matrixWorld),t.position.copy(du),fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){_c.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(_c,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===nr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},io=new V,so=new zn,ui=new V,ra=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(io,so,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,so,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(io,so,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(io,so,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ts=new V,pu=new et,mu=new et,xn=class extends ra{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(Kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ts.x,ts.y).multiplyScalar(-e/ts.z),ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ts.x,ts.y).multiplyScalar(-e/ts.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Kl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var wc=class extends sa{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}},ar=class extends Es{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},aa=class extends ra{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tc=class extends sa{constructor(){super(new aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},oa=class extends Es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Tc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},la=class extends Es{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var js=-90,Qs=1,or=class extends un{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(js,Qs,e,t);s.layers=this.layers,this.add(s);let r=new xn(js,Qs,e,t);r.layers=this.layers,this.add(r);let a=new xn(js,Qs,e,t);a.layers=this.layers,this.add(a);let o=new xn(js,Qs,e,t);o.layers=this.layers,this.add(o);let l=new xn(js,Qs,e,t);l.layers=this.layers,this.add(l);let c=new xn(js,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,m=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),d=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(m,f,h),e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}},Oo=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var eh="\\[\\]\\.:\\/",gp=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",xp="[^"+eh.replace("\\.","")+"]",_p=/((?:WC+[\/:])*)/.source.replace("WC",th),vp=/(WCOD+)?/.source.replace("WCOD",xp),yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),Mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),Sp=new RegExp("^"+_p+vp+yp+Mp+"$"),bp=["material","materials","bones","map"],Ec=class{constructor(e,t,n){let s=n||Pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gp,"")}static parseTrackName(e){let t=Sp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){We("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pt.Composite=Ec;Pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pt.prototype.GetterByBindingType=[Pt.prototype._getValue_direct,Pt.prototype._getValue_array,Pt.prototype._getValue_arrayElement,Pt.prototype._getValue_toArray];Pt.prototype.SetterByBindingTypeAndVersioning=[[Pt.prototype._setValue_direct,Pt.prototype._setValue_direct_setNeedsUpdate,Pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_array,Pt.prototype._setValue_array_setNeedsUpdate,Pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_arrayElement,Pt.prototype._setValue_arrayElement_setNeedsUpdate,Pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pt.prototype._setValue_fromArray,Pt.prototype._setValue_fromArray_setNeedsUpdate,Pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var W_=new Float32Array(1);var oh=class oh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};oh.prototype.isMatrix2=!0;var Ac=oh;function nh(i,e,t,n){let s=wp(n);switch(t){case Xc:return i*e;case ur:return i*e/s.components*s.byteLength;case Xo:return i*e/s.components*s.byteLength;case cs:return i*e*2/s.components*s.byteLength;case qo:return i*e*2/s.components*s.byteLength;case qc:return i*e*3/s.components*s.byteLength;case si:return i*e*4/s.components*s.byteLength;case Yo:return i*e*4/s.components*s.byteLength;case da:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pa:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:case Ko:return Math.max(i,16)*Math.max(e,8)/4;case $o:case Jo:return Math.max(i,8)*Math.max(e,8)/2;case jo:case Qo:case tl:case nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case el:case ga:case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _l:case vl:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ml:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xa:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wp(i){switch(i){case Cn:case Gc:return{byteLength:1,components:1};case hr:case Vc:case ii:return{byteLength:2,components:1};case Ho:case Wo:return{byteLength:2,components:4};case ni:case Vo:case Vn:return{byteLength:4,components:1};case Hc:case Wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Td(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ep(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,m=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let u=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,u);else{m.sort((h,d)=>h.start-d.start);let f=0;for(let h=1;h<m.length;h++){let d=m[f],_=m[h];_.start<=d.start+d.count+1?d.count=Math.max(d.count,_.start+_.count-d.start):(++f,m[f]=_)}m.length=f+1;for(let h=0,d=m.length;h<d;h++){let _=m[h];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Np=`#ifdef USE_AOMAP
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
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,_m=`#ifdef USE_ENVMAP
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
#endif`,vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,wm=`uniform sampler2D dfgLUT;
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
}`,Tm=`
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
#endif`,Em=`#if defined( RE_IndirectDiffuse )
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Rm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Um=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zm=`#if defined( USE_MORPHCOLORS )
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
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u0=`float getShadowMask() {
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,x0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,E0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A0=`uniform sampler2D t2D;
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform float backgroundBlurriness;
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
}`,I0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
}`,D0=`#define DISTANCE
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
}`,U0=`#define DISTANCE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,z0=`#include <common>
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
}`,G0=`uniform vec3 diffuse;
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
}`,V0=`#define LAMBERT
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
}`,H0=`#define LAMBERT
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
}`,W0=`#define MATCAP
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
}`,X0=`#define MATCAP
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
}`,q0=`#define NORMAL
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
}`,Y0=`#define NORMAL
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
}`,$0=`#define PHONG
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
}`,Z0=`#define PHONG
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
}`,J0=`#define STANDARD
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
}`,K0=`#define STANDARD
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
}`,j0=`#define TOON
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
}`,Q0=`#define TOON
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
}`,eg=`uniform float size;
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
}`,tg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 color;
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
}`,sg=`uniform float rotation;
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
}`,rg=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Ap,alphahash_pars_fragment:Cp,alphamap_fragment:Rp,alphamap_pars_fragment:Ip,alphatest_fragment:Pp,alphatest_pars_fragment:Lp,aomap_fragment:Np,aomap_pars_fragment:Dp,batching_pars_vertex:Up,batching_vertex:Fp,begin_vertex:Op,beginnormal_vertex:Bp,bsdfs:kp,iridescence_fragment:zp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:$p,color_vertex:Zp,common:Jp,defaultnormal_vertex:Kp,displacementmap_pars_vertex:jp,displacementmap_vertex:Qp,emissivemap_fragment:em,emissivemap_pars_fragment:tm,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:am,envmap_pars_vertex:om,envmap_physical_pars_fragment:_m,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:xm,lights_toon_fragment:vm,lights_toon_pars_fragment:ym,lights_phong_fragment:Mm,lights_phong_pars_fragment:Sm,lights_physical_fragment:bm,lights_physical_pars_fragment:wm,lights_fragment_begin:Tm,lights_fragment_maps:Em,lights_fragment_end:Am,lightprobes_pars_fragment:Cm,logdepthbuf_fragment:Rm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Pm,logdepthbuf_vertex:Lm,map_fragment:Nm,map_pars_fragment:Dm,map_particle_fragment:Um,map_particle_pars_fragment:Fm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Bm,morphinstance_vertex:km,morphcolor_vertex:zm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Hm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:$m,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Qm,opaque_fragment:e0,packing:t0,premultiplied_alpha_fragment:n0,project_vertex:i0,dithering_fragment:s0,dithering_pars_fragment:r0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:c0,shadowmap_vertex:h0,shadowmask_pars_fragment:u0,skinbase_vertex:d0,skinning_pars_vertex:f0,skinning_vertex:p0,skinnormal_vertex:m0,specularmap_fragment:g0,specularmap_pars_fragment:x0,tonemapping_fragment:_0,tonemapping_pars_fragment:v0,transmission_fragment:y0,transmission_pars_fragment:M0,uv_pars_fragment:S0,uv_pars_vertex:b0,uv_vertex:w0,worldpos_vertex:T0,background_vert:E0,background_frag:A0,backgroundCube_vert:C0,backgroundCube_frag:R0,cube_vert:I0,cube_frag:P0,depth_vert:L0,depth_frag:N0,distance_vert:D0,distance_frag:U0,equirect_vert:F0,equirect_frag:O0,linedashed_vert:B0,linedashed_frag:k0,meshbasic_vert:z0,meshbasic_frag:G0,meshlambert_vert:V0,meshlambert_frag:H0,meshmatcap_vert:W0,meshmatcap_frag:X0,meshnormal_vert:q0,meshnormal_frag:Y0,meshphong_vert:$0,meshphong_frag:Z0,meshphysical_vert:J0,meshphysical_frag:K0,meshtoon_vert:j0,meshtoon_frag:Q0,points_vert:eg,points_frag:tg,shadow_vert:ng,shadow_frag:ig,sprite_vert:sg,sprite_frag:rg},Ie={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},yi={basic:{uniforms:_n([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:_n([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ke(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:_n([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:_n([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:_n([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ke(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:_n([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:_n([Ie.points,Ie.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:_n([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:_n([Ie.common,Ie.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:_n([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:_n([Ie.sprite,Ie.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:_n([Ie.common,Ie.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:_n([Ie.lights,Ie.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};yi.physical={uniforms:_n([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Tl={r:0,b:0,g:0},ag=new ht,Ed=new Ke;Ed.set(-1,0,0,0,1,0,0,0,1);function og(i,e,t,n,s,r){let a=new ke(0),o=s===!0?0:1,l,c,u=null,m=0,f=null;function h(v){let R=v.isScene===!0?v.background:null;if(R&&R.isTexture){let y=v.backgroundBlurriness>0;R=e.get(R,y)}return R}function d(v){let R=!1,y=h(v);y===null?g(a,o):y&&y.isColor&&(g(y,1),R=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,R){let y=h(R);y&&y.isCubeTexture?(c===void 0&&(c=new lt(new ki(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Ps(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ed),c.material.toneMapped=at.getTransfer(y.colorSpace)!==xt,(u!==y||m!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,m=y.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new lt(new Nn(2,2),new dn({name:"BackgroundMaterial",uniforms:Ps(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=at.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||m!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,m=y.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,R){v.getRGB(Tl,Qc(i)),t.buffers.color.setClear(Tl.r,Tl.g,Tl.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,R=1){a.set(v),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:d,addToRenderList:_,dispose:p}}function lg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(k,O,$,N,J){let te=!1,B=m(k,N,$,O);r!==B&&(r=B,c(r.object)),te=h(k,N,$,J),te&&d(k,N,$,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,y(k,O,$,N),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return i.createVertexArray()}function c(k){return i.bindVertexArray(k)}function u(k){return i.deleteVertexArray(k)}function m(k,O,$,N){let J=N.wireframe===!0,te=n[O.id];te===void 0&&(te={},n[O.id]=te);let B=k.isInstancedMesh===!0?k.id:0,oe=te[B];oe===void 0&&(oe={},te[B]=oe);let G=oe[$.id];G===void 0&&(G={},oe[$.id]=G);let j=G[J];return j===void 0&&(j=f(l()),G[J]=j),j}function f(k){let O=[],$=[],N=[];for(let J=0;J<t;J++)O[J]=0,$[J]=0,N[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:N,object:k,attributes:{},index:null}}function h(k,O,$,N){let J=r.attributes,te=O.attributes,B=0,oe=$.getAttributes();for(let G in oe)if(oe[G].location>=0){let le=J[G],Le=te[G];if(Le===void 0&&(G==="instanceMatrix"&&k.instanceMatrix&&(Le=k.instanceMatrix),G==="instanceColor"&&k.instanceColor&&(Le=k.instanceColor)),le===void 0||le.attribute!==Le||Le&&le.data!==Le.data)return!0;B++}return r.attributesNum!==B||r.index!==N}function d(k,O,$,N){let J={},te=O.attributes,B=0,oe=$.getAttributes();for(let G in oe)if(oe[G].location>=0){let le=te[G];le===void 0&&(G==="instanceMatrix"&&k.instanceMatrix&&(le=k.instanceMatrix),G==="instanceColor"&&k.instanceColor&&(le=k.instanceColor));let Le={};Le.attribute=le,le&&le.data&&(Le.data=le.data),J[G]=Le,B++}r.attributes=J,r.attributesNum=B,r.index=N}function _(){let k=r.newAttributes;for(let O=0,$=k.length;O<$;O++)k[O]=0}function g(k){p(k,0)}function p(k,O){let $=r.newAttributes,N=r.enabledAttributes,J=r.attributeDivisors;$[k]=1,N[k]===0&&(i.enableVertexAttribArray(k),N[k]=1),J[k]!==O&&(i.vertexAttribDivisor(k,O),J[k]=O)}function v(){let k=r.newAttributes,O=r.enabledAttributes;for(let $=0,N=O.length;$<N;$++)O[$]!==k[$]&&(i.disableVertexAttribArray($),O[$]=0)}function R(k,O,$,N,J,te,B){B===!0?i.vertexAttribIPointer(k,O,$,J,te):i.vertexAttribPointer(k,O,$,N,J,te)}function y(k,O,$,N){_();let J=N.attributes,te=$.getAttributes(),B=O.defaultAttributeValues;for(let oe in te){let G=te[oe];if(G.location>=0){let j=J[oe];if(j===void 0&&(oe==="instanceMatrix"&&k.instanceMatrix&&(j=k.instanceMatrix),oe==="instanceColor"&&k.instanceColor&&(j=k.instanceColor)),j!==void 0){let le=j.normalized,Le=j.itemSize,Xe=e.get(j);if(Xe===void 0)continue;let ie=Xe.buffer,we=Xe.type,De=Xe.bytesPerElement,Be=we===i.INT||we===i.UNSIGNED_INT||j.gpuType===Vo;if(j.isInterleavedBufferAttribute){let Ee=j.data,qe=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,Nt=j.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let ze=0;ze<G.locationSize;ze++)p(G.location+ze,Ee.meshPerAttribute);k.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ze=0;ze<G.locationSize;ze++)g(G.location+ze);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let ze=0;ze<G.locationSize;ze++)R(G.location+ze,Le/G.locationSize,we,le,qe*De,(Nt+Le/G.locationSize*ze)*De,Be)}else{if(j.isInstancedBufferAttribute){for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee,j.meshPerAttribute);k.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)g(G.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let Ee=0;Ee<G.locationSize;Ee++)R(G.location+Ee,Le/G.locationSize,we,le,Le*De,Le/G.locationSize*Ee*De,Be)}}else if(B!==void 0){let le=B[oe];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(G.location,le);break;case 3:i.vertexAttrib3fv(G.location,le);break;case 4:i.vertexAttrib4fv(G.location,le);break;default:i.vertexAttrib1fv(G.location,le)}}}}v()}function C(){D();for(let k in n){let O=n[k];for(let $ in O){let N=O[$];for(let J in N){let te=N[J];for(let B in te)u(te[B].object),delete te[B];delete N[J]}}delete n[k]}}function T(k){if(n[k.id]===void 0)return;let O=n[k.id];for(let $ in O){let N=O[$];for(let J in N){let te=N[J];for(let B in te)u(te[B].object),delete te[B];delete N[J]}}delete n[k.id]}function x(k){for(let O in n){let $=n[O];for(let N in $){let J=$[N];if(J[k.id]===void 0)continue;let te=J[k.id];for(let B in te)u(te[B].object),delete te[B];delete J[k.id]}}}function b(k){for(let O in n){let $=n[O],N=k.isInstancedMesh===!0?k.id:0,J=$[N];if(J!==void 0){for(let te in J){let B=J[te];for(let oe in B)u(B[oe].object),delete B[oe];delete J[te]}delete $[N],Object.keys($).length===0&&delete n[O]}}}function D(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:I,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function cg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function hg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==si&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Cn&&x!==Vn&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(We("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&m===!1;t.reversedDepthBuffer===!0&&m===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&m===!0&&We("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:m,maxTextures:h,maxVertexTextures:d,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:R,maxFragmentUniforms:y,maxSamples:C,samples:T}}function ug(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ei,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){let h=m.length!==0||f||n!==0||s;return s=f,n=m.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,f){t=u(m,f,0)},this.setState=function(m,f,h){let d=m.clippingPlanes,_=m.clipIntersection,g=m.clipShadows,p=i.get(m);if(!s||d===null||d.length===0||r&&!g)r?u(null):c();else{let v=r?0:n,R=v*4,y=p.clippingState||null;l.value=y,y=u(d,f,R,h);for(let C=0;C!==R;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(m,f,h,d){let _=m!==null?m.length:0,g=null;if(_!==0){if(g=l.value,d!==!0||g===null){let p=h+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let R=0,y=h;R!==_;++R,y+=4)a.copy(m[R]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var Ma=class extends Ln{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new qr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ki(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:As});r.uniforms.tEquirect.value=t;let a=new lt(s,r),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=yn),new or(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},sd=256,dg=3,fg=20,Ad=256,Cd=16,pg=3,mg=new V,gg=new ke,Al=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new or(1,10,null),this._boxMesh=new lt(new ki(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=mg}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let m=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,d=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(gg));let g=new or(n,s,u);return g.position.copy(o),g.update(l,e),l.autoClear=m,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=d,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(sd,Qu(e))}_fromTexture(e,t){e.mapping===Rs||e.mapping===cr?this._setSize(e.image.length===0?sd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=rd(e,!1,!1),n=Math.log2(e)-dg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=rd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Rs||e.mapping===cr?(this._cubemapMaterial===null&&(this._cubemapMaterial=od()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ad()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=xg(),this._integrationMaterial=_g());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Cd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-pg)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Ad*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=vg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function rd(i,e,t){return new Ma(i,{minFilter:zi,generateMipmaps:e,type:ii,colorSpace:Ur,depthBuffer:t})}function Sa(i,e,t){return new dn({name:i,uniforms:e,vertexShader:nt.cube_vert,fragmentShader:t,side:fn,blending:As,depthTest:!1,depthWrite:!1})}function xg(){return Sa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ad}u

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
	`)}function _g(){return Sa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Cd}},`

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
	`)}function vg(){return Sa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fg}
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
	`)}function ad(){return Sa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function od(){return Sa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function yg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,h=!1){return f==null?null:h?a(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===ko||h===zo)if(e.has(f)){let d=e.get(f).texture;return o(d,f.mapping)}else{let d=f.image;if(d&&d.height>0){let _=new Ma(d.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let h=f.mapping,d=h===ko||h===zo,_=h===Rs||h===cr;if(d||_){let g=t.get(f),p=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Al(i)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{let v=f.image;return d&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Al(i)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f,h){return h===ko?f.mapping=Rs:h===zo&&(f.mapping=cr),f}function l(f){let h=0,d=6;for(let _=0;_<d;_++)f[_]!==void 0&&h++;return h===d}function c(f){let h=f.target;h.removeEventListener("dispose",c);let d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function Mg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Nr("WebGLRenderer: "+n+" extension not supported."),s}}}function Sg(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(d=>delete s[d]);function o(d){l(d.target)}function l(d){d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id],a.unregister(d);let _=r.get(d);_&&(e.remove(_),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function c(d,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function u(d){let _=d.attributes;for(let g in _)e.update(_[g],i.ARRAY_BUFFER)}function m(d){let _=d.index,g=d.attributes.position,p=0;if(g===void 0)return;let v=_!==null?_.array.length:g.array.length/3-1,R=g.count>=65535?Hr:Vr,y=new R(Math.ceil(v/3)*6,1),C=y.array;if(_!==null){let x=_.array;p=_.version;for(let b=0,D=0;b<v;b+=3){let I=x[b+0],k=x[b+1],O=x[b+2];C[D++]=I,C[D++]=k,C[D++]=k,C[D++]=O,C[D++]=O,C[D++]=I}}else{p=g.version;for(let x=0,b=0;x<v;x+=3){let D=x+0,I=x+1,k=x+2;C[b++]=D,C[b++]=I,C[b++]=I,C[b++]=k,C[b++]=k,C[b++]=D}}y.version=p;let T=r.get(d);T&&e.remove(T),r.set(d,y)}function f(d){let _=r.get(d);if(_){let g=d.index;g!==null&&_.version<g.version&&m(d)}else m(d);return r.get(d)}function h(){for(let d in s){let _=s[d].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function bg(i,e,t){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,f){i.drawElements(n,f,r,m*a),t.update(f,n,1)}function c(m,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,m*a,h),t.update(f,n,h))}function u(m,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,m,0,h);let _=0;for(let g=0;g<h;g++)_+=f[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function wg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Tg(i,e,t){let n=new WeakMap,s=new Ut;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==m){let D=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,d=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],R=0;h===!0&&(R=1),d===!0&&(R=2),_===!0&&(R=3);let y=o.attributes.position.count*R,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*C*4*m),x=new Br(T,y,C,m);x.type=Vn,x.needsUpdate=!0;let b=R*4;for(let I=0;I<m;I++){let k=g[I],O=p[I],$=v[I],N=y*C*4*I;for(let J=0;J<k.count;J++){let te=J*b;h===!0&&(s.fromBufferAttribute(k,J),T[N+te+0]=s.x,T[N+te+1]=s.y,T[N+te+2]=s.z,T[N+te+3]=0),d===!0&&(s.fromBufferAttribute(O,J),T[N+te+4]=s.x,T[N+te+5]=s.y,T[N+te+6]=s.z,T[N+te+7]=0),_===!0&&(s.fromBufferAttribute($,J),T[N+te+8]=s.x,T[N+te+9]=s.y,T[N+te+10]=s.z,T[N+te+11]=$.itemSize===4?s.w:1)}}f={count:m,texture:x,size:new et(y,C)},n.set(o,f),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];let d=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",d),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Eg(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,m=c.geometry,f=e.get(c,m);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Ag={[Dc]:"LINEAR_TONE_MAPPING",[Uc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[ha]:"ACES_FILMIC_TONE_MAPPING",[Bc]:"AGX_TONE_MAPPING",[kc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function Cg(i,e,t,n,s,r){let a=new Ln(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new $t;u.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ut([0,2,0,0,2,0],2));let m=new wo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new lt(u,m),h=new aa(-1,1,1,-1,0,1),d=null,_=null,g=!1,p,v=null,R=[],y=!1;this.setSize=function(C,T){a.setSize(C,T),o!==null&&o.setSize(C,T),l!==null&&l.setSize(C,T);for(let x=0;x<R.length;x++){let b=R[x];b.setSize&&b.setSize(C,T)}},this.setEffects=function(C){R=C,y=R.length>0&&R[0].isRenderPass===!0;let T=a.width,x=a.height;R.length>0&&o===null&&(o=new Ln(T,x,{type:ii,depthBuffer:!1,stencilBuffer:!1}),l=new Ln(T,x,{type:ii,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&R.some(D=>D.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Bi(T,x),r===!0&&(c.format=Gi,c.type=Is)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let D=0;D<R.length;D++){let I=R[D];I.setSize&&I.setSize(T,x),b&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(C,T){if(g||C.toneMapping===_i&&R.length===0)return!1;if(v=T,T!==null){let x=T.width,b=T.height;(a.width!==x||a.height!==b)&&this.setSize(x,b)}return y===!1&&C.setRenderTarget(a),p=C.toneMapping,C.toneMapping=_i,!0},this.hasRenderPass=function(){return y},this.end=function(C,T){C.toneMapping=p,g=!0;let x=a,b=o;for(let D=0;D<R.length;D++){let I=R[D];I.enabled!==!1&&(I.render(C,b,x,T),I.needsSwap!==!1&&(x=b,b=b===o?l:o))}if(d!==C.outputColorSpace||_!==C.toneMapping){d=C.outputColorSpace,_=C.toneMapping,m.defines={},at.getTransfer(d)===xt&&(m.defines.SRGB_TRANSFER="");let D=Ag[_];D&&(m.defines[D]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=x.texture,C.setRenderTarget(v),C.render(f,h),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),m.dispose()}}var Rd=new Mn,Id=new Bi(1,1),Pd=new $r(1),Ld=new Br,Nd=new Mo,Dd=new qr,ld=[],cd=[],hd=new Float32Array(16),ud=new Float32Array(9),dd=new Float32Array(4);function fr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ld[s];if(r===void 0&&(r=new Float32Array(s),ld[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rl(i,e){let t=cd[e];t===void 0&&(t=new Int32Array(e),cd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Rg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function Ng(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;dd.set(n),i.uniformMatrix2fv(this.addr,!1,dd),jt(t,n)}}function Dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;ud.set(n),i.uniformMatrix3fv(this.addr,!1,ud),jt(t,n)}}function Ug(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Kt(t,n))return;hd.set(n),i.uniformMatrix4fv(this.addr,!1,hd),jt(t,n)}}function Fg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function Hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function Il(i){return i.version===0&&(i.compareFunction=Zc,i.needsUpdate=!0),i}function Wg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Il(Id):r=Rd,t.setTexture2D(e||r,s)}function Xg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Nd,s)}function qg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Il(Pd):r=Dd,t.setTextureCube(e||r,s)}function Yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ld,s)}function $g(i){switch(i){case 5126:return Rg;case 35664:return Ig;case 35665:return Pg;case 35666:return Lg;case 35674:return Ng;case 35675:return Dg;case 35676:return Ug;case 5124:case 35670:return Fg;case 35667:case 35671:return Og;case 35668:case 35672:return Bg;case 35669:case 35673:return kg;case 5125:return zg;case 36294:return Gg;case 36295:return Vg;case 36296:return Hg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Zg(i,e){i.uniform1fv(this.addr,e)}function Jg(i,e){let t=fr(e,this.size,2);i.uniform2fv(this.addr,t)}function Kg(i,e){let t=fr(e,this.size,3);i.uniform3fv(this.addr,t)}function jg(i,e){let t=fr(e,this.size,4);i.uniform4fv(this.addr,t)}function Qg(i,e){let t=fr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ex(i,e){let t=fr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tx(i,e){let t=fr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nx(i,e){i.uniform1iv(this.addr,e)}function ix(i,e){i.uniform2iv(this.addr,e)}function sx(i,e){i.uniform3iv(this.addr,e)}function rx(i,e){i.uniform4iv(this.addr,e)}function ax(i,e){i.uniform1uiv(this.addr,e)}function ox(i,e){i.uniform2uiv(this.addr,e)}function lx(i,e){i.uniform3uiv(this.addr,e)}function cx(i,e){i.uniform4uiv(this.addr,e)}function hx(i,e,t){let n=this.cache,s=e.length,r=Rl(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Il(Id):a=Rd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ux(i,e,t){let n=this.cache,s=e.length,r=Rl(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Nd,r[a])}function dx(i,e,t){let n=this.cache,s=e.length,r=Rl(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Il(Pd):a=Dd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function fx(i,e,t){let n=this.cache,s=e.length,r=Rl(t,s);Kt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ld,r[a])}function px(i){switch(i){case 5126:return Zg;case 35664:return Jg;case 35665:return Kg;case 35666:return jg;case 35674:return Qg;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ax;case 36294:return ox;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}var hh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$g(t.type)}},uh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=px(t.type)}},dh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},lh=/(\w+)(\])?(\[|\.)?/g;function fd(i,e){i.seq.push(e),i.map[e.id]=e}function mx(i,e,t){let n=i.name,s=n.length;for(lh.lastIndex=0;;){let r=lh.exec(n),a=lh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){fd(t,c===void 0?new hh(o,i,e):new uh(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new dh(o),fd(t,m)),t=m}}}var dr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);mx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function pd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var gx=37297,xx=0;function _x(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var md=new Ke;function vx(i){at._getMatrix(md,at.workingColorSpace,i);let e=`mat3( ${md.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(i)){case Fr:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+_x(i.getShaderSource(e),o)}else return r}function yx(i,e){let t=vx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Mx={[Dc]:"Linear",[Uc]:"Reinhard",[Fc]:"Cineon",[ha]:"ACESFilmic",[Bc]:"AgX",[kc]:"Neutral",[Oc]:"Custom"};function Sx(i,e){let t=Mx[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var El=new V;function bx(){at.getLuminanceCoefficients(El);let i=El.x.toFixed(4),e=El.y.toFixed(4),t=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function Tx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ex(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ya(i){return i!==""}function xd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function _d(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(i){return i.replace(Ax,Cx)}function Cx(i,e){let t=nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return fh(t)}var Rx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(i){return i.replace(Rx,Ix)}function Ix(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yd(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Px={[ca]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function Lx(i){return Px[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nx={[cr]:"ENVMAP_MODE_REFRACTION"};function Dx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Nx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ux={[Nc]:"ENVMAP_BLENDING_MULTIPLY",[Ou]:"ENVMAP_BLENDING_MIX",[Bu]:"ENVMAP_BLENDING_ADD"};function Fx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ux[i.combine]||"ENVMAP_BLENDING_NONE"}function Ox(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Lx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Dx(t),m=Fx(t),f=wx(t),h=Tx(r),d=s.createProgram(),_,g,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(ya).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(ya).join(`
`),g.length>0&&(g+=`
`)):(_=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),g=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+m:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?nt.tonemapping_pars_fragment:"",t.toneMapping!==_i?Sx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,yx("linearToOutputTexel",t.outputColorSpace),bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=fh(a),a=xd(a,t),a=_d(a,t),o=fh(o),o=xd(o,t),o=_d(o,t),a=vd(a),o=vd(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=p+_+a,R=p+g+o,y=pd(s,s.VERTEX_SHADER,v),C=pd(s,s.FRAGMENT_SHADER,R);s.attachShader(d,y),s.attachShader(d,C),t.index0AttributeName!==void 0?s.bindAttribLocation(d,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function T(I){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(d)||"",O=s.getShaderInfoLog(y)||"",$=s.getShaderInfoLog(C)||"",N=k.trim(),J=O.trim(),te=$.trim(),B=!0,oe=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,d,y,C);else{let G=gd(s,y,"vertex"),j=gd(s,C,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+G+`
`+j)}else N!==""?We("WebGLProgram: Program Info Log:",N):(J===""||te==="")&&(oe=!1);oe&&(I.diagnostics={runnable:B,programLog:N,vertexShader:{log:J,prefix:_},fragmentShader:{log:te,prefix:g}})}s.deleteShader(y),s.deleteShader(C),x=new dr(s,d),b=Ex(s,d)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(d,gx)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xx++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=C,this}var Bx=0,ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new mh(e),t.set(e,n)),n}},mh=class{constructor(e){this.id=Bx++,this.code=e,this.usedTimes=0}};function kx(i){return i===cs||i===ga||i===xa}function zx(i,e,t,n,s,r){let a=new kr,o=new ph,l=new Set,c=[],u=new Map,m=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function d(x,b,D,I,k,O){let $=I.fog,N=k.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,te=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||J,te),oe=f[x.type],G=n.precision;x.precision!==null&&(G=n.getMaxPrecision(x.precision),G!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",G,"instead."));let j=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,le=j!==void 0?j.length:0,Le=0;N.morphAttributes.position!==void 0&&(Le=1),N.morphAttributes.normal!==void 0&&(Le=2),N.morphAttributes.color!==void 0&&(Le=3);let Xe,ie,we,De;if(oe){let Te=yi[oe];Xe=Te.vertexShader,ie=Te.fragmentShader}else{Xe=x.vertexShader,ie=x.fragmentShader;let Te=o.getVertexShaderStage(x),ft=o.getFragmentShaderStage(x);o.update(x,Te,ft),we=Te.id,De=ft.id}let Be=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),qe=k.isInstancedMesh===!0,Nt=k.isBatchedMesh===!0,ze=!!x.map,dt=!!x.matcap,ct=!!B,tt=ct&&B.isPMREMTexture===!0,Gt=!!x.aoMap,Dt=!!x.lightMap,Zt=!!x.bumpMap&&x.wireframe===!1,pt=!!x.normalMap,vn=!!x.displacementMap,Ft=!!x.emissiveMap,on=!!x.metalnessMap,nn=!!x.roughnessMap,Jt=x.anisotropy>0,z=x.clearcoat>0,wt=x.diffuseRoughness>0,Je=x.dispersion>0,Tt=x.retroreflectivity>0,me=x.iridescence>0,Vt=x.sheen>0,Ae=x.transmission>0,Ye=Jt&&!!x.anisotropyMap,w=z&&!!x.clearcoatMap,M=z&&!!x.clearcoatNormalMap,X=z&&!!x.clearcoatRoughnessMap,de=wt&&!!x.diffuseRoughnessMap,q=me&&!!x.iridescenceMap,ge=me&&!!x.iridescenceThicknessMap,ye=Vt&&!!x.sheenColorMap,se=Vt&&!!x.sheenRoughnessMap,ne=!!x.specularMap,xe=!!x.specularColorMap,L=!!x.specularIntensityMap,ae=Ae&&!!x.transmissionMap,Q=Ae&&!!x.thicknessMap,_e=!!x.gradientMap,fe=!!x.alphaMap,Me=x.alphaTest>0,ve=!!x.alphaHash,He=!!x.extensions,ce=_i;x.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(ce=i.toneMapping);let Fe=tt?B.isCompressedCubeTexture?B.image[0].mipmaps:B.mipmaps:null,Pe={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:Xe,fragmentShader:ie,defines:x.defines,customVertexShaderID:we,customFragmentShaderID:De,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:G,batching:Nt,batchingColor:Nt&&k._colorsTexture!==null,instancing:qe,instancingColor:qe&&k.instanceColor!==null,instancingMorph:qe&&k.morphTexture!==null,outputColorSpace:Be===null?i.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:dt,envMap:ct,envMapMode:ct&&B.mapping,envMapPMREM:tt,envMapMaxLod:tt?Fe.length-1:null,envMapSize:tt?Fe[0].width:null,aoMap:Gt,lightMap:Dt,bumpMap:Zt,normalMap:pt,displacementMap:vn,emissiveMap:Ft,normalMapObjectSpace:pt&&x.normalMapType===Gu,normalMapTangentSpace:pt&&x.normalMapType===wl,packedNormalMap:pt&&x.normalMapType===wl&&kx(x.normalMap.format),metalnessMap:on,roughnessMap:nn,anisotropy:Jt,anisotropyMap:Ye,clearcoat:z,clearcoatMap:w,clearcoatNormalMap:M,clearcoatRoughnessMap:X,diffuseRoughness:wt,diffuseRoughnessMap:de,dispersion:Je,retroreflection:Tt,iridescence:me,iridescenceMap:q,iridescenceThicknessMap:ge,sheen:Vt,sheenColorMap:ye,sheenRoughnessMap:se,specularMap:ne,specularColorMap:xe,specularIntensityMap:L,transmission:Ae,transmissionMap:ae,thicknessMap:Q,gradientMap:_e,opaque:x.transparent===!1&&x.blending===ls&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:Me,alphaHash:ve,combine:x.combine,mapUv:ze&&h(x.map.channel),aoMapUv:Gt&&h(x.aoMap.channel),lightMapUv:Dt&&h(x.lightMap.channel),bumpMapUv:Zt&&h(x.bumpMap.channel),normalMapUv:pt&&h(x.normalMap.channel),displacementMapUv:vn&&h(x.displacementMap.channel),emissiveMapUv:Ft&&h(x.emissiveMap.channel),metalnessMapUv:on&&h(x.metalnessMap.channel),roughnessMapUv:nn&&h(x.roughnessMap.channel),anisotropyMapUv:Ye&&h(x.anisotropyMap.channel),clearcoatMapUv:w&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:de&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:q&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:se&&h(x.sheenRoughnessMap.channel),specularMapUv:ne&&h(x.specularMap.channel),specularColorMapUv:xe&&h(x.specularColorMap.channel),specularIntensityMapUv:L&&h(x.specularIntensityMap.channel),transmissionMapUv:ae&&h(x.transmissionMap.channel),thicknessMapUv:Q&&h(x.thicknessMap.channel),alphaMapUv:fe&&h(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(pt||Jt),vertexNormals:!!N.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!N.attributes.uv&&(ze||fe),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||N.attributes.normal===void 0&&pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:Ee,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Le,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&at.getTransfer(x.map.colorSpace)===xt,decodeVideoTextureEmissive:Ft&&x.emissiveMap.isVideoTexture===!0&&at.getTransfer(x.emissiveMap.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===an,flipSided:x.side===fn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:He&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&x.extensions.multiDraw===!0||Nt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pe.vertexUv1s=l.has(1),Pe.vertexUv2s=l.has(2),Pe.vertexUv3s=l.has(3),l.clear(),Pe}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)b.push(D),b.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(g(b,x),p(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function g(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function p(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let b=f[x.type],D;if(b){let I=yi[b];D=td.clone(I.uniforms)}else D=x.uniforms;return D}function R(x,b){let D=u.get(b);return D!==void 0?++D.usedTimes:(D=new Ox(i,b,x,s),c.push(D),u.set(b,D)),D}function y(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function C(x){o.remove(x)}function T(){o.dispose()}return{getParameters:d,getProgramCacheKey:_,getUniforms:v,acquireProgram:R,releaseProgram:y,releaseShaderCache:C,programs:c,dispose:T}}function Gx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Vx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Md(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,d,_,g,p){let v=i[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:d,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},i[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=d,v.materialVariant=a(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=g,v.group=p),e++,v}function l(f,h,d,_,g,p,v){v.reversedDepth===!0&&(g=-g);let R=o(f,h,d,_,g,p);d.transmission>0?n.push(R):d.transparent===!0?s.push(R):t.push(R)}function c(f,h,d,_,g,p){let v=o(f,h,d,_,g,p);d.transmission>0?n.unshift(v):d.transparent===!0?s.unshift(v):t.unshift(v)}function u(f,h){t.length>1&&t.sort(f||Vx),n.length>1&&n.sort(h||Md),s.length>1&&s.sort(h||Md)}function m(){for(let f=e,h=i.length;f<h;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:u}}function Hx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Sd,i.set(n,[a])):s>=r.length?(a=new Sd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new ke};break;case"SpotLight":t={position:new V,direction:new V,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function Xx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var qx=0;function Yx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $x(i){let e=new Wx,t=Xx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new V);let s=new V,r=new ht,a=new ht;function o(c){let u=0,m=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let h=0,d=0,_=0,g=0,p=0,v=0,R=0,y=0,C=0,T=0,x=0,b=0,D=0,I=0;c.sort(Yx);for(let O=0,$=c.length;O<$;O++){let N=c[O],J=N.color,te=N.intensity,B=N.distance,oe=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===cs?oe=N.shadow.map.texture:oe=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=J.r*te,m+=J.g*te,f+=J.b*te;else if(N.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(N.sh.coefficients[G],te);I++}else if(N.isSunLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let j=N.shadow,le=t.get(N);le.shadowIntensity=j.intensity,le.shadowBias=j.bias,le.shadowNormalBias=j.normalBias,le.shadowRadius=j.radius,le.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[d]=le,n.sunShadowMap[d]=oe;let Le=j.getViewportCount();for(let Xe=0;Xe<Le;Xe++)n.sunShadowMatrix[_+Xe]=j.getMatrix(Xe),n.sunShadowCascade[_+Xe]=j._cascadeData[Xe];_+=Le,d++}n.sun[h]=G,h++}else if(N.isDirectionalLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let j=N.shadow,le=t.get(N);le.shadowIntensity=j.intensity,le.shadowBias=j.bias,le.shadowNormalBias=j.normalBias,le.shadowRadius=j.radius,le.shadowMapSize=j.mapSize,n.directionalShadow[g]=le,n.directionalShadowMap[g]=oe,n.directionalShadowMatrix[g]=N.shadow.matrix,C++}n.directional[g]=G,g++}else if(N.isSpotLight){let G=e.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(J).multiplyScalar(te),G.distance=B,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,n.spot[v]=G;let j=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,j.updateMatrices(N),N.castShadow&&D++),n.spotLightMatrix[v]=j.matrix,N.castShadow){let le=t.get(N);le.shadowIntensity=j.intensity,le.shadowBias=j.bias,le.shadowNormalBias=j.normalBias,le.shadowRadius=j.radius,le.shadowMapSize=j.mapSize,n.spotShadow[v]=le,n.spotShadowMap[v]=oe,x++}v++}else if(N.isRectAreaLight){let G=e.get(N);G.color.copy(J).multiplyScalar(te),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),n.rectArea[R]=G,R++}else if(N.isPointLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){let j=N.shadow,le=t.get(N);le.shadowIntensity=j.intensity,le.shadowBias=j.bias,le.shadowNormalBias=j.normalBias,le.shadowRadius=j.radius,le.shadowMapSize=j.mapSize,le.shadowCameraNear=j.camera.near,le.shadowCameraFar=j.camera.far,n.pointShadow[p]=le,n.pointShadowMap[p]=oe,n.pointShadowMatrix[p]=N.shadow.matrix,T++}n.point[p]=G,p++}else if(N.isHemisphereLight){let G=e.get(N);G.skyColor.copy(N.color).multiplyScalar(te),G.groundColor.copy(N.groundColor).multiplyScalar(te),n.hemi[y]=G,y++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ie.LTC_FLOAT_1,n.rectAreaLTC2=Ie.LTC_FLOAT_2):(n.rectAreaLTC1=Ie.LTC_HALF_1,n.rectAreaLTC2=Ie.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=m,n.ambient[2]=f;let k=n.hash;(k.sunLength!==h||k.directionalLength!==g||k.pointLength!==p||k.spotLength!==v||k.rectAreaLength!==R||k.hemiLength!==y||k.numSunShadows!==d||k.numDirectionalShadows!==C||k.numPointShadows!==T||k.numSpotShadows!==x||k.numSpotMaps!==b||k.numLightProbes!==I)&&(n.sun.length=h,n.directional.length=g,n.spot.length=v,n.rectArea.length=R,n.point.length=p,n.hemi.length=y,n.sunShadow.length=d,n.sunShadowMap.length=d,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.directionalShadowMatrix.length=C,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-D,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=I,k.sunLength=h,k.directionalLength=g,k.pointLength=p,k.spotLength=v,k.rectAreaLength=R,k.hemiLength=y,k.numSunShadows=d,k.numDirectionalShadows=C,k.numPointShadows=T,k.numSpotShadows=x,k.numSpotMaps=b,k.numLightProbes=I,n.version=qx++)}function l(c,u){let m=0,f=0,h=0,d=0,_=0,g=0,p=u.matrixWorldInverse;for(let v=0,R=c.length;v<R;v++){let y=c[v];if(y.isSunLight){let C=n.sun[m];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(p),m++}else if(y.isDirectionalLight){let C=n.directional[f];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),f++}else if(y.isSpotLight){let C=n.spot[d];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),d++}else if(y.isRectAreaLight){let C=n.rectArea[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let C=n.point[h];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){let C=n.hemi[g];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function bd(i){let e=new $x(i),t=[],n=[],s=[];function r(m){u.camera=m,t.length=0,n.length=0,s.length=0}function a(m){m.isLightProbeGrid?s.push(m):t.push(m)}function o(m){n.push(m)}function l(){e.setup(t),s.sort((m,f)=>m.priority-f.priority||m.id-f.id)}function c(m){e.setupView(t,m)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Zx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new bd(i),e.set(s,[o])):r>=a.length?(o=new bd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kx=`uniform sampler2D shadow_pass;
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
}`,jx=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Qx=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],wd=new ht,va=new V,ch=new V;function e_(i,e,t){let n=new is,s=new et,r=new et,a=new Ut,o=new To,l=new Eo,c={},u=t.maxTextureSize,m={[os]:fn,[fn]:os,[an]:an},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:Jx,fragmentShader:Kx}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let d=new $t;d.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new lt(d,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ca;let p=this.type;this.render=function(T,x,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===_u&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ca);let D=i.getRenderTarget(),I=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),O=i.state;O.setBlending(As),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let $=p!==this.type;$&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(J=>J.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,J=T.length;N<J;N++){let te=T[N],B=te.shadow;if(B===void 0){We("WebGLShadowMap:",te,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);let oe=B.getFrameExtents();s.multiply(oe),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,B.mapSize.y=r.y));let G=i.state.buffers.depth.getReversed();if(B.camera._reversedDepth=G,B.map===null||$===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===lr){if(te.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Ln(s.x,s.y,{format:cs,type:ii,minFilter:yn,magFilter:yn,generateMipmaps:!1}),B.map.texture.name=te.name+".shadowMap",B.map.depthTexture=new Bi(s.x,s.y,Vn),B.map.depthTexture.name=te.name+".shadowMapDepth",B.map.depthTexture.format=Ui,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Yt,B.map.depthTexture.magFilter=Yt}else te.isPointLight?(B.map=new Ma(s.x),B.map.depthTexture=new $r(s.x,ni)):(B.map=new Ln(s.x,s.y),B.map.depthTexture=new Bi(s.x,s.y,ni)),B.map.depthTexture.name=te.name+".shadowMap",B.map.depthTexture.format=Ui,this.type===ca?(B.map.depthTexture.compareFunction=G?$c:Yc,B.map.depthTexture.minFilter=yn,B.map.depthTexture.magFilter=yn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Yt,B.map.depthTexture.magFilter=Yt);B.camera.updateProjectionMatrix()}B.map.isWebGLCubeRenderTarget!==!0&&(B.map.width!==s.x||B.map.height!==s.y)&&B.map.setSize(s.x,s.y);let j=B.map.isWebGLCubeRenderTarget?6:B.getViewportCount();te.isPointLight!==!0&&B.updateMatrices(te,b);let le=(B.camera.layers.mask&4294967294)!==0?B.camera.layers:b.layers;for(let Le=0;Le<j;Le++){let Xe=B.getCamera(Le);if(te.isPointLight){let ie=B.camera,we=B.matrix,De=te.distance||ie.far;De!==ie.far&&(ie.far=De,ie.updateProjectionMatrix()),va.setFromMatrixPosition(te.matrixWorld),ie.position.copy(va),ch.copy(ie.position),ch.add(jx[Le]),ie.up.copy(Qx[Le]),ie.lookAt(ch),ie.updateMatrixWorld(),we.makeTranslation(-va.x,-va.y,-va.z),wd.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),B._frustum.setFromProjectionMatrix(wd,ie.coordinateSystem,ie.reversedDepth)}if(B.map.isWebGLCubeRenderTarget)i.setRenderTarget(B.map,Le),i.clear();else{Le===0&&(i.setRenderTarget(B.map),i.clear());let ie=B.getViewport(Le);a.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),O.viewport(a)}n=B.getFrustum(Le),y(x,b,Xe,te,le,this.type)}B.isPointLightShadow!==!0&&this.type===lr&&v(B,b),B.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(D,I,k)};function v(T,x){let b=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new Ln(s.x,s.y,{format:cs,type:ii}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,b,f,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,b,h,_,null)}function R(T,x,b,D){let I=null,k=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)I=k;else if(I=b.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=I.uuid,$=x.uuid,N=c[O];N===void 0&&(N={},c[O]=N);let J=N[$];J===void 0&&(J=I.clone(),N[$]=J,x.addEventListener("dispose",C)),I=J}if(I.visible=x.visible,I.wireframe=x.wireframe,D===lr?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:m[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=i.properties.get(I);O.light=b}return I}function y(T,x,b,D,I,k){if(T.visible===!1)return;if(T.layers.test(I)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&k===lr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let N=e.update(T),J=T.material;if(Array.isArray(J)){let te=N.groups;for(let B=0,oe=te.length;B<oe;B++){let G=te[B],j=J[G.materialIndex];if(j&&j.visible){let le=R(T,j,D,k);T.onBeforeShadow(i,T,x,b,N,le,G),i.renderBufferDirect(b,null,N,le,T,G),T.onAfterShadow(i,T,x,b,N,le,G)}}}else if(J.visible){let te=R(T,J,D,k);T.onBeforeShadow(i,T,x,b,N,te,null),i.renderBufferDirect(b,null,N,te,T,null),T.onAfterShadow(i,T,x,b,N,te,null)}}let $=T.children;for(let N=0,J=$.length;N<J;N++)y($[N],x,b,D,I,k)}function C(T){T.target.removeEventListener("dispose",C);for(let b in c){let D=c[b],I=T.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}}function t_(i,e){function t(){let L=!1,ae=new Ut,Q=null,_e=new Ut(0,0,0,0);return{setMask:function(fe){Q!==fe&&!L&&(i.colorMask(fe,fe,fe,fe),Q=fe)},setLocked:function(fe){L=fe},setClear:function(fe,Me,ve,He,ce){ce===!0&&(fe*=He,Me*=He,ve*=He),ae.set(fe,Me,ve,He),_e.equals(ae)===!1&&(i.clearColor(fe,Me,ve,He),_e.copy(ae))},reset:function(){L=!1,Q=null,_e.set(-1,0,0,0)}}}function n(){let L=!1,ae=!1,Q=null,_e=null,fe=null;return{setReversed:function(Me){if(ae!==Me){let ve=e.get("EXT_clip_control");Me?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ae=Me;let He=fe;fe=null,this.setClear(He)}},getReversed:function(){return ae},setTest:function(Me){Me?Ee(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(Me){Q!==Me&&!L&&(i.depthMask(Me),Q=Me)},setFunc:function(Me){if(ae&&(Me=ju[Me]),_e!==Me){switch(Me){case oo:i.depthFunc(i.NEVER);break;case lo:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case tr:i.depthFunc(i.LEQUAL);break;case ho:i.depthFunc(i.EQUAL);break;case uo:i.depthFunc(i.GEQUAL);break;case fo:i.depthFunc(i.GREATER);break;case po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Me}},setLocked:function(Me){L=Me},setClear:function(Me){fe!==Me&&(fe=Me,ae&&(Me=1-Me),i.clearDepth(Me))},reset:function(){L=!1,Q=null,_e=null,fe=null,ae=!1}}}function s(){let L=!1,ae=null,Q=null,_e=null,fe=null,Me=null,ve=null,He=null,ce=null;return{setTest:function(Fe){L||(Fe?Ee(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(Fe){ae!==Fe&&!L&&(i.stencilMask(Fe),ae=Fe)},setFunc:function(Fe,Pe,Te){(Q!==Fe||_e!==Pe||fe!==Te)&&(i.stencilFunc(Fe,Pe,Te),Q=Fe,_e=Pe,fe=Te)},setOp:function(Fe,Pe,Te){(Me!==Fe||ve!==Pe||He!==Te)&&(i.stencilOp(Fe,Pe,Te),Me=Fe,ve=Pe,He=Te)},setLocked:function(Fe){L=Fe},setClear:function(Fe){ce!==Fe&&(i.clearStencil(Fe),ce=Fe)},reset:function(){L=!1,ae=null,Q=null,_e=null,fe=null,Me=null,ve=null,He=null,ce=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,u={},m={},f={},h=new WeakMap,d=[],_=null,g=!1,p=null,v=null,R=null,y=null,C=null,T=null,x=null,b=new ke(0,0,0),D=0,I=!1,k=null,O=null,$=null,N=null,J=null,te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,oe=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=oe>=1):G.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=oe>=2);let j=null,le={},Le=i.getParameter(i.SCISSOR_BOX),Xe=i.getParameter(i.VIEWPORT),ie=new Ut().fromArray(Le),we=new Ut().fromArray(Xe);function De(L,ae,Q,_e){let fe=new Uint8Array(4),Me=i.createTexture();i.bindTexture(L,Me),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<Q;ve++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(ae+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return Me}let Be={};Be[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),Be[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Be[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ee(i.DEPTH_TEST),a.setFunc(tr),Zt(!1),pt(Cc),Ee(i.CULL_FACE),Gt(As);function Ee(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function qe(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function Nt(L,ae){return f[L]!==ae?(i.bindFramebuffer(L,ae),f[L]=ae,L===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ae),L===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function ze(L,ae){let Q=d,_e=!1;if(L){Q=h.get(ae),Q===void 0&&(Q=[],h.set(ae,Q));let fe=L.textures;if(Q.length!==fe.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,ve=fe.length;Me<ve;Me++)Q[Me]=i.COLOR_ATTACHMENT0+Me;Q.length=fe.length,_e=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,_e=!0);_e&&i.drawBuffers(Q)}function dt(L){return _!==L?(i.useProgram(L),_=L,!0):!1}let ct={[Cs]:i.FUNC_ADD,[yu]:i.FUNC_SUBTRACT,[Mu]:i.FUNC_REVERSE_SUBTRACT};ct[Su]=i.MIN,ct[bu]=i.MAX;let tt={[wu]:i.ZERO,[Tu]:i.ONE,[Eu]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Cu]:i.DST_ALPHA,[Au]:i.ONE_MINUS_SRC_COLOR,[Lc]:i.ONE_MINUS_SRC_ALPHA,[Pu]:i.ONE_MINUS_DST_COLOR,[Ru]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Du]:i.ONE_MINUS_CONSTANT_COLOR,[Uu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function Gt(L,ae,Q,_e,fe,Me,ve,He,ce,Fe){if(L===As){g===!0&&(qe(i.BLEND),g=!1);return}if(g===!1&&(Ee(i.BLEND),g=!0),L!==vu){if(L!==p||Fe!==I){if((v!==Cs||C!==Cs)&&(i.blendEquation(i.FUNC_ADD),v=Cs,C=Cs),Fe)switch(L){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fn:i.blendFunc(i.ONE,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ic:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",L);break}else switch(L){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rc:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",L);break}R=null,y=null,T=null,x=null,b.set(0,0,0),D=0,p=L,I=Fe}return}fe=fe||ae,Me=Me||Q,ve=ve||_e,(ae!==v||fe!==C)&&(i.blendEquationSeparate(ct[ae],ct[fe]),v=ae,C=fe),(Q!==R||_e!==y||Me!==T||ve!==x)&&(i.blendFuncSeparate(tt[Q],tt[_e],tt[Me],tt[ve]),R=Q,y=_e,T=Me,x=ve),(He.equals(b)===!1||ce!==D)&&(i.blendColor(He.r,He.g,He.b,ce),b.copy(He),D=ce),p=L,I=!1}function Dt(L,ae){L.side===an?qe(i.CULL_FACE):Ee(i.CULL_FACE);let Q=L.side===fn;ae&&(Q=!Q),Zt(Q),L.blending===ls&&L.transparent===!1?Gt(As):Gt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let _e=L.stencilWrite;o.setTest(_e),_e&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ft(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ee(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(L){k!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),k=L)}function pt(L){L!==gu?(Ee(i.CULL_FACE),L!==O&&(L===Cc?i.cullFace(i.BACK):L===xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),O=L}function vn(L){L!==$&&(B&&i.lineWidth(L),$=L)}function Ft(L,ae,Q){L?(Ee(i.POLYGON_OFFSET_FILL),(N!==ae||J!==Q)&&(N=ae,J=Q,a.getReversed()&&(ae=-ae,Q=-Q),i.polygonOffset(ae,Q))):qe(i.POLYGON_OFFSET_FILL)}function on(L){L?Ee(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function nn(L){L===void 0&&(L=i.TEXTURE0+te-1),j!==L&&(i.activeTexture(L),j=L)}function Jt(L,ae,Q){Q===void 0&&(j===null?Q=i.TEXTURE0+te-1:Q=j);let _e=le[Q];_e===void 0&&(_e={type:void 0,texture:void 0},le[Q]=_e),(_e.type!==L||_e.texture!==ae)&&(j!==Q&&(i.activeTexture(Q),j=Q),i.bindTexture(L,ae||Be[L]),_e.type=L,_e.texture=ae)}function z(){let L=le[j];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function wt(){try{i.compressedTexImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Je(){try{i.compressedTexImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Tt(){try{i.texSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function me(){try{i.texSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Vt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function Ye(){try{i.texStorage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function w(){try{i.texStorage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function M(){try{i.texImage2D(...arguments)}catch(L){Ze("WebGLState:",L)}}function X(){try{i.texImage3D(...arguments)}catch(L){Ze("WebGLState:",L)}}function de(L){return m[L]!==void 0?m[L]:i.getParameter(L)}function q(L,ae){m[L]!==ae&&(i.pixelStorei(L,ae),m[L]=ae)}function ge(L){ie.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ie.copy(L))}function ye(L){we.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),we.copy(L))}function se(L,ae){let Q=c.get(ae);Q===void 0&&(Q=new WeakMap,c.set(ae,Q));let _e=Q.get(L);_e===void 0&&(_e=i.getUniformBlockIndex(ae,L.name),i.uniformBlockBinding(ae,_e,_e),Q.set(L,_e))}function ne(L,ae,Q){let fe=c.get(ae).get(L);l[fe]!==Q&&(i.bindBufferBase(i.UNIFORM_BUFFER,fe,Q),l[fe]=Q)}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},m={},j=null,le={},f={},l={},h=new WeakMap,d=[],_=null,g=!1,p=null,v=null,R=null,y=null,C=null,T=null,x=null,b=new ke(0,0,0),D=0,I=!1,k=null,O=null,$=null,N=null,J=null,ie.set(0,0,i.canvas.width,i.canvas.height),we.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Ee,disable:qe,bindFramebuffer:Nt,drawBuffers:ze,useProgram:dt,setBlending:Gt,setMaterial:Dt,setFlipSided:Zt,setCullFace:pt,setLineWidth:vn,setPolygonOffset:Ft,setScissorTest:on,activeTexture:nn,bindTexture:Jt,unbindTexture:z,compressedTexImage2D:wt,compressedTexImage3D:Je,texImage2D:M,texImage3D:X,pixelStorei:q,getParameter:de,updateUBOMapping:se,uniformBlockBinding:ne,texStorage2D:Ye,texStorage3D:w,texSubImage2D:Tt,texSubImage3D:me,compressedTexSubImage2D:Vt,compressedTexSubImage3D:Ae,scissor:ge,viewport:ye,reset:xe}}function n_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap,m=new Set,f,h=new WeakMap,d=new Set,_=new FinalizationRegistry(w=>d.delete(w)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,M){return g?new OffscreenCanvas(w,M):Or("canvas")}function v(w,M,X){let de=1,q=Ye(w);if((q.width>X||q.height>X)&&(de=X/Math.max(q.width,q.height)),de<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let ge=Math.floor(de*q.width),ye=Math.floor(de*q.height);f===void 0&&(f=p(ge,ye));let se=M?p(ge,ye):f;return se.width=ge,se.height=ye,se.getContext("2d").drawImage(w,0,0,ge,ye),We("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ge+"x"+ye+")."),se}else return"data"in w&&We("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),w;return w}function R(w){return w.generateMipmaps}function y(w){i.generateMipmap(w)}function C(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,M,X,de,q,ge=!1){if(w!==null){if(i[w]!==void 0)return i[w];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ye;de&&(ye=e.get("EXT_texture_norm16"),ye||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let se=M;if(M===i.RED&&(X===i.FLOAT&&(se=i.R32F),X===i.HALF_FLOAT&&(se=i.R16F),X===i.UNSIGNED_BYTE&&(se=i.R8),X===i.UNSIGNED_SHORT&&ye&&(se=ye.R16_EXT),X===i.SHORT&&ye&&(se=ye.R16_SNORM_EXT)),M===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.R8UI),X===i.UNSIGNED_SHORT&&(se=i.R16UI),X===i.UNSIGNED_INT&&(se=i.R32UI),X===i.BYTE&&(se=i.R8I),X===i.SHORT&&(se=i.R16I),X===i.INT&&(se=i.R32I)),M===i.RG&&(X===i.FLOAT&&(se=i.RG32F),X===i.HALF_FLOAT&&(se=i.RG16F),X===i.UNSIGNED_BYTE&&(se=i.RG8),X===i.UNSIGNED_SHORT&&ye&&(se=ye.RG16_EXT),X===i.SHORT&&ye&&(se=ye.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RG8UI),X===i.UNSIGNED_SHORT&&(se=i.RG16UI),X===i.UNSIGNED_INT&&(se=i.RG32UI),X===i.BYTE&&(se=i.RG8I),X===i.SHORT&&(se=i.RG16I),X===i.INT&&(se=i.RG32I)),M===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RGB8UI),X===i.UNSIGNED_SHORT&&(se=i.RGB16UI),X===i.UNSIGNED_INT&&(se=i.RGB32UI),X===i.BYTE&&(se=i.RGB8I),X===i.SHORT&&(se=i.RGB16I),X===i.INT&&(se=i.RGB32I)),M===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),X===i.UNSIGNED_INT&&(se=i.RGBA32UI),X===i.BYTE&&(se=i.RGBA8I),X===i.SHORT&&(se=i.RGBA16I),X===i.INT&&(se=i.RGBA32I)),M===i.RGB&&(X===i.UNSIGNED_SHORT&&ye&&(se=ye.RGB16_EXT),X===i.SHORT&&ye&&(se=ye.RGB16_SNORM_EXT),X===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(se=i.R11F_G11F_B10F)),M===i.RGBA){let ne=ge?Fr:at.getTransfer(q);X===i.FLOAT&&(se=i.RGBA32F),X===i.HALF_FLOAT&&(se=i.RGBA16F),X===i.UNSIGNED_BYTE&&(se=ne===xt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT&&ye&&(se=ye.RGBA16_EXT),X===i.SHORT&&ye&&(se=ye.RGBA16_SNORM_EXT),X===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(w,M){let X;return w?M===null||M===ni||M===Is?X=i.DEPTH24_STENCIL8:M===Vn?X=i.DEPTH32F_STENCIL8:M===hr&&(X=i.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ni||M===Is?X=i.DEPTH_COMPONENT24:M===Vn?X=i.DEPTH_COMPONENT32F:M===hr&&(X=i.DEPTH_COMPONENT16),X}function b(w,M){return R(w)===!0||w.isFramebufferTexture&&w.minFilter!==Yt&&w.minFilter!==yn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function D(w){let M=new WeakRef(w);n.get(w).__ref=M,d.add(M),_.register(w,M,M)}function I(w){let M=n.get(w).__ref;M!==void 0&&(d.delete(M),_.unregister(M))}function k(w){$(w.target)}function O(w){N(w.target)}function $(w){w.removeEventListener("dispose",k),I(w),te(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&m.delete(w)}function N(w){w.removeEventListener("dispose",O),I(w),oe(w)}function J(){for(let w of d){let M=w.deref();M!==void 0&&(M.isRenderTarget===!0?N(M):$(M))}d.clear(),m.clear()}function te(w){let M=n.get(w);if(M.__webglInit===void 0)return;let X=w.source,de=h.get(X);if(de){let q=de[M.__cacheKey];q.usedTimes--,q.usedTimes===0&&B(w),Object.keys(de).length===0&&h.delete(X)}n.remove(w)}function B(w){let M=n.get(w);i.deleteTexture(M.__webglTexture);let X=w.source,de=h.get(X);delete de[M.__cacheKey],a.memory.textures--}function oe(w){let M=n.get(w);M.__depthDisposeCallback&&M.__depthDisposeCallback();let X=w.depthTexture;if(X&&X.renderTarget===w&&$(X),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let ge=0;ge<M.__webglFramebuffer[q].length;ge++)i.deleteFramebuffer(M.__webglFramebuffer[q][ge]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let de=w.textures;for(let q=0,ge=de.length;q<ge;q++){let ye=n.get(de[q]);ye.__webglTexture&&(i.deleteTexture(ye.__webglTexture),a.memory.textures--),n.remove(de[q])}n.remove(w)}let G=0;function j(){G=0}function le(){return G}function Le(w){G=w}function Xe(){let w=G;return w>=s.maxTextures&&We("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,w}function ie(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.mipmapsAutoUpdate),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function we(w,M){let X=n.get(w);if(w.isVideoTexture&&Vt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&X.__version!==w.version){let de=w.image;if(de===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(X,w,M);return}}else w.isExternalTexture&&(X.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+M)}function De(w,M){let X=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){Dt(X,w,M);return}else w.isExternalTexture&&(X.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+M)}function Be(w,M){let X=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){Dt(X,w,M);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+M)}function Ee(w,M){let X=n.get(w);if(w.version>0&&X.__version!==w.version){Zt(X,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+M)}let qe={[mo]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},Nt={[Yt]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[ua]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Go]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},ze={[Hu]:i.NEVER,[Zc]:i.ALWAYS,[Wu]:i.LESS,[Yc]:i.LEQUAL,[Xu]:i.EQUAL,[$c]:i.GEQUAL,[qu]:i.GREATER,[Yu]:i.NOTEQUAL};function dt(w,M){if(M.type===Vn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===yn||M.magFilter===Go||M.magFilter===ua||M.magFilter===zi||M.minFilter===yn||M.minFilter===Go||M.minFilter===ua||M.minFilter===zi)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,qe[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,qe[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,qe[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Nt[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Nt[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ze[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Yt||M.minFilter!==ua&&M.minFilter!==zi||M.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ct(w,M){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",k),D(M));let de=M.source,q=h.get(de);q===void 0&&(q={},h.set(de,q));let ge=ie(M);if(ge!==w.__cacheKey){q[ge]===void 0&&(q[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),q[ge].usedTimes++;let ye=q[w.__cacheKey];ye!==void 0&&(q[w.__cacheKey].usedTimes--,ye.usedTimes===0&&B(M)),w.__cacheKey=ge,w.__webglTexture=q[ge].texture}return X}function tt(w,M,X){return Math.floor(Math.floor(w/X)/M)}function Gt(w,M,X,de){let ge=w.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,X,de,M.data);else{ge.sort((L,ae)=>L.start-ae.start);let ye=0;for(let L=1;L<ge.length;L++){let ae=ge[ye],Q=ge[L],_e=ae.start+ae.count,fe=tt(Q.start,M.width,4),Me=tt(ae.start,M.width,4);Q.start<=_e+1&&fe===Me&&tt(Q.start+Q.count-1,M.width,4)===fe?ae.count=Math.max(ae.count,Q.start+Q.count-ae.start):(++ye,ge[ye]=Q)}ge.length=ye+1;let se=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),xe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let L=0,ae=ge.length;L<ae;L++){let Q=ge[L],_e=Math.floor(Q.start/4),fe=Math.ceil(Q.count/4),Me=_e%M.width,ve=Math.floor(_e/M.width),He=fe,ce=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve),t.texSubImage2D(i.TEXTURE_2D,0,Me,ve,He,ce,X,de,M.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,se),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function Dt(w,M,X){let de=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(de=i.TEXTURE_3D);let q=ct(w,M),ge=M.source;t.bindTexture(de,w.__webglTexture,i.TEXTURE0+X);let ye=n.get(ge);if(ge.version!==ye.__version||q===!0){if(t.activeTexture(i.TEXTURE0+X),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ce=at.getPrimaries(at.workingColorSpace),Fe=M.colorSpace===Vi?null:at.getPrimaries(M.colorSpace),Pe=M.colorSpace===Vi||ce===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let ne=v(M.image,!1,s.maxTextureSize);ne=Ae(M,ne);let xe=r.convert(M.format,M.colorSpace),L=r.convert(M.type),ae=T(M.internalFormat,xe,L,M.normalized,M.colorSpace,M.isVideoTexture);dt(de,M);let Q,_e=M.mipmaps,fe=M.isVideoTexture!==!0,Me=ye.__version===void 0||q===!0,ve=ge.dataReady,He=b(M,ne);if(M.isDepthTexture)ae=x(M.format===Gi,M.type),Me&&(fe?t.texStorage2D(i.TEXTURE_2D,1,ae,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ae,ne.width,ne.height,0,xe,L,null));else if(M.isDataTexture)if(_e.length>0){fe&&Me&&t.texStorage2D(i.TEXTURE_2D,He,ae,_e[0].width,_e[0].height);for(let ce=0,Fe=_e.length;ce<Fe;ce++)Q=_e[ce],fe?ve&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Q.width,Q.height,xe,L,Q.data):t.texImage2D(i.TEXTURE_2D,ce,ae,Q.width,Q.height,0,xe,L,Q.data);M.generateMipmaps=!1}else fe?(Me&&t.texStorage2D(i.TEXTURE_2D,He,ae,ne.width,ne.height),ve&&Gt(M,ne,xe,L)):t.texImage2D(i.TEXTURE_2D,0,ae,ne.width,ne.height,0,xe,L,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){fe&&Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,ae,_e[0].width,_e[0].height,ne.depth);for(let ce=0,Fe=_e.length;ce<Fe;ce++)if(Q=_e[ce],M.format!==si)if(xe!==null)if(fe){if(ve)if(M.layerUpdates.size>0){let Pe=nh(Q.width,Q.height,M.format,M.type);for(let Te of M.layerUpdates){let ft=Q.data.subarray(Te*Pe/Q.data.BYTES_PER_ELEMENT,(Te+1)*Pe/Q.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Te,Q.width,Q.height,1,xe,ft)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Q.width,Q.height,ne.depth,xe,Q.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,ae,Q.width,Q.height,ne.depth,0,Q.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Q.width,Q.height,ne.depth,xe,L,Q.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,ae,Q.width,Q.height,ne.depth,0,xe,L,Q.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{fe&&Me&&t.texStorage2D(i.TEXTURE_2D,He,ae,_e[0].width,_e[0].height);for(let ce=0,Fe=_e.length;ce<Fe;ce++)Q=_e[ce],M.format!==si?xe!==null?fe?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,Q.width,Q.height,xe,Q.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,ae,Q.width,Q.height,0,Q.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?ve&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Q.width,Q.height,xe,L,Q.data):t.texImage2D(i.TEXTURE_2D,ce,ae,Q.width,Q.height,0,xe,L,Q.data)}else if(M.isDataArrayTexture)if(fe){if(Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,ae,ne.width,ne.height,ne.depth),ve)if(M.layerUpdates.size>0){let ce=nh(ne.width,ne.height,M.format,M.type);for(let Fe of M.layerUpdates){let Pe=ne.data.subarray(Fe*ce/ne.data.BYTES_PER_ELEMENT,(Fe+1)*ce/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Fe,ne.width,ne.height,1,xe,L,Pe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,xe,L,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ae,ne.width,ne.height,ne.depth,0,xe,L,ne.data);else if(M.isData3DTexture)fe?(Me&&t.texStorage3D(i.TEXTURE_3D,He,ae,ne.width,ne.height,ne.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,xe,L,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ae,ne.width,ne.height,ne.depth,0,xe,L,ne.data);else if(M.isFramebufferTexture){if(Me)if(fe)t.texStorage2D(i.TEXTURE_2D,He,ae,ne.width,ne.height);else{let ce=ne.width,Fe=ne.height;for(let Pe=0;Pe<He;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,ae,ce,Fe,0,xe,L,null),ce>>=1,Fe>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ce=i.canvas;if(ce.hasAttribute("layoutsubtree")||ce.setAttribute("layoutsubtree","true"),ne.parentNode!==ce){ce.appendChild(ne),m.add(M),ce.onpaint=Fe=>{let Pe=Fe.changedElements;for(let Te of m)Pe.includes(Te.image)&&(Te.needsUpdate=!0)},ce.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let Pe=i.RGBA,Te=i.RGBA,ft=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pe,Te,ft,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(_e.length>0){if(fe&&Me){let ce=Ye(_e[0]);t.texStorage2D(i.TEXTURE_2D,He,ae,ce.width,ce.height)}for(let ce=0,Fe=_e.length;ce<Fe;ce++)Q=_e[ce],fe?ve&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,xe,L,Q):t.texImage2D(i.TEXTURE_2D,ce,ae,xe,L,Q);M.generateMipmaps=!1}else if(fe){if(Me){let ce=Ye(ne);t.texStorage2D(i.TEXTURE_2D,He,ae,ce.width,ce.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,L,ne)}else t.texImage2D(i.TEXTURE_2D,0,ae,xe,L,ne);R(M)&&M.mipmapsAutoUpdate===!0&&y(de),ye.__version=ge.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Zt(w,M,X){if(M.image.length!==6)return;let de=ct(w,M),q=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+X);let ge=n.get(q);if(q.version!==ge.__version||de===!0){t.activeTexture(i.TEXTURE0+X);let ye=at.getPrimaries(at.workingColorSpace),se=M.colorSpace===Vi?null:at.getPrimaries(M.colorSpace),ne=M.colorSpace===Vi||ye===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let xe=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,ae=[];for(let Te=0;Te<6;Te++)!xe&&!L?ae[Te]=v(M.image[Te],!0,s.maxCubemapSize):ae[Te]=L?M.image[Te].image:M.image[Te],ae[Te]=Ae(M,ae[Te]);let Q=ae[0],_e=r.convert(M.format,M.colorSpace),fe=r.convert(M.type),Me=T(M.internalFormat,_e,fe,M.normalized,M.colorSpace),ve=M.isVideoTexture!==!0,He=ge.__version===void 0||de===!0,ce=q.dataReady,Fe=b(M,Q);dt(i.TEXTURE_CUBE_MAP,M);let Pe;if(M.isDepthTexture){if(Me=x(M.format===Gi,M.type),He)if(ve)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Me,Q.width,Q.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Me,Q.width,Q.height,0,_e,fe,null)}else if(xe){ve&&He&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,Me,Q.width,Q.height);for(let Te=0;Te<6;Te++){Pe=ae[Te].mipmaps;for(let ft=0;ft<Pe.length;ft++){let Rt=Pe[ft];M.format!==si?_e!==null?ve?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft,0,0,Rt.width,Rt.height,_e,Rt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft,Me,Rt.width,Rt.height,0,Rt.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ve?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft,0,0,Rt.width,Rt.height,_e,fe,Rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft,Me,Rt.width,Rt.height,0,_e,fe,Rt.data)}}}else{if(Pe=M.mipmaps,ve&&He){Pe.length>0&&Fe++;let Te=Ye(ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,Me,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(L){ve?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ae[Te].width,ae[Te].height,_e,fe,ae[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Me,ae[Te].width,ae[Te].height,0,_e,fe,ae[Te].data);for(let ft=0;ft<Pe.length;ft++){let It=Pe[ft].image[Te].image;ve?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft+1,0,0,It.width,It.height,_e,fe,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft+1,Me,It.width,It.height,0,_e,fe,It.data)}}else{ve?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,_e,fe,ae[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Me,_e,fe,ae[Te]);for(let ft=0;ft<Pe.length;ft++){let Rt=Pe[ft];ve?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft+1,0,0,_e,fe,Rt.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ft+1,Me,_e,fe,Rt.image[Te])}}}R(M)&&M.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ge.__version=q.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function pt(w,M,X,de,q,ge){let ye=r.convert(X.format,X.colorSpace),se=r.convert(X.type),ne=T(X.internalFormat,ye,se,X.normalized,X.colorSpace),xe=n.get(M),L=n.get(X);if(L.__renderTarget=M,!xe.__hasExternalTextures){let ae=Math.max(1,M.width>>ge),Q=Math.max(1,M.height>>ge);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ge,ne,ae,Q,M.depth,0,ye,se,null):t.texImage2D(q,ge,ne,ae,Q,0,ye,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,q,L.__webglTexture,0,Tt(M)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,q,L.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function vn(w,M,X){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){let de=M.depthTexture,q=de&&de.isDepthTexture?de.type:null,ge=x(M.stencilBuffer,q),ye=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(M),ge,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(M),ge,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ge,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,w)}else{let de=M.textures;for(let q=0;q<de.length;q++){let ge=de[q],ye=r.convert(ge.format,ge.colorSpace),se=r.convert(ge.type),ne=T(ge.internalFormat,ye,se,ge.normalized,ge.colorSpace);me(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt(M),ne,M.width,M.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt(M),ne,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ne,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(w,M,X){let de=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(M.depthTexture);q.__renderTarget=M;let ge=de?M.depthTexture.image[0]:M.depthTexture.image;(!q.__webglTexture||ge.width!==M.width||ge.height!==M.height)&&(ge.width=M.width,ge.height=M.height,M.depthTexture.needsUpdate=!0),de?Ee(M.depthTexture,0):we(M.depthTexture,0);let ye=q.__webglTexture,se=Tt(M),ne=de?i.TEXTURE_CUBE_MAP_POSITIVE_X+X:i.TEXTURE_2D,xe=M.depthTexture.format===Gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ui)me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ne,ye,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,ne,ye,0);else if(M.depthTexture.format===Gi)me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ne,ye,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,xe,ne,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function on(w){let M=n.get(w),X=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let de=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),de){let q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,de.removeEventListener("dispose",q)};de.addEventListener("dispose",q),M.__depthDisposeCallback=q}M.__boundDepthTexture=de}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(X)for(let de=0;de<6;de++)Ft(M.__webglFramebuffer[de],w,de);else w.texture.mipmaps.length>0?Ft(M.__webglFramebuffer[0],w,0):Ft(M.__webglFramebuffer,w,0);else if(X){M.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[de]),M.__webglDepthbuffer[de]===void 0)M.__webglDepthbuffer[de]=i.createRenderbuffer(),vn(M.__webglDepthbuffer[de],w,!1);else{let q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ge)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),vn(M.__webglDepthbuffer,w,!1);else{let q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function nn(w,M,X){let de=n.get(w);M!==void 0&&pt(de.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&on(w)}function Jt(w){let M=w.texture,X=n.get(w),de=n.get(M);w.addEventListener("dispose",O),D(w);let q=w.textures,ge=w.isWebGLCubeRenderTarget===!0,ye=q.length>1;if(ye||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=M.version,a.memory.textures++),ge){X.__webglFramebuffer=[];for(let se=0;se<6;se++)if(M.mipmaps.length>0){X.__webglFramebuffer[se]=[];for(let ne=0;ne<M.mipmaps.length;ne++)X.__webglFramebuffer[se][ne]=i.createFramebuffer()}else X.__webglFramebuffer[se]=i.createFramebuffer()}else{if(M.mipmaps.length>0){X.__webglFramebuffer=[];for(let se=0;se<M.mipmaps.length;se++)X.__webglFramebuffer[se]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ye)for(let se=0,ne=q.length;se<ne;se++){let xe=n.get(q[se]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&me(w)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let se=0;se<q.length;se++){let ne=q[se];X.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[se]);let xe=r.convert(ne.format,ne.colorSpace),L=r.convert(ne.type),ae=T(ne.internalFormat,xe,L,ne.normalized,ne.colorSpace,w.isXRRenderTarget===!0),Q=Tt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Q,ae,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,X.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),vn(X.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),dt(i.TEXTURE_CUBE_MAP,M);for(let se=0;se<6;se++)if(M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)pt(X.__webglFramebuffer[se][ne],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ne);else pt(X.__webglFramebuffer[se],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);R(M)?y(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(ye){for(let se=0,ne=q.length;se<ne;se++){let xe=q[se],L=n.get(xe),ae=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,L.__webglTexture),dt(ae,xe),pt(X.__webglFramebuffer,w,xe,i.COLOR_ATTACHMENT0+se,ae,0),R(xe)&&y(ae)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,de.__webglTexture),dt(se,M),M.mipmaps.length>0)for(let ne=0;ne<M.mipmaps.length;ne++)pt(X.__webglFramebuffer[ne],w,M,i.COLOR_ATTACHMENT0,se,ne);else pt(X.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,se,0);R(M)?y(se):M.mipmaps.length>0&&i.texParameteri(se,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&on(w)}function z(w){let M=w.textures;for(let X=0,de=M.length;X<de;X++){let q=M[X];if(R(q)&&q.mipmapsAutoUpdate===!0){let ge=C(w),ye=n.get(q).__webglTexture;t.bindTexture(ge,ye),y(ge),t.unbindTexture()}}}let wt=[];function Je(w){if(w.samples>0){if(me(w)===!1){let M=w.textures,X=w.width,de=w.height,q=i.COLOR_BUFFER_BIT,ge=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(w),se=M.length>1;if(se)for(let xe=0;xe<M.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);let L=n.get(M[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,X,de,0,0,X,de,q,i.NEAREST),l===!0&&(wt.length=0,wt.push(i.COLOR_ATTACHMENT0+xe),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&wt.push(ge),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let xe=0;xe<M.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,ye.__webglColorRenderbuffer[xe]);let L=n.get(M[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Tt(w){return Math.min(s.maxSamples,w.samples)}function me(w){let M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Vt(w){let M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function Ae(w,M){let X=w.colorSpace,de=w.format,q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||X!==Ur&&X!==Vi&&(at.getTransfer(X)===xt?(de!==si||q!==Cn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",X)),M}function Ye(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Xe,this.resetTextureUnits=j,this.getTextureUnits=le,this.setTextureUnits=Le,this.setTexture2D=we,this.setTexture2DArray=De,this.setTexture3D=Be,this.setTextureCube=Ee,this.rebindTextures=nn,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=on,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=me,this.dispose=J}function i_(i,e){function t(n,s=Vi){let r,a=at.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===hr)return i.UNSIGNED_SHORT;if(n===Vo)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===Vn)return i.FLOAT;if(n===ii)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===qc)return i.RGB;if(n===si)return i.RGBA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===ur)return i.RED;if(n===Xo)return i.RED_INTEGER;if(n===cs)return i.RG;if(n===qo)return i.RG_INTEGER;if(n===Yo)return i.RGBA_INTEGER;if(n===da||n===fa||n===pa||n===ma)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$o||n===Zo||n===Jo||n===Ko)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===$o)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jo||n===Qo||n===el||n===tl||n===nl||n===ga||n===il)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===jo||n===Qo)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===tl)return r.COMPRESSED_R11_EAC;if(n===nl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ga)return r.COMPRESSED_RG11_EAC;if(n===il)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===xl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ll)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===fl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ml)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_l||n===vl||n===yl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_l)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ml||n===Sl||n===xa||n===bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ml)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r_=`
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

}`,gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new dn({vertexShader:s_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends fi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,m=null,f=null,h=null,d=null,_=typeof XRWebGLBinding<"u",g=new gh,p={},v=t.getContextAttributes(),R=null,y=null,C=[],T=[],x=new et,b=null,D=null,I=new xn;I.viewport=new Ut;let k=new xn;k.viewport=new Ut;let O=[I,k],$=new Oo,N=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let we=C[ie];return we===void 0&&(we=new rr,C[ie]=we),we.getTargetRaySpace()},this.getControllerGrip=function(ie){let we=C[ie];return we===void 0&&(we=new rr,C[ie]=we),we.getGripSpace()},this.getHand=function(ie){let we=C[ie];return we===void 0&&(we=new rr,C[ie]=we),we.getHandSpace()};function te(ie){let we=T.indexOf(ie.inputSource);if(we===-1)return;let De=C[we];De!==void 0&&(De.update(ie.inputSource,ie.frame,c||a),De.dispatchEvent({type:ie.type,data:ie.inputSource}))}function B(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",oe);for(let ie=0;ie<C.length;ie++){let we=T[ie];we!==null&&(T[ie]=null,C[ie].disconnect(we))}N=null,J=null,g.reset();for(let ie in p)delete p[ie];if(e.setRenderTarget(R),h=null,f=null,m=null,s=null,y=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),D!==null){let ie=D.camera;ie.fov=D.fov,ie.zoom=D.zoom,ie.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return m===null&&_&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",B),s.addEventListener("inputsourceschange",oe),v.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Be=null,Ee=null;v.depth&&(Ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,De=v.stencil?Gi:Ui,Be=v.stencil?Is:ni);let qe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};m=this.getBinding(),f=m.createProjectionLayer(qe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Ln(f.textureWidth,f.textureHeight,{format:si,type:Cn,depthTexture:new Bi(f.textureWidth,f.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let De={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,De),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Ln(h.framebufferWidth,h.framebufferHeight,{format:si,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(ie){for(let we=0;we<ie.removed.length;we++){let De=ie.removed[we],Be=T.indexOf(De);Be>=0&&(T[Be]=null,C[Be].disconnect(De))}for(let we=0;we<ie.added.length;we++){let De=ie.added[we],Be=T.indexOf(De);if(Be===-1){for(let qe=0;qe<C.length;qe++)if(qe>=T.length){T.push(De),Be=qe;break}else if(T[qe]===null){T[qe]=De,Be=qe;break}if(Be===-1)break}let Ee=C[Be];Ee&&Ee.connect(De)}}function G(ie,we){we===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(we.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let we=ie.near,De=ie.far;g.texture!==null&&(g.depthNear>0&&(we=g.depthNear),g.depthFar>0&&(De=g.depthFar)),$.near=k.near=I.near=we,$.far=k.far=I.far=De,(N!==$.near||J!==$.far)&&(s.updateRenderState({depthNear:$.near,depthFar:$.far}),N=$.near,J=$.far),$.layers.mask=ie.layers.mask|6,I.layers.mask=$.layers.mask&-5,k.layers.mask=$.layers.mask&-3;let Be=ie.parent,Ee=$.cameras;G($,Be);for(let qe=0;qe<Ee.length;qe++)G(Ee[qe],Be);$.projectionMatrix.copy(I.projectionMatrix),$.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&ie.isPerspectiveCamera&&(D={camera:ie,fov:ie.fov,zoom:ie.zoom}),j(ie,$,Be)};function j(ie,we,De){De===null?ie.matrix.copy(we.matrixWorld):(ie.matrix.copy(De.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(we.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(we.projectionMatrix),ie.projectionMatrixInverse.copy(we.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=_o*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ie)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh($)},this.getCameraTexture=function(ie){return p[ie]};let le=null;function Le(ie,we){if(u=we.getViewerPose(c||a),d=we,u!==null){let De=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Be=!1;De.length!==$.cameras.length&&($.cameras.length=0,Be=!0);for(let ze=0;ze<De.length;ze++){let dt=De[ze],ct=null;if(h!==null)ct=h.getViewport(dt);else{let Gt=m.getViewSubImage(f,dt);ct=Gt.viewport,ze===0&&(e.setRenderTargetTextures(y,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(y))}let tt=O[ze];tt===void 0&&(tt=new xn,tt.layers.enable(ze),tt.viewport=new Ut,O[ze]=tt),tt.matrix.fromArray(dt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(dt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ct.x,ct.y,ct.width,ct.height),ze===0&&($.matrix.copy(tt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Be===!0&&$.cameras.push(tt)}let Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){m=n.getBinding();let ze=m.getDepthInformation(De[0]);ze&&ze.isValid&&ze.texture&&g.init(ze,s.renderState)}if(Ee&&Ee.includes("camera-access")&&_){e.state.unbindTexture(),m=n.getBinding();for(let ze=0;ze<De.length;ze++){let dt=De[ze].camera;if(dt){let ct=p[dt];ct||(ct=new Zr,p[dt]=ct);let tt=m.getCameraImage(dt);ct.sourceTexture=tt}}}}for(let De=0;De<C.length;De++){let Be=T[De],Ee=C[De];Be!==null&&Ee!==void 0&&Ee.update(Be,we,c||a)}le&&le(ie,we),we.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:we}),d=null}let Xe=new Td;Xe.setAnimationLoop(Le),this.setAnimationLoop=function(ie){le=ie},this.dispose=function(){}}},a_=new ht,Ud=new Ke;Ud.set(-1,0,0,0,1,0,0,0,1);function o_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Qc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,v,R,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),m(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),d(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,v,R):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===fn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===fn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),R=v.envMap,y=v.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ud),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=R*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function m(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,v){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function d(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function l_(i,e,t,n){let s={},r={};function a(v,R){let y=R.program;n.uniformBlockBinding(v,y,s[v.id])}function o(v,R){let y=s[v.id];y===void 0&&(d(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",g));let C=R.program;n.updateUBOMapping(v,C);let T=e.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let R=i.createBuffer(),y=v.__size,C=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,y,C),i.bindBuffer(i.UNIFORM_BUFFER,null),R}function c(v){let R=s[v.id],y=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,R);for(let T=0,x=y.length;T<x;T++){let b=y[T];if(Array.isArray(b))for(let D=0,I=b.length;D<I;D++)u(b[D],T,D,C);else u(b,T,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(v,R,y,C){if(f(v,R,y,C)===!0){let T=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let D=0;D<x.length;D++){let I=x[D],k=_(I,!0);m(I,v.__data,b),b+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else m(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,v.__data)}}function m(v,R,y){typeof v=="number"||typeof v=="boolean"?R[y]=v:v.isMatrix3?(R[y]=v.elements[0],R[y+1]=v.elements[1],R[y+2]=v.elements[2],R[y+3]=0,R[y+4]=v.elements[3],R[y+5]=v.elements[4],R[y+6]=v.elements[5],R[y+7]=0,R[y+8]=v.elements[6],R[y+9]=v.elements[7],R[y+10]=v.elements[8],R[y+11]=0):ArrayBuffer.isView(v)?R.set(v.subarray(0,R.length-y),y):v.toArray(R,y)}function f(v,R,y,C){let T=v.value,x=R+"_"+y;if(Array.isArray(T)){C[x]===void 0&&(C[x]=[]);let b=C[x],D=!1;for(let I=0;I<T.length;I++)h(T[I],b,I)===!0&&(D=!0);return D}return h(T,C,x)}function h(v,R,y){if(R[y]===void 0)return typeof v=="number"||typeof v=="boolean"?R[y]=v:ArrayBuffer.isView(v)?R[y]=v.slice():R[y]=v.clone(),!0;{let C=R[y];if(typeof v=="number"||typeof v=="boolean"){if(C!==v)return R[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(C.equals(v)===!1)return C.copy(v),!0}}return!1}function d(v){let R=v.uniforms,y=0,C=16;for(let x=0,b=R.length;x<b;x++){let D=Array.isArray(R[x])?R[x]:[R[x]];for(let I=0,k=D.length;I<k;I++){let O=D[I],$=Array.isArray(O.value)?O.value:[O.value],N=Array.isArray(R[x])||Array.isArray(O.value),J=y;for(let B=0,oe=$.length;B<oe;B++){let G=$[B],j=_(G,N),le=y%C,Le=le%j.boundary,Xe=le+Le;y+=Le,Xe!==0&&C-Xe<j.storage&&(y+=C-Xe),B===0&&(J=y),y+=j.storage}let te=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new te((y-J)/Float32Array.BYTES_PER_ELEMENT),O.__offset=J}}let T=y%C;return T>0&&(y+=C-T),v.__size=y,v.__cache={},this}function _(v,R){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):We("WebGLRenderer: Unsupported uniform value type.",v),R===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function g(v){let R=v.target;R.removeEventListener("dispose",g),i.deleteBuffer(s[R.id]),delete s[R.id],delete r[R.id]}function p(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:p}}var c_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),vi=null;function h_(){return vi===null&&(vi=new bs(c_,16,16,cs,ii),vi.name="DFG_LUT",vi.minFilter=yn,vi.magFilter=yn,vi.wrapS=di,vi.wrapT=di,vi.generateMipmaps=!1,vi.needsUpdate=!0),vi}var Cl=class{constructor(e={}){let{canvas:t=Zu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Cn}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;let _=h,g=new Set([Yo,qo,Xo]),p=new Set([Cn,ni,hr,Is,Ho,Wo]),v=new Uint32Array(4),R=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},C=null,T=null,x=[],b=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,k=!1,O=null,$=null,N=null,J=null;this._outputColorSpace=gn;let te=0,B=0,oe=null,G=-1,j=null,le=new Ut,Le=new Ut,Xe=null,ie=new ke(0),we=0,De=t.width,Be=t.height,Ee=1,qe=null,Nt=null,ze=new Ut(0,0,De,Be),dt=new Ut(0,0,De,Be),ct=!1,tt=new is,Gt=new So,Dt=!1,Zt=!1,pt=new ht,vn=new V,Ft=new Ut,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nn=!1;function Jt(){return oe===null?Ee:1}let z=n;function wt(S,U){return t.getContext(S,U)}let Je,Tt,me,Vt,Ae,Ye,w,M,X,de,q,ge,ye,se,ne,xe,L,ae,Q,_e,fe,Me,ve;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",Te,!1),z===null){let U="webgl2";if(z=wt(U,S),z===null)throw wt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(S){throw t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Ze("WebGLRenderer: "+S.message),S}function He(){Je=new Mg(z),Je.init(),fe=new i_(z,Je),Tt=new hg(z,Je,e,fe),me=new t_(z,Je),Tt.reversedDepthBuffer&&f&&me.buffers.depth.setReversed(!0),$=z.createFramebuffer(),N=z.createFramebuffer(),J=z.createFramebuffer(),Vt=new wg(z),Ae=new Gx,Ye=new n_(z,Je,me,Ae,Tt,fe,Vt),w=new yg(I),M=new Ep(z),Me=new lg(z,M),X=new Sg(z,M,Vt,Me),de=new Eg(z,X,M,Me,Vt),ae=new Tg(z,Tt,Ye),ne=new ug(Ae),q=new zx(I,w,Je,Tt,Me,ne),ge=new o_(I,Ae),ye=new Hx,se=new Zx(Je),L=new og(I,w,me,de,d,l),xe=new e_(I,de,Tt),ve=new l_(z,Vt,Tt,me),Q=new cg(z,Je,Vt),_e=new bg(z,Je,Vt),Vt.programs=q.programs,I.capabilities=Tt,I.extensions=Je,I.properties=Ae,I.renderLists=ye,I.shadowMap=xe,I.state=me,I.info=Vt}_!==Cn&&(D=new Cg(_,t.width,t.height,o,s,r));let ce=new xh(I,z);this.xr=ce,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let S=Je.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Je.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(S){S!==void 0&&(Ee=S,this.setSize(De,Be,!1))},this.getSize=function(S){return S.set(De,Be)},this.setSize=function(S,U,K=!0){if(ce.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}De=S,Be=U,t.width=Math.floor(S*Ee),t.height=Math.floor(U*Ee),K===!0&&(t.style.width=S+"px",t.style.height=U+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(De*Ee,Be*Ee).floor()},this.setDrawingBufferSize=function(S,U,K){De=S,Be=U,Ee=K,t.width=Math.floor(S*K),t.height=Math.floor(U*K),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(_===Cn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(le)},this.getViewport=function(S){return S.copy(ze)},this.setViewport=function(S,U,K,H){S.isVector4?ze.set(S.x,S.y,S.z,S.w):ze.set(S,U,K,H),me.viewport(le.copy(ze).multiplyScalar(Jt()).round())},this.getScissor=function(S){return S.copy(dt)},this.setScissor=function(S,U,K,H){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,U,K,H),me.scissor(Le.copy(dt).multiplyScalar(Jt()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(S){me.setScissorTest(ct=S)},this.setOpaqueSort=function(S){qe=S},this.setTransparentSort=function(S){Nt=S},this.getClearColor=function(S){return S.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,K=!0){let H=0;if(S){let W=!1;if(oe!==null){let be=oe.texture.format;W=g.has(be)}if(W){let be=oe.texture.type,he=p.has(be),Se=L.getClearColor(),Re=L.getClearAlpha(),Ue=Se.r,$e=Se.g,it=Se.b;he?(v[0]=Ue,v[1]=$e,v[2]=it,v[3]=Re,z.clearBufferuiv(z.COLOR,0,v)):(R[0]=Ue,R[1]=$e,R[2]=it,R[3]=Re,z.clearBufferiv(z.COLOR,0,R))}else H|=z.COLOR_BUFFER_BIT}U&&(H|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),L.dispose(),ye.dispose(),se.dispose(),Ye.dispose(),Ae.dispose(),w.dispose(),de.dispose(),X.dispose(),Me.dispose(),ve.dispose(),q.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",$n),ce.removeEventListener("sessionend",Sr),Ai.stop()};function Fe(S){S.preventDefault(),Kc("WebGLRenderer: Context Lost."),k=!0}function Pe(){Kc("WebGLRenderer: Context Restored."),k=!1;let S=Vt.autoReset,U=xe.enabled,K=xe.autoUpdate,H=xe.needsUpdate,W=xe.type;He(),Vt.autoReset=S,xe.enabled=U,xe.autoUpdate=K,xe.needsUpdate=H,xe.type=W}function Te(S){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ft(S){let U=S.target;U.removeEventListener("dispose",ft),Rt(U)}function Rt(S){It(S),Ae.remove(S)}function It(S){let U=Ae.get(S).programs;U!==void 0&&(U.forEach(function(K){q.releaseProgram(K)}),S.isShaderMaterial&&q.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,K,H,W,be){U===null&&(U=on);let he=W.isMesh&&W.matrixWorld.determinantAffine()<0,Se=gs(S,U,K,H,W);me.setMaterial(H,he);let Re=K.index,Ue=1;if(H.wireframe===!0){if(Re=X.getWireframeAttribute(K),Re===void 0)return;Ue=2}let $e=K.drawRange,it=K.attributes.position,Ne=$e.start*Ue,je=($e.start+$e.count)*Ue;be!==null&&(Ne=Math.max(Ne,be.start*Ue),je=Math.min(je,(be.start+be.count)*Ue)),Re!==null?(Ne=Math.max(Ne,0),je=Math.min(je,Re.count)):it!=null&&(Ne=Math.max(Ne,0),je=Math.min(je,it.count));let E=je-Ne;if(E<0||E===1/0)return;Me.setup(W,H,Se,K,Re);let P,A=Q;if(Re!==null&&(P=M.get(Re),A=_e,A.setIndex(P)),W.isMesh)H.wireframe===!0?(me.setLineWidth(H.wireframeLinewidth*Jt()),A.setMode(z.LINES)):A.setMode(z.TRIANGLES);else if(W.isLine){let ee=H.linewidth;ee===void 0&&(ee=1),me.setLineWidth(ee*Jt()),W.isLineSegments?A.setMode(z.LINES):W.isLineLoop?A.setMode(z.LINE_LOOP):A.setMode(z.LINE_STRIP)}else W.isPoints?A.setMode(z.POINTS):W.isSprite&&A.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(Je.get("WEBGL_multi_draw"))A.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ee=W._multiDrawStarts,Z=W._multiDrawCounts,re=W._multiDrawCount,pe=Re?M.get(Re).bytesPerElement:1,Ce=Ae.get(H).currentProgram.getUniforms();for(let ue=0;ue<re;ue++)Ce.setValue(z,"_gl_DrawID",ue),A.render(ee[ue]/pe,Z[ue])}else if(W.isInstancedMesh)A.renderInstances(Ne,E,W.count);else if(K.isInstancedBufferGeometry){let ee=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Z=Math.min(K.instanceCount,ee);A.renderInstances(Ne,E,Z)}else A.render(Ne,E)};function Yn(S,U,K,H){O!==null&&S.isNodeMaterial&&O.setObject(H,S),Dt===!0&&ne.setState(S,K,!1),S.transparent===!0&&S.side===an&&S.forceSinglePass===!1?(S.side=fn,S.needsUpdate=!0,Tn(S,U,H),S.side=os,S.needsUpdate=!0,Tn(S,U,H),S.side=an):Tn(S,U,H)}this.compile=function(S,U,K=null){K===null&&(K=S),O!==null&&O.renderStart(S,U,K),T=se.get(K),T.init(U),b.push(T),K.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),S!==K&&S.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),Zt=this.localClippingEnabled,Dt=ne.init(this.clippingPlanes,Zt),Dt===!0&&ne.setGlobalState(this.clippingPlanes,U),O!==null&&xe.render(T.state.shadowsArray,K,U);let H=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let be=W.material;if(be)if(Array.isArray(be))for(let he=0;he<be.length;he++){let Se=be[he];Yn(Se,K,U,W),H.add(Se)}else Yn(be,K,U,W),H.add(be)}),T=b.pop(),O!==null&&O.renderEnd(),H},this.compileAsync=function(S,U,K=null){let H=this.compile(S,U,K);return new Promise(W=>{function be(){if(H.forEach(function(he){let Re=Ae.get(he).currentProgram;(Re===void 0||Re.isReady())&&H.delete(he)}),H.size===0){W(S);return}setTimeout(be,10)}Je.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let ps=null;function ln(S){ps&&ps(S)}function $n(){Ai.stop()}function Sr(){Ai.start()}let Ai=new Td;Ai.setAnimationLoop(ln),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(S){ps=S,ce.setAnimationLoop(S),S===null?Ai.stop():Ai.start()},ce.addEventListener("sessionstart",$n),ce.addEventListener("sessionend",Sr),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;O!==null&&O.renderStart(S,U);let K=ce.enabled===!0&&ce.isPresenting===!0,H=D!==null&&(oe===null||K)&&D.begin(I,oe);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(U),U=ce.getCamera()),S.isScene===!0&&S.onBeforeRender(I,S,U,oe),T=se.get(S,b.length),T.init(U),T.state.textureUnits=Ye.getTextureUnits(),b.push(T),pt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Gt.setFromArrayCamera(U):tt.setFromProjectionMatrix(pt,kn,U.reversedDepth),Zt=this.localClippingEnabled,Dt=ne.init(this.clippingPlanes,Zt),C=ye.get(S,x.length),C.init(),x.push(C),this.info.render.frame++,ce.enabled===!0&&ce.isPresenting===!0){let he=I.xr.getDepthSensingMesh();he!==null&&br(he,U,-1/0,I.sortObjects)}br(S,U,0,I.sortObjects),C.finish(),O!==null&&O.updateLights(T.state.lightsArray),I.sortObjects===!0&&C.sort(qe,Nt),nn=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,nn&&L.addToRenderList(C,S),this.info.autoReset===!0&&this.info.reset(),Dt===!0&&ne.beginShadows();let W=T.state.shadowsArray;if(xe.render(W,S,U),Dt===!0&&ne.endShadows(),(H&&D.hasRenderPass())===!1){let he=C.opaque,Se=C.transmissive;if(T.setupLights(),U.isArrayCamera){let Re=U.cameras;if(Se.length>0)for(let Ue=0,$e=Re.length;Ue<$e;Ue++){let it=Re[Ue];Ua(he,Se,S,it)}nn&&L.render(S);for(let Ue=0,$e=Re.length;Ue<$e;Ue++){let it=Re[Ue];Yi(C,S,it,it.viewport)}}else Se.length>0&&Ua(he,Se,S,U),nn&&L.render(S),Yi(C,S,U)}oe!==null&&B===0&&(Ye.updateMultisampleRenderTarget(oe),Ye.updateRenderTargetMipmap(oe)),H&&D.end(I),S.isScene===!0&&S.onAfterRender(I,S,U),Me.resetDefaultState(),G=-1,j=null,b.pop(),b.length>0?(T=b[b.length-1],Ye.setTextureUnits(T.state.textureUnits),Dt===!0&&ne.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?C=x[x.length-1]:C=null,O!==null&&O.renderEnd()};function br(S,U,K,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){let he=U.isArrayCamera?Gt:tt;if(!S.frustumCulled||S.intersectsFrustum(he)){H&&Ft.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pt);let Se=de.update(S),Re=S.material;Re.visible&&C.push(S,Se,Re,K,Ft.z,null,U)}}else if(S.isMesh||S.isLine||S.isPoints){let he=U.isArrayCamera?Gt:tt;if(!S.frustumCulled||S.intersectsFrustum(he)){let Se=de.update(S),Re=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ft.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ft.copy(Se.boundingSphere.center)),Ft.applyMatrix4(S.matrixWorld).applyMatrix4(pt)),Array.isArray(Re)){let Ue=Se.groups;for(let $e=0,it=Ue.length;$e<it;$e++){let Ne=Ue[$e],je=Re[Ne.materialIndex];je&&je.visible&&C.push(S,Se,je,K,Ft.z,Ne,U)}}else Re.visible&&C.push(S,Se,Re,K,Ft.z,null,U)}}}let be=S.children;for(let he=0,Se=be.length;he<Se;he++)br(be[he],U,K,H)}function Yi(S,U,K,H){let{opaque:W,transmissive:be,transparent:he}=S;T.setupLightsView(K),Dt===!0&&ne.setGlobalState(I.clippingPlanes,K),H&&me.viewport(le.copy(H)),W.length>0&&ms(W,U,K),be.length>0&&ms(be,U,K),he.length>0&&ms(he,U,K),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Ua(S,U,K,H){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){let Ne=Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Ln(1,1,{generateMipmaps:!0,type:Ne?ii:Cn,minFilter:zi,samples:Math.max(4,Tt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let be=T.state.transmissionRenderTarget[H.id],he=H.viewport||le;be.setSize(he.z*I.transmissionResolutionScale,he.w*I.transmissionResolutionScale);let Se=I.getRenderTarget(),Re=I.getActiveCubeFace(),Ue=I.getActiveMipmapLevel();I.setRenderTarget(be),I.getClearColor(ie),we=I.getClearAlpha(),we<1&&I.setClearColor(16777215,.5),I.clear(),nn&&L.render(K);let $e=I.toneMapping;I.toneMapping=_i;let it=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),Dt===!0&&ne.setGlobalState(I.clippingPlanes,H),ms(S,K,H),Ye.updateMultisampleRenderTarget(be),Ye.updateRenderTargetMipmap(be),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let je=0,E=U.length;je<E;je++){let P=U[je],{object:A,geometry:ee,material:Z,group:re}=P;if(Z.side===an&&A.layers.test(H.layers)){let pe=Z.side;Z.side=fn,Z.needsUpdate=!0,mt(A,K,H,ee,Z,re),Z.side=pe,Z.needsUpdate=!0,Ne=!0}}Ne===!0&&(Ye.updateMultisampleRenderTarget(be),Ye.updateRenderTargetMipmap(be))}I.setRenderTarget(Se,Re,Ue),I.setClearColor(ie,we),it!==void 0&&(H.viewport=it),I.toneMapping=$e}function ms(S,U,K){let H=U.isScene===!0?U.overrideMaterial:null;for(let W=0,be=S.length;W<be;W++){let he=S[W],{object:Se,geometry:Re,group:Ue}=he,$e=he.material;$e.allowOverride===!0&&H!==null&&($e=H),Se.layers.test(K.layers)&&mt(Se,U,K,Re,$e,Ue)}}function mt(S,U,K,H,W,be){O!==null&&W.isNodeMaterial&&O.setObject(S,W),S.onBeforeRender(I,U,K,H,W,be),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(I,U,K,H,S,be),W.transparent===!0&&W.side===an&&W.forceSinglePass===!1?(W.side=fn,W.needsUpdate=!0,I.renderBufferDirect(K,U,H,W,S,be),W.side=os,W.needsUpdate=!0,I.renderBufferDirect(K,U,H,W,S,be),W.side=an):I.renderBufferDirect(K,U,H,W,S,be),S.onAfterRender(I,U,K,H,W,be)}function ci(S){let U=0;for(let K of S)K.texture!==null&&U++;return U}function Tn(S,U,K){U.isScene!==!0&&(U=on);let H=Ae.get(S),W=T.state.lights,be=T.state.shadowsArray,he=W.state.version,Se=q.getParameters(S,W.state,be,U,K,T.state.lightProbeGridArray),Re=q.getProgramCacheKey(Se),Ue=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let $e=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=w.get(S.envMap||H.environment,$e),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Ue===void 0&&(S.addEventListener("dispose",ft),Ue=new Map,H.programs=Ue,H.programVariants=new Map);let it=Ue.get(Re);if(it!==void 0){if(H.currentProgram===it&&H.lightsStateVersion===he)return Ci(S,Se),it}else Se.uniforms=q.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,K,Se),S.onBeforeCompile(Se,I),it=q.acquireProgram(Se,Re),Ue.set(Re,it),H.uniforms=Se.uniforms;let Ne=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=ne.uniform),Ci(S,Se),H.needsLights=hi(S),H.lightsStateVersion=he,H.needsLights&&(Ne.ambientLightColor.value=W.state.ambient,Ne.lightProbe.value=W.state.probe,Ne.sunLights.value=W.state.sun,Ne.sunLightShadows.value=W.state.sunShadow,Ne.directionalLights.value=W.state.directional,Ne.directionalLightShadows.value=W.state.directionalShadow,Ne.spotLights.value=W.state.spot,Ne.spotLightShadows.value=W.state.spotShadow,Ne.rectAreaLights.value=W.state.rectArea,Ne.ltc_1.value=W.state.rectAreaLTC1,Ne.ltc_2.value=W.state.rectAreaLTC2,Ne.pointLights.value=W.state.point,Ne.pointLightShadows.value=W.state.pointShadow,Ne.hemisphereLights.value=W.state.hemi,Ne.sunShadowMatrix.value=W.state.sunShadowMatrix,Ne.sunShadowCascade.value=W.state.sunShadowCascade,Ne.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ne.spotLightMatrix.value=W.state.spotLightMatrix,Ne.spotLightMap.value=W.state.spotLightMap,Ne.pointShadowMatrix.value=W.state.pointShadowMatrix),H.numLightProbeGrids=ci(T.state.lightProbeGridArray),H.currentProgram=it,H.uniformsList=null,it}function wr(S,U,K,H,W){let be=Ae.get(S),he=be.currentProgram.id+","+H+","+W,Se=be.programVariants.get(he);return Se===void 0?(Se=Tn(S,U,K),be.programVariants.set(he,Se)):(be.currentProgram=Se,be.uniformsList=null,be.outputColorSpace=H,be.toneMapping=W),Se}function En(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=dr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Ci(S,U){let K=Ae.get(S);K.outputColorSpace=U.outputColorSpace,K.batching=U.batching,K.batchingColor=U.batchingColor,K.instancing=U.instancing,K.instancingColor=U.instancingColor,K.instancingMorph=U.instancingMorph,K.skinning=U.skinning,K.morphTargets=U.morphTargets,K.morphNormals=U.morphNormals,K.morphColors=U.morphColors,K.morphTargetsCount=U.morphTargetsCount,K.numClippingPlanes=U.numClippingPlanes,K.numIntersection=U.numClipIntersection,K.vertexAlphas=U.vertexAlphas,K.vertexTangents=U.vertexTangents,K.toneMapping=U.toneMapping}function gs(S,U,K,H,W){U.isScene!==!0&&(U=on),Ye.resetTextureUnits();let be=U.fog,he=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,Se=oe===null?I.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:at.workingColorSpace,Re=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ue=w.get(H.envMap||he,Re),$e=H.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,it=!!K.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!K.morphAttributes.position,je=!!K.morphAttributes.normal,E=!!K.morphAttributes.color,P=_i;H.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(P=I.toneMapping);let A=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ee=A!==void 0?A.length:0,Z=Ae.get(H),re=T.state.lights;if(Dt===!0&&(Zt===!0||S!==j)){let At=S===j&&H.id===G;ne.setState(H,S,At)}let pe=!1,Ce=!1;H.version===Z.__version?Z.needsLights&&Z.lightsStateVersion!==re.state.version||W.isBatchedMesh&&Z.batching===!1||!W.isBatchedMesh&&Z.batching===!0||W.isBatchedMesh&&Z.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Z.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Z.instancing===!1||!W.isInstancedMesh&&Z.instancing===!0||W.isSkinnedMesh&&Z.skinning===!1||!W.isSkinnedMesh&&Z.skinning===!0||W.isInstancedMesh&&Z.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Z.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Z.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Z.instancingMorph===!1&&W.morphTexture!==null||Z.envMap!==Ue||H.fog===!0&&Z.fog!==be||Z.numClippingPlanes!==void 0&&(Z.numClippingPlanes!==ne.numPlanes||Z.numIntersection!==ne.numIntersection)||Z.vertexAlphas!==$e||Z.vertexTangents!==it||Z.morphTargets!==Ne||Z.morphNormals!==je||Z.morphColors!==E||Z.morphTargetsCount!==ee||Z.numLightProbeGrids!==ci(T.state.lightProbeGridArray)?pe=!0:(Z.outputColorSpace!==Se||Z.toneMapping!==P)&&(Ce=!0):(pe=!0,Z.__version=H.version);let ue=Z.currentProgram;(pe===!0||Ce===!0)&&(ue=Ce===!0?wr(H,U,W,Se,P):Tn(H,U,W),O&&H.isNodeMaterial&&O.onUpdateProgram(H,ue,Z));let Ge=!1,vt=!1,Ht=!1,Qe=ue.getUniforms(),Ot=Z.uniforms;if(me.useProgram(ue.program)&&(Ge=!0,vt=!0,Ht=!0),H.id!==G&&(G=H.id,vt=!0),Ge||j!==S){me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Qe.setValue(z,"projectionMatrix",S.projectionMatrix),Qe.setValue(z,"viewMatrix",S.matrixWorldInverse);let yt=Qe.map.cameraPosition;yt!==void 0&&yt.setValue(z,vn.setFromMatrixPosition(S.matrixWorld)),Tt.logarithmicDepthBuffer&&Qe.setValue(z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Qe.setValue(z,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,vt=!0,Ht=!0)}if(Z.needsLights&&(re.state.sunShadowMap.length>0&&Qe.setValue(z,"sunShadowMap",re.state.sunShadowMap,Ye),re.state.directionalShadowMap.length>0&&Qe.setValue(z,"directionalShadowMap",re.state.directionalShadowMap,Ye),re.state.spotShadowMap.length>0&&Qe.setValue(z,"spotShadowMap",re.state.spotShadowMap,Ye),re.state.pointShadowMap.length>0&&Qe.setValue(z,"pointShadowMap",re.state.pointShadowMap,Ye)),W.isSkinnedMesh){Qe.setOptional(z,W,"bindMatrix"),Qe.setOptional(z,W,"bindMatrixInverse");let At=W.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),Qe.setValue(z,"boneTexture",At.boneTexture,Ye))}W.isBatchedMesh&&(Qe.setOptional(z,W,"batchingTexture"),Qe.setValue(z,"batchingTexture",W._matricesTexture,Ye),Qe.setOptional(z,W,"batchingIdTexture"),Qe.setValue(z,"batchingIdTexture",W._indirectTexture,Ye),Qe.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&Qe.setValue(z,"batchingColorTexture",W._colorsTexture,Ye));let Et=K.morphAttributes;if((Et.position!==void 0||Et.normal!==void 0||Et.color!==void 0)&&ae.update(W,K,ue),(vt||Z.receiveShadow!==W.receiveShadow)&&(Z.receiveShadow=W.receiveShadow,Qe.setValue(z,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Ot.envMapIntensity.value=U.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=h_()),vt){if(Qe.setValue(z,"toneMappingExposure",I.toneMappingExposure),Z.needsLights&&Zn(Ot,Ht),be&&H.fog===!0&&ge.refreshFogUniforms(Ot,be),ge.refreshMaterialUniforms(Ot,H,Ee,Be,T.state.transmissionRenderTarget[S.id]),Z.needsLights&&Z.numLightProbeGrids>0){let At=y,yt=0;for(let Ct of T.state.lightProbeGridArray)Ct.texture!==null&&(At.textures[yt]=Ct.texture,At.min[yt]=Ct.boundingBox.min,At.max[yt]=Ct.boundingBox.max,At.resolution[yt]=Ct.resolution,yt++);for(let Ct in At)At[Ct].length=yt;Ot.probesSH.value=At.textures,Ot.probesMin.value=At.min,Ot.probesMax.value=At.max,Ot.probesResolution.value=At.resolution}dr.upload(z,En(Z),Ot,Ye)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(dr.upload(z,En(Z),Ot,Ye),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Qe.setValue(z,"center",W.center),Qe.setValue(z,"modelViewMatrix",W.modelViewMatrix),Qe.setValue(z,"normalMatrix",W.normalMatrix),Qe.setValue(z,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let At=H.uniformsGroups;for(let yt=0,Ct=At.length;yt<Ct;yt++){let Bs=At[yt];ve.update(Bs,ue),ve.bind(Bs,ue)}}return ue}function Zn(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function hi(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(S,U,K){let H=Ae.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ae.get(S.texture).__webglTexture=U,Ae.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:K,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let K=Ae.get(S);K.__webglFramebuffer=U,K.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,K=0){oe=S,te=U,B=K;let H=null,W=!1,be=!1;if(S){let Se=Ae.get(S);if(Se.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(z.FRAMEBUFFER,Se.__webglFramebuffer),le.copy(S.viewport),Le.copy(S.scissor),Xe=S.scissorTest,me.viewport(le),me.scissor(Le),me.setScissorTest(Xe),G=-1;return}else if(Se.__webglFramebuffer===void 0)Ye.setupRenderTarget(S);else if(Se.__hasExternalTextures)Ye.rebindTextures(S,Ae.get(S.texture).__webglTexture,Ae.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let $e=S.depthTexture;if(Se.__boundDepthTexture!==$e){if($e!==null&&Ae.has($e)&&(S.width!==$e.image.width||S.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(S)}}let Re=S.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(be=!0);let Ue=Ae.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?H=Ue[U][K]:H=Ue[U],W=!0):S.samples>0&&Ye.useMultisampledRTT(S)===!1?H=Ae.get(S).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[K]:H=Ue,le.copy(S.viewport),Le.copy(S.scissor),Xe=S.scissorTest}else le.copy(ze).multiplyScalar(Ee).floor(),Le.copy(dt).multiplyScalar(Ee).floor(),Xe=ct;if(K!==0&&(H=$),me.bindFramebuffer(z.FRAMEBUFFER,H)&&me.drawBuffers(S,H),me.viewport(le),me.scissor(Le),me.setScissorTest(Xe),W){let Se=Ae.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,K)}else if(be){let Se=U;for(let Re=0;Re<S.textures.length;Re++){let Ue=Ae.get(S.textures[Re]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Re,Ue.__webglTexture,K,Se)}}else if(S!==null&&K!==0){let Se=Ae.get(S.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Se.__webglTexture,K)}G=-1};function Os(S){let U=Ae.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=Tt.textureFormatReadable(S.format),U.__typeReadable=Tt.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,K,H,W,be,he,Se=0){if(!(S&&S.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(Re=Re[he],Array.isArray(Re)&&(Re=Re[0])),Re){me.bindFramebuffer(z.FRAMEBUFFER,Re);try{let Ue=S.textures[Se],$e=Ue.format,it=Ue.type;S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Se);let Ne=Os(Ue);if(Ne.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ne.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&K>=0&&K<=S.height-W&&z.readPixels(U,K,H,W,fe.convert($e),fe.convert(it),be)}finally{let Ue=oe!==null?Ae.get(oe).__webglFramebuffer:null;me.bindFramebuffer(z.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(S,U,K,H,W,be,he,Se=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&he!==void 0&&(Re=Re[he],Array.isArray(Re)&&(Re=Re[0])),Re)if(U>=0&&U<=S.width-H&&K>=0&&K<=S.height-W){me.bindFramebuffer(z.FRAMEBUFFER,Re);let Ue=S.textures[Se],$e=Ue.format,it=Ue.type;S.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Se);let Ne=Os(Ue);if(Ne.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ne.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,je),z.bufferData(z.PIXEL_PACK_BUFFER,be.byteLength,z.STREAM_READ),z.readPixels(U,K,H,W,fe.convert($e),fe.convert(it),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let E=oe!==null?Ae.get(oe).__webglFramebuffer:null;me.bindFramebuffer(z.FRAMEBUFFER,E);let P=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ku(z,P,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,je),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,be),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(je),z.deleteSync(P),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,K=0){let H=Math.pow(2,-K),W=Math.floor(S.image.width*H),be=Math.floor(S.image.height*H),he=U!==null?U.x:0,Se=U!==null?U.y:0;Ye.setTexture2D(S,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,he,Se,W,be),me.unbindTexture()},this.copyTextureToTexture=function(S,U,K=null,H=null,W=0,be=0){let he,Se,Re,Ue,$e,it,Ne,je,E,P=S.isCompressedTexture?S.mipmaps[be]:S.image;if(K!==null)he=K.max.x-K.min.x,Se=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,Ue=K.min.x,$e=K.min.y,it=K.isBox3?K.min.z:0;else{let Qe=Math.pow(2,-W);he=Math.floor(P.width*Qe),Se=Math.floor(P.height*Qe),S.isDataArrayTexture?Re=P.depth:S.isData3DTexture?Re=Math.floor(P.depth*Qe):Re=1,Ue=0,$e=0,it=0}H!==null?(Ne=H.x,je=H.y,E=H.z):(Ne=0,je=0,E=0);let A=fe.convert(U.format),ee=fe.convert(U.type),Z;U.isData3DTexture?(Ye.setTexture3D(U,0),Z=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ye.setTexture2DArray(U,0),Z=z.TEXTURE_2D_ARRAY):(Ye.setTexture2D(U,0),Z=z.TEXTURE_2D),me.activeTexture(z.TEXTURE0),me.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),me.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),me.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);let re=me.getParameter(z.UNPACK_ROW_LENGTH),pe=me.getParameter(z.UNPACK_IMAGE_HEIGHT),Ce=me.getParameter(z.UNPACK_SKIP_PIXELS),ue=me.getParameter(z.UNPACK_SKIP_ROWS),Ge=me.getParameter(z.UNPACK_SKIP_IMAGES);me.pixelStorei(z.UNPACK_ROW_LENGTH,P.width),me.pixelStorei(z.UNPACK_IMAGE_HEIGHT,P.height),me.pixelStorei(z.UNPACK_SKIP_PIXELS,Ue),me.pixelStorei(z.UNPACK_SKIP_ROWS,$e),me.pixelStorei(z.UNPACK_SKIP_IMAGES,it);let vt=S.isDataArrayTexture||S.isData3DTexture,Ht=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let Qe=Ae.get(S),Ot=Ae.get(U),Et=Ae.get(Qe.__renderTarget),At=Ae.get(Ot.__renderTarget);me.bindFramebuffer(z.READ_FRAMEBUFFER,Et.__webglFramebuffer),me.bindFramebuffer(z.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let yt=0;yt<Re;yt++)vt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ae.get(S).__webglTexture,W,it+yt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ae.get(U).__webglTexture,be,E+yt)),z.blitFramebuffer(Ue,$e,Ue+he,$e+Se,Ne,je,Ne+he,je+Se,z.DEPTH_BUFFER_BIT,z.NEAREST);me.bindFramebuffer(z.READ_FRAMEBUFFER,null),me.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||Ae.has(S)){let Qe=Ae.get(S),Ot=Ae.get(U);me.bindFramebuffer(z.READ_FRAMEBUFFER,N),me.bindFramebuffer(z.DRAW_FRAMEBUFFER,J);for(let Et=0;Et<Re;Et++)vt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Qe.__webglTexture,W,it+Et):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Qe.__webglTexture,W),Ht?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ot.__webglTexture,be,E+Et):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ot.__webglTexture,be),W!==0?z.blitFramebuffer(Ue,$e,Ue+he,$e+Se,Ne,je,Ne+he,je+Se,z.COLOR_BUFFER_BIT,z.NEAREST):Ht?z.copyTexSubImage3D(Z,be,Ne,je,E+Et,Ue,$e,he,Se):z.copyTexSubImage2D(Z,be,Ne,je,Ue,$e,he,Se);me.bindFramebuffer(z.READ_FRAMEBUFFER,null),me.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ht?S.isDataTexture||S.isData3DTexture?z.texSubImage3D(Z,be,Ne,je,E,he,Se,Re,A,ee,P.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Z,be,Ne,je,E,he,Se,Re,A,P.data):z.texSubImage3D(Z,be,Ne,je,E,he,Se,Re,A,ee,P):S.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,be,Ne,je,he,Se,A,ee,P.data):S.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,be,Ne,je,P.width,P.height,A,P.data):z.texSubImage2D(z.TEXTURE_2D,be,Ne,je,he,Se,A,ee,P);me.pixelStorei(z.UNPACK_ROW_LENGTH,re),me.pixelStorei(z.UNPACK_IMAGE_HEIGHT,pe),me.pixelStorei(z.UNPACK_SKIP_PIXELS,Ce),me.pixelStorei(z.UNPACK_SKIP_ROWS,ue),me.pixelStorei(z.UNPACK_SKIP_IMAGES,Ge),be===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&z.generateMipmap(Z),me.unbindTexture()},this.initRenderTarget=function(S){Ae.get(S).__webglFramebuffer===void 0&&Ye.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ye.setTextureCube(S,0):S.isData3DTexture?Ye.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ye.setTexture2DArray(S,0):Ye.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){te=0,B=0,oe=null,me.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var Rn=[{id:"mage",icon:"\u{1F52E}",label:"MAGE",color:11824127,range:22,every:1.55,dmg:8,aoe:1.9,desc:"fireballs (area)"},{id:"warrior",icon:"\u2694\uFE0F",label:"WARRIOR",color:16734794,range:2.6,every:.8,dmg:9,aoe:1.2,desc:"holds the gate"},{id:"archer",icon:"\u{1F3F9}",label:"ARCHER",color:5234943,range:25,every:.65,dmg:5,aoe:0,desc:"fast arrows, hits fliers"},{id:"healer",icon:"\u{1F49A}",label:"HEALER",color:6160282,range:18,every:1.3,dmg:3,aoe:0,desc:"heals + barrier"}],Lt=Object.fromEntries(Rn.map((i,e)=>[i.id,e])),Hn=[{id:"imp",hp:14,speed:3.4,dmg:1,r:.45,fly:!1,pts:2},{id:"brute",hp:60,speed:1.6,dmg:3,r:.9,fly:!1,pts:6},{id:"wraith",hp:22,speed:2.6,dmg:2,r:.55,fly:!0,pts:4},{id:"boss",hp:560,speed:.9,dmg:8,r:2,fly:!1,pts:80}],Qt=Object.fromEntries(Hn.map((i,e)=>[i.id,e])),Wn=[{title:"THE DARK DIMENSION",text:"A magic underworld has clashed with Earth.",say:"The Dark Dimension... a magic underworld... has clashed with Earth.",sec:5.5,art:"rift"},{title:"A FATHER",text:"A scientist, denied the cure for his daughter by a greedy boss. His wife and his brother \u2014 gone.",say:"It began with a scientist. Denied the AIDS cure for his daughter by a greedy boss. His wife... and his brother... gone.",sec:9,art:"scientist"},{title:"THE BOOK & THE STONE",text:"An ancient book. A dark teleport stone. His grief tore the Dark Dimension open at Earth\u2019s core.",say:"An ancient book. A dark teleport stone. His grief tore the Dark Dimension open, at the core of the Earth.",sec:8,art:"book"},{title:"5,000,000,000 STOLEN",text:"Five billion souls were stolen by a hidden Mastermind.",say:"Five billion souls were stolen... by a hidden Mastermind.",sec:5.5,art:"souls"},{title:"THE SACRIFICE",text:"The Lord of Earth gave 1.5 billion more to awaken the Ascension System.",say:"The Lord of Earth sacrificed one and a half billion more... to awaken the Ascension System.",sec:7,art:"lord"},{title:"THE LAST CITADEL",text:"1.5 billion survivors remain. Beat the Dark Dimension \u2014 or they vanish forever.",say:"One and a half billion survivors remain. Beat the Dark Dimension... or they vanish. Forever.",sec:7,art:"citadel"}],u_=[0,5],Fd=i=>i%3===1?Wn.map((e,t)=>t):u_;var Ls=[{n:1,title:"THE RIFT OPENS",boss:{id:"scientist",name:"The Corrupted Scientist",hp:1}},{n:2,title:"ASCENSION",boss:{id:"scientist2",name:"The Scientist, Unbound",hp:1.5}},{n:3,title:"THE MASTERMIND",boss:{id:"mastermind",name:"The Mastermind",hp:2.4}}],Mi=[{id:"rift",q:"THE RIFT IS UNSTABLE",a:{key:"seal",label:"SEAL THE RIFT",icon:"\u{1F300}",words:["seal","rift"]},b:{key:"hunt",label:"HUNT THE MASTERMIND",icon:"\u{1F5E1}\uFE0F",words:["hunt","mastermind","attack"]}},{id:"save",q:"THE CITY BURNS",a:{key:"city",label:"SAVE THE CITY",icon:"\u{1F3D9}\uFE0F",words:["city"]},b:{key:"army",label:"SAVE THE ARMY",icon:"\u{1F6E1}\uFE0F",words:["army"]}}],pr={seal:{spawnMul:.75,finalHp:1.3,text:"Fewer creatures pour out\u2026 but the Mastermind grows stronger."},hunt:{spawnMul:1.3,finalHp:.7,text:"The rift rages wider\u2026 but the Mastermind is wounded."},city:{survivors:12e7,guardians:0,text:"120 million survivors pulled from the ruins."},army:{survivors:0,guardians:2,text:"Two guardian heroes join the wall for good."}},Od={"seal-city":"The rift is sealed. The city stands. Dawn rises over {n} survivors.","seal-army":"The rift is sealed and the army marches home. {n} survivors live on.","hunt-city":"The Mastermind is gone. The city wakes to {n} survivors and a quiet sky.","hunt-army":"The army stormed the dark. The Mastermind is gone. {n} survivors live on."},ba=[{id:"dragon",min:500,label:"DRAGON ALLY",icon:"\u{1F409}",desc:"a dragon burns the field; on a boss: 25% of its life"},{id:"awaken",min:100,label:"ASCENSION",icon:"\u26A1",desc:"screen-wide ultimate + you ascend (\xD73 power)"},{id:"guardian",min:30,label:"GUARDIAN HERO",icon:"\u{1F6E1}\uFE0F",desc:"summons a golden guardian to the gate"},{id:"rune",min:5,label:"SHIELD RUNE",icon:"\u{1F537}",desc:"+12 barrier + a spell volley"},{id:"volley",min:1,label:"SPELL VOLLEY",icon:"\u2728",desc:"homing bolts from you (more coins, more bolts)"}],Bd=i=>{let e=Number(i)||0;return ba.find(t=>e>=t.min)||ba[ba.length-1]},d_={mage:["mage","wizard","magic","\u{1F52E}","\u{1FA84}"],warrior:["warrior","knight","sword","tank","\u2694\uFE0F","\u{1F5E1}\uFE0F"],archer:["archer","bow","arrow","hunter","\u{1F3F9}"],healer:["healer","heal","priest","medic","\u{1F49A}","\u2764\uFE0F\u200D\u{1FA79}"]};function kd(i){let e=String(i||"").toLowerCase().trim();if(!e)return{cmd:"chat"};let t=e.split(/[^\p{L}\p{N}\p{Extended_Pictographic}\u200d\ufe0f]+/u).filter(Boolean),n=r=>new RegExp("\\p{Extended_Pictographic}","u").test(r)?e.includes(r):t.includes(r);for(let[r,a]of Object.entries(d_))if(a.some(n))return{cmd:"class",cls:r};let s=e.match(/^(?:vote\s*)?([12])(?:\ufe0f?\u20e3)?\b/u)||e.match(/^([12])\ufe0f?\u20e3/u);if(s)return{cmd:"vote",vote:Number(s[1])};if(/^(one|first)\b/.test(e))return{cmd:"vote",vote:1};if(/^(two|second)\b/.test(e))return{cmd:"vote",vote:2};for(let r of Mi){if(r.a.words.some(n))return{cmd:"vote",vote:1,choice:r.id};if(r.b.words.some(n))return{cmd:"vote",vote:2,choice:r.id}}return{cmd:"chat"}}var Ns=4,Sn=2.6;var Xn=2.2,Bt=-34,zd=15,wa=i=>Math.max(0,Math.round(i)).toLocaleString("en-US");var Gd=[["red",16731486],["orange",16752412],["gold",16765503],["lime",10216804],["green",3064446],["teal",2085313],["cyan",4114431],["blue",5078271],["purple",10182117],["pink",16740277],["white",15921906],["black",3816008],["brown",11037500],["silver",12109014],["rose",16748451]],Pl=new Map(Gd.map(([i,e])=>[i,e]));Pl.set("yellow",16765503);Pl.set("violet",10182117);Pl.set("grey",12109014);Pl.set("gray",12109014);function f_(i){let e=2166136261;for(let t of String(i))e^=t.codePointAt(0),e=Math.imul(e,16777619);return e>>>0}var Vd=i=>Gd[f_(i)%10][1];function _h(i){let e=String(i||"").replace(/[\u0000-\u001f\u200b-\u200f\u202a-\u202e]/g,"").replace(/\s+/g," ").trim(),t=[...e];return(t.length>16?t.slice(0,15).join("")+"\u2026":e)||"Viewer"}var Ll=["Pixel","Mochi","Bolt","Nugget","Waffles","Ziggy","Pebble","Turbo","Biscuit","Gizmo","Noodle","Sprocket","Muffin","Rocket","Tofu","Dumpling","Jelly","Comet","Pickle","Bean","Sushi","Taco","Nacho","Boba"];var bt={bot:1,cmd:2,asc:4,bless:8,down:16,crown:32,gift:64},vh=2;var p_={introSeconds:1,gatherSeconds:14,chapterSeconds:4,breakSeconds:5,victorySeconds:4.5,voteSeconds:16,choiceSeconds:5.5,endingSeconds:16,minDefenders:6,bots:!0,waveCap:70,bossCap:100,sendCap:70,enemySend:90,enemyCap:110,spawnMul:1,enemyHpMul:1,dmgMul:1,lossPer:95e4,likeBarrier:.06,likePulse:500,startChapter:1},Hi=4,Nl=class{constructor(e={},t=Math.random){this.o={...p_,...e},this.rng=t,this.t=0,this.run=0,this.people=new Map,this.byId=new Map,this.nextId=1,this.enemies=[],this.eNext=1,this.allies=[],this.aNext=1,this.hits=[],this.ev=[],this.rAdd=[],this.rDel=[],this.hype=0,this.likes=0,this.humanAt=-999,this.sessionBest=0,this.saves=0,this.lastResult=null,this.shotBudget=0,this.popBudget=0,this.killBudget=0,this.startSession(!0)}r(e){return Math.floor(this.rng()*e)}emit(e){this.ev.push(e)}drain(){let e=this.ev;return this.ev=[],e}drainRoster(){let e={add:this.rAdd,del:this.rDel};return this.rAdd=[],this.rDel=[],e}rosterEntry(e){return{id:e.id,name:e.name,color:e.color,bot:e.bot}}get alive(){let e=0;for(let t of this.people.values())t.on&&e++;return e}get humans(){let e=0;for(let t of this.people.values())t.on&&!t.bot&&e++;return e}defenders(){return[...this.people.values()].filter(e=>e.on)}get chapter(){return Math.max(1,Math.min(3,Math.floor(this.wave/Hi)+(this.phase==="chapter"||this.wave%Hi?1:0)))}get boss(){return this.enemies.find(e=>e.k===Qt.boss&&e.hp>0)||null}member(e,t,n=!1){let s=this.people.get(e);if(!s)s={id:this.nextId++,uid:e,name:_h(t),color:Vd(e),bot:n,on:!1,cls:-1,slot:-1,x:0,z:Ns,hp:100,downT:0,cd:this.rng(),lastAct:this.t,cmdT:-9,hasteT:-9,ascT:-9,blessed:!1,giftT:-9,pts:0,kills:0,vote:0,post:0},this.people.set(e,s),this.byId.set(s.id,s),this.rAdd.push(this.rosterEntry(s));else if(t&&!n){let r=_h(t);r!==s.name&&(s.name=r,this.rAdd.push(this.rosterEntry(s)))}return s}join(e,t){if(e.lastAct=this.t,e.bot||(this.humanAt=this.t),t!==void 0&&t!==e.cls){let n=e.cls;e.cls=t,e.on&&(this.place(e),this.emit({k:"class",id:e.id,c:t,was:n}))}return e.on?!1:(e.cls<0&&(e.cls=this.autoClass()),e.on=!0,e.hp=100,e.downT=0,this.place(e),this.emit({k:"join",id:e.id,bot:e.bot,c:e.cls}),e.bot||this.trimBots(),!0)}autoClass(){let e=[0,0,0,0];for(let r of this.people.values())r.on&&r.cls>=0&&e[r.cls]++;let t=e.reduce((r,a)=>r+a,0),n=0,s=1e9;for(let r=0;r<4;r++){let a=e[r]+this.rng()*.8;r===Lt.warrior&&e[r]>t*.25&&(a+=99),r===Lt.healer&&(a+=.6),a<s&&(s=a,n=r)}return n}place(e){if(e.cls===Lt.warrior){let r=this.post=(this.post||0)+1,a=r*7%13;e.post={x:-6+a,z:Xn-1.6-r%3*.9},e.x=e.post.x,e.z=Ns-.2;return}let n=(this.slotN=(this.slotN||0)+1)*11%34,s=n%2;e.post=null,e.x=-8.4+(n>>1)*1.05+s*.5,e.z=Ns+s*1.1+(this.rng()-.5)*.15}trimBots(){if(this.humans+this.botsOn()<=this.o.minDefenders)return;let e=[...this.people.values()].find(t=>t.bot&&t.on);e&&(e.on=!1,this.emit({k:"leave",id:e.id}))}botsOn(){let e=0;for(let t of this.people.values())t.bot&&t.on&&e++;return e}fillBots(){if(!this.o.bots)return;let e=this.o.minDefenders-this.alive,t=[Lt.warrior,Lt.mage,Lt.archer,Lt.healer,Lt.archer,Lt.mage,Lt.warrior,Lt.mage];for(let n=0;n<Ll.length&&e>0;n++){let s=Ll[(n+this.run*3)%Ll.length],r=this.member("bot:"+s,"Bot "+s,!0);r.on||(r.cls=t[n%t.length],this.join(r),e--)}}input(e){if(!e||!e.uid)return{ok:!1};let t=this.member(String(e.uid),e.name||e.uid);switch(e.type){case"chat":case"comment":return this.chat(t,String(e.text||""));case"like":return this.like(t,Math.max(1,Math.min(100,Number(e.count)||1)));case"gift":return this.gift(t,(Number(e.coins)||1)*Math.max(1,Number(e.count)||1),e.giftName||"gift");case"follow":return this.join(t),this.bless(t,"follow"),{ok:!0};case"share":return this.join(t),this.bless(t,"share"),{ok:!0};case"join":return this.join(t),{ok:!0}}return{ok:!0}}chat(e,t){let n=kd(t),s=this.join(e,n.cmd==="class"?Lt[n.cls]:void 0);return e.cmdT=this.t,this.phase==="vote"&&n.cmd==="vote"&&(!n.choice||n.choice===Mi[this.voteIdx].id)?(e.vote!==n.vote&&(e.vote=n.vote,this.countVotes(),this.emit({k:"vote",id:e.id,v:n.vote})),{ok:!0,cmd:"vote",vote:n.vote}):(this.fighting()&&(e.hasteT=this.t+3),{ok:!0,cmd:s?"join":n.cmd,cls:n.cls})}fighting(){return this.phase==="wave"||this.phase==="boss"||this.phase==="break"}like(e,t){return this.join(e),this.likes+=t,this.hype+=t,this.barrier=Math.min(100,this.barrier+t*this.o.likeBarrier),this.hype>=this.o.likePulse&&(this.hype-=this.o.likePulse,this.pulse(e)),{ok:!0}}bless(e,t){if(t==="follow")e.blessed=!0,this.revive(e),this.barrier=Math.min(100,this.barrier+10);else{this.barrier=Math.min(100,this.barrier+15);for(let n of this.people.values())n.on&&n.downT>0&&this.revive(n)}this.emit({k:"bless",id:e.id,why:t})}revive(e){e.downT>0&&(e.downT=0,e.hp=100,this.emit({k:"rise",id:e.id})),e.hp=100}gift(e,t,n){this.join(e);let s=Bd(t);e.giftT=this.t,e.pts+=Math.min(60,4+t);let r={k:"gift",id:e.id,tier:s.id,coins:t,giftName:n};switch(s.id){case"volley":this.volley(e,Math.min(12,5+t),11);break;case"rune":this.barrier=Math.min(100,this.barrier+12),this.volley(e,6,12);break;case"guardian":{let a=this.allies.filter(o=>o.k===0);if(a.length>=4){let o=a.sort((l,c)=>l.until-c.until)[0];o.until=this.t+35,o.hp=100,r.extended=!0}else this.addAlly(0,e.id,35);break}case"awaken":e.ascT=this.t+20,this.t-(this.ultT||-99)>8?(this.ultT=this.t,this.ultimate(e,1)):(this.volley(e,10,16),r.cool=!0);break;case"dragon":{let a=this.boss;if(a&&(this.damage(a,a.max*.25,e,!0),r.judgment=!0),this.allies.some(o=>o.k===1)){let o=this.allies.find(l=>l.k===1);o.until=Math.max(o.until,this.t+25),a||this.ultimate(e,.6),r.extended=!0}else this.addAlly(1,e.id,25);break}}return this.emit(r),{ok:!0,tier:s.id}}addAlly(e,t,n){let s={id:this.aNext++,k:e,by:t,until:this.t+n,x:e?0:-5+this.r(11),z:e?-10:Xn-2.6,hp:100,cd:0,a0:this.t};this.allies.push(s),this.emit({k:"ally",a:s.id,kind:e,by:t})}volley(e,t,n){let s=this.enemies.filter(r=>r.hp>0);if(!s.length){this.barrier=Math.min(100,this.barrier+4);return}for(let r=0;r<t;r++){let a=s[this.r(s.length)];this.queueHit(e,a,n*this.o.dmgMul,0,.5+r*.07,"v")}this.emit({k:"volley",id:e.id,n:t})}ultimate(e,t){let n=0;for(let s of this.enemies){if(s.hp<=0)continue;let r=s.k===Qt.boss?s.max*.08*t:(60+this.wave*6)*t;this.damage(s,r,e,!1),s.k!==Qt.boss&&(s.z-=3*t),n++}this.emit({k:"ult",id:e?e.id:0,hit:n,p:t})}pulse(e){this.barrier=Math.min(100,this.barrier+20);for(let t of this.people.values())t.on&&t.downT>0&&this.revive(t);this.ultimate(null,.5),this.emit({k:"pulse",id:e.id})}setPhase(e,t){this.phase=e,this.phaseStart=this.t,this.phaseEnd=this.t+t}startSession(e=!1){this.run++,this.wave=(this.o.startChapter-1)*Hi+(this.o.startWave||0),this.survivors=15e8,this.barrier=40,this.hype=0,this.choices=[],this.fx={spawnMul:1,finalHp:1,guardians:0},this.voteIdx=-1,this.voteCounts=[0,0],this.enemies=[],this.allies=[],this.hits=[],this.spawnLeft=0,this.waveStart=0,this.slotN=0,this.post=0,this.lost=0;for(let[t,n]of this.people)!n.bot&&this.t-n.lastAct>1200&&(this.people.delete(t),this.byId.delete(n.id),this.rDel.push(n.id));for(let t of this.people.values())t.on=!1,t.runPts=0,t.vote=0,t.ascT=-9,t.blessed=!1,t.downT=0,t.hp=100;for(let t of this.people.values())!t.bot&&this.t-t.lastAct<180&&this.join(t);this.lore=this.o.introSeconds>0?(this.o.loreCards||Fd(this.run)).slice():[],this.loreAt=this.t,this.setPhase("intro",this.lore.length?this.lore.reduce((t,n)=>t+Wn[n].sec,0)+1:.5),this.emit({k:"intro",run:this.run,lore:this.lore.slice()})}startChapter(){this.setPhase("chapter",this.o.chapterSeconds),this.emit({k:"chapter",n:this.chapter,title:Ls[this.chapter-1].title})}nextWave(){this.wave++;let e=this.chapter,t=(this.wave-1)%Hi,n=Math.max(1,this.alive),s=Math.sqrt(Math.min(n,220)/6),r=.45+.65*s;this.hpCrowd=.6+.4*s;let a=Math.round((6+1.6*this.wave)*r*this.fx.spawnMul*this.o.spawnMul);if(this.waveStart=this.t,t===Hi-1){let o=Ls[e-1].boss,l=Hn[Qt.boss].hp*o.hp*(.6+.4*s)*(e===3?this.fx.finalHp:1)*this.o.enemyHpMul;this.spawnLeft=Math.round(a*.5),this.spawnEvery=22/Math.max(1,this.spawnLeft);let c=this.spawn(Qt.boss,l);c.bossId=o.id,c.name=o.name,c.z=Bt+4,c.x=0,this.setPhase("boss",this.o.bossCap),this.emit({k:"boss",n:e,id:o.id,name:o.name,hp:Math.round(l)})}else this.spawnLeft=a,this.spawnEvery=(16+t*3)/a,this.setPhase("wave",this.o.waveCap),this.emit({k:"wave",n:this.wave,ch:e,i:t+1,count:a});this.nextSpawn=this.t+.8,this.fillBots()}spawn(e,t){let n=Hn[e],s=this.chapter,r=t||n.hp*(1+.08*(this.wave-1))*(1+(s-1)*.1)*(this.hpCrowd||1)*this.o.enemyHpMul,a={id:this.eNext++,k:e,x:(this.rng()-.5)*5,z:Bt+3+this.rng()*2,tx:(this.rng()-.5)*(zd-3),hp:r,max:r,speed:n.speed*(.85+this.rng()*.3),atkT:0,slowT:0,eng:0,born:this.t};return this.enemies.push(a),a}spawnTick(){if(this.spawnLeft<=0||this.t<this.nextSpawn)return;if(this.enemies.length>=this.o.enemyCap){this.nextSpawn=this.t+.3;return}let e=this.chapter,t=this.rng(),n=e===1?[.7,.85]:e===2?[.5,.75]:[.42,.72],s=t<n[0]?Qt.imp:t<n[1]?Qt.brute:Qt.wraith;this.spawn(s),this.spawnLeft--,this.nextSpawn=this.t+this.spawnEvery*(.6+this.rng()*.8)}waveCleared(){return this.spawnLeft<=0&&!this.enemies.some(e=>e.hp>0)}startVote(){this.voteIdx=this.chapter-1,this.voteCounts=[0,0];for(let e of this.people.values())e.vote=0;this.setPhase("vote",this.o.voteSeconds),this.emit({k:"vote",start:!0,i:this.voteIdx})}countVotes(){let e=[0,0];for(let t of this.people.values())t.on&&t.vote&&e[t.vote-1]++;this.voteCounts=e}closeVote(){this.countVotes();let e=Mi[this.voteIdx],t=this.voteCounts,n=t[0]===t[1]?this.r(2)?"b":"a":t[0]>t[1]?"a":"b",s=e[n].key,r=pr[s];if(this.choices.push(s),r.spawnMul&&(this.fx.spawnMul=r.spawnMul),r.finalHp&&(this.fx.finalHp=r.finalHp),r.survivors&&(this.survivors=Math.min(15e8,this.survivors+r.survivors)),r.guardians){this.fx.guardians=r.guardians;for(let a=0;a<r.guardians;a++)this.addAlly(0,0,1e6)}this.setPhase("choice",this.o.choiceSeconds),this.emit({k:"choice",i:this.voteIdx,key:s,votes:t.slice(),none:t[0]+t[1]===0})}endSession(e){let t=[...this.people.values()].filter(r=>r.on||r.runPts>0).filter(r=>!r.bot&&r.runPts>0),n=[...this.people.values()].filter(r=>r.runPts>0||r.on).sort((r,a)=>a.runPts-r.runPts),s=n.filter(r=>!r.bot).slice(0,3);for(let r of t)r.pts+=0;this.sessionBest=Math.max(this.sessionBest,this.wave),e&&this.saves++,this.lastResult={run:this.run,saved:e,wave:this.wave,survivors:Math.round(this.survivors),choices:this.choices.slice(),players:t.map(r=>({uid:r.uid,name:r.name,pts:Math.round(r.runPts),kills:r.runKills||0}))},this.enemies=[],this.hits=[],this.allies=this.allies.filter(r=>r.k===1&&!1),this.setPhase("ending",this.o.endingSeconds),this.emit({k:"end",saved:e,wave:this.wave,survivors:Math.round(this.survivors),choices:this.choices.slice(),top:(s.length?s:n.slice(0,3)).map(r=>r.id)});for(let r of this.people.values())r.runKills=0}step(e){this.t+=e;let t=this.phase;if(this.shotBudget=Math.min(6,this.shotBudget+e*34),this.popBudget=Math.min(4,this.popBudget+e*12),this.killBudget=Math.min(6,this.killBudget+e*24),(t==="wave"||t==="boss"||t==="break"||t==="victory")&&(this.spawnTick(),this.combat(e),this.survivors<=0))return this.survivors=0,this.endSession(!1);if(t==="vote"&&this.botsVote(e),t==="intro"&&this.lore.length&&this.t>=this.loreAt){let n=this.lore.shift();this.loreAt=this.t+Wn[n].sec,this.emit({k:"lore",i:n,sec:Wn[n].sec})}if(this.fighting()&&(this.barrier=Math.max(0,this.barrier-e*.6)),t==="wave"&&this.waveCleared()&&this.t-this.waveStart>4){this.setPhase("break",this.o.breakSeconds),this.emit({k:"clear",n:this.wave});return}if(t==="boss"&&!this.boss){this.setPhase("victory",this.o.victorySeconds);for(let n of this.enemies)n.hp>0&&(n.hp=0,this.emit({k:"kill",e:n.id,by:0,x:+n.x.toFixed(1),z:+n.z.toFixed(1),q:1}));return}if(!(this.t<this.phaseEnd))switch(t){case"intro":this.setPhase("gather",this.o.gatherSeconds),this.fillBots(),this.emit({k:"gather"});break;case"gather":if(!this.alive&&(this.fillBots(),!this.alive)){this.phaseEnd=this.t+2;return}this.startChapter();break;case"chapter":this.nextWave();break;case"wave":this.nextWave();break;case"break":this.wave%Hi===Hi-1?this.nextWave():this.nextWave();break;case"boss":{let n=this.boss;n&&(this.loseSurvivors(150/1.15,!0),n.hp=0,this.emit({k:"retreat",name:n.name})),this.setPhase("victory",2.5);break}case"victory":if(this.chapter>=3)return this.endSession(!0);this.startVote();break;case"vote":this.closeVote();break;case"choice":this.wave=this.chapter*Hi,this.startChapter();break;case"ending":this.startSession();break}}loseSurvivors(e,t=!1){let n=e*this.o.lossPer*(1+.12*(this.chapter-1));this.survivors=Math.max(0,this.survivors-n),this.lost+=n,t&&this.emit({k:"toll",n:Math.round(n)})}queueHit(e,t,n,s,r,a){this.hits.push({at:this.t+r,by:e?e.id:0,e:t,dmg:n,aoe:s}),this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"shot",s:e?e.id:0,e:t.id,c:a,d:+r.toFixed(2)}))}damage(e,t,n,s){if(e.hp<=0)return;let r=e.hp;if(e.hp-=t,e.hitT=this.t,n){let a=Math.min(r,t);n.runPts=(n.runPts||0)+a*.25,n.pts+=a*.25}if((s||this.popBudget>=1&&(e.k===Qt.boss||t>=14))&&(this.popBudget=Math.max(0,this.popBudget-1),this.emit({k:"dmg",e:e.id,d:Math.round(t),c:s?2:t>=20?1:0})),e.hp<=0){let a=Hn[e.k];n&&(n.runPts+=a.pts,n.pts+=a.pts,n.kills++,n.runKills=(n.runKills||0)+1),e.k===Qt.boss?this.emit({k:"bossdown",id:e.bossId,name:e.name,by:n&&!n.bot?n.id:0}):this.killBudget>=1&&(this.killBudget--,this.emit({k:"kill",e:e.id,by:n?n.id:0,x:+e.x.toFixed(1),z:+e.z.toFixed(1),q:e.k}))}}combat(e){let t=this.t;if(this.hits.length){let l=[];for(let c of this.hits){if(c.at>t){l.push(c);continue}let u=c.by?this.byId.get(c.by):null;if(c.e.hp>0&&this.damage(c.e,c.dmg,u,!1),c.aoe)for(let m of this.enemies)m!==c.e&&m.hp>0&&m.k!==Qt.boss&&Math.abs(m.x-c.e.x)<c.aoe&&Math.abs(m.z-c.e.z)<c.aoe&&this.damage(m,c.dmg*.55,u,!1)}this.hits=l}let n=this.enemies.filter(l=>l.hp>0).sort((l,c)=>c.z-l.z),s=n.filter(l=>!Hn[l.k].fly),r=0,a=this.alive,o=a>24?Math.sqrt(24/a):1;for(let l of this.people.values())l.on&&l.cls===Lt.healer&&l.downT<=0&&r++;for(let l of this.people.values()){if(!l.on)continue;if(l.downT>0){l.downT-=e*(1+Math.min(2,r*.25)),l.downT<=0&&(l.downT=0,l.hp=100,this.emit({k:"rise",id:l.id}));continue}let c=Rn[l.cls];if(l.cls===Lt.warrior&&this.warriorMove(l,s,e),l.cd-=e*(t<l.hasteT?1.6:1)*(t<l.ascT?1.5:1),l.cd>0)continue;l.cd=c.every*(.9+this.rng()*.2);let u=this.rng()<.12,m=o*(l.bot?.7:1)*(l.blessed?1.2:1)*(t<l.ascT?3:1)*(u?2:1)*this.o.dmgMul;if(l.cls===Lt.warrior){let g=s.find(p=>Math.abs(p.x-l.x)<c.range+Hn[p.k].r&&Math.abs(p.z-l.z)<c.range+Hn[p.k].r);g?(this.damage(g,c.dmg*m,l,u&&m>2.5),g.slowT=t+.6,this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"shot",s:l.id,e:g.id,c:"w",d:.1}))):l.cd=.25;continue}if(l.cls===Lt.healer){this.barrier=Math.min(100,this.barrier+.25);let g=null;for(let p of this.people.values())p.on&&p.downT<=0&&p.cls===Lt.warrior&&p.hp<80&&(!g||p.hp<g.hp)&&(g=p);if(g){g.hp=Math.min(100,g.hp+16),this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"heal",s:l.id,t:g.id}));continue}for(let p of this.allies)if(p.k===0&&p.hp<90){p.hp=Math.min(100,p.hp+10);break}}let f=[];for(let g of n)if(Math.hypot(g.x-l.x,g.z-l.z)<=c.range&&(f.push(g),f.length>=6))break;if(!f.length){l.cd=.3;continue}let h=f[this.r(Math.min(f.length,l.cls===Lt.mage?6:3))];if(l.cls===Lt.archer){let g=f.find(p=>Hn[p.k].fly);g&&this.rng()<.6&&(h=g)}let d=Math.hypot(h.x-l.x,h.z-l.z),_=l.cls===Lt.mage?19:l.cls===Lt.archer?36:26;this.queueHit(l,h,c.dmg*m,c.aoe,d/_,l.cls===Lt.mage?"m":l.cls===Lt.archer?"a":"h")}n.length&&this.loseSurvivors(n.length*(.004+.008*Math.min(1,this.alive/60))*e),this.alliesStep(s,n,e),this.enemiesStep(e),this.enemies=this.enemies.filter(l=>l.hp>0)}warriorMove(e,t,n){let s=e.post||{x:e.x,z:Xn-1.6},r=s.x,a=s.z,o=null,l=6.5;for(let f of t){if(f.z<s.z-7)break;let h=Math.hypot(f.x-s.x,f.z-s.z);h<l&&(l=h,o=f)}o&&(r=o.x,a=Math.min(s.z+.5,o.z+Hn[o.k].r+.6));let c=r-e.x,u=a-e.z,m=Math.hypot(c,u);if(m>.08){let f=Math.min(m,4.2*n);e.x+=c/m*f,e.z+=u/m*f}}alliesStep(e,t,n){let s=this.t;for(let r of this.allies){if(r.until<s){r.gone=!0,this.emit({k:"allyout",a:r.id});continue}if(r.cd-=n,r.k===0){let a=null,o=9;for(let h of e){let d=Math.hypot(h.x-r.x,h.z-r.z);d<o&&(o=d,a=h)}let l=a?a.x:r.home??(r.home=r.x),c=a?a.z+Hn[a.k].r+.9:Xn-2.6,u=l-r.x,m=c-r.z,f=Math.hypot(u,m);if(f>.1){let h=Math.min(f,3.6*n);r.x+=u/f*h,r.z+=m/f*h}if(r.cd<=0&&a&&o<2.8){r.cd=.85;let h=this.byId.get(r.by);for(let d of e)Math.abs(d.x-r.x)<2.4&&Math.abs(d.z-r.z)<2.6&&this.damage(d,(d.k===Qt.boss?30:24)*this.o.dmgMul,h,!1);this.shotBudget>=1&&(this.shotBudget--,this.emit({k:"shot",s:-r.id,e:a.id,c:"g",d:.1}))}}else{let a=s-r.a0;if(r.x=Math.sin(a*.7)*7,r.z=-15+Math.cos(a*.5)*9,r.cd<=0){r.cd=.45;let o=this.byId.get(r.by),l=r.x+Math.sin(a*.7+.6)*1.5,c=r.z+3;for(let u of t)Math.abs(u.x-l)<3.2&&Math.abs(u.z-c)<3.2&&this.damage(u,(u.k===Qt.boss?22:20)*this.o.dmgMul,o,!1)}}}this.allies.some(r=>r.gone)&&(this.allies=this.allies.filter(r=>!r.gone))}enemiesStep(e){let t=this.t,n=[];for(let s of this.people.values())s.on&&s.cls===Lt.warrior&&s.downT<=0&&n.push(s);for(let s of this.allies)s.k===0&&n.push(s);for(let s of this.enemies){if(s.hp<=0)continue;let r=Hn[s.k];if(s.k===Qt.boss){this.bossStep(s,e);continue}let a=r.fly?Ns-1.6:Xn-.4-r.r,o=null;if(!r.fly){for(let l of n)if(Math.abs(l.x-s.x)<r.r+.75&&Math.abs(l.z-s.z)<r.r+.85){o=l;break}}if(o){t>s.atkT&&(s.atkT=t+1.1,o.uid?(o.hp-=r.dmg*5.5,o.hp<=0&&(o.hp=0,o.downT=9,this.emit({k:"down",id:o.id}))):o.hp=Math.max(0,o.hp-r.dmg*1.5));continue}if(s.z<a-.05){let l=s.speed*(t<s.slowT?.35:1),c=s.tx-s.x,u=Math.min(1,e*.6);s.x+=c*u*.5+Math.sin(t*2+s.id)*e*.4,s.z=Math.min(a,s.z+l*e);continue}t>s.atkT&&(s.atkT=t+1.3,this.wallHit(r.dmg,s))}}wallHit(e,t){if(this.barrier>=e*4){this.barrier-=e*4,this.popBudget>=1&&this.rng()<.3&&(this.popBudget--,this.emit({k:"block",x:+t.x.toFixed(1)}));return}this.barrier=0,this.loseSurvivors(e),this.popBudget>=1&&this.rng()<.5&&(this.popBudget--,this.emit({k:"wallhit",x:+t.x.toFixed(1),d:e}))}bossStep(e,t){let n=this.t;if(e.z<-9){e.z+=e.speed*t,e.x+=(0-e.x)*t;return}if(e.nextAtk||(e.nextAtk=n+3,e.atkN=0),n<e.nextAtk)return;if(e.atkN++,e.nextAtk=n+(e.bossId==="mastermind"?3.6:4.4),e.atkN%3===0){for(let l=0;l<5;l++){let c=this.spawn(l%2?Qt.wraith:Qt.imp);c.x=e.x+(this.rng()-.5)*6,c.z=e.z+1}this.emit({k:"bossatk",kind:"summon"});return}let s=this.barrier>=30;this.barrier=Math.max(0,this.barrier-30),this.loseSurvivors(s?3:7,!1);let r=[],a=this.defenders().filter(l=>l.downT<=0),o=s?0:Math.min(a.length-1,1+this.r(3));for(let l=0;l<o;l++){let c=a.splice(this.r(a.length),1)[0];c.downT=7,c.hp=0,r.push(c.id)}this.emit({k:"bossatk",kind:e.atkN%2?"beam":"slam",blocked:s,downed:r,x:+(e.x+(this.rng()-.5)*8).toFixed(1)})}botsVote(e){for(let t of this.people.values())!t.bot||!t.on||t.vote||this.rng()<e*.3&&this.t-this.phaseStart<this.o.voteSeconds*.8&&(t.vote=1+this.r(2),this.countVotes(),this.emit({k:"vote",id:t.id,v:t.vote}))}snapshot(){let e=[],t=this.defenders(),n=t;t.length>this.o.sendCap&&(n=t.slice().sort((m,f)=>(f.bot?0:1)-(m.bot?0:1)||f.lastAct-m.lastAct).slice(0,this.o.sendCap));let s=0,r=0;for(let m of t)!m.bot&&(m.runPts||0)>r&&(r=m.runPts,s=m.id);for(let m of n){let f=(m.bot?bt.bot:0)|(this.t<m.hasteT?bt.cmd:0)|(this.t<m.ascT?bt.asc:0)|(m.blessed?bt.bless:0)|(m.downT>0?bt.down:0)|(m.id===s?bt.crown:0)|(this.t-m.giftT<3?bt.gift:0);e.push(m.id,Math.round(m.x*100)/100,Math.round(m.z*100)/100,m.cls|f<<vh,Math.round(m.hp))}let a=[],o=this.enemies.filter(m=>m.hp>0),l=o.length>this.o.enemySend?o.slice().sort((m,f)=>(f.k===Qt.boss)-(m.k===Qt.boss)||f.z-m.z).slice(0,this.o.enemySend):o;for(let m of l)a.push(m.id,m.k,Math.round(m.x*100)/100,Math.round(m.z*100)/100,Math.max(1,Math.round(m.hp/m.max*100)));let c=[];for(let m of this.allies)c.push(m.id,m.k,Math.round(m.x*100)/100,Math.round(m.z*100)/100);let u=this.boss;return{tm:Math.round(this.t*1e3)/1e3,ph:this.phase,tl:Math.max(0,Math.round((this.phaseEnd-this.t)*10)/10),pd:Math.round((this.phaseEnd-this.phaseStart)*10)/10,ch:this.chapter,wv:this.wave,wi:(this.wave-1)%Hi+1,sv:Math.round(this.survivors),bar:Math.round(this.barrier*10)/10,hype:this.hype,vi:this.voteIdx,vc:this.voteCounts.slice(),cho:this.choices.slice(),left:this.spawnLeft+o.length,n:t.length,run:this.run,bo:u?{id:u.bossId,n:u.name,hp:Math.ceil(u.hp),max:Math.round(u.max)}:null,best:this.sessionBest,saves:this.saves,f:e,e:a,al:c}}board(e=8){let t=[];for(let n of this.people.values())!n.bot&&n.pts>0&&t.push({name:n.name,pts:Math.round(n.pts),kills:n.kills,cls:n.cls});return t.sort((n,s)=>s.pts-n.pts).slice(0,e)}};var ai=Math.PI*2,Hd=[16767416,15843471,14262374,11037509,8014380,16769999],yh=Rn.map(i=>i.color),mr={m:[12611839,16742970],a:[8384767,16777215],h:[8257448,16777215],v:[16765773,16739029],g:[16769152,16777215],w:[16777215,16747114]},kt=Xn,Ta=6.2,gr=7.5;function Wd(i,e={}){let t=new Cl({canvas:i,antialias:!!e.aa,alpha:!1,depth:!0,stencil:!1,powerPreference:"default",preserveDrawingBuffer:!!e.preserve,failIfMajorPerformanceCaveat:!1});if(!t.getContext())throw new Error("no webgl");t.outputColorSpace=gn,t.toneMapping=ha,t.toneMappingExposure=1.15,t.shadowMap.enabled=!1;let n=new Gr,s=new ke(1838896);n.background=s.clone(),n.fog=new zr(1838896,34,95);let r=new xn(50,9/16,.5,260),a=[],o=E=>(a.push(E),E),l=new ia(9412863,2757670,1.05);n.add(l);let c=new la(6965898,.35);n.add(c);let u=new oa(12109055,.9);u.position.set(-20,30,10),n.add(u);let m=new ar(11550975,60,60,1.4);m.position.set(0,6,Bt+4),n.add(m);let f=new ar(16752720,14,22,1.6);f.position.set(0,5,2),n.add(f);let h=o(new bs(new Uint8Array([70,160,255]),3,1,ur));h.minFilter=h.magFilter=Yt,h.needsUpdate=!0;let d=(E,P={})=>o(new ta({color:E,gradientMap:h,...P})),_=(E,P={})=>o(new gi({color:E,...P})),g=11,p=()=>(g=g*16807%2147483647,(g-1)/2147483646);function v(E,P,A,{repeat:ee=null}={}){let Z=document.createElement("canvas");Z.width=E,Z.height=P,A(Z.getContext("2d"),E,P);let re=o(new Yr(Z));return re.colorSpace=gn,re.anisotropy=2,ee&&(re.wrapS=re.wrapT=1e3,re.repeat.set(ee[0],ee[1])),re}let R=v(256,256,(E,P,A)=>{E.fillStyle="#4c4658",E.fillRect(0,0,P,A);for(let ee=0;ee<6;ee++)for(let Z=-1;Z<4;Z++){let re=A/6,pe=P/3,Ce=(Z+ee%2*.5)*pe,ue=ee*re;E.fillStyle=`hsl(${255+p()*25}, ${7+p()*8}%, ${30+p()*16}%)`,E.fillRect(Ce+3,ue+3,pe-6,re-6),E.fillStyle="rgba(255,255,255,0.06)",E.fillRect(Ce+3,ue+3,pe-6,5)}E.strokeStyle="rgba(10,0,20,0.5)",E.lineWidth=2;for(let ee=0;ee<5;ee++){E.beginPath();let Z=p()*P,re=p()*A;E.moveTo(Z,re);for(let pe=0;pe<4;pe++)Z+=(p()-.5)*50,re+=p()*40,E.lineTo(Z,re);E.stroke()}},{repeat:[6,1]}),y=v(256,256,(E,P,A)=>{E.fillStyle="#2a2232",E.fillRect(0,0,P,A);for(let ee=0;ee<900;ee++)E.fillStyle=`rgba(${p()<.5?"255,255,255":"0,0,0"},${.03+p()*.06})`,E.fillRect(p()*P,p()*A,2+p()*6,2+p()*6);E.strokeStyle="rgba(180,60,255,0.28)",E.lineWidth=2.2;for(let ee=0;ee<7;ee++){E.beginPath();let Z=p()*P,re=p()*A;E.moveTo(Z,re);for(let pe=0;pe<6;pe++)Z+=(p()-.5)*60,re+=(p()-.5)*60,E.lineTo(Z,re);E.stroke()}},{repeat:[7,9]}),C=v(128,256,(E,P,A)=>{E.fillStyle="#3a3448",E.fillRect(0,0,P,A);for(let ee=10;ee<A-10;ee+=26)for(let Z=10;Z<P-10;Z+=28){let re=p();E.fillStyle=re<.12?"#ffb04a":re<.2?"#b060ff":"#14101c",E.fillRect(Z,ee,14,16)}E.fillStyle="rgba(0,0,0,0.25)",E.fillRect(0,0,P,6)}),T=v(64,64,(E,P)=>{let A=E.createRadialGradient(P/2,P/2,0,P/2,P/2,P/2);A.addColorStop(0,"rgba(0,0,0,0.55)"),A.addColorStop(1,"rgba(0,0,0,0)"),E.fillStyle=A,E.fillRect(0,0,P,P)}),x={box:o(new ki(1,1,1)),sph:o(new Dn(1,14,10)),sphLo:o(new Dn(1,8,6)),cone:o(new ti(1,1,7)),cyl:o(new Gn(1,1,1,10)),plane:o(new Nn(1,1)),oct:o(new Qr(1,0)),ico:o(new jr(1,0))},b=new lt(o(new Dn(200,24,14)),o(new dn({side:fn,depthWrite:!1,fog:!1,uniforms:{end:{value:0},dawn:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform float end; uniform float dawn;
      void main(){ float h = clamp(vP.y, -0.2, 1.0); float rift = pow(max(0.0, dot(normalize(vec3(vP.x, vP.y*1.6, vP.z)), vec3(0.0, 0.12, -1.0))), 6.0);
        vec3 top = vec3(0.03, 0.02, 0.09), hor = vec3(0.22, 0.07, 0.24);
        vec3 c = mix(hor, top, smoothstep(-0.05, 0.55, h)) + vec3(0.55, 0.12, 0.6) * rift * 0.75;
        vec3 dc = mix(vec3(1.0, 0.62, 0.38), vec3(0.35, 0.55, 0.95), smoothstep(-0.05, 0.6, h));
        c = mix(c, dc, dawn); c = mix(c, vec3(0.35, 0.02, 0.04) * (0.6 + rift), end);
        gl_FragColor = vec4(c, 1.0); }`})));b.renderOrder=-10,n.add(b);let D=new lt(x.plane,_(16051455,{fog:!1,transparent:!0,map:v(128,128,(E,P)=>{let A=E.createRadialGradient(P/2,P/2,P*.2,P/2,P/2,P/2);A.addColorStop(0,"#fff8f0"),A.addColorStop(.42,"#efe2ff"),A.addColorStop(.47,"rgba(200,170,255,0.5)"),A.addColorStop(1,"rgba(120,80,200,0)"),E.fillStyle=A,E.fillRect(0,0,P,P),E.fillStyle="rgba(160,140,200,0.35)";for(let[ee,Z,re]of[[52,50,9],[74,70,6],[60,78,5]])E.beginPath(),E.arc(ee,Z,re,0,ai),E.fill()})}));D.position.set(-34,46,-120),D.scale.set(30,30,1),D.lookAt(0,8,20),n.add(D);let I=o(new $t);{let P=new Float32Array(780);for(let A=0;A<260;A++){let ee=p()*ai,Z=.12+p()*1.3;P.set([Math.cos(ee)*Math.cos(Z)*180,Math.sin(Z)*180,Math.sin(ee)*Math.cos(Z)*180-20],A*3)}I.setAttribute("position",new hn(P,3))}let k=new ws(I,o(new dn({transparent:!0,depthWrite:!1,fog:!1,uniforms:{time:{value:0},op:{value:1}},vertexShader:"uniform float time; varying float vA; void main(){ vA = 0.45 + 0.55 * sin(time * 2.0 + position.x * 0.7 + position.z); gl_PointSize = 2.2; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform float op; varying float vA; void main(){ gl_FragColor = vec4(vec3(1.0, 0.95, 1.0) * vA * op, 1.0); }"})));k.renderOrder=-9,n.add(k);let O=new lt(o(new Nn(140,160).rotateX(-Math.PI/2)),d(9075864,{map:y}));O.position.set(0,0,-30),n.add(O);let $=new lt(o(new Nn(9,44).rotateX(-Math.PI/2)),d(5917798,{transparent:!0,opacity:.5}));$.position.set(0,.02,-18),n.add($);let N=46,J=new An(x.box,d(16777215,{map:C}),N);J.frustumCulled=!1;let te=new An(x.cone,d(2761268),N);te.frustumCulled=!1;let B=new An(x.ico,d(5918820),70);B.frustumCulled=!1;let oe=new ht,G=new V,j=new zn,le=new pi,Le=new V,Xe=new ke,ie=(E,P,A,ee,Z,re,pe,Ce,ue=0,Ge=0,vt=0,Ht=null)=>{E.setMatrixAt(P,oe.compose(G.set(A,ee,Z),j.setFromEuler(le.set(ue,Ge,vt)),Le.set(re,pe,Ce))),Ht!==null&&E.setColorAt(P,Xe.setHex(Ht))};{let E=0,P=0;for(let A of[-1,1])for(let ee=0;ee<N/2;ee++){let Z=ee%3,re=-48+Math.floor(ee/3)*6.6+p()*2,pe=A*(10.5+Z*5.5+p()*2.5),Ce=3+p()*2.6,ue=3+p()*2.6,Ge=3.5+p()*(Z===0?7:13),vt=p()<.35,Ht=vt?(p()-.5)*.18:0;if(ie(J,E,pe,Ge/2,re,Ce,Ge,ue,Ht*.5,p()*.3,Ht,p()<.5?10128560:8287380),!vt&&p()<.45?ie(te,E,pe,Ge+1,re,Ce*.75,2,ue*.75,0,Math.PI/4,0):ie(te,E,0,-50,0,.01,.01,.01),E++,P<70&&vt)for(let Qe=0;Qe<3&&P<70;Qe++)ie(B,P++,pe-A*(Ce*.6+p()*2),.3,re+(p()-.5)*4,.5+p()*.9,.4+p()*.7,.5+p()*.9,p(),p()*3,p())}for(;P<70;){let A=p()<.5?-1:1;ie(B,P++,A*(6.5+p()*3),.25,-40+p()*38,.3+p()*.7,.3+p()*.5,.3+p()*.7,p(),p()*3,p())}J.count=E,te.count=E}n.add(J,te,B);let we=new qt;n.add(we);let De=d(13155544,{map:R}),Be=new lt(x.box,De);Be.scale.set(22,Sn,Ta-kt),Be.position.set(0,Sn/2,(kt+Ta)/2),we.add(Be);let Ee=new lt(x.box,d(6971e3));Ee.scale.set(22,.12,Ta-kt-.3),Ee.position.set(0,Sn+.02,(kt+Ta)/2+.1),we.add(Ee);let qe=new An(x.box,d(11839688),24);qe.frustumCulled=!1;for(let E=0;E<24;E++)ie(qe,E,-10.6+E*.92,Sn+.42,kt+.22,.56,.84,.44);we.add(qe);let Nt=new lt(x.box,d(3812424));Nt.scale.set(3.2,2.1,.3),Nt.position.set(0,1.05,kt-.05),we.add(Nt);let ze=new lt(x.plane,_(11555071,{transparent:!0,opacity:.7,blending:Fn,depthWrite:!1,map:v(128,96,(E,P,A)=>{E.strokeStyle="#fff",E.lineWidth=5,E.beginPath(),E.arc(P/2,A*.62,A*.32,0,ai),E.stroke(),E.beginPath();for(let ee=0;ee<6;ee++){let Z=ee/6*ai;E.moveTo(P/2,A*.62),E.lineTo(P/2+Math.cos(Z)*A*.3,A*.62+Math.sin(Z)*A*.3)}E.stroke()})}));ze.scale.set(2.8,2,1),ze.position.set(0,1.05,kt-.22),we.add(ze);let dt=[];for(let E of[-1,1]){let P=new qt;P.position.set(E*11.6,0,(kt+Ta)/2);let A=new lt(x.cyl,De);A.scale.set(1.9,5.6,1.9),A.position.y=2.8,P.add(A);let ee=new lt(x.cyl,d(11839688));ee.scale.set(2.2,.6,2.2),ee.position.y=5.9,P.add(ee);let Z=new lt(x.cone,d(5909098));Z.scale.set(2.5,3.2,2.5),Z.position.y=7.8,P.add(Z);let re=new lt(x.plane,_(16761402,{side:an}));re.scale.set(1.3,.8,1),re.position.set(.7,10.1,0),P.add(re);let pe=new lt(x.cyl,d(3812424));pe.scale.set(.06,1.8,.06),pe.position.y=10,P.add(pe),we.add(P),dt.push({t:P,flag:re})}let ct=new qt;ct.position.set(0,0,30);{let E=new lt(x.box,De);E.scale.set(9,7,5),E.position.y=3.5,ct.add(E);let P=new lt(x.cone,d(5909098));P.scale.set(5,4,5),P.rotation.y=Math.PI/4,P.position.y=9,ct.add(P);for(let A of[-1,1]){let ee=new lt(x.cyl,De);ee.scale.set(1.4,10,1.4),ee.position.set(A*4.6,5,0),ct.add(ee);let Z=new lt(x.cone,d(5909098));Z.scale.set(1.8,3,1.8),Z.position.set(A*4.6,11.5,0),ct.add(Z)}}n.add(ct);let tt=[-9.6,-6.2,-2.4,2.4,6.2,9.6],Gt=new An(x.cyl,d(3810328),tt.length);Gt.frustumCulled=!1,tt.forEach((E,P)=>ie(Gt,P,E,Sn+.6,kt+.15,.07,1.2,.07)),n.add(Gt);let Dt=o(new dn({transparent:!0,depthWrite:!1,blending:Fn,side:an,fog:!1,uniforms:{time:{value:0},power:{value:1},hue:{value:0}},vertexShader:"varying vec2 vU; void main(){ vU = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec2 vU; uniform float time; uniform float power; uniform float hue;
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
        gl_FragColor = vec4(c * power, 1.0); }`})),Zt=new lt(o(new Nn(13,16)),Dt);Zt.position.set(0,gr,Bt-1),n.add(Zt);let pt=new lt(o(new Ts(1,.05,6,48)),_(13664511,{transparent:!0,opacity:.8,blending:Fn,depthWrite:!1,fog:!1}));pt.scale.set(6.2,7.8,6),pt.position.copy(Zt.position),pt.position.z+=.2,n.add(pt);let vn=new lt(o(new Jr(1,40).rotateX(-Math.PI/2)),_(10105087,{transparent:!0,opacity:.5,blending:Fn,depthWrite:!1}));vn.scale.set(9,1,4),vn.position.set(0,.04,Bt+1.5),n.add(vn);let Ft=16,on=new An(x.oct,d(3807824,{emissive:8003776}),Ft);on.frustumCulled=!1,n.add(on);let nn=o(new dn({transparent:!0,depthWrite:!1,blending:Fn,side:an,uniforms:{time:{value:0},a:{value:0},hit:{value:0},col:{value:new ke(5949695)}},vertexShader:"varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); vP = position; gl_Position = projectionMatrix * mv; }",fragmentShader:`varying vec3 vN; varying vec3 vV; varying vec3 vP; uniform float time; uniform float a; uniform float hit; uniform vec3 col;
      void main(){ float f = 1.0 - abs(dot(vN, vV)); vec2 g = abs(fract(vec2(atan(vP.x, vP.z) * 5.0, vP.y * 6.0)) - 0.5);
        float hex = smoothstep(0.42, 0.5, max(g.x, g.y)); float band = 0.5 + 0.5 * sin(vP.y * 18.0 - time * 3.0);
        float k = pow(f, 2.4) * 0.6 + hex * 0.2 + band * 0.05; gl_FragColor = vec4(mix(col, vec3(1.0), hit * 0.6) * k * a, 1.0); }`})),Jt=new lt(o(new Gn(1,1,1,36,1,!0,Math.PI-.95,1.9).translate(0,.5,0)),nn);Jt.scale.set(14,7,14),Jt.position.set(0,0,kt+13.2),Jt.renderOrder=8,n.add(Jt);let z=e.maxChars||70,wt=(E,P,A=1)=>{let ee=new An(E,P,z*A);ee.frustumCulled=!1,ee.count=0;let Z=new ke(1,1,1);for(let re=0;re<z*A;re++)ee.setColorAt(re,Z);return n.add(ee),ee},Je={body:wt(o(new xi(.27,.24,3,10)),d(16777215)),head:wt(o(new Dn(.36,14,10)),d(16777215)),hair:wt(o(new Dn(.385,14,8,0,ai,0,Math.PI*.52)),d(16777215)),eyes:wt(o(new Dn(.058,8,6)),_(1774640),2),hands:wt(o(new Dn(.13,10,8)),d(16777215),2),feet:wt(o(new Dn(.12,8,6)),d(2761272),2),staff:wt(o(new Gn(.04,.05,1.3,6)),d(6965802)),orb:wt(o(new Dn(.15,10,8)),d(16777215,{emissive:6308e3})),hat:wt(o(new ti(.4,.62,8)),d(16777215)),sword:wt(o(new ki(.09,.85,.05)),d(15265528,{emissive:3160136})),shield:wt(o(new Gn(.28,.28,.07,10).rotateX(Math.PI/2)),d(16777215)),bow:wt(o(new Ts(.4,.03,5,14,Math.PI)),d(9067050)),halo:wt(o(new Ts(.22,.035,5,16).rotateX(Math.PI/2)),_(16773792)),shadow:wt(o(new Nn(1,1).rotateX(-Math.PI/2)),o(new gi({map:T,transparent:!0,depthWrite:!1})))};Je.shadow.renderOrder=2;let Tt=130,me=(E,P,A=1)=>{let ee=new An(E,P,Tt*A);ee.frustumCulled=!1,ee.count=0;let Z=new ke(1,1,1);for(let re=0;re<Tt*A;re++)ee.setColorAt(re,Z);return n.add(ee),ee},Vt=_(16769354),Ae={impBody:me(x.sph,d(16777215)),impHorn:me(x.cone,d(1706512),2),impEye:me(x.sphLo,Vt,2),impWing:me(o(new ti(.5,.9,3)),d(4198428),2),bruBody:me(x.sph,d(16777215)),bruArm:me(o(new xi(.28,.9,3,8)),d(16777215),2),bruHorn:me(x.cone,d(15260872),2),bruEye:me(x.sphLo,_(16730666),2),wrBody:me(x.cone,d(16777215,{emissive:3149898,transparent:!0,opacity:.88})),wrHood:me(x.sph,d(2627640)),wrEye:me(x.sphLo,_(9105663),2),eShadow:me(o(new Nn(1,1).rotateX(-Math.PI/2)),o(new gi({map:T,transparent:!0,depthWrite:!1})))};Ae.eShadow.renderOrder=2;let Ye=[13642298,6965898,10115839];function w(E,P,A,ee,Z,re,pe,Ce,ue){let Ge=new lt(E,P);return Ge.position.set(A,ee,Z),Ge.scale.set(re,pe,Ce),ue.add(Ge),Ge}let M={};function X(E){let P=new qt,A={},ee=d(E?3811904:15262958,{emissive:E?3145754:0}),Z=d(E?12099784:14731448),re=d(2103336),pe=_(12607743),Ce=_(16722506);w(x.cyl,re,-.35,.8,0,.22,1.6,.22,P),w(x.cyl,re,.35,.8,0,.22,1.6,.22,P),A.coat=w(o(new Gn(.62,1.05,2.2,9)),ee,0,2.5,0,1,1,1,P),w(x.sph,ee,0,3.55,0,.75,.45,.6,P),A.head=w(x.sph,Z,0,4.25,.05,.5,.56,.5,P);let ue=d(E?15790335:12235972);w(x.sph,ue,0,4.55,-.05,.56,.4,.52,P);for(let Ge=0;Ge<5;Ge++)w(x.cone,ue,-.4+Ge*.2,4.85,-.1,.13,.4,.13,P).rotation.z=(Ge-2)*.35;for(let Ge of[-1,1])w(x.sph,E?Ce:pe,Ge*.19,4.3,.46,.13,.11,.06,P);if(w(x.box,re,0,4.3,.47,.6,.06,.04,P),A.armL=new qt,A.armL.position.set(-.85,3.4,0),P.add(A.armL),w(x.cyl,ee,0,-.6,0,.17,1.2,.17,A.armL),A.armR=new qt,A.armR.position.set(.85,3.4,0),P.add(A.armR),w(x.cyl,ee,0,-.6,0,.17,1.2,.17,A.armR),A.book=w(x.box,d(3805232,{emissive:5902416}),-1.3,2.6,.6,.55,.7,.18,P),A.stone=w(x.oct,d(2099216,{emissive:12587050}),1.3,3,.6,.32,.45,.32,P),E){A.core=w(x.oct,_(16722506),0,3,.62,.28,.36,.1,P),A.wings=[];for(let Ge of[-1,1]){let vt=w(o(new ti(1.4,3.6,3)),d(1706016,{emissive:4852282,transparent:!0,opacity:.85}),Ge*1.5,3.8,-.4,1,1,.12,P);vt.rotation.z=Ge*1,A.wings.push(vt)}}return P.scale.setScalar(E?1.75:1.5),{g:P,P:A,top:E?9.4:7.8,aura:E?[1,.2,.35]:[.7,.3,1]}}function de(){let E=new qt,P={},A=d(1708068,{emissive:1179658}),ee=d(14198832,{emissive:4204544}),Z=d(16052472),re=_(16719920);P.robe=w(o(new ti(1.5,4.4,10)),A,0,2.2,0,1,1,1,E),w(x.sph,A,0,4.3,0,1,.55,.75,E);for(let pe of[-1,1])w(x.cone,ee,pe*.95,4.75,0,.22,.8,.22,E).rotation.z=-pe*.5;P.cape=w(o(new Nn(2.6,4.2)),d(5900312,{side:an}),0,2.5,-.7,1,1,1,E),P.cape.rotation.x=.12,P.head=w(x.sph,A,0,5.1,0,.62,.7,.62,E),w(x.sph,Z,0,5.05,.33,.42,.5,.32,E);for(let pe of[-1,1])w(x.sph,re,pe*.16,5.12,.62,.09,.05,.04,E);for(let pe=0;pe<5;pe++){let Ce=w(x.cone,ee,-.5+pe*.25,5.75+(pe===2?.2:0),0,.09,pe===2?.8:.55,.09,E);Ce.rotation.z=(2-pe)*.22}P.handL=w(x.sph,d(2759220),-1.45,3.2,.4,.3,.3,.3,E),P.handR=w(x.sph,d(2759220),1.45,3.2,.4,.3,.3,.3,E),P.orb=w(x.sph,_(16722512,{transparent:!0,opacity:.9}),1.45,3.9,.5,.42,.42,.42,E),P.souls=[];for(let pe=0;pe<6;pe++)P.souls.push(w(x.sphLo,_(10152191,{transparent:!0,opacity:.85}),0,3,0,.16,.22,.16,E));return E.scale.setScalar(1.85),{g:E,P,top:12,aura:[1,.1,.25]}}M.scientist=X(!1),M.scientist2=X(!0),M.mastermind=de();for(let E of Object.values(M))E.g.visible=!1,n.add(E.g),E.mats=[],E.g.traverse(P=>{P.material&&P.material.isMeshToonMaterial&&E.mats.push([P.material,P.material.emissive.clone()])});let q={id:"",x:0,z:-30,hitT:-9,atkT:-9,born:0,dieT:-9},ge=[];for(let E=0;E<6;E++){let P=new qt,A=d(16765530,{emissive:4861952}),ee=d(15265528,{emissive:2107448});w(x.cyl,ee,-.25,.45,0,.16,.9,.16,P),w(x.cyl,ee,.25,.45,0,.16,.9,.16,P),w(o(new xi(.5,.6,3,10)),A,0,1.45,0,1,1,1,P),w(x.sph,ee,0,2.35,0,.42,.45,.42,P),w(x.box,_(8384767),0,2.36,.38,.4,.07,.05,P),w(x.cone,_(16730714),0,2.85,-.05,.1,.5,.25,P),w(o(new Gn(.55,.55,.1,6).rotateX(Math.PI/2)),A,-.65,1.4,.45,1,1.2,1,P);let Z=new qt;Z.position.set(.62,1.8,.1),P.add(Z),w(x.box,d(16054527,{emissive:4214896}),0,.7,.2,.12,1.6,.06,Z),P.scale.setScalar(1.25),P.visible=!1,n.add(P),ge.push({g:P,arm:Z,id:0,x:0,z:0,born:0,seen:0,atk:-9})}let ye=(()=>{let E=new qt,P=d(14172202,{emissive:4198400}),A=d(16762976,{emissive:4202496}),ee=d(16773328);w(o(new xi(.9,2.4,4,10).rotateX(Math.PI/2)),P,0,0,0,1,1,1,E),w(o(new xi(.7,2,4,10).rotateX(Math.PI/2)),A,0,-.25,.1,1,1,1,E);let Z=w(o(new xi(.42,1.4,3,8)),P,0,.9,1.9,1,1,1,E);Z.rotation.x=.9;let re=new qt;re.position.set(0,1.6,2.9),E.add(re),w(x.box,P,0,0,.3,.8,.6,1.2,re);let pe=w(x.box,A,0,-.35,.35,.7,.2,1,re);for(let ue of[-1,1])w(x.cone,ee,ue*.3,.5,-.1,.12,.7,.12,re).rotation.x=-.7,w(x.sphLo,_(16777056),ue*.3,.15,.75,.1,.1,.1,re);let Ce=[];for(let ue of[-1,1]){let Ge=new qt;Ge.position.set(ue*.7,.5,.2),E.add(Ge);let vt=w(o(new ti(1.6,4.4,3).rotateZ(-ue*Math.PI/2)),d(10496024,{emissive:3147776,side:an}),ue*2.2,0,0,1,1,.08,Ge);vt.rotation.x=Math.PI/2,Ce.push(Ge)}return w(o(new ti(.6,3.4,8).rotateX(-Math.PI/2)),P,0,-.1,-3,1,1,1,E),E.scale.setScalar(1.25),E.visible=!1,n.add(E),{g:E,head:re,jaw:pe,wings:Ce,id:0,born:0,px:0,pz:0}})(),se=16,ne=new An(o(new ea(.86,1,40).rotateX(-Math.PI/2)),o(new gi({color:16777215,transparent:!0,depthWrite:!1,blending:Fn,side:an})),se);ne.frustumCulled=!1,ne.renderOrder=4;{let E=new ke(0,0,0);for(let P=0;P<se;P++)ne.setColorAt(P,E)}n.add(ne);let xe=[],L=(E,P,A,ee,Z,re=.6)=>{xe.length<se&&xe.push({x:E,y:P,z:A,col:ee,r1:Z,life:re,t:0})},ae=14,Q=new An(o(new Gn(1,1,1,10,1,!0)),o(new gi({color:16777215,transparent:!0,depthWrite:!1,blending:Fn,side:an})),ae);Q.frustumCulled=!1,Q.renderOrder=7;{let E=new ke(0,0,0);for(let P=0;P<ae;P++)Q.setColorAt(P,E)}n.add(Q);let _e=[],fe=(E,P,A,ee,Z,re,pe,Ce,ue)=>{_e.length<ae&&_e.push({a:new V(E,P,A),b:new V(ee,Z,re),col:pe,w:Ce,life:ue,t:0})};function Me(E,P){let A=o(new $t),ee=new Float32Array(E*3),Z=new Float32Array(E*4),re=new Float32Array(E);A.setAttribute("position",new hn(ee,3)),A.setAttribute("col",new hn(Z,4)),A.setAttribute("size",new hn(re,1));let pe=o(new dn({transparent:!0,depthWrite:!1,blending:P?Fn:ls,uniforms:{px:{value:400}},vertexShader:"attribute vec4 col; attribute float size; uniform float px; varying vec4 vC; void main(){ vC = col; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(size * px / max(0.5, -mv.z), 160.0); gl_Position = projectionMatrix * mv; }",fragmentShader:P?"varying vec4 vC; void main(){ float d = length(gl_PointCoord-0.5)*2.0; float a = pow(max(0.0, 1.0 - d), 2.0); gl_FragColor = vec4(vC.rgb * a * vC.a, 1.0); }":"varying vec4 vC; void main(){ vec2 p = gl_PointCoord-0.5; if (vC.a < 0.0) { if (abs(p.x) > 0.5 || abs(p.y) > 0.28) discard; gl_FragColor = vec4(vC.rgb, 1.0); } else { float d = length(p)*2.0; if (d > 1.0) discard; gl_FragColor = vec4(vC.rgb, vC.a * (1.0 - d*d)); } }"})),Ce=new ws(A,pe);return Ce.frustumCulled=!1,n.add(Ce),{geo:A,pos:ee,col:Z,size:re,mat:pe,pts:Ce,list:[],cap:E}}let ve=Me(e.particles||900,!0),He=Me(Math.round((e.particles||900)*.4),!1);ve.pts.renderOrder=9,He.pts.renderOrder=5;let ce=1,Fe=new ke;function Pe(E,P,A,ee,Z,re){P=Math.max(1,Math.round(P*ce));for(let pe=0;pe<P&&E.list.length<E.cap-60;pe++){let Ce=Math.random()*ai,ue=(re.up??.5)+Math.random()*(re.spreadUp??.5),Ge=(re.speed||4)*(.4+Math.random()*.8);Fe.set(re.colors?re.colors[Math.random()*re.colors.length|0]:re.color),E.list.push({x:A+(Math.random()-.5)*(re.jitter||0),y:ee+(Math.random()-.5)*(re.jy||0),z:Z+(Math.random()-.5)*(re.jitter||0),vx:Math.cos(Ce)*Ge*(1-ue*.6)+(re.vx||0),vy:Ge*ue*(re.vyMul??1),vz:Math.sin(Ce)*Ge*(1-ue*.6)+(re.vz||0),g:re.g??9,drag:re.drag??1.5,life:(re.life||.6)*(.7+Math.random()*.6),t:0,s0:re.size||.3,s1:re.size1??(re.size||.3)*.3,r:Fe.r,gg:Fe.g,b:Fe.b,a:re.alpha??1,conf:!!re.confetti,spin:Math.random()*ai})}}function Te(E,P,A){let ee=E.list,Z=0;for(let Ce=0;Ce<ee.length;Ce++){let ue=ee[Ce];if(ue.t+=P,ue.t>=ue.life)continue;ue.vy-=ue.g*P;let Ge=Math.exp(-ue.drag*P);ue.vx*=Ge,ue.vy*=Ge,ue.vz*=Ge,ue.conf&&(ue.spin+=P*6,ue.vx+=Math.sin(ue.spin)*P*2),ue.x+=ue.vx*P,ue.y+=ue.vy*P,ue.z+=ue.vz*P,ue.y<.05&&ue.g>0&&(ue.y=.05,ue.vy*=-.3,ue.vx*=.7,ue.vz*=.7),ee[Z++]=ue}ee.length=Z;let re=0,pe=(Ce,ue,Ge,vt,Ht,Qe,Ot,Et)=>{E.pos[re*3]=Ce,E.pos[re*3+1]=ue,E.pos[re*3+2]=Ge,E.col[re*4]=vt,E.col[re*4+1]=Ht,E.col[re*4+2]=Qe,E.col[re*4+3]=Ot,E.size[re]=Et,re++};if(A)for(let Ce of A)re<E.cap-1&&pe(Ce[0],Ce[1],Ce[2],Ce[3],Ce[4],Ce[5],Ce[6],Ce[7]);for(let Ce of ee){if(re>=E.cap)break;let ue=Ce.t/Ce.life,Ge=Ce.conf?1:1-ue*ue;pe(Ce.x,Ce.y,Ce.z,Ce.r,Ce.gg,Ce.b,Ce.conf?-1:Ce.a*Ge,Ce.s0+(Ce.s1-Ce.s0)*ue)}E.geo.setDrawRange(0,re);for(let Ce of["position","col","size"]){let ue=E.geo.attributes[Ce];ue.needsUpdate=!0,ue.clearUpdateRanges?.(),ue.addUpdateRange?.(0,re*ue.itemSize)}}let ft=o(new $t);{let P=new Float32Array(510);for(let A=0;A<170;A++)P.set([Math.random(),Math.random(),Math.random()],A*3);ft.setAttribute("position",new hn(P,3))}let Rt=new ws(ft,o(new dn({transparent:!0,depthWrite:!1,blending:Fn,uniforms:{time:{value:0},px:{value:300},tint:{value:new ke(13660415)},tint2:{value:new ke(16734778)}},vertexShader:`uniform float time; uniform float px; varying float vA; varying float vK;
      void main(){ vec3 s = position; float t = time * (0.05 + s.x * 0.05); float fy = fract(s.y + t);
        vec3 p = vec3((s.x - 0.5) * 34.0 + sin(t * 6.0 + s.z * 9.0) * 1.5, fy * 18.0, -40.0 + s.z * 46.0 + fy * 4.0);
        vec4 mv = modelViewMatrix * vec4(p, 1.0); vK = s.z;
        vA = smoothstep(0.0, 0.1, fy) * smoothstep(1.0, 0.7, fy) * (0.5 + 0.5 * sin(time * 3.0 + s.x * 50.0));
        gl_PointSize = min((0.1 + s.y * 0.12) * px / max(1.0, -mv.z), 10.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform vec3 tint; uniform vec3 tint2; varying float vA; varying float vK; void main(){ float d = length(gl_PointCoord-0.5)*2.0; gl_FragColor = vec4(mix(tint, tint2, step(0.6, vK)) * vA * max(0.0, 1.0-d), 1.0); }"})));Rt.frustumCulled=!1,Rt.renderOrder=3,n.add(Rt);let It=new Map,Yn=new Map,ps=new ke(1,1,1),ln=new ke,$n=new ke,Sr=new ke(7368832),Ai=new V,br=new V(0,1,0),Yi={particles:1,labels:22,dust:!0,props:!0,chars:70},Ua=[],ms=0,mt=0,ci=-9,Tn=-9,wr=-9,En=null,Ci=new V(0,13,18),gs=new V(0,1.5,-9),Zn=new V,hi=new V,Os=[],S=new Map,U=[],K=90,H=new ht,W=new ht,be=new ht,he=(E,P,A,ee,Z,re,pe,Ce,ue=0,Ge=0,vt=null,Ht=0)=>{W.compose(G.set(A,ee,Z),j.setFromEuler(le.set(ue,Ht,Ge)),Le.set(re,pe,Ce)),be.multiplyMatrices(H,W),E.setMatrixAt(P,be),vt&&E.setColorAt(P,vt)},Se=E=>E.z<kt-.1?0:Sn+.08;function Re(E,P,A){ms=A;let ee=E.phase==="ending"&&En,Z=ee&&En.saved?Math.min(1,(A-En.t0)/4):0,re=ee&&!En.saved?Math.min(1,(A-En.t0)/3):0;b.material.uniforms.dawn.value=Z*.85,b.material.uniforms.end.value=re*.9,k.material.uniforms.time.value=A,k.material.uniforms.op.value=1-Z;let pe=!!E.bo,Ce=(ee?En.saved?Math.max(0,1-Z*1.2):1.5:1)*(pe?1.25:1)*(1+.12*Math.sin(A*3));Dt.uniforms.time.value=A,Dt.uniforms.power.value=Ce,Dt.uniforms.hue.value=(E.ch||1)*.12+(pe?.2:0)+re*.4;let ue=ee?En.saved?Math.max(.01,1-Z):1+re*.8:1+((E.ch||1)-1)*.12;Zt.scale.set(ue,ue,1),pt.scale.set(6.2*ue,7.8*ue,6),pt.rotation.z=A*.2,pt.visible=ue>.05,m.intensity=50*Ce*(1+.15*Math.sin(A*2.3)),m.color.setHex(re>0?16719936:pe?13643968:10502399),vn.material.opacity=.35*Ce;for(let F=0;F<Ft;F++){let Y=F/Ft*ai+A*.15*(F%2?1:-1),st=7.5+F%3*1.6;ie(on,F,Math.cos(Y)*st*ue,gr+Math.sin(Y)*st*.9*ue+Math.sin(A+F)*.4,Bt-.5+F%4*.4,.3+F%3*.2,.5+F%2*.3,.3,A*(.5+F*.05),F,0)}on.instanceMatrix.needsUpdate=!0,l.intensity=.95+Z*1.2-re*.4+(A-ci<.12?1.6:0)+(A-wr<.5?(.5-(A-wr))*4:0),l.color.setHex(Z>.3?16769216:9412863),u.intensity=.9+Z,n.fog.color.copy(s).lerp($n.setHex(15245440),Z*.7).lerp(ln.setHex(3802640),re*.8);let Ge=Math.max(0,Math.min(100,E.bar||0))/100;Jt.visible=Ge>.02||A-Tn<.4,nn.uniforms.time.value=A,nn.uniforms.a.value=.12+Ge*.4+(A-Tn<.3?.5:0),nn.uniforms.hit.value=Math.max(0,1-(A-Tn)/.3),nn.uniforms.col.value.setHex(Ge>.66?8050943:Ge>.33?5943551:8024319),Jt.scale.y=6+Ge*1.5;for(let F of dt)F.flag.rotation.y=Math.sin(A*2.2+F.t.position.x)*.35;f.intensity=12+Math.sin(A*11)*2;let vt=E.pd>0?1-Math.max(0,Math.min(1,E.tl/E.pd)):1;if(E.phase==="intro"){let F=vt*vt*(3-2*vt);Zn.set(Math.sin(F*1.4-.7)*10,6+F*6,-6+F*24),hi.set(0,gr-F*5,Bt+F*22)}else if(E.phase==="gather"||E.phase==="chapter")Zn.set(Math.sin(A*.12)*2.5,12.5,18.5),hi.set(0,.8,-3);else if(E.phase==="boss"&&E.bo)Zn.set(Math.sin(A*.2)*1.5,14.5,20),hi.set(q.x*.3,.8,Math.max(-10,q.z*.35-3));else if(E.phase==="vote"||E.phase==="choice")Zn.set(Math.sin(A*.25)*3,11,17),hi.set(0,3.5,-14);else if(E.phase==="ending"){let F=A*.12;Zn.set(Math.sin(F)*14,9+Z*3,10+Math.cos(F)*8),hi.set(0,3+Z*2,-6)}else Zn.set(Math.sin(A*.15)*1.2,14,19.5),hi.set(0,.3,-4);let Ht=Math.min(1,P*(E.phase==="intro"?1.6:1.8));Ci.distanceTo(Zn)>45&&(Ci.copy(Zn),gs.copy(hi)),Ci.lerp(Zn,Ht),gs.lerp(hi,Ht),mt=Math.max(0,mt-P*2.4);let Qe=(Math.random()-.5)*mt*.6,Ot=(Math.random()-.5)*mt*.6;r.position.set(Ci.x+Qe,Ci.y+Ot+Math.sin(A*.5)*.08,Ci.z),r.lookAt(gs.x+Qe*.6,gs.y+Ot*.6,gs.z);let Et=[];if(tt.forEach((F,Y)=>{let st=.75+.25*Math.sin(A*(9+Y)+Y*2);Et.push([F,Sn+1.35,kt+.15,1,.55*st,.18*st,.9*st,2.2]),Et.push([F,Sn+1.3,kt+.15,1,.9,.6,1,.5]),Math.random()<P*3*ce&&Pe(ve,1,F,Sn+1.4,kt+.15,{color:16752704,up:1,speed:.8,g:-2,life:.7,size:.18})}),ze.material.opacity=.45+.3*Math.sin(A*2)+Ge*.3,Et.push([0,gr,Bt,.7,.25,1,.5*Ce,20]),Math.random()<P*8*ce&&ue>.1){let F=Math.random()*ai;Pe(ve,1,Math.cos(F)*5.6*ue,gr+Math.sin(F)*7*ue,Bt,{colors:[12607743,16726634],up:.2,speed:1.5,g:-.5,life:1.4,size:.5})}Os.length=0;let At=Math.min(z,Yi.chars||z),yt=E.members;if(yt.length>At){yt=Ua,yt.length=0;for(let F of E.members)!(F.flags&1)&&yt.length<At&&yt.push(F);for(let F of E.members)F.flags&1&&yt.length<At&&yt.push(F)}let Ct=0,Bs=0,Tr=0,Er=0,Zl=0,Jl=0;for(let F of yt){let Y=It.get(F.id);Y||(Y={walk:Math.random()*10,spawn:A,skin:Hd[F.id%Hd.length],x:F.x,z:F.z,y:Se(F),atk:-9},It.set(F.id,Y)),Y.seen=A;let st=Math.hypot(F.x-Y.x,F.z-Y.z)/Math.max(P,.001);Y.x=F.x,Y.z=F.z;let Mt=F.flags&bt.down,St=F.flags&bt.asc,sn=st>.4&&!Mt;Y.walk+=P*(sn?11:0);let rt=Se(F);Y.y=rt;let Wt=Math.min(1,(A-Y.spawn)/.35),$i=(.3+.7*Wt)*(1+.15*Math.sin(Wt*Math.PI))*(St?1.18:1),gt=Math.max(0,1-(A-Y.atk)/.25),xs=(sn?Math.abs(Math.sin(Y.walk))*.12:0)+(F.flags&bt.cmd?Math.abs(Math.sin(A*12+F.id))*.16:0)+(St?.25+Math.sin(A*3)*.08:0);H.compose(G.set(F.x,rt+xs,F.z),j.setFromEuler(le.set(Mt?-1.45:0,Math.PI+(F.cls===1?0:Math.sin(A*.7+F.id)*.15),0)),Le.set($i,$i,$i)),Mt&&H.multiply(W.makeTranslation(0,.3,0));let Zi=F.info||{};ln.setHex(Zi.color??16777215),Mt&&ln.lerp(Sr,.7);let Ji=gt>0?$n.copy(ln).lerp(ps,gt*.5):ln,_s=sn?Math.sin(Y.walk):0;he(Je.body,Ct,0,.52,0,1,1,1,0,0,Ji),$n.setHex(Y.skin),Mt&&$n.lerp(Sr,.5),he(Je.head,Ct,0,1.06,0,1,1,1,0,0,$n),$n.copy(ln).multiplyScalar(.55),he(Je.hair,Ct,0,1.1,-.02,1,1,1,-.15,0,$n);let Gh=Mt||(A+F.id*.37)%4.2<.12?.15:1;he(Je.eyes,Ct*2,-.13,1.08,.31,1,Gh,1),he(Je.eyes,Ct*2+1,.13,1.08,.31,1,Gh,1);let Vh=F.cls===1?-gt*1.6:-gt*.8;he(Je.hands,Ct*2,-.36,.5+_s*.05,_s*.12,1,1,1,0,0,ln),he(Je.hands,Ct*2+1,.36,.62+gt*.2,.22,1,1,1,0,0,ln),he(Je.feet,Ct*2,-.13,.08,_s*.18,1,1,1),he(Je.feet,Ct*2+1,.13,.08,-_s*.18,1,1,1);let ks=$n.setHex(yh[F.cls]??16777215);Yi.props&&((F.cls===0||F.cls===3)&&(he(Je.staff,Tr,.4,.75+gt*.15,.2,1,1,1,Vh*.4,0),he(Je.orb,Tr,.4,1.45+gt*.2,.2,1+gt*.5,1+gt*.5,1+gt*.5,0,0,ks),Tr++),F.cls===0&&(he(Je.hat,Bs,0,1.55,-.03,1,1,1,-.2,.1,ks),Bs++),F.cls===1&&(he(Je.sword,Er,.42,.95,.3,1,1,1,-.6+Vh,-.2),he(Je.shield,Er,-.42,.6,.32,1,1,1,0,0,ks),Er++),F.cls===2&&(he(Je.bow,Zl,-.35,.72,.36,1,1,1,0,Math.PI/2+.1,null,Math.PI/2),Zl++),(F.cls===3||F.flags&bt.bless)&&(he(Je.halo,Jl,0,1.62,0,1,1,1,0,0,null),Jl++)),W.compose(G.set(F.x,rt+.03,F.z),j.identity(),Le.set(1.1,1,1.1)),Je.shadow.setMatrixAt(Ct,W),St?(Et.push([F.x,rt+.8,F.z,1,.85,.3,.9+.3*Math.sin(A*8),3.2]),Math.random()<P*8*ce&&Pe(ve,1,F.x,rt+.4,F.z,{color:16765773,up:1,speed:1.4,g:-3,life:.6,size:.25,jitter:.6})):(F.cls===0||F.cls===3)&&Yi.props&&(Ct<30||gt>0)&&(G.set(.4,1.45,.2).applyMatrix4(H),Et.push([G.x,G.y,G.z,ks.r,ks.g,ks.b,.6+gt,.9+gt*1.4])),F.flags&bt.gift&&Et.push([F.x,rt+.9,F.z,1,.5,.9,.9,2.6]),Os.push({id:F.id,x:F.x,y:rt+xs+1.62*$i+(F.cls===0?.35:0),z:F.z,info:Zi,flags:F.flags,cls:F.cls,hp:F.hp}),Ct++}let kf={eyes:Ct*2,hands:Ct*2,feet:Ct*2,staff:Tr,orb:Tr,hat:Bs,sword:Er,shield:Er,bow:Zl,halo:Jl};for(let F of Object.keys(Je)){let Y=Je[F];Y.count=kf[F]??Ct,Y.instanceMatrix.needsUpdate=!0,Y.instanceColor&&(Y.instanceColor.needsUpdate=!0)}if(It.size>yt.length+40)for(let[F,Y]of It)A-Y.seen>5&&It.delete(F);S.clear();let cn={imp:0,bru:0,wr:0,sh:0},Jn=null;for(let F of E.enemies){if(F.k===3){Jn=F;continue}let Y=Yn.get(F.id);Y||(Y={born:A,hit:-9,ph:Math.random()*ai},Yn.set(F.id,Y)),Y.seen=A;let st=Math.max(0,1-(A-Y.hit)/.18),Mt=Math.min(1,(A-Y.born)/.5),St=.2+.8*Mt,sn=Math.abs(Math.sin(A*9+Y.ph))*.12;if(ln.setHex(Ye[F.k]),st>0&&ln.lerp(ps,st*.85),F.k===0){let rt=cn.imp++;H.compose(G.set(F.x,sn,F.z),j.setFromEuler(le.set(0,Math.sin(A*4+Y.ph)*.2,Math.sin(A*9+Y.ph)*.12)),Le.set(St,St,St)),he(Ae.impBody,rt,0,.55,0,.45,.52,.42,0,0,ln),he(Ae.impHorn,rt*2,-.18,.98,0,.08,.3,.08,0,.35),he(Ae.impHorn,rt*2+1,.18,.98,0,.08,.3,.08,0,-.35),he(Ae.impEye,rt*2,-.13,.66,.36,.07,.06,.05),he(Ae.impEye,rt*2+1,.13,.66,.36,.07,.06,.05);let Wt=Math.sin(A*22+Y.ph)*.5;he(Ae.impWing,rt*2,-.42,.7,-.15,1,1,.2,0,1.2+Wt),he(Ae.impWing,rt*2+1,.42,.7,-.15,1,1,.2,0,-1.2-Wt),S.set(F.id,{x:F.x,y:.7,z:F.z,k:0})}else if(F.k===1){let rt=cn.bru++,Wt=Math.sin(A*5+Y.ph);H.compose(G.set(F.x,Math.abs(Wt)*.1,F.z),j.setFromEuler(le.set(.12,0,Wt*.06)),Le.set(St,St,St)),he(Ae.bruBody,rt,0,1.15,0,.95,1.1,.8,0,0,ln),he(Ae.bruArm,rt*2,-.95,.95,.1,1,1,1,Wt*.4,.25,ln),he(Ae.bruArm,rt*2+1,.95,.95,.1,1,1,1,-Wt*.4,-.25,ln),he(Ae.bruHorn,rt*2,-.45,2.05,.1,.13,.5,.13,-.3,.6),he(Ae.bruHorn,rt*2+1,.45,2.05,.1,.13,.5,.13,-.3,-.6),he(Ae.bruEye,rt*2,-.25,1.55,.72,.1,.08,.06),he(Ae.bruEye,rt*2+1,.25,1.55,.72,.1,.08,.06),S.set(F.id,{x:F.x,y:1.3,z:F.z,k:1})}else{let rt=cn.wr++,Wt=3.2+Math.sin(A*2+Y.ph)*.4;H.compose(G.set(F.x,Wt,F.z),j.setFromEuler(le.set(.25,Math.sin(A+Y.ph)*.3,Math.sin(A*1.7+Y.ph)*.15)),Le.set(St,St,St)),he(Ae.wrBody,rt,0,-.2,0,.55,-1.5,.55,0,0,ln),he(Ae.wrHood,rt,0,.62,0,.42,.45,.42),he(Ae.wrEye,rt*2,-.13,.62,.34,.07,.05,.05),he(Ae.wrEye,rt*2+1,.13,.62,.34,.07,.05,.05),Math.random()<P*4*ce&&Pe(ve,1,F.x,Wt-.8,F.z,{color:10115839,up:-.2,speed:.6,g:1,life:.6,size:.35}),S.set(F.id,{x:F.x,y:Wt+.3,z:F.z,k:2})}F.k!==2&&(W.compose(G.set(F.x,.03,F.z),j.identity(),Le.set(F.k===1?2.2:1.2,1,F.k===1?2.2:1.2)),Ae.eShadow.setMatrixAt(cn.sh++,W)),(F.k===1||cn.imp<40)&&Et.push([F.x,F.k===1?1.55:F.k===2?3.8:.66,F.z+(F.k===1?.75:.38),F.k===2?.5:1,F.k===1?.3:F.k===2?.9:.85,F.k===2?1:.2,.5,F.k===1?.9:.5])}let zf={impBody:cn.imp,impHorn:cn.imp*2,impEye:cn.imp*2,impWing:cn.imp*2,bruBody:cn.bru,bruArm:cn.bru*2,bruHorn:cn.bru*2,bruEye:cn.bru*2,wrBody:cn.wr,wrHood:cn.wr,wrEye:cn.wr*2,eShadow:cn.sh};for(let F of Object.keys(Ae)){let Y=Ae[F];Y.count=zf[F],Y.instanceMatrix.needsUpdate=!0,Y.instanceColor&&(Y.instanceColor.needsUpdate=!0)}if(Yn.size>200)for(let[F,Y]of Yn)A-Y.seen>3&&Yn.delete(F);for(let[F,Y]of Object.entries(M)){let st=Jn&&E.bo&&E.bo.id===F||q.id===F&&A-q.dieT<1.6;if(Y.g.visible=!!st,!st)continue;q.id!==F&&(q.id=F,q.born=A,q.dieT=-9,q.x=Jn?Jn.x:0,q.z=Jn?Jn.z:-30);let Mt=A-q.dieT<1.6;Jn&&!Mt&&(q.x+=(Jn.x-q.x)*Math.min(1,P*6),q.z+=(Jn.z-q.z)*Math.min(1,P*6));let St=Math.min(1,(A-q.born)/1.6),sn=Math.max(0,1-(A-q.atkT)/.8),rt=Mt?Math.min(1,(A-q.dieT)/1.5):0;Y.g.position.set(q.x+(Mt?(Math.random()-.5)*.3:0),(St-1)*6-rt*3+(F==="mastermind"?.6+Math.sin(A*1.4)*.3:0),q.z),Y.g.rotation.set(rt*.4,Math.sin(A*.6)*.2,0);let Wt=F==="mastermind"?1.85:F==="scientist2"?1.75:1.5;Y.g.scale.setScalar(Wt*(1+sn*.08)*(1-rt*.5));let $i=Math.max(0,1-(A-q.hitT)/.15);for(let[Zi,Ji]of Y.mats)Zi.emissive.copy(Ji).lerp(ps,$i*.6);let gt=Y.P;gt.armL&&(gt.armL.rotation.z=-.3-sn*1.2+Math.sin(A*2)*.1,gt.armR.rotation.z=.3+sn*1.4-Math.sin(A*2)*.1,gt.armR.rotation.x=-sn*1.2),gt.book&&(gt.book.position.y=2.6+Math.sin(A*2)*.15,gt.book.rotation.y=A*.8,gt.stone.position.set(Math.cos(A*1.5)*1.3,3.2+Math.sin(A*3)*.3,Math.sin(A*1.5)*.9+.3),gt.stone.rotation.y=A*3),gt.wings&&gt.wings.forEach((Zi,Ji)=>{Zi.rotation.z=(Ji?1:-1)*(1+Math.sin(A*3)*.15)}),gt.souls&&gt.souls.forEach((Zi,Ji)=>{let _s=A*1.2+Ji/6*ai;Zi.position.set(Math.cos(_s)*1.9,3.4+Math.sin(A*2+Ji)*.5,Math.sin(_s)*1.2)}),gt.orb&&gt.orb.scale.setScalar(.42*(1+sn*.8+Math.sin(A*6)*.05)),gt.cape&&(gt.cape.rotation.x=.12+Math.sin(A*1.8)*.08);let xs=Y.top;Et.push([Y.g.position.x,Y.g.position.y+xs*.5,q.z-.5,Y.aura[0],Y.aura[1],Y.aura[2],.55+sn*.6,12+sn*6]),Math.random()<P*14*ce&&Pe(ve,1,q.x+(Math.random()-.5)*3,Math.random()*xs*.7,q.z,{color:F==="scientist"?11559167:16724064,up:1,speed:1.2,g:-2.5,life:1,size:.5}),Mt&&Math.random()<P*30&&Pe(ve,3,q.x+(Math.random()-.5)*4,Math.random()*xs,q.z,{colors:[16777215,16765773,12607743],speed:6,g:2,life:.8,size:.7}),Jn&&S.set(Jn.id,{x:q.x,y:xs*.55,z:q.z,k:3})}let zh=new Set;for(let F of E.allies)if(F.k===0){let Y=ge.find(St=>St.id===F.id)||ge.find(St=>!St.id);if(!Y)continue;Y.id!==F.id&&(Y.id=F.id,Y.born=A,Y.x=F.x,Y.z=F.z,Pe(ve,30,F.x,1.5,F.z,{colors:[16769152,16777215],speed:6,up:.6,g:3,life:.7,size:.5}),L(F.x,.1,F.z,16765773,4,.7),fe(F.x,0,F.z,F.x,30,F.z,16769152,1.2,.6)),zh.add(Y);let st=Math.hypot(F.x-Y.x,F.z-Y.z)/Math.max(P,.001);Y.x=F.x,Y.z=F.z;let Mt=Math.min(1,(A-Y.born)/.4);Y.g.visible=!0,Y.g.position.set(F.x,st>.3?Math.abs(Math.sin(A*10))*.15:0,F.z),Y.g.rotation.y=Math.PI,Y.g.scale.setScalar(1.25*Mt),Y.arm.rotation.x=-Math.max(0,1-(A-Y.atk)/.3)*2.2+.3,Et.push([F.x,1.6,F.z,1,.82,.35,.55,4.5])}else{let Y=ye;Y.id!==F.id&&(Y.id=F.id,Y.born=A,Y.px=F.x,Y.pz=F.z,L(0,.2,0,16738858,10,1),mt=Math.max(mt,.8));let st=(F.x-Y.px)/Math.max(P,.001),Mt=(F.z-Y.pz)/Math.max(P,.001);Y.px=F.x,Y.pz=F.z;let St=Math.min(1,(A-Y.born)/1.2);Y.g.visible=!0,Y.g.position.set(F.x,9.5+(1-St)*12+Math.sin(A*2)*.5,F.z),Math.hypot(st,Mt)>.1&&(Y.g.rotation.y=Math.atan2(st,Mt)),Y.g.rotation.z=Math.sin(A*1.3)*.15,Y.wings[0].rotation.z=Math.sin(A*6)*.6,Y.wings[1].rotation.z=-Math.sin(A*6)*.6,Y.jaw.rotation.x=.25+Math.sin(A*8)*.15,Y.g.updateMatrixWorld(),G.set(0,0,1.2).applyMatrix4(Y.head.matrixWorld);let sn=F.x+Math.sin(Y.g.rotation.y)*2,rt=F.z+Math.cos(Y.g.rotation.y)*2+3;St>=1&&Pe(ve,3,G.x,G.y,G.z,{colors:[16764992,16738848,16722448],speed:1,vx:(sn-G.x)*1.4,vz:(rt-G.z)*1.4,up:-.9,vyMul:1,g:6,life:.7,size:.9,size1:1.6,drag:.5}),Et.push([F.x,Y.g.position.y,F.z,1,.5,.2,.6,9])}for(let F of ge)zh.has(F)||(F.g.visible&&Pe(ve,16,F.x,1.4,F.z,{color:16769152,speed:4,g:-1,life:.6,size:.4}),F.g.visible=!1,F.id=0);ye.g.visible&&!E.allies.some(F=>F.k===1)&&(ye.g.visible=!1,ye.id=0,Pe(ve,30,ye.px,9,ye.pz,{colors:[16764992,16738848],speed:7,g:0,life:.8,size:.6}));for(let F=U.length-1;F>=0;F--){let Y=U[F],st=(A-Y.t0)/Y.dur,Mt=S.get(Y.to);if(Mt&&(Y.last=Mt),st>=1){let $i=mr[Y.c]||mr.v;Pe(ve,Y.c==="m"?9:4,Y.last.x,Y.last.y,Y.last.z,{colors:$i,speed:Y.c==="m"?5:3,g:2,life:.35,size:Y.c==="m"?.55:.35}),Y.c==="m"&&L(Y.last.x,.15,Y.last.z,12611839,1.9,.35),U.splice(F,1);continue}let St=Y.sx+(Y.last.x-Y.sx)*st,sn=Y.sz+(Y.last.z-Y.sz)*st,rt=Y.sy+(Y.last.y-Y.sy)*st+Math.sin(st*Math.PI)*Y.arc,Wt=Y.col;Et.push([St,rt,sn,Wt.r,Wt.g,Wt.b,1,Y.c==="m"?1.3:Y.c==="v"?1:.7]),(Y.c!=="a"||Math.random()<.5)&&Pe(ve,1,St,rt,sn,{color:Y.c==="m"?16747066:(mr[Y.c]||mr.v)[0],speed:.3,g:0,life:.25,size:Y.c==="m"?.6:.35})}for(let F=0;F<xe.length;F++){let Y=xe[F];Y.t+=P;let st=Y.t/Y.life;if(st>=1){xe.splice(F--,1);continue}let Mt=.3+Y.r1*(1-Math.pow(1-st,3));ne.setMatrixAt(F,oe.compose(G.set(Y.x,Y.y,Y.z),j.identity(),Le.set(Mt,1,Mt))),ne.setColorAt(F,Xe.setHex(Y.col).multiplyScalar(1-st))}ne.count=xe.length,ne.instanceMatrix.needsUpdate=!0,ne.instanceColor&&(ne.instanceColor.needsUpdate=!0);for(let F=0;F<_e.length;F++){let Y=_e[F];Y.t+=P;let st=Y.t/Y.life;if(st>=1){_e.splice(F--,1);continue}let Mt=Y.a.distanceTo(Y.b);G.copy(Y.a).add(Y.b).multiplyScalar(.5),j.setFromUnitVectors(br,Ai.copy(Y.b).sub(Y.a).normalize());let St=Y.w*(st<.2?st/.2:1-(st-.2)/.8);Q.setMatrixAt(F,oe.compose(G,j,Le.set(St,Mt,St))),Q.setColorAt(F,Xe.setHex(Y.col).multiplyScalar(.8*(1-st)*(1-st*.3)))}if(Q.count=_e.length,Q.instanceMatrix.needsUpdate=!0,Q.instanceColor&&(Q.instanceColor.needsUpdate=!0),ee){let F=A-En.t0;if(En.saved){if(Math.random()<P*3&&F<14){let Y=(Math.random()-.5)*24,st=10+Math.random()*8,Mt=-8-Math.random()*14;Pe(ve,40,Y,st,Mt,{colors:[[16765773,16739029,8384767,8257418][Math.random()*4|0],16777215],speed:7,up:0,spreadUp:1,vyMul:1,g:3,drag:1.2,life:1.3,size:.45})}Math.random()<P*30*ce&&Pe(He,1,(Math.random()-.5)*16,12,-2+Math.random()*8,{colors:[16731530,16765773,5097215,8257418,13073919],up:0,speed:1,g:2.5,drag:1.4,life:4,size:.35,confetti:!0}),Et.push([0,20,-60,1,.75,.45,Z*.8,70])}else Math.random()<P*20*ce&&Pe(ve,1,(Math.random()-.5)*24,Math.random()*3,-20+Math.random()*24,{colors:[16722490,10100991],up:1,speed:2,g:-3,life:1.6,size:.8}),Math.random()<P*2&&(mt=Math.max(mt,.5))}Rt.material.uniforms.time.value=A,Rt.visible=Yi.dust,Te(ve,P,Et),Te(He,P,null),t.render(n,r)}function Ue(E){let P=ms;switch(E.k){case"shot":{let A=S.get(E.e);if(!A)break;if(E.c==="w"||E.c==="g"){if(Pe(ve,4,A.x,A.y+.3,A.z+.4,{colors:[16777215,E.c==="g"?16765773:16747114],speed:4,g:2,life:.25,size:.35}),E.c==="w"){let ue=It.get(E.s);ue&&(ue.atk=P)}else{let ue=ge.find(Ge=>Ge.id===-E.s);ue&&(ue.atk=P),L(A.x,.1,A.z,16765773,2.4,.3)}let Ce=Yn.get(E.e);Ce&&(Ce.hit=P);break}if(U.length>=K)break;let ee,Z,re,pe=E.s?It.get(E.s):null;pe?(ee=pe.x,Z=pe.y+1.4,re=pe.z,pe.atk=P):(ee=(Math.random()-.5)*14,Z=Sn+3,re=Ns),U.push({sx:ee,sy:Z,sz:re,to:E.e,last:A,t0:P,dur:Math.max(.12,E.d||.3),c:E.c,col:new ke((mr[E.c]||mr.v)[0]),arc:E.c==="m"?1.6:E.c==="v"?2.4:.4});break}case"dmg":{let A=Yn.get(E.e);A?A.hit=P:S.get(E.e)?.k===3&&(q.hitT=P),E.c===2&&(mt=Math.max(mt,.35));break}case"kill":{let A=E.q===2?3.2:.8;Pe(ve,E.q===1?14:8,E.x,A,E.z,{colors:[12607743,16726634,16777215],speed:4.5,g:3,life:.5,size:.45}),Pe(He,E.q===1?8:4,E.x,A,E.z,{color:1706528,speed:2.5,up:.8,g:-1,life:.9,size:.6,alpha:.7}),Yn.delete(E.e);break}case"heal":{let A=It.get(E.s),ee=It.get(E.t);A&&ee&&(fe(A.x,A.y+1.4,A.z,ee.x,ee.y+1,ee.z,6160282,.08,.4),Pe(ve,6,ee.x,ee.y+1,ee.z,{color:8257448,up:1,speed:1.5,g:-2,life:.6,size:.3}));break}case"down":{let A=It.get(E.id);A&&Pe(ve,8,A.x,A.y+.6,A.z,{color:16728160,speed:3,life:.4,size:.35});break}case"rise":{let A=It.get(E.id);A&&(Pe(ve,10,A.x,A.y+.5,A.z,{color:8257448,up:1,speed:2,g:-2,life:.6,size:.35}),fe(A.x,A.y,A.z,A.x,A.y+6,A.z,8257448,.25,.5));break}case"wallhit":Pe(ve,10,E.x,1.2,kt-.2,{colors:[16726586,16752704],speed:4,g:4,life:.4,size:.4}),Pe(He,5,E.x,1,kt-.2,{color:6971e3,speed:3,up:.5,g:9,life:.8,size:.3}),mt=Math.max(mt,.25+Math.min(.4,(E.d||1)*.1)),ci=P;break;case"block":Tn=P,Pe(ve,6,E.x,2.5,kt-1.2,{color:8050943,speed:3,life:.35,size:.4});break;case"toll":mt=Math.max(mt,1.2),ci=P;break;case"boss":mt=Math.max(mt,1),L(0,.2,Bt+4,16726634,14,1.2);break;case"bossatk":{q.atkT=P;let A=q.x,ee=q.z,Z=M[q.id]?.top||8;if(E.kind==="summon"){L(A,.2,ee,11550975,7,.9),Pe(ve,30,A,1,ee,{colors:[11550975,16726634],speed:6,up:.4,g:2,life:.8,size:.6});break}E.kind==="beam"?fe(A,Z*.6,ee+1,E.x,E.blocked?3.2:1.5,E.blocked?kt-1.4:kt,E.blocked?8050943:16722522,.55,.7):(L(A,.15,ee,16726634,16,.9),Pe(He,20,A,.3,ee,{color:4864600,speed:6,up:.6,g:12,life:.9,size:.5})),E.blocked?Tn=P:ci=P,mt=Math.max(mt,E.blocked?.5:1),Pe(ve,18,E.x,2,kt-.5,{colors:E.blocked?[8050943,16777215]:[16722522,16752704],speed:6,g:3,life:.5,size:.6});break}case"bossdown":case"retreat":q.dieT=P,mt=Math.max(mt,1.4),ci=P,L(q.x,.2,q.z,16765773,16,1.2),fe(q.x,0,q.z,q.x,40,q.z,E.k==="bossdown"?16769152:11550975,2.4,1.2);break;case"ult":{wr=P,mt=Math.max(mt,1.1),ci=P;let A=0;for(let[,ee]of S){if(A++>9)break;fe(ee.x,0,ee.z,ee.x,30,ee.z,E.p<1?8050943:16769152,.9,.7),Pe(ve,6,ee.x,.5,ee.z,{colors:[16777215,16769152],speed:5,g:2,life:.5,size:.6})}L(0,.2,-10,16769152,20,1);break}case"pulse":Tn=P,L(0,Sn,kt,8050943,14,.9);break;case"volley":{let A=It.get(E.id);A&&(L(A.x,A.y+.1,A.z,16765773,1.6,.5),Pe(ve,12,A.x,A.y+1.2,A.z,{colors:[16765773,16739029],up:1,speed:3,g:1,life:.6,size:.4}));break}case"gift":{let A=It.get(E.id);A&&Pe(ve,14,A.x,A.y+1,A.z,{colors:[16739029,16765773,8384767],up:1,speed:3.5,g:2,life:.7,size:.4}),E.tier==="rune"&&(Tn=P,L(0,Sn,kt+.5,8050943,12,.8)),E.tier==="awaken"&&A&&fe(A.x,A.y,A.z,A.x,30,A.z,16769152,.7,1);break}case"bless":{let A=It.get(E.id);A&&fe(A.x,A.y,A.z,A.x,25,A.z,E.why==="share"?8050943:16773280,.35,.8),E.why==="share"&&(Tn=P);break}case"class":{let A=It.get(E.id);A&&(L(A.x,A.y+.1,A.z,yh[E.c]||16777215,1.2,.4),Pe(ve,8,A.x,A.y+.8,A.z,{color:yh[E.c]||16777215,up:1,speed:2,g:-1,life:.5,size:.3}));break}case"join":{let A=It.get(E.id);A&&Pe(ve,6,A.x,A.y+.6,A.z,{color:16777215,speed:2,life:.4,size:.3});break}case"wave":L(0,.2,Bt+3,11550975,10,1);break;case"chapter":mt=Math.max(mt,.6),L(0,.2,Bt+3,16726634,18,1.4);break;case"end":En={saved:!!E.saved,t0:P},mt=Math.max(mt,1.2),ci=P;break;case"intro":case"gather":En=null,U.length=0;break}}let $e=390,it=844,Ne=new V,je=(E,P,A)=>(Ne.set(E,P,A).project(r),{x:(Ne.x*.5+.5)*$e,y:(-Ne.y*.5+.5)*it,vis:Ne.z<1&&Ne.z>-1});return{kind:"webgl",renderer:t,resize(E,P,A){$e=E,it=P,t.setPixelRatio(A),t.setSize(E,P,!1),r.aspect=E/P,r.fov=E/P<.7?52:42,r.updateProjectionMatrix(),ve.mat.uniforms.px.value=He.mat.uniforms.px.value=P*A*.9,Rt.material.uniforms.px.value=P*A*.5},setQuality(E){Yi=E,ce=E.particles},frame:Re,fx:Ue,project:je,enemyTop(E){let P=S.get(E);return P?je(P.x,P.y+(P.k===1?1.4:P.k===3?0:.8),P.z):null},bossTop(){let E=M[q.id];return!E||!E.g.visible?null:je(q.x,E.top+.5,q.z)},riftAt(){return je(0,gr,Bt)},drawn:()=>Os,shake(E){mt=Math.max(mt,E)},stats(){let E=t.info;return{calls:E.render.calls,tris:E.render.triangles,tex:E.memory.textures,geo:E.memory.geometries,chars:Je.body.count,enemies:Ae.impBody.count+Ae.bruBody.count+Ae.wrBody.count,parts:ve.list.length+He.list.length,bolts:U.length}},dispose(){n.traverse(E=>{E.isInstancedMesh&&E.dispose()});for(let E of a)E.dispose?.();t.dispose()},loseContext(){try{t.forceContextLoss()}catch{}}}}var Xd=i=>"#"+(i>>>0).toString(16).padStart(6,"0"),m_=["#d02a3a","#6a4a8a","#9a5aff"];function qd(i){let e=i.getContext("2d"),t=390,n=844,s=1,r=0,a=0,o=-9,l=null,c=null,u=[],m=new Map,f=[],h=y=>Math.max(0,Math.min(1,(y-Bt+2)/(6-Bt+2))),d=y=>.35+.65*h(y),_=(y,C)=>t/2+y*(t/24)*d(C),g=(y,C)=>n*.2+h(C)*n*.42-y*n*.018*d(C),p=(y,C,T)=>({x:_(y,T),y:g(C,T),vis:!0});function v(y,C,T){r=T,u.length=0,m.clear(),c=null,e.setTransform(s,0,0,s,0,0);let x=a>0?(a-=C,(Math.random()-.5)*10*a):0;e.translate(x,0);let b=y.phase==="ending"&&l===!0,D=y.phase==="ending"&&l===!1,I=e.createLinearGradient(0,0,0,n*.6);if(I.addColorStop(0,b?"#5a7ad8":"#08051a"),I.addColorStop(1,b?"#ffb070":D?"#5a0a14":"#3a1240"),e.fillStyle=I,e.fillRect(-10,0,t+20,n),!b){let B=_(0,Bt),oe=g(7.5,Bt),G=t*.16*(1+.05*Math.sin(T*3)),j=e.createRadialGradient(B,oe,G*.2,B,oe,G*1.6);j.addColorStop(0,"#1a0020"),j.addColorStop(.45,"#b040ff"),j.addColorStop(.7,"rgba(255,40,90,0.5)"),j.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=j,e.beginPath(),e.ellipse(B,oe,G*1.6,G*2,0,0,Math.PI*2),e.fill()}let k=g(0,Bt),O=e.createLinearGradient(0,k,0,n);O.addColorStop(0,"#2a1a34"),O.addColorStop(1,"#120a18"),e.fillStyle=O,e.fillRect(-10,k,t+20,n),e.fillStyle="#1a1424";for(let B=0;B<10;B++){let oe=-40+B*4.2;for(let G of[-1,1]){let j=G*(11+B%3*4),le=5+B*7%9;e.fillRect(_(j,oe)-14*d(oe),g(le,oe),28*d(oe),g(0,oe)-g(le,oe))}}let $=[...y.enemies].sort((B,oe)=>B.z-oe.z);for(let B of $){let oe=d(B.z),G=_(B.x,B.z),j=g(B.k===2?3.2:0,B.z),le=(B.k===1?16:B.k===3?44:9)*oe;e.fillStyle=B.k===3?y.bo&&y.bo.id==="mastermind"?"#2a1030":"#e8e4ee":m_[B.k],e.beginPath(),e.ellipse(G,j-le,le,le*1.2,0,0,Math.PI*2),e.fill(),e.fillStyle=B.k===3?"#ff2a4a":"#ffe14a",e.fillRect(G-le*.4,j-le*1.3,le*.22,le*.15),e.fillRect(G+le*.2,j-le*1.3,le*.22,le*.15),m.set(B.id,{x:G,y:j-le*2.2}),B.k===3&&(c={x:G,y:j-le*2.6,vis:!0})}let N=g(Sn,Xn),J=g(0,Xn);e.fillStyle="#5a5068",e.fillRect(-10,N,t+20,J-N+n*.08),e.fillStyle="#7a6e8a";for(let B=0;B<14;B++)e.fillRect(B*t/13-6,N-10,16,10);let te=Math.max(0,Math.min(100,y.bar||0))/100;te>.02&&(e.strokeStyle=`rgba(110,200,255,${.25+te*.6})`,e.lineWidth=4,e.beginPath(),e.ellipse(t/2,J,t*.52,n*.16,0,Math.PI,0),e.stroke());for(let B of y.members){let oe=_(B.x,B.z),G=B.z<Xn-.1?g(0,B.z):N+4,j=9*d(B.z);e.fillStyle=B.flags&bt.down?"#555":Xd(B.info?.color??16777215),e.beginPath(),e.arc(oe,G-j,j,0,Math.PI*2),e.fill(),e.fillStyle=Xd(Rn[B.cls]?.color??16777215),e.fillRect(oe-j*.5,G-j*2.6,j,j*.6),B.flags&bt.asc&&(e.strokeStyle="#ffd34d",e.lineWidth=2,e.beginPath(),e.arc(oe,G-j,j*1.6,0,Math.PI*2),e.stroke()),u.push({id:B.id,x:B.x,y:0,z:B.z,sx:oe,sy:G-j*3,info:B.info,flags:B.flags,cls:B.cls,hp:B.hp})}for(let B of y.allies){let oe=_(B.x,B.z),G=B.k?n*.22+Math.sin(T*2)*6:g(0,B.z);e.font=`${B.k?46:28}px sans-serif`,e.textAlign="center",e.fillText(B.k?"\u{1F409}":"\u{1F6E1}\uFE0F",oe,G)}for(let B=f.length-1;B>=0;B--){let oe=f[B],G=(T-oe.t)/.4;if(G>1){f.splice(B,1);continue}e.fillStyle=`rgba(${oe.c},${1-G})`,e.beginPath(),e.arc(oe.x,oe.y,6+G*18,0,Math.PI*2),e.fill()}T-o<.2&&(e.fillStyle=`rgba(255,255,255,${.35*(1-(T-o)/.2)})`,e.fillRect(0,0,t,n))}function R(y){if(y.k==="kill"){let C=p(y.x,.6,y.z);f.push({x:C.x,y:C.y,t:r,c:"200,90,255"})}(y.k==="wallhit"||y.k==="toll"||y.k==="bossatk")&&(a=Math.max(a,.5)),(y.k==="ult"||y.k==="bossdown"||y.k==="end")&&(o=r,a=Math.max(a,.6)),y.k==="end"&&(l=!!y.saved),(y.k==="intro"||y.k==="gather")&&(l=null)}return{kind:"2d",resize(y,C,T){t=y,n=C,s=Math.min(T,1.5),i.width=Math.round(y*s),i.height=Math.round(C*s),i.style.width=y+"px",i.style.height=C+"px"},setQuality(){},frame:v,fx:R,project:(y,C,T)=>{let x=u.find(b=>b.x===y&&b.z===T);return x?{x:x.sx,y:x.sy,vis:!0}:p(y,C,T)},enemyTop(y){let C=m.get(y);return C?{...C,vis:!0}:null},bossTop:()=>c,riftAt:()=>p(0,7.5,Bt),drawn:()=>u,shake(y){a=Math.max(a,y)},stats:()=>({kind:"2d",chars:u.length,enemies:m.size}),dispose(){}}}function Yd({silenceUrl:i="/assets/silence.mp3",record:e=!1}={}){let t={ctx:null,master:null,sfxGain:null,voiceGain:null,unlocked:!1,played:0,fails:0,cues:[],record:e,last:{},speakingUntil:0,muted:!1};try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}let n=new Audio;n.setAttribute("playsinline",""),n.preload="auto";function s(){if(t.ctx||e)return t.ctx;let h=window.AudioContext||window.webkitAudioContext;if(!h)return null;try{t.ctx=new h}catch{return null}return r(t.ctx,t.ctx.destination,t),t.ctx}function r(h,d,_){let g=h.createDynamicsCompressor();g.threshold.value=-14,g.ratio.value=6,g.attack.value=.003,g.release.value=.2,_.master=h.createGain(),_.master.gain.value=.9,_.sfxGain=h.createGain(),_.sfxGain.gain.value=.55,_.voiceGain=h.createGain(),_.voiceGain.gain.value=1,_.sfxGain.connect(_.master),_.voiceGain.connect(_.master),_.master.connect(g),g.connect(d)}t.unlock=()=>{let h=s();if(h){try{h.resume();let d=h.createBuffer(1,1,22050),_=h.createBufferSource();_.buffer=d,_.connect(h.destination),_.start(0)}catch{}t.elUnlocked||(n.src=i,n.play().then(()=>{n.pause(),t.elUnlocked=!0}).catch(()=>{})),t.unlocked=h.state==="running",setTimeout(()=>{t.unlocked=h.state==="running",t.onstate&&t.onstate(t.unlocked)},120)}},t.resume=()=>{t.ctx&&t.ctx.state!=="running"&&t.ctx.resume().catch(()=>{})},t.state=()=>e?"record":t.ctx?t.ctx.state:"none";let a=h=>{if(h.__noise)return h.__noise;let d=h.sampleRate,_=h.createBuffer(1,d,d),g=_.getChannelData(0),p=1;for(let v=0;v<d;v++)p=p*16807%2147483647,g[v]=p/10737418235e-1-1;return h.__noise=_,_};function o(h,d,_,g,p,v){d.gain.setValueAtTime(1e-4,_),d.gain.exponentialRampToValueAtTime(p,_+g),d.gain.exponentialRampToValueAtTime(1e-4,_+g+v)}function l(h,d,_,{type:g="sine",f0:p=440,f1:v=p,a:R=.005,d:y=.2,peak:C=.3,det:T=0}){let x=h.createOscillator(),b=h.createGain();x.type=g,x.frequency.setValueAtTime(p,_),v!==p&&x.frequency.exponentialRampToValueAtTime(Math.max(20,v),_+R+y),x.detune.value=T,o(h,b,_,R,C,y),x.connect(b).connect(d),x.start(_),x.stop(_+R+y+.05)}function c(h,d,_,{type:g="lowpass",f0:p=1e3,f1:v=p,q:R=.7,a:y=.003,d:C=.15,peak:T=.4}){let x=h.createBufferSource(),b=h.createBiquadFilter(),D=h.createGain();x.buffer=a(h),b.type=g,b.Q.value=R,b.frequency.setValueAtTime(p,_),v!==p&&b.frequency.exponentialRampToValueAtTime(Math.max(30,v),_+y+C),o(h,D,_,y,T,C),x.connect(b).connect(D).connect(d),x.start(_,Math.random()*.5),x.stop(_+y+C+.05)}let u={punch:(h,d,_,g=1)=>{c(h,d,_,{f0:1400,f1:300,d:.08,peak:.5*g}),l(h,d,_,{f0:150,f1:55,d:.1,peak:.55*g})},crit:(h,d,_)=>{u.punch(h,d,_,1.2),l(h,d,_,{type:"square",f0:1800,f1:900,d:.06,peak:.12}),c(h,d,_+.01,{type:"highpass",f0:3e3,d:.12,peak:.25})},block:(h,d,_)=>{l(h,d,_,{type:"triangle",f0:1200,f1:1100,d:.18,peak:.18}),l(h,d,_,{type:"triangle",f0:1810,d:.14,peak:.1})},ko:(h,d,_)=>{l(h,d,_,{type:"sine",f0:260,f1:980,a:.005,d:.16,peak:.35}),c(h,d,_,{type:"bandpass",f0:2500,f1:600,q:1.2,d:.25,peak:.35}),l(h,d,_+.09,{type:"triangle",f0:1320,d:.2,peak:.12})},dash:(h,d,_)=>{c(h,d,_,{type:"bandpass",f0:500,f1:3500,q:2,a:.04,d:.22,peak:.45})},shield:(h,d,_)=>{[880,1320,1760].forEach((g,p)=>l(h,d,_+p*.03,{type:"sine",f0:g,d:.45,peak:.09}))},boom:(h,d,_,g=1)=>{c(h,d,_,{f0:900,f1:80,a:.004,d:.9,peak:.8*g}),l(h,d,_,{f0:90,f1:28,d:.8,peak:.8*g})},whistle:(h,d,_)=>{l(h,d,_,{type:"sine",f0:1900,f1:500,a:.05,d:.95,peak:.07})},coin:(h,d,_)=>{l(h,d,_,{type:"square",f0:988,d:.07,peak:.1}),l(h,d,_+.07,{type:"square",f0:1319,d:.28,peak:.1})},power:(h,d,_)=>{[523,659,784,1047].forEach((g,p)=>l(h,d,_+p*.05,{type:"triangle",f0:g,d:.3,peak:.14})),c(h,d,_,{type:"highpass",f0:2e3,f1:6e3,a:.1,d:.4,peak:.12})},heal:(h,d,_)=>{[660,880,1100].forEach((g,p)=>l(h,d,_+p*.06,{f0:g,d:.25,peak:.08}))},beep:(h,d,_)=>{l(h,d,_,{f0:880,d:.12,peak:.22})},go:(h,d,_)=>{l(h,d,_,{type:"sawtooth",f0:660,d:.5,peak:.12}),l(h,d,_,{type:"square",f0:1320,d:.5,peak:.08}),c(h,d,_,{f0:4e3,f1:500,d:.4,peak:.25})},land:(h,d,_)=>{l(h,d,_,{f0:120,f1:50,d:.12,peak:.3}),c(h,d,_,{f0:600,d:.1,peak:.15})},spin:(h,d,_)=>{c(h,d,_,{type:"bandpass",f0:300,f1:2400,q:3,a:.08,d:.35,peak:.5}),u.punch(h,d,_+.25,1.1)},cheer:(h,d,_)=>{c(h,d,_,{type:"bandpass",f0:1200,f1:1500,q:.6,a:.25,d:2.2,peak:.35}),c(h,d,_+.1,{type:"bandpass",f0:2600,f1:2200,q:.8,a:.3,d:2,peak:.18})},fanfare:(h,d,_)=>{[[523,0],[659,.12],[784,.24],[1047,.38],[784,.6],[1047,.72]].forEach(([g,p],v)=>{l(h,d,_+p,{type:"sawtooth",f0:g,d:v===5?.9:.16,peak:.07}),l(h,d,_+p,{type:"triangle",f0:g*2,d:v===5?.9:.16,peak:.05})}),u.cheer(h,d,_+.2)},nuke:(h,d,_)=>{u.boom(h,d,_,1.3),u.boom(h,d,_+.25,1),l(h,d,_,{type:"sawtooth",f0:220,f1:40,d:1.6,peak:.25})},pop:(h,d,_)=>{l(h,d,_,{f0:500,f1:1400,d:.07,peak:.15})},creak:(h,d,_)=>{l(h,d,_,{type:"sawtooth",f0:95,f1:140,a:.08,d:.7,peak:.07,det:8}),l(h,d,_+.05,{type:"square",f0:190,f1:120,a:.1,d:.6,peak:.03}),c(h,d,_,{type:"bandpass",f0:900,f1:500,q:6,a:.1,d:.6,peak:.12})},ghost:(h,d,_)=>{l(h,d,_,{type:"sine",f0:520,f1:760,a:.25,d:.9,peak:.08,det:15}),l(h,d,_+.1,{type:"sine",f0:780,f1:500,a:.3,d:.9,peak:.05})},thunder:(h,d,_)=>{c(h,d,_,{f0:500,f1:60,a:.02,d:1.8,peak:.6}),c(h,d,_+.15,{f0:250,f1:50,a:.1,d:1.6,peak:.45})},bell:(h,d,_)=>{[[110,.25],[220,.12],[277,.07],[330,.06],[440,.04]].forEach(([g,p])=>l(h,d,_,{type:"sine",f0:g,a:.004,d:2.6,peak:p}))},organ:(h,d,_)=>{[[147,0],[175,0],[220,0],[294,.02],[131,.6],[165,.6],[196,.6],[262,.62]].forEach(([g,p])=>{l(h,d,_+p,{type:"sawtooth",f0:g,a:.04,d:p?.9:.55,peak:.035}),l(h,d,_+p,{type:"triangle",f0:g*2,a:.04,d:p?.9:.55,peak:.03})})},heart:(h,d,_)=>{l(h,d,_,{f0:70,f1:45,d:.12,peak:.45}),l(h,d,_+.17,{f0:62,f1:40,d:.14,peak:.35})},chime:(h,d,_)=>{[1319,1568,1976,2637].forEach((g,p)=>l(h,d,_+p*.07,{type:"sine",f0:g,d:.6,peak:.07}))},trap:(h,d,_)=>{c(h,d,_,{type:"bandpass",f0:3e3,f1:300,q:1.5,a:.01,d:.35,peak:.4}),u.boom(h,d,_+.22,.7)},shatter:(h,d,_)=>{for(let g=0;g<6;g++)l(h,d,_+g*.035,{type:"triangle",f0:2200+g*430,f1:1800,d:.12,peak:.06});c(h,d,_,{type:"highpass",f0:4e3,d:.4,peak:.3})},wind:(h,d,_)=>{c(h,d,_,{type:"bandpass",f0:380,f1:700,q:4,a:.9,d:2.2,peak:.12})},squeak:(h,d,_)=>{l(h,d,_,{type:"triangle",f0:900,f1:1300,d:.08,peak:.07})},roar:(h,d,_)=>{l(h,d,_,{type:"sawtooth",f0:120,f1:60,a:.05,d:.9,peak:.16,det:20}),c(h,d,_,{type:"lowpass",f0:1200,f1:300,a:.05,d:.9,peak:.35})}},m={squeak:.06,ghost:.25,heart:.3,punch:.045,crit:.06,block:.08,ko:.08,heal:.15,land:.06,pop:.05,coin:.05,boom:.06};t.sfx=(h,d=t.now(),_=1)=>{if(t.muted||!u[h])return;let g=m[h]||.03;if(t.last[h]&&d-t.last[h]<g)return;if(t.last[h]=d,e){t.cues.push({k:"sfx",kind:h,t:d,v:_});return}let p=t.ctx;if(!(!p||p.state!=="running"))try{u[h](p,t.sfxGain,p.currentTime+.01,_)}catch{}},t.now=()=>e?t.clock():t.ctx?t.ctx.currentTime:0,t.clock=()=>0;let f=null;return t.voice=async(h,d)=>{if(t.muted||!h)return!1;if(t.speakingUntil=t.now()+(d||2),e)return t.cues.push({k:"voice",url:h,t:t.now(),dur:d}),!0;let _=t.ctx;if(_&&_.state!=="running"&&t.resume(),_&&_.state==="running")try{let g=await fetch(h).then(y=>{if(!y.ok)throw new Error("HTTP "+y.status);return y.arrayBuffer()}),p=await new Promise((y,C)=>{let T=_.decodeAudioData(g,y,C);T&&T.catch&&T.catch(C)});if(f)try{f.stop()}catch{}let v=_.createBufferSource();v.buffer=p,v.connect(t.voiceGain);let R=_.currentTime+.02;return t.sfxGain.gain.setTargetAtTime(.28,R,.05),t.sfxGain.gain.setTargetAtTime(.55,R+p.duration,.2),v.start(R),f=v,t.played++,v.onended=()=>{f===v&&(f=null)},!0}catch{t.fails++}try{return n.src=h,await n.play(),t.played++,!0}catch{return t.fails++,!1}},t.mix=async(h,d=44100)=>{let _=window.OfflineAudioContext||window.webkitOfflineAudioContext,g=new _(2,Math.ceil(h*d),d),p={};r(g,g.destination,p);let v=t.cues.filter(O=>O.k==="voice"),R=await Promise.all(v.map(O=>fetch(O.url).then($=>$.arrayBuffer()).then($=>g.decodeAudioData($)).catch(()=>null)));for(let O of t.cues)if(O.k==="sfx"&&O.t<h)try{u[O.kind](g,p.sfxGain,O.t+.01,O.v)}catch{}v.forEach((O,$)=>{let N=R[$];if(!N||O.t>=h)return;let J=g.createBufferSource();J.buffer=N,J.connect(p.voiceGain),J.start(O.t+.02),p.sfxGain.gain.setTargetAtTime(.28,O.t,.05),p.sfxGain.gain.setTargetAtTime(.55,O.t+N.duration,.2)});let y=await g.startRendering(),C=y.length,T=[y.getChannelData(0),y.getChannelData(1)],x=new DataView(new ArrayBuffer(44+C*4)),b=(O,$)=>{for(let N=0;N<$.length;N++)x.setUint8(O+N,$.charCodeAt(N))};b(0,"RIFF"),x.setUint32(4,36+C*4,!0),b(8,"WAVEfmt "),x.setUint32(16,16,!0),x.setUint16(20,1,!0),x.setUint16(22,2,!0),x.setUint32(24,d,!0),x.setUint32(28,d*4,!0),x.setUint16(32,4,!0),x.setUint16(34,16,!0),b(36,"data"),x.setUint32(40,C*4,!0);let D=44;for(let O=0;O<C;O++)for(let $=0;$<2;$++){let N=Math.max(-1,Math.min(1,T[$][O]));x.setInt16(D,N*32767,!0),D+=2}let I=new Uint8Array(x.buffer),k="";for(let O=0;O<I.length;O+=32768)k+=String.fromCharCode.apply(null,I.subarray(O,O+32768));return btoa(k)},t}function $d(i,{off:e=!1}={}){let t=Math.random().toString(36).slice(2,8),n=performance.now(),s=[];addEventListener("error",o=>{s.push(String(o.message||"error").slice(0,110)),s.length>3&&s.shift()}),addEventListener("unhandledrejection",o=>{s.push(("rej "+(o.reason&&o.reason.message||o.reason)).slice(0,110)),s.length>3&&s.shift()});let r=o=>{let l=i();return{id:t,reason:o,up:(performance.now()-n)/1e3,ua:navigator.userAgent.slice(0,160),scr:{w:screen.width,h:screen.height,dpr:devicePixelRatio},vis:document.visibilityState,errs:s.slice(),...l,mem:{...l.mem||{},heap:performance.memory?performance.memory.usedJSHeapSize/1048576:void 0}}},a=o=>{if(e)return;let l=r(o),c=JSON.stringify(l);if(o==="start")try{let u=JSON.parse(localStorage.getItem("lg_diagLast")||"null");u&&u.reason!=="pagehide"&&(c=JSON.stringify({...l,prev:u}))}catch{}try{localStorage.setItem("lg_diagLast",JSON.stringify(l))}catch{}try{navigator.sendBeacon&&navigator.sendBeacon("/diag",new Blob([c],{type:"text/plain"}))||fetch("/diag",{method:"POST",body:c,keepalive:!0}).catch(()=>{})}catch{}};return setTimeout(()=>a("start"),4e3),setInterval(()=>a("tick"),3e4),document.addEventListener("visibilitychange",()=>{document.hidden&&a("hidden")}),addEventListener("pagehide",()=>a("pagehide")),{send:a,errs:s}}var xr=(i,e)=>i[Math.floor(e()*i.length)%i.length],Ea=i=>i>=1e9?`${(Math.floor(i/1e7)/100).toString()} billion`:i>=1e6?`${Math.round(i/1e6)} million`:`${Math.max(0,Math.round(i)).toLocaleString("en-US")}`,Mh=i=>(i.charAt(0)+i.slice(1).toLowerCase()).replace("mastermind","Mastermind"),Ds=[125e7,1e9,75e7,5e8,25e7,1e8],g_={scientist:"He was a father once. Now the book speaks through him. The Corrupted Scientist... walks out of the rift!",scientist2:"The stone has fused with his heart. The Scientist... unbound! Hit him with everything!",mastermind:"At last. The one who stole five billion souls. The Mastermind... steps into the light!"},x_={scientist:"The Corrupted Scientist falls back into the dark. For a moment... he remembers his daughter.",scientist2:"The Scientist is broken! The stone cracks... and the rift screams.",mastermind:"The Mastermind is destroyed!"};function Zd({nameOf:i,rng:e=Math.random,survivors:t=()=>15e8}){let n=[],s=0,r=0,a=(l,c,u,m={})=>({text:l,pri:c,banner:u||null,...m}),o=l=>{let c=l.map(i).filter(Boolean);if(!c.length)return"";let u=c.slice(0,3),m=c.length-u.length;return(u.length===1?u[0]:u.slice(0,-1).join(", ")+" and "+u[u.length-1])+(m>0?` and ${m} more`:"")};return{lines(l,c){let u=[];for(let f of l){let h=f.id?i(f.id):null;switch(f.k){case"intro":r=0;break;case"lore":u.push(a(Wn[f.i].say,10,null,{win:1,lore:f.i}));break;case"gather":u.push(a(xr(["Survivors, to the wall! Comment mage, warrior, archer or healer to take your post.","The citadel needs you. Comment to join the defense. Pick a class: mage, warrior, archer, healer."],e),8,"TO THE WALL!",{win:1}));break;case"chapter":u.push(a(`Chapter ${f.n}. ${f.title.toLowerCase().replace(/(^|\s)\S/g,d=>d.toUpperCase())}.`,9,`CHAPTER ${f.n}`,{win:1}));break;case"wave":u.push(a(f.i===1?xr(["They are coming. Hold the wall!","The rift opens wide. Here they come!"],e):xr([`Wave ${f.n}. Stronger. Hungrier.`,`Wave ${f.n}! Keep firing!`,"Another wave pours out of the rift."],e),5,`WAVE ${f.n}`));break;case"clear":u.push(a(xr(["The field is clear. Breathe.","Wave broken. Well fought, survivors.","They fall back. Ready yourselves."],e),4,"WAVE CLEARED"));break;case"boss":u.push(a(g_[f.id]||`${f.name} has come!`,10,"BOSS!",{win:1}));break;case"bossatk":f.kind==="summon"?u.push(a("He calls more creatures from the rift!",5)):f.downed&&f.downed.length>2&&u.push(a(f.blocked?"The barrier holds against the blast!":"A dark blast hits the wall! Healers, raise them!",6));break;case"bossdown":{let d=f.by?i(f.by):null;u.push(a(`${x_[f.id]||`${f.name} is defeated!`}${d?` Final blow: ${d}!`:""}`,10,"BOSS DEFEATED!",{win:1}));break}case"retreat":u.push(a(`${f.name} retreats into the rift... and drags souls with him.`,9,"SOULS TAKEN"));break;case"toll":u.push(a(`${Ea(f.n)} souls taken.`,6));break;case"vote":if(f.start){let d=Mi[f.i];u.push(a(`${Mh(d.q)}. ${Mh(d.a.label)}? Comment one. Or ${d.b.label.toLowerCase()}? Comment two. Choose!`,10,"VOTE!",{win:1}))}break;case"choice":{let d=Mi[f.i],_=d[f.key===d.a.key?"a":"b"];u.push(a(`${f.none?"Nobody chose. Fate decides. ":"The survivors have chosen. "}${Mh(_.label)}. ${pr[f.key].text}`,10,_.label,{win:1}));break}case"end":{let d=(f.top||[]).map(i).filter(Boolean),_=f.saved?(Od[(f.choices||[]).join("-")]||"Earth is saved. {n} survivors live on.").replace("{n}",Ea(f.survivors)):`The last light goes out. Earth has fallen... on wave ${f.wave}.`;u.push(a(`${f.saved?"Earth is saved! ":""}${_}${d.length?` Top defender: ${d[0]}! Shoutout to ${d[0]}!`:""} ${f.saved?"The Ascension System remembers you.":"But the Ascension System will rise again."}`,10,f.saved?"EARTH SAVED":"EARTH FELL",{win:1}));break}case"gift":{let d={volley:f.coins>=2?`${h} unleashes a spell volley!`:null,rune:`${h} carves a shield rune into the wall!`,guardian:f.extended?`${h} renews a guardian's oath!`:`${h} summons a guardian hero to the gate!`,awaken:f.cool?`${h} ascends! Power times three!`:`${h} awakens the Ascension System! Ultimate!`,dragon:f.judgment?`${h} calls the dragon! Judgment on the boss!`:`${h} summons a dragon! Burn them all!`}[f.tier];d&&u.push(a(d,{volley:4,rune:6,guardian:8,awaken:9,dragon:10}[f.tier],{volley:null,rune:"SHIELD RUNE",guardian:"GUARDIAN!",awaken:"ASCENSION!",dragon:f.judgment?"JUDGMENT!":"DRAGON!"}[f.tier],{gift:f.tier}));break}case"bless":u.push(a(f.why==="follow"?`${h} follows. A blessing of light upon you.`:`${h} shares the signal! The fallen rise and the barrier glows!`,4));break;case"pulse":u.push(a("The likes charge the barrier! Ascension pulse!",7,"ASCENSION PULSE"));break;case"class":!f.bot&&h&&e()<.35&&u.push(a(`${h} becomes ${/^[aeiou]/i.test(Rn[f.c].label)?"an":"a"} ${Rn[f.c].label.toLowerCase()}.`,2));break;case"join":f.bot||n.push(f.id);break}}let m=t();for(;r<Ds.length&&m<Ds[r];)m>0&&(r+1>=Ds.length||m>=Ds[r+1])&&u.push(a(xr([`Only ${Ea(Ds[r])} survivors left. Hold on!`,`We are down to ${Ea(Ds[r])}. Do not let them through!`],e),7,`${Ea(Ds[r]).toUpperCase()} LEFT`)),r++;if(n.length&&c-s>6){s=c;let f=n.splice(0,60);u.push(a(xr([`${o(f)} join the defense.`,`Welcome to the wall, ${o(f)}.`],e),2))}return u}}}var Jd=["Sara","Ali","Hina","Omar","Zara","Bilal","Noor","Ayan","Esha","Faraz","Iman","Junaid","Kinza","Laiba","Moiz","Nimra","Rida","Saad","Tania","Umer","Maya","Leo","Aisha","Yusuf","Lina","Kai","Mia","Zain","Sofia","Adam","Hamza","Amna","Riya","Dev","Luna","Max"],Kd=["","_x","22",".official","_99","\u{1F338}","xo","_07",".live","\u2728","_pk","786"],jd=["hi","join","lets go","me!","hello from dubai","gg","this is fire","shield","dash","\u{1F4A8}","\u{1F6E1}\uFE0F","dance","color pink","color gold","revenge","wow","\u{1F525}\u{1F525}","i will win","play","1","2","3","2","left","right","3\uFE0F\u20E3","candle","clock","echo","map","attack","mage","warrior","archer","healer","\u{1F52E}","\u{1F3F9}","seal","hunt","city","army"],Qd=[["Rose",1],["TikTok",1],["Finger Heart",5],["GG",1],["Doughnut",30],["Hand Hearts",100],["Corgi",299],["Money Gun",500],["Lion",29999]];function ef(i="busy",e=Math.random){let t=c=>Math.floor(e()*c),n=[],s=()=>{let c=Jd[t(Jd.length)]+Kd[t(Kd.length)],u={uid:c.toLowerCase().replace(/[^\w.]/g,"")+n.length,name:c};return n.push(u),u},r=()=>n.length?n[t(n.length)]:s(),a=0,o=0,l=i==="quiet"?3:i==="gifts"?30:i==="demo"?40:220;return{people:n,tick(c){a+=c,o+=c;let u=[],m=i==="quiet"?.6:i==="busy"?Math.min(14,2+a/6):i==="demo"?5:4;for(;o>1/m;){o-=1/m;let h=n.length<Math.min(l,i==="busy"?10+a*2.5:l)&&e()<.6?s():r(),d=e();if(d<.5){let _=jd[t(jd.length)];if(e()<.25&&n.length>2){let g=r();g!==h&&(_=(e()<.5?"attack ":"\u2694\uFE0F ")+g.name.replace(/[^\w]/g,"").slice(0,6))}u.push({type:"chat",uid:h.uid,name:h.name,text:_})}else if(d<.8)u.push({type:"like",uid:h.uid,name:h.name,count:1+t(15)});else if(d<(i==="gifts"?.98:.9)){let _=e()<.75?Qd[t(4)]:Qd[4+t(i==="gifts"?4:3)];u.push({type:"gift",uid:h.uid,name:h.name,giftName:_[0],coins:_[1],count:e()<.2?1+t(5):1})}else d<.95?u.push({type:"follow",uid:h.uid,name:h.name}):u.push({type:"share",uid:h.uid,name:h.name})}return u}}}var zt=new URLSearchParams(location.search),Oe=i=>document.getElementById(i),ql=/iPhone|iPad|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Pa=zt.get("mode")==="phone"||zt.get("mode")!=="pc"&&(ql||/Android|Mobile/.test(navigator.userAgent)),qn=zt.get("render")==="1",yr=qn||zt.get("local")==="1",Ih=zt.get("key")||"",La=Number(zt.get("fps"))||(Pa?30:60),bf=zt.get("mute")==="1";zt.get("clean")==="1"&&document.body.classList.add("clean");var wf=Pa?[{pr:1.5,maxW:780,labels:16,particles:1,dust:!0,props:!0,chars:64},{pr:1.25,maxW:700,labels:12,particles:.75,dust:!0,props:!0,chars:52},{pr:1,maxW:600,labels:9,particles:.5,dust:!1,props:!0,chars:42},{pr:.8,maxW:480,labels:7,particles:.35,dust:!1,props:!1,chars:32}]:[{pr:2,maxW:Number(zt.get("maxw"))||1080,labels:20,particles:1,dust:!0,props:!0},{pr:1.5,maxW:900,labels:16,particles:1,dust:!0,props:!0},{pr:1,maxW:700,labels:12,particles:.6,dust:!1,props:!0,chars:56},{pr:.8,maxW:540,labels:9,particles:.4,dust:!1,props:!1,chars:44}],bn=zt.has("q")?Math.max(0,Math.min(3,Number(zt.get("q")))):0,__=zt.has("q"),bi=Oe("gl"),_t=null,Tf=0,Ef=0,Bl=[],ds=!1,Fs=Oe("hud"),Ve=Fs.getContext("2d");function Af(){if(!(zt.get("view")==="2d"||localStorage.getItem("lg_force2d")==="1"))try{_t=Wd(bi,{maxChars:70,particles:Pa?800:1200,aa:!Pa||ql,preserve:qn}),bi.addEventListener("webglcontextlost",Na,!1),bi.addEventListener("webglcontextrestored",Cf,!1);return}catch{Ti("gl-fail")}Yl()}function Yl(){if(_t&&_t.kind==="2d")return;try{_t&&_t.dispose(),_t&&_t.loseContext&&_t.loseContext()}catch{}let i=document.createElement("canvas");i.id="gl",bi.replaceWith(i),bi=i,_t=qd(bi,{}),Ti("view-2d"),fs()}function Na(i){i.preventDefault(),Tf++,ds=!0,Ti("ctx-lost"),Bl.push(performance.now()),Bl=Bl.filter(e=>performance.now()-e<12e4),Ff("Graphics reset\u2026 recovering"),clearTimeout(Na.t),Na.t=setTimeout(()=>{ds&&(localStorage.setItem("lg_force2d","1"),Yl(),ds=!1,Xl())},4e3),kh&&kh.send("ctxlost")}function Cf(){if(clearTimeout(Na.t),Ef++,Ti("ctx-restored"),Bl.length>=3){localStorage.setItem("lg_force2d","1"),Yl(),ds=!1,Xl();return}try{_t.dispose()}catch{}bi.removeEventListener("webglcontextlost",Na),bi.removeEventListener("webglcontextrestored",Cf),_t=null,Af(),bn=Math.min(3,bn+1),fs(),ds=!1,Xl()}var Ph=390,Lh=844;function fs(){let i=window.innerWidth,e=window.innerHeight,t=Oe("stage"),n=i,s=e;i/e>.7&&(n=Math.round(Math.min(i,e*9/16)),s=Math.round(Math.min(e,n*16/9))),t.style.width=n+"px",t.style.height=s+"px",Ph=n,Lh=s,document.documentElement.style.setProperty("--u",(n/100).toFixed(3)+"px");let r=wf[bn],a=window.devicePixelRatio||1,o=Math.min(a,r.pr,r.maxW/n);_t&&(_t.resize(n,s,o),_t.setQuality(r));let l=Math.min(a,2,900/n);Fs.width=Math.round(n*l),Fs.height=Math.round(s*l),Fs.__pr=l}addEventListener("resize",()=>{clearTimeout(fs.t),fs.t=setTimeout(fs,120)});var tn=Yd({record:qn});tn.muted=bf;var Rf=Oe("soundChip");function v_(){tn.unlock(),setTimeout(()=>{tn.state()==="running"&&(Rf.hidden=!0)},200)}["pointerdown","touchstart","click","keydown"].forEach(i=>addEventListener(i,v_,{passive:!0}));document.addEventListener("visibilitychange",()=>{document.hidden||tn.resume()});!qn&&!bf&&(tn.unlock(),setTimeout(()=>{tn.state()!=="running"&&(Rf.hidden=!1)},700));var wi=new Map,kl=[],Ti=i=>{kl.push(i),kl.length>8&&kl.shift()},Ei={ws:0,snaps:0,ev:0,err:0,say:0},wn=[],Xi=null,tf=0,nf="",Vl=ba,Si=null,Dl="",en={phase:"intro",members:[],enemies:[],allies:[],tl:0,pd:1,ch:1,wv:0,wi:0,sv:15e8,bar:0,hype:0,vi:-1,vc:[0,0],cho:[],left:0,n:0,run:0,bo:null,best:0,saves:0},sf=-1,y_=0,Hl=null,Wl=null;function Nh(i=[],e=[]){for(let t of e)wi.delete(t);for(let t of i)wi.set(t.id,t)}var li=null,Aa=1e3;function Dh(){let i=(location.protocol==="https:"?"wss://":"ws://")+location.host+"/ws?game=siege"+(Ih?"&key="+encodeURIComponent(Ih):"");try{li=new WebSocket(i)}catch{return setTimeout(Dh,Aa)}li.onopen=()=>{Ei.ws++,Aa=1e3,Ti("ws-open"),Xl();try{let e=JSON.parse(localStorage.getItem("lg_siegeBoard")||"null");e&&e.json&&e.sig&&li.send(JSON.stringify({t:"restore",json:e.json,sig:e.sig}))}catch{}},li.onmessage=e=>{let t;try{t=JSON.parse(e.data)}catch{return}M_(t)},li.onclose=()=>{li=null,Ti("ws-close"),setTimeout(Dh,Aa),Aa=Math.min(1e4,Aa*1.7),Ei.ws&&Ff("Reconnecting\u2026")},li.onerror=()=>{}}function M_(i){switch(i.t){case"hello":wi.clear(),Nh(i.roster),wn=[],Xi=null,Vl=i.tiers||Vl,Uf(),mf(i),rf(i.snap);break;case"roster":Nh(i.add,i.del);break;case"s":rf(i);break;case"say":Df(i.text,i.url,i.dur);break;case"banner":Nf(i.text);break;case"board":mf(i);break;case"status":Dl=i.tiktok?.state||"",Oe("conn").className=Dl==="connected"?"connected":/wait|connecting|reconnect/.test(Dl)?"waiting":Dl==="error"?"error":"",H_(i.tiktok);break}}function rf(i){if(!i)return;Ei.snaps++;let t=performance.now()/1e3-i.tm;Xi===null||t<Xi||Math.abs(t-Xi)>2?Xi=t:Xi+=(t-Xi)*.02,wn.length&&i.tm<wn[wn.length-1].tm-1&&(wn=[],Xi=t),wn.push({tm:i.tm,s:i,done:!1}),wn.length>40&&wn.shift()}var S_=.16;function b_(i){if(!wn.length)return en;let e=i-Xi-S_;for(let r of wn)if(!r.done&&r.tm<=e){r.done=!0;let a=e-r.tm>1.2;for(let o of r.s.ev||[])Lf(o,a)}let t=wn[0],n=null;for(let r=0;r<wn.length;r++)if(wn[r].tm<=e)t=wn[r];else{n=wn[r];break}if(!n||n===t)return Uh(t.s,null,0);let s=Math.max(0,Math.min(1,(e-t.tm)/Math.max(.001,n.tm-t.tm)));return Uh(t.s,n.s,s)}var w_=[],T_=[],E_=[],A_={name:"?",color:16777215};function Sh(i,e,t,n,s,r){let a=[],o=new Map;if(e)for(let c=0;c<e.length;c+=n)o.set(e[c],c);let l=0;for(let c=0;c<i.length;c+=n){let u=s[l]||(s[l]={});l++;let m=e?o.get(i[c]):void 0;r(u,i,c,m!==void 0?e:null,m,t),a.push(u)}return a}function Uh(i,e,t){let n=Sh(i.f,e&&e.f,t,5,w_,(l,c,u,m,f,h)=>{if(l.id=c[u],l.x=c[u+1],l.z=c[u+2],l.cls=c[u+3]&3,l.flags=c[u+3]>>vh,l.hp=c[u+4],m){let d=m[f+1]-l.x,_=m[f+2]-l.z;Math.abs(d)+Math.abs(_)<4&&(l.x+=d*h,l.z+=_*h)}l.info=wi.get(l.id)||A_}),s=Sh(i.e,e&&e.e,t,5,T_,(l,c,u,m,f,h)=>{l.id=c[u],l.k=c[u+1],l.x=c[u+2],l.z=c[u+3],l.hp=c[u+4],m&&(l.x+=(m[f+2]-l.x)*h,l.z+=(m[f+3]-l.z)*h)}),r=Sh(i.al,e&&e.al,t,4,E_,(l,c,u,m,f,h)=>{l.id=c[u],l.k=c[u+1],l.x=c[u+2],l.z=c[u+3],m&&(l.x+=(m[f+2]-l.x)*h,l.z+=(m[f+3]-l.z)*h)}),a=e&&t>.5?e:i;a.ph!==nf&&(nf=a.ph,tf=$l());let o=a.bo;return o&&e&&i.bo&&e.bo&&(o={...a.bo,hp:i.bo.hp+(e.bo.hp-i.bo.hp)*t}),en={phase:a.ph,members:n,enemies:s,allies:r,tl:a.tl,pd:a.pd,ch:a.ch,wv:a.wv,wi:a.wi,sv:a.sv,bar:e?i.bar+(e.bar-i.bar)*t:i.bar,hype:a.hype,vi:a.vi,vc:a.vc,cho:a.cho,left:a.left,n:a.n,run:a.run,bo:o,best:a.best,saves:a.saves,phaseStart:tf},en}var On=null,Fh=null,If=null,us=[],af=0,Oh=0;function C_(){let i={};for(let n of["introSeconds","gatherSeconds","chapterSeconds","breakSeconds","victorySeconds","voteSeconds","choiceSeconds","endingSeconds","minDefenders","spawnMul","enemyHpMul","dmgMul","startChapter","startWave","waveCap","bossCap","likePulse"])zt.has(n)&&(i[n]=Number(zt.get(n)));zt.get("lore")&&(i.loreCards=zt.get("lore").split(",").map(Number).filter(n=>n>=0&&n<Wn.length)),zt.get("bots")==="0"&&(i.bots=!1);let e=Number(zt.get("seed")||7),t=()=>(e=e*16807%2147483647,(e-1)/2147483646);On=new Nl(i,qn?t:Math.random),If=Zd({nameOf:n=>On.byId.get(n)?.name||null,rng:qn?t:Math.random,survivors:()=>On.survivors}),zt.get("crowd")&&(Fh=ef(zt.get("crowd"),qn?t:Math.random)),window.__input=n=>On.input(n),window.__siege=On}var bh=0;function R_(i,e){if(Fh)for(let r of Fh.tick(i))On.input(r);for(bh+=i;bh>=.05;)bh-=.05,On.step(.05);let t=On.drainRoster();Nh(t.add,t.del);let n=On.drain();for(let r of If.lines(n,On.t))I_(r,e);let s=On.snapshot();for(let r of n)Lf(r,!1);return n.some(r=>r.k==="end"||r.k==="bossdown")&&(Si={session:On.board(8),all:[],saves:On.saves}),Uh(s,null,0)}function I_(i,e){i.banner&&Nf(i.banner);let t={...i,at:e,p:null};for(t.p=fetch("/api/say?voice=narrator&text="+encodeURIComponent(i.text)).then(n=>n.json()).catch(()=>({url:null})),Oh++,t.p.finally(()=>Oh--),us.push(t),us.sort((n,s)=>s.pri-n.pri||n.at-s.at);us.length>4;)us.pop()}async function Ra(i){if(i<af||!us.length||Ra.busy)return;let e=us.shift();if(!e.win&&i-e.at>(e.pri>=7?9:6))return;Ra.busy=!0;let t=await e.p;Ra.busy=!1;let n=$l(),s=t.dur||Math.min(7,.9+e.text.length/14);Df(e.text,t.url,s),af=n+s+.25}var Mr=i=>wi.get(i)?.name||"?",Pf=i=>"#"+((wi.get(i)?.color??16777215)>>>0).toString(16).padStart(6,"0"),qi=i=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),of=i=>`<span style="color:${Pf(i)}">${qi(Mr(i))}</span>`,_r=[],Ul=new Map,lf=0,cf=0,hf=0,uf=0;function Lf(i,e){if(Ei.ev++,!e&&_t&&!ds)try{_t.fx(i,en)}catch{Ei.err++}let t=(s,r)=>{e||tn.sfx(s,tn.now(),r)},n=$l();switch(i.k){case"intro":t("wind"),t("organ",.6),Oe("feed").innerHTML="",Hl=null,Wl=null,zl(-1),document.body.classList.add("cine");break;case"lore":t("bell",.5),t("whistle",.3),zl(i.i,i.sec);break;case"gather":t("go"),zl(-1),document.body.classList.remove("cine");break;case"chapter":t("bell"),t("organ"),N_(i.n,i.title);break;case"wave":t("roar",.6),t("heart",.6);break;case"clear":t("chime"),t("cheer",.5);break;case"boss":t("roar"),t("organ"),t("thunder");break;case"bossatk":t(i.kind==="summon"?"roar":"boom",i.blocked?.6:1),i.blocked&&t("shield"),!i.blocked&&i.kind!=="summon"&&Us(.35);break;case"bossdown":t("nuke"),t("fanfare"),t("cheer"),Us(.8),!e&&i.by&&df("win",`\u2694\uFE0F ${of(i.by)} landed the final blow!`);break;case"retreat":t("ghost"),t("thunder"),Us(.4);break;case"victory":break;case"vote":i.start?(t("chime"),t("organ",.5)):n-hf>.12&&(hf=n,t("squeak",.35));break;case"choice":t("fanfare",.7),t("bell"),Wl=i;break;case"shot":n-lf>.07&&(lf=n,t(i.c==="a"?"dash":i.c==="w"||i.c==="g"?"punch":i.c==="h"?"heal":"pop",i.c==="a"?.25:.35));break;case"dmg":{i.c&&n-cf>.06&&(cf=n,t(i.c===2?"crit":"punch",i.c===2?.8:.4)),!e&&_r.length<34&&(i.c||_r.length<22)&&_r.push({id:i.e,v:i.d,c:i.c,t0:n,j:(Math.random()-.5)*2});break}case"kill":n-uf>.09&&(uf=n,t(i.q===1?"boom":"pop",i.q===1?.7:.4));break;case"wallhit":t("boom",.5),t("shatter",.3);break;case"block":t("shield",.4);break;case"toll":t("trap"),t("ghost"),Us(.5);break;case"down":t("ko",.4);break;case"rise":t("heal",.4);break;case"heal":break;case"gift":t("coin"),t(i.tier==="dragon"?"roar":i.tier==="awaken"?"nuke":i.tier==="guardian"?"land":"power",i.tier==="volley"?.5:1),P_(i),(i.tier==="awaken"||i.tier==="dragon")&&Us(.6);break;case"ult":t("nuke"),Us(.5);break;case"pulse":t("shield"),t("cheer",.5),Bh("perk","\u2764\uFE0F ASCENSION PULSE!","likes charged the barrier");break;case"bless":t("power",.7),Bh("perk",i.why==="follow"?`\u2795 ${qi(Mr(i.id))} followed`:`\u{1F501} ${qi(Mr(i.id))} shared`,i.why==="follow"?"\u2192 blessed \xD71.2 + barrier":"\u2192 the fallen rise + barrier");break;case"class":!e&&!wi.get(i.id)?.bot&&df("cls",`${Rn[i.c].icon} ${of(i.id)} is now ${Rn[i.c].label}`);break;case"ally":break;case"end":t(i.saved?"fanfare":"thunder"),t(i.saved?"cheer":"ghost"),i.saved&&t("bell"),Us(.9),Hl=i,D_(i);break}["shot","dmg","kill","vote","heal"].includes(i.k)||Ti(i.k)}function P_(i){let e=Vl.find(n=>n.id===i.tier)||{},t=`\u2192 ${e.label||i.tier}`;i.tier==="volley"&&(t="\u2192 \u2728 spell volley"),i.tier==="rune"&&(t="\u2192 \u{1F537} barrier + volley"),i.tier==="guardian"&&(t=i.extended?"\u2192 \u{1F6E1}\uFE0F guardian renewed":"\u2192 \u{1F6E1}\uFE0F GUARDIAN HERO joins"),i.tier==="awaken"&&(t=i.cool?"\u2192 \u26A1 ascended \xD73 power":"\u2192 \u26A1 ASCENSION ULTIMATE!"),i.tier==="dragon"&&(t=i.judgment?"\u2192 \u{1F409} JUDGMENT: \u221225% boss life":"\u2192 \u{1F409} DRAGON burns the field"),Bh(i.tier,`${e.icon||"\u{1F381}"} ${qi(Mr(i.id))} sent ${qi(i.giftName||"a gift")}`,t)}function $l(){return qn?vr:performance.now()/1e3}function df(i,e){let t=document.createElement("div");t.className="k "+i,t.innerHTML=e;let n=Oe("feed");for(n.prepend(t);n.children.length>2;)n.lastChild.remove()}function Bh(i,e,t){let n=document.createElement("div");n.className="t "+i,n.innerHTML=`${e}<small>${t}</small>`;let s=Oe("toasts");for(s.prepend(n);s.children.length>2;)s.lastChild.remove();Da(()=>n.remove(),3800)}var ff=0;function Nf(i){let e=Oe("banner");e.hidden=!1,e.classList.remove("show"),e.offsetWidth,e.textContent=i,e.classList.add("show"),clearTimeout(ff),ff=Da(()=>{e.hidden=!0},1650)}function Us(i=.7){let e=Oe("flash");e.style.transition="none",e.style.opacity=String(i),e.offsetWidth,e.style.transition="opacity 0.9s ease-out",e.style.opacity="0"}var pf=0;function Df(i,e,t){Ei.say++;let n=Oe("say");n.hidden=!1,n.className="narr",n.innerHTML=`<div class="txt"><span class="who">\u{1F4DC} THE NARRATOR</span>${qi(i)}</div>`;let s=Math.max(1800,(t||2)*1e3+600);clearTimeout(pf),pf=Da(()=>{n.hidden=!0},s),e&&tn.voice(e,t)}var L_={rift:"\u{1F300}",scientist:"\u{1F9EA}",book:"\u{1F4D6}",souls:"\u{1F47B}",lord:"\u{1F451}",citadel:"\u{1F3F0}"};function zl(i,e=5){let t=Oe("lore");if(i<0){t.hidden=!0,sf=-1;return}let n=Wn[i];sf=i,y_=$l(),t.hidden=!1,t.className="art-"+n.art,t.style.setProperty("--sec",e+"s"),Oe("loreArt").style.backgroundImage=`url(/siege/lore-${n.art}.jpg), radial-gradient(circle at 50% 45%, #6a20b0, #1a0630 70%)`,Oe("loreIcon").textContent=L_[n.art]||"\u2726",Oe("loreTitle").textContent=n.title,Oe("loreText").textContent=n.text,Oe("loreNum").textContent=`${String(i+1).padStart(2,"0")} / ${String(Wn.length).padStart(2,"0")}`,t.classList.remove("play"),t.offsetWidth,t.classList.add("play")}function N_(i,e){let t=Oe("chapter");Oe("chN").textContent=`CHAPTER ${i}`,Oe("chT").textContent=e,Oe("chB").textContent=Ls[i-1]?`BOSS: ${Ls[i-1].boss.name.toUpperCase()}`:"",t.hidden=!1,t.classList.remove("play"),t.offsetWidth,t.classList.add("play"),Da(()=>{t.hidden=!0},3800)}function D_(i){let e=Oe("winner");e.className=i.saved?"saved":"fell",Oe("winTitle").textContent=i.saved?"\u{1F305} EARTH SAVED":"\u{1F311} EARTH FELL",Oe("winSurv").textContent=i.saved?`${wa(i.survivors)} survivors live on`:`the Dark Dimension took them all \xB7 wave ${i.wave}`;let t=(i.top||[]).filter(s=>wi.has(s));t.length?(Oe("winName").textContent=Mr(t[0]),Oe("winName").style.color=Pf(t[0]),Oe("winSub").textContent=(t.length>1?`with ${t.slice(1,3).map(Mr).join(" & ")} \xB7 `:"")+(wi.get(t[0])?.bot?"bots led the defense \u2013 comment to beat them!":"TOP DEFENDER \u{1F3C6}")):(Oe("winName").textContent="",Oe("winSub").textContent="comment to defend the next siege");let n=(i.choices||[]).map(s=>{let r=Mi.find(o=>o.a.key===s||o.b.key===s),a=r&&(r.a.key===s?r.a:r.b);return a?`${a.icon} ${a.label}`:""}).filter(Boolean).join("  \xB7  ");Oe("winStory").textContent=n,e.hidden=!1,e.style.animation="none",e.offsetWidth,e.style.animation=""}function Uf(){Oe("gifts").innerHTML=[...Vl].reverse().map(i=>`<div><span>${i.icon} ${qi(i.label)}</span><b>${i.min}\u{1FA99}</b></div>`).join("")}function mf(i){if(!(!i||!i.session&&!i.all)&&(Si=i,i.signed))try{localStorage.setItem("lg_siegeBoard",JSON.stringify(i.signed))}catch{}}var gf=0,xf=0;function U_(i){let e=["gather","ending","break","choice","chapter"].includes(en.phase),t=Oe("board");if(t.hidden=!e,!e||!Si)return;i-xf>7&&(xf=i,gf^=1);let n=gf&&Si.all&&Si.all.length,s=(n?Si.all:Si.session)||[],r=n?`\u{1F451} ALL-TIME DEFENDERS${Si.saves?` \xB7 \u{1F30D}\xD7${Si.saves}`:""}`:"\u{1F6E1}\uFE0F TODAY'S DEFENDERS",a=s.length?s.slice(0,5).map(l=>`<li><span class="nm">${qi(l.name)}</span><span class="sc">${l.pts}\u2694\uFE0F${l.kills?" \xB7 "+l.kills+"\u{1F480}":""}</span></li>`).join(""):"",o=r+a;t.__k!==o&&(t.__k=o,Oe("boardTitle").textContent=r,Oe("boardList").innerHTML=a||'<div class="empty">No defenders yet \u2013 comment to take the wall! \u{1F3F0}</div>')}var F_=Rn.map(i=>i.icon);function O_(i){let e=Fs.__pr||1,t=Ph/100;if(Ve.setTransform(1,0,0,1,0,0),Ve.clearRect(0,0,Fs.width,Fs.height),Ve.setTransform(e,0,0,e,0,0),!_t||ds)return;let n=en,s=wf[bn];Ve.textAlign="center",Ve.textBaseline="middle",Ve.lineJoin="round";let r=(a,o)=>`${a} ${o}px -apple-system, "Segoe UI", Roboto, sans-serif`;if(n.phase!=="intro"){let o=(_t.drawn()||[]).map(u=>({f:u,s:(u.flags&bt.cmd?8:0)+(u.flags&bt.crown?7:0)+(u.flags&bt.gift?6:0)+(u.flags&bt.asc?5:0)+(u.flags&bt.bot?0:3)}));o.sort((u,m)=>m.s-u.s);let l=Math.round(t*(o.length>14?2.4:2.8)),c=[];for(let{f:u}of o.slice(0,s.labels)){let m=_t.project(u.x,u.y,u.z);if(!m.vis||m.x<-40||m.x>Ph+40||m.y<Lh*.3||m.y>Lh*.92||c.some(R=>Math.abs(R.x-m.x)<t*10&&Math.abs(R.y-m.y)<t*3.6))continue;c.push(m);let f=u.info||{},h=u.flags&bt.bot,d=u.flags&bt.down,_=(u.flags&bt.crown?"\u{1F451} ":h?"\u{1F916} ":"")+(F_[u.cls]||"")+" "+f.name+(u.flags&bt.asc?" \u26A1":"")+(u.flags&bt.bless?" \u2728":"");Ve.font=r(800,l);let g=Math.min(Ve.measureText(_).width,t*30),p=l*1.35,v=m.y-p*.6;Ve.globalAlpha=d?.55:1,Ve.fillStyle=u.flags&bt.asc?"rgba(120,80,0,0.85)":h?"rgba(40,40,60,0.7)":"rgba(14,6,34,0.8)",_f(m.x-g/2-t*1.3,v-p/2,g+t*2.6,p,p/2),Ve.fill(),Ve.fillStyle="#"+((f.color??16777215)>>>0).toString(16).padStart(6,"0"),_f(m.x-g/2-t*1.3,v-p/2,t*.9,p,t*.45),Ve.fill(),Ve.fillStyle=h?"#c8c8d8":"#fff",Ve.fillText(_,m.x+t*.2,v+1,t*30),u.cls===1&&u.hp<100&&!d&&(Ve.fillStyle="rgba(0,0,0,0.6)",Ve.fillRect(m.x-t*4,v+p*.62,t*8,t*.8),Ve.fillStyle=u.hp>40?"#5dff9a":"#ff5a5a",Ve.fillRect(m.x-t*4,v+p*.62,t*8*Math.max(0,u.hp)/100,t*.8)),Ve.globalAlpha=1}}for(let a=_r.length-1;a>=0;a--){let o=_r[a],l=(i-o.t0)/(o.c===2?.95:.7),c=_t.enemyTop(o.id);if(c?Ul.set(o.id,c):c=Ul.get(o.id),l>=1||l<0||!c){_r.splice(a,1);continue}let u=1+(o.c===2?1.3:.7)*Math.pow(Math.max(0,1-l*5),2),m=t*(o.c===2?6.8:o.c===1?4.6:3.4)*u,f=c.x+o.j*t*7,h=c.y-t*2-l*t*(o.c===2?9:7);if(Ve.globalAlpha=Math.min(1,(1-l)*2.4),o.c===2){Ve.save(),Ve.translate(f,h),Ve.rotate(-.12),Ve.fillStyle="rgba(255,60,40,0.9)",Ve.beginPath();for(let _=0;_<16;_++){let g=_/16*Math.PI*2,p=(_%2?.55:1)*m*1.05;Ve.lineTo(Math.cos(g)*p*1.35,Math.sin(g)*p*.8)}Ve.closePath(),Ve.fill(),Ve.restore()}let d=String(o.v)+(o.c===2?"!":"");Ve.font=`italic ${r(900,m)}`,Ve.lineWidth=m*.22,Ve.strokeStyle=o.c===2?"#3a0000":"rgba(30,0,40,0.9)",Ve.strokeText(d,f,h),Ve.fillStyle=o.c===2?"#fff23a":o.c===1?"#ffb03a":"#ffffff",Ve.fillText(d,f,h),o.c===2&&l<.6&&(Ve.font=`italic ${r(900,t*2.6)}`,Ve.lineWidth=t*.6,Ve.strokeStyle="#3a0000",Ve.strokeText("CRIT",f,h-m*.75),Ve.fillStyle="#fff",Ve.fillText("CRIT",f,h-m*.75))}Ul.size>200&&Ul.clear(),Ve.globalAlpha=1}function _f(i,e,t,n,s){Ve.beginPath(),Ve.moveTo(i+s,e),Ve.arcTo(i+t,e,i+t,e+n,s),Ve.arcTo(i+t,e+n,i,e+n,s),Ve.arcTo(i,e+n,i,e,s),Ve.arcTo(i,e,i+t,e,s),Ve.closePath()}var wh=-1,hs=15e8,Wi=15e8,Th=0,vf=0,Fl=15e8;function oi(i,e){let t=Oe(i);t.__t!==e&&(t.__t=e,t.textContent=e)}function B_(i,e){Wi=Math.max(0,en.sv??15e8),Wi<Fl-1&&(Th+=Fl-Wi,e-vf>.6&&(k_(Th),Th=0,vf=e)),(Wi>Fl+1e6||Wi>=1499999999)&&(hs=Math.min(hs,15e8)),Fl=Wi,hs+=(Wi-hs)*Math.min(1,i*6),Math.abs(Wi-hs)<1e3&&(hs=Wi),oi("svN",wa(hs));let t=hs/15e8,n=Oe("surv");n.classList.toggle("low",t<.35),n.classList.toggle("mid",t>=.35&&t<.7),Oe("svBar").style.width=(t*100).toFixed(2)+"%"}function k_(i){if(i<2e5)return;let e=document.createElement("div");e.className="drop",e.textContent="\u2212"+wa(i),Oe("surv").appendChild(e),Da(()=>e.remove(),1300);let t=Oe("surv");t.classList.remove("hit"),t.offsetWidth,t.classList.add("hit")}function z_(i){let e=en,t=document.body,n=["wave","boss","break","victory"].includes(e.phase),s=e.phase==="intro";t.classList.toggle("cine",s);let r="\u{1F4AC} COMMENT TO DEFEND!",a="",o=["\u{1F52E} mage \xB7 \u2694\uFE0F warrior \xB7 \u{1F3F9} archer \xB7 \u{1F49A} healer","\u2764\uFE0F likes = barrier","\u{1F381} gifts = spells"];e.phase==="gather"||e.phase==="ending"||s?(r="\u{1F3F0} COMMENT TO JOIN!",a="join",o=["type mage \xB7 warrior \xB7 archer \xB7 healer","\u2764\uFE0F likes = barrier","\u2795 follow = blessing"]):e.phase==="vote"?(r="\u{1F5F3}\uFE0F COMMENT 1 OR 2!",a="vote",o=["the story changes for good"]):e.phase==="boss"?(r="\u{1F4A5} BOSS! SPAM CHAT!",a="fight",o=["\u{1F4AC} comments = haste","\u26A1 100\u{1FA99} = ultimate","\u{1F409} 500\u{1FA99} = judgment"]):n&&(r="\u{1F4AC} CHAT = FASTER ATTACKS",a="fight",o=["\u{1F52E} mage \xB7 \u2694\uFE0F warrior \xB7 \u{1F3F9} archer \xB7 \u{1F49A} healer","\u2764\uFE0F likes = barrier"]);let l=o.join("|");Oe("howChips").__k!==l&&(Oe("howChips").__k=l,Oe("howChips").innerHTML=o.map(g=>`<span>${qi(g)}</span>`).join("")),oi("howTitle",r),Oe("howTitle").className="title"+(a?" "+a:"");let c,u=Ls[(e.ch||1)-1];e.phase==="gather"?c=`\u{1F3F0} SIEGE #${e.run} IN ${Math.ceil(e.tl)}s \xB7 \u{1F465} ${e.n} defenders`:e.phase==="intro"?c="\u{1F30C} THE DARK DIMENSION":e.phase==="ending"?c=Hl&&Hl.saved?"\u{1F305} EARTH SAVED \xB7 a new siege soon":"\u{1F311} EARTH FELL \xB7 a new siege soon":e.phase==="vote"||e.phase==="choice"?c=`\u{1F5F3}\uFE0F THE STORY CHOICE \xB7 \u23F3${Math.ceil(e.tl)}s`:e.phase==="boss"?c=`CH ${e.ch} \xB7 \u{1F480} BOSS \xB7 \u23F3${Math.ceil(e.tl)}s \xB7 \u{1F465} ${e.n}`:c=`CH ${e.ch} \xB7 WAVE ${e.wv}${e.left?` \xB7 \u{1F479} ${e.left}`:""} \xB7 \u{1F465} ${e.n}`,oi("pillTxt",c),Oe("pill").className=e.phase==="boss"?"boss":e.phase==="ending"?"end":e.phase;let m=Math.max(0,Math.min(100,e.bar||0));Oe("barBar").style.width=m.toFixed(1)+"%",oi("barN",Math.round(m)+"%"),Oe("barrier").className=m<15&&n?"low":"",oi("likeN",String(e.hype||0)),Oe("likeBar").style.width=Math.min(100,(e.hype||0)/500*100)+"%";let f=Oe("bossbar");f.hidden=!(e.bo&&n),f.hidden||(oi("bossName",`\u{1F480} ${e.bo.n.toUpperCase()}`),oi("bossHpN",wa(Math.max(0,Math.ceil(e.bo.hp)))),Oe("bossHp").style.width=Math.max(0,e.bo.hp/e.bo.max*100).toFixed(1)+"%"),t.classList.toggle("bossing",!f.hidden);let h=Oe("vote"),d=e.phase==="vote"||e.phase==="choice";if(h.hidden=!d||e.vi<0,!h.hidden){let g=Mi[e.vi],p=(e.vc[0]||0)+(e.vc[1]||0)||1;oi("voteQ",g.q);let v=e.phase==="choice"&&Wl?Wl.key:null;[["a",0],["b",1]].forEach(([R,y])=>{let C=g[R],T=Oe("vo"+y);oi("voL"+y,`${C.icon} ${C.label}`),oi("voN"+y,String(e.vc[y]||0)),Oe("voB"+y).style.width=((e.vc[y]||0)/p*100).toFixed(1)+"%",T.classList.toggle("lead",!v&&(e.vc[y]||0)>(e.vc[1-y]||0)),T.classList.toggle("picked",v===C.key),T.classList.toggle("lost",!!v&&v!==C.key)}),oi("voteT",v?pr[v].text:`comment 1 or 2 \xB7 \u23F3${Math.ceil(e.tl)}s`)}t.classList.toggle("voting",d);let _=Oe("count");if((e.phase==="vote"||e.phase==="gather")&&e.tl<=5&&e.tl>0&&!(e.phase==="gather"&&e.n<1)){let g=Math.ceil(e.tl);g!==wh&&(wh=g,_.hidden=!1,_.textContent=g,_.classList.remove("tick"),_.offsetWidth,_.classList.add("tick"),tn.sfx(e.phase==="vote"&&g<=3?"heart":"beep"))}else _.hidden||(_.hidden=!0),wh=-1;e.phase!=="ending"&&(Oe("winner").hidden=!0),e.phase!=="intro"&&!Oe("lore").hidden&&zl(-1),U_(i)}var Gl=[];function Da(i,e){if(!qn)return setTimeout(i,e);let t={at:vr+e/1e3,fn:i};return Gl.push(t),t}function G_(){for(let i=Gl.length-1;i>=0;i--)Gl[i].at<=vr&&Gl.splice(i,1)[0].fn()}function Ff(i){let e=Oe("notice");e.textContent=i,e.hidden=!1}function Xl(){Oe("notice").hidden=!0}var Ca=0,Eh=0,Ah=0,Ia=0,Ch=0,Ol=0,yf=0,Mf=8,Rh=new Map;function Of(i,e){if(yr?en=R_(i,e):en=b_(e),yr&&Ra(e),_t&&!ds)try{_t.frame(en,i,e)}catch{Ei.err++,Ti("frame-err"),Ei.err>30&&Yl()}e>Mf&&(Mf=e+12+Math.random()*10,["boss","wave"].includes(en.phase)||tn.sfx("wind",tn.now(),.45)),O_(e),B_(i,e),e-yf>.25&&(yf=e,z_(e))}function V_(i){Eh++,!(i-Ah<2)&&(Ia=Eh/(i-Ah),Eh=0,Ah=i,!(__||qn||document.hidden)&&(i<6||(Ia<La*.8&&bn<3?++Ch>=2&&(Rh.set(bn,(Rh.get(bn)||0)+1),bn++,Ch=0,Ol=0,fs(),Ti("q"+bn)):(Ch=0,Ia>=La*.95&&bn>0&&(Rh.get(bn-1)||0)<2?++Ol>=6&&(bn--,Ol=0,fs(),Ti("q"+bn)):Ol=0))))}function Bf(i){if(requestAnimationFrame(Bf),document.hidden)return;let e=i/1e3;if(Ca&&e-Ca<1/La-.004)return;let t=Math.min(.1,Ca?e-Ca:1/La);Ca=e,Of(t,e),V_(e)}var vr=0;qn&&(tn.clock=()=>vr,window.__render={async frame(i){vr+=i,G_();for(let e=0;e<100&&(Ra.busy||us.length&&us[0].p&&Oh);e++)await new Promise(t=>setTimeout(t,30));return Of(i,vr),{phase:en.phase,n:en.n,ch:en.ch,wave:en.wv,sv:en.sv}},mix:i=>tn.mix(i),stats:()=>_t.stats()});var Sf=!1;function H_(i){if(Sf||ql||yr||!Ih||!i||!/tikfinity|both/.test(i.source||""))return;Sf=!0;let e=document.createElement("script");e.src="/shared/tikfinity.js",e.onload=()=>{let t=window.TikFinity;t.setSink(n=>{!li||li.readyState!==1||(n.type==="status"?li.send(JSON.stringify({t:"tf-status",state:n.mode==="live"?"connected":"waiting",message:n.message})):li.send(JSON.stringify({t:"tf",ev:n})))}),t.connect()},document.head.appendChild(e)}var kh=null;Af();fs();Uf();yr?(C_(),Si={session:[],all:[]}):Dh();qn||(requestAnimationFrame(Bf),setInterval(()=>{!document.hidden&&!yr&&fetch("/healthz?overlay=1",{cache:"no-store"}).catch(()=>{})},4*6e4),kh=$d(()=>({mode:{phone:Pa,ios:ql,kind:_t?_t.kind:"none",game:"siege",q:bn,fps:Math.round(Ia*10)/10,cap:La},cv:{w:bi.width,h:bi.height},gl:{..._t?_t.stats():{},lost:Tf,restored:Ef},n:{...Ei},last:kl.slice(),audio:{unlocked:tn.state()==="running",ctx:tn.state(),played:tn.played,fails:tn.fails}}),{off:zt.get("diag")==="0"||yr}));window.__siegeUI={get world(){return en},get members(){return en.members},get level(){return bn},get fps(){return Ia},get view(){return _t},stats:()=>_t?_t.stats():null,N:Ei,audio:tn,roster:wi};try{for(let i of Wn){let e=new Image;e.decoding="async",e.src=`/siege/lore-${i.art}.jpg`}}catch{}})();
