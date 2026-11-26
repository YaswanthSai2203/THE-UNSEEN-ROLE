var uc="170";var Pd=0,rh=1,Id=2;var pu=1,dc=2,Vn=3,ci=0,Je=1,Wn=2,dn=0,hs=1,oh=2,ah=3,lh=4,Ld=5,Ii=100,Dd=101,Nd=102,Ud=103,Fd=104,Od=200,kd=201,Bd=202,zd=203,Ga=204,Wa=205,Hd=206,Vd=207,Gd=208,Wd=209,Xd=210,Yd=211,qd=212,Zd=213,$d=214,Xa=0,Ya=1,qa=2,ps=3,Za=4,$a=5,Ka=6,Ja=7,mu=0,Kd=1,Jd=2,li=0,fc=1,pc=2,mc=3,nr=4,jd=5,gc=6,yc=7;var gu=300,ms=301,gs=302,ja=303,Qa=304,xo=306,Fi=1e3,Ni=1001,tl=1002,ze=1003,Qd=1004;var pr=1005;var Cn=1006,ha=1007;var Ui=1008;var Zn=1009,yu=1010,_u=1011,Ks=1012,_c=1013,Oi=1014,Xn=1015,In=1016,xc=1017,vc=1018,ys=1020,xu=35902,vu=1021,Mu=1022,vn=1023,bu=1024,Su=1025,us=1026,_s=1027,wu=1028,Mc=1029,Eu=1030,bc=1031;var Sc=1033,Br=33776,zr=33777,Hr=33778,Vr=33779,el=35840,nl=35841,il=35842,sl=35843,rl=36196,ol=37492,al=37496,ll=37808,cl=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,yl=37817,_l=37818,xl=37819,vl=37820,Ml=37821,Gr=36492,bl=36494,Sl=36495,Tu=36283,wl=36284,El=36285,Tl=36286;var Wr=2300,Al=2301,ua=2302,ch=2400,hh=2401,uh=2402;var tf=3200,ef=3201;var Au=0,nf=1,ai="",ge="srgb",As="srgb-linear",vo="linear",ae="srgb";var Zi=7680;var dh=519,sf=512,rf=513,of=514,Cu=515,af=516,lf=517,cf=518,hf=519,fh=35044;var ph="300 es",Yn=2e3,Xr=2001,hi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mh=1234567,Xs=Math.PI/180,xs=180/Math.PI;function Cs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]).toLowerCase()}function De(i,t,e){return Math.max(t,Math.min(e,i))}function wc(i,t){return(i%t+t)%t}function uf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function df(i,t,e){return i!==t?(e-i)/(t-i):0}function Ys(i,t,e){return(1-e)*i+e*t}function ff(i,t,e,n){return Ys(i,t,1-Math.exp(-e*n))}function pf(i,t=1){return t-Math.abs(wc(i,t*2)-t)}function mf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function yf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function _f(i,t){return i+Math.random()*(t-i)}function xf(i){return i*(.5-Math.random())}function vf(i){i!==void 0&&(mh=i);let t=mh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mf(i){return i*Xs}function bf(i){return i*xs}function Sf(i){return(i&i-1)===0&&i!==0}function wf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ef(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Tf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),u=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),y=o((n-t)/2);switch(s){case"XYX":i.set(a*u,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*y,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*y,a*c);break;case"ZYZ":i.set(l*y,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ls(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ln={DEG2RAD:Xs,RAD2DEG:xs,generateUUID:Cs,clamp:De,euclideanModulo:wc,mapLinear:uf,inverseLerp:df,lerp:Ys,damp:ff,pingpong:pf,smoothstep:mf,smootherstep:gf,randInt:yf,randFloat:_f,randFloatSpread:xf,seededRandom:vf,degToRad:Mf,radToDeg:bf,isPowerOfTwo:Sf,ceilPowerOfTwo:wf,floorPowerOfTwo:Ef,setQuaternionFromProperEuler:Tf,normalize:Xe,denormalize:ls},vt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Vt=class i{constructor(t,e,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],y=n[8],_=s[0],g=s[3],m=s[6],w=s[1],E=s[4],M=s[7],O=s[2],C=s[5],R=s[8];return r[0]=o*_+a*w+l*O,r[3]=o*g+a*E+l*C,r[6]=o*m+a*M+l*R,r[1]=c*_+u*w+d*O,r[4]=c*g+u*E+d*C,r[7]=c*m+u*M+d*R,r[2]=f*_+p*w+y*O,r[5]=f*g+p*E+y*C,r[8]=f*m+p*M+y*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,f=a*l-u*r,p=c*r-o*l,y=e*d+n*f+s*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/y;return t[0]=d*_,t[1]=(s*c-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},da=new Vt;function Ru(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Af(){let i=Yr("canvas");return i.style.display="block",i}var gh={};function Gs(i){i in gh||(gh[i]=!0,console.warn(i))}function Cf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Rf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:As,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=qn(i.r),i.g=qn(i.g),i.b=qn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ai?vo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var yh=[.64,.33,.3,.6,.15,.06],_h=[.2126,.7152,.0722],xh=[.3127,.329],vh=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mh=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[As]:{primaries:yh,whitePoint:xh,transfer:vo,toXYZ:vh,fromXYZ:Mh,luminanceCoefficients:_h,workingColorSpaceConfig:{unpackColorSpace:ge},outputColorSpaceConfig:{drawingBufferColorSpace:ge}},[ge]:{primaries:yh,whitePoint:xh,transfer:ae,toXYZ:vh,fromXYZ:Mh,luminanceCoefficients:_h,outputColorSpaceConfig:{drawingBufferColorSpace:ge}}});var $i,Cl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=Yr("canvas")),$i.width=t.width,$i.height=t.height;let n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Yr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},If=0,qr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(fa(s[o].image)):r.push(fa(s[o]))}else r=fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Lf=0,on=class i extends hi{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ni,s=Ni,r=Cn,o=Ui,a=vn,l=Zn,c=i.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Cs(),this.name="",this.source=new qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fi:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case tl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fi:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case tl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=gu;on.DEFAULT_ANISOTROPY=1;var ce=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],y=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(y+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,M=(p+1)/2,O=(m+1)/2,C=(u+f)/4,R=(d+_)/4,L=(y+g)/4;return E>M&&E>O?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=R/n):M>O?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=C/s,r=L/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=R/r,s=L/r),this.set(n,s,r,e),this}let w=Math.sqrt((g-y)*(g-y)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(g-y)/w,this.y=(d-_)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rl=class extends hi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new on(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new qr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Te=class extends Rl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Zr=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Pl=class extends on{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],f=r[o+0],p=r[o+1],y=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=y,t[e+3]=_;return}if(d!==_||l!==f||c!==p||u!==y){let g=1-a,m=l*f+c*p+u*y+d*_,w=m>=0?1:-1,E=1-m*m;if(E>Number.EPSILON){let O=Math.sqrt(E),C=Math.atan2(O,m*w);g=Math.sin(g*C)/O,a=Math.sin(a*C)/O}let M=a*w;if(l=l*g+f*M,c=c*g+p*M,u=u*g+y*M,d=d*g+_*M,g===1-a){let O=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=O,c*=O,u*=O,d*=O}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[o],f=r[o+1],p=r[o+2],y=r[o+3];return t[e]=a*y+u*d+l*p-c*f,t[e+1]=l*y+u*f+c*d-a*p,t[e+2]=c*y+u*p+a*f-l*d,t[e+3]=u*y-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),d=a(r/2),f=l(n/2),p=l(s/2),y=l(r/2);switch(o){case"XYZ":this._x=f*u*d+c*p*y,this._y=c*p*d-f*u*y,this._z=c*u*y+f*p*d,this._w=c*u*d-f*p*y;break;case"YXZ":this._x=f*u*d+c*p*y,this._y=c*p*d-f*u*y,this._z=c*u*y-f*p*d,this._w=c*u*d+f*p*y;break;case"ZXY":this._x=f*u*d-c*p*y,this._y=c*p*d+f*u*y,this._z=c*u*y+f*p*d,this._w=c*u*d-f*p*y;break;case"ZYX":this._x=f*u*d-c*p*y,this._y=c*p*d+f*u*y,this._z=c*u*y-f*p*d,this._w=c*u*d+f*p*y;break;case"YZX":this._x=f*u*d+c*p*y,this._y=c*p*d+f*u*y,this._z=c*u*y-f*p*d,this._w=c*u*d-f*p*y;break;case"XZY":this._x=f*u*d-c*p*y,this._y=c*p*d-f*u*y,this._z=c*u*y+f*p*d,this._w=c*u*d+f*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-r*d,this.z=s+l*d+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pa.copy(this).projectOnVector(t),this.sub(pa)}reflect(t){return this.sub(pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pa=new A,bh=new Rn,Qe=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mr.copy(n.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),gr.subVectors(this.max,ks),Ki.subVectors(t.a,ks),Ji.subVectors(t.b,ks),ji.subVectors(t.c,ks),ei.subVectors(Ji,Ki),ni.subVectors(ji,Ji),wi.subVectors(Ki,ji);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-wi.z,wi.y,ei.z,0,-ei.x,ni.z,0,-ni.x,wi.z,0,-wi.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-wi.y,wi.x,0];return!ma(e,Ki,Ji,ji,gr)||(e=[1,0,0,0,1,0,0,0,1],!ma(e,Ki,Ji,ji,gr))?!1:(yr.crossVectors(ei,ni),e=[yr.x,yr.y,yr.z],ma(e,Ki,Ji,ji,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},On=[new A,new A,new A,new A,new A,new A,new A,new A],yn=new A,mr=new Qe,Ki=new A,Ji=new A,ji=new A,ei=new A,ni=new A,wi=new A,ks=new A,gr=new A,yr=new A,Ei=new A;function ma(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ei.fromArray(i,r);let a=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),u=n.dot(Ei);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Df=new Qe,Bs=new A,ga=new A,vs=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Df.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ga.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(ga)),this.expandByPoint(Bs.copy(t.center).sub(ga))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},kn=new A,ya=new A,_r=new A,ii=new A,_a=new A,xr=new A,xa=new A,$r=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ya.copy(t).add(e).multiplyScalar(.5),_r.copy(e).sub(t).normalize(),ii.copy(this.origin).sub(ya);let r=t.distanceTo(e)*.5,o=-this.direction.dot(_r),a=ii.dot(this.direction),l=-ii.dot(_r),c=ii.lengthSq(),u=Math.abs(1-o*o),d,f,p,y;if(u>0)if(d=o*l-a,f=o*a-l,y=r*u,d>=0)if(f>=-y)if(f<=y){let _=1/u;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-y?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=y?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ya).addScaledVector(_r,f),p}intersectSphere(t,e){kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){_a.subVectors(e,t),xr.subVectors(n,t),xa.crossVectors(_a,xr);let o=this.direction.dot(xa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ii.subVectors(this.origin,t);let l=a*this.direction.dot(xr.crossVectors(ii,xr));if(l<0)return null;let c=a*this.direction.dot(_a.cross(ii));if(c<0||l+c>o)return null;let u=-a*ii.dot(xa);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class i{constructor(t,e,n,s,r,o,a,l,c,u,d,f,p,y,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,d,f,p,y,_,g)}set(t,e,n,s,r,o,a,l,c,u,d,f,p,y,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=p,m[7]=y,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*u,p=o*d,y=a*u,_=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+y*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=y+p*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,p=l*d,y=c*u,_=c*d;e[0]=f+_*a,e[4]=y*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-y,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,p=l*d,y=c*u,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=y+p*a,e[1]=p+y*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,p=o*d,y=a*u,_=a*d;e[0]=l*u,e[4]=y*c-p,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=p*c-y,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,p=o*c,y=a*l,_=a*c;e[0]=l*u,e[4]=_-f*d,e[8]=y*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*d+y,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,p=o*c,y=a*l,_=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+_,e[5]=o*u,e[9]=p*d-y,e[2]=y*d-p,e[6]=a*u,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Uf)}lookAt(t,e,n){let s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),si.crossVectors(n,sn),si.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),si.crossVectors(n,sn)),si.normalize(),vr.crossVectors(sn,si),s[0]=si.x,s[4]=vr.x,s[8]=sn.x,s[1]=si.y,s[5]=vr.y,s[9]=sn.y,s[2]=si.z,s[6]=vr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],y=n[2],_=n[6],g=n[10],m=n[14],w=n[3],E=n[7],M=n[11],O=n[15],C=s[0],R=s[4],L=s[8],S=s[12],b=s[1],I=s[5],G=s[9],z=s[13],Y=s[2],tt=s[6],q=s[10],it=s[14],W=s[3],at=s[7],pt=s[11],Rt=s[15];return r[0]=o*C+a*b+l*Y+c*W,r[4]=o*R+a*I+l*tt+c*at,r[8]=o*L+a*G+l*q+c*pt,r[12]=o*S+a*z+l*it+c*Rt,r[1]=u*C+d*b+f*Y+p*W,r[5]=u*R+d*I+f*tt+p*at,r[9]=u*L+d*G+f*q+p*pt,r[13]=u*S+d*z+f*it+p*Rt,r[2]=y*C+_*b+g*Y+m*W,r[6]=y*R+_*I+g*tt+m*at,r[10]=y*L+_*G+g*q+m*pt,r[14]=y*S+_*z+g*it+m*Rt,r[3]=w*C+E*b+M*Y+O*W,r[7]=w*R+E*I+M*tt+O*at,r[11]=w*L+E*G+M*q+O*pt,r[15]=w*S+E*z+M*it+O*Rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],y=t[3],_=t[7],g=t[11],m=t[15];return y*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*p-n*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*u-r*l*u)+g*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*u-n*c*u)+m*(-s*a*u-e*l*d+e*a*f+s*o*d-n*o*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],y=t[12],_=t[13],g=t[14],m=t[15],w=d*g*c-_*f*c+_*l*p-a*g*p-d*l*m+a*f*m,E=y*f*c-u*g*c-y*l*p+o*g*p+u*l*m-o*f*m,M=u*_*c-y*d*c+y*a*p-o*_*p-u*a*m+o*d*m,O=y*d*l-u*_*l-y*a*f+o*_*f+u*a*g-o*d*g,C=e*w+n*E+s*M+r*O;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/C;return t[0]=w*R,t[1]=(_*f*r-d*g*r-_*s*p+n*g*p+d*s*m-n*f*m)*R,t[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*m+n*l*m)*R,t[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*p-n*l*p)*R,t[4]=E*R,t[5]=(u*g*r-y*f*r+y*s*p-e*g*p-u*s*m+e*f*m)*R,t[6]=(y*l*r-o*g*r-y*s*c+e*g*c+o*s*m-e*l*m)*R,t[7]=(o*f*r-u*l*r+u*s*c-e*f*c-o*s*p+e*l*p)*R,t[8]=M*R,t[9]=(y*d*r-u*_*r-y*n*p+e*_*p+u*n*m-e*d*m)*R,t[10]=(o*_*r-y*a*r+y*n*c-e*_*c-o*n*m+e*a*m)*R,t[11]=(u*a*r-o*d*r-u*n*c+e*d*c+o*n*p-e*a*p)*R,t[12]=O*R,t[13]=(u*_*s-y*d*s+y*n*f-e*_*f-u*n*g+e*d*g)*R,t[14]=(y*a*s-o*_*s-y*n*l+e*_*l+o*n*g-e*a*g)*R,t[15]=(o*d*s-u*a*s+u*n*l-e*d*l-o*n*f+e*a*f)*R,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,d=a+a,f=r*c,p=r*u,y=r*d,_=o*u,g=o*d,m=a*d,w=l*c,E=l*u,M=l*d,O=n.x,C=n.y,R=n.z;return s[0]=(1-(_+m))*O,s[1]=(p+M)*O,s[2]=(y-E)*O,s[3]=0,s[4]=(p-M)*C,s[5]=(1-(f+m))*C,s[6]=(g+w)*C,s[7]=0,s[8]=(y+E)*R,s[9]=(g-w)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Qi.set(s[0],s[1],s[2]).length(),o=Qi.set(s[4],s[5],s[6]).length(),a=Qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);let c=1/r,u=1/o,d=1/a;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=u,_n.elements[5]*=u,_n.elements[6]*=u,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Yn){let l=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),p,y;if(a===Yn)p=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Xr)p=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Yn){let l=this.elements,c=1/(e-t),u=1/(n-s),d=1/(o-r),f=(e+t)*c,p=(n+s)*u,y,_;if(a===Yn)y=(o+r)*d,_=-2*d;else if(a===Xr)y=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Qi=new A,_n=new ye,Nf=new A(0,0,0),Uf=new A(1,1,1),si=new A,vr=new A,sn=new A,Sh=new ye,wh=new Rn,Pn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wh.setFromEuler(this),this.setFromQuaternion(wh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var Kr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Ff=0,Eh=new A,ts=new Rn,Bn=new ye,Mr=new A,zs=new A,Of=new A,kf=new Rn,Th=new A(1,0,0),Ah=new A(0,1,0),Ch=new A(0,0,1),Rh={type:"added"},Bf={type:"removed"},es={type:"childadded",child:null},va={type:"childremoved",child:null},Ne=class i extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new A,e=new Pn,n=new Rn,s=new A(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new Vt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Th,t)}rotateY(t){return this.rotateOnAxis(Ah,t)}rotateZ(t){return this.rotateOnAxis(Ch,t)}translateOnAxis(t,e){return Eh.copy(t).applyQuaternion(this.quaternion),this.position.add(Eh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Th,t)}translateY(t){return this.translateOnAxis(Ah,t)}translateZ(t){return this.translateOnAxis(Ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Mr.copy(t):Mr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(zs,Mr,this.up):Bn.lookAt(Mr,zs,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Bn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rh),es.child=t,this.dispatchEvent(es),es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Bf),va.child=t,this.dispatchEvent(va),va.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rh),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,Of),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,kf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new A(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xn=new A,zn=new A,Ma=new A,Hn=new A,ns=new A,is=new A,Ph=new A,ba=new A,Sa=new A,wa=new A,Ea=new ce,Ta=new ce,Aa=new ce,Li=class i{constructor(t=new A,e=new A,n=new A){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),zn.subVectors(n,e),Ma.subVectors(t,e);let o=xn.dot(xn),a=xn.dot(zn),l=xn.dot(Ma),c=zn.dot(zn),u=zn.dot(Ma),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-a*u)*f,y=(o*u-a*l)*f;return r.set(1-p-y,y,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Hn.x),l.addScaledVector(o,Hn.y),l.addScaledVector(a,Hn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ea.setScalar(0),Ta.setScalar(0),Aa.setScalar(0),Ea.fromBufferAttribute(t,e),Ta.fromBufferAttribute(t,n),Aa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ea,r.x),o.addScaledVector(Ta,r.y),o.addScaledVector(Aa,r.z),o}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),zn.subVectors(t,e),xn.cross(zn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),xn.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;ns.subVectors(s,n),is.subVectors(r,n),ba.subVectors(t,n);let l=ns.dot(ba),c=is.dot(ba);if(l<=0&&c<=0)return e.copy(n);Sa.subVectors(t,s);let u=ns.dot(Sa),d=is.dot(Sa);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(ns,o);wa.subVectors(t,r);let p=ns.dot(wa),y=is.dot(wa);if(y>=0&&p<=y)return e.copy(r);let _=p*c-l*y;if(_<=0&&c>=0&&y<=0)return a=c/(c-y),e.copy(n).addScaledVector(is,a);let g=u*y-p*d;if(g<=0&&d-u>=0&&p-y>=0)return Ph.subVectors(r,s),a=(d-u)/(d-u+(p-y)),e.copy(s).addScaledVector(Ph,a);let m=1/(g+_+f);return o=_*m,a=f*m,e.copy(n).addScaledVector(ns,o).addScaledVector(is,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},br={h:0,s:0,l:0};function Ca(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=wc(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ca(o,r,t+1/3),this.g=Ca(o,r,t),this.b=Ca(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ge){let n=Pu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ge){return Zt.fromWorkingColorSpace(Be.copy(this),t),Math.round(De(Be.r*255,0,255))*65536+Math.round(De(Be.g*255,0,255))*256+Math.round(De(Be.b*255,0,255))}getHexString(t=ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Be.copy(this),e);let n=Be.r,s=Be.g,r=Be.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=ge){Zt.fromWorkingColorSpace(Be.copy(this),t);let e=Be.r,n=Be.g,s=Be.b;return t!==ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(br);let n=Ys(ri.h,br.h,e),s=Ys(ri.s,br.s,e),r=Ys(ri.l,br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new mt;mt.NAMES=Pu;var zf=0,ui=class extends hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Cs(),this.name="",this.blending=hs,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ga,this.blendDst=Wa,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zi,this.stencilZFail=Zi,this.stencilZPass=Zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ga&&(n.blendSrc=this.blendSrc),this.blendDst!==Wa&&(n.blendDst=this.blendDst),this.blendEquation!==Ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Mn=class extends ui{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new A,Sr=new vt,je=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fh,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ls(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ls(e,this.array)),e}setX(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ls(e,this.array)),e}setY(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ls(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ls(e,this.array)),e}setW(t,e){return this.normalized&&(e=Xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Xe(e,this.array),n=Xe(n,this.array),s=Xe(s,this.array),r=Xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fh&&(t.usage=this.usage),t}};var Jr=class extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var jr=class extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}},Hf=0,un=new ye,Ra=new Ne,ss=new A,rn=new Qe,Hs=new Qe,Le=new A,Ze=class i extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ru(t)?jr:Jr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new be(n,3))}else{for(let n=0,s=e.count;n<s;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Hs.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(rn.min,Hs.min),rn.expandByPoint(Le),Le.addVectors(rn.max,Hs.max),rn.expandByPoint(Le)):(rn.expandByPoint(Hs.min),rn.expandByPoint(Hs.max))}rn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Le.fromBufferAttribute(a,c),l&&(ss.fromBufferAttribute(t,c),Le.add(ss)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new A,l[L]=new A;let c=new A,u=new A,d=new A,f=new vt,p=new vt,y=new vt,_=new A,g=new A;function m(L,S,b){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,b),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,S),y.fromBufferAttribute(r,b),u.sub(c),d.sub(c),p.sub(f),y.sub(f);let I=1/(p.x*y.y-y.x*p.y);isFinite(I)&&(_.copy(u).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(I),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-y.x).multiplyScalar(I),a[L].add(_),a[S].add(_),a[b].add(_),l[L].add(g),l[S].add(g),l[b].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let L=0,S=w.length;L<S;++L){let b=w[L],I=b.start,G=b.count;for(let z=I,Y=I+G;z<Y;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let E=new A,M=new A,O=new A,C=new A;function R(L){O.fromBufferAttribute(s,L),C.copy(O);let S=a[L];E.copy(S),E.sub(O.multiplyScalar(O.dot(S))).normalize(),M.crossVectors(C,S);let I=M.dot(l[L])<0?-1:1;o.setXYZW(L,E.x,E.y,E.z,I)}for(let L=0,S=w.length;L<S;++L){let b=w[L],I=b.start,G=b.count;for(let z=I,Y=I+G;z<Y;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,c=new A,u=new A,d=new A;if(t)for(let f=0,p=t.count;f<p;f+=3){let y=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),p=0,y=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let m=0;m<u;m++)f[y++]=c[p++]}return new je(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ih=new ye,Ti=new $r,wr=new vs,Lh=new A,Er=new A,Tr=new A,Ar=new A,Pa=new A,Cr=new A,Dh=new A,Rr=new A,Ee=class extends Ne{constructor(t=new Ze,e=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Cr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],d=r[l];u!==0&&(Pa.fromBufferAttribute(d,t),o?Cr.addScaledVector(Pa,u):Cr.addScaledVector(Pa.sub(e),u))}e.add(Cr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wr.copy(n.boundingSphere),wr.applyMatrix4(r),Ti.copy(t.ray).recast(t.near),!(wr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(wr,Lh)===null||Ti.origin.distanceToSquared(Lh)>(t.far-t.near)**2))&&(Ih.copy(r).invert(),Ti.copy(t.ray).applyMatrix4(Ih),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=f.length;y<_;y++){let g=f[y],m=o[g.materialIndex],w=Math.max(g.start,p.start),E=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let M=w,O=E;M<O;M+=3){let C=a.getX(M),R=a.getX(M+1),L=a.getX(M+2);s=Pr(this,m,t,n,c,u,d,C,R,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=y,m=_;g<m;g+=3){let w=a.getX(g),E=a.getX(g+1),M=a.getX(g+2);s=Pr(this,o,t,n,c,u,d,w,E,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=f.length;y<_;y++){let g=f[y],m=o[g.materialIndex],w=Math.max(g.start,p.start),E=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=w,O=E;M<O;M+=3){let C=M,R=M+1,L=M+2;s=Pr(this,m,t,n,c,u,d,C,R,L),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let y=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=y,m=_;g<m;g+=3){let w=g,E=g+1,M=g+2;s=Pr(this,o,t,n,c,u,d,w,E,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Vf(i,t,e,n,s,r,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===ci,a),l===null)return null;Rr.copy(a),Rr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Rr);return c<e.near||c>e.far?null:{distance:c,point:Rr.clone(),object:i}}function Pr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Er),i.getVertexPosition(l,Tr),i.getVertexPosition(c,Ar);let u=Vf(i,t,e,n,Er,Tr,Ar,Dh);if(u){let d=new A;Li.getBarycoord(Dh,Er,Tr,Ar,d),s&&(u.uv=Li.getInterpolatedAttribute(s,a,l,c,d,new vt)),r&&(u.uv1=Li.getInterpolatedAttribute(r,a,l,c,d,new vt)),o&&(u.normal=Li.getInterpolatedAttribute(o,a,l,c,d,new A),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new A,materialIndex:0};Li.getNormal(Er,Tr,Ar,f.normal),u.face=f,u.barycoord=d}return u}var di=class i extends Ze{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,p=0;y("z","y","x",-1,-1,n,e,t,o,r,0),y("z","y","x",1,-1,n,e,-t,o,r,1),y("x","z","y",1,1,t,n,e,s,o,2),y("x","z","y",1,-1,t,n,-e,s,o,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(d,2));function y(_,g,m,w,E,M,O,C,R,L,S){let b=M/R,I=O/L,G=M/2,z=O/2,Y=C/2,tt=R+1,q=L+1,it=0,W=0,at=new A;for(let pt=0;pt<q;pt++){let Rt=pt*I-z;for(let Pt=0;Pt<tt;Pt++){let se=Pt*b-G;at[_]=se*w,at[g]=Rt*E,at[m]=Y,c.push(at.x,at.y,at.z),at[_]=0,at[g]=0,at[m]=C>0?1:-1,u.push(at.x,at.y,at.z),d.push(Pt/R),d.push(1-pt/L),it+=1}}for(let pt=0;pt<L;pt++)for(let Rt=0;Rt<R;Rt++){let Pt=f+Rt+tt*pt,se=f+Rt+tt*(pt+1),$=f+(Rt+1)+tt*(pt+1),st=f+(Rt+1)+tt*pt;l.push(Pt,se,st),l.push(se,$,st),W+=6}a.addGroup(p,W,S),p+=W,f+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=Ms(i[e]);for(let s in n)t[s]=n[s]}return t}function Gf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Iu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var pi={clone:Ms,merge:Ye},Wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fe=class extends ui{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wf,this.fragmentShader=Xf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=Gf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Qr=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},oi=new A,Nh=new vt,Uh=new vt,xe=class extends Qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=xs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xs*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,Nh,Uh),e.subVectors(Uh,Nh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},rs=-90,os=1,Il=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xe(rs,os,t,e);s.layers=this.layers,this.add(s);let r=new xe(rs,os,t,e);r.layers=this.layers,this.add(r);let o=new xe(rs,os,t,e);o.layers=this.layers,this.add(o);let a=new xe(rs,os,t,e);a.layers=this.layers,this.add(a);let l=new xe(rs,os,t,e);l.layers=this.layers,this.add(l);let c=new xe(rs,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},to=class extends on{constructor(t,e,n,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ll=class extends Te{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new to(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new di(5,5,5),r=new Fe({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:dn});r.uniforms.tEquirect.value=e;let o=new Ee(s,r),a=e.minFilter;return e.minFilter===Ui&&(e.minFilter=Cn),new Il(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Ia=new A,Yf=new A,qf=new Vt,Gn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ia.subVectors(n,e).cross(Yf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ia),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||qf.getNormalMatrix(t),s=this.coplanarPoint(Ia).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ai=new vs,Ir=new A,Js=class{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,o=new Gn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],d=s[6],f=s[7],p=s[8],y=s[9],_=s[10],g=s[11],m=s[12],w=s[13],E=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,g-p,M-m).normalize(),n[1].setComponents(l+r,f+c,g+p,M+m).normalize(),n[2].setComponents(l+o,f+u,g+y,M+w).normalize(),n[3].setComponents(l-o,f-u,g-y,M-w).normalize(),n[4].setComponents(l-a,f-d,g-_,M-E).normalize(),e===Yn)n[5].setComponents(l+a,f+d,g+_,M+E).normalize();else if(e===Xr)n[5].setComponents(a,d,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Lu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Zf(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,y)=>p.start-y.start);let f=0;for(let p=1;p<d.length;p++){let y=d[f],_=d[p];_.start<=y.start+y.count+1?y.count=Math.max(y.count,_.start+_.count-y.start):(++f,d[f]=_)}d.length=f+1;for(let p=0,y=d.length;p<y;p++){let _=d[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var bs=class i extends Ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,d=t/a,f=e/l,p=[],y=[],_=[],g=[];for(let m=0;m<u;m++){let w=m*f-o;for(let E=0;E<c;E++){let M=E*d-r;y.push(M,-w,0),_.push(0,0,1),g.push(E/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<a;w++){let E=w+c*m,M=w+c*(m+1),O=w+1+c*(m+1),C=w+1+c*m;p.push(E,M,C),p.push(M,O,C)}this.setIndex(p),this.setAttribute("position",new be(y,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},$f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kf=`#ifdef USE_ALPHAHASH
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
#endif`,Jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
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
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ip=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ap=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lp=`#ifdef USE_IRIDESCENCE
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
#endif`,cp=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_p=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ep="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
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
}`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Hp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,qp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sm=`#if defined( USE_POINTS_UV )
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
#endif`,rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,am=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
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
#endif`,_m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Em=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Dm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Om=`#ifdef USE_SKINNING
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
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
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
}`,e0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,n0=`#define DISTANCE
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
}`,i0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
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
}`,a0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 diffuse;
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
}`,h0=`#define LAMBERT
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
}`,u0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,d0=`#define MATCAP
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
}`,f0=`#define MATCAP
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
}`,p0=`#define NORMAL
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
}`,m0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g0=`#define PHONG
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
}`,y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,_0=`#define STANDARD
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
}`,x0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,v0=`#define TOON
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
}`,M0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,b0=`uniform float size;
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
}`,S0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,E0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,T0=`uniform float rotation;
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
}`,A0=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:$f,alphahash_pars_fragment:Kf,alphamap_fragment:Jf,alphamap_pars_fragment:jf,alphatest_fragment:Qf,alphatest_pars_fragment:tp,aomap_fragment:ep,aomap_pars_fragment:np,batching_pars_vertex:ip,batching_vertex:sp,begin_vertex:rp,beginnormal_vertex:op,bsdfs:ap,iridescence_fragment:lp,bumpmap_pars_fragment:cp,clipping_planes_fragment:hp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:dp,clipping_planes_vertex:fp,color_fragment:pp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:yp,common:_p,cube_uv_reflection_fragment:xp,defaultnormal_vertex:vp,displacementmap_pars_vertex:Mp,displacementmap_vertex:bp,emissivemap_fragment:Sp,emissivemap_pars_fragment:wp,colorspace_fragment:Ep,colorspace_pars_fragment:Tp,envmap_fragment:Ap,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Rp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Hp,envmap_vertex:Ip,fog_vertex:Lp,fog_pars_vertex:Dp,fog_fragment:Np,fog_pars_fragment:Up,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:Op,lights_lambert_fragment:kp,lights_lambert_pars_fragment:Bp,lights_pars_begin:zp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Gp,lights_phong_fragment:Wp,lights_phong_pars_fragment:Xp,lights_physical_fragment:Yp,lights_physical_pars_fragment:qp,lights_fragment_begin:Zp,lights_fragment_maps:$p,lights_fragment_end:Kp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Qp,logdepthbuf_vertex:tm,map_fragment:em,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:sm,metalnessmap_fragment:rm,metalnessmap_pars_fragment:om,morphinstance_vertex:am,morphcolor_vertex:lm,morphnormal_vertex:cm,morphtarget_pars_vertex:hm,morphtarget_vertex:um,normal_fragment_begin:dm,normal_fragment_maps:fm,normal_pars_fragment:pm,normal_pars_vertex:mm,normal_vertex:gm,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:_m,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:vm,iridescence_pars_fragment:Mm,opaque_fragment:bm,packing:Sm,premultiplied_alpha_fragment:wm,project_vertex:Em,dithering_fragment:Tm,dithering_pars_fragment:Am,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Rm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Im,shadowmap_vertex:Lm,shadowmask_pars_fragment:Dm,skinbase_vertex:Nm,skinning_pars_vertex:Um,skinning_vertex:Fm,skinnormal_vertex:Om,specularmap_fragment:km,specularmap_pars_fragment:Bm,tonemapping_fragment:zm,tonemapping_pars_fragment:Hm,transmission_fragment:Vm,transmission_pars_fragment:Gm,uv_pars_fragment:Wm,uv_pars_vertex:Xm,uv_vertex:Ym,worldpos_vertex:qm,background_vert:Zm,background_frag:$m,backgroundCube_vert:Km,backgroundCube_frag:Jm,cube_vert:jm,cube_frag:Qm,depth_vert:t0,depth_frag:e0,distanceRGBA_vert:n0,distanceRGBA_frag:i0,equirect_vert:s0,equirect_frag:r0,linedashed_vert:o0,linedashed_frag:a0,meshbasic_vert:l0,meshbasic_frag:c0,meshlambert_vert:h0,meshlambert_frag:u0,meshmatcap_vert:d0,meshmatcap_frag:f0,meshnormal_vert:p0,meshnormal_frag:m0,meshphong_vert:g0,meshphong_frag:y0,meshphysical_vert:_0,meshphysical_frag:x0,meshtoon_vert:v0,meshtoon_frag:M0,points_vert:b0,points_frag:S0,shadow_vert:w0,shadow_frag:E0,sprite_vert:T0,sprite_frag:A0},ot={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},An={basic:{uniforms:Ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new mt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ye([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ye([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new mt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ye([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ye([ot.points,ot.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ye([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ye([ot.common,ot.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ye([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ye([ot.sprite,ot.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ye([ot.common,ot.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ye([ot.lights,ot.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};An.physical={uniforms:Ye([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var Lr={r:0,b:0,g:0},Ci=new Pn,C0=new ye;function R0(i,t,e,n,s,r,o){let a=new mt(0),l=r===!0?0:1,c,u,d=null,f=0,p=null;function y(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?e:t).get(E)),E}function _(w){let E=!1,M=y(w);M===null?m(a,l):M&&M.isColor&&(m(M,1),E=!0);let O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,E){let M=y(E);M&&(M.isCubeTexture||M.mapping===xo)?(u===void 0&&(u=new Ee(new di(1,1,1),new Fe({name:"BackgroundCubeMaterial",uniforms:Ms(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(O,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ci.copy(E.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(Ci)),u.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ae,(d!==M||f!==M.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ee(new bs(2,2),new Fe({name:"BackgroundMaterial",uniforms:Ms(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Zt.getTransfer(M.colorSpace)!==ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,E){w.getRGB(Lr,Iu(i)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(w,E=1){a.set(w),l=E,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(a,l)},render:_,addToRenderList:g}}function P0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(b,I,G,z,Y){let tt=!1,q=d(z,G,I);r!==q&&(r=q,c(r.object)),tt=p(b,z,G,Y),tt&&y(b,z,G,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(tt||o)&&(o=!1,M(b,I,G,z),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function d(b,I,G){let z=G.wireframe===!0,Y=n[b.id];Y===void 0&&(Y={},n[b.id]=Y);let tt=Y[I.id];tt===void 0&&(tt={},Y[I.id]=tt);let q=tt[z];return q===void 0&&(q=f(l()),tt[z]=q),q}function f(b){let I=[],G=[],z=[];for(let Y=0;Y<e;Y++)I[Y]=0,G[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:G,attributeDivisors:z,object:b,attributes:{},index:null}}function p(b,I,G,z){let Y=r.attributes,tt=I.attributes,q=0,it=G.getAttributes();for(let W in it)if(it[W].location>=0){let pt=Y[W],Rt=tt[W];if(Rt===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(Rt=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(Rt=b.instanceColor)),pt===void 0||pt.attribute!==Rt||Rt&&pt.data!==Rt.data)return!0;q++}return r.attributesNum!==q||r.index!==z}function y(b,I,G,z){let Y={},tt=I.attributes,q=0,it=G.getAttributes();for(let W in it)if(it[W].location>=0){let pt=tt[W];pt===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor));let Rt={};Rt.attribute=pt,pt&&pt.data&&(Rt.data=pt.data),Y[W]=Rt,q++}r.attributes=Y,r.attributesNum=q,r.index=z}function _(){let b=r.newAttributes;for(let I=0,G=b.length;I<G;I++)b[I]=0}function g(b){m(b,0)}function m(b,I){let G=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;G[b]=1,z[b]===0&&(i.enableVertexAttribArray(b),z[b]=1),Y[b]!==I&&(i.vertexAttribDivisor(b,I),Y[b]=I)}function w(){let b=r.newAttributes,I=r.enabledAttributes;for(let G=0,z=I.length;G<z;G++)I[G]!==b[G]&&(i.disableVertexAttribArray(G),I[G]=0)}function E(b,I,G,z,Y,tt,q){q===!0?i.vertexAttribIPointer(b,I,G,Y,tt):i.vertexAttribPointer(b,I,G,z,Y,tt)}function M(b,I,G,z){_();let Y=z.attributes,tt=G.getAttributes(),q=I.defaultAttributeValues;for(let it in tt){let W=tt[it];if(W.location>=0){let at=Y[it];if(at===void 0&&(it==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),it==="instanceColor"&&b.instanceColor&&(at=b.instanceColor)),at!==void 0){let pt=at.normalized,Rt=at.itemSize,Pt=t.get(at);if(Pt===void 0)continue;let se=Pt.buffer,$=Pt.type,st=Pt.bytesPerElement,Mt=$===i.INT||$===i.UNSIGNED_INT||at.gpuType===_c;if(at.isInterleavedBufferAttribute){let lt=at.data,It=lt.stride,B=at.offset;if(lt.isInstancedInterleavedBuffer){for(let K=0;K<W.locationSize;K++)m(W.location+K,lt.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let K=0;K<W.locationSize;K++)g(W.location+K);i.bindBuffer(i.ARRAY_BUFFER,se);for(let K=0;K<W.locationSize;K++)E(W.location+K,Rt/W.locationSize,$,pt,It*st,(B+Rt/W.locationSize*K)*st,Mt)}else{if(at.isInstancedBufferAttribute){for(let lt=0;lt<W.locationSize;lt++)m(W.location+lt,at.meshPerAttribute);b.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let lt=0;lt<W.locationSize;lt++)g(W.location+lt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let lt=0;lt<W.locationSize;lt++)E(W.location+lt,Rt/W.locationSize,$,pt,Rt*st,Rt/W.locationSize*lt*st,Mt)}}else if(q!==void 0){let pt=q[it];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(W.location,pt);break;case 3:i.vertexAttrib3fv(W.location,pt);break;case 4:i.vertexAttrib4fv(W.location,pt);break;default:i.vertexAttrib1fv(W.location,pt)}}}}w()}function O(){L();for(let b in n){let I=n[b];for(let G in I){let z=I[G];for(let Y in z)u(z[Y].object),delete z[Y];delete I[G]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let G in I){let z=I[G];for(let Y in z)u(z[Y].object),delete z[Y];delete I[G]}delete n[b.id]}function R(b){for(let I in n){let G=n[I];if(G[b.id]===void 0)continue;let z=G[b.id];for(let Y in z)u(z[Y].object),delete z[Y];delete G[b.id]}}function L(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:S,dispose:O,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function I0(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let y=0;y<d;y++)p+=u[y];e.update(p,n,1)}function l(c,u,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],u[y],f[y]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let y=0;for(let _=0;_<d;_++)y+=u[_]*f[_];e.update(y,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function L0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==vn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let L=R===In&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Zn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Xn&&!L)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=y>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:y,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:O,maxSamples:C}}function D0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Gn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){let y=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||y===null||y.length===0||r&&!g)r?u(null):c();else{let w=r?0:n,E=w*4,M=m.clippingState||null;l.value=M,M=u(y,f,E,p);for(let O=0;O!==E;++O)M[O]=e[O];m.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,p,y){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,y!==!0||g===null){let m=p+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,M=p;E!==_;++E,M+=4)o.copy(d[E]).applyMatrix4(w,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function N0(i){let t=new WeakMap;function e(o,a){return a===ja?o.mapping=ms:a===Qa&&(o.mapping=gs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ja||a===Qa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ll(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var js=class extends Qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},cs=4,Fh=[.125,.215,.35,.446,.526,.582],Di=20,La=new js,Oh=new mt,Da=null,Na=0,Ua=0,Fa=!1,Pi=(1+Math.sqrt(5))/2,as=1/Pi,kh=[new A(-Pi,as,0),new A(Pi,as,0),new A(-as,0,Pi),new A(as,0,Pi),new A(0,Pi,-as),new A(0,Pi,as),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],eo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Da=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Da,Na,Ua),this._renderer.xr.enabled=Fa,t.scissorTest=!1,Dr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Da=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:In,format:vn,colorSpace:As,depthBuffer:!1},s=Bh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U0(r)),this._blurMaterial=F0(r,t,e)}return s}_compileMaterial(t){let e=new Ee(this._lodPlanes[0],t);this._renderer.compile(e,La)}_sceneToCubeUV(t,e,n,s){let a=new xe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Oh),u.toneMapping=li,u.autoClear=!1;let p=new Mn({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),y=new Ee(new di,p),_=!1,g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,_=!0):(p.color.copy(Oh),_=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):w===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));let E=this._cubeSize;Dr(s,w*E,m>2?E:0,E,E),u.setRenderTarget(s),_&&u.render(y,a),u.render(t,a)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=g}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ms||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zh());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Dr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,La)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=kh[(s-r-1)%kh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ee(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Di-1),_=r/y,g=isFinite(r)?1+Math.floor(u*_):Di;g>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Di}`);let m=[],w=0;for(let R=0;R<Di;++R){let L=R/_,S=Math.exp(-L*L/2);m.push(S),R===0?w+=S:R<g&&(w+=2*S)}for(let R=0;R<m.length;R++)m[R]=m[R]/w;f.envMap.value=t.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=y,f.mipInt.value=E-n;let M=this._sizeLods[s],O=3*M*(s>E-cs?s-E+cs:0),C=4*(this._cubeSize-M);Dr(e,O,C,3*M,2*M),l.setRenderTarget(e),l.render(d,La)}};function U0(i){let t=[],e=[],n=[],s=i,r=i-cs+1+Fh.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-cs?l=Fh[o-i+cs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,y=6,_=3,g=2,m=1,w=new Float32Array(_*y*p),E=new Float32Array(g*y*p),M=new Float32Array(m*y*p);for(let C=0;C<p;C++){let R=C%3*2/3-1,L=C>2?0:-1,S=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];w.set(S,_*y*C),E.set(f,g*y*C);let b=[C,C,C,C,C,C];M.set(b,m*y*C)}let O=new Ze;O.setAttribute("position",new je(w,_)),O.setAttribute("uv",new je(E,g)),O.setAttribute("faceIndex",new je(M,m)),t.push(O),s>cs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bh(i,t,e){let n=new Te(i,t,e);return n.texture.mapping=xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function F0(i,t,e){let n=new Float32Array(Di),s=new A(0,1,0);return new Fe({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function zh(){return new Fe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Hh(){return new Fe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dn,depthTest:!1,depthWrite:!1})}function Ec(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function O0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===ja||l===Qa,u=l===ms||l===gs;if(c||u){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new eo(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new eo(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function k0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Gs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function B0(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let y in f.attributes)t.remove(f.attributes[y]);for(let y in f.morphAttributes){let _=f.morphAttributes[y];for(let g=0,m=_.length;g<m;g++)t.remove(_[g])}f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let y in f)t.update(f[y],i.ARRAY_BUFFER);let p=d.morphAttributes;for(let y in p){let _=p[y];for(let g=0,m=_.length;g<m;g++)t.update(_[g],i.ARRAY_BUFFER)}}function c(d){let f=[],p=d.index,y=d.attributes.position,_=0;if(p!==null){let w=p.array;_=p.version;for(let E=0,M=w.length;E<M;E+=3){let O=w[E+0],C=w[E+1],R=w[E+2];f.push(O,C,C,R,R,O)}}else if(y!==void 0){let w=y.array;_=y.version;for(let E=0,M=w.length/3-1;E<M;E+=3){let O=E+0,C=E+1,R=E+2;f.push(O,C,C,R,R,O)}}else return;let g=new(Ru(f)?jr:Jr)(f,1);g.version=_;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function z0(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,y){y!==0&&(i.drawElementsInstanced(n,p,r,f*o,y),e.update(p,n,y))}function u(f,p,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,y);let g=0;for(let m=0;m<y;m++)g+=p[m];e.update(g,n,1)}function d(f,p,y,_){if(y===0)return;let g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/o,p[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,y);let m=0;for(let w=0;w<y;w++)m+=p[w]*_[w];e.update(m,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function H0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function V0(i,t,e){let n=new WeakMap,s=new ce;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==d){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],E=0;p===!0&&(E=1),y===!0&&(E=2),_===!0&&(E=3);let M=a.attributes.position.count*E,O=1;M>t.maxTextureSize&&(O=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let C=new Float32Array(M*O*4*d),R=new Zr(C,M,O,d);R.type=Xn,R.needsUpdate=!0;let L=E*4;for(let b=0;b<d;b++){let I=g[b],G=m[b],z=w[b],Y=M*O*4*b;for(let tt=0;tt<I.count;tt++){let q=tt*L;p===!0&&(s.fromBufferAttribute(I,tt),C[Y+q+0]=s.x,C[Y+q+1]=s.y,C[Y+q+2]=s.z,C[Y+q+3]=0),y===!0&&(s.fromBufferAttribute(G,tt),C[Y+q+4]=s.x,C[Y+q+5]=s.y,C[Y+q+6]=s.z,C[Y+q+7]=0),_===!0&&(s.fromBufferAttribute(z,tt),C[Y+q+8]=s.x,C[Y+q+9]=s.y,C[Y+q+10]=s.z,C[Y+q+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:R,size:new vt(M,O)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let y=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function G0(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var no=class extends on{constructor(t,e,n,s,r,o,a,l,c,u=us){if(u!==us&&u!==_s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===us&&(n=Oi),n===void 0&&u===_s&&(n=ys),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Du=new on,Vh=new no(1,1),Nu=new Zr,Uu=new Pl,Fu=new to,Gh=[],Wh=[],Xh=new Float32Array(16),Yh=new Float32Array(9),qh=new Float32Array(4);function Rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Mo(i,t){let e=Wh[t];e===void 0&&(e=new Int32Array(t),Wh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function W0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function X0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function Y0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Z0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;qh.set(n),i.uniformMatrix2fv(this.addr,!1,qh),Ce(e,n)}}function $0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Yh.set(n),i.uniformMatrix3fv(this.addr,!1,Yh),Ce(e,n)}}function K0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Xh.set(n),i.uniformMatrix4fv(this.addr,!1,Xh),Ce(e,n)}}function J0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Q0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function eg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vh.compareFunction=Cu,r=Vh):r=Du,e.setTexture2D(t||r,s)}function og(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Uu,s)}function ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Fu,s)}function lg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Nu,s)}function cg(i){switch(i){case 5126:return W0;case 35664:return X0;case 35665:return Y0;case 35666:return q0;case 35674:return Z0;case 35675:return $0;case 35676:return K0;case 5124:case 35670:return J0;case 35667:case 35671:return j0;case 35668:case 35672:return Q0;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return lg}}function hg(i,t){i.uniform1fv(this.addr,t)}function ug(i,t){let e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function dg(i,t){let e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function fg(i,t){let e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function pg(i,t){let e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mg(i,t){let e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gg(i,t){let e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function yg(i,t){i.uniform1iv(this.addr,t)}function _g(i,t){i.uniform2iv(this.addr,t)}function xg(i,t){i.uniform3iv(this.addr,t)}function vg(i,t){i.uniform4iv(this.addr,t)}function Mg(i,t){i.uniform1uiv(this.addr,t)}function bg(i,t){i.uniform2uiv(this.addr,t)}function Sg(i,t){i.uniform3uiv(this.addr,t)}function wg(i,t){i.uniform4uiv(this.addr,t)}function Eg(i,t,e){let n=this.cache,s=t.length,r=Mo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Du,r[o])}function Tg(i,t,e){let n=this.cache,s=t.length,r=Mo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Uu,r[o])}function Ag(i,t,e){let n=this.cache,s=t.length,r=Mo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Fu,r[o])}function Cg(i,t,e){let n=this.cache,s=t.length,r=Mo(e,s);Ae(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Nu,r[o])}function Rg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return dg;case 35666:return fg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return yg;case 35667:case 35671:return _g;case 35668:case 35672:return xg;case 35669:case 35673:return vg;case 5125:return Mg;case 36294:return bg;case 36295:return Sg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Tg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Cg}}var Dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cg(e.type)}},Nl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Rg(e.type)}},Ul=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Oa=/(\w+)(\])?(\[|\.)?/g;function Zh(i,t){i.seq.push(t),i.map[t.id]=t}function Pg(i,t,e){let n=i.name,s=n.length;for(Oa.lastIndex=0;;){let r=Oa.exec(n),o=Oa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zh(e,c===void 0?new Dl(a,i,t):new Nl(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Ul(a),Zh(e,d)),e=d}}}var fs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Pg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function $h(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Ig=37297,Lg=0;function Dg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Kh=new Vt;function Ng(i){Zt._getMatrix(Kh,Zt.workingColorSpace,i);let t=`mat3( ${Kh.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case vo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Jh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Dg(i.getShaderSource(t),o)}else return s}function Ug(i,t){let e=Ng(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fg(i,t){let e;switch(t){case fc:e="Linear";break;case pc:e="Reinhard";break;case mc:e="Cineon";break;case nr:e="ACESFilmic";break;case gc:e="AgX";break;case yc:e="Neutral";break;case jd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Nr=new A;function Og(){Zt.getLuminanceCoefficients(Nr);let i=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function Bg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ws(i){return i!==""}function jh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(i){return i.replace(Hg,Gg)}var Vg=new Map;function Gg(i,t){let e=Xt[t];if(e===void 0){let n=Vg.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Fl(e)}var Wg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(i){return i.replace(Wg,Xg)}function Xg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eu(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Yg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===dc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(t="SHADOWMAP_TYPE_VSM"),t}function qg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function $g(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mu:t="ENVMAP_BLENDING_MULTIPLY";break;case Kd:t="ENVMAP_BLENDING_MIX";break;case Jd:t="ENVMAP_BLENDING_ADD";break}return t}function Kg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Jg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Yg(e),c=qg(e),u=Zg(e),d=$g(e),f=Kg(e),p=kg(e),y=Bg(r),_=s.createProgram(),g,m,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ws).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Ws).join(`
`),m.length>0&&(m+=`
`)):(g=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),m=[eu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==li?"#define TONE_MAPPING":"",e.toneMapping!==li?Xt.tonemapping_pars_fragment:"",e.toneMapping!==li?Fg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Ug("linearToOutputTexel",e.outputColorSpace),Og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ws).join(`
`)),o=Fl(o),o=jh(o,e),o=Qh(o,e),a=Fl(a),a=jh(a,e),a=Qh(a,e),o=tu(o),a=tu(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=w+g+o,M=w+m+a,O=$h(s,s.VERTEX_SHADER,E),C=$h(s,s.FRAGMENT_SHADER,M);s.attachShader(_,O),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(I){if(i.debug.checkShaderErrors){let G=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(O).trim(),Y=s.getShaderInfoLog(C).trim(),tt=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,O,C);else{let it=Jh(s,O,"vertex"),W=Jh(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+G+`
`+it+`
`+W)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||Y==="")&&(q=!1);q&&(I.diagnostics={runnable:tt,programLog:G,vertexShader:{log:z,prefix:g},fragmentShader:{log:Y,prefix:m}})}s.deleteShader(O),s.deleteShader(C),L=new fs(s,_),S=zg(s,_)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,Ig)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Lg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=C,this}var jg=0,Ol=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new kl(t),e.set(t,n)),n}},kl=class{constructor(t){this.id=jg++,this.code=t,this.usedTimes=0}};function Qg(i,t,e,n,s,r,o){let a=new Kr,l=new Ol,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,b,I,G,z){let Y=G.fog,tt=z.geometry,q=S.isMeshStandardMaterial?G.environment:null,it=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),W=it&&it.mapping===xo?it.image.height:null,at=y[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let pt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,Rt=pt!==void 0?pt.length:0,Pt=0;tt.morphAttributes.position!==void 0&&(Pt=1),tt.morphAttributes.normal!==void 0&&(Pt=2),tt.morphAttributes.color!==void 0&&(Pt=3);let se,$,st,Mt;if(at){let le=An[at];se=le.vertexShader,$=le.fragmentShader}else se=S.vertexShader,$=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),Mt=l.getFragmentShaderID(S);let lt=i.getRenderTarget(),It=i.state.buffers.depth.getReversed(),B=z.isInstancedMesh===!0,K=z.isBatchedMesh===!0,yt=!!S.map,bt=!!S.matcap,Ot=!!it,D=!!S.aoMap,We=!!S.lightMap,$t=!!S.bumpMap,Kt=!!S.normalMap,Nt=!!S.displacementMap,de=!!S.emissiveMap,Lt=!!S.metalnessMap,T=!!S.roughnessMap,x=S.anisotropy>0,k=S.clearcoat>0,j=S.dispersion>0,et=S.iridescence>0,J=S.sheen>0,At=S.transmission>0,ht=x&&!!S.anisotropyMap,gt=k&&!!S.clearcoatMap,Qt=k&&!!S.clearcoatNormalMap,nt=k&&!!S.clearcoatRoughnessMap,_t=et&&!!S.iridescenceMap,Ut=et&&!!S.iridescenceThicknessMap,Ft=J&&!!S.sheenColorMap,xt=J&&!!S.sheenRoughnessMap,Jt=!!S.specularMap,Wt=!!S.specularColorMap,he=!!S.specularIntensityMap,N=At&&!!S.transmissionMap,ct=At&&!!S.thicknessMap,X=!!S.gradientMap,Q=!!S.alphaMap,ft=S.alphaTest>0,ut=!!S.alphaHash,zt=!!S.extensions,ve=li;S.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ve=i.toneMapping);let Oe={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:se,fragmentShader:$,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:K,batchingColor:K&&z._colorsTexture!==null,instancing:B,instancingColor:B&&z.instanceColor!==null,instancingMorph:B&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:As,alphaToCoverage:!!S.alphaToCoverage,map:yt,matcap:bt,envMap:Ot,envMapMode:Ot&&it.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:We,bumpMap:$t,normalMap:Kt,displacementMap:f&&Nt,emissiveMap:de,normalMapObjectSpace:Kt&&S.normalMapType===nf,normalMapTangentSpace:Kt&&S.normalMapType===Au,metalnessMap:Lt,roughnessMap:T,anisotropy:x,anisotropyMap:ht,clearcoat:k,clearcoatMap:gt,clearcoatNormalMap:Qt,clearcoatRoughnessMap:nt,dispersion:j,iridescence:et,iridescenceMap:_t,iridescenceThicknessMap:Ut,sheen:J,sheenColorMap:Ft,sheenRoughnessMap:xt,specularMap:Jt,specularColorMap:Wt,specularIntensityMap:he,transmission:At,transmissionMap:N,thicknessMap:ct,gradientMap:X,opaque:S.transparent===!1&&S.blending===hs&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:ft,alphaHash:ut,combine:S.combine,mapUv:yt&&_(S.map.channel),aoMapUv:D&&_(S.aoMap.channel),lightMapUv:We&&_(S.lightMap.channel),bumpMapUv:$t&&_(S.bumpMap.channel),normalMapUv:Kt&&_(S.normalMap.channel),displacementMapUv:Nt&&_(S.displacementMap.channel),emissiveMapUv:de&&_(S.emissiveMap.channel),metalnessMapUv:Lt&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:ht&&_(S.anisotropyMap.channel),clearcoatMapUv:gt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(S.sheenRoughnessMap.channel),specularMapUv:Jt&&_(S.specularMap.channel),specularColorMapUv:Wt&&_(S.specularColorMap.channel),specularIntensityMapUv:he&&_(S.specularIntensityMap.channel),transmissionMapUv:N&&_(S.transmissionMap.channel),thicknessMapUv:ct&&_(S.thicknessMap.channel),alphaMapUv:Q&&_(S.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(Kt||x),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!tt.attributes.uv&&(yt||Q),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:It,skinning:z.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Pt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:yt&&S.map.isVideoTexture===!0&&Zt.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:de&&S.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wn,flipSided:S.side===Je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:zt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&S.extensions.multiDraw===!0||K)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Oe.vertexUv1s=c.has(1),Oe.vertexUv2s=c.has(2),Oe.vertexUv3s=c.has(3),c.clear(),Oe}function m(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)b.push(I),b.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(w(b,S),E(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function w(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function E(S,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),S.push(a.mask)}function M(S){let b=y[S.type],I;if(b){let G=An[b];I=pi.clone(G.uniforms)}else I=S.uniforms;return I}function O(S,b){let I;for(let G=0,z=u.length;G<z;G++){let Y=u[G];if(Y.cacheKey===b){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new Jg(i,b,S,r),u.push(I)),I}function C(S){if(--S.usedTimes===0){let b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function R(S){l.remove(S)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:M,acquireProgram:O,releaseProgram:C,releaseShaderCache:R,programs:u,dispose:L}}function ty(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function ey(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function nu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function iu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,p,y,_,g){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:f,material:p,groupOrder:y,renderOrder:d.renderOrder,z:_,group:g},i[t]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=p,m.groupOrder=y,m.renderOrder=d.renderOrder,m.z=_,m.group=g),t++,m}function a(d,f,p,y,_,g){let m=o(d,f,p,y,_,g);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function l(d,f,p,y,_,g){let m=o(d,f,p,y,_,g);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function c(d,f){e.length>1&&e.sort(d||ey),n.length>1&&n.sort(f||nu),s.length>1&&s.sort(f||nu)}function u(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function ny(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new iu,i.set(n,[o])):s>=r.length?(o=new iu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function iy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new A,color:new mt};break;case"SpotLight":e={position:new A,direction:new A,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new A,halfWidth:new A,halfHeight:new A};break}return i[t.id]=e,e}}}function sy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ry=0;function oy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ay(i){let t=new iy,e=sy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new ye,o=new ye;function a(c){let u=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,y=0,_=0,g=0,m=0,w=0,E=0,M=0,O=0,C=0,R=0;c.sort(oy);for(let S=0,b=c.length;S<b;S++){let I=c[S],G=I.color,z=I.intensity,Y=I.distance,tt=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=G.r*z,d+=G.g*z,f+=G.b*z;else if(I.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(I.sh.coefficients[q],z);R++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,W=e.get(I);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=tt,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=q,p++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(G).multiplyScalar(z),q.distance=Y,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,n.spot[_]=q;let it=I.shadow;if(I.map&&(n.spotLightMap[O]=I.map,O++,it.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[_]=it.matrix,I.castShadow){let W=e.get(I);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=tt,M++}_++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(G).multiplyScalar(z),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=q,g++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let it=I.shadow,W=e.get(I);W.shadowIntensity=it.intensity,W.shadowBias=it.bias,W.shadowNormalBias=it.normalBias,W.shadowRadius=it.radius,W.shadowMapSize=it.mapSize,W.shadowCameraNear=it.camera.near,W.shadowCameraFar=it.camera.far,n.pointShadow[y]=W,n.pointShadowMap[y]=tt,n.pointShadowMatrix[y]=I.shadow.matrix,E++}n.point[y]=q,y++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(z),q.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[m]=q,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let L=n.hash;(L.directionalLength!==p||L.pointLength!==y||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==w||L.numPointShadows!==E||L.numSpotShadows!==M||L.numSpotMaps!==O||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=g,n.point.length=y,n.hemi.length=m,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+O-C,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,L.directionalLength=p,L.pointLength=y,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=w,L.numPointShadows=E,L.numSpotShadows=M,L.numSpotMaps=O,L.numLightProbes=R,n.version=ry++)}function l(c,u){let d=0,f=0,p=0,y=0,_=0,g=u.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){let E=c[m];if(E.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),d++}else if(E.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(g),p++}else if(E.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(g),o.identity(),r.copy(E.matrixWorld),r.premultiply(g),o.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),y++}else if(E.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(g),f++}else if(E.isHemisphereLight){let M=n.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function su(i){let t=new ay(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ly(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new su(i),t.set(s,[a])):r>=o.length?(a=new su(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Bl=class extends ui{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},zl=class extends ui{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function uy(i,t,e){let n=new Js,s=new vt,r=new vt,o=new ce,a=new Bl({depthPacking:ef}),l=new zl,c={},u=e.maxTextureSize,d={[ci]:Je,[Je]:ci,[Wn]:Wn},f=new Fe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:cy,fragmentShader:hy}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let y=new Ze;y.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Ee(y,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let m=this.type;this.render=function(C,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),G=i.state;G.setBlending(dn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);let z=m!==Vn&&this.type===Vn,Y=m===Vn&&this.type!==Vn;for(let tt=0,q=C.length;tt<q;tt++){let it=C[tt],W=it.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let at=W.getFrameExtents();if(s.multiply(at),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/at.x),s.x=r.x*at.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/at.y),s.y=r.y*at.y,W.mapSize.y=r.y)),W.map===null||z===!0||Y===!0){let Rt=this.type!==Vn?{minFilter:ze,magFilter:ze}:{};W.map!==null&&W.map.dispose(),W.map=new Te(s.x,s.y,Rt),W.map.texture.name=it.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();let pt=W.getViewportCount();for(let Rt=0;Rt<pt;Rt++){let Pt=W.getViewport(Rt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),G.viewport(o),W.updateMatrices(it,Rt),n=W.getFrustum(),M(R,L,W.camera,it,this.type)}W.isPointLightShadow!==!0&&this.type===Vn&&w(W,L),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,b,I)};function w(C,R){let L=t.update(_);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Te(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,L,f,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,L,p,_,null)}function E(C,R,L,S){let b=null,I=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)b=I;else if(b=L.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let G=b.uuid,z=R.uuid,Y=c[G];Y===void 0&&(Y={},c[G]=Y);let tt=Y[z];tt===void 0&&(tt=b.clone(),Y[z]=tt,R.addEventListener("dispose",O)),b=tt}if(b.visible=R.visible,b.wireframe=R.wireframe,S===Vn?b.side=R.shadowSide!==null?R.shadowSide:R.side:b.side=R.shadowSide!==null?R.shadowSide:d[R.side],b.alphaMap=R.alphaMap,b.alphaTest=R.alphaTest,b.map=R.map,b.clipShadows=R.clipShadows,b.clippingPlanes=R.clippingPlanes,b.clipIntersection=R.clipIntersection,b.displacementMap=R.displacementMap,b.displacementScale=R.displacementScale,b.displacementBias=R.displacementBias,b.wireframeLinewidth=R.wireframeLinewidth,b.linewidth=R.linewidth,L.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let G=i.properties.get(b);G.light=L}return b}function M(C,R,L,S,b){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Vn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);let z=t.update(C),Y=C.material;if(Array.isArray(Y)){let tt=z.groups;for(let q=0,it=tt.length;q<it;q++){let W=tt[q],at=Y[W.materialIndex];if(at&&at.visible){let pt=E(C,at,S,b);C.onBeforeShadow(i,C,R,L,z,pt,W),i.renderBufferDirect(L,null,z,pt,C,W),C.onAfterShadow(i,C,R,L,z,pt,W)}}}else if(Y.visible){let tt=E(C,Y,S,b);C.onBeforeShadow(i,C,R,L,z,tt,null),i.renderBufferDirect(L,null,z,tt,C,null),C.onAfterShadow(i,C,R,L,z,tt,null)}}let G=C.children;for(let z=0,Y=G.length;z<Y;z++)M(G[z],R,L,S,b)}function O(C){C.target.removeEventListener("dispose",O);for(let L in c){let S=c[L],b=C.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var dy={[Xa]:Ya,[qa]:Ka,[Za]:Ja,[ps]:$a,[Ya]:Xa,[Ka]:qa,[Ja]:Za,[$a]:ps};function fy(i,t){function e(){let N=!1,ct=new ce,X=null,Q=new ce(0,0,0,0);return{setMask:function(ft){X!==ft&&!N&&(i.colorMask(ft,ft,ft,ft),X=ft)},setLocked:function(ft){N=ft},setClear:function(ft,ut,zt,ve,Oe){Oe===!0&&(ft*=ve,ut*=ve,zt*=ve),ct.set(ft,ut,zt,ve),Q.equals(ct)===!1&&(i.clearColor(ft,ut,zt,ve),Q.copy(ct))},reset:function(){N=!1,X=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,ct=!1,X=null,Q=null,ft=null;return{setReversed:function(ut){if(ct!==ut){let zt=t.get("EXT_clip_control");ct?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);let ve=ft;ft=null,this.setClear(ve)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?lt(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(ut){X!==ut&&!N&&(i.depthMask(ut),X=ut)},setFunc:function(ut){if(ct&&(ut=dy[ut]),Q!==ut){switch(ut){case Xa:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case $a:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ut}},setLocked:function(ut){N=ut},setClear:function(ut){ft!==ut&&(ct&&(ut=1-ut),i.clearDepth(ut),ft=ut)},reset:function(){N=!1,X=null,Q=null,ft=null,ct=!1}}}function s(){let N=!1,ct=null,X=null,Q=null,ft=null,ut=null,zt=null,ve=null,Oe=null;return{setTest:function(le){N||(le?lt(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(le){ct!==le&&!N&&(i.stencilMask(le),ct=le)},setFunc:function(le,mn,Un){(X!==le||Q!==mn||ft!==Un)&&(i.stencilFunc(le,mn,Un),X=le,Q=mn,ft=Un)},setOp:function(le,mn,Un){(ut!==le||zt!==mn||ve!==Un)&&(i.stencilOp(le,mn,Un),ut=le,zt=mn,ve=Un)},setLocked:function(le){N=le},setClear:function(le){Oe!==le&&(i.clearStencil(le),Oe=le)},reset:function(){N=!1,ct=null,X=null,Q=null,ft=null,ut=null,zt=null,ve=null,Oe=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,p=[],y=null,_=!1,g=null,m=null,w=null,E=null,M=null,O=null,C=null,R=new mt(0,0,0),L=0,S=!1,b=null,I=null,G=null,z=null,Y=null,tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,it=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=it>=1):W.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=it>=2);let at=null,pt={},Rt=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),se=new ce().fromArray(Rt),$=new ce().fromArray(Pt);function st(N,ct,X,Q){let ft=new Uint8Array(4),ut=i.createTexture();i.bindTexture(N,ut),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<X;zt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(ct+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ut}let Mt={};Mt[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(ps),$t(!1),Kt(rh),lt(i.CULL_FACE),D(dn);function lt(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function It(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function B(N,ct){return d[N]!==ct?(i.bindFramebuffer(N,ct),d[N]=ct,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ct),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function K(N,ct){let X=p,Q=!1;if(N){X=f.get(ct),X===void 0&&(X=[],f.set(ct,X));let ft=N.textures;if(X.length!==ft.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,zt=ft.length;ut<zt;ut++)X[ut]=i.COLOR_ATTACHMENT0+ut;X.length=ft.length,Q=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Q=!0);Q&&i.drawBuffers(X)}function yt(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let bt={[Ii]:i.FUNC_ADD,[Dd]:i.FUNC_SUBTRACT,[Nd]:i.FUNC_REVERSE_SUBTRACT};bt[Ud]=i.MIN,bt[Fd]=i.MAX;let Ot={[Od]:i.ZERO,[kd]:i.ONE,[Bd]:i.SRC_COLOR,[Ga]:i.SRC_ALPHA,[Xd]:i.SRC_ALPHA_SATURATE,[Gd]:i.DST_COLOR,[Hd]:i.DST_ALPHA,[zd]:i.ONE_MINUS_SRC_COLOR,[Wa]:i.ONE_MINUS_SRC_ALPHA,[Wd]:i.ONE_MINUS_DST_COLOR,[Vd]:i.ONE_MINUS_DST_ALPHA,[Yd]:i.CONSTANT_COLOR,[qd]:i.ONE_MINUS_CONSTANT_COLOR,[Zd]:i.CONSTANT_ALPHA,[$d]:i.ONE_MINUS_CONSTANT_ALPHA};function D(N,ct,X,Q,ft,ut,zt,ve,Oe,le){if(N===dn){_===!0&&(It(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),N!==Ld){if(N!==g||le!==S){if((m!==Ii||M!==Ii)&&(i.blendEquation(i.FUNC_ADD),m=Ii,M=Ii),le)switch(N){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oh:i.blendFunc(i.ONE,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case oh:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case lh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,E=null,O=null,C=null,R.set(0,0,0),L=0,g=N,S=le}return}ft=ft||ct,ut=ut||X,zt=zt||Q,(ct!==m||ft!==M)&&(i.blendEquationSeparate(bt[ct],bt[ft]),m=ct,M=ft),(X!==w||Q!==E||ut!==O||zt!==C)&&(i.blendFuncSeparate(Ot[X],Ot[Q],Ot[ut],Ot[zt]),w=X,E=Q,O=ut,C=zt),(ve.equals(R)===!1||Oe!==L)&&(i.blendColor(ve.r,ve.g,ve.b,Oe),R.copy(ve),L=Oe),g=N,S=!1}function We(N,ct){N.side===Wn?It(i.CULL_FACE):lt(i.CULL_FACE);let X=N.side===Je;ct&&(X=!X),$t(X),N.blending===hs&&N.transparent===!1?D(dn):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),de(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(N){b!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),b=N)}function Kt(N){N!==Pd?(lt(i.CULL_FACE),N!==I&&(N===rh?i.cullFace(i.BACK):N===Id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),I=N}function Nt(N){N!==G&&(q&&i.lineWidth(N),G=N)}function de(N,ct,X){N?(lt(i.POLYGON_OFFSET_FILL),(z!==ct||Y!==X)&&(i.polygonOffset(ct,X),z=ct,Y=X)):It(i.POLYGON_OFFSET_FILL)}function Lt(N){N?lt(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function T(N){N===void 0&&(N=i.TEXTURE0+tt-1),at!==N&&(i.activeTexture(N),at=N)}function x(N,ct,X){X===void 0&&(at===null?X=i.TEXTURE0+tt-1:X=at);let Q=pt[X];Q===void 0&&(Q={type:void 0,texture:void 0},pt[X]=Q),(Q.type!==N||Q.texture!==ct)&&(at!==X&&(i.activeTexture(X),at=X),i.bindTexture(N,ct||Mt[N]),Q.type=N,Q.texture=ct)}function k(){let N=pt[at];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ft(N){se.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),se.copy(N))}function xt(N){$.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),$.copy(N))}function Jt(N,ct){let X=c.get(ct);X===void 0&&(X=new WeakMap,c.set(ct,X));let Q=X.get(N);Q===void 0&&(Q=i.getUniformBlockIndex(ct,N.name),X.set(N,Q))}function Wt(N,ct){let Q=c.get(ct).get(N);l.get(ct)!==Q&&(i.uniformBlockBinding(ct,Q,N.__bindingPointIndex),l.set(ct,Q))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},at=null,pt={},d={},f=new WeakMap,p=[],y=null,_=!1,g=null,m=null,w=null,E=null,M=null,O=null,C=null,R=new mt(0,0,0),L=0,S=!1,b=null,I=null,G=null,z=null,Y=null,se.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:It,bindFramebuffer:B,drawBuffers:K,useProgram:yt,setBlending:D,setMaterial:We,setFlipSided:$t,setCullFace:Kt,setLineWidth:Nt,setPolygonOffset:de,setScissorTest:Lt,activeTexture:T,bindTexture:x,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:et,texImage2D:_t,texImage3D:Ut,updateUBOMapping:Jt,uniformBlockBinding:Wt,texStorage2D:Qt,texStorage3D:nt,texSubImage2D:J,texSubImage3D:At,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Ft,viewport:xt,reset:he}}function ru(i,t,e,n){let s=py(n);switch(e){case vu:return i*t;case bu:return i*t;case Su:return i*t*2;case wu:return i*t/s.components*s.byteLength;case Mc:return i*t/s.components*s.byteLength;case Eu:return i*t*2/s.components*s.byteLength;case bc:return i*t*2/s.components*s.byteLength;case Mu:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Sc:return i*t*4/s.components*s.byteLength;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:case sl:return Math.max(i,16)*Math.max(t,8)/4;case el:case il:return Math.max(i,8)*Math.max(t,8)/2;case rl:case ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case al:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case hl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case dl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case pl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ml:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case yl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gr:case bl:case Sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Tu:case wl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case El:case Tl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function py(i){switch(i){case Zn:case yu:return{byteLength:1,components:1};case Ks:case _u:case In:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case Oi:case _c:case Xn:return{byteLength:4,components:1};case xu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function my(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,x){return p?new OffscreenCanvas(T,x):Yr("canvas")}function _(T,x,k){let j=1,et=Lt(T);if((et.width>k||et.height>k)&&(j=k/Math.max(et.width,et.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let J=Math.floor(j*et.width),At=Math.floor(j*et.height);d===void 0&&(d=y(J,At));let ht=x?y(J,At):d;return ht.width=J,ht.height=At,ht.getContext("2d").drawImage(T,0,0,J,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+At+")."),ht}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),T;return T}function g(T){return T.generateMipmaps}function m(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,x,k,j,et=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=x;if(x===i.RED&&(k===i.FLOAT&&(J=i.R32F),k===i.HALF_FLOAT&&(J=i.R16F),k===i.UNSIGNED_BYTE&&(J=i.R8)),x===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.R8UI),k===i.UNSIGNED_SHORT&&(J=i.R16UI),k===i.UNSIGNED_INT&&(J=i.R32UI),k===i.BYTE&&(J=i.R8I),k===i.SHORT&&(J=i.R16I),k===i.INT&&(J=i.R32I)),x===i.RG&&(k===i.FLOAT&&(J=i.RG32F),k===i.HALF_FLOAT&&(J=i.RG16F),k===i.UNSIGNED_BYTE&&(J=i.RG8)),x===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RG8UI),k===i.UNSIGNED_SHORT&&(J=i.RG16UI),k===i.UNSIGNED_INT&&(J=i.RG32UI),k===i.BYTE&&(J=i.RG8I),k===i.SHORT&&(J=i.RG16I),k===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGB8UI),k===i.UNSIGNED_SHORT&&(J=i.RGB16UI),k===i.UNSIGNED_INT&&(J=i.RGB32UI),k===i.BYTE&&(J=i.RGB8I),k===i.SHORT&&(J=i.RGB16I),k===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),k===i.UNSIGNED_INT&&(J=i.RGBA32UI),k===i.BYTE&&(J=i.RGBA8I),k===i.SHORT&&(J=i.RGBA16I),k===i.INT&&(J=i.RGBA32I)),x===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),x===i.RGBA){let At=et?vo:Zt.getTransfer(j);k===i.FLOAT&&(J=i.RGBA32F),k===i.HALF_FLOAT&&(J=i.RGBA16F),k===i.UNSIGNED_BYTE&&(J=At===ae?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(T,x){let k;return T?x===null||x===Oi||x===ys?k=i.DEPTH24_STENCIL8:x===Xn?k=i.DEPTH32F_STENCIL8:x===Ks&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Oi||x===ys?k=i.DEPTH_COMPONENT24:x===Xn?k=i.DEPTH_COMPONENT32F:x===Ks&&(k=i.DEPTH_COMPONENT16),k}function O(T,x){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==ze&&T.minFilter!==Cn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function C(T){let x=T.target;x.removeEventListener("dispose",C),L(x),x.isVideoTexture&&u.delete(x)}function R(T){let x=T.target;x.removeEventListener("dispose",R),b(x)}function L(T){let x=n.get(T);if(x.__webglInit===void 0)return;let k=T.source,j=f.get(k);if(j){let et=j[x.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(T),Object.keys(j).length===0&&f.delete(k)}n.remove(T)}function S(T){let x=n.get(T);i.deleteTexture(x.__webglTexture);let k=T.source,j=f.get(k);delete j[x.__cacheKey],o.memory.textures--}function b(T){let x=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(x.__webglFramebuffer[j]))for(let et=0;et<x.__webglFramebuffer[j].length;et++)i.deleteFramebuffer(x.__webglFramebuffer[j][et]);else i.deleteFramebuffer(x.__webglFramebuffer[j]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[j])}else{if(Array.isArray(x.__webglFramebuffer))for(let j=0;j<x.__webglFramebuffer.length;j++)i.deleteFramebuffer(x.__webglFramebuffer[j]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let j=0;j<x.__webglColorRenderbuffer.length;j++)x.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[j]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let k=T.textures;for(let j=0,et=k.length;j<et;j++){let J=n.get(k[j]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(k[j])}n.remove(T)}let I=0;function G(){I=0}function z(){let T=I;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),I+=1,T}function Y(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function tt(T,x){let k=n.get(T);if(T.isVideoTexture&&Nt(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){let j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,T,x);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+x)}function q(T,x){let k=n.get(T);if(T.version>0&&k.__version!==T.version){$(k,T,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+x)}function it(T,x){let k=n.get(T);if(T.version>0&&k.__version!==T.version){$(k,T,x);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+x)}function W(T,x){let k=n.get(T);if(T.version>0&&k.__version!==T.version){st(k,T,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+x)}let at={[Fi]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[tl]:i.MIRRORED_REPEAT},pt={[ze]:i.NEAREST,[Qd]:i.NEAREST_MIPMAP_NEAREST,[pr]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[ha]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},Rt={[sf]:i.NEVER,[hf]:i.ALWAYS,[rf]:i.LESS,[Cu]:i.LEQUAL,[of]:i.EQUAL,[cf]:i.GEQUAL,[af]:i.GREATER,[lf]:i.NOTEQUAL};function Pt(T,x){if(x.type===Xn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Cn||x.magFilter===ha||x.magFilter===pr||x.magFilter===Ui||x.minFilter===Cn||x.minFilter===ha||x.minFilter===pr||x.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,at[x.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,at[x.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,at[x.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,pt[x.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,pt[x.minFilter]),x.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Rt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ze||x.minFilter!==pr&&x.minFilter!==Ui||x.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function se(T,x){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",C));let j=x.source,et=f.get(j);et===void 0&&(et={},f.set(j,et));let J=Y(x);if(J!==T.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),et[J].usedTimes++;let At=et[T.__cacheKey];At!==void 0&&(et[T.__cacheKey].usedTimes--,At.usedTimes===0&&S(x)),T.__cacheKey=J,T.__webglTexture=et[J].texture}return k}function $(T,x,k){let j=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=i.TEXTURE_3D);let et=se(T,x),J=x.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+k);let At=n.get(J);if(J.version!==At.__version||et===!0){e.activeTexture(i.TEXTURE0+k);let ht=Zt.getPrimaries(Zt.workingColorSpace),gt=x.colorSpace===ai?null:Zt.getPrimaries(x.colorSpace),Qt=x.colorSpace===ai||ht===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let nt=_(x.image,!1,s.maxTextureSize);nt=de(x,nt);let _t=r.convert(x.format,x.colorSpace),Ut=r.convert(x.type),Ft=E(x.internalFormat,_t,Ut,x.colorSpace,x.isVideoTexture);Pt(j,x);let xt,Jt=x.mipmaps,Wt=x.isVideoTexture!==!0,he=At.__version===void 0||et===!0,N=J.dataReady,ct=O(x,nt);if(x.isDepthTexture)Ft=M(x.format===_s,x.type),he&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Ft,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Ft,nt.width,nt.height,0,_t,Ut,null));else if(x.isDataTexture)if(Jt.length>0){Wt&&he&&e.texStorage2D(i.TEXTURE_2D,ct,Ft,Jt[0].width,Jt[0].height);for(let X=0,Q=Jt.length;X<Q;X++)xt=Jt[X],Wt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt.width,xt.height,_t,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,X,Ft,xt.width,xt.height,0,_t,Ut,xt.data);x.generateMipmaps=!1}else Wt?(he&&e.texStorage2D(i.TEXTURE_2D,ct,Ft,nt.width,nt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,_t,Ut,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,nt.width,nt.height,0,_t,Ut,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Wt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Ft,Jt[0].width,Jt[0].height,nt.depth);for(let X=0,Q=Jt.length;X<Q;X++)if(xt=Jt[X],x.format!==vn)if(_t!==null)if(Wt){if(N)if(x.layerUpdates.size>0){let ft=ru(xt.width,xt.height,x.format,x.type);for(let ut of x.layerUpdates){let zt=xt.data.subarray(ut*ft/xt.data.BYTES_PER_ELEMENT,(ut+1)*ft/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ut,xt.width,xt.height,1,_t,zt)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,xt.width,xt.height,nt.depth,_t,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Ft,xt.width,xt.height,nt.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,xt.width,xt.height,nt.depth,_t,Ut,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Ft,xt.width,xt.height,nt.depth,0,_t,Ut,xt.data)}else{Wt&&he&&e.texStorage2D(i.TEXTURE_2D,ct,Ft,Jt[0].width,Jt[0].height);for(let X=0,Q=Jt.length;X<Q;X++)xt=Jt[X],x.format!==vn?_t!==null?Wt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Ft,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,xt.width,xt.height,_t,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,X,Ft,xt.width,xt.height,0,_t,Ut,xt.data)}else if(x.isDataArrayTexture)if(Wt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Ft,nt.width,nt.height,nt.depth),N)if(x.layerUpdates.size>0){let X=ru(nt.width,nt.height,x.format,x.type);for(let Q of x.layerUpdates){let ft=nt.data.subarray(Q*X/nt.data.BYTES_PER_ELEMENT,(Q+1)*X/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,nt.width,nt.height,1,_t,Ut,ft)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,_t,Ut,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,nt.width,nt.height,nt.depth,0,_t,Ut,nt.data);else if(x.isData3DTexture)Wt?(he&&e.texStorage3D(i.TEXTURE_3D,ct,Ft,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,_t,Ut,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,nt.width,nt.height,nt.depth,0,_t,Ut,nt.data);else if(x.isFramebufferTexture){if(he)if(Wt)e.texStorage2D(i.TEXTURE_2D,ct,Ft,nt.width,nt.height);else{let X=nt.width,Q=nt.height;for(let ft=0;ft<ct;ft++)e.texImage2D(i.TEXTURE_2D,ft,Ft,X,Q,0,_t,Ut,null),X>>=1,Q>>=1}}else if(Jt.length>0){if(Wt&&he){let X=Lt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Ft,X.width,X.height)}for(let X=0,Q=Jt.length;X<Q;X++)xt=Jt[X],Wt?N&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,_t,Ut,xt):e.texImage2D(i.TEXTURE_2D,X,Ft,_t,Ut,xt);x.generateMipmaps=!1}else if(Wt){if(he){let X=Lt(nt);e.texStorage2D(i.TEXTURE_2D,ct,Ft,X.width,X.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Ut,nt)}else e.texImage2D(i.TEXTURE_2D,0,Ft,_t,Ut,nt);g(x)&&m(j),At.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function st(T,x,k){if(x.image.length!==6)return;let j=se(T,x),et=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+k);let J=n.get(et);if(et.version!==J.__version||j===!0){e.activeTexture(i.TEXTURE0+k);let At=Zt.getPrimaries(Zt.workingColorSpace),ht=x.colorSpace===ai?null:Zt.getPrimaries(x.colorSpace),gt=x.colorSpace===ai||At===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Qt=x.isCompressedTexture||x.image[0].isCompressedTexture,nt=x.image[0]&&x.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!Qt&&!nt?_t[Q]=_(x.image[Q],!0,s.maxCubemapSize):_t[Q]=nt?x.image[Q].image:x.image[Q],_t[Q]=de(x,_t[Q]);let Ut=_t[0],Ft=r.convert(x.format,x.colorSpace),xt=r.convert(x.type),Jt=E(x.internalFormat,Ft,xt,x.colorSpace),Wt=x.isVideoTexture!==!0,he=J.__version===void 0||j===!0,N=et.dataReady,ct=O(x,Ut);Pt(i.TEXTURE_CUBE_MAP,x);let X;if(Qt){Wt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Jt,Ut.width,Ut.height);for(let Q=0;Q<6;Q++){X=_t[Q].mipmaps;for(let ft=0;ft<X.length;ft++){let ut=X[ft];x.format!==vn?Ft!==null?Wt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,ut.width,ut.height,Ft,ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Jt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,0,0,ut.width,ut.height,Ft,xt,ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft,Jt,ut.width,ut.height,0,Ft,xt,ut.data)}}}else{if(X=x.mipmaps,Wt&&he){X.length>0&&ct++;let Q=Lt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(nt){Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,Ft,xt,_t[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,_t[Q].width,_t[Q].height,0,Ft,xt,_t[Q].data);for(let ft=0;ft<X.length;ft++){let zt=X[ft].image[Q].image;Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,zt.width,zt.height,Ft,xt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Jt,zt.width,zt.height,0,Ft,xt,zt.data)}}else{Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ft,xt,_t[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,Ft,xt,_t[Q]);for(let ft=0;ft<X.length;ft++){let ut=X[ft];Wt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,0,0,Ft,xt,ut.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ft+1,Jt,Ft,xt,ut.image[Q])}}}g(x)&&m(i.TEXTURE_CUBE_MAP),J.__version=et.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Mt(T,x,k,j,et,J){let At=r.convert(k.format,k.colorSpace),ht=r.convert(k.type),gt=E(k.internalFormat,At,ht,k.colorSpace),Qt=n.get(x),nt=n.get(k);if(nt.__renderTarget=x,!Qt.__hasExternalTextures){let _t=Math.max(1,x.width>>J),Ut=Math.max(1,x.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,gt,_t,Ut,x.depth,0,At,ht,null):e.texImage2D(et,J,gt,_t,Ut,0,At,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),Kt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,et,nt.__webglTexture,0,$t(x)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,et,nt.__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(T,x,k){if(i.bindRenderbuffer(i.RENDERBUFFER,T),x.depthBuffer){let j=x.depthTexture,et=j&&j.isDepthTexture?j.type:null,J=M(x.stencilBuffer,et),At=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=$t(x);Kt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,J,x.width,x.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,J,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,J,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,T)}else{let j=x.textures;for(let et=0;et<j.length;et++){let J=j[et],At=r.convert(J.format,J.colorSpace),ht=r.convert(J.type),gt=E(J.internalFormat,At,ht,J.colorSpace),Qt=$t(x);k&&Kt(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,gt,x.width,x.height):Kt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,gt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,gt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(x.depthTexture);j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),tt(x.depthTexture,0);let et=j.__webglTexture,J=$t(x);if(x.depthTexture.format===us)Kt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(x.depthTexture.format===_s)Kt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function B(T){let x=n.get(T),k=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let j=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),j){let et=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,j.removeEventListener("dispose",et)};j.addEventListener("dispose",et),x.__depthDisposeCallback=et}x.__boundDepthTexture=j}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");It(x.__webglFramebuffer,T)}else if(k){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]===void 0)x.__webglDepthbuffer[j]=i.createRenderbuffer(),lt(x.__webglDepthbuffer[j],T,!1);else{let et=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),lt(x.__webglDepthbuffer,T,!1);else{let j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function K(T,x,k){let j=n.get(T);x!==void 0&&Mt(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&B(T)}function yt(T){let x=T.texture,k=n.get(T),j=n.get(x);T.addEventListener("dispose",R);let et=T.textures,J=T.isWebGLCubeRenderTarget===!0,At=et.length>1;if(At||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=x.version,o.memory.textures++),J){k.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[ht]=[];for(let gt=0;gt<x.mipmaps.length;gt++)k.__webglFramebuffer[ht][gt]=i.createFramebuffer()}else k.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let ht=0;ht<x.mipmaps.length;ht++)k.__webglFramebuffer[ht]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(At)for(let ht=0,gt=et.length;ht<gt;ht++){let Qt=n.get(et[ht]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&Kt(T)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ht=0;ht<et.length;ht++){let gt=et[ht];k.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ht]);let Qt=r.convert(gt.format,gt.colorSpace),nt=r.convert(gt.type),_t=E(gt.internalFormat,Qt,nt,gt.colorSpace,T.isXRRenderTarget===!0),Ut=$t(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,_t,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,k.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,x);for(let ht=0;ht<6;ht++)if(x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)Mt(k.__webglFramebuffer[ht][gt],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else Mt(k.__webglFramebuffer[ht],T,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);g(x)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ht=0,gt=et.length;ht<gt;ht++){let Qt=et[ht],nt=n.get(Qt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Pt(i.TEXTURE_2D,Qt),Mt(k.__webglFramebuffer,T,Qt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),g(Qt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ht=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),Pt(ht,x),x.mipmaps&&x.mipmaps.length>0)for(let gt=0;gt<x.mipmaps.length;gt++)Mt(k.__webglFramebuffer[gt],T,x,i.COLOR_ATTACHMENT0,ht,gt);else Mt(k.__webglFramebuffer,T,x,i.COLOR_ATTACHMENT0,ht,0);g(x)&&m(ht),e.unbindTexture()}T.depthBuffer&&B(T)}function bt(T){let x=T.textures;for(let k=0,j=x.length;k<j;k++){let et=x[k];if(g(et)){let J=w(T),At=n.get(et).__webglTexture;e.bindTexture(J,At),m(J),e.unbindTexture()}}}let Ot=[],D=[];function We(T){if(T.samples>0){if(Kt(T)===!1){let x=T.textures,k=T.width,j=T.height,et=i.COLOR_BUFFER_BIT,J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(T),ht=x.length>1;if(ht)for(let gt=0;gt<x.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let gt=0;gt<x.length;gt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[gt]);let Qt=n.get(x[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,k,j,0,0,k,j,et,i.NEAREST),l===!0&&(Ot.length=0,D.length=0,Ot.push(i.COLOR_ATTACHMENT0+gt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Ot.push(J),D.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<x.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,At.__webglColorRenderbuffer[gt]);let Qt=n.get(x[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function $t(T){return Math.min(s.maxSamples,T.samples)}function Kt(T){let x=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Nt(T){let x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function de(T,x){let k=T.colorSpace,j=T.format,et=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==As&&k!==ai&&(Zt.getTransfer(k)===ae?(j!==vn||et!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function Lt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=G,this.setTexture2D=tt,this.setTexture2DArray=q,this.setTexture3D=it,this.setTextureCube=W,this.rebindTextures=K,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=B,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Kt}function gy(i,t){function e(n,s=ai){let r,o=Zt.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yu)return i.BYTE;if(n===_u)return i.SHORT;if(n===Ks)return i.UNSIGNED_SHORT;if(n===_c)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===In)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===Mu)return i.RGB;if(n===vn)return i.RGBA;if(n===bu)return i.LUMINANCE;if(n===Su)return i.LUMINANCE_ALPHA;if(n===us)return i.DEPTH_COMPONENT;if(n===_s)return i.DEPTH_STENCIL;if(n===wu)return i.RED;if(n===Mc)return i.RED_INTEGER;if(n===Eu)return i.RG;if(n===bc)return i.RG_INTEGER;if(n===Sc)return i.RGBA_INTEGER;if(n===Br||n===zr||n===Hr||n===Vr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===nl||n===il||n===sl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rl||n===ol||n===al)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===rl||n===ol)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===al)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===yl||n===_l||n===xl||n===vl||n===Ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ll)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ul)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ml)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===gl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_l)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ml)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gr||n===bl||n===Sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Gr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tu||n===wl||n===El||n===Tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ys?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Hl=class extends xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},qe=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},yy={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,y=.005;c.inputState.pinching&&f>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},_y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xy=`
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

}`,Vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new on,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Fe({vertexShader:_y,fragmentShader:xy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new bs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gl=class extends hi{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,y=null,_=new Vl,g=e.getContextAttributes(),m=null,w=null,E=[],M=[],O=new vt,C=null,R=new xe;R.viewport=new ce;let L=new xe;L.viewport=new ce;let S=[R,L],b=new Hl,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let st=E[$];return st===void 0&&(st=new qs,E[$]=st),st.getTargetRaySpace()},this.getControllerGrip=function($){let st=E[$];return st===void 0&&(st=new qs,E[$]=st),st.getGripSpace()},this.getHand=function($){let st=E[$];return st===void 0&&(st=new qs,E[$]=st),st.getHandSpace()};function z($){let st=M.indexOf($.inputSource);if(st===-1)return;let Mt=E[st];Mt!==void 0&&(Mt.update($.inputSource,$.frame,c||o),Mt.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",tt);for(let $=0;$<E.length;$++){let st=M[$];st!==null&&(M[$]=null,E[$].disconnect(st))}I=null,G=null,_.reset(),t.setRenderTarget(m),p=null,f=null,d=null,s=null,w=null,se.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",tt),g.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(O),s.renderState.layers===void 0){let st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Te(p.framebufferWidth,p.framebufferHeight,{format:vn,type:Zn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,Mt=null,lt=null;g.depth&&(lt=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?_s:us,Mt=g.stencil?ys:Oi);let It={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),w=new Te(f.textureWidth,f.textureHeight,{format:vn,type:Zn,depthTexture:new no(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),se.setContext(s),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function tt($){for(let st=0;st<$.removed.length;st++){let Mt=$.removed[st],lt=M.indexOf(Mt);lt>=0&&(M[lt]=null,E[lt].disconnect(Mt))}for(let st=0;st<$.added.length;st++){let Mt=$.added[st],lt=M.indexOf(Mt);if(lt===-1){for(let B=0;B<E.length;B++)if(B>=M.length){M.push(Mt),lt=B;break}else if(M[B]===null){M[B]=Mt,lt=B;break}if(lt===-1)break}let It=E[lt];It&&It.connect(Mt)}}let q=new A,it=new A;function W($,st,Mt){q.setFromMatrixPosition(st.matrixWorld),it.setFromMatrixPosition(Mt.matrixWorld);let lt=q.distanceTo(it),It=st.projectionMatrix.elements,B=Mt.projectionMatrix.elements,K=It[14]/(It[10]-1),yt=It[14]/(It[10]+1),bt=(It[9]+1)/It[5],Ot=(It[9]-1)/It[5],D=(It[8]-1)/It[0],We=(B[8]+1)/B[0],$t=K*D,Kt=K*We,Nt=lt/(-D+We),de=Nt*-D;if(st.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(de),$.translateZ(Nt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),It[10]===-1)$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let Lt=K+Nt,T=yt+Nt,x=$t-de,k=Kt+(lt-de),j=bt*yt/T*Lt,et=Ot*yt/T*Lt;$.projectionMatrix.makePerspective(x,k,j,et,Lt,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function at($,st){st===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(st.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let st=$.near,Mt=$.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),b.near=L.near=R.near=st,b.far=L.far=R.far=Mt,(I!==b.near||G!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,G=b.far),R.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,b.layers.mask=R.layers.mask|L.layers.mask;let lt=$.parent,It=b.cameras;at(b,lt);for(let B=0;B<It.length;B++)at(It[B],lt);It.length===2?W(b,R,L):b.projectionMatrix.copy(R.projectionMatrix),pt($,b,lt)};function pt($,st,Mt){Mt===null?$.matrix.copy(st.matrixWorld):($.matrix.copy(Mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(st.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(st.projectionMatrix),$.projectionMatrixInverse.copy(st.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=xs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(b)};let Rt=null;function Pt($,st){if(u=st.getViewerPose(c||o),y=st,u!==null){let Mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let lt=!1;Mt.length!==b.cameras.length&&(b.cameras.length=0,lt=!0);for(let B=0;B<Mt.length;B++){let K=Mt[B],yt=null;if(p!==null)yt=p.getViewport(K);else{let Ot=d.getViewSubImage(f,K);yt=Ot.viewport,B===0&&(t.setRenderTargetTextures(w,Ot.colorTexture,f.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(w))}let bt=S[B];bt===void 0&&(bt=new xe,bt.layers.enable(B),bt.viewport=new ce,S[B]=bt),bt.matrix.fromArray(K.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(K.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(yt.x,yt.y,yt.width,yt.height),B===0&&(b.matrix.copy(bt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),lt===!0&&b.cameras.push(bt)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){let B=d.getDepthInformation(Mt[0]);B&&B.isValid&&B.texture&&_.init(t,B,s.renderState)}}for(let Mt=0;Mt<E.length;Mt++){let lt=M[Mt],It=E[Mt];lt!==null&&It!==void 0&&It.update(lt,st,c||o)}Rt&&Rt($,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),y=null}let se=new Lu;se.setAnimationLoop(Pt),this.setAnimationLoop=function($){Rt=$},this.dispose=function(){}}},Ri=new Pn,vy=new ye;function My(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Iu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,w,E,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&p(g,m,M)):m.isMeshMatcapMaterial?(r(g,m),y(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,w,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Je&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Je&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let w=t.get(m),E=w.envMap,M=w.envMapRotation;E&&(g.envMap.value=E,Ri.copy(M),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),g.envMapRotation.value.setFromMatrix4(vy.makeRotationFromEuler(Ri)),g.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,w,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=E*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Je&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let w=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function by(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){let M=E.program;n.uniformBlockBinding(w,M)}function c(w,E){let M=s[w.id];M===void 0&&(y(w),M=u(w),s[w.id]=M,w.addEventListener("dispose",g));let O=E.program;n.updateUBOMapping(w,O);let C=t.render.frame;r[w.id]!==C&&(f(w),r[w.id]=C)}function u(w){let E=d();w.__bindingPointIndex=E;let M=i.createBuffer(),O=w.__size,C=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,O,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let E=s[w.id],M=w.uniforms,O=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,R=M.length;C<R;C++){let L=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,b=L.length;S<b;S++){let I=L[S];if(p(I,C,S,O)===!0){let G=I.__offset,z=Array.isArray(I.value)?I.value:[I.value],Y=0;for(let tt=0;tt<z.length;tt++){let q=z[tt],it=_(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,G+Y,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,Y),Y+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,E,M,O){let C=w.value,R=E+"_"+M;if(O[R]===void 0)return typeof C=="number"||typeof C=="boolean"?O[R]=C:O[R]=C.clone(),!0;{let L=O[R];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return O[R]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function y(w){let E=w.uniforms,M=0,O=16;for(let R=0,L=E.length;R<L;R++){let S=Array.isArray(E[R])?E[R]:[E[R]];for(let b=0,I=S.length;b<I;b++){let G=S[b],z=Array.isArray(G.value)?G.value:[G.value];for(let Y=0,tt=z.length;Y<tt;Y++){let q=z[Y],it=_(q),W=M%O,at=W%it.boundary,pt=W+at;M+=at,pt!==0&&O-pt<it.storage&&(M+=O-pt),G.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=it.storage}}}let C=M%O;return C>0&&(M+=O-C),w.__size=M,w.__cache={},this}function _(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function g(w){let E=w.target;E.removeEventListener("dispose",g);let M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}var io=class{constructor(t={}){let{canvas:e=Af(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let y=new Uint32Array(4),_=new Int32Array(4),g=null,m=null,w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ge,this.toneMapping=li,this.toneMappingExposure=1;let M=this,O=!1,C=0,R=0,L=null,S=-1,b=null,I=new ce,G=new ce,z=null,Y=new mt(0),tt=0,q=e.width,it=e.height,W=1,at=null,pt=null,Rt=new ce(0,0,q,it),Pt=new ce(0,0,q,it),se=!1,$=new Js,st=!1,Mt=!1,lt=new ye,It=new ye,B=new A,K=new ce,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bt=!1;function Ot(){return L===null?W:1}let D=n;function We(v,U){return e.getContext(v,U)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${uc}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ut,!1),D===null){let U="webgl2";if(D=We(U,v),D===null)throw We(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let $t,Kt,Nt,de,Lt,T,x,k,j,et,J,At,ht,gt,Qt,nt,_t,Ut,Ft,xt,Jt,Wt,he,N;function ct(){$t=new k0(D),$t.init(),Wt=new gy(D,$t),Kt=new L0(D,$t,t,Wt),Nt=new fy(D,$t),Kt.reverseDepthBuffer&&f&&Nt.buffers.depth.setReversed(!0),de=new H0(D),Lt=new ty,T=new my(D,$t,Nt,Lt,Kt,Wt,de),x=new N0(M),k=new O0(M),j=new Zf(D),he=new P0(D,j),et=new B0(D,j,de,he),J=new G0(D,et,j,de),Ft=new V0(D,Kt,T),nt=new D0(Lt),At=new Qg(M,x,k,$t,Kt,he,nt),ht=new My(M,Lt),gt=new ny,Qt=new ly($t),Ut=new R0(M,x,k,Nt,J,p,l),_t=new uy(M,J,Kt),N=new by(D,de,Kt,Nt),xt=new I0(D,$t,de),Jt=new z0(D,$t,de),de.programs=At.programs,M.capabilities=Kt,M.extensions=$t,M.properties=Lt,M.renderLists=gt,M.shadowMap=_t,M.state=Nt,M.info=de}ct();let X=new Gl(M,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=$t.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=$t.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(v){v!==void 0&&(W=v,this.setSize(q,it,!1))},this.getSize=function(v){return v.set(q,it)},this.setSize=function(v,U,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=v,it=U,e.width=Math.floor(v*W),e.height=Math.floor(U*W),H===!0&&(e.style.width=v+"px",e.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(q*W,it*W).floor()},this.setDrawingBufferSize=function(v,U,H){q=v,it=U,W=H,e.width=Math.floor(v*H),e.height=Math.floor(U*H),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(I)},this.getViewport=function(v){return v.copy(Rt)},this.setViewport=function(v,U,H,V){v.isVector4?Rt.set(v.x,v.y,v.z,v.w):Rt.set(v,U,H,V),Nt.viewport(I.copy(Rt).multiplyScalar(W).round())},this.getScissor=function(v){return v.copy(Pt)},this.setScissor=function(v,U,H,V){v.isVector4?Pt.set(v.x,v.y,v.z,v.w):Pt.set(v,U,H,V),Nt.scissor(G.copy(Pt).multiplyScalar(W).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(v){Nt.setScissorTest(se=v)},this.setOpaqueSort=function(v){at=v},this.setTransparentSort=function(v){pt=v},this.getClearColor=function(v){return v.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(v=!0,U=!0,H=!0){let V=0;if(v){let F=!1;if(L!==null){let rt=L.texture.format;F=rt===Sc||rt===bc||rt===Mc}if(F){let rt=L.texture.type,dt=rt===Zn||rt===Oi||rt===Ks||rt===ys||rt===xc||rt===vc,wt=Ut.getClearColor(),Et=Ut.getClearAlpha(),kt=wt.r,Ht=wt.g,Tt=wt.b;dt?(y[0]=kt,y[1]=Ht,y[2]=Tt,y[3]=Et,D.clearBufferuiv(D.COLOR,0,y)):(_[0]=kt,_[1]=Ht,_[2]=Tt,_[3]=Et,D.clearBufferiv(D.COLOR,0,_))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT),H&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),gt.dispose(),Qt.dispose(),Lt.dispose(),x.dispose(),k.dispose(),J.dispose(),he.dispose(),N.dispose(),At.dispose(),X.dispose(),X.removeEventListener("sessionstart",Jc),X.removeEventListener("sessionend",jc),Si.stop()};function Q(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;let v=de.autoReset,U=_t.enabled,H=_t.autoUpdate,V=_t.needsUpdate,F=_t.type;ct(),de.autoReset=v,_t.enabled=U,_t.autoUpdate=H,_t.needsUpdate=V,_t.type=F}function ut(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function zt(v){let U=v.target;U.removeEventListener("dispose",zt),ve(U)}function ve(v){Oe(v),Lt.remove(v)}function Oe(v){let U=Lt.get(v).programs;U!==void 0&&(U.forEach(function(H){At.releaseProgram(H)}),v.isShaderMaterial&&At.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,H,V,F,rt){U===null&&(U=yt);let dt=F.isMesh&&F.matrixWorld.determinant()<0,wt=Ad(v,U,H,V,F);Nt.setMaterial(V,dt);let Et=H.index,kt=1;if(V.wireframe===!0){if(Et=et.getWireframeAttribute(H),Et===void 0)return;kt=2}let Ht=H.drawRange,Tt=H.attributes.position,te=Ht.start*kt,ue=(Ht.start+Ht.count)*kt;rt!==null&&(te=Math.max(te,rt.start*kt),ue=Math.min(ue,(rt.start+rt.count)*kt)),Et!==null?(te=Math.max(te,0),ue=Math.min(ue,Et.count)):Tt!=null&&(te=Math.max(te,0),ue=Math.min(ue,Tt.count));let fe=ue-te;if(fe<0||fe===1/0)return;he.setup(F,V,wt,H,Et);let Ke,re=xt;if(Et!==null&&(Ke=j.get(Et),re=Jt,re.setIndex(Ke)),F.isMesh)V.wireframe===!0?(Nt.setLineWidth(V.wireframeLinewidth*Ot()),re.setMode(D.LINES)):re.setMode(D.TRIANGLES);else if(F.isLine){let Ct=V.linewidth;Ct===void 0&&(Ct=1),Nt.setLineWidth(Ct*Ot()),F.isLineSegments?re.setMode(D.LINES):F.isLineLoop?re.setMode(D.LINE_LOOP):re.setMode(D.LINE_STRIP)}else F.isPoints?re.setMode(D.POINTS):F.isSprite&&re.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)re.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))re.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ct=F._multiDrawStarts,Fn=F._multiDrawCounts,oe=F._multiDrawCount,gn=Et?j.get(Et).bytesPerElement:1,qi=Lt.get(V).currentProgram.getUniforms();for(let nn=0;nn<oe;nn++)qi.setValue(D,"_gl_DrawID",nn),re.render(Ct[nn]/gn,Fn[nn])}else if(F.isInstancedMesh)re.renderInstances(te,fe,F.count);else if(H.isInstancedBufferGeometry){let Ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Fn=Math.min(H.instanceCount,Ct);re.renderInstances(te,fe,Fn)}else re.render(te,fe)};function le(v,U,H){v.transparent===!0&&v.side===Wn&&v.forceSinglePass===!1?(v.side=Je,v.needsUpdate=!0,fr(v,U,H),v.side=ci,v.needsUpdate=!0,fr(v,U,H),v.side=Wn):fr(v,U,H)}this.compile=function(v,U,H=null){H===null&&(H=v),m=Qt.get(H),m.init(U),E.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),v!==H&&v.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();let V=new Set;return v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let rt=F.material;if(rt)if(Array.isArray(rt))for(let dt=0;dt<rt.length;dt++){let wt=rt[dt];le(wt,H,F),V.add(wt)}else le(rt,H,F),V.add(rt)}),E.pop(),m=null,V},this.compileAsync=function(v,U,H=null){let V=this.compile(v,U,H);return new Promise(F=>{function rt(){if(V.forEach(function(dt){Lt.get(dt).currentProgram.isReady()&&V.delete(dt)}),V.size===0){F(v);return}setTimeout(rt,10)}$t.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let mn=null;function Un(v){mn&&mn(v)}function Jc(){Si.stop()}function jc(){Si.start()}let Si=new Lu;Si.setAnimationLoop(Un),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(v){mn=v,X.setAnimationLoop(v),v===null?Si.stop():Si.start()},X.addEventListener("sessionstart",Jc),X.addEventListener("sessionend",jc),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,U,L),m=Qt.get(v,E.length),m.init(U),E.push(m),It.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(It),Mt=this.localClippingEnabled,st=nt.init(this.clippingPlanes,Mt),g=gt.get(v,w.length),g.init(),w.push(g),X.enabled===!0&&X.isPresenting===!0){let rt=M.xr.getDepthSensingMesh();rt!==null&&ca(rt,U,-1/0,M.sortObjects)}ca(v,U,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(at,pt),bt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,bt&&Ut.addToRenderList(g,v),this.info.render.frame++,st===!0&&nt.beginShadows();let H=m.state.shadowsArray;_t.render(H,v,U),st===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=g.opaque,F=g.transmissive;if(m.setupLights(),U.isArrayCamera){let rt=U.cameras;if(F.length>0)for(let dt=0,wt=rt.length;dt<wt;dt++){let Et=rt[dt];th(V,F,v,Et)}bt&&Ut.render(v);for(let dt=0,wt=rt.length;dt<wt;dt++){let Et=rt[dt];Qc(g,v,Et,Et.viewport)}}else F.length>0&&th(V,F,v,U),bt&&Ut.render(v),Qc(g,v,U);L!==null&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(M,v,U),he.resetDefaultState(),S=-1,b=null,E.pop(),E.length>0?(m=E[E.length-1],st===!0&&nt.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function ca(v,U,H,V){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)m.pushLight(v),v.castShadow&&m.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||$.intersectsSprite(v)){V&&K.setFromMatrixPosition(v.matrixWorld).applyMatrix4(It);let dt=J.update(v),wt=v.material;wt.visible&&g.push(v,dt,wt,H,K.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||$.intersectsObject(v))){let dt=J.update(v),wt=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),K.copy(v.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),K.copy(dt.boundingSphere.center)),K.applyMatrix4(v.matrixWorld).applyMatrix4(It)),Array.isArray(wt)){let Et=dt.groups;for(let kt=0,Ht=Et.length;kt<Ht;kt++){let Tt=Et[kt],te=wt[Tt.materialIndex];te&&te.visible&&g.push(v,dt,te,H,K.z,Tt)}}else wt.visible&&g.push(v,dt,wt,H,K.z,null)}}let rt=v.children;for(let dt=0,wt=rt.length;dt<wt;dt++)ca(rt[dt],U,H,V)}function Qc(v,U,H,V){let F=v.opaque,rt=v.transmissive,dt=v.transparent;m.setupLightsView(H),st===!0&&nt.setGlobalState(M.clippingPlanes,H),V&&Nt.viewport(I.copy(V)),F.length>0&&dr(F,U,H),rt.length>0&&dr(rt,U,H),dt.length>0&&dr(dt,U,H),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function th(v,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Te(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?In:Zn,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let rt=m.state.transmissionRenderTarget[V.id],dt=V.viewport||I;rt.setSize(dt.z,dt.w);let wt=M.getRenderTarget();M.setRenderTarget(rt),M.getClearColor(Y),tt=M.getClearAlpha(),tt<1&&M.setClearColor(16777215,.5),M.clear(),bt&&Ut.render(H);let Et=M.toneMapping;M.toneMapping=li;let kt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),st===!0&&nt.setGlobalState(M.clippingPlanes,V),dr(v,H,V),T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let Tt=0,te=U.length;Tt<te;Tt++){let ue=U[Tt],fe=ue.object,Ke=ue.geometry,re=ue.material,Ct=ue.group;if(re.side===Wn&&fe.layers.test(V.layers)){let Fn=re.side;re.side=Je,re.needsUpdate=!0,eh(fe,H,V,Ke,re,Ct),re.side=Fn,re.needsUpdate=!0,Ht=!0}}Ht===!0&&(T.updateMultisampleRenderTarget(rt),T.updateRenderTargetMipmap(rt))}M.setRenderTarget(wt),M.setClearColor(Y,tt),kt!==void 0&&(V.viewport=kt),M.toneMapping=Et}function dr(v,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,rt=v.length;F<rt;F++){let dt=v[F],wt=dt.object,Et=dt.geometry,kt=V===null?dt.material:V,Ht=dt.group;wt.layers.test(H.layers)&&eh(wt,U,H,Et,kt,Ht)}}function eh(v,U,H,V,F,rt){v.onBeforeRender(M,U,H,V,F,rt),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(M,U,H,V,v,rt),F.transparent===!0&&F.side===Wn&&F.forceSinglePass===!1?(F.side=Je,F.needsUpdate=!0,M.renderBufferDirect(H,U,V,F,v,rt),F.side=ci,F.needsUpdate=!0,M.renderBufferDirect(H,U,V,F,v,rt),F.side=Wn):M.renderBufferDirect(H,U,V,F,v,rt),v.onAfterRender(M,U,H,V,F,rt)}function fr(v,U,H){U.isScene!==!0&&(U=yt);let V=Lt.get(v),F=m.state.lights,rt=m.state.shadowsArray,dt=F.state.version,wt=At.getParameters(v,F.state,rt,U,H),Et=At.getProgramCacheKey(wt),kt=V.programs;V.environment=v.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(v.isMeshStandardMaterial?k:x).get(v.envMap||V.environment),V.envMapRotation=V.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,kt===void 0&&(v.addEventListener("dispose",zt),kt=new Map,V.programs=kt);let Ht=kt.get(Et);if(Ht!==void 0){if(V.currentProgram===Ht&&V.lightsStateVersion===dt)return ih(v,wt),Ht}else wt.uniforms=At.getUniforms(v),v.onBeforeCompile(wt,M),Ht=At.acquireProgram(wt,Et),kt.set(Et,Ht),V.uniforms=wt.uniforms;let Tt=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Tt.clippingPlanes=nt.uniform),ih(v,wt),V.needsLights=Rd(v),V.lightsStateVersion=dt,V.needsLights&&(Tt.ambientLightColor.value=F.state.ambient,Tt.lightProbe.value=F.state.probe,Tt.directionalLights.value=F.state.directional,Tt.directionalLightShadows.value=F.state.directionalShadow,Tt.spotLights.value=F.state.spot,Tt.spotLightShadows.value=F.state.spotShadow,Tt.rectAreaLights.value=F.state.rectArea,Tt.ltc_1.value=F.state.rectAreaLTC1,Tt.ltc_2.value=F.state.rectAreaLTC2,Tt.pointLights.value=F.state.point,Tt.pointLightShadows.value=F.state.pointShadow,Tt.hemisphereLights.value=F.state.hemi,Tt.directionalShadowMap.value=F.state.directionalShadowMap,Tt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Tt.spotShadowMap.value=F.state.spotShadowMap,Tt.spotLightMatrix.value=F.state.spotLightMatrix,Tt.spotLightMap.value=F.state.spotLightMap,Tt.pointShadowMap.value=F.state.pointShadowMap,Tt.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ht,V.uniformsList=null,Ht}function nh(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=fs.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function ih(v,U){let H=Lt.get(v);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function Ad(v,U,H,V,F){U.isScene!==!0&&(U=yt),T.resetTextureUnits();let rt=U.fog,dt=V.isMeshStandardMaterial?U.environment:null,wt=L===null?M.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:As,Et=(V.isMeshStandardMaterial?k:x).get(V.envMap||dt),kt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ht=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Tt=!!H.morphAttributes.position,te=!!H.morphAttributes.normal,ue=!!H.morphAttributes.color,fe=li;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(fe=M.toneMapping);let Ke=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,re=Ke!==void 0?Ke.length:0,Ct=Lt.get(V),Fn=m.state.lights;if(st===!0&&(Mt===!0||v!==b)){let hn=v===b&&V.id===S;nt.setState(V,v,hn)}let oe=!1;V.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Fn.state.version||Ct.outputColorSpace!==wt||F.isBatchedMesh&&Ct.batching===!1||!F.isBatchedMesh&&Ct.batching===!0||F.isBatchedMesh&&Ct.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ct.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ct.instancing===!1||!F.isInstancedMesh&&Ct.instancing===!0||F.isSkinnedMesh&&Ct.skinning===!1||!F.isSkinnedMesh&&Ct.skinning===!0||F.isInstancedMesh&&Ct.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ct.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ct.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ct.instancingMorph===!1&&F.morphTexture!==null||Ct.envMap!==Et||V.fog===!0&&Ct.fog!==rt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==nt.numPlanes||Ct.numIntersection!==nt.numIntersection)||Ct.vertexAlphas!==kt||Ct.vertexTangents!==Ht||Ct.morphTargets!==Tt||Ct.morphNormals!==te||Ct.morphColors!==ue||Ct.toneMapping!==fe||Ct.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Ct.__version=V.version);let gn=Ct.currentProgram;oe===!0&&(gn=fr(V,U,F));let qi=!1,nn=!1,Fs=!1,pe=gn.getUniforms(),Tn=Ct.uniforms;if(Nt.useProgram(gn.program)&&(qi=!0,nn=!0,Fs=!0),V.id!==S&&(S=V.id,nn=!0),qi||b!==v){Nt.buffers.depth.getReversed()?(lt.copy(v.projectionMatrix),Rf(lt),Pf(lt),pe.setValue(D,"projectionMatrix",lt)):pe.setValue(D,"projectionMatrix",v.projectionMatrix),pe.setValue(D,"viewMatrix",v.matrixWorldInverse);let Qn=pe.map.cameraPosition;Qn!==void 0&&Qn.setValue(D,B.setFromMatrixPosition(v.matrixWorld)),Kt.logarithmicDepthBuffer&&pe.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&pe.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),b!==v&&(b=v,nn=!0,Fs=!0)}if(F.isSkinnedMesh){pe.setOptional(D,F,"bindMatrix"),pe.setOptional(D,F,"bindMatrixInverse");let hn=F.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),pe.setValue(D,"boneTexture",hn.boneTexture,T))}F.isBatchedMesh&&(pe.setOptional(D,F,"batchingTexture"),pe.setValue(D,"batchingTexture",F._matricesTexture,T),pe.setOptional(D,F,"batchingIdTexture"),pe.setValue(D,"batchingIdTexture",F._indirectTexture,T),pe.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&pe.setValue(D,"batchingColorTexture",F._colorsTexture,T));let Os=H.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0)&&Ft.update(F,H,gn),(nn||Ct.receiveShadow!==F.receiveShadow)&&(Ct.receiveShadow=F.receiveShadow,pe.setValue(D,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Tn.envMap.value=Et,Tn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Tn.envMapIntensity.value=U.environmentIntensity),nn&&(pe.setValue(D,"toneMappingExposure",M.toneMappingExposure),Ct.needsLights&&Cd(Tn,Fs),rt&&V.fog===!0&&ht.refreshFogUniforms(Tn,rt),ht.refreshMaterialUniforms(Tn,V,W,it,m.state.transmissionRenderTarget[v.id]),fs.upload(D,nh(Ct),Tn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fs.upload(D,nh(Ct),Tn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&pe.setValue(D,"center",F.center),pe.setValue(D,"modelViewMatrix",F.modelViewMatrix),pe.setValue(D,"normalMatrix",F.normalMatrix),pe.setValue(D,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let hn=V.uniformsGroups;for(let Qn=0,ti=hn.length;Qn<ti;Qn++){let sh=hn[Qn];N.update(sh,gn),N.bind(sh,gn)}}return gn}function Cd(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Rd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,U,H){Lt.get(v.texture).__webglTexture=U,Lt.get(v.depthTexture).__webglTexture=H;let V=Lt.get(v);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,U){let H=Lt.get(v);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,H=0){L=v,C=U,R=H;let V=!0,F=null,rt=!1,dt=!1;if(v){let Et=Lt.get(v);if(Et.__useDefaultFramebuffer!==void 0)Nt.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(Et.__webglFramebuffer===void 0)T.setupRenderTarget(v);else if(Et.__hasExternalTextures)T.rebindTextures(v,Lt.get(v.texture).__webglTexture,Lt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Tt=v.depthTexture;if(Et.__boundDepthTexture!==Tt){if(Tt!==null&&Lt.has(Tt)&&(v.width!==Tt.image.width||v.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(v)}}let kt=v.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(dt=!0);let Ht=Lt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ht[U])?F=Ht[U][H]:F=Ht[U],rt=!0):v.samples>0&&T.useMultisampledRTT(v)===!1?F=Lt.get(v).__webglMultisampledFramebuffer:Array.isArray(Ht)?F=Ht[H]:F=Ht,I.copy(v.viewport),G.copy(v.scissor),z=v.scissorTest}else I.copy(Rt).multiplyScalar(W).floor(),G.copy(Pt).multiplyScalar(W).floor(),z=se;if(Nt.bindFramebuffer(D.FRAMEBUFFER,F)&&V&&Nt.drawBuffers(v,F),Nt.viewport(I),Nt.scissor(G),Nt.setScissorTest(z),rt){let Et=Lt.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,H)}else if(dt){let Et=Lt.get(v.texture),kt=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,H||0,kt)}S=-1},this.readRenderTargetPixels=function(v,U,H,V,F,rt,dt){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Lt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&dt!==void 0&&(wt=wt[dt]),wt){Nt.bindFramebuffer(D.FRAMEBUFFER,wt);try{let Et=v.texture,kt=Et.format,Ht=Et.type;if(!Kt.textureFormatReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-V&&H>=0&&H<=v.height-F&&D.readPixels(U,H,V,F,Wt.convert(kt),Wt.convert(Ht),rt)}finally{let Et=L!==null?Lt.get(L).__webglFramebuffer:null;Nt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(v,U,H,V,F,rt,dt){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Lt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&dt!==void 0&&(wt=wt[dt]),wt){let Et=v.texture,kt=Et.format,Ht=Et.type;if(!Kt.textureFormatReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=v.width-V&&H>=0&&H<=v.height-F){Nt.bindFramebuffer(D.FRAMEBUFFER,wt);let Tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),D.readPixels(U,H,V,F,Wt.convert(kt),Wt.convert(Ht),0);let te=L!==null?Lt.get(L).__webglFramebuffer:null;Nt.bindFramebuffer(D.FRAMEBUFFER,te);let ue=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Cf(D,ue,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt),D.deleteBuffer(Tt),D.deleteSync(ue),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,U=null,H=0){v.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,v=arguments[1]);let V=Math.pow(2,-H),F=Math.floor(v.image.width*V),rt=Math.floor(v.image.height*V),dt=U!==null?U.x:0,wt=U!==null?U.y:0;T.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,dt,wt,F,rt),Nt.unbindTexture()},this.copyTextureToTexture=function(v,U,H=null,V=null,F=0){v.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,v=arguments[1],U=arguments[2],F=arguments[3]||0,H=null);let rt,dt,wt,Et,kt,Ht,Tt,te,ue,fe=v.isCompressedTexture?v.mipmaps[F]:v.image;H!==null?(rt=H.max.x-H.min.x,dt=H.max.y-H.min.y,wt=H.isBox3?H.max.z-H.min.z:1,Et=H.min.x,kt=H.min.y,Ht=H.isBox3?H.min.z:0):(rt=fe.width,dt=fe.height,wt=fe.depth||1,Et=0,kt=0,Ht=0),V!==null?(Tt=V.x,te=V.y,ue=V.z):(Tt=0,te=0,ue=0);let Ke=Wt.convert(U.format),re=Wt.convert(U.type),Ct;U.isData3DTexture?(T.setTexture3D(U,0),Ct=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),Ct=D.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),Ct=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Fn=D.getParameter(D.UNPACK_ROW_LENGTH),oe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),gn=D.getParameter(D.UNPACK_SKIP_PIXELS),qi=D.getParameter(D.UNPACK_SKIP_ROWS),nn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Et),D.pixelStorei(D.UNPACK_SKIP_ROWS,kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ht);let Fs=v.isDataArrayTexture||v.isData3DTexture,pe=U.isDataArrayTexture||U.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){let Tn=Lt.get(v),Os=Lt.get(U),hn=Lt.get(Tn.__renderTarget),Qn=Lt.get(Os.__renderTarget);Nt.bindFramebuffer(D.READ_FRAMEBUFFER,hn.__webglFramebuffer),Nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let ti=0;ti<wt;ti++)Fs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.get(v).__webglTexture,F,Ht+ti),v.isDepthTexture?(pe&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Lt.get(U).__webglTexture,F,ue+ti),D.blitFramebuffer(Et,kt,rt,dt,Tt,te,rt,dt,D.DEPTH_BUFFER_BIT,D.NEAREST)):pe?D.copyTexSubImage3D(Ct,F,Tt,te,ue+ti,Et,kt,rt,dt):D.copyTexSubImage2D(Ct,F,Tt,te,ue+ti,Et,kt,rt,dt);Nt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pe?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Ct,F,Tt,te,ue,rt,dt,wt,Ke,re,fe.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ct,F,Tt,te,ue,rt,dt,wt,Ke,fe.data):D.texSubImage3D(Ct,F,Tt,te,ue,rt,dt,wt,Ke,re,fe):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,Tt,te,rt,dt,Ke,re,fe.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,Tt,te,fe.width,fe.height,Ke,fe.data):D.texSubImage2D(D.TEXTURE_2D,F,Tt,te,rt,dt,Ke,re,fe);D.pixelStorei(D.UNPACK_ROW_LENGTH,Fn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gn),D.pixelStorei(D.UNPACK_SKIP_ROWS,qi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,nn),F===0&&U.generateMipmaps&&D.generateMipmap(Ct),Nt.unbindTexture()},this.copyTextureToTexture3D=function(v,U,H=null,V=null,F=0){return v.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,v=arguments[2],U=arguments[3],F=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,U,H,V,F)},this.initRenderTarget=function(v){Lt.get(v).__webglFramebuffer===void 0&&T.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?T.setTextureCube(v,0):v.isData3DTexture?T.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?T.setTexture2DArray(v,0):T.setTexture2D(v,0),Nt.unbindTexture()},this.resetState=function(){C=0,R=0,L=null,Nt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}},so=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new mt(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ro=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Qs=class extends ui{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ou=new ye,Wl=new $r,Ur=new vs,Fr=new A,oo=class extends Ne{constructor(t=new Ze,e=new Qs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ur.radius+=r,t.ray.intersectsSphere(Ur)===!1)return;ou.copy(s).invert(),Wl.copy(t.ray).applyMatrix4(ou);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let y=f,_=p;y<_;y++){let g=c.getX(y);Fr.fromBufferAttribute(d,g),au(Fr,g,l,s,t,e,this)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let y=f,_=p;y<_;y++)Fr.fromBufferAttribute(d,y),au(Fr,y,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function au(i,t,e,n,s,r,o){let a=Wl.distanceSqToPoint(i);if(a<e){let l=new A;Wl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ao=class extends on{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,p=(o-u)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new vt:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new A,s=[],r=[],o=[],a=new A,l=new ye;for(let p=0;p<=t;p++){let y=p/t;s[p]=this.getTangentAt(y,new A)}r[0]=new A,o[0]=new A;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(De(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,y))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(De(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let y=1;y<=t;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],p*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},tr=class extends fn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*d+this.aX,c=f*d+p*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xl=class extends tr{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Tc(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,d){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+d)+(l-a)/d;f*=u,p*=u,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Or=new A,ka=new Tc,Ba=new Tc,za=new Tc,Yl=class extends fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new A){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Or.subVectors(s[0],s[1]).add(s[0]),c=Or);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Or.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Or),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(u),p);_<1e-4&&(_=1),y<1e-4&&(y=_),g<1e-4&&(g=_),ka.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,y,_,g),Ba.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,y,_,g),za.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,y,_,g)}else this.curveType==="catmullrom"&&(ka.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),Ba.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),za.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set(ka.calc(l),Ba.calc(l),za.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function lu(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function Sy(i,t){let e=1-i;return e*e*t}function wy(i,t){return 2*(1-i)*i*t}function Ey(i,t){return i*i*t}function Zs(i,t,e,n){return Sy(i,t)+wy(i,e)+Ey(i,n)}function Ty(i,t){let e=1-i;return e*e*e*t}function Ay(i,t){let e=1-i;return 3*e*e*i*t}function Cy(i,t){return 3*(1-i)*i*i*t}function Ry(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Ty(i,t)+Ay(i,e)+Cy(i,n)+Ry(i,s)}var lo=class extends fn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ql=class extends fn{constructor(t=new A,e=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($s(t,s.x,r.x,o.x,a.x),$s(t,s.y,r.y,o.y,a.y),$s(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},co=class extends fn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zl=class extends fn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends fn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Zs(t,s.x,r.x,o.x),Zs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$l=class extends fn{constructor(t=new A,e=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new A){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Zs(t,s.x,r.x,o.x),Zs(t,s.y,r.y,o.y),Zs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(lu(a,l.x,c.x,u.x,d.x),lu(a,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},cu=Object.freeze({__proto__:null,ArcCurve:Xl,CatmullRomCurve3:Yl,CubicBezierCurve:lo,CubicBezierCurve3:ql,EllipseCurve:tr,LineCurve:co,LineCurve3:Zl,QuadraticBezierCurve:ho,QuadraticBezierCurve3:$l,SplineCurve:uo}),Kl=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cu[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new cu[s.type]().fromJSON(s))}return this}},Jl=class extends Kl{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new co(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new ho(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new lo(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new uo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){let c=new tr(t,e,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},jl=class i extends Ze{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=De(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],u=1/e,d=new A,f=new vt,p=new A,y=new A,_=new A,g=0,m=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:g=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,p.x=m*1,p.y=-g,p.z=m*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[w+1].x-t[w].x,m=t[w+1].y-t[w].y,p.x=m*1,p.y=-g,p.z=m*0,y.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(y)}for(let w=0;w<=e;w++){let E=n+w*u*s,M=Math.sin(E),O=Math.cos(E);for(let C=0;C<=t.length-1;C++){d.x=t[C].x*M,d.y=t[C].y,d.z=t[C].x*O,o.push(d.x,d.y,d.z),f.x=w/e,f.y=C/(t.length-1),a.push(f.x,f.y);let R=l[3*C+0]*M,L=l[3*C+1],S=l[3*C+0]*O;c.push(R,L,S)}}for(let w=0;w<e;w++)for(let E=0;E<t.length-1;E++){let M=E+w*t.length,O=M,C=M+t.length,R=M+t.length+1,L=M+1;r.push(O,C,L),r.push(R,L,C)}this.setIndex(r),this.setAttribute("position",new be(o,3)),this.setAttribute("uv",new be(a,2)),this.setAttribute("normal",new be(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},Ss=class i extends jl{constructor(t=1,e=1,n=4,s=8){let r=new Jl;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var fo=class i extends Ze{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],p=[],y=0,_=[],g=n/2,m=0;w(),o===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new be(d,3)),this.setAttribute("normal",new be(f,3)),this.setAttribute("uv",new be(p,2));function w(){let M=new A,O=new A,C=0,R=(e-t)/n;for(let L=0;L<=r;L++){let S=[],b=L/r,I=b*(e-t)+t;for(let G=0;G<=s;G++){let z=G/s,Y=z*l+a,tt=Math.sin(Y),q=Math.cos(Y);O.x=I*tt,O.y=-b*n+g,O.z=I*q,d.push(O.x,O.y,O.z),M.set(tt,R,q).normalize(),f.push(M.x,M.y,M.z),p.push(z,1-b),S.push(y++)}_.push(S)}for(let L=0;L<s;L++)for(let S=0;S<r;S++){let b=_[S][L],I=_[S+1][L],G=_[S+1][L+1],z=_[S][L+1];(t>0||S!==0)&&(u.push(b,I,z),C+=3),(e>0||S!==r-1)&&(u.push(I,G,z),C+=3)}c.addGroup(m,C,0),m+=C}function E(M){let O=y,C=new vt,R=new A,L=0,S=M===!0?t:e,b=M===!0?1:-1;for(let G=1;G<=s;G++)d.push(0,g*b,0),f.push(0,b,0),p.push(.5,.5),y++;let I=y;for(let G=0;G<=s;G++){let Y=G/s*l+a,tt=Math.cos(Y),q=Math.sin(Y);R.x=S*q,R.y=g*b,R.z=S*tt,d.push(R.x,R.y,R.z),f.push(0,b,0),C.x=tt*.5+.5,C.y=q*.5*b+.5,p.push(C.x,C.y),y++}for(let G=0;G<s;G++){let z=O+G,Y=I+G;M===!0?u.push(Y,Y+1,z):u.push(Y+1,Y,z),L+=3}c.addGroup(m,L,M===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ws=class i extends Ze{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],d=new A,f=new A,p=[],y=[],_=[],g=[];for(let m=0;m<=n;m++){let w=[],E=m/n,M=0;m===0&&o===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let O=0;O<=e;O++){let C=O/e;d.x=-t*Math.cos(s+C*r)*Math.sin(o+E*a),d.y=t*Math.cos(o+E*a),d.z=t*Math.sin(s+C*r)*Math.sin(o+E*a),y.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(C+M,1-E),w.push(c++)}u.push(w)}for(let m=0;m<n;m++)for(let w=0;w<e;w++){let E=u[m][w+1],M=u[m][w],O=u[m+1][w],C=u[m+1][w+1];(m!==0||o>0)&&p.push(E,M,C),(m!==n-1||l<Math.PI)&&p.push(M,O,C)}this.setIndex(p),this.setAttribute("position",new be(y,3)),this.setAttribute("normal",new be(_,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var po=class extends Fe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},fi=class extends ui{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function kr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Py(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Es=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ql=class extends Es{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ch,endingEnd:ch}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hh:r=t,a=2*e-n;break;case uh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hh:o=t,l=2*n-e;break;case uh:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,y=(n-e)/(s-e),_=y*y,g=_*y,m=-f*g+2*f*_-f*y,w=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*y+1,E=(-1-p)*g+(1.5+p)*_+.5*y,M=p*g-p*_;for(let O=0;O!==a;++O)r[O]=m*o[u+O]+w*o[c+O]+E*o[l+O]+M*o[d+O];return r}},tc=class extends Es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),d=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*u;return r}},ec=class extends Es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},bn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=kr(e,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:kr(t.times,Array),values:kr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ec(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new tc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ql(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wr:e=this.InterpolantFactoryMethodDiscrete;break;case Al:e=this.InterpolantFactoryMethodLinear;break;case ua:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wr;case this.InterpolantFactoryMethodLinear:return Al;case this.InterpolantFactoryMethodSmooth:return ua}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Py(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ua,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*n,f=d-n,p=d+n;for(let y=0;y!==n;++y){let _=e[d+y];if(_!==e[f+y]||_!==e[p+y]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Al;var ki=class extends bn{constructor(t,e,n){super(t,e,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Wr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var nc=class extends bn{};nc.prototype.ValueTypeName="color";var ic=class extends bn{};ic.prototype.ValueTypeName="number";var sc=class extends Es{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},mo=class extends bn{InterpolantFactoryMethodLinear(t){return new sc(this.times,this.values,this.getValueSize(),t)}};mo.prototype.ValueTypeName="quaternion";mo.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends bn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Wr;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends bn{};rc.prototype.ValueTypeName="vector";var oc=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],y=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return y}return null}}},Iy=new oc,ac=class{constructor(t){this.manager=t!==void 0?t:Iy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ac.DEFAULT_MATERIAL_NAME="__DEFAULT";var er=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Ha=new ye,hu=new A,uu=new A,go=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(hu),uu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uu),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},lc=class extends go{constructor(){super(new xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=xs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Ts=class extends er{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new lc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},du=new ye,Vs=new A,Va=new A,cc=class extends go{constructor(){super(new xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new vt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vs),Va.copy(n.position),Va.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Va),n.updateMatrixWorld(),s.makeTranslation(-Vs.x,-Vs.y,-Vs.z),du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du)}},$n=class extends er{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}};var yo=class extends er{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var _o=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=fu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function fu(){return performance.now()}var Ac="\\[\\]\\.:\\/",Ly=new RegExp("["+Ac+"]","g"),Cc="[^"+Ac+"]",Dy="[^"+Ac.replace("\\.","")+"]",Ny=/((?:WC+[\/:])*)/.source.replace("WC",Cc),Uy=/(WCOD+)?/.source.replace("WCOD",Dy),Fy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Cc),Oy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Cc),ky=new RegExp("^"+Ny+Uy+Fy+Oy+"$"),By=["material","materials","bones","map"],hc=class{constructor(t,e,n){let s=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ly,"")}static parseTrackName(t){let e=ky.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);By.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=hc;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E_=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uc);var bo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var an=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},zy=new js(-1,1,1,-1,0,1),Rc=class extends Ze{constructor(){super(),this.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new be([0,2,0,0,2,0],2))}},Hy=new Rc,Kn=class{constructor(t){this._mesh=new Ee(Hy,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,zy)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var So=class extends an{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Fe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=pi.clone(t.uniforms),this.material=new Fe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Kn(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var ir=class extends an{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},wo=class extends an{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Eo=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new vt);this._width=n.width,this._height=n.height,e=new Te(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:In}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new So(bo),this.copyPass.material.blending=dn,this.clock=new _o}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ir!==void 0&&(o instanceof ir?n=!0:o instanceof wo&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new vt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var To=class extends an{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new mt}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var Ou={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};var Ao=class extends an{constructor(t=.96){super(),this.shader=Ou,this.uniforms=pi.clone(this.shader.uniforms),this.uniforms.damp.value=t,this.textureComp=new Te(window.innerWidth,window.innerHeight,{magFilter:ze,type:In}),this.textureOld=new Te(window.innerWidth,window.innerHeight,{magFilter:ze,type:In}),this.compFsMaterial=new Fe({uniforms:this.uniforms,vertexShader:this.shader.vertexShader,fragmentShader:this.shader.fragmentShader}),this.compFsQuad=new Kn(this.compFsMaterial);let e=bo;this.copyFsMaterial=new Fe({uniforms:pi.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,blending:dn,depthTest:!1,depthWrite:!1}),this.copyFsQuad=new Kn(this.copyFsMaterial)}render(t,e,n){this.uniforms.tOld.value=this.textureOld.texture,this.uniforms.tNew.value=n.texture,t.setRenderTarget(this.textureComp),this.compFsQuad.render(t),this.copyFsQuad.material.uniforms.tDiffuse.value=this.textureComp.texture,this.renderToScreen?(t.setRenderTarget(null),this.copyFsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(),this.copyFsQuad.render(t));let s=this.textureOld;this.textureOld=this.textureComp,this.textureComp=s}setSize(t,e){this.textureComp.setSize(t,e),this.textureOld.setSize(t,e)}dispose(){this.textureComp.dispose(),this.textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this.compFsQuad.dispose(),this.copyFsQuad.dispose()}};var ku={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Co=class extends an{constructor(){super();let t=ku;this.uniforms=pi.clone(t.uniforms),this.material=new po({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Kn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Zt.getTransfer(this._outputColorSpace)===ae&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===pc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===nr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var P={Woke:"woke",GotFlashlight:"got_flashlight",FrontDoorTried:"front_door_tried",Phone1:"phone1_answered",GotFuse:"got_fuse",FuseInstalled:"fuse_installed",ChairNoticed:"chair_noticed",GotCamera:"got_camera",TvLiveSeen:"tv_live_seen",KeyRevealed:"photo_key_revealed",CircleSeen:"symbol_circle_seen",GotBrassKey:"got_brass_key",WardrobeOpen:"wardrobe_open",DiaryRead:"diary_read",RadioOn:"radio_on",RadioOff:"radio_off",KitchenMsg:"kitchen_msg",Call2:"call2_done",MirrorAnomaly:"mirror_anomaly_seen",MirrorMsg:"mirror_msg",TvSolved:"tv_solved",Call3:"call3_done",ClosetFound:"closet_found",FragA:"frag_a",MusicBoxFound:"musicbox_found",FragB:"frag_b",PadlockSeen:"padlock_seen",BasementUnlocked:"basement_unlocked",EnteredBasement:"entered_basement",Breaker1:"breaker_1",Breaker2:"breaker_2",Breaker3:"breaker_3",PowerOn:"power_on",TapeSeen:"tape_seen",FragC:"frag_c",FragD:"frag_d",Call4:"call4_done",PhotoRestored:"photo_restored",GotRoomKey:"got_room_key",EnteredMirasRoom:"entered_miras_room",Mem1:"mem_1",Mem2:"mem_2",Mem3:"mem_3",Mem4:"mem_4",MemoriesDone:"memories_done",FinalCall:"final_call_done",GotFrontKey:"got_front_key"},zi=[P.FragA,P.FragB,P.FragC,P.FragD],Ro=[P.Mem1,P.Mem2,P.Mem3,P.Mem4],ie={Flashlight:"flashlight",Camera:"instant_camera",Film:"film",Fuse:"fuse",BrassKey:"brass_key",MusicBox:"music_box",RoomKey:"room_key",FrontKey:"front_key"},mi={None:0,Forget:1,Remember:2,Stay:3};function Pc(i){return i(P.EnteredMirasRoom)?5:i(P.EnteredBasement)?4:i(P.KitchenMsg)?3:i(P.ChairNoticed)?2:1}var sr=i=>zi.filter(i).length,Po=i=>Ro.filter(i).length;function Bu(i){switch(Pc(i)){case 5:return i(P.MemoriesDone)?i(P.FinalCall)?"choice":"toy_phone":"memories";case 4:return i(P.PhotoRestored)?"open_room":i(P.PowerOn)?sr(i)<4?"fragments":"restore_photo":"power";case 3:return i(P.BasementUnlocked)?"enter_basement":i(P.MirrorMsg)?i(P.TvSolved)?i(P.ClosetFound)?i(P.MusicBoxFound)?"padlock":"listen":"footsteps":"tv_channels":"mirror";case 2:return i(P.GotCamera)?i(P.TvLiveSeen)?i(P.GotBrassKey)?i(P.DiaryRead)?i(P.RadioOff)?"cabinet":"radio":"wardrobe":i(P.KeyRevealed)?"take_key":"photo_bathroom":"television":"search";default:return i(P.GotFlashlight)?i(P.FrontDoorTried)?i(P.Phone1)?i(P.FuseInstalled)?"look_around":"fuse":"phone":"exit":"light"}}var jt={Caller:"Voice on the phone",Radio:"Radio",Tv:"Television",Child:"Child",Woman:"Woman",Man:"Man"},zu={light:["Find a light.","Something is on the bedside table.","The flashlight is on the bedside table. Take it with E and switch it on with F."],exit:["Find a way out.","The front door is at the south end of the hallway.","Walk down the hallway to the front door and try to open it."],phone:["Answer the telephone.","The ringing comes from the living room.","The telephone is on the side table next to the sofa in the living room."],fuse:["Restore the power in the hallway.","The fuse box is on the hallway wall. One fuse is missing.","A note on the refrigerator mentions the fuses. Check the kitchen drawer to the left of the sink."],look_around:["Look around the apartment.","Leave the living room for a while, then come back.","Look at the chair by the small dining table in the living room."],search:["Something moved. Search the apartment.","The bedroom desk has a drawer.","The instant camera is in the bedroom desk drawer."],television:["Something is wrong with the television.","Go back to the living room.","Stand in the living room near the television and wait."],photo_bathroom:["Photograph the bathroom.","The television showed something under the bathroom sink that your eyes can't see.","Stand in the bathroom, face the sink and press G to take a photograph."],take_key:["Take what the photograph revealed.","Look under the bathroom sink.","The brass key is on the floor under the bathroom sink."],wardrobe:["Open the locked wardrobe.","The small brass key fits something in the bedroom.","Use the brass key on the bedroom wardrobe and read what is inside."],radio:["Find the voice in the kitchen.","The radio is on the kitchen counter.","Walk to the kitchen counter and switch the radio off."],cabinet:["The radio told you not to look. Look.","One of the kitchen cabinets is open.","Open the wall cabinet above the kitchen counter."],mirror:["Find out what she drew on the mirror.","She drew on the bathroom mirror in the dark, and you had to close your eyes to see it.","Switch off the bathroom light, stand at the mirror and hold Q to close your eyes for a few seconds."],tv_channels:["Tune the television.","The mirror showed three numbers.","Use the television and tune channels 11, 4 and 7, in that order."],footsteps:["Follow the footsteps. Don't look at them.","They only move when you aren't looking at where they are. Listen, look away, follow.","Turn your back to the sound and walk after it slowly. Closing your eyes helps."],listen:["Something is playing. Find it.","You can only hear it with your eyes closed (hold Q).","The music comes from the bedroom. Close your eyes right next to the bed."],padlock:["Open the basement padlock.","Each symbol was given a number: the bathroom photograph, the kitchen cabinet, the television and the closet.","Circle 0, triangle 2, square 1, cross 9: February 19th, her birthday. The journal (Tab) keeps everything you've read."],enter_basement:["Go down to the basement.","The basement door is at the north end of the hallway.","Walk through the basement door at the end of the hallway."],power:["Restore the power.","Three breakers are spread around the basement. Don't keep your back to it for long.","Breakers: north-west corner, middle of the west wall, north end of the east wall."],fragments:["Find the missing pieces of the photograph ({n}/4).","She hid things: in the hallway closet, in her music box, in the old television, in the storage boxes.","Missing pieces: hallway closet shelf, music box under the bed (listen with eyes closed), basement TV cabinet, basement storage boxes."],restore_photo:["Restore the family photograph in the living room.","There is an empty frame in the living room.","The torn frame hangs on the wall next to the bookshelf in the living room. Use it."],open_room:["Open the locked room in the basement.","The ribbon key opens a door downstairs.","The locked door is at the far end of the basement."],memories:["Remember her ({n}/4).","Things appear in this room when you are not looking at them.","Stand in the middle of the room facing one wall for a few seconds, then turn around and look."],toy_phone:["Answer the toy telephone.","It is on the floor by the small bed.","Use the toy telephone by the bed."],choice:["Leave. Look at her. Or keep your eyes closed.","There are three ways this ends.","Leave through the front door upstairs with the key; or look at the empty chair and don't look away; or close your eyes in this room and keep them closed."]};function Hu(i,t){let e=zu[i];if(!e)return"";let n=i==="fragments"?sr(t):i==="memories"?Po(t):0;return e[0].replace("{n}",n)}var Vu=(i,t)=>zu[i]?.[Math.min(1+t,2)]??null,Gu=new Set([P.Phone1,P.FuseInstalled,P.GotCamera,P.GotBrassKey,P.DiaryRead,P.MirrorMsg,P.TvSolved,P.ClosetFound,P.MusicBoxFound,P.BasementUnlocked,P.PowerOn,P.FragC,P.FragD,P.PhotoRestored,P.MemoriesDone,P.FinalCall,P.GotFrontKey]),Ic=["","AWAKENING","SOMETHING IS WRONG","DON'T LOOK AWAY","THE EMPTY SPACE","REMEMBER"],Io=i=>i>=1&&i<=5?"CHAPTER "+["","I","II","III","IV","V"][i]:"",Wu={[ie.Flashlight]:["Flashlight","A heavy metal flashlight. The batteries rattle when you shake it. (F)"],[ie.Camera]:["Instant camera","An old instant camera with a cracked strap. It sees more than you do. (G)"],[ie.Film]:["Instant film","One exposure each. The living room drawer always seems to have more."],[ie.Fuse]:["Fuse","A ceramic fuse. Someone wrote HALL on it in pencil."],[ie.BrassKey]:["Small brass key","It was not there until you photographed it."],[P.FragA]:["Photo fragment (top-left)","A torn corner of a photograph. The white border runs along its top and left edges. A man's shoulder."],[P.FragB]:["Photo fragment (top-right)","A torn corner. Border along the top and right. A woman's face, half turned away."],[P.FragC]:["Photo fragment (bottom-left)","A torn corner. Border along the bottom and left. A man's hand, reaching down."],[P.FragD]:["Photo fragment (bottom-right)","A torn corner. Border along the bottom and right. A small yellow sleeve."],[ie.MusicBox]:["Music box","A child's music box. The dancer inside has been snapped off."],[ie.RoomKey]:["Key with a ribbon","A small key tied with a faded pink ribbon."],[ie.FrontKey]:["Front door key","A paper tag in a child's handwriting: FOR WHEN YOU ARE READY TO GO."]},gi=i=>Wu[i]?.[0]??i,Xu=i=>Wu[i]?.[1]??"",Yu={fridge_note:["Note on the refrigerator",`Fuses - kitchen drawer, left of the sink.
The hallway one keeps going. Don't let her touch the box.

- H.`],photo_back:["Back of the family photograph",`The photograph is gone from the frame. Only its torn edges remain.

Written on the backing board in pencil:
"Lindell St. - summer. A., H. & M."`],diary:["Diary",`I keep writing her name and crossing it out. The doctor says writing helps. It doesn't.

Hanna has taken the photographs down. She says she can't look at them. I can't look at the spaces where they used to hang.

February 19th. She would have been seven. I bought a cake and didn't light it.

When the lights went out she used to draw on the bathroom mirror with her finger. She said the mirror kept her secrets, and you could only see them if you closed your eyes and counted.

I don't remember the phone call. Everyone keeps telling me about the phone call.`],drawing:["Child's drawing",`Crayon on paper. Four rooms. A tall grey figure with no face standing in every one of them.
A small figure drawn in blue, lying down, in the room with the bath.

Underneath, in uneven letters:

DADDY DONT LOOK AWAY`],cabinet:["Writing inside the cabinet",`Scratched into the wood, over and over:

SHE WAS RIGHT THERE

And below, smaller:

CROSS = 9
SHE DREW ON THE MIRROR IN THE DARK. CLOSE YOUR EYES.`],closet_note:["Note on the closet shelf",`SQUARE = 1

You heard them, didn't you? Small feet. They always went to the closet when she was hiding.
You never looked there first. You never looked anywhere first.`],clipping:["Newspaper clipping",`CHILD, 6, DIES IN APARTMENT ACCIDENT

LINDELL STREET - A six-year-old girl died late on Tuesday evening after being found unresponsive in the bathtub of her family's fourth-floor apartment.

Paramedics were called by the girl's father, 34, at 9:41 p.m. Police said there were no suspicious circumstances.

Neighbours described the family as "quiet, kind, always together." The girl's name has not been released at the family's request.`],coroner:["Medical examiner's summary",`Name: Mira Vale.  Age: 6.
Cause of death: drowning.  Manner: accident.

Notes: Father states he left the bathroom to answer a telephone call (work) at approximately 9:20 p.m. and became "distracted". Television was on in the living room. Child found at approximately 9:40 p.m. Father attempted resuscitation.`],psych:["Psychiatric intake form",`St. Agnes Hospital - Psychiatric Intake
Patient: Adrian Vale, 35.

Admitted after an overdose eleven months following the death of his daughter. Presents with dissociative amnesia; unable to state his own name on admission.

Repeatedly describes "empty spaces" in his home that he "must not look at". Reports a recurring dream of an apartment that rearranges itself whenever he looks away.

Patient asked staff to disconnect the telephone in his room. Prognosis: guarded.`],letter:["Letter",`Adrian,

I'm leaving the key with your mother. I can't be in that apartment anymore. Every room has a space in it where she should be, and you walk around them like they're holes in the floor.

I don't blame you for the phone call. I blame you for never looking at her again. Not even in the photographs.

One day you'll have to look. I hope I'm there when you do.

- H.`],basement_note:["Label on the storage boxes",`MIRA - CLOTHES
MIRA - DRAWINGS
MIRA - DO NOT OPEN

The last one has been opened.`]},Ps=i=>Yu[i]?.[0]??i,Lc=i=>Yu[i]?.[1]??"",St=(i,t)=>({speaker:i,text:t}),He={opening:[St("","I don't know this room."),St("","I don't know my name.")],call1:[St(jt.Caller,"...hello? Don't hang up. Listen to me."),St(jt.Caller,"Whatever happens, don't look at the empty spaces.")],afterCall1:[St("","The line is dead. The cord isn't plugged into anything.")],call2:[St(jt.Caller,"You're looking in the wrong direction.")],afterCall2:[St("","Something is breathing. Right behind me."),St("","...There's nothing there. There's nothing there.")],call3:[St(jt.Caller,"She called you. Twice. 'Daddy, look.'"),St(jt.Caller,"And you said: one minute."),St(jt.Caller,"It was always one minute.")],call4:[St(jt.Caller,"It isn't a monster, you know."),St(jt.Caller,"It's the shape of where she should be. Everything you won't look at gets to move.")],radio:[St(jt.Radio,"...police have confirmed that the death of a six-year-old girl on Lindell Street was a tragic accident..."),St(jt.Radio,"...the girl's father, who made the emergency call, has asked for privacy..."),St(jt.Radio,"...and if you're still in the apartment, don't look in the cabinet. Don't open it. Don't-")],tvLive:[St("","It was standing right behind me. On the screen."),St("","Then the picture changed. The bathroom. Something under the sink."),St("","My eyes can't see it. Maybe the camera can.")],broadcast:[St(jt.Tv,"Good evening, and welcome to a very special birthday show."),St(jt.Child,"Look, Daddy! A triangle! It's got three corners!"),St(jt.Man,"Three corners. But on this one, the triangle is number two."),St(jt.Child,"Why?"),St(jt.Man,"Because you're the second most important thing in the world. After the cake.")],tape:[St(jt.Woman,"Say hi to Daddy!"),St(jt.Child,"Hi Daddy! Look! Look what I made!"),St(jt.Man,"One minute, sweetheart. I'm on the phone."),St(jt.Child,"You always say one minute."),St("","I remember her voice. Why can't I remember her face?")],enterBasement:[St("","It smells of damp cardboard and old dust."),St("","There's something down here with me. It's very quiet when I look at it.")],memoriesDone:[St("","Her name is Mira."),St("","Her name was Mira.")],finalCall:[St(jt.Child,"Daddy? You found my room."),St(jt.Child,"You can go now. The key is on my desk. You won't have to remember anything."),St(jt.Child,"Or you can look at me. Really look. Even if it hurts."),St(jt.Child,"Or you can close your eyes. Like before. Then nothing ever has to change.")]},Dc=["Pip. Her rabbit. She chewed its ear when she was scared of the dark.","One red shoe. We never found the other one. She said it was hiding.","Her crayons. She drew on everything. The walls. The mirror. My hands.","Three people. She always drew me looking at her."],qu=["I lost time. How long was I gone?","Breathe. The floor is real. The walls are real.","Something was standing very close to me."],Zu=["An ordinary photograph. Probably.","Nothing unusual. You keep looking anyway.","The flash makes the room look smaller than it is.","A photograph of a room no one lives in."],Lo=i=>i[Math.floor(Math.random()*i.length)],$u={1:{title:"ENDING I - FORGET",epigraph:"You can only see what you are willing to forget.",music:"drone",lines:[St("","The door opens onto a corridor you have never seen."),St("","The stairs go down further than they should."),St("","Outside, it is morning. The air is cold and smells of rain."),St("","You don't remember the apartment. You don't remember a name."),St("","Somewhere behind you, a telephone is ringing."),St("","You don't turn around.")]},2:{title:"ENDING II - REMEMBER",epigraph:"Some things only stop moving when you finally look at them.",music:"lullaby",lines:[St("","She is sitting on the chair. She was always sitting on the chair."),St("","She is smaller than you remember. Exactly the size of the space you wouldn't look at."),St(jt.Child,"You looked."),St("","Her name is Mira Vale. She was six years old."),St("","My name is Adrian Vale. I was on the phone."),St("","I'm sorry. I'm looking now."),St("","..."),St("","A hospital room. A window. Hanna asleep in the chair beside the bed."),St("","When she wakes up, you tell her you remember.")]},3:{title:"ENDING III - STAY",epigraph:"Whatever you don't look at, waits.",music:"drone",lines:[St("","You keep your eyes closed."),St("","Small footsteps cross the room and stop beside you. They wait."),St("","After a long time, they go away."),St("","In the dark, nothing has to have happened."),St("","..."),St("","A man wakes up in an unfamiliar apartment. He doesn't remember his name."),St("","The telephone rings. The voice on the line is his own."),St(jt.Caller,"Whatever happens, don't look at the empty spaces.")]}},Nc=`THE UNSEEN

A psychological horror game


Game design, programming, writing,
level design, procedural art and sound

The Unseen development team


Every texture, model, voice and sound in this game
is generated procedurally in your browser.
No third-party assets were used.

Built with three.js


If you are struggling with grief or thoughts of self-harm,
please reach out to someone you trust or a local support line.


Thank you for looking.`;var rr=(i,t,e)=>i<t?t:i>e?e:i,Do=class{constructor(){this.value=100}get distortion(){return 1-rr(this.value/100,0,1)}get depleted(){return this.value<=0}get level(){return this.value>=60?"stable":this.value>=35?"uneasy":this.value>=15?"unstable":"breaking"}tick(t,e,n){if(t<=0)return this.value;if(e>0)this.value-=e*t;else{let s=n+(this.value<55?.6:0),r=n>0?100:55;this.value<r&&(this.value=Math.min(r,this.value+s*t))}return this.value=rr(this.value,0,100),this.value}hit(t){t>0&&(this.value=rr(this.value-t,0,100))}restore(t){t>0&&(this.value=rr(this.value+t,0,100))}set(t){this.value=rr(t,0,100)}};var No=class{constructor(){this.events=[],this.active=null,this.activeStart=0,this.lastAmbientEnd=-1/0,this.lastAmbientId=null,this.ambientGap=18}register(t){this.events.push(Object.assign({story:!1,oneShot:!0,minChapter:1,maxChapter:5,cooldown:60,probability:1,minDist:0,maxDist:1/0,visibility:"any",timeout:40,lastRun:-1/0,runs:0,done:!1},t))}clear(){this.events=[],this.active=null}eligible(t,e){if(t.done||e.chapter<t.minChapter||e.chapter>t.maxChapter||t.requires&&!e.has(t.requires)||t.blockedBy&&e.has(t.blockedBy)||e.time-t.lastRun<t.cooldown)return!1;if(t.anchor){let n=e.playerPos,s=t.anchor,r=Math.hypot(n.x-s.x,n.y-s.y,n.z-s.z);if(r<t.minDist||r>t.maxDist||t.visibility==="unobserved"&&e.isObserved(s)||t.visibility==="observed"&&!e.isObserved(s))return!1}return!t.condition||t.condition()}tick(t){if(this.active){let s=this.active;if(!(!s.completion||s.completion()||t.time-this.activeStart>s.timeout))return null;s.story||(this.lastAmbientEnd=t.time),this.active=null}for(let s of this.events)if(s.story&&this.eligible(s,t))return this.begin(s,t);if(t.time-this.lastAmbientEnd<this.ambientGap)return null;let e=this.events.filter(s=>!s.story&&this.eligible(s,t));if(e.length>1&&(e=e.filter(s=>s.id!==this.lastAmbientId)),!e.length)return null;let n=Math.floor(t.random()*e.length)%e.length;for(let s=0;s<e.length;s++){let r=e[(n+s)%e.length];if(t.random()<r.probability)return this.begin(r,t)}return null}begin(t,e){return t.lastRun=e.time,t.runs++,t.oneShot&&(t.done=!0),t.story||(this.lastAmbientId=t.id),t.start?.(),t.completion?(this.active=t,this.activeStart=e.time):t.story||(this.lastAmbientEnd=e.time),t}};var Oc=1,Is="unseen_save_v1",Uo="unseen_save_v1_bak",Vy=["apartment","basement"],Fc=24;function kc(){return{version:Oc,scene:"apartment",hasPosition:!1,position:{x:0,y:0,z:0},yaw:0,perception:100,chapter:1,objective:"",flags:[],journal:[],items:{},documents:[],photos:[],savedAt:""}}function Gy(i){if(!i||typeof i!="object"||Array.isArray(i)||!(i.version>=1&&i.version<=Oc))return null;let t=Object.assign(kc(),i);Vy.includes(t.scene)||(t.scene="apartment"),t.flags=Array.isArray(t.flags)?[...new Set(t.flags.filter(s=>typeof s=="string"&&s))]:[],t.journal=Array.isArray(t.journal)?t.journal.filter(s=>typeof s=="string").slice(-200):[],t.documents=Array.isArray(t.documents)?[...new Set(t.documents.filter(s=>typeof s=="string"))]:[],t.photos=Array.isArray(t.photos)?t.photos.filter(s=>s&&typeof s.src=="string").slice(-Fc):[];let e={};if(t.items&&typeof t.items=="object")for(let[s,r]of Object.entries(t.items))Number.isFinite(r)&&r>0&&(e[s]=Math.floor(r));t.items=e,t.perception=Number.isFinite(t.perception)?Math.max(0,Math.min(100,t.perception)):100,t.chapter=Number.isInteger(t.chapter)&&t.chapter>=1&&t.chapter<=5?t.chapter:1;let n=t.position;return(!n||![n.x,n.y,n.z].every(Number.isFinite))&&(t.hasPosition=!1,t.position={x:0,y:0,z:0}),Number.isFinite(t.yaw)||(t.yaw=0),t}function Ku(i){if(typeof i!="string"||!i.trim())return null;try{return Gy(JSON.parse(i))}catch{return null}}var Wy=i=>{i.photos.length>Fc&&i.photos.splice(0,i.photos.length-Fc)},Fo=class{constructor(t){this.storage=t,this.wasCorrupted=!1}get hasSave(){return!!(this.storage.get(Is)||this.storage.get(Uo))}write(t){t.version=Oc,t.savedAt=new Date().toISOString(),Wy(t);try{let e=this.storage.get(Is);return e&&Ku(e)&&this.storage.set(Uo,e),this.storage.set(Is,JSON.stringify(t)),!0}catch{try{return t.photos=t.photos.slice(-4),this.storage.set(Is,JSON.stringify(t)),!0}catch{return!1}}}load(){this.wasCorrupted=!1;for(let t of[Is,Uo]){let e=this.storage.get(t);if(!e)continue;let n=Ku(e);if(n)return n;this.wasCorrupted=!0}return null}clear(){this.storage.remove(Is),this.storage.remove(Uo)}};function Ju(){let i=new Map,t=(()=>{try{let e=globalThis.localStorage;return e.setItem("__t","1"),e.removeItem("__t"),e}catch{return null}})();return{persistent:!!t,get:e=>{try{return t?t.getItem(e):i.get(e)??null}catch{return i.get(e)??null}},set:(e,n)=>{t?t.setItem(e,n):i.set(e,n)},remove:e=>{try{t?t.removeItem(e):i.delete(e)}catch{i.delete(e)}}}}var h={time:0,state:"boot",data:null,world:null,worldName:"",player:null,shadowsDirty:!0,lightScale:6,storage:null,saves:null,settings:null,notify(i){h.ui?.notify(i)}};h.story={has:i=>!!h.data&&h.data.flags.includes(i),get chapter(){return h.data?h.data.chapter:0},get objectiveId(){return h.data?h.data.objective:""},get objectiveText(){return Hu(h.story.objectiveId,h.story.has)},set(i){if(!h.data||h.story.has(i))return;h.data.flags.push(i),h.hints.progress(),!h.story.evaluate(!0)&&Gu.has(i)&&h.checkpoint()},evaluate(i){if(!h.data)return!1;let t=Pc(h.story.has),e=!1;t>h.data.chapter&&(h.data.chapter=t,e=!0,h.ui.chapterCard(t),h.checkpoint());let n=Bu(h.story.has);return n!==h.data.objective&&(h.data.objective=n,h.hints.progress(),i&&h.ui.showObjective()),e},journal(i){h.data&&(h.data.journal.push(i),h.data.journal.length>200&&h.data.journal.shift())}};h.inventory={has:i=>h.inventory.count(i)>0,count:i=>h.data?.items[i]??0,add(i,t=1,e=!0){h.data&&(h.data.items[i]=(h.data.items[i]??0)+t,h.audio.play2D("pickup",.6),e&&h.notify(t>1?`${gi(i)} \xD7${t}`:gi(i)))},remove(i,t=1){return!h.data||h.inventory.count(i)<t?!1:(h.data.items[i]-=t,h.data.items[i]<=0&&delete h.data.items[i],!0)},read(i){h.data&&(h.audio.play2D("paper",.7),h.data.documents.includes(i)||(h.data.documents.push(i),h.notify("Document: "+Ps(i))),h.ui.showDocument(i))},addPhoto(i){h.data?.photos.push(i)}};h.perception={model:new Do,_drain:0,_recover:0,_lastNotice:-10,get value(){return this.model.value},get distortion(){return this.model.distortion},get meterVisible(){return h.story.chapter>=2},drain(i){i>0&&(this._drain+=i)},recover(i){i>0&&(this._recover+=i)},hit(i){this.model.hit(i)},restore(i,t){this.model.restore(i),t&&h.time-this._lastNotice>3&&(this._lastNotice=h.time,h.notify(t))},update(i){if(h.state!=="playing"||!h.player){this._drain=this._recover=0;return}h.player.eyesClosed&&h.player.closedTime>6&&(this._drain+=1.2),this.model.tick(i,this._drain,this._recover),this._drain=this._recover=0,this.model.depleted&&h.blackout(Lo(qu))}};h.hints={last:0,shown:0,progress(){this.last=h.time,this.shown=0},update(i){if(h.state!=="playing"||h.ui.modalOpen){this.last+=i;return}let t=h.time-this.last;if(this.shown===0&&t>150||this.shown===1&&t>330){let e=Vu(h.story.objectiveId,this.shown);this.shown++,e&&h.ui.showHint(e)}}};h.director={scheduler:new No,acc:0,register(i){this.scheduler.register(i)},clear(){this.scheduler.clear()},update(i){if(h.state!=="playing"||!h.player||(this.acc+=i,this.acc<.5))return;this.acc=0;let t=this.scheduler.tick({time:h.time,chapter:h.story.chapter,has:h.story.has,playerPos:h.player.position,isObserved:e=>h.observation.isPointObserved(new A(e.x,e.y,e.z)),random:Math.random});t?.cue&&(t.anchor?h.audio.playAt(t.cue,t.anchor,.8):h.audio.play2D(t.cue,.6))}};var ln={v:!1};h.newGame=()=>{ln.v||(h.saves.clear(),h.lastCheckpoint=null,h.data=kc(),or("apartment",null,!0))};h.canContinue=()=>h.saves.hasSave;h.continueGame=()=>{if(ln.v)return;let i=h.saves.load();if(!i){h.ui.message(h.saves.wasCorrupted?"The save is damaged and could not be loaded. Please start a new game.":"There is no saved game.");return}h.data=i,h.lastCheckpoint=null,or(i.scene,null,!1)};h.restartCheckpoint=()=>{if(ln.v)return;let i=h.lastCheckpoint?JSON.parse(h.lastCheckpoint):h.saves.load();if(!i){h.newGame();return}h.data=i,or(i.scene,null,!1)};h.toMenu=(i=!0)=>{ln.v||(i&&h.data&&(h.state==="playing"||h.state==="paused")&&h.checkpoint(),or("menu",null,!1))};h.isBusy=()=>ln.v;h.transitionTo=(i,t)=>{if(h.data){if(ln.v){setTimeout(()=>h.transitionTo(i,t),200);return}h.data.scene===i&&h.worldName===i||(h.data.scene=i,h.data.hasPosition=!1,or(i,t,!1))}};h.setPaused=i=>{i&&h.state==="playing"?(h.state="paused",h.input.unlock(),h.audio.setPaused(!0)):!i&&h.state==="paused"&&(h.state="playing",h.audio.setPaused(!1),h.input.lock())};h.captureState=()=>{h.data&&(h.data.perception=h.perception.value,h.player&&(h.data.hasPosition=!0,h.data.position={x:h.player.position.x,y:0,z:h.player.position.z},h.data.yaw=h.player.yaw),h.data.scene=h.worldName==="basement"?"basement":"apartment")};h.checkpoint=()=>{!h.data||h.state==="ending"||(h.captureState(),h.lastCheckpoint=JSON.stringify(h.data),h.saves.write(h.data)&&h.ui.saving())};async function or(i,t,e){ln.v=!0,h.state="loading",h.input.unlock(),await h.ui.fade(1,.8),h.dialogue.stopAll(),h.audio.stopAll(),h.ui.closeModals(),h.buildWorld(i,t),await Xy(),i==="menu"?(h.state="menu",h.data=null):(h.perception.model.set(h.data.perception),h.state="playing",h.story.evaluate(!1),e&&(h.story.set(P.Woke),h.ui.chapterCard(1)),h.checkpoint(),h.world.onEntered(),h.ui.showObjective(),h.input.lock()),await h.ui.fade(0,1.2),ln.v=!1}var Xy=()=>new Promise(i=>requestAnimationFrame(()=>i())),Yy=i=>new Promise(t=>setTimeout(t,i*1e3));h.blackout=i=>{h.state!=="playing"||ln.v||(async()=>{ln.v=!0,h.state="cutscene",h.audio.play2D("heartbeat",.9),await h.ui.fade(1,.6);let t=h.world.getSpawn("safe");h.player.teleport(t.pos,t.yaw),h.perception.model.set(45),h.world.onBlackout(),await Yy(1.5),h.state="playing",await h.ui.fade(0,1.5),i&&h.dialogue.thought(i),ln.v=!1})()};h.triggerEnding=i=>{h.state!=="ending"&&(async()=>{ln.v=!0,h.state="ending",h.input.unlock(),h.ui.closeModals(),h.dialogue.stopAll(),await h.ui.fade(1,3),h.audio.stopAll(),h.endingsSeen.add(i);try{h.storage.set("unseen_endings",JSON.stringify([...h.endingsSeen]))}catch{}await h.ui.playEnding(i),ln.v=!1,h.toMenu(!1)})()};var ju="unseen_settings_v1",ar={forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD",interact:"KeyE",sprint:"ShiftLeft",crouch:"KeyC",eyes:"KeyQ",flashlight:"KeyF",camera:"KeyG",inventory:"Tab"},Qu={forward:"Move forward",back:"Move back",left:"Move left",right:"Move right",interact:"Interact",sprint:"Walk faster",crouch:"Crouch",eyes:"Close eyes (hold)",flashlight:"Flashlight",camera:"Instant camera",inventory:"Inventory"};function qy(){return{masterVolume:1,musicVolume:.8,sfxVolume:1,sensitivity:1,invertY:!1,brightness:.5,fov:70,quality:"high",shadows:!0,subtitles:!0,cameraShake:!0,headBob:!0,motionBlur:!1,reducedMotion:!1,keys:{...ar}}}function td(i){let t=qy();try{let n=i.get(ju);if(n){let s=JSON.parse(n);for(let r of Object.keys(t))r!=="keys"&&typeof s[r]==typeof t[r]&&(t[r]=s[r]);if(s.keys)for(let r of Object.keys(ar))typeof s.keys[r]=="string"&&(t.keys[r]=s.keys[r])}}catch{}let e=(n,s,r)=>Math.max(s,Math.min(r,n));return t.masterVolume=e(t.masterVolume,0,1),t.musicVolume=e(t.musicVolume,0,1),t.sfxVolume=e(t.sfxVolume,0,1),t.sensitivity=e(t.sensitivity,.1,4),t.brightness=e(t.brightness,0,1),t.fov=e(t.fov,55,95),["low","medium","high"].includes(t.quality)||(t.quality="high"),t}function Bc(i,t){try{i.set(ju,JSON.stringify(t))}catch{}}var ed=i=>i.cameraShake&&!i.reducedMotion,nd=i=>i.headBob&&!i.reducedMotion;function Re(i){return i?i.replace(/^Key/,"").replace(/^Digit/,"").replace("ShiftLeft","Shift").replace("ShiftRight","R-Shift").replace("ControlLeft","Ctrl").replace("ControlRight","R-Ctrl").replace("AltLeft","Alt").replace("Space","Space"):"?"}var Oo=class{constructor(t){this.canvas=t,this.down=new Set,this.pressed=new Set,this.dx=0,this.dy=0,this.dragging=!1,this.lockFailed=!1,this.listeners=[],addEventListener("keydown",e=>{if(this.captureNext){e.preventDefault();let n=this.captureNext;this.captureNext=null,n(e.code);return}(["Tab","Space","ArrowUp","ArrowDown"].includes(e.code)||h.state==="playing"&&e.code!=="F11"&&e.code!=="F12")&&e.preventDefault(),this.down.has(e.code)||this.pressed.add(e.code),this.down.add(e.code);for(let n of this.listeners)n(e)}),addEventListener("keyup",e=>this.down.delete(e.code)),addEventListener("blur",()=>this.down.clear()),addEventListener("mousemove",e=>{(this.locked||this.dragging)&&(this.dx+=e.movementX,this.dy+=e.movementY)}),t.addEventListener("mousedown",e=>{h.state!=="playing"||h.ui.modalOpen||(this.locked||(this.lock(),this.dragging=this.lockFailed),e.preventDefault())}),addEventListener("mouseup",()=>this.dragging=!1),document.addEventListener("pointerlockchange",()=>{!this.locked&&h.state==="playing"&&!h.ui.modalOpen&&!this.releasing&&h.setPaused(!0),this.releasing=!1}),document.addEventListener("pointerlockerror",()=>this.lockFailed=!0)}get locked(){return document.pointerLockElement===this.canvas}lock(){if(!(this.locked||this.lockFailed))try{this.canvas.requestPointerLock?.()?.catch?.(()=>this.lockFailed=!0)}catch{this.lockFailed=!0}}unlock(){this.locked&&(this.releasing=!0,document.exitPointerLock?.())}held(t){return this.down.has(h.settings.keys[t])}hit(t){return this.pressed.has(h.settings.keys[t])}hitCode(t){return this.pressed.has(t)}takeMouse(){let t=[this.dx,this.dy];return this.dx=this.dy=0,t}endFrame(){this.pressed.clear()}onKey(t){this.listeners.push(t)}};var zc=new Qe,ko=class{constructor(t){this.root=t,this.entries=[]}ownerOf(t){let e=t;for(;e.parent&&e.parent!==this.root;)e=e.parent;return e}add(t,{solid:e=!0,occluder:n=!0}={}){t.updateWorldMatrix(!0,!1);let s={mesh:t,owner:this.ownerOf(t),solid:e,occluder:n,enabled:!0,min:new A,max:new A};return this.refresh(s),this.entries.push(s),t.userData.phys=s,s}refresh(t){t.mesh.updateWorldMatrix(!0,!1),zc.makeEmpty().expandByObject(t.mesh,!1),t.min.copy(zc.min),t.max.copy(zc.max)}refreshOwner(t){t.updateWorldMatrix(!0,!0);for(let e of this.entries)(e.owner===t||Hc(e.mesh,t))&&(e.owner=this.ownerOf(e.mesh),this.refresh(e))}setEnabled(t,e){for(let n of this.entries)(n.owner===t||Hc(n.mesh,t))&&(n.enabled=e)}removeUnder(t){this.entries=this.entries.filter(e=>!(e.mesh===t||Hc(e.mesh,t)))}raycast(t,e,n,s){let r=null,o=n,a=1/e.x,l=1/e.y,c=1/e.z;for(let u of this.entries){if(!u.enabled||s&&!s(u))continue;let d=(u.min.x-t.x)*a,f=(u.max.x-t.x)*a,p=Math.min(d,f),y=Math.max(d,f);if(d=(u.min.y-t.y)*l,f=(u.max.y-t.y)*l,p=Math.max(p,Math.min(d,f)),y=Math.min(y,Math.max(d,f)),d=(u.min.z-t.z)*c,f=(u.max.z-t.z)*c,p=Math.max(p,Math.min(d,f)),y=Math.min(y,Math.max(d,f)),y<Math.max(p,0))continue;let _=Math.max(p,0);_<o&&(o=_,r=u)}return r?{entry:r,dist:o}:null}lineOfSight(t,e,n){let s=new A().subVectors(e,t),r=s.length();if(r<.01)return!0;s.divideScalar(r);let o=this.raycast(t,s,r-.05,a=>a.occluder);return!o||n&&o.entry.owner===n}overlaps(t,e,n,s){for(let r of this.entries)if(!(!r.enabled||!r.solid||r.owner===n)&&r.min.x<e.x&&r.max.x>t.x&&r.min.y<e.y&&r.max.y>t.y&&r.min.z<e.z&&r.max.z>t.z)return!0;if(s){let r=s.position,o=s.radius;if(r.x+o>t.x&&r.x-o<e.x&&r.z+o>t.z&&r.z-o<e.z&&r.y+s.height>t.y&&r.y<e.y)return!0}return!1}collide(t,e,n){for(let s=0;s<3;s++){let r=!1;for(let o of this.entries){if(!o.enabled||!o.solid||o.max.y<=t.y+.3||o.min.y>=t.y+n)continue;let a=Math.max(o.min.x,Math.min(t.x,o.max.x)),l=Math.max(o.min.z,Math.min(t.z,o.max.z)),c=t.x-a,u=t.z-l,d=c*c+u*u;if(!(d>=e*e)){if(d>1e-8){let f=Math.sqrt(d),p=e-f;t.x+=c/f*p,t.z+=u/f*p}else{let f=[[o.min.x-e-t.x,0],[o.max.x+e-t.x,0],[0,o.min.z-e-t.z],[0,o.max.z+e-t.z]];f.sort((p,y)=>Math.abs(p[0]+p[1])-Math.abs(y[0]+y[1])),t.x+=f[0][0],t.z+=f[0][1]}r=!0}}if(!r)break}}};function Hc(i,t){for(let e=i.parent;e;e=e.parent)if(e===t)return!0;return!1}var rd=(i,t)=>({x:i.x-t.x,y:i.y-t.y,z:i.z-t.z}),Bo=(i,t)=>i.x*t.x+i.y*t.y+i.z*t.z,id=(i,t)=>({x:i.y*t.z-i.z*t.y,y:i.z*t.x-i.x*t.z,z:i.x*t.y-i.y*t.x}),sd=i=>{let t=Math.hypot(i.x,i.y,i.z)||1;return{x:i.x/t,y:i.y/t,z:i.z/t}};function Ls(i,t,e,n,s,r,o=.15,a=.05,l=40){let c=sd(t),u=sd(id(c,e)),d=id(u,c),f=rd(r,i),p=Bo(f,c);if(p<a||p>l)return!1;let y=Math.tan(n*Math.PI/360)*(1+o),_=y*s;return Math.abs(Bo(f,d))<=p*y&&Math.abs(Bo(f,u))<=p*_}function zo(i,t,e){let n=rd(e,i),s=Math.hypot(n.x,n.y,n.z)*Math.hypot(t.x,t.y,t.z);return s<1e-9?0:Math.acos(Math.max(-1,Math.min(1,Bo(n,t)/s)))*180/Math.PI}var Zy=.15,Tx=new Qe,Vc=new A,Ho=class{constructor(){this.objects=[],this.acc=0}clear(){this.objects=[]}register(t){this.objects.push(t)}unregister(t){this.objects=this.objects.filter(e=>e!==t)}sees(t,e){let n=h.camera;if(!h.player||h.player.eyesClosed)return!1;let s=n.getWorldPosition(new A),r=n.getWorldDirection(new A),o=new A(0,1,0).applyQuaternion(n.quaternion);return Ls(s,r,o,n.fov,n.aspect,t,Zy)?h.physics.lineOfSight(s,t,e):!1}isPointObserved(t,e){return this.sees(t,e)}isBoxObserved(t,e){if(!h.player||h.player.eyesClosed)return!1;let n=t.getCenter(new A),s=t.getSize(new A).multiplyScalar(.45);if(this.sees(n,e))return!0;for(let r=0;r<8;r++)if(Vc.set(n.x+(r&1?s.x:-s.x),n.y+(r&2?s.y:-s.y),n.z+(r&4?s.z:-s.z)),this.sees(Vc.clone(),e))return!0;return!1}update(t){if(h.state!=="playing"||!h.player||(this.acc+=t,this.acc<.1))return;let e=this.acc;this.acc=0;for(let n of[...this.objects])n.tick(e,n.observable&&this.isBoxObserved(n.bounds(),n.root))}},Ve=class{constructor(t,e={}){Object.assign(this,{observable:!0,canMove:!0,delay:3,maxMove:3,canAppear:!1,canDisappear:!1,disappearAfter:.6,minChapter:1,requires:null,cooldown:10,minPlayerDist:2.5,checkOccupancy:!0,sound:null,soundVol:.6,condition:null,loop:!1,onNoticed:null,onChanged:null,onDisappeared:null,whileObserved:null},e),this.root=t,this.steps=[],this.stepIndex=-1,this.visible=!0,this.observed=!1,this.observedTime=0,this.unobservedTime=0,this.changedSinceSeen=!1,this.lastEvent=-1/0,h.observation.register(this)}pose(t,e,n,s){return this.steps.push({pose:{p:new A(t,e,n),yaw:s*Math.PI/180}}),this}action(t){return this.steps.push({apply:t}),this}bounds(){return new Qe().setFromObject(this.root)}setVisible(t){this.visible=t,this.root.visible=t,h.physics.setEnabled(this.root,t)}jumpToStep(t){for(let e=0;e<=t&&e<this.steps.length;e++)this.applyStep(this.steps[e]);this.stepIndex=Math.min(t,this.steps.length-1)}ready(){return h.story.chapter<this.minChapter||this.requires&&!h.story.has(this.requires)||h.time-this.lastEvent<this.cooldown?!1:!this.condition||this.condition()}tick(t,e){if(this.observed=e,e){if(this.observedTime+=t,this.unobservedTime=0,!this.visible)return;this.changedSinceSeen&&(this.changedSinceSeen=!1,this.onNoticed?.(this)),this.whileObserved?.(t),this.canDisappear&&this.observedTime>=this.disappearAfter&&h.time-this.lastEvent>=this.cooldown&&(this.setVisible(!1),this.lastEvent=h.time,this.onDisappeared?.(this));return}if(this.observedTime=0,this.unobservedTime+=t,this.unobservedTime<this.delay||!this.ready()||h.player&&this.bounds().getCenter(Vc).setY(0).distanceTo(h.player.position)<this.minPlayerDist)return;if(this.canAppear&&!this.visible){if(this.checkOccupancy&&this.occupied(this.bounds()))return;this.setVisible(!0),this.changed();return}if(!this.canMove||!this.steps.length)return;let n=this.stepIndex+1;if(n>=this.steps.length){if(!this.loop)return;n=0}this.tryStep(this.steps[n])&&(this.stepIndex=n,this.changed())}changed(){this.lastEvent=h.time,this.unobservedTime=0,this.changedSinceSeen=!0,this.sound&&h.audio.playAt(this.sound,this.root.getWorldPosition(new A),this.soundVol,.9+Math.random()*.2),this.onChanged?.(this)}tryStep(t){if(t.pose){if(this.root.position.distanceTo(t.pose.p)>this.maxMove)return!1;let e=this.root.position.clone(),n=this.root.rotation.y;this.root.position.copy(t.pose.p),this.root.rotation.y=t.pose.yaw,this.root.updateMatrixWorld(!0);let s=this.bounds();if(this.root.position.copy(e),this.root.rotation.y=n,this.root.updateMatrixWorld(!0),h.observation.isBoxObserved(s,this.root)||this.checkOccupancy&&this.occupied(s))return!1}return this.applyStep(t),!0}applyStep(t){t.pose&&(this.root.position.copy(t.pose.p),this.root.rotation.y=t.pose.yaw,h.physics.refreshOwner(this.root),h.shadowsDirty=!0),t.apply?.()}occupied(t){let e=t.getCenter(new A).add(new A(0,.06,0)),n=t.getSize(new A).multiplyScalar(.4);return h.physics.overlaps(e.clone().sub(n),e.clone().add(n),this.root,h.player)}destroy(){h.observation.unregister(this)}};var Gc=19,yi=()=>(Gc=Gc*1664525+1013904223>>>0,Gc/4294967296),Pe=()=>yi()*2-1,ee=Math.PI*2,Se=i=>1-Math.exp(-ee*i/22050),_e=i=>new Float32Array(Math.max(1,Math.floor(i*22050))),Jn=i=>Math.max(0,Math.min(1,i));function Dn(i,t,e){let n=new Float32Array(Math.max(i.length,t.length+e));n.set(i);for(let s=0;s<t.length;s++)n[s+e]+=t[s];return n}function Vo(i,t){let e=Math.min(Math.floor(t*22050),Math.floor(i.length/3)),n=i.slice(0,i.length-e);for(let s=0;s<e;s++){let r=s/e;n[s]=i[s]*r+i[n.length+s]*(1-r)}return n}function cn(i,t){let e=_e(i);for(let n=0;n<e.length;n++){let s=n/22050;e[n]=(Pe()*.6+Math.sin(ee*t*s)*.5)*Math.exp(-s*180)*.8}return e}function Ds(i,t,e){let n=_e(t),s=0,r=Se(400);for(let o=0;o<n.length;o++){let a=o/22050;s+=r*(Pe()-s);let l=i*(1+.6*Math.exp(-a*30));n[o]=(Math.sin(ee*l*a)*.9+s*.6)*Math.exp(-a*9/t)*e}return n}function $y(){let i=_e(6);for(let t=0;t<2*22050;t++){let e=t/22050,n=Math.exp(-(e*20%1)*4),s=Math.sin(ee*880*e)*.5+Math.sin(ee*1320*e)*.25+Math.sin(ee*2205*e)*.1;i[t]=s*n*Jn(e*30)*Jn((2-e)*30)*.5}return i}function Ky(){let i=_e(2),t=0,e=Se(5e3);for(let n=0;n<i.length;n++)t+=e*(Pe()-t),i[n]=(t*.5+(yi()<.0015?Pe()*2:0))*.5;return i}function dd(i,t,e){let n=_e(t),s=0,r=Se(200);for(let o=0;o<n.length;o++){let a=o/22050;s+=r*(Pe()-s),n[o]=(Math.sin(ee*i*a)*.5+Math.sin(ee*i*2*a)*.3+Math.sin(ee*i*3*a)*.12+s*e)*.4}return n}function Jy(){let i=dd(50,2,.1);for(let t=0;t<i.length;t++){let e=t/22050;i[t]=i[t]*.6+Math.sign(Math.sin(ee*100*e))*.08+(yi()<8e-4?Pe()*.6:0)}return i}function jy(){let i=_e(4),t=0,e=Se(120);for(let n=0;n<i.length;n++){let s=n/22050;t+=e*(Pe()-t),i[n]=(Math.sin(ee*50*s)*.35+Math.sin(ee*150*s)*.1+t*1.5)*(.9+.1*Math.sin(ee*.5*s))*.35}return i}function Qy(){let i=_e(2),t=cn(.03,2600),e=cn(.03,1900);i.set(t,0);for(let n=0;n<e.length;n++)i[22050+n]+=e[n]*.8;return i}function od(i){let t=_e(.28),e=0,n=Se(900*i);for(let s=0;s<t.length;s++){let r=s/22050;e+=n*(Pe()-e);let o=Math.exp(-r*35),a=r>.05?Math.exp(-(r-.05)*25):0;t[s]=(Math.sin(ee*85*r)*o*.8+e*(o+a*.7)*1.4)*.7}return t}function ad(i){let t=_e(i),e=0,n=0,s=Se(1800),r=yi()*6;for(let o=0;o<t.length;o++){let a=o/22050,l=95+45*Math.sin(a*2.3+r)+25*Math.sin(a*7.1);e+=l/22050;let c=e%1*2-1,u=Math.max(0,Math.sin(ee*(18+8*Math.sin(a*3))*a))**6;n+=s*(c*u-n),t[o]=n*Math.sin(Math.PI*Jn(a/i))*.9}return t}function t_(){let i=_e(.9),t=0,e=0,n=Se(700),s=Se(150);for(let r=0;r<i.length;r++){let o=r/22050;t+=n*(Pe()-t),e+=s*(t-e);let a=.6+.4*Math.sin(ee*31*o+Math.sin(ee*3*o)*4);i[r]=(t-e)*a*Jn(o*12)*Jn((.9-o)*6)*2.2}return i}function fd(){let i=_e(.25);for(let t=0;t<i.length;t++){let e=t/22050;i[t]=Math.sin(ee*(700+1200*Jn(e/.03))*e)*Math.exp(-e*40)*.6}return i}function e_(){let i=_e(3.6),t=0,e=0,n=Se(250),s=Se(1400);for(let r=0;r<i.length;r++){let o=r/22050,a=Pe();t+=n*(a-t),e+=s*(a-e);let l=o<1.3?Math.sin(Math.PI*o/1.3):0,c=o>1.6&&o<3.4?Math.sin(Math.PI*(o-1.6)/1.8)*1.2:0;i[r]=(e-t)*(l*.7+c)*1.6}return i}function n_(){let i=_e(3),t=0,e=0,n=0,s=0,r=Se(1800),o=Se(6e3);for(let a=0;a<i.length;a++){let l=a/22050;a%Math.floor(22050/6)===0&&(s=yi()<.7?yi():0),n+=(s-n)*.0015;let c=Pe();t+=r*(c-t),e+=o*(c-e),i[a]=(e-t)*n*Jn(l*3)*Jn((3-l)*3)*2.2}return i}function i_(){let i=_e(9),t=0,e=0;for(let n=0;n<i.length;n++){let s=n/22050;t=Math.max(-1,Math.min(1,t+Pe()*.02))*.999;let r=.5+.35*Math.sin(ee*.11*s)+.15*Math.sin(ee*.37*s+1);e+=Se(300+500*r)*(Pe()-e),i[n]=(t*.8+e*.5)*r*.6}return i}var ld=[76,79,81,79,76,74,76,-1,72,74,76,74,71,69,-1,-1];function cd(i,t,e){let n=.42*i,s=_e(n*ld.length+1.5);return ld.forEach((r,o)=>{if(r<0)return;let a=440*2**((r-69)/12),l=Math.floor(o*n*22050),c=Math.floor((e?1.4:2.2)*22050);for(let u=0;u<c&&l+u<s.length;u++){let d=u/22050,f=e?Math.exp(-d*3.2):Jn(d*6)*Math.exp(-d*1.6),p=Math.sin(ee*a*d)+(e?.35*Math.sin(ee*a*3.01*d)*Math.exp(-d*9):.2*Math.sin(ee*a*.5*d));s[l+u]+=p*f*t*.5}}),s}function s_(){let i=_e(1.4);for(let t=0;t<3;t++){let e=Ds(110,.18,1),n=Math.floor((t*.32+(t===2?.1:0))*22050);for(let s=0;s<e.length&&n+s<i.length;s++)i[n+s]+=e[s]}return i}function r_(){let i=Dn(cn(.02,3500),cn(.03,2e3),Math.floor(1323)),t=_e(.6),e=0;for(let n=0;n<t.length;n++){let s=n/22050;e+=Se(1200+s*2e3)*(Pe()-e),t[n]=(e*.4+Math.sin(ee*(300+s*400)*s)*.08)*Math.sin(Math.PI*s/.6)}return Dn(i,t,Math.floor(.12*22050))}function Wc(i){let t=_e(i),e=0;for(let n=0;n<t.length;n++){let s=n/22050,r=Pe();e+=Se(800)*(r-e),t[n]=(r-e)*(.25+(yi()<.004?1:0))*Math.sin(Math.PI*s/i)*.5}return t}function o_(){let i=_e(3.4),t=0,e=Se(2500);for(let n=0;n<i.length;n++)t+=e*(Pe()-t),i[n]=t*.45;for(let n=0;n<40;n++){let s=fd(),r=Math.floor(yi()*(i.length-s.length));for(let o=0;o<s.length;o++)i[r+o]+=s[o]*.25}return Vo(i,.3)}function a_(){return Dn(Dn(_e(1.1),Ds(55,.15,1),0),Ds(50,.18,.7),Math.floor(.28*22050))}function l_(){let i=_e(10),t=0,e=Se(160);for(let n=0;n<i.length;n++){let s=n/22050;t+=e*(Pe()-t),i[n]=(Math.sin(ee*55*s)*.3+Math.sin(ee*58.27*s)*.25+Math.sin(ee*110.6*s)*.12+Math.sin(ee*164.8*s)*.05*(.5+.5*Math.sin(ee*.07*s))+t*1.2)*.45}return Vo(i,.8)}function c_(){let i=_e(5),t=0;for(let e=0;e<i.length;e++)t=Math.max(-1,Math.min(1,t+Pe()*.015))*.998,i[e]=t*.3;return Vo(i,.5)}function h_(){let i=_e(2.6),t=0;for(let e=0;e<i.length;e++){let n=e/22050;t+=Se(200+n*1500)*(Pe()-t),i[e]=(t+Math.sin(ee*73*n)*.4+Math.sin(ee*77.8*n)*.4)*(n/2.6)**2.5*.6}return i}var pd={ring:$y,static:Ky,hum:()=>dd(50,2,.25),buzz:Jy,fridge:jy,tick:Qy,step:()=>od(1),stepHeavy:()=>od(.6),creak:()=>ad(1.3),doorOpen:()=>Dn(ad(.9),cn(.02,1800),0),doorClose:()=>Dn(Ds(70,.25,.9),cn(.02,1400),0),locked:()=>Dn(cn(.03,900),cn(.03,1100),Math.floor(.09*22050)),scrape:t_,drip:fd,breath:e_,whisper:n_,wind:()=>Vo(i_(),.6),musicBox:()=>cd(1,.55,!0),lullaby:()=>cd(1.6,.35,!1),knock:s_,switch:()=>cn(.015,2500),shutter:r_,pickup:()=>Wc(.25),paper:()=>Wc(.5),water:o_,heartbeat:a_,drone:l_,thud:()=>Ds(45,.5,1),unlock:()=>Dn(cn(.02,3e3),cn(.03,2200),Math.floor(.12*22050)),breaker:()=>Dn(Ds(60,.3,1),cn(.05,3200),0),roomTone:c_,stinger:h_,phonePickup:()=>Dn(cn(.03,700),Wc(.15),0)},hd=[[750,1200],[450,1900],[320,2250],[520,900],[370,850]],ud=i=>i*i;function md(i,t,e,n){let s=n>>>0||1,r=()=>(s=s*1664525+1013904223>>>0,s/4294967296),o=Math.max(2,Math.floor(i.length/3)),a=.17,l=_e(o*a+.4),c=0;for(let u=0;u<o;u++){let d=hd[Math.floor(r()*hd.length)],f=Math.floor(u*a*22050),p=Math.floor(a*(.8+.4*r())*22050),y=r()<.08,_=r()<.35,g=t*(1.1-.25*(u/o))*(.95+.1*r()),m=Math.max(1,Math.floor(3200/g)),w=new Float32Array(m+1);for(let E=1;E<=m;E++){let M=E*g;w[E]=Math.exp(-ud((M-d[0])/110))+.6*Math.exp(-ud((M-d[1])/160))+.08/E}for(let E=0;E<p&&f+E<l.length;E++){let M=E/p,O=Math.sin(Math.PI*M);y&&(O*=.05);let C=ee*g*(f+E)/22050,R=0;for(let L=1;L<=m;L++)w[L]>.02&&(R+=Math.sin(C*L)*w[L]);if(_&&M<.25){let L=r()*2-1;c+=Se(3e3)*(L-c),R+=(L-c)*1.5*(1-M*4)}l[f+E]+=R*O*.22}}if(e){let u=0,d=0;for(let f=0;f<l.length;f++)u+=Se(3e3)*(l[f]-u),d+=Se(350)*(u-d),l[f]=Math.tanh((u-d)*2.2+(r()*2-1)*.015)*.6}return l}var u_=["sfx","ambience","music","voice","unseen"],Go=class{constructor(){this.ctx=null,this.buffers=new Map,this.voices=new Map,this.loops=[],this.oneShots=[],this.eyes=0}init(){if(this.ctx){this.ctx.resume?.();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;let e=this.ctx;this.master=e.createGain(),this.shaper=e.createWaveShaper(),this.setDistortion(0),this.filter=e.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=22e3,this.master.connect(this.shaper).connect(this.filter).connect(e.destination),this.cats={};for(let n of u_)this.cats[n]=e.createGain(),this.cats[n].connect(this.master);for(let n of this.loops)n.wanted&&n.play()}setDistortion(t){if(this._dist===t)return;this._dist=t;let e=512,n=new Float32Array(e),s=t*40;for(let r=0;r<e;r++){let o=r*2/e-1;n[r]=s?(1+s)*o/(1+s*Math.abs(o)):o}this.shaper.curve=n}buffer(t){if(!this.ctx)return null;let e=this.buffers.get(t);if(!e){let n=pd[t]?.();if(!n)return null;e=this.ctx.createBuffer(1,n.length,22050),e.copyToChannel(n,0),this.buffers.set(t,e)}return e}voiceBuffer(t,e,n){if(!this.ctx)return null;let s=`${e}|${n}|${t}`,r=this.voices.get(s);if(!r){let o=0;for(let l of t)o=o*31+l.charCodeAt(0)|0;let a=md(t,e,n,o);r=this.ctx.createBuffer(1,a.length,22050),r.copyToChannel(a,0),this.voices.set(s,r)}return r}chain(t,e,n,s){let r=this.ctx,o=r.createGain();if(o.gain.value=t,n){let a=r.createPanner();return a.panningModel="HRTF",a.distanceModel="inverse",a.refDistance=.8,a.maxDistance=s,a.rolloffFactor=1.2,a.positionX.value=n.x,a.positionY.value=n.y,a.positionZ.value=n.z,o.connect(a).connect(this.cats[e]),{g:o,p:a}}return o.connect(this.cats[e]),{g:o,p:null}}playBuffer(t,e,n=1,s=1,r="sfx",o=14){if(!this.ctx||!t)return null;let a=this.ctx.createBufferSource();a.buffer=t,a.playbackRate.value=s;let{g:l,p:c}=this.chain(n,r,e,o);a.connect(l),a.start();let u={src:a,g:l,p:c,ended:!1};if(a.onended=()=>u.ended=!0,this.oneShots.push(u),this.oneShots.length>40){let d=this.oneShots.shift();try{d.src.stop()}catch{}}return u}playAt(t,e,n=1,s=1,r="sfx",o=14){return this.playBuffer(this.buffer(t),e,n,s,r,o)}play2D(t,e=1,n="sfx",s=1){return this.playBuffer(this.buffer(t),null,e,s,n)}loop(t,e,n,s,r=10,o=!0){let a=this,l={name:t,follow:e,volume:n,cat:s,maxDist:r,src:null,g:null,p:null,pitch:1,get isPlaying(){return!!this.src},play(){if(this.wanted=!0,this.src||!a.ctx)return;let c=a.buffer(this.name);if(!c)return;let u=this.position(),{g:d,p:f}=a.chain(this.volume,this.cat,u,this.maxDist),p=a.ctx.createBufferSource();p.buffer=c,p.loop=!0,p.playbackRate.value=this.pitch,p.connect(d),p.start(0,Math.random()*c.duration*.9),this.src=p,this.g=d,this.p=f},stop(){if(this.wanted=!1,this.src){try{this.src.stop()}catch{}this.src.disconnect(),this.g.disconnect(),this.src=null}},position(){return this.follow instanceof Ne?this.follow.getWorldPosition(new A):this.follow},setVolume(c){this.volume=c,this.g&&(this.g.gain.value=c)}};return this.loops.push(l),o&&l.play(),l}stopAll(){for(let t of this.oneShots)try{t.src.stop()}catch{}this.oneShots=[];for(let t of this.loops)t.stop();this.loops=[]}setPaused(t){this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}update(t){if(!this.ctx)return;let e=h.settings,n=h.state==="ending",s=!!h.player&&h.player.eyesClosed&&h.state==="playing";this.eyes=Math.max(0,Math.min(1,this.eyes+(s?2.5:-2.5)*t));let r=e.sfxVolume,o=(y,_)=>this.cats[y].gain.setTargetAtTime(_,this.ctx.currentTime,.05);o("music",e.musicVolume),o("voice",Math.max(r,.6)),o("sfx",n?0:r*(1+.2*this.eyes)),o("ambience",n?0:r*(1-.45*this.eyes)),o("unseen",n?0:r*this.eyes),this.master.gain.setTargetAtTime(e.masterVolume,this.ctx.currentTime,.05);let a=h.state==="playing"?h.perception.distortion:0,l=Math.max(0,Math.min(1,(a-.65)/.35));this.setDistortion(Math.round(l*10)/10*.35),this.filter.frequency.setTargetAtTime(22e3-19800*l*.6,this.ctx.currentTime,.1);let c=this.ctx.listener,u=h.camera,d=u.getWorldPosition(new A),f=u.getWorldDirection(new A),p=new A(0,1,0).applyQuaternion(u.quaternion);c.positionX?(c.positionX.value=d.x,c.positionY.value=d.y,c.positionZ.value=d.z,c.forwardX.value=f.x,c.forwardY.value=f.y,c.forwardZ.value=f.z,c.upX.value=p.x,c.upY.value=p.y,c.upZ.value=p.z):(c.setPosition(d.x,d.y,d.z),c.setOrientation(f.x,f.y,f.z,p.x,p.y,p.z));for(let y of this.loops)if(y.p&&y.follow instanceof Ne){let _=y.position();y.p.positionX.value=_.x,y.p.positionY.value=_.y,y.p.positionZ.value=_.z}this.oneShots=this.oneShots.filter(y=>!y.ended)}};function d_(i,t){let e=t==="phone"||t==="radio"||t==="tape";switch(i){case jt.Child:return{pitch:255,phone:t==="phone"||t==="tape"};case jt.Woman:return{pitch:190,phone:e};case jt.Radio:return{pitch:128,phone:!0};case jt.Tv:return{pitch:120,phone:!0};case jt.Man:return{pitch:112,phone:e};default:return{pitch:92,phone:!0}}}var Wo=class{constructor(){this.queue=[],this.current=null,this.lineEnd=0,this.subtitle=null,this.speaker=""}get busy(){return!!this.current||this.queue.length>0}play(t,e="thought",n=null,s=null){if(!t?.length){s?.();return}e==="thought"&&(this.queue=this.queue.filter(r=>r.device!=="thought"||r.done)),this.queue.push({lines:t,device:e,source:n,done:s,i:0})}thought(t){this.play([{speaker:"",text:t}],"thought")}stopAll(){if(this.queue=[],this.current=null,this.subtitle=null,this.playing)try{this.playing.src.stop()}catch{}}update(){if(h.state==="paused"||this.current&&h.time<this.lineEnd)return;if(this.current&&(this.current.i++,this.current.i>=this.current.lines.length)){let s=this.current.done;this.current=null,this.subtitle=null,s?.()}if(!this.current){if(!this.queue.length)return;this.current=this.queue.shift()}let t=this.current,e=t.lines[t.i];this.speaker=e.speaker,this.subtitle=e.text;let n=1.4+e.text.length*.055;if(t.device!=="thought"&&e.speaker){let s=d_(e.speaker,t.device),r=h.audio.voiceBuffer(e.text,s.pitch,s.phone),o=t.source?t.source.getWorldPosition(new A):null;this.playing=h.audio.playBuffer(r,o,.9,1,"voice",8),r&&(n=Math.max(n,r.duration+.3))}this.lineEnd=h.time+n,h.story.journal(e.speaker?`${e.speaker}: ${e.text}`:`(${e.text})`)}};var Ge=256;function Xo(i,t,e){let n=i*374761393+t*668265263+e*2147483647|0;return n=(n^n>>>13)*1274126177,((n^n>>>16)>>>0)/4294967295}function yd(i){return i*i*(3-2*i)}function f_(i,t,e,n=0){let s=Math.floor(i),r=Math.floor(t),o=yd(i-s),a=yd(t-r),l=p=>(p%e+e)%e,c=Xo(l(s),l(r),n),u=Xo(l(s+1),l(r),n),d=Xo(l(s),l(r+1),n),f=Xo(l(s+1),l(r+1),n);return c+(u-c)*o+(d-c)*a+(c-u-d+f)*o*a}function jn(i,t,e,n=4,s=0){let r=0,o=.5,a=1;for(let l=0;l<n;l++)r+=f_(i*a,t*a,e*a,s+l)*o,o*=.5,a*=2;return r}function Me(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,e}function _i(i,t=Ge){let e=Me(t,t),n=e.getContext("2d"),s=n.createImageData(t,t),r=s.data;for(let o=0;o<t;o++)for(let a=0;a<t;a++){let[l,c,u]=i(a,o),d=(o*t+a)*4;r[d]=Math.max(0,Math.min(255,l*255)),r[d+1]=Math.max(0,Math.min(255,c*255)),r[d+2]=Math.max(0,Math.min(255,u*255)),r[d+3]=255}return n.putImageData(s,0,0),e}function pn(i,t=!0){let e=new ao(i);return e.colorSpace=ge,t&&(e.wrapS=e.wrapT=Fi),e.anisotropy=4,e}var Xc=(i,t,e)=>i.map((n,s)=>n+(t[s]-n)*e),xi=(i,t)=>i.map(e=>e*t),Gt={wallpaper(i,t,e){return _i((n,s)=>{let r=jn(n/64,s/64,4),o;if(e===0)o=Math.sin(n/Ge*Math.PI*16)>.6?1:0;else if(e===1){let l=n%32-16,c=s%40-20;o=l*l/30+c*c/70<1?1:0}else if(e===3){let l=n%64-32,c=(s+Math.floor(n/64)*32)%64-32;o=Math.abs(l)+Math.abs(c)<7?1:0}else o=n%64<3||n%64>61?1:0;let a=Xc(i,t,o*.6);return a=xi(a,.85+.2*r),Xc(a,[.45,.4,.3],Math.min(1,s/Ge*.4+r*.3)*.25)})},stained(i){let t=i.getContext("2d"),e=t.getImageData(0,0,i.width,i.height),n=e.data;for(let s=0;s<i.height;s++)for(let r=0;r<i.width;r++){let o=Math.max(0,Math.min(1,(jn(r/96,s/96,i.width/96,4,7)-.55)*6))*.7,a=(s*i.width+r)*4;n[a]*=1-o*.38,n[a+1]*=1-o*.45,n[a+2]*=1-o*.58}return t.putImageData(e,0,0),i},grain(i,t,e){return _i((n,s)=>xi(i,1-t+jn(n/(Ge/e),s/(Ge/e),e)*t*2))},tiles(i,t,e,n=!1){let s=Ge/e;return _i((r,o)=>{if(r%s<2||o%s<2)return t;let l=Math.floor(r/s)+Math.floor(o/s)*7,c=xi(i,.92+l*37%11/11*.08+jn(r/40,o/40,Ge/40)*.1);return n&&(Math.floor(r/s)+Math.floor(o/s))%2===0&&(c=xi(c,.9)),c})},planks(i){return _i((t,e)=>{let n=Math.floor(t/32),s=(e+n*97%Ge)%Ge,r=t%32<1||s%128<1,o=jn(t/6+n*13,s/60,64)*.5+Math.sin((t+jn(s/20,n,16)*20)*.6)*.08,a=xi(i,.8+o*.5+n*29%7*.025);return r?xi(a,.45):a})},wood(i){return _i((t,e)=>xi(i,.85+(Math.sin(e*.08+jn(t/40,e/40,Ge/40)*8)*.5+.5)*.3))},rug(){return _i((i,t)=>{let e=Math.abs(i-Ge/2)/(Ge/2),n=Math.abs(t-Ge/2)/(Ge/2),s=Math.max(e,n),r=[.42,.16,.13];return s>.85?r=[.25,.22,.2]:s>.78?r=[.6,.5,.35]:Math.abs(e-n)<.05&&(r=[.55,.45,.3]),xi(r,.8+jn(i/4,t/4,64)*.3)})},folds(){return _i((i,t)=>{let e=Math.sin(i/Ge*Math.PI*12+jn(i/80,t/80,4)*3)*.5+.5;return[.75+e*.3,.75+e*.3,.75+e*.3]})},nightSky(){return _i((i,t)=>{let e=1-t/Ge,n=Xc([.02,.025,.04],[.09,.1,.14],e);return e<.55&&(Math.floor(i/18)*31+Math.floor(t/22)*17)%23===0&&i%18>6&&t%22>9&&(n=[.35,.28,.15]),n})},static(){let i=Me(128,128),t=i.getContext("2d"),e=t.createImageData(128,128);for(let n=0;n<e.data.length;n+=4){let s=Math.random()**2*255;e.data[n]=e.data[n+1]=s,e.data[n+2]=s*1.05,e.data[n+3]=255}return t.putImageData(e,0,0),i}},tn='"Segoe Print", "Bradley Hand", "Comic Sans MS", "Chalkboard SE", cursive';function Hi(i,t,e,n,s,r,o){i.strokeStyle=o,i.lineWidth=r,i.lineCap="round",i.lineJoin="round",i.beginPath(),t==="circle"?i.arc(e,n,s,0,Math.PI*2):t==="triangle"?(i.moveTo(e,n-s),i.lineTo(e+s*.95,n+s*.75),i.lineTo(e-s*.95,n+s*.75),i.closePath()):t==="square"?i.rect(e-s*.8,n-s*.8,s*1.6,s*1.6):(i.moveTo(e-s*.8,n-s*.8),i.lineTo(e+s*.8,n+s*.8),i.moveTo(e+s*.8,n-s*.8),i.lineTo(e-s*.8,n+s*.8)),i.stroke()}function Yo(i,t,e,n,s,r,o=tn,a=!0){let l=Me(t,e),c=l.getContext("2d");r&&(c.fillStyle=r,c.fillRect(0,0,t,e)),c.fillStyle=s,c.textAlign="center",c.textBaseline="middle",c.font=`${n}px ${o}`;let u=i.split(`
`),d=n*1.25;return u.forEach((f,p)=>{c.save(),c.translate(t/2+(a?(Math.random()-.5)*n*.3:0),e/2+(p-(u.length-1)/2)*d),a&&c.rotate((Math.random()-.5)*.06),c.fillText(f,0,0),c.restore()}),l}function _d(i,t,e,n,s=256,r=128){let o=Me(s,r),a=o.getContext("2d");return n&&(a.fillStyle=n,a.fillRect(0,0,s,r)),Hi(a,i,r/2,r/2,r*.3,r*.06,e),a.fillStyle=e,a.font=`${r*.4}px ${tn}`,a.textBaseline="middle",a.fillText(t,r*1,r/2),o}function Sn(i){let t=Me(256,192),e=t.getContext("2d");e.fillStyle="#ebe6d6",e.fillRect(0,0,256,192);let n=e.createLinearGradient(0,10,0,182);n.addColorStop(0,"#9ea89e"),n.addColorStop(.6,"#8c9682"),n.addColorStop(1,"#737f52"),e.fillStyle=n,e.fillRect(10,10,236,172);let s=(r,o,a,l,c)=>{e.fillStyle=c,e.beginPath(),e.ellipse(r,o,a,l,0,0,Math.PI*2),e.fill()};return e.fillStyle="#474d59",e.fillRect(52,70,46,112),s(75,52,15,19,"#b8947a"),s(75,38,15,8,"#33241a"),e.fillStyle="#8c524d",e.fillRect(158,78,42,104),s(179,60,14,18,"#b8947a"),s(179,50,17,13,"#59381f"),e.strokeStyle="#474d59",e.lineWidth=9,e.lineCap="round",e.beginPath(),e.moveTo(98,100),e.lineTo(118,128),e.stroke(),i&&(e.fillStyle="#ccb34d",e.fillRect(110,122,34,60),s(127,108,12,14,"#b8947a"),s(127,99,13,8,"#40291a")),lr(e,256,192,14),t}function lr(i,t,e,n){let s=i.getImageData(0,0,t,e),r=s.data;for(let o=0;o<r.length;o+=4){let a=(Math.random()-.5)*n;r[o]+=a,r[o+1]+=a,r[o+2]+=a}i.putImageData(s,0,0)}function cr(i,t,e,n,s){let r=Me(n,s);return r.getContext("2d").drawImage(i,t,e,n,s,0,0,n,s),r}function xd(){let i=Me(256,192),t=i.getContext("2d");t.fillStyle="#ebe6d6",t.fillRect(0,0,256,192);let e=(o,a,l)=>{t.strokeStyle=l,t.lineWidth=a,t.lineCap="round",t.beginPath(),o.forEach(([c,u],d)=>d?t.lineTo(c,u):t.moveTo(c,u)),t.stroke()},n="#b3261a",s="#595961",r="#334db3";e([[20,30],[236,30],[236,140],[20,140],[20,30]],2,n),e([[128,30],[128,140]],2,n),e([[20,85],[236,85]],2,n);for(let o=0;o<4;o++){let a=60+o%2*108,l=40+Math.floor(o/2)*55;e([[a,l],[a,l+38]],4,s),t.fillStyle=s,t.beginPath(),t.arc(a,l-3,5,0,7),t.fill()}return t.fillStyle=r,t.beginPath(),t.ellipse(180,128,26,7,0,0,7),t.fill(),t.fillStyle=n,t.font=`15px ${tn}`,t.textAlign="center",t.fillText("DADDY DONT LOOK AWAY",128,170),i}function vd(i){let t=Me(128,96),e=t.getContext("2d");e.fillStyle="#ebe6d6",e.fillRect(0,0,128,96);let n=(s,r,o)=>{e.strokeStyle=o,e.fillStyle=o,e.lineWidth=4,e.beginPath(),e.moveTo(s,80-r),e.lineTo(s,80),e.stroke(),e.beginPath(),e.arc(s,72-r,7,0,7),e.fill()};return n(30,48,"#4d4d59"),n(98,44,"#334db3"),n(64,26,"#d9b333"),i%3===0&&(e.fillStyle="#b3261a",e.font=`14px ${tn}`,e.fillText("LOOK",8,92)),t}var Md=new Map,Dt=(i,t=null,e=.85,n=0)=>new fi({color:i,map:t,roughness:e,metalness:n}),ne=i=>pn(i);function Yc(i,t,e=1){return new fi({color:i,emissive:t,emissiveIntensity:e,roughness:.5})}var p_=(i,t=null)=>new Mn({color:i,map:t});function qc(i,t=16777215,e=!1){let n=e?new Mn({map:i,color:t}):new fi({map:i,color:t,roughness:.9});return n.alphaTest=.5,n.transparent=!1,n}var en=(i,t=.8)=>Dt(16777215,pn(i,!1),t),qt=(i,t,e)=>new mt().setRGB(i,t,e,ge);function m_(i){switch(i){case"wallpaper_living":return Dt(16777215,ne(Gt.wallpaper([.55,.5,.4],[.46,.42,.33],0)),.95);case"wallpaper_bed":return Dt(16777215,ne(Gt.wallpaper([.42,.47,.42],[.36,.4,.35],1)),.95);case"wallpaper_hall":return Dt(16777215,ne(Gt.wallpaper([.5,.46,.39],[.4,.37,.31],2)),.95);case"wallpaper_child":return Dt(16777215,ne(Gt.wallpaper([.55,.48,.5],[.6,.56,.5],3)),.95);case"wallpaper_stained":return Dt(16777215,ne(Gt.stained(Gt.wallpaper([.48,.44,.36],[.38,.34,.28],2))),.95);case"plaster":return Dt(qt(.62,.6,.56),ne(Gt.grain([.9,.9,.88],.08,6)),.95);case"ceiling":return Dt(qt(.55,.54,.5),ne(Gt.stained(Gt.grain([.9,.9,.87],.06,3))),.98);case"tile_bath":return Dt(16777215,ne(Gt.tiles([.62,.68,.66],[.35,.37,.35],6)),.35);case"tile_kitchen":return Dt(16777215,ne(Gt.tiles([.6,.58,.5],[.3,.28,.25],4,!0)),.5);case"floor_wood":return Dt(16777215,ne(Gt.planks([.36,.25,.17])),.65);case"floor_tile":return Dt(16777215,ne(Gt.tiles([.45,.45,.43],[.22,.22,.21],3)),.7);case"carpet":return Dt(qt(.36,.3,.28),ne(Gt.grain([1,1,1],.18,40)),1);case"rug":return Dt(16777215,ne(Gt.rug()),1);case"concrete":return Dt(qt(.42,.42,.4),ne(Gt.stained(Gt.grain([1,1,1],.16,5))),.9);case"concrete_wall":return Dt(qt(.45,.44,.41),ne(Gt.stained(Gt.grain([1,1,1],.12,3))),.95);case"wood_dark":return Dt(16777215,ne(Gt.wood([.24,.16,.11])),.6);case"wood_light":return Dt(16777215,ne(Gt.wood([.5,.38,.26])),.65);case"wood_painted":return Dt(qt(.72,.7,.63),ne(Gt.grain([1,1,1],.06,8)),.7);case"door":return Dt(qt(.62,.58,.5),ne(Gt.grain([1,1,1],.07,10)),.7);case"door_front":return Dt(16777215,ne(Gt.wood([.3,.2,.14])),.55);case"fabric_sofa":return Dt(qt(.33,.36,.3),ne(Gt.grain([1,1,1],.15,30)),1);case"fabric_bed":return Dt(qt(.62,.6,.55),ne(Gt.grain([1,1,1],.1,25)),1);case"fabric_child":return Dt(qt(.75,.6,.62),ne(Gt.grain([1,1,1],.1,25)),1);case"curtain":return Dt(qt(.35,.28,.22),ne(Gt.folds()),1);case"sheet":return Dt(qt(.7,.7,.66),ne(Gt.folds()),1);case"metal":return Dt(qt(.45,.45,.43),ne(Gt.grain([1,1,1],.1,20)),.5,.7);case"chrome":return Dt(qt(.75,.75,.75),null,.15,1);case"brass":return Dt(qt(.7,.55,.25),null,.3,1);case"porcelain":return Dt(qt(.85,.85,.82),null,.25);case"appliance":return Dt(qt(.78,.76,.7),ne(Gt.grain([1,1,1],.04,4)),.5);case"plastic_dark":return Dt(qt(.12,.11,.1),null,.6);case"plastic_beige":return Dt(qt(.68,.63,.52),null,.6);case"plastic_red":return Dt(qt(.55,.08,.07),null,.6);case"screen_off":return Dt(qt(.03,.04,.04),null,.1);case"window_night":return p_(16777215,ne(Gt.nightSky()));case"cardboard":return Dt(qt(.5,.4,.27),ne(Gt.grain([1,1,1],.12,12)),1);case"paper":return Dt(qt(.85,.83,.76),null,.9);case"black":return Dt(qt(.02,.02,.02),null,.9);case"figure":return Dt(qt(.015,.015,.018),null,1);case"clothes":return Dt(qt(.24,.26,.3),ne(Gt.grain([1,1,1],.1,30)),1);case"trousers":return Dt(qt(.16,.15,.14),null,1);case"skin":return Dt(qt(.62,.5,.42),null,.75);case"hair":return Dt(qt(.12,.09,.07),null,.8);case"child_clothes":return Dt(qt(.75,.65,.3),null,1);case"red_shoe":return Dt(qt(.6,.07,.06),null,.4);case"rabbit":return Dt(qt(.75,.72,.66),ne(Gt.grain([1,1,1],.15,30)),1);case"bulb":return Yc(qt(1,.92,.75),qt(1,.85,.6),1.6);case"bulb_off":return Dt(qt(.25,.24,.22),null,.5);case"lampshade":return Dt(qt(.75,.62,.42),ne(Gt.grain([1,1,1],.08,20)),1);case"water":return Dt(qt(.15,.2,.22),null,.05);case"dust":return new Qs({color:12564643,size:.012,transparent:!0,opacity:.45,depthWrite:!1})}return console.warn("Unknown material",i),Dt(16711935)}function $e(i){let t=Md.get(i);return t||(t=m_(i),t.name=i,Md.set(i,t)),t}var qo;function bd(){return qo||(qo=pn(Gt.static()),qo.magFilter=ze),qo}var Zo=class{constructor(t,e,n,s){this.hinge=t,this.frame=e,this.label=n,this.openAngle=s,this.angle=0,this.target=0,this.isLocked=null,this.onLocked=null,this.onOpened=null}get isOpen(){return this.target!==0}get fullyOpen(){return Math.abs(this.target)>=Math.abs(this.openAngle)-1}toggle(){if(!this.fullyOpen&&!this.isOpen&&this.isLocked?.()){h.audio.playAt("locked",this.worldPos(),.8),this.onLocked?.();return}this.setOpen(!this.fullyOpen)}setOpen(t,e=!0){this.target=t?this.openAngle:0,e&&h.audio.playAt(t?"doorOpen":"doorClose",this.worldPos(),.7,.9+Math.random()*.2),t&&this.onOpened?.()}setAngleInstant(t){this.angle=this.target=t,this.apply()}worldPos(){return this.hinge.getWorldPosition(new A).setY(1.2)}apply(){this.hinge.rotation.y=this.angle*Math.PI/180,h.physics.refreshOwner(h.physics.ownerOf(this.hinge)),h.shadowsDirty=!0}update(t){if(this.angle===this.target)return;let e=150*t;this.angle=Math.abs(this.target-this.angle)<=e?this.target:this.angle+Math.sign(this.target-this.angle)*e,this.apply()}};var Zc=i=>{let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)};function Ns(i){let t=Math.floor(i),e=i-t,n=e*e*(3-2*e);return Zc(t)+(Zc(t+1)-Zc(t))*n}var $o=class{constructor(t,e,n){this.light=t,this.bulbMat=e,this.base=n,this.on=!0,this.hasPower=null,this.alwaysUnstable=!1,this.flickerUntil=0,this.seed=Math.random()*100,this.bulbColor=e?e.emissive.clone():null}get powered(){return!this.hasPower||this.hasPower()}get lit(){return this.on&&this.powered}flicker(t){this.flickerUntil=Math.max(this.flickerUntil,h.time+t)}update(){let t=this.lit?1:0;if(t>0){let e=h.time;e<this.flickerUntil?t=Ns(e*18+this.seed)>.45?1:.05:(this.alwaysUnstable||h.perception.distortion>.65)&&Ns(e*2.5+this.seed)>.78&&(t=Ns(e*25+this.seed*3)>.5?.9:.15)}this.light.intensity=this.base*t,this.bulbMat&&(this.bulbMat.emissiveIntensity=1.6*t)}};var Gi=1,Wi=2,wn=new mt(1,.78,.52),$c=new mt(.75,.85,1),Vi=Math.PI/180,Sd=new Map;function wd(i,t,e){let n=`${i.toFixed(3)}|${t.toFixed(3)}|${e.toFixed(3)}`,s=Sd.get(n);if(s)return s;s=new di(i,t,e);let r=s.attributes.uv,o=[[e,t],[e,t],[i,e],[i,e],[i,t],[i,t]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){let c=a*4+l;r.setXY(c,r.getX(c)*o[a][0],r.getY(c)*o[a][1])}return Sd.set(n,s),s}var g_={cube:()=>new di(1,1,1),sphere:()=>new ws(.5,20,14),cylinder:()=>new fo(.5,.5,2,20),capsule:()=>new Ss(.5,1,6,14)},Ed={},vi=class{constructor(t){this.root=t,this.spawns={},this.ceiling=2.7,this.lights=[],this.doors=[],this.updaters=[],this.zones=[]}get hasPlayer(){return!0}has(t){return h.story.has(t)}get chapter(){return h.story.chapter}spawn(t,e,n,s,r){this.spawns[t]={pos:new A(e,n,s),yaw:r*Vi}}getSpawn(t){return this.spawns[t]||this.spawns.default}onEntered(){}onBlackout(){}update(t){for(let e of this.doors)e.update(t);for(let e of this.lights)e.update();for(let e of this.updaters)e(t);if(h.player&&h.state==="playing")for(let e of this.zones)e.active&&!e.active()||Math.hypot(h.player.position.x-e.p.x,h.player.position.z-e.p.z)>e.r||(e.rate>0?h.perception.recover(e.rate):h.perception.drain(-e.rate))}thought(t){h.dialogue.thought(t)}addMesh(t,e,n){return t.castShadow=t.receiveShadow=!0,(e||this.root).add(t),n&&h.physics.add(t),t}box(t,e,n,s,{parent:r,collide:o=!0,yaw:a=0}={}){let l=new Ee(wd(n[0],n[1],n[2]),typeof s=="string"?$e(s):s);return l.name=t,l.position.set(e[0],e[1],e[2]),l.rotation.y=a*Vi,this.addMesh(l,r,o)}prim(t,e,n,s,r,{parent:o,collide:a=!0,euler:l}={}){let c=Ed[t]||(Ed[t]=g_[t]()),u=new Ee(c,typeof r=="string"?$e(r):r);return u.name=e,u.position.set(n[0],n[1],n[2]),u.scale.set(s[0],s[1],s[2]),l&&u.rotation.set(l[0]*Vi,l[1]*Vi,l[2]*Vi,"YXZ"),this.addMesh(u,o,a)}panel(t,e,n,s,r,{parent:o,layer:a=0,collide:l=!1}={}){let c=new Ee(new bs(n[0],n[1]),r);if(c.name=t,c.position.set(e[0],e[1],e[2]),Math.abs(s[1])>.9?c.rotation.x=-Math.sign(s[1])*Math.PI/2:c.rotation.y=Math.atan2(s[0],s[2]),c.receiveShadow=!0,a&&c.layers.set(a),(o||this.root).add(c),l){let u=new Ee(wd(n[0],n[1],.03),$e("black"));u.visible=!1,c.add(u),h.physics.add(u,{solid:!1})}return c}group(t,e=[0,0,0],n=0,s){let r=new qe;return r.name=t,r.position.set(e[0],e[1],e[2]),r.rotation.y=n*Vi,(s||this.root).add(r),r}interact(t,e,n,{enabled:s,promptFn:r,maxDist:o=2.3}={}){return t.userData.interact={prompt:e,onUse:n,enabled:s,promptFn:r,maxDist:o},t.userData.interact}pickup(t,e,n){this.interact(t,e,()=>{n(),h.physics.removeUnder(t),h.physics.entries=h.physics.entries.filter(s=>s.mesh!==t),t.removeFromParent()})}wallX(t,e,n,s,r,...o){this.wall(!0,t,e,n,s,r,o)}wallZ(t,e,n,s,r,...o){this.wall(!1,t,e,n,s,r,o)}wall(t,e,n,s,r,o,a){a=a.map(c=>Object.assign({h:2.1,b:0},c)).sort((c,u)=>c.c-u.c);let l=n;for(let c of a){let u=c.c-c.w/2,d=c.c+c.w/2;u>l&&this.wallSeg(t,e,l,u,0,this.ceiling,r,o),c.b>0&&this.wallSeg(t,e,u,d,0,c.b,r,o),this.wallSeg(t,e,u,d,c.h,this.ceiling,r,o),l=d}l<s&&this.wallSeg(t,e,l,s,0,this.ceiling,r,o)}wallSeg(t,e,n,s,r,o,a,l){let c=s-n,u=o-r,d=(n+s)/2,f=.12,p=f/4;c<=.001||u<=.001||(t?(this.box("Wall",[d,r+u/2,e-p],[c,u,f/2],a),this.box("Wall",[d,r+u/2,e+p],[c,u,f/2],l),r<=0&&this.box("Skirting",[d,.05,e],[c,.1,f+.03],"wood_painted",{collide:!1})):(this.box("Wall",[e-p,r+u/2,d],[f/2,u,c],a),this.box("Wall",[e+p,r+u/2,d],[f/2,u,c],l),r<=0&&this.box("Skirting",[e,.05,d],[f+.03,.1,c],"wood_painted",{collide:!1})))}room(t,e,n,s,r,o,a="ceiling"){this.box("Floor_"+t,[(e+s)/2,-.05,(n+r)/2],[s-e,.1,r-n],o),this.box("Ceiling_"+t,[(e+s)/2,this.ceiling+.05,(n+r)/2],[s-e,.1,r-n],a)}ceilingLight(t,e,n,s,r,{shadows:o=!0,power:a=null,bare:l=!1}={}){let c=this.group(t,e),u=Yc(new mt(1,.92,.75),n.clone(),1.6);l?(this.prim("cylinder","Cord",[0,.2,0],[.01,.2,.01],"black",{parent:c,collide:!1}),this.prim("sphere","Bulb",[0,0,0],[.09,.09,.09],u,{parent:c,collide:!1})):(this.prim("cylinder","Fixture",[0,.12,0],[.1,.02,.1],"metal",{parent:c,collide:!1}),this.prim("sphere","Globe",[0,0,0],[.28,.2,.28],u,{parent:c,collide:!1})),c.children.forEach(p=>p.castShadow=!1);let d=new $n(n,s*h.lightScale,r,1.6);d.position.set(0,-.18,0),o&&h.settings.shadows&&(d.castShadow=!0,d.shadow.mapSize.set(512,512),d.shadow.bias=-.004,d.shadow.radius=3,d.shadow.camera.near=.1,d.shadow.camera.far=r,d.shadow.autoUpdate=!1,d.shadow.needsUpdate=!0),c.add(d);let f=new $o(d,u,s*h.lightScale);return f.hasPower=a,this.lights.push(f),f}pointLight(t,e,n,s){let r=new $n(e,n*h.lightScale,s,1.6);return r.position.set(t[0],t[1],t[2]),this.root.add(r),r}lightSwitch(t,e,n,...s){let r=this.box("LightSwitch",t,[.08,.12,.02],"plastic_beige",{yaw:Math.atan2(e[0],e[2])/Vi}),o=this.interact(r,"Switch light",()=>{if(h.audio.playAt("switch",new A(...t),.6),n&&!n()){h.notify("Nothing happens. There's no power.");return}let a=!s[0].on;for(let l of s)l.on=a},{maxDist:2});return o.promptFn=()=>s[0].on?"Switch light off":"Switch light on",r}makeDoor(t,e,n,s,r,o=95,a=2.05){let l=this.group("DoorFrame_"+t,e,n),c=new qe;l.add(c);let u=this.box("Leaf",[s/2,a/2,0],[s-.02,a,.045],r,{parent:c}),d=Math.min(1,a*.5)-a/2;this.prim("sphere","Knob",[s/2-.09,d,.04],[.055,.055,.055],"brass",{parent:u,collide:!1}),this.prim("sphere","Knob",[s/2-.09,d,-.04],[.055,.055,.055],"brass",{parent:u,collide:!1});let f=new Zo(c,l,t,o),p=this.interact(u,"Open",()=>f.toggle());return p.promptFn=()=>(f.fullyOpen?"Close ":"Open ")+t,this.doors.push(f),f}note(t,e,n,s,r="paper",o=0,a){let l=this.box(t,e,n,r,{yaw:o});return this.interact(l,"Read",()=>{h.inventory.read(s),a?.()}),l}figure(t,e,n,s=0,r=1.95,o){let a=this.group(t,e,n,o),l=r/1.95,c=(u,d,f)=>{let p=this.prim(u,"Part",d.map(y=>y*l),f.map(y=>y*l),"figure",{parent:a,collide:!1});s&&p.layers.set(s),p.castShadow=s===0};return c("capsule",[0,1.2,0],[.36,.45,.22]),c("capsule",[-.09,.45,0],[.12,.48,.12]),c("capsule",[.09,.45,0],[.12,.48,.12]),c("capsule",[-.22,1.05,0],[.08,.48,.08]),c("capsule",[.22,1.05,0],[.08,.48,.08]),c("sphere",[0,1.78,.02],[.2,.27,.22]),a}dust(t,e){let s=new Float32Array(360);for(let l=0;l<120;l++)s[l*3]=(Math.random()-.5)*e[0],s[l*3+1]=(Math.random()-.5)*e[1],s[l*3+2]=(Math.random()-.5)*e[2];let r=new Ze;r.setAttribute("position",new je(s,3));let o=new oo(r,$e("dust"));o.position.set(...t),this.root.add(o);let a=s.slice();this.updaters.push(()=>{let l=h.time*.05;for(let c=0;c<120;c++)s[c*3]=a[c*3]+Math.sin(l+c)*.15,s[c*3+1]=a[c*3+1]+Math.sin(l*.7+c*1.3)*.2;r.attributes.position.needsUpdate=!0})}atmosphere(t,e,n){h.scene.background=new mt(0,0,0),h.ambient.color.copy(t),h.baseAmbient=h.ambient.intensity=1,h.scene.fog=new so(e,n)}};var En=480,Nn=360,Ko=class{constructor(){this.cam=new xe(55,En/Nn,.05,40),this.cam.layers.enable(Gi),this.rt=new Te(En,Nn,{colorSpace:ge}),this.flash=new $n(15923199,16*h.lightScale,9,1.6),this.flash.visible=!1,h.camera.add(this.flash),this.next=0}update(){if(!(h.state!=="playing"||h.ui.modalOpen||!h.input.hit("camera"))){if(!h.inventory.has(ie.Camera)){h.notify("You don't have a camera.");return}if(!(h.player.eyesClosed||h.time<this.next)){if(!h.inventory.remove(ie.Film)){h.audio.play2D("locked",.5),h.notify("No film left. There was a box of film in the living room drawer.");return}this.take()}}}take(){this.next=h.time+1.6,h.audio.play2D("shutter",.8),h.ui.flash(),this.flash.visible=!0,h.camera.updateMatrixWorld(),this.cam.position.copy(h.camera.getWorldPosition(new A)),this.cam.quaternion.copy(h.camera.getWorldQuaternion(new Rn)),this.cam.updateMatrixWorld(),h.renderer.setRenderTarget(this.rt),h.renderer.render(h.scene,this.cam);let t=new Uint8Array(En*Nn*4);h.renderer.readRenderTargetPixels(this.rt,0,0,En,Nn,t),h.renderer.setRenderTarget(null),setTimeout(()=>this.flash.visible=!1,90);let e=Me(En,Nn),n=e.getContext("2d"),s=n.createImageData(En,Nn);for(let u=0;u<Nn;u++)for(let d=0;d<En;d++){let f=((Nn-1-u)*En+d)*4,p=(u*En+d)*4,y=t[f]/255,_=t[f+1]/255,g=t[f+2]/255,m=y*.3+_*.59+g*.11;y=y+(m-y)*.35,_=_+(m-_)*.35,g=g+(m-g)*.35,y=y*1.06+.03,_=_+.025,g=g*.88+.02;let w=(d-En/2)/(En/2),E=(u-Nn/2)/(Nn/2),M=1-.55*Math.min(1,(w*w+E*E)*.6),O=(Math.random()-.5)*.06;s.data[p]=(y*M+O)*255,s.data[p+1]=(_*M+O)*255,s.data[p+2]=(g*M+O)*255,s.data[p+3]=255}n.putImageData(s,0,0);let r=[],o=this.cam.position,a=this.cam.getWorldDirection(new A),l=new A(0,1,0).applyQuaternion(this.cam.quaternion);for(let u of[...h.reveals]){if(u.active&&!u.active())continue;let d=u.object.getWorldPosition(new A);d.distanceTo(o)>u.maxDist||Ls(o,a,l,this.cam.fov,this.cam.aspect,d,-.1)&&h.physics.lineOfSight(o,d,null)&&(r.push(u.caption),u.onRevealed?.())}let c={src:e.toDataURL("image/jpeg",.72),caption:r.length?r.join(" "):Lo(Zu),takenAt:new Date().toTimeString().slice(0,5)};h.inventory.addPhoto(c),h.notify(r.length?"The photograph shows something. (Tab to inspect)":"Photograph taken."),h.ui.latestPhoto(c)}};var Kc=1.75,y_=1.1,__=.28,x_=1.7,v_=2.9,M_=.9,Jo=class{constructor(t,e,n){this.position=t.clone().setY(0),this.yaw=e,this.pitch=0,this.height=Kc,this.radius=__,this.crouching=!1,this.velocity=new A,this.bob=0,this.stepDist=0,this.shakeAmt=0,this.shakeTime=0,this.eyesClosed=!1,this.closedTime=0,this.eyesAmount=0,this.current=null,this.body=this.makeBody(),n.add(this.body);let s=new Ts(16772300,9*h.lightScale,11,.46,.55,1.6);s.position.set(.18,-.15,.1),s.target.position.set(.1,-.2,-5),h.settings.shadows&&(s.castShadow=!0,s.shadow.mapSize.set(512,512),s.shadow.bias=-.002,s.shadow.camera.near=.1),s.visible=!1,h.camera.add(s,s.target),this.flashlight=s,this.updateCamera()}makeBody(){let t=new qe,e=(r,o,a,l)=>{let c=new Ee(r,$e(l));c.position.set(...o),c.scale.set(...a),c.layers.set(Wi),t.add(c)},n=new Ss(.5,1,4,10),s=new ws(.5,14,10);return e(n,[0,1.15,0],[.42,.38,.26],"clothes"),e(n,[-.11,.45,0],[.16,.45,.16],"trousers"),e(n,[.11,.45,0],[.16,.45,.16],"trousers"),e(n,[-.27,1.12,0],[.11,.33,.11],"clothes"),e(n,[.27,1.12,0],[.11,.33,.11],"clothes"),e(s,[0,1.62,0],[.21,.25,.23],"skin"),e(s,[0,1.69,-.02],[.22,.14,.23],"hair"),t}get forward(){return new A(Math.sin(this.yaw),0,Math.cos(this.yaw))}get eye(){return h.camera.getWorldPosition(new A)}teleport(t,e){this.position.copy(t).setY(0),this.yaw=e,this.pitch=0,this.velocity.set(0,0,0),this.updateCamera()}shake(t,e){ed(h.settings)&&(this.shakeAmt=Math.max(this.shakeAmt,t),this.shakeTime=Math.max(this.shakeTime,e))}lookAt(t){let e=t.clone().sub(this.eye);this.yaw=Math.atan2(e.x,e.z),this.pitch=Math.asin(Ln.clamp(e.normalize().y,-1,1))}update(t){let e=h.state!=="playing"||h.ui.modalOpen,n=h.settings,s=h.input,[r,o]=s.takeMouse();if(!e){let E=.0022*n.sensitivity;this.yaw-=r*E,this.pitch+=(n.invertY?o:-o)*E,this.pitch=Ln.clamp(this.pitch,-1.48,1.48),s.hit("crouch")&&this.toggleCrouch(),s.hit("flashlight")&&(h.inventory.has(ie.Flashlight)?(this.flashlight.visible=!this.flashlight.visible,h.audio.play2D("switch",.5)):h.notify("You don't have a flashlight."))}let a=!e&&s.held("eyes");a&&!this.eyesClosed&&h.audio.play2D("breath",.15,"sfx",1.15),this.eyesClosed=a,this.closedTime=this.eyesClosed?this.closedTime+t:0,this.eyesAmount=Ln.clamp(this.eyesAmount+(this.eyesClosed?3.5:-2.5)*t,0,1);let l=0,c=0;e||(s.held("forward")&&(c+=1),s.held("back")&&(c-=1),s.held("left")&&(l+=1),s.held("right")&&(l-=1));let u=Math.hypot(l,c)||1,d=this.crouching?M_:!e&&s.held("sprint")?v_:x_;this.eyesClosed&&(d*=.45);let f=this.forward,p=new A(f.z,0,-f.x),y=f.multiplyScalar(c/u*d).add(p.multiplyScalar(l/u*d)),_=10*t;this.velocity.x+=Ln.clamp(y.x-this.velocity.x,-_,_),this.velocity.z+=Ln.clamp(y.z-this.velocity.z,-_,_);let g=this.position.clone();this.position.addScaledVector(this.velocity,t),h.physics.collide(this.position,this.radius,this.height);let m=Math.hypot(this.position.x-g.x,this.position.z-g.z),w=m/Math.max(t,1e-4);this.height+=Ln.clamp((this.crouching?y_:Kc)-this.height,-3*t,3*t),w>.2&&(this.stepDist+=m,this.bob+=m*4.2,this.stepDist>(this.crouching?.55:.75)&&(this.stepDist=0,h.audio.playAt("step",this.position,this.crouching?.12:.25,.85+Math.random()*.25))),this.bobAmt=nd(n)?.025*Math.min(1,w):0,this.shakeTime>0&&(this.shakeTime-=t),h.camera.fov=n.fov,this.updateCamera(),this.body.position.copy(this.position),this.body.rotation.y=this.yaw,this.updateInteraction(e)}updateCamera(){let t=h.camera;t.position.set(this.position.x,this.height-.13+Math.sin(this.bob*2)*(this.bobAmt||0),this.position.z),this.shakeTime>0&&t.position.add(new A().randomDirection().multiplyScalar(this.shakeAmt*Math.min(1,this.shakeTime*2))),t.rotation.set(this.pitch,this.yaw+Math.PI,0,"YXZ"),t.updateMatrixWorld()}toggleCrouch(){if(!this.crouching){this.crouching=!0;return}let t=this.position,e=this.radius*.9;h.physics.overlaps(new A(t.x-e,t.y+.8,t.z-e),new A(t.x+e,t.y+Kc,t.z+e),null,null)||(this.crouching=!1)}updateInteraction(t){if(this.current=null,t||this.eyesClosed)return;let e=this.eye,n=h.camera.getWorldDirection(new A),s=h.physics.raycast(e,n,2.6);if(s)for(let r=s.entry.mesh;r;r=r.parent){let o=r.userData.interact;if(o){(!o.enabled||o.enabled())&&s.dist<=o.maxDist&&(this.current=o);break}}this.current&&h.input.hit("interact")&&performance.now()-h.ui.lastModalClosed>250&&this.current.onUse()}promptText(){let t=this.current;return t?`[${Re(h.settings.keys.interact)}]  ${t.promptFn?t.promptFn():t.prompt}`:""}};var Yt=(i,t=document)=>t.querySelector(i),Z=(i,t={},...e)=>{let n=document.createElement(i);for(let[s,r]of Object.entries(t))s==="class"?n.className=r:s.startsWith("on")?n.addEventListener(s.slice(2),r):r!==!1&&r!=null&&n.setAttribute(s,r===!0?"":r);for(let s of e.flat())s!=null&&n.append(s.nodeType?s:document.createTextNode(s));return n},hr=i=>new Promise(t=>setTimeout(t,i*1e3)),b_=["circle","triangle","square","cross"],jo=class{constructor(t){this.root=t,this.modal=null,this.lastModalClosed=0,this.page="main",this.fadeValue=1,t.innerHTML=`
      <div id="hud" hidden>
        <div id="crosshair"></div><div id="prompt"></div>
        <ul id="notes"></ul>
        <div id="objective"><span class="label">Objective</span><span id="objText"></span></div>
        <div id="hint"></div>
        <div id="subtitle"></div>
        <div id="meter" hidden><span class="label">perception</span><div class="bar"><i></i></div></div>
        <div id="film" class="label" hidden></div>
        <div id="savingNote" class="label">saving\u2026</div>
        <figure id="preview" hidden><img alt=""></figure>
        <button id="resume" hidden>Click to look around</button>
      </div>
      <div id="eyes"></div><div id="vignette"></div><canvas id="grain" width="160" height="90"></canvas>
      <div id="screen"></div>
      <div id="card"><small></small><strong></strong></div>
      <div id="fade"></div><div id="flash"></div>
      <div id="ending" hidden><p id="endLine"></p><div id="endTitle"><strong></strong><em></em></div><pre id="endCredits"></pre></div>
      <div id="message" hidden><div class="panel"><p></p><button>OK</button></div></div>`,Yt("#message button").onclick=()=>Yt("#message").hidden=!0,Yt("#resume").onclick=()=>h.input.lock(),this.notes=[],this.fragTex=null,h.input.onKey(e=>this.key(e))}get modalOpen(){return!!this.modal}notify(t){this.notes.push({text:t,t:performance.now()}),this.notes.length>5&&this.notes.shift(),this.renderNotes()}showObjective(){this.objUntil=performance.now()+7e3}showHint(t){let e=Yt("#hint");e.textContent=t,e.classList.add("show"),clearTimeout(this.hintT),this.hintT=setTimeout(()=>e.classList.remove("show"),12e3)}saving(){let t=Yt("#savingNote");t.classList.add("show"),clearTimeout(this.saveT),this.saveT=setTimeout(()=>t.classList.remove("show"),1600)}message(t){Yt("#message p").textContent=t,Yt("#message").hidden=!1}flash(){let t=Yt("#flash");t.style.transition="none",t.style.opacity=.85,requestAnimationFrame(()=>{t.style.transition="opacity .45s",t.style.opacity=0})}latestPhoto(t){let e=Yt("#preview");Yt("img",e).src=t.src,e.hidden=!1,clearTimeout(this.prevT),this.prevT=setTimeout(()=>e.hidden=!0,3500)}chapterCard(t){let e=Yt("#card");Yt("small",e).textContent=Io(t),Yt("strong",e).textContent=Ic[t],e.classList.remove("show"),e.offsetWidth,e.classList.add("show"),h.audio.play2D("drone",.35,"music")}fade(t,e){return new Promise(n=>{let s=Yt("#fade"),r=this.fadeValue,o=performance.now(),a=()=>{let l=Math.min(1,(performance.now()-o)/(e*1e3));this.fadeValue=r+(t-r)*(l*l*(3-2*l)),s.style.opacity=this.fadeValue,l<1?requestAnimationFrame(a):n()};a()})}renderNotes(){let t=performance.now();this.notes=this.notes.filter(e=>t-e.t<5e3),Yt("#notes").replaceChildren(...this.notes.map(e=>Z("li",{},e.text)))}update(){let t=h.state,e=["playing","paused","cutscene"].includes(t)&&h.player;if(Yt("#hud").hidden=!e||t==="paused",Yt("#eyes").style.opacity=e?Math.pow(h.player.eyesAmount,.7):0,!e)return;let n=performance.now();Yt("#prompt").textContent=this.modal||h.player.eyesClosed?"":h.player.promptText(),Yt("#crosshair").classList.toggle("active",!!h.player.current);let s=n<(this.objUntil||0)||this.modal==="inventory";Yt("#objective").classList.toggle("show",s),Yt("#objText").textContent=h.story.objectiveText;let r=Yt("#subtitle"),o=h.dialogue;h.settings.subtitles&&o.subtitle?(r.replaceChildren(...o.speaker?[Z("b",{},o.speaker+": "),o.subtitle]:[Z("i",{},o.subtitle)]),r.classList.add("show")):r.classList.remove("show");let a=Yt("#meter");a.hidden=!h.perception.meterVisible;let l=h.perception.value/100;Yt("i",a).style.width=(l*100).toFixed(1)+"%",a.classList.toggle("low",l<.35);let c=Yt("#film");c.hidden=!h.inventory.has("instant_camera"),c.textContent="film "+h.inventory.count("film"),this.notes.length&&n-this.notes[0].t>5e3&&this.renderNotes(),Yt("#resume").hidden=!(t==="playing"&&!this.modal&&!h.input.locked&&!h.input.lockFailed)}key(t){if(t.code==="Escape"||t.code==="KeyP"){if(t.code==="KeyP"&&h.state!=="playing"&&h.state!=="paused"||this.handleEscape())return;h.state==="playing"?h.setPaused(!0):h.state==="paused"&&h.setPaused(!1);return}h.state==="playing"&&(t.code===h.settings.keys.inventory?this.modal==="inventory"?this.closeModals():this.modal||this.openInventory():this.modal==="document"&&t.code===h.settings.keys.interact&&performance.now()-this.modalOpenedAt>300&&this.closeModals())}handleEscape(){return Yt("#message").hidden?this.modal?(this.closeModals(),!0):(h.state==="menu"||h.state==="paused")&&this.page!=="main"?(this.page="main",Bc(h.storage,h.settings),this.renderScreen(),!0):h.state==="ending"||h.state==="loading":(Yt("#message").hidden=!0,!0)}openModal(t,e){this.modal=t,this.modalOpenedAt=performance.now(),h.input.unlock();let n=Yt("#screen");n.replaceChildren(e),n.className="modal "+t}closeModals(){this.modal&&(this.lastModalClosed=performance.now());let t=this.modal&&h.state==="playing";this.modal=null,this.confirmYes=null,(h.state==="playing"||h.state==="cutscene")&&(Yt("#screen").replaceChildren(),Yt("#screen").className=""),t&&h.input.lock()}confirm(t,e){let n=Z("div",{class:"panel confirm"},Z("p",{},t),Z("div",{class:"row"},Z("button",{onclick:()=>{this.closeModals(),this.renderScreen(),e()}},"Yes"),Z("button",{onclick:()=>{this.closeModals(),this.renderScreen()}},"No")));if(h.state==="playing")this.openModal("confirm",n);else{let s=Yt("#screen");s.replaceChildren(n),s.className="modal confirm"}}showDocument(t){this.openModal("document",Z("article",{class:"paper"},Z("h2",{},Ps(t)),Z("div",{class:"body"},Lc(t)),Z("p",{class:"close-hint"},`[${Re(h.settings.keys.interact)}] or [Esc] to close`)))}fragTextures(){if(!this.fragTex){let t=Sn(!0);this.fragTex=[cr(t,0,0,128,96),cr(t,128,0,128,96),cr(t,0,96,128,96),cr(t,128,96,128,96)].map(e=>e.toDataURL())}return this.fragTex}openInventory(t=0){let e=h.data,n=["Items","Documents","Photographs","Journal"],s=Z("div",{class:"detail"}),r=Z("div",{class:"list"}),o=(c,u)=>{r.replaceChildren(...c.map((d,f)=>Z("button",{class:"row-btn",onclick:p=>{r.querySelectorAll(".sel").forEach(y=>y.classList.remove("sel")),p.currentTarget.classList.add("sel"),s.replaceChildren(...u(f))}},d))),c.length||r.replaceChildren(Z("p",{class:"muted"},"Nothing yet."))},a=c=>{if(l.querySelectorAll("button").forEach((u,d)=>u.classList.toggle("on",d===c)),s.replaceChildren(),r.hidden=!1,s.className="detail",c===0){let u=Object.keys(e.items);o(u.map(d=>e.items[d]>1?`${gi(d)}  \xD7${e.items[d]}`:gi(d)),d=>{let f=u[d],p=zi.indexOf(f);return[Z("h3",{},gi(f)),Z("p",{},Xu(f)),p>=0?Z("img",{class:"frag",src:this.fragTextures()[p],alt:gi(f)}):null]})}else c===1?o(e.documents.map(Ps),u=>[Z("article",{class:"paper inline"},Z("h2",{},Ps(e.documents[u])),Z("div",{class:"body"},Lc(e.documents[u])))]):c===2?(r.hidden=!0,s.className="detail photos",e.photos.length||s.append(Z("p",{class:"muted"},"No photographs yet.")),e.photos.forEach(u=>s.append(Z("button",{class:"polaroid",onclick:()=>{s.replaceChildren(Z("figure",{class:"big"},Z("img",{src:u.src,alt:"Photograph"}),Z("figcaption",{},u.caption)),Z("button",{onclick:()=>a(2)},"Back"))}},Z("img",{src:u.src,alt:"Photograph taken at "+u.takenAt}),Z("span",{},u.takenAt))))):(r.hidden=!0,s.className="detail journal",s.append(...e.journal.length?[...e.journal].reverse().map((u,d)=>Z("p",{class:d?"":"latest"},u)):[Z("p",{class:"muted"},"Nothing yet.")]))},l=Z("nav",{class:"tabs"},n.map((c,u)=>Z("button",{onclick:()=>a(u)},c)));this.openModal("inventory",Z("div",{class:"panel inv"},l,Z("p",{class:"obj"},Z("span",{class:"label"},"Objective")," ",h.story.objectiveText,Z("span",{class:"chapter"},`${Io(h.story.chapter)} \xB7 ${Ic[h.story.chapter]}`)),Z("div",{class:"cols"},r,s),Z("p",{class:"close-hint"},`[${Re(h.settings.keys.inventory)}] or [Esc] to close`))),a(t)}openPadlock(t,e){let n=b_.map((s,r)=>{let o=Me(64,64);Hi(o.getContext("2d"),s,32,32,22,5,"#dbd4c4");let a=Z("output",{},String(t.digits[r])),l=c=>{t.step(r,c),a.textContent=t.digits[r],h.audio.play2D("switch",.3,"sfx",.7)};return Z("div",{class:"dial"},Z("img",{src:o.toDataURL(),alt:s}),Z("button",{"aria-label":`${s} up`,onclick:()=>l(1)},"\u25B2"),a,Z("button",{"aria-label":`${s} down`,onclick:()=>l(-1)},"\u25BC"))});this.openModal("padlock",Z("div",{class:"panel padlock"},Z("p",{},"A heavy padlock. Four dials, each engraved with a symbol."),Z("div",{class:"dials"},n),Z("div",{class:"row"},Z("button",{onclick:()=>{t.isOpen?(this.closeModals(),e()):(h.audio.play2D("locked",.8),h.notify("It doesn't open."))}},"Pull the shackle"),Z("button",{onclick:()=>this.closeModals()},"Leave"))))}openChannels(t,e){let n=Z("output",{},"CH "+String(t).padStart(2,"0")),s=Array.from({length:12},(r,o)=>Z("button",{onclick:()=>{n.textContent="CH "+String(o+1).padStart(2,"0"),h.audio.play2D("switch",.6,"sfx",.6),e(o+1)}},String(o+1)));this.openModal("channels",Z("div",{class:"panel channels"},Z("p",{},"The channel dial clicks stiffly."),n,Z("div",{class:"grid"},s),Z("button",{onclick:()=>this.closeModals()},"Leave")))}openFragments(t,e){let n=this.fragTextures(),s=-1,r=!1,o=Z("div",{class:"frame"}),a=Z("div",{class:"pieces"}),l=Z("p",{class:"muted"},"Select a piece, then a corner. Select a placed piece to remove it."),c=()=>{o.replaceChildren(...[0,1,2,3].map(u=>Z("button",{class:"slot","aria-label":"Corner "+(u+1),onclick:()=>{r||(s>=0?(t.place(s,u),s=-1,h.audio.play2D("paper",.5)):t.slots[u]>=0&&t.clear(u),t.isSolved&&(r=!0,h.audio.play2D("musicBox",.4,"music"),l.textContent="A man, a woman, and between them, a small girl in yellow.",setTimeout(()=>{this.closeModals(),e()},3500)),c())}},t.slots[u]>=0?Z("img",{src:n[t.slots[u]],alt:""}):null))),a.replaceChildren(...[0,1,2,3].filter(u=>h.story.has(zi[u])&&!t.isPlaced(u)).map(u=>Z("button",{class:"piece"+(s===u?" sel":""),"aria-label":"Piece "+(u+1),onclick:()=>{s=s===u?-1:u,c()}},Z("img",{src:n[u],alt:""}))))};c(),this.openModal("fragments",Z("div",{class:"panel fragments"},Z("p",{},"The frame is empty except for torn edges. Put the pieces back where they belong."),Z("div",{class:"cols"},o,a),l,Z("button",{onclick:()=>this.closeModals()},"Leave")))}renderScreen(){let t=Yt("#screen");h.state==="menu"?(t.className="menu",t.replaceChildren(this.page==="settings"?this.settingsView():this.page==="credits"?this.creditsView():this.menuView())):h.state==="paused"?(t.className="menu paused",t.replaceChildren(this.page==="settings"?this.settingsView():this.pauseView())):this.modal||(t.className="",t.replaceChildren())}menuView(){let t=h.endingsSeen.size,e=n=>()=>{this.page=n,this.renderScreen()};return Z("div",{class:"menu-col"},Z("h1",{},"THE UNSEEN"),Z("p",{class:"tag"},"You can only see what you are willing to forget."),Z("nav",{},Z("button",{disabled:!h.canContinue(),onclick:()=>h.continueGame()},"Continue"),Z("button",{onclick:()=>h.canContinue()?this.confirm("Start a new game? Your saved progress will be lost.",()=>h.newGame()):h.newGame()},"New Game"),Z("button",{onclick:e("settings")},"Settings"),Z("button",{onclick:e("credits")},"Credits")),Z("p",{class:"foot"},t?`Endings found: ${t} / 3`:"Headphones recommended. Play in the dark."),Z("p",{class:"foot"},"Contains themes of grief, child death and self-harm."),h.storage.persistent?null:Z("p",{class:"foot warn"},"This browser is blocking storage: progress will not be saved after you close the page."))}pauseView(){return Z("div",{class:"menu-col"},Z("h2",{},"Paused"),Z("p",{class:"tag"},`${Io(h.story.chapter)} \xB7 ${h.story.objectiveText}`),Z("nav",{},Z("button",{onclick:()=>h.setPaused(!1)},"Resume"),Z("button",{onclick:()=>{this.page="settings",this.renderScreen()}},"Settings"),Z("button",{onclick:()=>this.confirm("Return to the last checkpoint? Progress since then will be lost.",()=>{h.setPaused(!1),h.restartCheckpoint()})},"Restart checkpoint"),Z("button",{onclick:()=>h.toMenu()},"Main menu")))}creditsView(){return Z("div",{class:"menu-col credits"},Z("pre",{},Nc),Z("button",{onclick:()=>{this.page="main",this.renderScreen()}},"Back"))}settingsView(){let t=h.settings,e=()=>{Bc(h.storage,t),h.applySettings()},n=(l,c,u,d,f,p)=>{let y=Z("output",{},p(t[c]));return Z("label",{class:"set"},Z("span",{},l),Z("input",{type:"range",min:u,max:d,step:f,value:t[c],oninput:_=>{t[c]=+_.target.value,y.textContent=p(t[c]),e()}}),y)},s=(l,c)=>Z("label",{class:"set"},Z("span",{},l),Z("input",{type:"checkbox",checked:t[c],onchange:u=>{t[c]=u.target.checked,e()}})),r=l=>Math.round(l*100)+"%",o=Object.keys(ar).map(l=>{let c=Z("button",{onclick:()=>{c.textContent="press a key\u2026",h.input.captureNext=u=>{u!=="Escape"&&(t.keys[l]=u),c.textContent=Re(t.keys[l]),e()}}},Re(t.keys[l]));return Z("div",{class:"set"},Z("span",{},Qu[l]),c)}),a=Z("select",{onchange:l=>{t.quality=l.target.value,e()}},["low","medium","high"].map(l=>Z("option",{value:l,selected:t.quality===l},l[0].toUpperCase()+l.slice(1))));return Z("div",{class:"settings"},Z("h2",{},"Settings"),Z("section",{},Z("h3",{},"Audio"),n("Master volume","masterVolume",0,1,.01,r),n("Music volume","musicVolume",0,1,.01,r),n("Sound effects volume","sfxVolume",0,1,.01,r)),Z("section",{},Z("h3",{},"Video"),Z("label",{class:"set"},Z("span",{},"Graphics quality (resolution)"),a),s("Shadows (applies on next room load)","shadows"),n("Field of view","fov",55,95,1,l=>l+"\xB0"),n("Brightness","brightness",0,1,.01,r),s("Motion blur","motionBlur"),Z("div",{class:"set"},Z("span",{},"Fullscreen"),Z("button",{onclick:()=>document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.().catch(()=>h.notify("Fullscreen is not available here."))},"Toggle")),Z("p",{class:"muted"},"VSync is handled by your browser.")),Z("section",{},Z("h3",{},"Accessibility"),s("Subtitles","subtitles"),s("Camera shake","cameraShake"),s("Head bob","headBob"),s("Reduced motion (no shake, bob or lens effects)","reducedMotion")),Z("section",{},Z("h3",{},"Controls"),n("Mouse sensitivity","sensitivity",.1,4,.05,l=>l.toFixed(2)),s("Invert mouse Y","invertY"),...o,Z("button",{onclick:()=>{t.keys={...ar},e(),this.renderScreen()}},"Reset controls"),Z("p",{class:"muted"},"Esc (or P) pauses and goes back.")),Z("button",{class:"back",onclick:()=>{this.page="main",e(),this.renderScreen()}},"Back"))}async playEnding(t){let e=$u[t],n=Yt("#ending"),s=Yt("#endLine"),r=Yt("#endTitle"),o=Yt("#endCredits");Yt("#screen").replaceChildren(),n.hidden=!1,r.classList.remove("show"),o.classList.remove("roll"),h.audio.play2D(e.music,.5,"music");for(let a of e.lines)s.replaceChildren(...a.speaker?[Z("b",{},a.speaker+": "),a.text]:[a.text]),a.speaker&&h.audio.playBuffer(h.audio.voiceBuffer(a.text,a.speaker===jt.Child?255:92,!0),null,.8,1,"voice"),h.story.journal(a.text),s.classList.add("show"),await hr(Math.max(3.5,2+a.text.length*.06)),s.classList.remove("show"),await hr(.9);Yt("strong",r).textContent=e.title,Yt("em",r).textContent=e.epigraph,r.classList.add("show"),await hr(6),r.classList.remove("show"),await hr(1.5),o.textContent=Nc,o.classList.add("roll"),await Promise.race([hr(32),new Promise(a=>setTimeout(()=>addEventListener("keydown",a,{once:!0}),3e3))]),o.classList.remove("roll"),n.hidden=!0}};var ur=class{constructor(t,e,n,s,r){this.center=new A(...e),this.n=new A(...n).normalize(),this.w=s,this.h=r,this.anomaly=!1,this.frozen=null,this.rt=new Te(Math.round(384*s/r),384,{colorSpace:ge}),this.rt.texture.wrapS=Fi,this.rt.texture.repeat.x=-1,this.rt.texture.offset.x=1;let o=new Mn({map:this.rt.texture,color:new mt(.82,.86,.86)});this.mesh=t.panel("MirrorSurface",e,[s,r],n,o),this.cam=new xe(60,s/r,.05,25),this.cam.layers.enable(Wi),t.updaters.push(()=>this.update()),h.mirrors.push(this)}visible(){if(!h.player)return!1;let t=h.player.eye;if(t.clone().sub(this.center).dot(this.n)<.05||t.distanceTo(this.center)>7)return!1;let n=h.camera.getWorldDirection(new A),s=new A(0,1,0).applyQuaternion(h.camera.quaternion);return Ls(t,n,s,h.camera.fov,h.camera.aspect,this.center,.3)}render(){if(!this.visible())return;let t=h.player.eye,e=this.n,n=t.clone().sub(this.center).dot(e),s=t.clone().addScaledVector(e,-2*n);this.cam.position.copy(s),this.cam.lookAt(s.clone().add(e)),this.cam.updateMatrixWorld();let r=new A(1,0,0).applyQuaternion(this.cam.quaternion),o=new A(0,1,0).applyQuaternion(this.cam.quaternion),a=this.center.clone().sub(s),l=Math.max(.02,a.dot(e)),c=a.dot(r)-this.w/2,u=c+this.w,d=a.dot(o)-this.h/2,f=d+this.h,p=h.perception.distortion>.6&&!h.settings.reducedMotion?Math.sin(h.time*.7)*.03*h.perception.distortion:0;c+=p,u+=p,this.cam.near=l,this.cam.projectionMatrix.makePerspective(c,u,f,d,l,25),this.cam.projectionMatrixInverse.copy(this.cam.projectionMatrix).invert(),this.mesh.visible=!1,h.renderer.setRenderTarget(this.rt),h.renderer.render(h.scene,this.cam),h.renderer.setRenderTarget(null),this.mesh.visible=!0}update(){let t=h.player;if(t){if(!this.anomaly){this.frozen&&(this.frozen.removeFromParent(),this.frozen=null,h.mirrors.some(e=>e.anomaly)||(t.body.visible=!0));return}this.frozen||(this.frozen=t.body.clone(),this.frozen.traverse(e=>e.layers.set(Wi)),h.worldRoot.add(this.frozen)),t.body.visible=!1,this.visible()||(this.frozen.position.copy(t.position),this.frozen.rotation.y=Math.atan2(-this.n.x,-this.n.z))}}};var Us=class{constructor(t,e,n,s){this.screen=e,this.glow=n,this.staticLoop=s,this.mode="off",this.feed=null,this.mat=new Mn({color:329222}),e.material=this.mat,this.rt=new Te(320,240,{colorSpace:ge}),t.updaters.push(()=>this.update()),h.tvs.push(this),this.off()}feedCamera(t,e){let n=new xe(62,1.3333333333333333,.05,30);return n.layers.enable(Gi),n.layers.enable(Wi),n.position.set(...t),n.lookAt(new A(...e)),n.updateMatrixWorld(),n}set(t,e,n){this.mode=t,this.mat.map=n||null,this.mat.color.copy(e),this.mat.needsUpdate=!0,this.glow.visible=t!=="off",t==="static"?this.staticLoop.isPlaying||this.staticLoop.play():this.staticLoop.stop()}off(){this.feed=null,this.set("off",new mt(.02,.025,.025))}static(){this.feed=null;let t=bd();t.repeat.set(1.5,1.2),this.set("static",new mt(.8,.82,.85),t)}showFeed(t){this.feed=t,this.set("feed",new mt(.75,.85,.8),this.rt.texture)}card(t){this.feed=null,this.set("card",new mt(.85,.85,.8),t)}render(){this.mode!=="feed"||!this.feed||(this.screen.visible=!1,h.renderer.setRenderTarget(this.rt),h.renderer.render(h.scene,this.feed),h.renderer.setRenderTarget(null),this.screen.visible=!0)}update(){this.mode==="static"&&this.mat.map.offset.set(Math.random(),Math.random()),this.glow.visible&&(this.glow.intensity=(this.mode==="static"?.6:.45)*h.lightScale*(.85+Ns(h.time*9)*.3))}};var Qo=class{constructor(t){this.code=t,this.digits=new Array(t.length).fill(0)}step(t,e){this.digits[t]=((this.digits[t]+e)%10+10)%10}get current(){return this.digits.join("")}get isOpen(){return this.current===this.code}},ta=class{constructor(...t){this.expected=t,this.history=[]}push(t){return this.history.push(t),this.history.length>this.expected.length&&this.history.shift(),this.history.length===this.expected.length&&this.history.every((e,n)=>e===this.expected[n])}},ea=class{constructor(){this.slots=[-1,-1,-1,-1]}place(t,e){this.slots=this.slots.map(n=>n===t?-1:n),this.slots[e]=t}clear(t){this.slots[t]=-1}isPlaced(t){return this.slots.includes(t)}get isSolved(){return this.slots.every((t,e)=>t===e)}},Ev=[{id:"fuse",name:"Restore the hallway fuse",flag:P.FuseInstalled},{id:"camera_key",name:"Photograph what cannot be seen",flag:P.GotBrassKey},{id:"mirror",name:"Writing in the dark mirror",flag:P.MirrorMsg},{id:"tv",name:"Television channel sequence",flag:P.TvSolved},{id:"footsteps",name:"Follow the footsteps without looking",flag:P.ClosetFound},{id:"music_box",name:"Find the music box by sound alone",flag:P.MusicBoxFound},{id:"padlock",name:"Symbol padlock (clues from four rooms)",flag:P.BasementUnlocked},{id:"breakers",name:"Restore basement power while watched",flag:P.PowerOn},{id:"photo",name:"Reconstruct the family photograph",flag:P.PhotoRestored},{id:"memories",name:"Final memory and observation puzzle",flag:P.MemoriesDone}];var na=class{constructor(t,e,n,s){this.pos=e.clone(),this.path=n,this.i=0,this.onArrived=s,this.stepDist=0,this.idle=0,this.done=!1}update(t){if(this.done||!h.player||h.state!=="playing")return;let e=this.pos.clone().setY(.3);if(h.observation.isPointObserved(e)){h.perception.drain(1.5),this.idle+=t,this.idle>3&&(this.idle=0,h.audio.playAt("step",this.pos,.12,1.5));return}if(this.idle=0,h.player.position.distanceTo(this.pos)>4.5)return;let n=this.path[this.i],s=this.pos.clone(),r=n.clone().sub(this.pos),o=r.length(),a=.8*t;o<=a?this.pos.copy(n):this.pos.addScaledVector(r,a/o),this.stepDist+=s.distanceTo(this.pos),this.stepDist>.45&&(this.stepDist=0,h.audio.playAt("step",this.pos,.3,1.35+Math.random()*.2,"sfx",10)),this.pos.distanceToSquared(n)<4e-4&&++this.i>=this.path.length&&(this.done=!0,this.onArrived())}};var Bt=(i,t,e)=>new A(i,t,e),Mi=(i,t)=>setTimeout(t,i*1e3),ia=(i,t,e,n,s)=>i.x>=t&&i.x<=e&&i.z>=n&&i.z<=s;function Td(i){let t=B=>h.story.has(B),e=B=>i.thought(B),n=()=>h.player?h.player.position:Bt(0,0,0),s=()=>ia(n(),-6,-.75,0,5.5),r=()=>ia(n(),.75,4,2,5),o=()=>ia(n(),.75,6,5,10),a=()=>ia(n(),-.75,.75,0,14),l=new Qo("0219"),c=new ta(11,4,7),u={},d=!1,f=1,p=!1,y=0,_=null,g=0,m=0,w=0,E=0,M=null;i.ringing=!1,i.onEntered=()=>{if(!t("intro_done")){h.story.set("intro_done"),h.dialogue.play(He.opening);let B=h.settings.keys;h.notify(`Move: ${Re(B.forward)} ${Re(B.left)} ${Re(B.back)} ${Re(B.right)}   Look: mouse (click the game first)`),h.notify(`Interact: ${Re(B.interact)}    Crouch: ${Re(B.crouch)}    Close eyes: hold ${Re(B.eyes)}`)}i.changed&&!t("seen_changed")&&(h.story.set("seen_changed"),e("This isn't the same apartment. Everything is where it was, and none of it is right."))},i.shadows=[],i.onBlackout=()=>{for(let B of i.shadows)B.root.removeFromParent(),B.destroy();i.shadows=[]};let O=(B,K)=>{i.ringing=!0,_={lines:B,after:K},y=h.time,i.ringLoop.play()},C=()=>{i.ringing=!1,i.ringLoop.stop()},R=()=>p?!1:i.ringing?h.time-y>40?(C(),!0):!1:!0;i.answerPhone=()=>{if(!i.ringing){e(t(P.Phone1)?"No dial tone. The cord isn't plugged into anything.":"No dial tone.");return}C(),p=!0,h.audio.playAt("phonePickup",i.phone.getWorldPosition(Bt()),.6);let B=_;h.dialogue.play(B.lines,"phone",i.phone,()=>{p=!1,h.audio.playAt("switch",i.phone.getWorldPosition(Bt()),.5),B.after?.()})};let L=(B,K,yt,bt,Ot,D)=>({id:B,story:!0,oneShot:!1,cooldown:45,requires:K,blockedBy:yt,timeout:120,condition:()=>!i.ringing&&!p&&!h.dialogue.busy&&(!D||D()),start:()=>O(bt,Ot),completion:R}),S=h.director;S.register(L("call1",P.FrontDoorTried,P.Phone1,He.call1,()=>{h.perception.hit(4),h.dialogue.play(He.afterCall1),h.story.set(P.Phone1)})),S.register({id:"tv_live",story:!0,requires:P.GotCamera,blockedBy:P.TvLiveSeen,timeout:60,condition:()=>s()&&!d&&n().distanceTo(Bt(-3.4,0,.36))<4.5&&!h.dialogue.busy,start:()=>q(),completion:()=>t(P.TvLiveSeen)}),S.register({id:"radio",story:!0,requires:P.DiaryRead,blockedBy:P.RadioOn,condition:()=>!h.dialogue.busy,start:()=>{i.radioLoop.play(),h.story.set(P.RadioOn),h.dialogue.play(He.radio,"radio",i.radio)}}),S.register(L("call2",P.KitchenMsg,P.Call2,He.call2,()=>{let B=h.player;h.audio.playAt("breath",B.position.clone().addScaledVector(B.forward,-.9).setY(1.55),.7),B.shake(.015,1.2),h.perception.hit(10),h.dialogue.play(He.afterCall2),h.story.set(P.Call2)},()=>s()||a())),S.register(L("call3",P.TvSolved,P.Call3,He.call3,()=>{h.perception.hit(8),h.story.set(P.Call3)})),S.register(L("call4",P.PowerOn,P.Call4,He.call4,()=>{h.perception.hit(6),h.story.set(P.Call4)})),S.register({id:"mirror_anomaly",story:!0,oneShot:!1,cooldown:30,requires:P.KitchenMsg,blockedBy:P.MirrorAnomaly,timeout:90,condition:()=>r()&&h.observation.isPointObserved(i.bathMirror.center),start:()=>{i.bathMirror.anomaly=!0,w=0,E=0},completion:()=>t(P.MirrorAnomaly)||!r()}),[Bt(-3,0,2),Bt(-3,0,8.5),Bt(3.5,0,7.5),Bt(0,0,9),Bt(2.4,0,3.5)].forEach((B,K)=>S.register({id:"steps_"+K,oneShot:!1,requires:P.Phone1,cooldown:80,probability:.08,anchor:B.clone().setY(1),minDist:4,visibility:"unobserved",start:()=>$(B,B.clone().add(Bt(Math.random()*3-1.5,0,Math.random()*3-1.5)),4,"stepHeavy",.35)})),S.register({id:"knock",oneShot:!1,minChapter:2,cooldown:160,probability:.05,anchor:Bt(0,1.2,.05),minDist:3,cue:"knock"}),S.register({id:"bed_door_ajar",oneShot:!1,minChapter:2,cooldown:90,probability:.1,anchor:Bt(.75,1,6),minDist:4,visibility:"unobserved",condition:()=>!i.bedDoor.isOpen&&i.bedDoor.angle<1,start:()=>{i.bedDoor.setAngleInstant(22),h.audio.playAt("creak",Bt(.75,1,6),.35)}}),S.register({id:"flicker",oneShot:!1,minChapter:2,cooldown:70,probability:.06,start:()=>Mt(1.6)}),S.register({id:"whisper_closed",oneShot:!1,minChapter:2,cooldown:25,probability:.35,condition:()=>h.player.closedTime>2,start:()=>h.audio.playAt("whisper",h.player.position.clone().addScaledVector(h.player.forward,-1.2).setY(1.6),.5)}),S.register({id:"breath_behind",oneShot:!1,minChapter:3,cooldown:120,probability:.05,condition:()=>h.player.velocity.length()<.2&&!h.player.eyesClosed,start:()=>h.audio.playAt("breath",h.player.position.clone().addScaledVector(h.player.forward,-1).setY(1.5),.4)}),S.register({id:"shadow_edge",oneShot:!1,minChapter:2,cooldown:90,probability:.07,start:()=>lt()}),S.register({id:"fridge_silence",oneShot:!1,minChapter:2,cooldown:200,probability:.04,condition:()=>i.fridgeLoop.isPlaying,start:()=>{i.fridgeLoop.stop(),Mi(20,()=>{h.world===i&&(i.fridgeLoop.play(),h.audio.playAt("thud",Bt(-1.45,.9,9.6),.3))})}}),S.register({id:"clock_stop",oneShot:!1,minChapter:3,cooldown:200,probability:.04,condition:()=>i.clockLoop?.isPlaying,start:()=>{i.clockLoop.stop(),Mi(15,()=>{h.world===i&&i.clockLoop.play()})}}),S.register({id:"water_running",oneShot:!1,minChapter:2,cooldown:240,probability:.04,anchor:Bt(2.2,1,4.7),minDist:4,condition:()=>!r()&&!i.waterLoop.isPlaying,start:()=>i.waterLoop.play()}),S.register({id:"bed_steps",oneShot:!1,minChapter:2,cooldown:120,probability:.07,condition:()=>o()&&!h.observation.isPointObserved(Bt(4.95,.5,8)),start:()=>st()}),S.register({id:"tv_remote",oneShot:!1,minChapter:2,requires:P.TvLiveSeen,cooldown:150,probability:.07,condition:()=>s()&&!d&&i.tv.mode==="off",start:()=>it()}),S.register({id:"bed_mirror",oneShot:!1,minChapter:2,maxChapter:3,cooldown:200,probability:.08,condition:()=>o()&&!i.bedMirror.anomaly,start:()=>{i.bedMirror.anomaly=!0,Mi(25,()=>i.bedMirror.anomaly=!1)}}),S.register({id:"hall_figure",oneShot:!1,minChapter:3,cooldown:120,probability:.1,anchor:Bt(0,1,9.4),visibility:"unobserved",condition:()=>a()&&n().z<5,start:()=>It(Bt(0,0,i.falseWall.position.z-.6),180,()=>{i.hall1.flicker(.4),i.hall2.flicker(.4)})}),new Ve(i.chair("PhantomChair",[-2.6,0,4.7],200),{canMove:!1,canAppear:!0,canDisappear:!0,disappearAfter:1.4,delay:3,cooldown:30,condition:()=>h.perception.value<35}).setVisible(!1),new Ve(i.figure("PhantomFigure",[-1.4,0,7.6],90),{canMove:!1,canAppear:!0,canDisappear:!0,disappearAfter:.5,minChapter:3,cooldown:60,minPlayerDist:3.5,condition:()=>h.perception.value<30,onDisappeared:()=>Mt(.3)}).setVisible(!1),i.updaters.push(B=>{let K=h.player;!K||h.state!=="playing"||(t(P.KitchenMsg)&&!t(P.MirrorMsg)&&r()&&!i.bathLight.lit&&K.position.distanceTo(i.bathMirror.center.clone().setY(0))<2&&K.eyesClosed?(g+=B,g>3&&(i.mirrorMsg.visible=!0,h.audio.playAt("creak",i.bathMirror.center,.2,1.8),h.story.set(P.MirrorMsg),h.story.journal("Bathroom mirror, in the dark: CH 11 4 7"),se(()=>e("Letters in the steam on the glass. CH... 11, 4, 7. A drawing of a television.")))):g=0,z(),Y(B),t(P.TvSolved)&&!t(P.ClosetFound)&&!M&&(i.guide=M=new na(i,Bt(0,0,9.2),[Bt(0,0,6.5),Bt(0,0,4),Bt(.1,0,1.8),Bt(.45,0,1)],()=>tt())),M?.update(B))});function z(){let B=i.bathMirror;if(!B.anomaly)return;if(!r()){B.anomaly=!1;return}let K=h.observation.isPointObserved(B.center);w===0?K||(E+=.016,E>1.2&&(w=1)):w===1&&K&&!t(P.MirrorAnomaly)&&(w=2,Mi(1.2,()=>{h.perception.hit(8),h.audio.playAt("stinger",B.center,.25),e("I moved. It didn't. It's still standing there, facing the glass."),h.story.set(P.MirrorAnomaly)}))}if(!t(P.MusicBoxFound)){let B=i.group("MusicBox",[4.45,0,7.12]);i.box("Body",[0,.05,0],[.16,.1,.11],"wood_light",{parent:B}),i.box("Lid",[0,.105,0],[.17,.012,.12],"plastic_red",{parent:B});let K=h.audio.loop("musicBox",B,.9,"unseen",9,!1),yt=h.audio.loop("musicBox",B,.35,"sfx",5,!1),bt=Ot=>{B.visible=Ot,h.physics.setEnabled(B,Ot)};bt(t("musicbox_revealed")),i.pickup(B,"Take the music box",()=>{K.stop(),yt.stop(),h.inventory.add(ie.MusicBox),h.inventory.add(P.FragB),h.story.set(P.FragB),h.story.set(P.MusicBoxFound),h.perception.restore(15,"A memory steadies you."),e("Folded inside, under the broken dancer: part of a photograph. A woman's face.")}),i.musicBox={mb:B,hidden:K,audible:yt,setVis:bt}}function Y(B){let K=i.musicBox;if(!K||t(P.MusicBoxFound)||!t(P.KitchenMsg))return;let yt=t("musicbox_revealed");!yt&&!K.hidden.isPlaying&&K.hidden.play(),yt&&!K.audible.isPlaying&&(K.hidden.stop(),K.audible.play()),!yt&&(h.player.eyesClosed&&h.player.position.distanceTo(K.mb.position)<1.9?(m+=B,m>1.5&&(h.story.set("musicbox_revealed"),K.setVis(!0),se(()=>e("There. By the bed. It was there the whole time.")))):m=0)}async function tt(){await Pt(.6);let B=i.hall1.on,K=i.hall2.on;i.hall1.on=i.hall2.on=!1,h.audio.playAt("knock",Bt(.75,1.2,1),.5),await Pt(1.8),i.setClosetVisible(!0),i.closetDoor.setAngleInstant(25),h.audio.playAt("creak",Bt(.75,1.2,1),.4),await Pt(.8),i.hall1.on=B,i.hall2.on=K,h.perception.hit(8),h.story.set(P.ClosetFound),e("A door. There was never a door there.")}async function q(){d=!0,i.tv.static(),await Pt(1.5);let B=Bt(-3.4,0,.36),K=n().clone().sub(B).setY(0).normalize(),yt=n().clone().addScaledVector(K,.9);yt.x=Ln.clamp(yt.x,-5.6,-1),yt.z=Ln.clamp(yt.z,.8,5.1);let bt=i.figure("TVFigure",[yt.x,0,yt.z],Math.atan2(B.x-yt.x,B.z-yt.z)*180/Math.PI,1);i.tv.showFeed(i.tvLiveCam),h.audio.play2D("drone",.25,"music"),await Pt(5.5),h.perception.hit(8),i.tv.static(),await Pt(.6),bt.removeFromParent(),i.tv.showFeed(i.tvBathCam),await Pt(4.5),i.tv.static(),await Pt(.4),i.tv.off(),h.dialogue.play(He.tvLive,"thought",null,()=>{h.story.set(P.TvLiveSeen),d=!1})}async function it(){d=!0,i.tv.static(),await Pt(1),i.tv.showFeed(i.remoteCam),await Pt(6),i.tv.static(),await Pt(.5),i.tv.off(),d=!1,t("remote_seen")||(h.story.set("remote_seen"),e("A child's bedroom. There is no child's bedroom in this apartment."))}i.useTelevision=()=>{d||h.ui.openChannels(f,W)};function W(B){if(f=B,c.push(B)&&t(P.KitchenMsg)&&!t(P.TvSolved)){h.ui.closeModals(),at();return}B===3?i.tv.card(Rt()):B===9&&i.chapter>=2?i.tv.showFeed(i.remoteCam):i.tv.static()}async function at(){d=!0,i.tv.static(),await Pt(1);let B=Me(320,240),K=B.getContext("2d");K.fillStyle="#1a244d",K.fillRect(0,0,320,240),K.fillStyle="#f2d980",K.font=`26px ${tn}`,K.textAlign="center",K.fillText("HAPPY BIRTHDAY",160,40),Hi(K,"triangle",110,140,60,8,"#fff"),K.fillStyle="#fff",K.font=`64px ${tn}`,K.fillText("= 2",240,160),lr(K,320,240,20),i.tv.card(pn(B,!1)),await new Promise(yt=>h.dialogue.play(He.broadcast,"tape",i.tv.screen,yt)),h.story.journal("Television, channels 11-4-7: TRIANGLE = 2"),h.perception.restore(10,"A memory steadies you."),h.story.set(P.TvSolved),await Pt(2),i.tv.off(),d=!1}let pt=null;function Rt(){if(pt)return pt;let B=Me(320,240),K=B.getContext("2d");return["#bfbfbf","#bfbf00","#00bfbf","#00bf00","#bf00bf","#bf0000","#0000bf"].forEach((yt,bt)=>{K.fillStyle=yt,K.fillRect(bt*46,0,46,170)}),K.fillStyle="#000",K.fillRect(0,170,320,70),K.fillStyle="#fff",K.font="20px monospace",K.textAlign="center",K.fillText("PLEASE STAND BY",160,212),pt=pn(B,!1)}i.takeFilm=()=>{if(!t(P.GotCamera)){e("Old batteries, a remote, and a box of instant film. Film for a camera I don't have.");return}let B=h.inventory.count(ie.Film);if(B>=3){e("You have enough film for now.");return}h.inventory.add(ie.Film,3-B)},i.useRadio=()=>{if(i.radioLoop.isPlaying){i.radioLoop.stop(),h.dialogue.stopAll(),t(P.RadioOn)&&!t(P.RadioOff)&&(h.story.set(P.RadioOff),Mi(1.2,()=>{i.cabinetDoor.setAngleInstant(12),h.audio.playAt("creak",Bt(-2.4,1.95,9.6),.45,1.3),e("Behind me, a cabinet door creaks open. Just a little.")}));return}i.radioLoop.play(),Mi(3,()=>i.radioLoop.stop()),e("Only static.")},i.ground=(B,K,yt)=>{if(u[B]&&h.time-u[B]<90){e("Not yet. It doesn't work if you do it too often.");return}u[B]=h.time,h.perception.restore(K,"You feel steadier."),e(yt)},i.useFuseBox=()=>{if(i.power){e("All the fuses are in. It hums quietly.");return}if(h.inventory.has(ie.Fuse)){h.inventory.remove(ie.Fuse),h.audio.playAt("breaker",Bt(-.7,1.55,.95),.8),h.story.set(P.FuseInstalled),i.hall1.flicker(.8),i.hall2.flicker(1.1),e("The hallway lights stutter on.");return}e("The fuse box. One slot is empty. Someone wrote HALL above it in pencil.")},i.useFrontDoor=()=>{if(!t(P.FrontDoorTried)){h.story.set(P.FrontDoorTried),e("Locked. And there's no key. The handle is warm, as if someone was holding it from the other side.");return}if(h.inventory.has(ie.FrontKey)){h.ui.confirm("Unlock the front door and leave? You will not come back, and you will not remember.",()=>h.triggerEnding(mi.Forget));return}e("Still locked.")},i.useBasementDoor=()=>{if(t(P.BasementUnlocked)){h.transitionTo("basement","default");return}t(P.PadlockSeen)||(h.story.set(P.PadlockSeen),h.story.journal("Basement padlock dials, in order: CIRCLE, TRIANGLE, SQUARE, CROSS")),h.ui.openPadlock(l,()=>{i.padlock?.removeFromParent(),h.audio.playAt("unlock",i.falseWall.position.clone().setY(1),.8),h.story.set(P.BasementUnlocked),e("February nineteenth. It opens. Cold air comes up from below.")})},i.useFamilyFrame=()=>{if(t(P.PhotoRestored)){e("Adrian, Hanna and Mira. Lindell Street, one summer.");return}let B=sr(t);if(B<4){h.inventory.read("photo_back"),B>0&&h.notify(`Pieces of the photograph: ${B} / 4`);return}h.ui.openFragments(new ea,()=>{for(let K of zi)h.inventory.remove(K);h.story.set(P.PhotoRestored),i.updateFramePicture(),h.inventory.add(ie.RoomKey),h.story.set(P.GotRoomKey),h.perception.restore(30,"You remember her face."),e("Behind the photograph, taped to the board: a small key on a faded pink ribbon.")})},i.updateFramePicture=()=>{let B;if(t(P.PhotoRestored))B=Sn(!0);else{B=Me(256,192);let K=B.getContext("2d");K.fillStyle="#403326",K.fillRect(0,0,256,192),K.fillStyle="#e6e0d1";for(let yt=0;yt<256;yt++){let bt=4+Math.random()*8,Ot=4+Math.random()*8;K.fillRect(yt,0,1,bt),K.fillRect(yt,192-Ot,1,Ot)}}i.framePicture.material=en(B,.5)};function Pt(B){return new Promise(K=>setTimeout(K,B*1e3))}function se(B){let K=setInterval(()=>{(!h.player||!h.player.eyesClosed)&&(clearInterval(K),Mi(.4,B))},100)}async function $(B,K,yt,bt,Ot){for(let D=0;D<yt;D++)h.audio.playAt(bt,B.clone().lerp(K,yt>1?D/(yt-1):0),Ot,.85+Math.random()*.2,"sfx",14),await Pt(.6)}async function st(){for(let B of[Bt(3.8,0,7.1),Bt(4.6,0,7),Bt(5.4,0,7.05),Bt(6,0,7.3)])h.audio.playAt("step",B,.3,1.45),await Pt(.5)}function Mt(B){let K=null,yt=7;for(let bt of[i.livingLight,i.lamp,i.kitchenLight,i.bedLight,i.bathLight,i.hall1,i.hall2]){if(!bt?.lit)continue;let Ot=bt.light.getWorldPosition(Bt()).distanceTo(n());Ot<yt&&(yt=Ot,K=bt)}K&&(K.flicker(B),h.audio.playAt("buzz",K.light.getWorldPosition(Bt()),.25))}function lt(){let B=h.player.eye,K=h.camera.getWorldDirection(Bt()),yt=[Bt(-5.5,0,.5),Bt(-1.3,0,5),Bt(-5.5,0,9.4),Bt(-1.3,0,6),Bt(0,0,9.3),Bt(0,0,.6),Bt(1.3,0,9.5),Bt(5.5,0,5.5),Bt(3.6,0,4.5)];for(let bt of yt){let Ot=bt.clone().setY(1.6),D=B.distanceTo(Ot),We=zo(B,K,Ot);if(!(D<2.5||D>7||We<50||We>85)&&!(h.observation.isPointObserved(Ot)||!h.physics.lineOfSight(B,Ot,null))){It(bt,Math.atan2(B.x-bt.x,B.z-bt.z)*180/Math.PI,()=>Mt(.35));return}}}function It(B,K,yt){let bt=i.figure("Shadow",[B.x,0,B.z],K),Ot=new Ve(bt,{canMove:!1,canDisappear:!0,disappearAfter:.4,cooldown:0,onDisappeared:()=>{yt?.(),h.perception.hit(4),bt.removeFromParent(),Ot.destroy()}});i.shadows.push(Ot),Mi(12,()=>{bt.parent&&!Ot.observed&&(bt.removeFromParent(),Ot.destroy())})}}var bi=(i,t,e)=>new A(i,t,e),sa=i=>({c:i,w:1.2,h:2.1,b:.9}),ra=class extends vi{get power(){return this.has(P.FuseInstalled)}get changed(){return this.chapter>=4}get hallMat(){return this.changed?"wallpaper_stained":"wallpaper_hall"}get livingMat(){return this.changed?"wallpaper_stained":"wallpaper_living"}build(){this.ceiling=2.7,this.atmosphere(this.changed?new mt(.075,.08,.095):new mt(.09,.09,.1),328966,.03),Td(this),this.shell(),this.living(),this.kitchen(),this.bedroom(),this.bathroom(),this.hallway(),this.closet(),this.remoteSet(),this.changed&&this.changedApartment(),this.spawn("default",3.6,0,6.9,300),this.spawn("from_basement",0,0,8.9,180),this.spawn("safe",-5,0,4.4,150)}shell(){let t="wallpaper_bed";this.room("Living",-6,0,-.75,5.5,"floor_wood"),this.room("Kitchen",-6,5.5,-.75,10,"floor_tile"),this.room("Hall",-.75,0,.75,14,"floor_wood"),this.room("Bedroom",.75,5,6,10,"carpet"),this.room("Bath",.75,2,4,5,"tile_bath"),this.room("Closet",.75,0,2.4,2,"floor_wood"),this.wallZ(-6,0,5.5,"plaster",this.livingMat,sa(1.5),sa(4)),this.wallZ(-6,5.5,10,"plaster","plaster",sa(8.3)),this.wallX(0,-6,-.75,"plaster",this.livingMat),this.wallX(10,-6,-.75,"plaster","plaster"),this.wallX(5.5,-6,-.75,this.livingMat,"plaster",{c:-4.5,w:1,h:2.1}),this.wallZ(-.75,0,5.5,this.livingMat,this.hallMat,{c:2.6,w:1.4,h:2.2}),this.wallZ(-.75,5.5,10,"plaster",this.hallMat,{c:7.6,w:1.2,h:2.2}),this.wallZ(.75,0,2,this.hallMat,"plaster",{c:1,w:.8,h:2.05}),this.wallZ(.75,2,5,this.hallMat,"tile_bath",{c:3,w:.85,h:2.05}),this.wallZ(.75,5,10,this.hallMat,t,{c:6,w:.9,h:2.05}),this.wallX(0,-.75,.75,"plaster",this.hallMat,{c:0,w:.9,h:2.1}),this.wallZ(-.75,10,14,"plaster",this.hallMat),this.wallZ(.75,10,14,this.hallMat,"plaster"),this.wallX(14,-.75,.75,this.hallMat,"plaster"),this.wallX(0,.75,2.4,"plaster","plaster"),this.wallZ(2.4,0,2,"plaster","plaster"),this.wallX(2,.75,4,"plaster","tile_bath"),this.wallZ(4,2,5,"tile_bath","plaster"),this.wallX(5,.75,4,"tile_bath",t),this.wallX(5,4,6,"plaster",t),this.wallZ(6,5,10,t,"plaster",sa(6.4)),this.wallX(10,.75,6,t,"plaster"),this.windowAt(-6,1.5,1),this.windowAt(-6,4,1),this.windowAt(-6,8.3,1),this.windowAt(6,6.4,-1)}windowAt(t,e,n){let s=[n,0,0];this.panel("WindowView",[t-n*.07,1.5,e],[1.2,1.2],s,$e("window_night")),this.box("Sill",[t+n*.05,.88,e],[.22,.04,1.35],"wood_painted"),this.box("FrameMid",[t-n*.03,1.5,e],[.05,1.2,.04],"wood_painted",{collide:!1}),this.box("FrameBar",[t-n*.03,1.5,e],[.05,.04,1.2],"wood_painted",{collide:!1});for(let r of[-1,1])this.box("Curtain",[t+n*.12,1.35,e+r*.78],[.06,2.3,.45],"curtain",{collide:!1});this.box("Radiator",[t+n*.12,.45,e],[.1,.55,.95],"metal"),this.pointLight([t+n*.6,1.5,e],new mt(.45,.55,.8),.6,4),h.audio.loop("wind",bi(t,1.5,e),.18,"ambience",6)}chair(t,e,n,s="wood_dark",r=!1){let o=r?.7:1,a=this.group(t,e,n);this.box("Seat",[0,.45*o,0],[.44*o,.05,.44*o],s,{parent:a}),this.box("Back",[0,.74*o,-.2*o],[.44*o,.55*o,.04],s,{parent:a});for(let l=0;l<4;l++)this.box("Leg",[(l%2?.19:-.19)*o,.215*o,(l<2?-.19:.19)*o],[.04,.43*o,.04],s,{parent:a,collide:!1});return a}table(t,e,n,s){let r=this.group(t,e);this.box("Top",[0,n[1]-.025,0],[n[0],.05,n[2]],s,{parent:r});for(let o=0;o<4;o++)this.box("Leg",[(o%2?1:-1)*(n[0]/2-.06),(n[1]-.05)/2,(o<2?-1:1)*(n[2]/2-.06)],[.05,n[1]-.05,.05],s,{parent:r});return r}picture(t,e,n,s){let r=Math.abs(e[2])>.5;this.box("PictureFrame",[t[0]-e[0]*.01,t[1],t[2]-e[2]*.01],r?[n[0]+.08,n[1]+.08,.025]:[.025,n[1]+.08,n[0]+.08],"wood_dark",{collide:!1}),this.panel("Picture",[t[0]+e[0]*.005,t[1],t[2]+e[2]*.005],n,e,this.changed?$e("black"):en(s,.6))}clock(t,e,n,s,r){let o=this.group("Clock",t,Math.atan2(e[0],e[2])*180/Math.PI);this.prim("cylinder","Face",[0,0,0],[.34,.015,.34],"paper",{parent:o,collide:!1,euler:[90,0,0]}),this.prim("cylinder","Rim",[0,0,-.01],[.37,.012,.37],"wood_dark",{parent:o,collide:!1,euler:[90,0,0]});let a=(l,c,u,d)=>{let f=this.group("Hand",[0,0,d],0,o);f.rotation.z=-u,this.box("H",[0,l/2,0],[c,l,.005],"black",{parent:f,collide:!1})};a(.1,.015,(s%12+r/60)*Math.PI/6,.02),a(.14,.01,r*Math.PI/30,.025),n&&(this.clockLoop=h.audio.loop("tick",o,.35,"ambience",7))}bookshelf(t,e,n,s){let r=this.group("Bookshelf",t);this.box("Back",[0,n/2,s/2-.01],[e,n,.02],"wood_dark",{parent:r}),this.box("Side",[-e/2,n/2,0],[.03,n,s],"wood_dark",{parent:r}),this.box("Side",[e/2,n/2,0],[.03,n,s],"wood_dark",{parent:r});let o=[[.35,.12,.1],[.15,.2,.25],[.3,.28,.2],[.18,.25,.17],[.45,.4,.3],[.2,.15,.12]].map(c=>new fi({color:new mt().setRGB(...c,ge),roughness:.8})),a=5,l=()=>(a=a*16807%2147483647)/2147483647;for(let c=0;c<5;c++){let u=.05+c*(n-.1)/4;if(this.box("Shelf",[0,u,0],[e,.03,s],"wood_dark",{parent:r}),c===4)continue;let d=-e/2+.05;for(;d<e/2-.1;){let f=.03+l()*.04,p=.2+l()*.12;if(l()<.12){d+=.12;continue}this.box("Book",[d+f/2,u+.015+p/2,-.02],[f,p,s*.75],o[Math.floor(l()*o.length)],{parent:r,collide:!1}),d+=f+.004}}}living(){this.box("Rug",[-3.4,.005,2.3],[2.6,.01,1.9],"rug",{collide:!1}),this.box("TVStand",[-3.4,.25,.35],[1.3,.5,.45],"wood_dark");let t=this.box("FilmDrawer",[-3,.32,.585],[.45,.14,.02],"wood_light");this.interact(t,"Open drawer",()=>this.takeFilm(),{promptFn:()=>this.has(P.GotCamera)?"Take instant film":"Open drawer"});let e=this.box("TV",[-3.4,.8,.36],[.78,.58,.5],"plastic_dark"),n=this.panel("TVScreen",[-3.4,.82,.615],[.6,.45],[0,0,1],$e("screen_off")),s=this.pointLight([-3.4,.9,1],new mt(.6,.7,.9),.5,4.5);this.tv=new Us(this,n,s,h.audio.loop("static",e,.3,"sfx",9,!1)),this.tvLiveCam=this.tv.feedCamera([-3.4,1.2,.7],[-3.4,1,4]),this.interact(e,"Use television",()=>this.useTelevision());let r=this.sofa=this.group("Sofa",[-3.4,0,3.27]);this.box("Seat",[0,.21,0],[2.1,.42,.85],"fabric_sofa",{parent:r}),this.box("Back",[0,.66,.33],[2.1,.5,.2],"fabric_sofa",{parent:r}),this.box("Arm",[-1,.32,0],[.18,.64,.85],"fabric_sofa",{parent:r}),this.box("Arm",[1,.32,0],[.18,.64,.85],"fabric_sofa",{parent:r}),this.box("Cushion",[-.48,.48,-.05],[.9,.12,.62],"fabric_sofa",{parent:r,collide:!1}),this.box("Cushion",[.48,.48,-.05],[.9,.12,.62],"fabric_sofa",{parent:r,collide:!1}),this.table("CoffeeTable",[-3.4,0,1.85],[1.1,.42,.55],"wood_dark"),this.prim("cylinder","Mug",[-3.1,.47,1.8],[.08,.05,.08],"porcelain",{collide:!1}),this.box("Magazine",[-3.6,.428,1.9],[.3,.01,.22],"paper",{collide:!1,yaw:12}),this.box("SideTable",[-1.95,.25,3.3],[.45,.5,.45],"wood_dark");let o=this.phone=this.box("Phone",[-1.95,.55,3.3],[.22,.09,.18],"plastic_beige");this.prim("capsule","Handset",[0,.07,0],[.05,.11,.05],"plastic_beige",{parent:o,collide:!1,euler:[0,0,90]}),this.interact(o,"Pick up the phone",()=>this.answerPhone(),{promptFn:()=>this.ringing?"Answer the telephone":"Pick up the phone"}),this.ringLoop=h.audio.loop("ring",o,.9,"sfx",16,!1),this.prim("cylinder","LampPole",[-5.4,.75,3.9],[.03,.75,.03],"metal"),this.prim("cylinder","LampBase",[-5.4,.02,3.9],[.3,.02,.3],"metal",{collide:!1});let a=this.prim("cylinder","LampShade",[-5.4,1.6,3.9],[.42,.16,.42],"lampshade");this.lamp=this.ceilingLight("FloorLamp",[-5.4,1.5,3.9],wn,1,4.5,{bare:!0}),this.interact(a,"Switch lamp",()=>{this.lamp.on=!this.lamp.on,h.audio.playAt("switch",bi(-5.4,1.5,3.9),.5)},{promptFn:()=>this.lamp.on?"Switch lamp off":"Switch lamp on"}),this.zones.push({p:bi(-5,0,3.9),r:1.5,rate:3,active:()=>this.lamp.lit}),this.bookshelf([-1.7,0,5.27],1,1.9,.32),this.box("FamilyFrame",[-2.9,1.5,5.425],[.66,.52,.03],"wood_dark"),this.framePicture=this.panel("FamilyPicture",[-2.9,1.5,5.405],[.56,.42],[0,0,-1],$e("black"),{collide:!0}),this.interact(this.framePicture,"Examine the frame",()=>this.useFamilyFrame(),{promptFn:()=>this.has(P.PhotoRestored)?"Look at the photograph":"Examine the empty frame"}),this.updateFramePicture();let l=this.group("ShelfPhoto",[-1.7,1.95,5.2]);this.box("Frame",[0,0,0],[.22,.17,.02],"wood_dark",{parent:l,collide:!1});let c=en(Sn(!0),.5),u=en(Sn(!1),.5),d=this.panel("Photo",[0,0,-.012],[.19,.14],[0,0,-1],c,{parent:l}),f=new Ve(l,{minChapter:2,delay:5,minPlayerDist:1.5,checkOccupancy:!1,onNoticed:()=>this.thought("The photo on the shelf. There were three people in it. Weren't there?")});f.action(()=>d.material=u),this.chapter>=3&&f.jumpToStep(0),this.picture([-5.93,1.6,2.75],[1,0,0],[.4,.3],Sn(!1)),this.picture([-5.93,1.75,.45],[1,0,0],[.3,.4],Gt.grain([.4,.45,.4],.3,4)),this.clock([-.83,2,4.4],[-1,0,0],!this.changed,9,40),this.table("DiningTable",[-5.2,0,1],[.7,.74,.7],"wood_light"),this.chair("Chair",[-5.2,0,1.62],180);let p=this.chair("WatchedChair",[-4.55,0,1],270);this.watchedChair=new Ve(p,{delay:4,maxMove:3,minPlayerDist:3,cooldown:20,sound:"scrape",soundVol:.25,condition:()=>this.watchedChair.stepIndex<0?this.has(P.Phone1)&&this.has(P.FuseInstalled):this.has(P.TvLiveSeen),onNoticed:y=>{y.stepIndex===0&&!this.has(P.ChairNoticed)?(h.perception.hit(6),this.thought("That chair was by the table. I'm sure it was by the table."),h.story.set(P.ChairNoticed)):y.stepIndex===1&&(h.perception.hit(6),this.thought("It's facing the hallway now. Like it's waiting for someone to come home."),h.story.set("chair_faces_hall"))}}),this.watchedChair.pose(-4.3,0,1.25,150).pose(-2.15,0,2.45,90),this.has("chair_faces_hall")?this.watchedChair.jumpToStep(1):this.has(P.ChairNoticed)&&this.watchedChair.jumpToStep(0),this.livingLight=this.ceilingLight("LivingLight",[-3.4,2.5,2.75],wn,1.3,7),this.livingLight.on=!1,this.lightSwitch([-.83,1.2,3.55],[-1,0,0],null,this.livingLight),this.dust([-5,1.3,3.6],[1.5,1.5,1.5])}kitchen(){this.box("Counter",[-4,.44,9.68],[3.6,.88,.6],"wood_painted"),this.box("Worktop",[-4,.9,9.67],[3.65,.04,.64],"wood_light"),this.box("Backsplash",[-4,1.22,9.93],[3.6,.6,.02],"tile_kitchen",{collide:!1}),this.box("Hob",[-5.2,.925,9.65],[.6,.012,.5],"black",{collide:!1});let t=this.box("Sink",[-3.5,.925,9.65],[.5,.015,.4],"chrome");this.box("Tap",[-3.5,1.05,9.88],[.03,.25,.03],"chrome",{collide:!1}),this.interact(t,"Run cold water",()=>{h.audio.playAt("water",bi(-3.5,1,9.7),.5),this.ground("sink",25,"Cold water over your hands and wrists. This is real. This is real.")});let e=this.box("Drawer",[-4.3,.78,9.37],[.45,.14,.02],"wood_light");this.interact(e,"Open drawer",()=>{h.audio.playAt("doorOpen",bi(-4.3,.8,9.4),.3,1.6),this.has(P.GotFuse)?this.thought("Cutlery. Birthday candles, still in the packet."):(h.inventory.add(ie.Fuse),h.story.set(P.GotFuse),this.thought("A fuse. HALL, in pencil."))}),this.box("WallCabinets",[-4.45,1.95,9.8],[2.7,.7,.35],"wood_painted"),this.box("CabinetBack",[-2.4,1.95,9.96],[.6,.7,.03],"wood_painted"),this.box("CabinetTop",[-2.4,2.29,9.8],[.6,.02,.35],"wood_painted"),this.box("CabinetBottom",[-2.4,1.61,9.8],[.6,.02,.35],"wood_painted"),this.box("CabinetSide",[-2.1,1.95,9.8],[.02,.7,.35],"wood_painted");let n=Me(256,256),s=n.getContext("2d");s.fillStyle="#9e998a",s.fillRect(0,0,256,256),s.fillStyle="#2a1c15",s.font=`30px ${tn}`,s.fillText("SHE WAS",20,50),s.fillText("RIGHT THERE",20,86),s.font=`20px ${tn}`,s.fillText("SHE WAS RIGHT THERE",24,128),s.fillText("SHE WAS RIGHT THERE",18,152),Hi(s,"cross",60,205,26,6,"#46100c"),s.fillStyle="#46100c",s.font=`44px ${tn}`,s.fillText("= 9",110,220);let r=this.panel("CabinetMessage",[-2.4,1.95,9.94],[.55,.66],[0,0,-1],en(n),{collide:!0});this.interact(r,"Read the scratches",()=>{h.inventory.read("cabinet"),h.story.set(P.KitchenMsg)}),this.cabinetDoor=this.makeDoor("cabinet",[-2.7,1.6,9.62],0,.6,"wood_painted",105,.7),this.cabinetDoor.isLocked=()=>!this.has(P.RadioOff),this.cabinetDoor.onLocked=()=>this.thought("It's stuck. Something on the other side is holding it shut."),this.cabinetDoor.onOpened=()=>{this.has(P.KitchenMsg)||(h.perception.hit(8),h.inventory.read("cabinet"),h.story.set(P.KitchenMsg))},this.has(P.RadioOff)&&this.cabinetDoor.setAngleInstant(this.has(P.KitchenMsg)?105:12);let o=this.box("Fridge",[-1.45,.9,9.6],[.7,1.8,.65],"appliance");this.box("Handle",[-1.75,1.2,9.255],[.03,.35,.03],"chrome",{collide:!1}),this.fridgeLoop=h.audio.loop("fridge",o,.3,"ambience",7);let a=this.panel("FridgeNote",[-1.4,1.35,9.27],[.13,.16],[0,0,-1],en(Yo(`FUSES
DRAWER`,64,80,14,"#1a1a4d","#e6e09a",tn)),{collide:!0});this.interact(a,"Read note",()=>h.inventory.read("fridge_note"));let l=this.radio=this.box("Radio",[-2.75,1.02,9.72],[.34,.2,.15],"plastic_dark");this.prim("cylinder","Dial",[.1,0,-.08],[.05,.01,.05],"chrome",{parent:l,collide:!1,euler:[90,0,0]}),this.radioLoop=h.audio.loop("static",l,.25,"sfx",9,!1),this.interact(l,"Switch radio",()=>this.useRadio(),{promptFn:()=>this.radioLoop.isPlaying?"Switch the radio off":"Switch the radio on"}),this.has(P.RadioOn)&&!this.has(P.RadioOff)&&this.radioLoop.play(),this.table("KitchenTable",[-3.6,0,7.4],[1.4,.75,.85],"wood_light");let c=this.changed?180:0;this.chair("KChair",[-4.6,0,7.4],90+c),this.chair("KChair",[-2.6,0,7.4],270+c),this.chair("KChair",[-3.6,0,6.75],c);for(let f of[[-4,7.4],[-3.2,7.4],[-3.6,7.15]])this.prim("cylinder","Plate",[f[0],.76,f[1]],[.24,.006,.24],"porcelain",{collide:!1});let u=this.group("SmallPlate",[-3.6,.76,7.7]);this.prim("cylinder","Plate",[0,0,0],[.18,.006,.18],"plastic_red",{parent:u,collide:!1});let d=new Ve(u,{minChapter:2,minPlayerDist:2,cooldown:45,checkOccupancy:!1,loop:!0});d.action(()=>d.setVisible(!1)).action(()=>d.setVisible(!0)),this.clock([-5.93,2,6.6],[1,0,0],!1,9,40),this.kitchenLight=this.ceilingLight("KitchenLight",[-3.4,2.5,7.7],wn,1.2,6.5),this.kitchenLight.on=!1,this.lightSwitch([-.83,1.2,8.4],[-1,0,0],null,this.kitchenLight)}bedroom(){this.box("BedFrame",[4.95,.32,8],[2,.15,1.45],"wood_dark");for(let c=0;c<4;c++)this.box("BedLeg",[c%2?5.9:4,.125,c<2?7.33:8.67],[.06,.25,.06],"wood_dark",{collide:!1});if(this.box("Mattress",[4.95,.5,8],[1.95,.2,1.4],"fabric_bed"),this.box("Headboard",[5.94,.65,8],[.06,1,1.45],"wood_dark"),this.box("Pillow",[5.62,.65,8],[.35,.1,1],"fabric_bed",{collide:!1}),this.changed||this.box("Blanket",[4.6,.62,8],[1.3,.05,1.46],"sheet",{collide:!1}),this.box("BedsideTable",[5.6,.3,9.2],[.45,.6,.4],"wood_dark"),!this.has(P.GotFlashlight)){let c=this.prim("cylinder","Flashlight",[5.5,.64,9.15],[.06,.12,.06],"metal",{euler:[0,30,90]});this.pickup(c,"Take flashlight",()=>{h.inventory.add(ie.Flashlight),h.story.set(P.GotFlashlight),h.notify(`Flashlight: press ${Re(h.settings.keys.flashlight)}`)})}let t=this.prim("cylinder","Wristwatch",[5.72,.61,9.3],[.06,.008,.06],"chrome");this.interact(t,"Hold the wristwatch",()=>this.ground("watch",20,"It still ticks. You count sixty seconds, and the room holds still."));let e=this.group("Wardrobe",[2.6,0,9.7]);this.box("Back",[0,1,.27],[1.2,2,.03],"wood_dark",{parent:e}),this.box("Side",[-.59,1,0],[.03,2,.57],"wood_dark",{parent:e}),this.box("Side",[.59,1,0],[.03,2,.57],"wood_dark",{parent:e}),this.box("Top",[0,1.99,0],[1.2,.03,.57],"wood_dark",{parent:e}),this.box("Bottom",[0,.06,0],[1.2,.12,.57],"wood_dark",{parent:e}),this.prim("cylinder","Rail",[0,1.75,.05],[.02,.58,.02],"chrome",{parent:e,collide:!1,euler:[0,0,90]}),this.box("ChildDress",[-.2,1.42,.05],[.3,.6,.05],"child_clothes",{parent:e,collide:!1}),this.box("ChildCoat",[.15,1.38,.05],[.32,.68,.06],"fabric_child",{parent:e,collide:!1}),this.box("SmallShoes",[.3,.15,0],[.12,.06,.16],"red_shoe",{parent:e,collide:!1}),this.panel("Tally",[-.57,1.2,0],[.4,.8],[1,0,0],en(Yo(`IIII IIII
IIII IIII
IIII IIII
IIII IIII
IIII IIII
IIII III`,128,256,22,"#8c7359","#4d3324",tn)),{parent:e}),this.note("Diary",[2.4,.14,9.65],[.18,.03,.24],"diary","plastic_red",15,()=>h.story.set(P.DiaryRead));let n=this.panel("Drawing",[2.75,.85,9.95],[.4,.3],[0,0,-1],en(xd()),{collide:!0});this.interact(n,"Look at the drawing",()=>h.inventory.read("drawing"));let s=this.makeDoor("wardrobe",[2.02,.12,9.41],0,.58,"wood_dark",100,1.86),r=this.makeDoor("wardrobe",[3.18,.12,9.41],180,.58,"wood_dark",-100,1.86);for(let c of[s,r])c.isLocked=()=>!this.has(P.GotBrassKey),c.onLocked=()=>this.thought("Locked. A small brass keyhole."),c.onOpened=()=>{this.has(P.WardrobeOpen)||(h.story.set(P.WardrobeOpen),h.perception.hit(8),h.audio.playAt("creak",c.worldPos(),.5),this.thought("Small clothes. A child's. Why does this apartment have a child's clothes?"))};this.has(P.WardrobeOpen)&&(s.setAngleInstant(100),r.setAngleInstant(-100)),this.table("Desk",[4.5,0,5.38],[1.2,.76,.6],"wood_light");let o=this.group("DeskDrawer",[4.5,.64,5.38]);this.box("Drawer",[0,0,0],[.5,.12,.52],"wood_light",{parent:o}),this.interact(o,"Open drawer",()=>{h.audio.playAt("doorOpen",bi(4.5,.7,5.6),.3,1.5),this.has(P.GotCamera)?this.thought("Pencils. A hospital wristband, cut through. The name has been scratched off."):(h.inventory.add(ie.Camera),h.inventory.add(ie.Film,6),h.story.set(P.GotCamera),h.notify(`Take a photograph: ${Re(h.settings.keys.camera)}    Inventory: ${Re(h.settings.keys.inventory)}`),this.thought("An old instant camera. Someone loaded it."))}),new Ve(o,{minChapter:2,checkOccupancy:!1,minPlayerDist:2.5,cooldown:60,loop:!0,sound:"scrape",soundVol:.15}).pose(4.5,.64,5.68,0).pose(4.5,.64,5.38,0),this.chair("DeskChair",[4.5,0,6],180),this.box("Papers",[4.2,.765,5.3],[.3,.01,.22],"paper",{collide:!1,yaw:-8}),this.prim("cylinder","Mug",[4.95,.8,5.25],[.08,.05,.08],"porcelain",{collide:!1}),this.box("MirrorFrame",[.8,1.45,8.7],[.02,1.08,.63],"wood_dark",{collide:!1}),this.bedMirror=new ur(this,[.815,1.45,8.7],[1,0,0],.55,1);let l=this.box("MirrorCollider",[.82,1.45,8.7],[.03,1,.55],"black");l.visible=!1,this.interact(l,"Look in the mirror",()=>this.thought(this.has(P.MemoriesDone)?"Adrian. That's my face. Adrian.":"A tired man. I don't know his name either.")),this.bedLight=this.ceilingLight("BedroomLight",[3.4,2.5,7.5],wn,1.1,6.5),this.bedLight.on=!1,this.lightSwitch([.83,1.2,6.75],[1,0,0],null,this.bedLight),this.bedDoor=this.makeDoor("door",[.75,0,5.55],-90,.9,"door"),this.dust([3.5,1.2,7.5],[3,2,3])}bathroom(){this.prim("cylinder","Pedestal",[2.2,.4,4.75],[.15,.4,.15],"porcelain");let t=this.box("Basin",[2.2,.85,4.72],[.55,.15,.42],"porcelain");this.box("Tap",[2.2,1,4.88],[.03,.15,.03],"chrome",{collide:!1}),this.waterLoop=h.audio.loop("water",bi(2.2,.95,4.72),.4,"sfx",8,!1),this.interact(t,"Turn the tap",()=>{this.waterLoop.isPlaying?(this.waterLoop.stop(),this.thought("The water was running. I didn't leave it running.")):(this.waterLoop.play(),setTimeout(()=>this.waterLoop.stop(),4e3))},{promptFn:()=>this.waterLoop.isPlaying?"Turn off the tap":"Turn the tap"}),this.box("MirrorFrame",[2.2,1.55,4.94],[.68,.83,.02],"chrome",{collide:!1}),this.bathMirror=new ur(this,[2.2,1.55,4.925],[0,0,-1],.6,.75);let e=this.box("MirrorCollider",[2.2,1.55,4.93],[.6,.75,.03],"black");e.visible=!1,this.interact(e,"Look in the mirror",()=>this.thought(this.has(P.MirrorMsg)?"11, 4, 7. Written from the inside of the glass.":"My reflection looks back. It takes a moment too long."));let n=Yo(`CH
11 4 7`,256,320,64,"rgba(225,232,236,1)",null,tn),s=n.getContext("2d");if(s.strokeStyle="rgba(225,232,236,1)",s.lineWidth=5,s.strokeRect(70,250,116,50),this.mirrorMsg=this.panel("MirrorWriting",[2.2,1.55,4.918],[.5,.62],[0,0,-1],qc(pn(n,!1),16777215,!0)),this.mirrorMsg.visible=this.has(P.MirrorMsg),!this.has(P.GotBrassKey)){let a=this.bathKey=this.prim("cube","BrassKey",[2.45,.012,4.55],[.07,.012,.03],"brass",{collide:!1,euler:[0,25,0]});this.has(P.KeyRevealed)?this.makeKeyReal():a.layers.set(Gi),h.reveals.push({object:a,maxDist:4.5,caption:"Under the sink there is something small and brass. It wasn't there when you looked.",active:()=>!this.has(P.KeyRevealed)&&this.has(P.GotCamera),onRevealed:()=>{h.story.set(P.KeyRevealed),this.makeKeyReal()}})}let r=this.panel("CircleSymbol",[2.95,.55,4.935],[.5,.25],[0,0,-1],qc(pn(_d("circle","= 0","#5a140f",null),!1)),{layer:Gi});h.reveals.push({object:r,maxDist:4.5,caption:"On the tiles beside the sink, something is drawn: a circle, and the number 0.",active:()=>this.has(P.GotCamera),onRevealed:()=>{this.has(P.CircleSeen)||(h.story.set(P.CircleSeen),h.story.journal("Bathroom tiles (in a photograph): CIRCLE = 0"))}}),this.box("Bathtub",[3.55,.275,3.05],[.75,.55,1.65],"porcelain"),this.box("BathWater",[3.55,.555,3.05],[.6,.01,1.5],"water",{collide:!1}),this.box("BathTap",[3.55,.75,3.85],[.04,.3,.04],"chrome",{collide:!1}),this.prim("cylinder","ShowerHead",[3.55,2.05,3.82],[.12,.02,.12],"chrome",{collide:!1,euler:[30,0,0]}),this.prim("cylinder","CurtainRail",[3.17,2.2,3.05],[.02,.85,.02],"chrome",{collide:!1,euler:[90,0,0]}),this.box("ShowerCurtain",[3.17,1.4,2.6],[.02,1.55,.75],"sheet",{collide:!1}),this.box("Toilet",[1.2,.2,4.62],[.4,.4,.55],"porcelain"),this.box("Cistern",[1.2,.6,4.85],[.4,.4,.16],"porcelain");let o=this.box("MedicineCabinet",[2.6,1.5,2.1],[.5,.6,.15],"wood_painted");this.interact(o,"Open cabinet",()=>this.thought("Sleeping pills, a lot of them. A child's toothbrush, still damp.")),this.tvBathCam=this.tv.feedCamera([1.05,2.25,2.35],[2.45,.35,4.6]),this.bathLight=this.ceilingLight("BathroomLight",[2.4,2.5,3.5],$c,1,4.5,{bare:!0}),this.bathLight.on=!1,this.bathLight.alwaysUnstable=this.chapter>=2,this.lightSwitch([.83,1.2,3.65],[1,0,0],null,this.bathLight),this.bathDoor=this.makeDoor("door",[.75,0,2.575],-90,.85,"door")}makeKeyReal(){let t=this.bathKey;t.layers.set(0),t.scale.set(.07,.03,.06),h.physics.add(t,{solid:!1}),this.pickup(t,"Take the small brass key",()=>{h.inventory.add(ie.BrassKey),h.story.set(P.GotBrassKey),this.thought("It's cold. Real.")})}hallway(){let t=()=>this.power;this.hall1=this.ceilingLight("HallLight",[0,2.5,2.5],wn,.9,5,{power:t}),this.hall2=this.ceilingLight("HallLight",[0,2.5,7.5],wn,.9,5,{power:t}),this.extLight=this.ceilingLight("ExtensionBulb",[0,2.4,12.4],new mt(.9,.85,.7),.35,4,{shadows:!1,bare:!0,power:()=>t()&&this.falseWall?.position.z>11}),this.lightSwitch([-.69,1.2,.45],[1,0,0],t,this.hall1,this.hall2),this.zones.push({p:bi(0,0,12),r:2.2,rate:-1.5});let e=this.box("FuseBox",[-.7,1.55,.95],[.08,.4,.3],"metal");this.interact(e,"Open fuse box",()=>this.useFuseBox(),{promptFn:()=>this.power?"Fuse box":h.inventory.has(ie.Fuse)?"Insert the fuse":"Open fuse box"}),this.box("Console",[.55,.4,4.3],[.25,.8,.8],"wood_dark"),this.prim("cylinder","KeyBowl",[.55,.83,4.3],[.18,.03,.18],"porcelain",{collide:!1}),this.box("Runner",[0,.005,5],[.8,.01,8.5],"rug",{collide:!1});for(let n=0;n<3;n++)this.box("CoatHook",[.71,1.75,.25+n*.2],[.05,.03,.03],"brass",{collide:!1});this.box("Coat",[.64,1.35,.35],[.08,.8,.35],"clothes",{collide:!1}),this.picture([-.7,1.6,5],[1,0,0],[.35,.45],Gt.grain([.35,.4,.45],.3,4)),this.picture([.7,1.6,8.5],[-1,0,0],[.45,.35],Sn(!1)),this.frontDoor=this.makeDoor("front door",[-.45,0,0],0,.9,"door_front",-95,2.1),this.frontDoor.isLocked=()=>!0,this.frontDoor.onLocked=()=>this.useFrontDoor(),this.box("DoorChain",[.3,1.5,.06],[.1,.02,.01],"brass",{collide:!1}),this.buildFalseWall()}buildFalseWall(){let t=this.falseWall=this.group("HallEnd",[0,0,10]);this.box("Wall",[-.6,1.35,0],[.3,2.7,.12],this.hallMat,{parent:t}),this.box("Wall",[.6,1.35,0],[.3,2.7,.12],this.hallMat,{parent:t}),this.box("Wall",[0,2.375,0],[.9,.65,.12],this.hallMat,{parent:t});let e=this.box("BasementDoor",[0,1.025,0],[.88,2.05,.05],"door",{parent:t});this.prim("sphere","Knob",[.32,1,-.04],[.055,.055,.055],"brass",{parent:t,collide:!1}),this.has(P.BasementUnlocked)||(this.padlock=this.group("Padlock",[.32,1.15,-.07],0,t),this.box("Body",[0,0,0],[.09,.1,.04],"brass",{parent:this.padlock,collide:!1}),this.prim("cylinder","Shackle",[0,.07,0],[.06,.03,.06],"chrome",{parent:this.padlock,collide:!1})),this.interact(e,"Basement door",()=>this.useBasementDoor(),{promptFn:()=>this.has(P.BasementUnlocked)?"Go down to the basement":"Examine the padlock"}),new Ve(t,{minChapter:3,delay:3,cooldown:50,maxMove:3.2,minPlayerDist:4,loop:!0,sound:"creak",soundVol:.2,condition:()=>this.chapter<=4&&h.player&&h.player.position.z<8.3&&Math.abs(h.player.position.x)<.8,onNoticed:s=>{s.stepIndex===0&&(h.perception.hit(5),this.thought("The hallway is longer. It is longer than it was."))}}).pose(0,0,13,0).pose(0,0,10,0)}closet(){let t=this.has(P.ClosetFound);this.closetFiller=this.box("Wall",[.75,1.025,1],[.12,2.05,.8],this.hallMat);let e=this.closetRoot=this.group("ClosetContents");this.closetDoor=this.makeDoor("closet",[.75,0,.6],-90,.8,"door"),e.attach(this.closetDoor.frame),this.box("Shelf",[1.6,1.55,.22],[1.5,.03,.35],"wood_painted",{parent:e}),this.box("OldCoat",[2.1,1.2,1],[.4,1,.1],"clothes",{parent:e,collide:!1,yaw:90}),this.box("SmallCoat",[1.9,1.35,1.4],[.3,.6,.08],"child_clothes",{parent:e,collide:!1,yaw:90});let n=this.box("ClosetNote",[1.3,1.575,.2],[.2,.01,.26],"paper",{parent:e});if(this.interact(n,"Read note",()=>{h.inventory.read("closet_note"),this.has("square_seen")||(h.story.set("square_seen"),h.story.journal("Closet note: SQUARE = 1"))}),!this.has(P.FragA)){let s=this.box("Fragment",[1.85,1.575,.22],[.14,.01,.11],"paper",{parent:e});this.pickup(s,"Take the torn photograph",()=>{h.inventory.add(P.FragA),h.story.set(P.FragA),h.perception.restore(10),this.thought("Part of a photograph. A man's shoulder.")})}this.closetLight=this.ceilingLight("ClosetBulb",[1.6,2.4,1],wn,.5,3,{shadows:!1,bare:!0,power:()=>this.has(P.ClosetFound)}),h.physics.refreshOwner(e),this.setClosetVisible(t)}setClosetVisible(t){this.closetFiller.visible=!t,h.physics.setEnabled(this.closetFiller,!t),this.closetRoot.visible=t,h.physics.setEnabled(this.closetRoot,t)}remoteSet(){let t=this.group("RemoteSet",[0,-30,0]);this.box("Floor",[0,-.05,0],[4,.1,4],"carpet",{parent:t,collide:!1}),this.box("Wall",[0,1.25,2],[4,2.5,.1],"wallpaper_child",{parent:t,collide:!1}),this.box("Wall",[-2,1.25,0],[.1,2.5,4],"wallpaper_child",{parent:t,collide:!1}),this.box("Wall",[2,1.25,0],[.1,2.5,4],"wallpaper_child",{parent:t,collide:!1}),this.box("Bed",[-1.2,.25,1.1],[1.2,.4,1.6],"fabric_child",{parent:t,collide:!1}),this.chair("EmptyChair",[.3,-30,.6],180,"wood_painted",!0).traverse(s=>{s.userData.phys&&(s.userData.phys.enabled=!1)}),this.prim("sphere","Rabbit",[-1,.55,1.3],[.18,.22,.15],"rabbit",{parent:t,collide:!1});let n=new $n(new mt(1,.7,.6),.9*h.lightScale,5,1.6);n.position.set(.5,2,-.5),t.add(n),this.remoteCam=this.tv.feedCamera([1.5,-28.5,-1.6],[0,-29.4,.8])}changedApartment(){this.sofa.rotation.y=Math.PI,this.sofa.position.z=3.4,h.physics.refreshOwner(this.sofa);for(let t of[this.livingLight,this.kitchenLight,this.bedLight,this.hall1,this.hall2])t.light.color.lerp($c,.5),t.base*=.75;for(let t=0;t<7;t++){let e=t%2===0;this.panel("Drawing",[e?-.685:.685,1.2+t*37%10/16,1.5+t*1.15],[.3,.22],e?[1,0,0]:[-1,0,0],en(vd(t)))}this.tv.static()}};var oa=class{constructor(t,e,n,s){this.root=t,this.nodes=e,this.home=n.clone(),this.active=s,this.speed=1.5,this.closedSpeed=2.6,this.target=n.clone(),this.repath=0,this.stepDist=0,this.since=h.time,this.links=e.map((r,o)=>e.map((a,l)=>o!==l&&this.clear(r,a)?l:-1).filter(a=>a>=0)),this.obs=new Ve(t,{canMove:!1,checkOccupancy:!1,whileObserved:()=>h.perception.drain(4*(1+Math.max(0,1-this.dist()/8)))}),this.heart=h.audio.loop("heartbeat",t,0,"sfx",6)}clear(t,e){return h.physics.lineOfSight(t.clone().setY(1),e.clone().setY(1),null)}dist(){return h.player?Math.hypot(h.player.position.x-this.root.position.x,h.player.position.z-this.root.position.z):99}resetHome(){this.root.position.copy(this.home),this.since=h.time}remove(){this.heart.stop(),this.obs.destroy(),this.root.removeFromParent()}update(t){let e=h.player,n=this.active();if(this.heart.setVolume(n?Math.max(0,1-this.dist()/6)*.7:0),!n||!e||h.state!=="playing"||h.time-this.since<5)return;let s=e.position.clone().sub(this.root.position).setY(0);if(s.lengthSq()>.01&&(this.root.rotation.y=Math.atan2(s.x,s.z)),this.dist()<.85){h.audio.play2D("stinger",.7),e.shake(.05,.6),h.perception.hit(30),h.blackout("It touched me. It was so cold.");return}if(this.obs.observed||h.observation.isBoxObserved(this.obs.bounds(),this.root))return;this.repath-=t,this.repath<=0&&(this.repath=.4,this.target=this.nextPoint(e.position));let r=this.root.position.clone(),o=this.target.clone().setY(0).sub(r.clone().setY(0)),a=o.length();if(a<.01)return;let l=Math.min(a,(e.eyesClosed?this.closedSpeed:this.speed)*t);if(this.root.position.addScaledVector(o,l/a),this.root.updateMatrixWorld(!0),h.observation.isBoxObserved(this.obs.bounds(),this.root)){this.root.position.copy(r);return}this.stepDist+=l,this.stepDist>.7&&(this.stepDist=0,h.audio.playAt("stepHeavy",this.root.position,.45,.7+Math.random()*.15,"sfx",12))}nextPoint(t){let e=this.root.position;if(this.clear(e,t))return t.clone();let n=this.nodes.length,s=new Array(n).fill(-1),r=[];for(this.nodes.forEach((l,c)=>{this.clear(l,t)&&(s[c]=0,r.push(c))});r.length;){let l=r.shift();for(let c of this.links[l])s[c]<0&&(s[c]=s[l]+1,r.push(c))}let o=-1,a=1/0;return this.nodes.forEach((l,c)=>{if(s[c]>=0&&this.clear(e,l)){let u=s[c]*10+e.distanceTo(l);u<a&&(a=u,o=c)}}),o>=0?this.nodes[o].clone():e.clone()}};var Ie=(i,t,e)=>new A(i,t,e),Xi=i=>new Promise(t=>setTimeout(t,i*1e3)),Yi=[P.Breaker1,P.Breaker2,P.Breaker3],aa=class extends vi{get power(){return this.has(P.PowerOn)}build(){this.ceiling=2.5,this.atmosphere(new mt(.06,.062,.07),197380,.06),this.room("Basement",-5,0,5,12,"concrete","concrete"),this.room("Mira",-2,12,2,15.5,"carpet","ceiling"),this.wallZ(-5,0,12,"concrete","concrete_wall"),this.wallZ(5,0,12,"concrete_wall","concrete"),this.wallX(0,-5,5,"concrete","concrete_wall",{c:0,w:1.2,h:2.5}),this.wallX(12,-5,5,"concrete_wall","wallpaper_child",{c:0,w:.9,h:2.05}),this.wallZ(-2,12,15.5,"concrete","wallpaper_child"),this.wallZ(2,12,15.5,"wallpaper_child","concrete"),this.wallX(15.5,-2,2,"wallpaper_child","concrete"),this.lampMats=[],this.stairs(),this.props(),this.breakers(),this.miraRoom(),this.power||this.presence(),this.spawn("default",0,0,1,0),this.spawn("safe",0,0,1,0),this.updaters.push(t=>this.tick(t))}stairs(){let t=this.group("Stairs");for(let n=0;n<10;n++){let s=.18*(n+1);this.box("Step",[0,s/2,-.14-n*.28],[1.2,s,.28],"wood_dark",{parent:t})}this.box("StairWall",[-.65,2.1,-1.5],[.1,4.2,3.1],"concrete_wall"),this.box("StairWall",[.65,2.1,-1.5],[.1,4.2,3.1],"concrete_wall"),this.box("StairEnd",[0,2.1,-3.05],[1.4,4.2,.1],"concrete_wall"),this.box("StairCeiling",[0,4.25,-1.5],[1.4,.1,3.2],"concrete"),this.box("UpstairsDoor",[0,2.8,-2.97],[.9,2,.05],"door",{collide:!1}),this.interact(t,"Go upstairs",()=>h.transitionTo("apartment","from_basement"),{maxDist:2.6});let e=this.ceilingLight("EmergencyBulb",[0,2.3,.5],new mt(1,.75,.5),.6,4,{bare:!0});this.zones.push({p:Ie(0,0,.8),r:1.8,rate:2.5}),h.audio.loop("buzz",e.light,.12,"ambience",4),h.audio.loop("roomTone",Ie(0,1.5,6),.5,"ambience",20)}props(){for(let[c,u]of[[-2,4],[2,4],[-2,8],[2,8]])this.box("Pillar",[c,1.25,u],[.4,2.5,.4],"concrete_wall");for(let c=0;c<4;c++)this.box("Shelf",[-4.6,.3+c*.55,3.5],[.5,.03,3],"metal");this.box("ShelfPost",[-4.6,1,2],[.5,2,.04],"metal"),this.box("ShelfPost",[-4.6,1,5],[.5,2,.04],"metal");let t=9,e=()=>(t=t*16807%2147483647)/2147483647;for(let c=0;c<4;c++)for(let u=0;u<4;u++){if(e()<.25)continue;let d=.25+e()*.2;this.box("Carton",[-4.6,.32+c*.55+d/2,2.3+u*.72],[.42,d,.55],"cardboard",{yaw:e()*10})}this.note("Clipping",[-4.45,.885,4.6],[.2,.01,.28],"clipping","paper",0,()=>this.memory("read_clipping")),this.box("MiraBox",[-4,.2,7],[.6,.4,.5],"cardboard");let n=this.box("Flap",[-4,.42,6.72],[.6,.02,.25],"cardboard",{collide:!1});n.rotation.x=-60*Math.PI/180;let s=this.box("BoxLabel",[-4,.25,6.745],[.35,.12,.01],"paper");if(this.interact(s,"Read the label",()=>h.inventory.read("basement_note")),!this.has(P.FragD)){let c=this.box("Fragment",[-4,.41,7.05],[.14,.01,.11],"paper");this.pickup(c,"Take the torn photograph",()=>{h.inventory.add(P.FragD),h.story.set(P.FragD),h.perception.restore(10),this.thought("A corner of a photograph. A small yellow sleeve.")})}let r=this.group("OldDesk",[-3.8,0,10]);this.box("Top",[0,.74,0],[1.2,.04,.6],"wood_dark",{parent:r}),this.box("Body",[-.4,.36,0],[.4,.72,.58],"wood_dark",{parent:r}),this.box("Leg",[.55,.36,0],[.05,.72,.55],"wood_dark",{parent:r}),this.note("Coroner",[-4,.765,10],[.22,.01,.3],"coroner","paper",8,()=>this.memory("read_coroner")),this.note("Psych",[-3.5,.765,10.05],[.22,.01,.3],"psych","paper",-12,()=>this.memory("read_psych")),this.note("Letter",[-3.2,.005,11.2],[.18,.01,.24],"letter","paper",30,()=>this.memory("read_letter")),this.box("FramedPhoto",[-4.94,1.5,10],[.03,.4,.5],"wood_dark",{collide:!1}),this.panel("Photo",[-4.92,1.5,10],[.42,.32],[1,0,0],en(Sn(!1),.5)),this.box("SheetSofa",[3.8,.5,2.5],[1.4,1,.8],"sheet"),this.box("SheetChair",[3.9,.45,5.5],[.9,.9,1.6],"sheet"),this.box("SheetTall",[4.3,.9,7],[.6,1.8,.6],"sheet"),this.box("BikeSmall",[1,.3,11.3],[.9,.6,.2],"plastic_red"),this.box("TVCabinet",[3.7,.3,10.8],[.5,.6,.9],"wood_dark");let o=this.box("OldTV",[3.75,.83,10.8],[.45,.45,.6],"plastic_dark"),a=this.panel("Screen",[3.52,.85,10.8],[.48,.36],[-1,0,0],$e("screen_off")),l=this.pointLight([3,.9,10.8],new mt(.6,.7,.9),.5,4);this.tv=new Us(this,a,l,h.audio.loop("static",o,.25,"sfx",8,!1)),this.interact(o,"Examine the television",()=>{this.power?!this.has(P.TapeSeen)&&!this.tapePlaying?this.tape():this.thought("A home video, worn thin from being watched."):this.thought("The screen is cracked. The plug is in, but there's no power down here.")}),this.has(P.TapeSeen)&&this.spawnFragC()}memory(t){this.has(t)||(h.story.set(t),h.perception.restore(8,"You remember a little more."))}breakers(){for(let[e,n]of[[-2.5,3],[2.5,3],[-2.5,9.5],[2.5,9.5]])this.ceilingLight("Bulb",[e,2.3,n],new mt(1,.82,.6),.95,6.5,{bare:!0,power:()=>this.power,shadows:e<0});let t=this.box("ElectricalPanel",[-1.5,1.4,.1],[.5,.6,.1],"metal");this.lamps=[0,1,2].map(e=>this.prim("sphere","Lamp",[-1.65+e*.15,1.55,.16],[.045,.045,.045],"plastic_red",{collide:!1})),this.interact(t,"Examine the panel",()=>{let e=Yi.filter(n=>this.has(n)).length;this.thought(this.power?"Main power is on.":`Three breaker lamps: ${e} of 3 lit. Labels: NORTH-WEST CORNER, WEST WALL, EAST WALL.`)}),[[-4.9,11.4,1],[-4.9,6,1],[4.9,9,-1]].forEach(([e,n,s],r)=>{let o=this.box("Breaker",[e,1.3,n],[.12,.35,.25],"metal"),a=this.box("Lever",[e+s*.08,1.3+(this.has(Yi[r])?.08:-.08),n],[.04,.1,.04],"plastic_red",{collide:!1});this.interact(o,"Throw the breaker",()=>{if(this.has(Yi[r])){this.thought("It's already on.");return}h.audio.playAt("breaker",Ie(e,1.3,n),.9),a.position.y=1.38,h.story.set(Yi[r]),this.updateLamps(),Yi.every(l=>this.has(l))&&this.powerOn()},{promptFn:()=>this.has(Yi[r])?"Breaker (on)":"Throw the breaker"})}),this.updateLamps()}updateLamps(){this.lamps.forEach((t,e)=>t.material=$e(this.has(Yi[e])||this.power?"bulb":"plastic_red"))}async powerOn(){if(!this.powering){this.powering=!0,h.audio.play2D("hum",.4);for(let t of this.lights)t.flicker(1.2);h.story.set(P.PowerOn),await Xi(.3),this.entity?.remove(),this.entity=null,this.updateLamps(),await Xi(1.5),this.thought("Light. It's gone. It's only gone because I can see now."),await Xi(4),this.has(P.TapeSeen)||this.tape()}}async tape(){if(this.tapePlaying)return;this.tapePlaying=!0,this.tv.static(),await Xi(1.5);let t=Me(320,240),e=t.getContext("2d");e.fillStyle="#594c38",e.fillRect(0,0,320,240),e.fillStyle="#403326",e.fillRect(0,150,320,90),e.fillStyle="#bfa659",e.beginPath(),e.ellipse(150,120,30,45,0,0,7),e.fill(),e.fillStyle="#b38c73",e.beginPath(),e.arc(150,62,22,0,7),e.fill(),e.fillStyle="#fff",e.font="20px monospace",e.fillText("\u25B6 PLAY",10,28),e.fillText("OCT 03",220,226),lr(e,320,240,50),this.tv.card(pn(t,!1)),await new Promise(n=>h.dialogue.play(He.tape,"tape",this.tv.screen,n)),this.tv.static(),await Xi(1),this.tv.off(),h.perception.restore(15,"Her voice. You remember her voice."),h.story.set(P.TapeSeen),h.audio.playAt("doorOpen",Ie(3.7,.4,10.8),.5,1.4),this.spawnFragC(),this.thought("The cabinet under the television has swung open."),this.tapePlaying=!1}spawnFragC(){if(this.has(P.FragC))return;let t=this.box("Fragment",[3.3,.61,10.8],[.14,.01,.11],"paper");this.pickup(t,"Take the torn photograph",()=>{h.inventory.add(P.FragC),h.story.set(P.FragC),h.perception.restore(10),this.thought("Another corner. A man's hand, reaching down.")})}presence(){let t=this.figure("ThePresence",[0,0,10.8],180,0,2.05),e=[Ie(0,0,2.5),Ie(0,0,6),Ie(0,0,10.5),Ie(-3.4,0,1.5),Ie(-3.3,0,6),Ie(-2.8,0,10.9),Ie(2.7,0,1.5),Ie(2.7,0,6),Ie(2.7,0,10),Ie(-3.3,0,8.4),Ie(3.3,0,8.5)];this.entity=new oa(t,e,Ie(0,0,10.8),()=>this.has(P.EnteredBasement)&&!this.power&&!h.dialogue.busy)}onBlackout(){this.entity?.resetHome()}onEntered(){this.has(P.EnteredBasement)?this.power&&!this.has(P.TapeSeen)&&this.tape():(h.story.set(P.EnteredBasement),h.dialogue.play(He.enterBasement))}miraRoom(){let t=this.makeDoor("door",[-.45,0,12],0,.9,"wood_painted",-95);t.isLocked=()=>!this.has(P.GotRoomKey),t.onLocked=()=>this.thought("Locked. A child's drawing is taped to it: a door, and a little key with a ribbon."),this.has(P.EnteredMirasRoom)&&t.setAngleInstant(-95),this.miraLight=this.ceilingLight("MiraLight",[0,2.3,13.8],new mt(1,.72,.7),.7,5,{power:()=>this.power}),this.box("Bed",[-1.3,.2,14.6],[.8,.4,1.5],"fabric_child"),this.box("Pillow",[-1.3,.45,15.15],[.55,.1,.3],"sheet",{collide:!1});let e=this.group("SmallDesk",[1.3,0,15.1]);this.box("Top",[0,.58,0],[.8,.04,.5],"wood_painted",{parent:e}),this.box("Body",[0,.28,.1],[.75,.56,.3],"wood_painted",{parent:e}),this.box("Rug",[0,.005,13.9],[1.6,.01,1.2],"rug",{collide:!1});let n=this.chair=this.group("EmptyChair",[0,0,13.9],180);this.box("Seat",[0,.32,0],[.32,.04,.32],"wood_painted",{parent:n}),this.box("Back",[0,.52,-.14],[.32,.38,.03],"wood_painted",{parent:n});for(let a=0;a<4;a++)this.box("Leg",[a%2?.13:-.13,.15,a<2?-.13:.13],[.03,.3,.03],"wood_painted",{parent:n,collide:!1});let s=this.spot=new Ts(new mt(1,.9,.75),0,4,.36,.6,1.6);s.position.set(0,2.3,13.9),s.target.position.set(0,0,13.9),h.settings.shadows&&(s.castShadow=!0,s.shadow.mapSize.set(512,512)),this.root.add(s,s.target);let r=this.mira=new qe;n.add(r),this.prim("capsule","Body",[0,.55,-.02],[.24,.2,.16],"child_clothes",{parent:r,collide:!1}),this.prim("sphere","Head",[0,.86,-.02],[.17,.19,.17],"skin",{parent:r,collide:!1}),this.prim("sphere","Hair",[0,.9,-.04],[.19,.18,.19],"hair",{parent:r,collide:!1}),this.prim("capsule","Leg",[-.06,.36,.1],[.07,.13,.07],"skin",{parent:r,collide:!1,euler:[90,0,0]}),this.prim("capsule","Leg",[.06,.36,.1],[.07,.13,.07],"skin",{parent:r,collide:!1,euler:[90,0,0]}),r.visible=!1;let o=this.toyPhone=this.box("ToyPhone",[-.6,.06,14.9],[.2,.12,.16],"plastic_red");this.toyRing=h.audio.loop("ring",o,.6,"sfx",12,!1),this.toyRing.pitch=1.35,this.interact(o,"Pick up the toy telephone",()=>this.answerToy(),{promptFn:()=>this.toyRinging?"Answer the toy telephone":"Toy telephone"}),this.has(P.FinalCall)&&!this.has(P.GotFrontKey)&&this.spawnFrontKey(),this.has(P.FinalCall)&&(this.miraLight.base=.12*h.lightScale),this.memoryObject(0,[-1.65,0,12.45],"rabbit"),this.memoryObject(1,[1.65,0,12.45],"shoe"),this.memoryObject(2,[1.72,0,14.1],"crayons"),this.memoryObject(3,[-1.93,1.25,13.3],"drawing"),this.gaze=0}memoryObject(t,e,n){let s=this.group("Memory_"+n,e),r={parent:s,collide:!1};if(n==="rabbit")this.prim("sphere","Body",[0,.12,0],[.18,.22,.15],"rabbit",{parent:s}),this.prim("sphere","Head",[0,.28,0],[.13,.13,.12],"rabbit",r),this.prim("capsule","Ear",[-.03,.38,0],[.04,.08,.02],"rabbit",r),this.prim("capsule","Ear",[.03,.36,0],[.04,.07,.02],"rabbit",{...r,euler:[0,0,-40]});else if(n==="shoe")this.box("Shoe",[0,.04,0],[.08,.07,.16],"red_shoe",{parent:s,yaw:30});else if(n==="crayons"){this.prim("cylinder","Cup",[0,.07,0],[.1,.07,.1],"porcelain",{parent:s});for(let l=0;l<5;l++)this.prim("cylinder","Crayon",[-.03+l*.015,.16,0],[.012,.05,.012],l%2?"child_clothes":"plastic_red",{...r,euler:[0,0,-8+l*4]})}else{let l=Me(128,96),c=l.getContext("2d");c.fillStyle="#ebe6d6",c.fillRect(0,0,128,96);let u=(d,f,p)=>{c.strokeStyle=c.fillStyle=p,c.lineWidth=4,c.beginPath(),c.moveTo(d,80-f),c.lineTo(d,80),c.stroke(),c.beginPath(),c.arc(d,72-f,7,0,7),c.fill()};u(30,50,"#4d4d59"),u(98,46,"#334db3"),u(64,26,"#d9b333"),c.strokeStyle="#4d4d59",c.lineWidth=2,c.beginPath(),c.moveTo(36,40),c.lineTo(58,52),c.stroke(),this.panel("Drawing",[0,0,0],[.36,.27],[1,0,0],en(l),{parent:s,collide:!0})}let o=Ro[t];new Ve(s,{canMove:!1,canAppear:!0,delay:2.5,minPlayerDist:1,checkOccupancy:!1,minChapter:5,cooldown:0,condition:()=>h.player&&h.player.position.z>12.3,onChanged:()=>h.audio.playAt("musicBox",Ie(e[0],e[1],e[2]),.08,1.5)}).setVisible(this.has(o)),this.interact(s,"Remember",()=>{if(this.has(o)){this.thought(Dc[t]);return}h.story.set(o),h.perception.restore(12),this.thought(Dc[t]),Po(l=>this.has(l))===4&&this.allRemembered()})}async allRemembered(){await Xi(4),h.story.set(P.MemoriesDone),h.dialogue.play(He.memoriesDone),await Xi(5),this.toyRinging=!0,this.toyRing.play()}answerToy(){if(!this.toyRinging){if(this.has(P.MemoriesDone)&&!this.has(P.FinalCall)&&!this.inCall){this.toyRinging=!0,this.toyRing.play();return}this.thought("It's just a toy. It was always just a toy.");return}this.toyRinging=!1,this.toyRing.stop(),this.inCall=!0,h.dialogue.play(He.finalCall,"phone",this.toyPhone,()=>{this.inCall=!1,h.story.set(P.FinalCall),this.miraLight.base=.12*h.lightScale,this.spawnFrontKey()})}spawnFrontKey(){let t=this.box("FrontKey",[1.2,.61,15.05],[.08,.015,.035],"brass");this.pickup(t,"Take the front door key",()=>{h.inventory.add(ie.FrontKey),h.story.set(P.GotFrontKey),this.thought("FOR WHEN YOU ARE READY TO GO.")})}tick(t){this.entity?.update(t);let e=h.player;if(!e||h.state!=="playing")return;let n=e.position.z>12.3&&Math.abs(e.position.x)<2;if(n&&!this.has(P.EnteredMirasRoom)&&(h.story.set(P.EnteredMirasRoom),this.thought("Her room. It was always down here, under everything.")),!this.has(P.FinalCall)||!n){this.gaze=Math.max(0,this.gaze-t*2),this.spot.intensity=this.gaze/12*2.2*h.lightScale;return}let s=new Qe().setFromCenterAndSize(this.chair.position.clone().setY(.5),Ie(.6,1,.6));!this.mira.visible&&!h.observation.isBoxObserved(s,this.chair)&&(this.mira.visible=!0);let r=e.eye,o=h.camera.getWorldDirection(Ie(0,0,0)),a=this.chair.position.clone().setY(.6);if(!e.eyesClosed&&zo(r,o,a)<14&&h.physics.lineOfSight(r,a,this.chair)?(this.gaze+=t,h.perception.drain(3.5),this.gaze>4&&Math.random()<t*.8&&e.shake(.006,.4)):this.gaze=Math.max(0,this.gaze-t*1.5),this.spot.intensity=this.gaze/12*2.2*h.lightScale,this.gaze>=12){h.triggerEnding(mi.Remember);return}e.eyesClosed?(e.closedTime>5&&!this.stayWarned&&(this.stayWarned=!0,this.thought("It's easier like this. Isn't it?")),e.closedTime>12&&h.triggerEnding(mi.Stay)):this.stayWarned=!1}};var la=class extends vi{get hasPlayer(){return!1}build(){this.ceiling=2.6,this.atmosphere(new mt(.035,.035,.042),131587,.07),this.room("Hall",-.75,0,.75,12,"floor_wood"),this.wallZ(-.75,0,12,"plaster","wallpaper_hall",{c:4,w:.9,h:2.05},{c:8.5,w:.9,h:2.05}),this.wallZ(.75,0,12,"wallpaper_hall","plaster",{c:6,w:.9,h:2.05}),this.wallX(12,-.75,.75,"wallpaper_hall","plaster",{c:0,w:.9,h:2.05}),this.wallX(0,-.75,.75,"plaster","wallpaper_hall"),this.makeDoor("door",[-.75,0,4.45],90,.9,"door").setAngleInstant(-20),this.makeDoor("door",[.75,0,5.55],-90,.9,"door").setAngleInstant(35),this.makeDoor("door",[-.45,0,12],0,.9,"door").setAngleInstant(-25),this.box("Runner",[0,.005,6],[.8,.01,11],"rug",{collide:!1}),this.box("Console",[.55,.4,3],[.25,.8,.8],"wood_dark"),this.bulb=this.ceilingLight("Bulb",[0,2.35,7],wn,.9,6,{bare:!0}),this.bulb.alwaysUnstable=!0,this.ceilingLight("Bulb",[0,2.35,1.5],wn,.35,3,{bare:!0,shadows:!1}),this.dust([0,1.4,5],[1.2,1.5,6]),this.fig=this.figure("Figure",[0,0,12.6],180),this.fig.visible=!1,this.figTimer=8,h.audio.loop("roomTone",h.camera,.5,"ambience",5),h.audio.loop("buzz",this.bulb.light,.15,"ambience",6),h.audio.loop("tick",new A(-.7,2,3),.2,"ambience",6),this.spawn("default",0,0,0,0),this.updaters.push(t=>this.drift(t))}drift(t){let e=performance.now()/1e3,n=h.camera;n.position.set(Math.sin(e*.13)*.06,1.6+Math.sin(e*.21)*.02,.8+Math.sin(e*.05)*.5),n.rotation.set(-.035-Math.sin(e*.17)*.01,Math.PI+Math.sin(e*.09)*.026,0,"YXZ"),n.fov=60,n.updateProjectionMatrix(),n.updateMatrixWorld(),this.figTimer-=t,this.figTimer<=0&&(this.bulb.flicker(.5),this.figTimer=12+Math.random()*13,setTimeout(()=>{this.fig&&(this.fig.visible=!this.fig.visible)},250))}};var S_={low:.6,medium:.85,high:1};function w_(){let i=document.getElementById("app"),t=document.createElement("canvas");t.id="view",i.prepend(t);let e;try{e=new io({canvas:t,antialias:!0,powerPreference:"high-performance"})}catch{document.getElementById("nogl").hidden=!1;return}e.shadowMap.enabled=!0,e.shadowMap.type=dc,e.toneMapping=nr,e.toneMappingExposure=1,h.storage=Ju(),h.saves=new Fo(h.storage),h.settings=td(h.storage);try{h.endingsSeen=new Set(JSON.parse(h.storage.get("unseen_endings")||"[]"))}catch{h.endingsSeen=new Set}h.renderer=e,h.scene=new ro,h.camera=new xe(70,16/9,.03,60),h.scene.add(h.camera),h.ambient=new yo(16777215,1),h.scene.add(h.ambient),h.input=new Oo(t),h.audio=new Go,h.dialogue=new Wo,h.observation=new Ho,h.ui=new jo(document.getElementById("ui")),h.mirrors=[],h.tvs=[],h.reveals=[],h.photo=null;let n=new Eo(e);n.addPass(new To(h.scene,h.camera));let s=new Ao(.72);n.addPass(s),n.addPass(new Co);let r=document.getElementById("grain"),o=r.getContext("2d"),a=o.createImageData(160,90),l=0,c="";h.applySettings=()=>{let m=h.settings;e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)*S_[m.quality]),d(),u()};let u=()=>{h.ambient.intensity=(h.baseAmbient??1)*(.55+h.settings.brightness*1.35)};function d(){let m=window.innerWidth,w=window.innerHeight;e.setSize(m,w,!1),n.setSize(m,w),h.camera.aspect=m/w,h.camera.updateProjectionMatrix()}addEventListener("resize",d),h.buildWorld=(m,w)=>{h.worldRoot&&f(h.worldRoot),h.director.clear(),h.observation.clear(),h.mirrors=[],h.tvs=[],h.reveals=[],h.player=null;let E=new qe;E.name="World",h.scene.add(E),h.worldRoot=E,h.physics=new ko(E),h.worldName=m;let M=m==="apartment"?ra:m==="basement"?aa:la;if(h.world=new M(E),h.world.build(),h.world.hasPlayer){let O=h.world.getSpawn(w||"default"),C=O.pos,R=O.yaw;!w&&h.data.hasPosition&&h.data.scene===m&&(C=new A(h.data.position.x,0,h.data.position.z),R=h.data.yaw),h.player=new Jo(C,R,E),h.photo||(h.photo=new Ko)}h.shadowsDirty=!0,u()};function f(m){m.traverse(w=>{if(w.isMesh||w.isPoints){w.geometry&&!w.geometry.userData.shared&&w.geometry.type==="PlaneGeometry"&&w.geometry.dispose();let E=Array.isArray(w.material)?w.material:[w.material];for(let M of E)M&&!M.name&&(M.map?.isCanvasTexture&&M.map.dispose(),M.dispose())}w.isLight&&w.shadow?.map&&w.shadow.map.dispose()});for(let w of h.mirrors)w.rt.dispose();for(let w of h.tvs)w.rt.dispose();h.camera.children.filter(w=>w.isSpotLight).forEach(w=>{w.removeFromParent(),w.target.removeFromParent()}),m.removeFromParent()}let p=document.getElementById("start");h.state="boot",h.applySettings(),h.buildWorld("menu"),h.state="menu-idle",p.hidden=!1,p.addEventListener("click",()=>{h.audio.init(),p.hidden=!0,h.state="menu",h.ui.renderScreen(),h.ui.fade(0,1.5)},{once:!0}),h.ui.fade(0,2);let y=performance.now(),_="";function g(m){let w=Math.min(.1,(m-y)/1e3);y=m,h.state!=="paused"&&(h.time+=w),h.state!==_&&(_=h.state,h.ui.renderScreen()),h.player&&h.state!=="paused"&&h.player.update(w),h.photo?.update(),h.observation.update(w),h.perception.update(w),h.director.update(w),h.state!=="paused"&&(h.dialogue.update(),h.world?.update(w)),h.hints.update(h.state==="paused"?0:w),h.audio.update(w),h.ui.update(),h.shadowsDirty&&(h.worldRoot?.traverse(R=>{R.isPointLight&&R.castShadow&&(R.shadow.needsUpdate=!0)}),h.shadowsDirty=!1);for(let R of h.mirrors)R.render();for(let R of h.tvs)R.render();let E=h.state==="playing"||h.state==="paused"?h.perception.distortion:0,M=h.settings.reducedMotion,O=!M&&E>.7?Math.sin(h.time*1.3)*(E-.7)*1.2:0,C=`saturate(${(.8-E*.35).toFixed(2)}) contrast(1.06) brightness(${(.9+h.settings.brightness*.25).toFixed(2)})${O?` blur(${Math.abs(O).toFixed(2)}px)`:""}`;if(C!==c&&(t.style.filter=C,c=C),document.getElementById("vignette").style.opacity=(.55+E*.4).toFixed(2),l+=w,l>1/24){l=0;for(let R=0;R<a.data.length;R+=4){let L=Math.random()*255;a.data[R]=a.data[R+1]=a.data[R+2]=L,a.data[R+3]=255}o.putImageData(a,0,0),r.style.opacity=(.05+E*.12).toFixed(3)}h.settings.motionBlur&&!M?n.render():e.render(h.scene,h.camera),h.input.endFrame(),requestAnimationFrame(g)}requestAnimationFrame(g),window.__unseen={G:h,Ending:mi}}w_();
