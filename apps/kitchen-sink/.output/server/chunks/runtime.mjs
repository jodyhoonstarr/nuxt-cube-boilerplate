import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import vt, { Server as Server$1 } from 'node:http';
import Bs, { Server } from 'node:https';
import st from 'node:zlib';
import me, { PassThrough, pipeline } from 'node:stream';
import { Buffer as Buffer$1 } from 'node:buffer';
import { promisify, deprecate, types } from 'node:util';
import { format, fileURLToPath } from 'node:url';
import { isIP } from 'node:net';
import { statSync, promises, createReadStream } from 'node:fs';
import { basename } from 'node:path';
import { promises as promises$1, existsSync } from 'fs';
import { dirname as dirname$1, resolve as resolve$1, join } from 'path';

var t$1=Object.defineProperty;var o$2=(e,l)=>t$1(e,"name",{value:l,configurable:!0});var n$1=typeof globalThis<"u"?globalThis:typeof global<"u"?global:typeof self<"u"?self:{};function f$1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}o$2(f$1,"getDefaultExportFromCjs");

var As=Object.defineProperty;var n=(i,o)=>As(i,"name",{value:o,configurable:!0});var fi=(i,o,a)=>{if(!o.has(i))throw TypeError("Cannot "+a)};var O=(i,o,a)=>(fi(i,o,"read from private field"),a?a.call(i):o.get(i)),be=(i,o,a)=>{if(o.has(i))throw TypeError("Cannot add the same private member more than once");o instanceof WeakSet?o.add(i):o.set(i,a);},X=(i,o,a,u)=>(fi(i,o,"write to private field"),o.set(i,a),a);var ve,kt,bt,Cr,Ve,Wt,qt,Ot,ee,zt,Ne,He,It;function js(i){if(!/^data:/i.test(i))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');i=i.replace(/\r?\n/g,"");const o=i.indexOf(",");if(o===-1||o<=4)throw new TypeError("malformed data: URI");const a=i.substring(5,o).split(";");let u="",l=!1;const p=a[0]||"text/plain";let h=p;for(let E=1;E<a.length;E++)a[E]==="base64"?l=!0:a[E]&&(h+=`;${a[E]}`,a[E].indexOf("charset=")===0&&(u=a[E].substring(8)));!a[0]&&!u.length&&(h+=";charset=US-ASCII",u="US-ASCII");const g=l?"base64":"ascii",A=unescape(i.substring(o+1)),w=Buffer.from(A,g);return w.type=p,w.typeFull=h,w.charset=u,w}n(js,"dataUriToBuffer");var pr={exports:{}};/**
 * @license
 * web-streams-polyfill v3.3.3
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */var di;function Ls(){return di||(di=1,function(i,o){(function(a,u){u(o);})(n$1,function(a){function u(){}n(u,"noop");function l(e){return typeof e=="object"&&e!==null||typeof e=="function"}n(l,"typeIsObject");const p=u;function h(e,t){try{Object.defineProperty(e,"name",{value:t,configurable:!0});}catch{}}n(h,"setFunctionName");const g=Promise,A=Promise.prototype.then,w=Promise.reject.bind(g);function E(e){return new g(e)}n(E,"newPromise");function T(e){return E(t=>t(e))}n(T,"promiseResolvedWith");function b(e){return w(e)}n(b,"promiseRejectedWith");function q(e,t,r){return A.call(e,t,r)}n(q,"PerformPromiseThen");function _(e,t,r){q(q(e,t,r),void 0,p);}n(_,"uponPromise");function V(e,t){_(e,t);}n(V,"uponFulfillment");function I(e,t){_(e,void 0,t);}n(I,"uponRejection");function F(e,t,r){return q(e,t,r)}n(F,"transformPromiseWith");function Q(e){q(e,void 0,p);}n(Q,"setPromiseIsHandledToTrue");let ge=n(e=>{if(typeof queueMicrotask=="function")ge=queueMicrotask;else {const t=T(void 0);ge=n(r=>q(t,r),"_queueMicrotask");}return ge(e)},"_queueMicrotask");function z(e,t,r){if(typeof e!="function")throw new TypeError("Argument is not a function");return Function.prototype.apply.call(e,t,r)}n(z,"reflectCall");function j(e,t,r){try{return T(z(e,t,r))}catch(s){return b(s)}}n(j,"promiseCall");const U=16384,bn=class bn{constructor(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0;}get length(){return this._size}push(t){const r=this._back;let s=r;r._elements.length===U-1&&(s={_elements:[],_next:void 0}),r._elements.push(t),s!==r&&(this._back=s,r._next=s),++this._size;}shift(){const t=this._front;let r=t;const s=this._cursor;let f=s+1;const c=t._elements,d=c[s];return f===U&&(r=t._next,f=0),--this._size,this._cursor=f,t!==r&&(this._front=r),c[s]=void 0,d}forEach(t){let r=this._cursor,s=this._front,f=s._elements;for(;(r!==f.length||s._next!==void 0)&&!(r===f.length&&(s=s._next,f=s._elements,r=0,f.length===0));)t(f[r]),++r;}peek(){const t=this._front,r=this._cursor;return t._elements[r]}};n(bn,"SimpleQueue");let D=bn;const Ft=Symbol("[[AbortSteps]]"),Qn=Symbol("[[ErrorSteps]]"),Ar=Symbol("[[CancelSteps]]"),Br=Symbol("[[PullSteps]]"),kr=Symbol("[[ReleaseSteps]]");function Yn(e,t){e._ownerReadableStream=t,t._reader=e,t._state==="readable"?qr(e):t._state==="closed"?Li(e):Gn(e,t._storedError);}n(Yn,"ReadableStreamReaderGenericInitialize");function Wr(e,t){const r=e._ownerReadableStream;return ie(r,t)}n(Wr,"ReadableStreamReaderGenericCancel");function _e(e){const t=e._ownerReadableStream;t._state==="readable"?Or(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):$i(e,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),t._readableStreamController[kr](),t._reader=void 0,e._ownerReadableStream=void 0;}n(_e,"ReadableStreamReaderGenericRelease");function jt(e){return new TypeError("Cannot "+e+" a stream using a released reader")}n(jt,"readerLockException");function qr(e){e._closedPromise=E((t,r)=>{e._closedPromise_resolve=t,e._closedPromise_reject=r;});}n(qr,"defaultReaderClosedPromiseInitialize");function Gn(e,t){qr(e),Or(e,t);}n(Gn,"defaultReaderClosedPromiseInitializeAsRejected");function Li(e){qr(e),Zn(e);}n(Li,"defaultReaderClosedPromiseInitializeAsResolved");function Or(e,t){e._closedPromise_reject!==void 0&&(Q(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0);}n(Or,"defaultReaderClosedPromiseReject");function $i(e,t){Gn(e,t);}n($i,"defaultReaderClosedPromiseResetToRejected");function Zn(e){e._closedPromise_resolve!==void 0&&(e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0);}n(Zn,"defaultReaderClosedPromiseResolve");const Kn=Number.isFinite||function(e){return typeof e=="number"&&isFinite(e)},Di=Math.trunc||function(e){return e<0?Math.ceil(e):Math.floor(e)};function Mi(e){return typeof e=="object"||typeof e=="function"}n(Mi,"isDictionary");function ue(e,t){if(e!==void 0&&!Mi(e))throw new TypeError(`${t} is not an object.`)}n(ue,"assertDictionary");function Z(e,t){if(typeof e!="function")throw new TypeError(`${t} is not a function.`)}n(Z,"assertFunction");function Ui(e){return typeof e=="object"&&e!==null||typeof e=="function"}n(Ui,"isObject");function Jn(e,t){if(!Ui(e))throw new TypeError(`${t} is not an object.`)}n(Jn,"assertObject");function Se(e,t,r){if(e===void 0)throw new TypeError(`Parameter ${t} is required in '${r}'.`)}n(Se,"assertRequiredArgument");function zr(e,t,r){if(e===void 0)throw new TypeError(`${t} is required in '${r}'.`)}n(zr,"assertRequiredField");function Ir(e){return Number(e)}n(Ir,"convertUnrestrictedDouble");function Xn(e){return e===0?0:e}n(Xn,"censorNegativeZero");function xi(e){return Xn(Di(e))}n(xi,"integerPart");function Fr(e,t){const s=Number.MAX_SAFE_INTEGER;let f=Number(e);if(f=Xn(f),!Kn(f))throw new TypeError(`${t} is not a finite number`);if(f=xi(f),f<0||f>s)throw new TypeError(`${t} is outside the accepted range of 0 to ${s}, inclusive`);return !Kn(f)||f===0?0:f}n(Fr,"convertUnsignedLongLongWithEnforceRange");function jr(e,t){if(!We(e))throw new TypeError(`${t} is not a ReadableStream.`)}n(jr,"assertReadableStream");function Qe(e){return new fe(e)}n(Qe,"AcquireReadableStreamDefaultReader");function eo(e,t){e._reader._readRequests.push(t);}n(eo,"ReadableStreamAddReadRequest");function Lr(e,t,r){const f=e._reader._readRequests.shift();r?f._closeSteps():f._chunkSteps(t);}n(Lr,"ReadableStreamFulfillReadRequest");function Lt(e){return e._reader._readRequests.length}n(Lt,"ReadableStreamGetNumReadRequests");function to(e){const t=e._reader;return !(t===void 0||!Ee(t))}n(to,"ReadableStreamHasDefaultReader");const mn=class mn{constructor(t){if(Se(t,1,"ReadableStreamDefaultReader"),jr(t,"First parameter"),qe(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader");Yn(this,t),this._readRequests=new D;}get closed(){return Ee(this)?this._closedPromise:b($t("closed"))}cancel(t=void 0){return Ee(this)?this._ownerReadableStream===void 0?b(jt("cancel")):Wr(this,t):b($t("cancel"))}read(){if(!Ee(this))return b($t("read"));if(this._ownerReadableStream===void 0)return b(jt("read from"));let t,r;const s=E((c,d)=>{t=c,r=d;});return mt(this,{_chunkSteps:c=>t({value:c,done:!1}),_closeSteps:()=>t({value:void 0,done:!0}),_errorSteps:c=>r(c)}),s}releaseLock(){if(!Ee(this))throw $t("releaseLock");this._ownerReadableStream!==void 0&&Ni(this);}};n(mn,"ReadableStreamDefaultReader");let fe=mn;Object.defineProperties(fe.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),h(fe.prototype.cancel,"cancel"),h(fe.prototype.read,"read"),h(fe.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(fe.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultReader",configurable:!0});function Ee(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_readRequests")?!1:e instanceof fe}n(Ee,"IsReadableStreamDefaultReader");function mt(e,t){const r=e._ownerReadableStream;r._disturbed=!0,r._state==="closed"?t._closeSteps():r._state==="errored"?t._errorSteps(r._storedError):r._readableStreamController[Br](t);}n(mt,"ReadableStreamDefaultReaderRead");function Ni(e){_e(e);const t=new TypeError("Reader was released");ro(e,t);}n(Ni,"ReadableStreamDefaultReaderRelease");function ro(e,t){const r=e._readRequests;e._readRequests=new D,r.forEach(s=>{s._errorSteps(t);});}n(ro,"ReadableStreamDefaultReaderErrorReadRequests");function $t(e){return new TypeError(`ReadableStreamDefaultReader.prototype.${e} can only be used on a ReadableStreamDefaultReader`)}n($t,"defaultReaderBrandCheckException");const Hi=Object.getPrototypeOf(Object.getPrototypeOf(async function*(){}).prototype),yn=class yn{constructor(t,r){this._ongoingPromise=void 0,this._isFinished=!1,this._reader=t,this._preventCancel=r;}next(){const t=n(()=>this._nextSteps(),"nextSteps");return this._ongoingPromise=this._ongoingPromise?F(this._ongoingPromise,t,t):t(),this._ongoingPromise}return(t){const r=n(()=>this._returnSteps(t),"returnSteps");return this._ongoingPromise?F(this._ongoingPromise,r,r):r()}_nextSteps(){if(this._isFinished)return Promise.resolve({value:void 0,done:!0});const t=this._reader;let r,s;const f=E((d,m)=>{r=d,s=m;});return mt(t,{_chunkSteps:d=>{this._ongoingPromise=void 0,ge(()=>r({value:d,done:!1}));},_closeSteps:()=>{this._ongoingPromise=void 0,this._isFinished=!0,_e(t),r({value:void 0,done:!0});},_errorSteps:d=>{this._ongoingPromise=void 0,this._isFinished=!0,_e(t),s(d);}}),f}_returnSteps(t){if(this._isFinished)return Promise.resolve({value:t,done:!0});this._isFinished=!0;const r=this._reader;if(!this._preventCancel){const s=Wr(r,t);return _e(r),F(s,()=>({value:t,done:!0}))}return _e(r),T({value:t,done:!0})}};n(yn,"ReadableStreamAsyncIteratorImpl");let Dt=yn;const no={next(){return oo(this)?this._asyncIteratorImpl.next():b(io("next"))},return(e){return oo(this)?this._asyncIteratorImpl.return(e):b(io("return"))}};Object.setPrototypeOf(no,Hi);function Vi(e,t){const r=Qe(e),s=new Dt(r,t),f=Object.create(no);return f._asyncIteratorImpl=s,f}n(Vi,"AcquireReadableStreamAsyncIterator");function oo(e){if(!l(e)||!Object.prototype.hasOwnProperty.call(e,"_asyncIteratorImpl"))return !1;try{return e._asyncIteratorImpl instanceof Dt}catch{return !1}}n(oo,"IsReadableStreamAsyncIterator");function io(e){return new TypeError(`ReadableStreamAsyncIterator.${e} can only be used on a ReadableSteamAsyncIterator`)}n(io,"streamAsyncIteratorBrandCheckException");const ao=Number.isNaN||function(e){return e!==e};var $r,Dr,Mr;function yt(e){return e.slice()}n(yt,"CreateArrayFromList");function so(e,t,r,s,f){new Uint8Array(e).set(new Uint8Array(r,s,f),t);}n(so,"CopyDataBlockBytes");let we=n(e=>(typeof e.transfer=="function"?we=n(t=>t.transfer(),"TransferArrayBuffer"):typeof structuredClone=="function"?we=n(t=>structuredClone(t,{transfer:[t]}),"TransferArrayBuffer"):we=n(t=>t,"TransferArrayBuffer"),we(e)),"TransferArrayBuffer"),Ae=n(e=>(typeof e.detached=="boolean"?Ae=n(t=>t.detached,"IsDetachedBuffer"):Ae=n(t=>t.byteLength===0,"IsDetachedBuffer"),Ae(e)),"IsDetachedBuffer");function lo(e,t,r){if(e.slice)return e.slice(t,r);const s=r-t,f=new ArrayBuffer(s);return so(f,0,e,t,s),f}n(lo,"ArrayBufferSlice");function Mt(e,t){const r=e[t];if(r!=null){if(typeof r!="function")throw new TypeError(`${String(t)} is not a function`);return r}}n(Mt,"GetMethod");function Qi(e){const t={[Symbol.iterator]:()=>e.iterator},r=async function*(){return yield*t}(),s=r.next;return {iterator:r,nextMethod:s,done:!1}}n(Qi,"CreateAsyncFromSyncIterator");const Ur=(Mr=($r=Symbol.asyncIterator)!==null&&$r!==void 0?$r:(Dr=Symbol.for)===null||Dr===void 0?void 0:Dr.call(Symbol,"Symbol.asyncIterator"))!==null&&Mr!==void 0?Mr:"@@asyncIterator";function uo(e,t="sync",r){if(r===void 0)if(t==="async"){if(r=Mt(e,Ur),r===void 0){const c=Mt(e,Symbol.iterator),d=uo(e,"sync",c);return Qi(d)}}else r=Mt(e,Symbol.iterator);if(r===void 0)throw new TypeError("The object is not iterable");const s=z(r,e,[]);if(!l(s))throw new TypeError("The iterator method must return an object");const f=s.next;return {iterator:s,nextMethod:f,done:!1}}n(uo,"GetIterator");function Yi(e){const t=z(e.nextMethod,e.iterator,[]);if(!l(t))throw new TypeError("The iterator.next() method must return an object");return t}n(Yi,"IteratorNext");function Gi(e){return !!e.done}n(Gi,"IteratorComplete");function Zi(e){return e.value}n(Zi,"IteratorValue");function Ki(e){return !(typeof e!="number"||ao(e)||e<0)}n(Ki,"IsNonNegativeNumber");function fo(e){const t=lo(e.buffer,e.byteOffset,e.byteOffset+e.byteLength);return new Uint8Array(t)}n(fo,"CloneAsUint8Array");function xr(e){const t=e._queue.shift();return e._queueTotalSize-=t.size,e._queueTotalSize<0&&(e._queueTotalSize=0),t.value}n(xr,"DequeueValue");function Nr(e,t,r){if(!Ki(r)||r===1/0)throw new RangeError("Size must be a finite, non-NaN, non-negative number.");e._queue.push({value:t,size:r}),e._queueTotalSize+=r;}n(Nr,"EnqueueValueWithSize");function Ji(e){return e._queue.peek().value}n(Ji,"PeekQueueValue");function Be(e){e._queue=new D,e._queueTotalSize=0;}n(Be,"ResetQueue");function co(e){return e===DataView}n(co,"isDataViewConstructor");function Xi(e){return co(e.constructor)}n(Xi,"isDataView");function ea(e){return co(e)?1:e.BYTES_PER_ELEMENT}n(ea,"arrayBufferViewElementSize");const gn=class gn{constructor(){throw new TypeError("Illegal constructor")}get view(){if(!Hr(this))throw Zr("view");return this._view}respond(t){if(!Hr(this))throw Zr("respond");if(Se(t,1,"respond"),t=Fr(t,"First parameter"),this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ae(this._view.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");Ht(this._associatedReadableByteStreamController,t);}respondWithNewView(t){if(!Hr(this))throw Zr("respondWithNewView");if(Se(t,1,"respondWithNewView"),!ArrayBuffer.isView(t))throw new TypeError("You can only respond with array buffer views");if(this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ae(t.buffer))throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");Vt(this._associatedReadableByteStreamController,t);}};n(gn,"ReadableStreamBYOBRequest");let Re=gn;Object.defineProperties(Re.prototype,{respond:{enumerable:!0},respondWithNewView:{enumerable:!0},view:{enumerable:!0}}),h(Re.prototype.respond,"respond"),h(Re.prototype.respondWithNewView,"respondWithNewView"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Re.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:!0});const _n=class _n{constructor(){throw new TypeError("Illegal constructor")}get byobRequest(){if(!ze(this))throw _t("byobRequest");return Gr(this)}get desiredSize(){if(!ze(this))throw _t("desiredSize");return Ro(this)}close(){if(!ze(this))throw _t("close");if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");const t=this._controlledReadableByteStream._state;if(t!=="readable")throw new TypeError(`The stream (in ${t} state) is not in the readable state and cannot be closed`);gt(this);}enqueue(t){if(!ze(this))throw _t("enqueue");if(Se(t,1,"enqueue"),!ArrayBuffer.isView(t))throw new TypeError("chunk must be an array buffer view");if(t.byteLength===0)throw new TypeError("chunk must have non-zero byteLength");if(t.buffer.byteLength===0)throw new TypeError("chunk's buffer must have non-zero byteLength");if(this._closeRequested)throw new TypeError("stream is closed or draining");const r=this._controlledReadableByteStream._state;if(r!=="readable")throw new TypeError(`The stream (in ${r} state) is not in the readable state and cannot be enqueued to`);Nt(this,t);}error(t=void 0){if(!ze(this))throw _t("error");K(this,t);}[Ar](t){ho(this),Be(this);const r=this._cancelAlgorithm(t);return xt(this),r}[Br](t){const r=this._controlledReadableByteStream;if(this._queueTotalSize>0){wo(this,t);return}const s=this._autoAllocateChunkSize;if(s!==void 0){let f;try{f=new ArrayBuffer(s);}catch(d){t._errorSteps(d);return}const c={buffer:f,bufferByteLength:s,byteOffset:0,byteLength:s,bytesFilled:0,minimumFill:1,elementSize:1,viewConstructor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(c);}eo(r,t),Ie(this);}[kr](){if(this._pendingPullIntos.length>0){const t=this._pendingPullIntos.peek();t.readerType="none",this._pendingPullIntos=new D,this._pendingPullIntos.push(t);}}};n(_n,"ReadableByteStreamController");let te=_n;Object.defineProperties(te.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},byobRequest:{enumerable:!0},desiredSize:{enumerable:!0}}),h(te.prototype.close,"close"),h(te.prototype.enqueue,"enqueue"),h(te.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(te.prototype,Symbol.toStringTag,{value:"ReadableByteStreamController",configurable:!0});function ze(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_controlledReadableByteStream")?!1:e instanceof te}n(ze,"IsReadableByteStreamController");function Hr(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_associatedReadableByteStreamController")?!1:e instanceof Re}n(Hr,"IsReadableStreamBYOBRequest");function Ie(e){if(!ia(e))return;if(e._pulling){e._pullAgain=!0;return}e._pulling=!0;const r=e._pullAlgorithm();_(r,()=>(e._pulling=!1,e._pullAgain&&(e._pullAgain=!1,Ie(e)),null),s=>(K(e,s),null));}n(Ie,"ReadableByteStreamControllerCallPullIfNeeded");function ho(e){Qr(e),e._pendingPullIntos=new D;}n(ho,"ReadableByteStreamControllerClearPendingPullIntos");function Vr(e,t){let r=!1;e._state==="closed"&&(r=!0);const s=po(t);t.readerType==="default"?Lr(e,s,r):ca(e,s,r);}n(Vr,"ReadableByteStreamControllerCommitPullIntoDescriptor");function po(e){const t=e.bytesFilled,r=e.elementSize;return new e.viewConstructor(e.buffer,e.byteOffset,t/r)}n(po,"ReadableByteStreamControllerConvertPullIntoDescriptor");function Ut(e,t,r,s){e._queue.push({buffer:t,byteOffset:r,byteLength:s}),e._queueTotalSize+=s;}n(Ut,"ReadableByteStreamControllerEnqueueChunkToQueue");function bo(e,t,r,s){let f;try{f=lo(t,r,r+s);}catch(c){throw K(e,c),c}Ut(e,f,0,s);}n(bo,"ReadableByteStreamControllerEnqueueClonedChunkToQueue");function mo(e,t){t.bytesFilled>0&&bo(e,t.buffer,t.byteOffset,t.bytesFilled),Ye(e);}n(mo,"ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");function yo(e,t){const r=Math.min(e._queueTotalSize,t.byteLength-t.bytesFilled),s=t.bytesFilled+r;let f=r,c=!1;const d=s%t.elementSize,m=s-d;m>=t.minimumFill&&(f=m-t.bytesFilled,c=!0);const R=e._queue;for(;f>0;){const y=R.peek(),C=Math.min(f,y.byteLength),P=t.byteOffset+t.bytesFilled;so(t.buffer,P,y.buffer,y.byteOffset,C),y.byteLength===C?R.shift():(y.byteOffset+=C,y.byteLength-=C),e._queueTotalSize-=C,go(e,C,t),f-=C;}return c}n(yo,"ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");function go(e,t,r){r.bytesFilled+=t;}n(go,"ReadableByteStreamControllerFillHeadPullIntoDescriptor");function _o(e){e._queueTotalSize===0&&e._closeRequested?(xt(e),Pt(e._controlledReadableByteStream)):Ie(e);}n(_o,"ReadableByteStreamControllerHandleQueueDrain");function Qr(e){e._byobRequest!==null&&(e._byobRequest._associatedReadableByteStreamController=void 0,e._byobRequest._view=null,e._byobRequest=null);}n(Qr,"ReadableByteStreamControllerInvalidateBYOBRequest");function Yr(e){for(;e._pendingPullIntos.length>0;){if(e._queueTotalSize===0)return;const t=e._pendingPullIntos.peek();yo(e,t)&&(Ye(e),Vr(e._controlledReadableByteStream,t));}}n(Yr,"ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");function ta(e){const t=e._controlledReadableByteStream._reader;for(;t._readRequests.length>0;){if(e._queueTotalSize===0)return;const r=t._readRequests.shift();wo(e,r);}}n(ta,"ReadableByteStreamControllerProcessReadRequestsUsingQueue");function ra(e,t,r,s){const f=e._controlledReadableByteStream,c=t.constructor,d=ea(c),{byteOffset:m,byteLength:R}=t,y=r*d;let C;try{C=we(t.buffer);}catch(B){s._errorSteps(B);return}const P={buffer:C,bufferByteLength:C.byteLength,byteOffset:m,byteLength:R,bytesFilled:0,minimumFill:y,elementSize:d,viewConstructor:c,readerType:"byob"};if(e._pendingPullIntos.length>0){e._pendingPullIntos.push(P),Po(f,s);return}if(f._state==="closed"){const B=new c(P.buffer,P.byteOffset,0);s._closeSteps(B);return}if(e._queueTotalSize>0){if(yo(e,P)){const B=po(P);_o(e),s._chunkSteps(B);return}if(e._closeRequested){const B=new TypeError("Insufficient bytes to fill elements in the given buffer");K(e,B),s._errorSteps(B);return}}e._pendingPullIntos.push(P),Po(f,s),Ie(e);}n(ra,"ReadableByteStreamControllerPullInto");function na(e,t){t.readerType==="none"&&Ye(e);const r=e._controlledReadableByteStream;if(Kr(r))for(;vo(r)>0;){const s=Ye(e);Vr(r,s);}}n(na,"ReadableByteStreamControllerRespondInClosedState");function oa(e,t,r){if(go(e,t,r),r.readerType==="none"){mo(e,r),Yr(e);return}if(r.bytesFilled<r.minimumFill)return;Ye(e);const s=r.bytesFilled%r.elementSize;if(s>0){const f=r.byteOffset+r.bytesFilled;bo(e,r.buffer,f-s,s);}r.bytesFilled-=s,Vr(e._controlledReadableByteStream,r),Yr(e);}n(oa,"ReadableByteStreamControllerRespondInReadableState");function So(e,t){const r=e._pendingPullIntos.peek();Qr(e),e._controlledReadableByteStream._state==="closed"?na(e,r):oa(e,t,r),Ie(e);}n(So,"ReadableByteStreamControllerRespondInternal");function Ye(e){return e._pendingPullIntos.shift()}n(Ye,"ReadableByteStreamControllerShiftPendingPullInto");function ia(e){const t=e._controlledReadableByteStream;return t._state!=="readable"||e._closeRequested||!e._started?!1:!!(to(t)&&Lt(t)>0||Kr(t)&&vo(t)>0||Ro(e)>0)}n(ia,"ReadableByteStreamControllerShouldCallPull");function xt(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0;}n(xt,"ReadableByteStreamControllerClearAlgorithms");function gt(e){const t=e._controlledReadableByteStream;if(!(e._closeRequested||t._state!=="readable")){if(e._queueTotalSize>0){e._closeRequested=!0;return}if(e._pendingPullIntos.length>0){const r=e._pendingPullIntos.peek();if(r.bytesFilled%r.elementSize!==0){const s=new TypeError("Insufficient bytes to fill elements in the given buffer");throw K(e,s),s}}xt(e),Pt(t);}}n(gt,"ReadableByteStreamControllerClose");function Nt(e,t){const r=e._controlledReadableByteStream;if(e._closeRequested||r._state!=="readable")return;const{buffer:s,byteOffset:f,byteLength:c}=t;if(Ae(s))throw new TypeError("chunk's buffer is detached and so cannot be enqueued");const d=we(s);if(e._pendingPullIntos.length>0){const m=e._pendingPullIntos.peek();if(Ae(m.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");Qr(e),m.buffer=we(m.buffer),m.readerType==="none"&&mo(e,m);}if(to(r))if(ta(e),Lt(r)===0)Ut(e,d,f,c);else {e._pendingPullIntos.length>0&&Ye(e);const m=new Uint8Array(d,f,c);Lr(r,m,!1);}else Kr(r)?(Ut(e,d,f,c),Yr(e)):Ut(e,d,f,c);Ie(e);}n(Nt,"ReadableByteStreamControllerEnqueue");function K(e,t){const r=e._controlledReadableByteStream;r._state==="readable"&&(ho(e),Be(e),xt(e),Zo(r,t));}n(K,"ReadableByteStreamControllerError");function wo(e,t){const r=e._queue.shift();e._queueTotalSize-=r.byteLength,_o(e);const s=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);t._chunkSteps(s);}n(wo,"ReadableByteStreamControllerFillReadRequestFromQueue");function Gr(e){if(e._byobRequest===null&&e._pendingPullIntos.length>0){const t=e._pendingPullIntos.peek(),r=new Uint8Array(t.buffer,t.byteOffset+t.bytesFilled,t.byteLength-t.bytesFilled),s=Object.create(Re.prototype);sa(s,e,r),e._byobRequest=s;}return e._byobRequest}n(Gr,"ReadableByteStreamControllerGetBYOBRequest");function Ro(e){const t=e._controlledReadableByteStream._state;return t==="errored"?null:t==="closed"?0:e._strategyHWM-e._queueTotalSize}n(Ro,"ReadableByteStreamControllerGetDesiredSize");function Ht(e,t){const r=e._pendingPullIntos.peek();if(e._controlledReadableByteStream._state==="closed"){if(t!==0)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")}else {if(t===0)throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");if(r.bytesFilled+t>r.byteLength)throw new RangeError("bytesWritten out of range")}r.buffer=we(r.buffer),So(e,t);}n(Ht,"ReadableByteStreamControllerRespond");function Vt(e,t){const r=e._pendingPullIntos.peek();if(e._controlledReadableByteStream._state==="closed"){if(t.byteLength!==0)throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")}else if(t.byteLength===0)throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");if(r.byteOffset+r.bytesFilled!==t.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(r.bufferByteLength!==t.buffer.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");if(r.bytesFilled+t.byteLength>r.byteLength)throw new RangeError("The region specified by view is larger than byobRequest");const f=t.byteLength;r.buffer=we(t.buffer),So(e,f);}n(Vt,"ReadableByteStreamControllerRespondWithNewView");function To(e,t,r,s,f,c,d){t._controlledReadableByteStream=e,t._pullAgain=!1,t._pulling=!1,t._byobRequest=null,t._queue=t._queueTotalSize=void 0,Be(t),t._closeRequested=!1,t._started=!1,t._strategyHWM=c,t._pullAlgorithm=s,t._cancelAlgorithm=f,t._autoAllocateChunkSize=d,t._pendingPullIntos=new D,e._readableStreamController=t;const m=r();_(T(m),()=>(t._started=!0,Ie(t),null),R=>(K(t,R),null));}n(To,"SetUpReadableByteStreamController");function aa(e,t,r){const s=Object.create(te.prototype);let f,c,d;t.start!==void 0?f=n(()=>t.start(s),"startAlgorithm"):f=n(()=>{},"startAlgorithm"),t.pull!==void 0?c=n(()=>t.pull(s),"pullAlgorithm"):c=n(()=>T(void 0),"pullAlgorithm"),t.cancel!==void 0?d=n(R=>t.cancel(R),"cancelAlgorithm"):d=n(()=>T(void 0),"cancelAlgorithm");const m=t.autoAllocateChunkSize;if(m===0)throw new TypeError("autoAllocateChunkSize must be greater than 0");To(e,s,f,c,d,r,m);}n(aa,"SetUpReadableByteStreamControllerFromUnderlyingSource");function sa(e,t,r){e._associatedReadableByteStreamController=t,e._view=r;}n(sa,"SetUpReadableStreamBYOBRequest");function Zr(e){return new TypeError(`ReadableStreamBYOBRequest.prototype.${e} can only be used on a ReadableStreamBYOBRequest`)}n(Zr,"byobRequestBrandCheckException");function _t(e){return new TypeError(`ReadableByteStreamController.prototype.${e} can only be used on a ReadableByteStreamController`)}n(_t,"byteStreamControllerBrandCheckException");function la(e,t){ue(e,t);const r=e?.mode;return {mode:r===void 0?void 0:ua(r,`${t} has member 'mode' that`)}}n(la,"convertReaderOptions");function ua(e,t){if(e=`${e}`,e!=="byob")throw new TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamReaderMode`);return e}n(ua,"convertReadableStreamReaderMode");function fa(e,t){var r;ue(e,t);const s=(r=e?.min)!==null&&r!==void 0?r:1;return {min:Fr(s,`${t} has member 'min' that`)}}n(fa,"convertByobReadOptions");function Co(e){return new ce(e)}n(Co,"AcquireReadableStreamBYOBReader");function Po(e,t){e._reader._readIntoRequests.push(t);}n(Po,"ReadableStreamAddReadIntoRequest");function ca(e,t,r){const f=e._reader._readIntoRequests.shift();r?f._closeSteps(t):f._chunkSteps(t);}n(ca,"ReadableStreamFulfillReadIntoRequest");function vo(e){return e._reader._readIntoRequests.length}n(vo,"ReadableStreamGetNumReadIntoRequests");function Kr(e){const t=e._reader;return !(t===void 0||!Fe(t))}n(Kr,"ReadableStreamHasBYOBReader");const Sn=class Sn{constructor(t){if(Se(t,1,"ReadableStreamBYOBReader"),jr(t,"First parameter"),qe(t))throw new TypeError("This stream has already been locked for exclusive reading by another reader");if(!ze(t._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");Yn(this,t),this._readIntoRequests=new D;}get closed(){return Fe(this)?this._closedPromise:b(Qt("closed"))}cancel(t=void 0){return Fe(this)?this._ownerReadableStream===void 0?b(jt("cancel")):Wr(this,t):b(Qt("cancel"))}read(t,r={}){if(!Fe(this))return b(Qt("read"));if(!ArrayBuffer.isView(t))return b(new TypeError("view must be an array buffer view"));if(t.byteLength===0)return b(new TypeError("view must have non-zero byteLength"));if(t.buffer.byteLength===0)return b(new TypeError("view's buffer must have non-zero byteLength"));if(Ae(t.buffer))return b(new TypeError("view's buffer has been detached"));let s;try{s=fa(r,"options");}catch(y){return b(y)}const f=s.min;if(f===0)return b(new TypeError("options.min must be greater than 0"));if(Xi(t)){if(f>t.byteLength)return b(new RangeError("options.min must be less than or equal to view's byteLength"))}else if(f>t.length)return b(new RangeError("options.min must be less than or equal to view's length"));if(this._ownerReadableStream===void 0)return b(jt("read from"));let c,d;const m=E((y,C)=>{c=y,d=C;});return Eo(this,t,f,{_chunkSteps:y=>c({value:y,done:!1}),_closeSteps:y=>c({value:y,done:!0}),_errorSteps:y=>d(y)}),m}releaseLock(){if(!Fe(this))throw Qt("releaseLock");this._ownerReadableStream!==void 0&&da(this);}};n(Sn,"ReadableStreamBYOBReader");let ce=Sn;Object.defineProperties(ce.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),h(ce.prototype.cancel,"cancel"),h(ce.prototype.read,"read"),h(ce.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ce.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBReader",configurable:!0});function Fe(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_readIntoRequests")?!1:e instanceof ce}n(Fe,"IsReadableStreamBYOBReader");function Eo(e,t,r,s){const f=e._ownerReadableStream;f._disturbed=!0,f._state==="errored"?s._errorSteps(f._storedError):ra(f._readableStreamController,t,r,s);}n(Eo,"ReadableStreamBYOBReaderRead");function da(e){_e(e);const t=new TypeError("Reader was released");Ao(e,t);}n(da,"ReadableStreamBYOBReaderRelease");function Ao(e,t){const r=e._readIntoRequests;e._readIntoRequests=new D,r.forEach(s=>{s._errorSteps(t);});}n(Ao,"ReadableStreamBYOBReaderErrorReadIntoRequests");function Qt(e){return new TypeError(`ReadableStreamBYOBReader.prototype.${e} can only be used on a ReadableStreamBYOBReader`)}n(Qt,"byobReaderBrandCheckException");function St(e,t){const{highWaterMark:r}=e;if(r===void 0)return t;if(ao(r)||r<0)throw new RangeError("Invalid highWaterMark");return r}n(St,"ExtractHighWaterMark");function Yt(e){const{size:t}=e;return t||(()=>1)}n(Yt,"ExtractSizeAlgorithm");function Gt(e,t){ue(e,t);const r=e?.highWaterMark,s=e?.size;return {highWaterMark:r===void 0?void 0:Ir(r),size:s===void 0?void 0:ha(s,`${t} has member 'size' that`)}}n(Gt,"convertQueuingStrategy");function ha(e,t){return Z(e,t),r=>Ir(e(r))}n(ha,"convertQueuingStrategySize");function pa(e,t){ue(e,t);const r=e?.abort,s=e?.close,f=e?.start,c=e?.type,d=e?.write;return {abort:r===void 0?void 0:ba(r,e,`${t} has member 'abort' that`),close:s===void 0?void 0:ma(s,e,`${t} has member 'close' that`),start:f===void 0?void 0:ya(f,e,`${t} has member 'start' that`),write:d===void 0?void 0:ga(d,e,`${t} has member 'write' that`),type:c}}n(pa,"convertUnderlyingSink");function ba(e,t,r){return Z(e,r),s=>j(e,t,[s])}n(ba,"convertUnderlyingSinkAbortCallback");function ma(e,t,r){return Z(e,r),()=>j(e,t,[])}n(ma,"convertUnderlyingSinkCloseCallback");function ya(e,t,r){return Z(e,r),s=>z(e,t,[s])}n(ya,"convertUnderlyingSinkStartCallback");function ga(e,t,r){return Z(e,r),(s,f)=>j(e,t,[s,f])}n(ga,"convertUnderlyingSinkWriteCallback");function Bo(e,t){if(!Ge(e))throw new TypeError(`${t} is not a WritableStream.`)}n(Bo,"assertWritableStream");function _a(e){if(typeof e!="object"||e===null)return !1;try{return typeof e.aborted=="boolean"}catch{return !1}}n(_a,"isAbortSignal");const Sa=typeof AbortController=="function";function wa(){if(Sa)return new AbortController}n(wa,"createAbortController");const wn=class wn{constructor(t={},r={}){t===void 0?t=null:Jn(t,"First parameter");const s=Gt(r,"Second parameter"),f=pa(t,"First parameter");if(Wo(this),f.type!==void 0)throw new RangeError("Invalid type is specified");const d=Yt(s),m=St(s,1);Ia(this,f,m,d);}get locked(){if(!Ge(this))throw er("locked");return Ze(this)}abort(t=void 0){return Ge(this)?Ze(this)?b(new TypeError("Cannot abort a stream that already has a writer")):Zt(this,t):b(er("abort"))}close(){return Ge(this)?Ze(this)?b(new TypeError("Cannot close a stream that already has a writer")):he(this)?b(new TypeError("Cannot close an already-closing stream")):qo(this):b(er("close"))}getWriter(){if(!Ge(this))throw er("getWriter");return ko(this)}};n(wn,"WritableStream");let de=wn;Object.defineProperties(de.prototype,{abort:{enumerable:!0},close:{enumerable:!0},getWriter:{enumerable:!0},locked:{enumerable:!0}}),h(de.prototype.abort,"abort"),h(de.prototype.close,"close"),h(de.prototype.getWriter,"getWriter"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(de.prototype,Symbol.toStringTag,{value:"WritableStream",configurable:!0});function ko(e){return new re(e)}n(ko,"AcquireWritableStreamDefaultWriter");function Ra(e,t,r,s,f=1,c=()=>1){const d=Object.create(de.prototype);Wo(d);const m=Object.create(ke.prototype);return Lo(d,m,e,t,r,s,f,c),d}n(Ra,"CreateWritableStream");function Wo(e){e._state="writable",e._storedError=void 0,e._writer=void 0,e._writableStreamController=void 0,e._writeRequests=new D,e._inFlightWriteRequest=void 0,e._closeRequest=void 0,e._inFlightCloseRequest=void 0,e._pendingAbortRequest=void 0,e._backpressure=!1;}n(Wo,"InitializeWritableStream");function Ge(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_writableStreamController")?!1:e instanceof de}n(Ge,"IsWritableStream");function Ze(e){return e._writer!==void 0}n(Ze,"IsWritableStreamLocked");function Zt(e,t){var r;if(e._state==="closed"||e._state==="errored")return T(void 0);e._writableStreamController._abortReason=t,(r=e._writableStreamController._abortController)===null||r===void 0||r.abort(t);const s=e._state;if(s==="closed"||s==="errored")return T(void 0);if(e._pendingAbortRequest!==void 0)return e._pendingAbortRequest._promise;let f=!1;s==="erroring"&&(f=!0,t=void 0);const c=E((d,m)=>{e._pendingAbortRequest={_promise:void 0,_resolve:d,_reject:m,_reason:t,_wasAlreadyErroring:f};});return e._pendingAbortRequest._promise=c,f||Xr(e,t),c}n(Zt,"WritableStreamAbort");function qo(e){const t=e._state;if(t==="closed"||t==="errored")return b(new TypeError(`The stream (in ${t} state) is not in the writable state and cannot be closed`));const r=E((f,c)=>{const d={_resolve:f,_reject:c};e._closeRequest=d;}),s=e._writer;return s!==void 0&&e._backpressure&&t==="writable"&&ln(s),Fa(e._writableStreamController),r}n(qo,"WritableStreamClose");function Ta(e){return E((r,s)=>{const f={_resolve:r,_reject:s};e._writeRequests.push(f);})}n(Ta,"WritableStreamAddWriteRequest");function Jr(e,t){if(e._state==="writable"){Xr(e,t);return}en(e);}n(Jr,"WritableStreamDealWithRejection");function Xr(e,t){const r=e._writableStreamController;e._state="erroring",e._storedError=t;const s=e._writer;s!==void 0&&zo(s,t),!Aa(e)&&r._started&&en(e);}n(Xr,"WritableStreamStartErroring");function en(e){e._state="errored",e._writableStreamController[Qn]();const t=e._storedError;if(e._writeRequests.forEach(f=>{f._reject(t);}),e._writeRequests=new D,e._pendingAbortRequest===void 0){Kt(e);return}const r=e._pendingAbortRequest;if(e._pendingAbortRequest=void 0,r._wasAlreadyErroring){r._reject(t),Kt(e);return}const s=e._writableStreamController[Ft](r._reason);_(s,()=>(r._resolve(),Kt(e),null),f=>(r._reject(f),Kt(e),null));}n(en,"WritableStreamFinishErroring");function Ca(e){e._inFlightWriteRequest._resolve(void 0),e._inFlightWriteRequest=void 0;}n(Ca,"WritableStreamFinishInFlightWrite");function Pa(e,t){e._inFlightWriteRequest._reject(t),e._inFlightWriteRequest=void 0,Jr(e,t);}n(Pa,"WritableStreamFinishInFlightWriteWithError");function va(e){e._inFlightCloseRequest._resolve(void 0),e._inFlightCloseRequest=void 0,e._state==="erroring"&&(e._storedError=void 0,e._pendingAbortRequest!==void 0&&(e._pendingAbortRequest._resolve(),e._pendingAbortRequest=void 0)),e._state="closed";const r=e._writer;r!==void 0&&Uo(r);}n(va,"WritableStreamFinishInFlightClose");function Ea(e,t){e._inFlightCloseRequest._reject(t),e._inFlightCloseRequest=void 0,e._pendingAbortRequest!==void 0&&(e._pendingAbortRequest._reject(t),e._pendingAbortRequest=void 0),Jr(e,t);}n(Ea,"WritableStreamFinishInFlightCloseWithError");function he(e){return !(e._closeRequest===void 0&&e._inFlightCloseRequest===void 0)}n(he,"WritableStreamCloseQueuedOrInFlight");function Aa(e){return !(e._inFlightWriteRequest===void 0&&e._inFlightCloseRequest===void 0)}n(Aa,"WritableStreamHasOperationMarkedInFlight");function Ba(e){e._inFlightCloseRequest=e._closeRequest,e._closeRequest=void 0;}n(Ba,"WritableStreamMarkCloseRequestInFlight");function ka(e){e._inFlightWriteRequest=e._writeRequests.shift();}n(ka,"WritableStreamMarkFirstWriteRequestInFlight");function Kt(e){e._closeRequest!==void 0&&(e._closeRequest._reject(e._storedError),e._closeRequest=void 0);const t=e._writer;t!==void 0&&an(t,e._storedError);}n(Kt,"WritableStreamRejectCloseAndClosedPromiseIfNeeded");function tn(e,t){const r=e._writer;r!==void 0&&t!==e._backpressure&&(t?xa(r):ln(r)),e._backpressure=t;}n(tn,"WritableStreamUpdateBackpressure");const Rn=class Rn{constructor(t){if(Se(t,1,"WritableStreamDefaultWriter"),Bo(t,"First parameter"),Ze(t))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=t,t._writer=this;const r=t._state;if(r==="writable")!he(t)&&t._backpressure?rr(this):xo(this),tr(this);else if(r==="erroring")sn(this,t._storedError),tr(this);else if(r==="closed")xo(this),Ma(this);else {const s=t._storedError;sn(this,s),Mo(this,s);}}get closed(){return je(this)?this._closedPromise:b(Le("closed"))}get desiredSize(){if(!je(this))throw Le("desiredSize");if(this._ownerWritableStream===void 0)throw Rt("desiredSize");return za(this)}get ready(){return je(this)?this._readyPromise:b(Le("ready"))}abort(t=void 0){return je(this)?this._ownerWritableStream===void 0?b(Rt("abort")):Wa(this,t):b(Le("abort"))}close(){if(!je(this))return b(Le("close"));const t=this._ownerWritableStream;return t===void 0?b(Rt("close")):he(t)?b(new TypeError("Cannot close an already-closing stream")):Oo(this)}releaseLock(){if(!je(this))throw Le("releaseLock");this._ownerWritableStream!==void 0&&Io(this);}write(t=void 0){return je(this)?this._ownerWritableStream===void 0?b(Rt("write to")):Fo(this,t):b(Le("write"))}};n(Rn,"WritableStreamDefaultWriter");let re=Rn;Object.defineProperties(re.prototype,{abort:{enumerable:!0},close:{enumerable:!0},releaseLock:{enumerable:!0},write:{enumerable:!0},closed:{enumerable:!0},desiredSize:{enumerable:!0},ready:{enumerable:!0}}),h(re.prototype.abort,"abort"),h(re.prototype.close,"close"),h(re.prototype.releaseLock,"releaseLock"),h(re.prototype.write,"write"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(re.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultWriter",configurable:!0});function je(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_ownerWritableStream")?!1:e instanceof re}n(je,"IsWritableStreamDefaultWriter");function Wa(e,t){const r=e._ownerWritableStream;return Zt(r,t)}n(Wa,"WritableStreamDefaultWriterAbort");function Oo(e){const t=e._ownerWritableStream;return qo(t)}n(Oo,"WritableStreamDefaultWriterClose");function qa(e){const t=e._ownerWritableStream,r=t._state;return he(t)||r==="closed"?T(void 0):r==="errored"?b(t._storedError):Oo(e)}n(qa,"WritableStreamDefaultWriterCloseWithErrorPropagation");function Oa(e,t){e._closedPromiseState==="pending"?an(e,t):Ua(e,t);}n(Oa,"WritableStreamDefaultWriterEnsureClosedPromiseRejected");function zo(e,t){e._readyPromiseState==="pending"?No(e,t):Na(e,t);}n(zo,"WritableStreamDefaultWriterEnsureReadyPromiseRejected");function za(e){const t=e._ownerWritableStream,r=t._state;return r==="errored"||r==="erroring"?null:r==="closed"?0:$o(t._writableStreamController)}n(za,"WritableStreamDefaultWriterGetDesiredSize");function Io(e){const t=e._ownerWritableStream,r=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");zo(e,r),Oa(e,r),t._writer=void 0,e._ownerWritableStream=void 0;}n(Io,"WritableStreamDefaultWriterRelease");function Fo(e,t){const r=e._ownerWritableStream,s=r._writableStreamController,f=ja(s,t);if(r!==e._ownerWritableStream)return b(Rt("write to"));const c=r._state;if(c==="errored")return b(r._storedError);if(he(r)||c==="closed")return b(new TypeError("The stream is closing or closed and cannot be written to"));if(c==="erroring")return b(r._storedError);const d=Ta(r);return La(s,t,f),d}n(Fo,"WritableStreamDefaultWriterWrite");const jo={},Tn=class Tn{constructor(){throw new TypeError("Illegal constructor")}get abortReason(){if(!rn(this))throw on("abortReason");return this._abortReason}get signal(){if(!rn(this))throw on("signal");if(this._abortController===void 0)throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");return this._abortController.signal}error(t=void 0){if(!rn(this))throw on("error");this._controlledWritableStream._state==="writable"&&Do(this,t);}[Ft](t){const r=this._abortAlgorithm(t);return Jt(this),r}[Qn](){Be(this);}};n(Tn,"WritableStreamDefaultController");let ke=Tn;Object.defineProperties(ke.prototype,{abortReason:{enumerable:!0},signal:{enumerable:!0},error:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ke.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultController",configurable:!0});function rn(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_controlledWritableStream")?!1:e instanceof ke}n(rn,"IsWritableStreamDefaultController");function Lo(e,t,r,s,f,c,d,m){t._controlledWritableStream=e,e._writableStreamController=t,t._queue=void 0,t._queueTotalSize=void 0,Be(t),t._abortReason=void 0,t._abortController=wa(),t._started=!1,t._strategySizeAlgorithm=m,t._strategyHWM=d,t._writeAlgorithm=s,t._closeAlgorithm=f,t._abortAlgorithm=c;const R=nn(t);tn(e,R);const y=r(),C=T(y);_(C,()=>(t._started=!0,Xt(t),null),P=>(t._started=!0,Jr(e,P),null));}n(Lo,"SetUpWritableStreamDefaultController");function Ia(e,t,r,s){const f=Object.create(ke.prototype);let c,d,m,R;t.start!==void 0?c=n(()=>t.start(f),"startAlgorithm"):c=n(()=>{},"startAlgorithm"),t.write!==void 0?d=n(y=>t.write(y,f),"writeAlgorithm"):d=n(()=>T(void 0),"writeAlgorithm"),t.close!==void 0?m=n(()=>t.close(),"closeAlgorithm"):m=n(()=>T(void 0),"closeAlgorithm"),t.abort!==void 0?R=n(y=>t.abort(y),"abortAlgorithm"):R=n(()=>T(void 0),"abortAlgorithm"),Lo(e,f,c,d,m,R,r,s);}n(Ia,"SetUpWritableStreamDefaultControllerFromUnderlyingSink");function Jt(e){e._writeAlgorithm=void 0,e._closeAlgorithm=void 0,e._abortAlgorithm=void 0,e._strategySizeAlgorithm=void 0;}n(Jt,"WritableStreamDefaultControllerClearAlgorithms");function Fa(e){Nr(e,jo,0),Xt(e);}n(Fa,"WritableStreamDefaultControllerClose");function ja(e,t){try{return e._strategySizeAlgorithm(t)}catch(r){return wt(e,r),1}}n(ja,"WritableStreamDefaultControllerGetChunkSize");function $o(e){return e._strategyHWM-e._queueTotalSize}n($o,"WritableStreamDefaultControllerGetDesiredSize");function La(e,t,r){try{Nr(e,t,r);}catch(f){wt(e,f);return}const s=e._controlledWritableStream;if(!he(s)&&s._state==="writable"){const f=nn(e);tn(s,f);}Xt(e);}n(La,"WritableStreamDefaultControllerWrite");function Xt(e){const t=e._controlledWritableStream;if(!e._started||t._inFlightWriteRequest!==void 0)return;if(t._state==="erroring"){en(t);return}if(e._queue.length===0)return;const s=Ji(e);s===jo?$a(e):Da(e,s);}n(Xt,"WritableStreamDefaultControllerAdvanceQueueIfNeeded");function wt(e,t){e._controlledWritableStream._state==="writable"&&Do(e,t);}n(wt,"WritableStreamDefaultControllerErrorIfNeeded");function $a(e){const t=e._controlledWritableStream;Ba(t),xr(e);const r=e._closeAlgorithm();Jt(e),_(r,()=>(va(t),null),s=>(Ea(t,s),null));}n($a,"WritableStreamDefaultControllerProcessClose");function Da(e,t){const r=e._controlledWritableStream;ka(r);const s=e._writeAlgorithm(t);_(s,()=>{Ca(r);const f=r._state;if(xr(e),!he(r)&&f==="writable"){const c=nn(e);tn(r,c);}return Xt(e),null},f=>(r._state==="writable"&&Jt(e),Pa(r,f),null));}n(Da,"WritableStreamDefaultControllerProcessWrite");function nn(e){return $o(e)<=0}n(nn,"WritableStreamDefaultControllerGetBackpressure");function Do(e,t){const r=e._controlledWritableStream;Jt(e),Xr(r,t);}n(Do,"WritableStreamDefaultControllerError");function er(e){return new TypeError(`WritableStream.prototype.${e} can only be used on a WritableStream`)}n(er,"streamBrandCheckException$2");function on(e){return new TypeError(`WritableStreamDefaultController.prototype.${e} can only be used on a WritableStreamDefaultController`)}n(on,"defaultControllerBrandCheckException$2");function Le(e){return new TypeError(`WritableStreamDefaultWriter.prototype.${e} can only be used on a WritableStreamDefaultWriter`)}n(Le,"defaultWriterBrandCheckException");function Rt(e){return new TypeError("Cannot "+e+" a stream using a released writer")}n(Rt,"defaultWriterLockException");function tr(e){e._closedPromise=E((t,r)=>{e._closedPromise_resolve=t,e._closedPromise_reject=r,e._closedPromiseState="pending";});}n(tr,"defaultWriterClosedPromiseInitialize");function Mo(e,t){tr(e),an(e,t);}n(Mo,"defaultWriterClosedPromiseInitializeAsRejected");function Ma(e){tr(e),Uo(e);}n(Ma,"defaultWriterClosedPromiseInitializeAsResolved");function an(e,t){e._closedPromise_reject!==void 0&&(Q(e._closedPromise),e._closedPromise_reject(t),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="rejected");}n(an,"defaultWriterClosedPromiseReject");function Ua(e,t){Mo(e,t);}n(Ua,"defaultWriterClosedPromiseResetToRejected");function Uo(e){e._closedPromise_resolve!==void 0&&(e._closedPromise_resolve(void 0),e._closedPromise_resolve=void 0,e._closedPromise_reject=void 0,e._closedPromiseState="resolved");}n(Uo,"defaultWriterClosedPromiseResolve");function rr(e){e._readyPromise=E((t,r)=>{e._readyPromise_resolve=t,e._readyPromise_reject=r;}),e._readyPromiseState="pending";}n(rr,"defaultWriterReadyPromiseInitialize");function sn(e,t){rr(e),No(e,t);}n(sn,"defaultWriterReadyPromiseInitializeAsRejected");function xo(e){rr(e),ln(e);}n(xo,"defaultWriterReadyPromiseInitializeAsResolved");function No(e,t){e._readyPromise_reject!==void 0&&(Q(e._readyPromise),e._readyPromise_reject(t),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="rejected");}n(No,"defaultWriterReadyPromiseReject");function xa(e){rr(e);}n(xa,"defaultWriterReadyPromiseReset");function Na(e,t){sn(e,t);}n(Na,"defaultWriterReadyPromiseResetToRejected");function ln(e){e._readyPromise_resolve!==void 0&&(e._readyPromise_resolve(void 0),e._readyPromise_resolve=void 0,e._readyPromise_reject=void 0,e._readyPromiseState="fulfilled");}n(ln,"defaultWriterReadyPromiseResolve");function Ha(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof n$1<"u")return n$1}n(Ha,"getGlobals");const un=Ha();function Va(e){if(!(typeof e=="function"||typeof e=="object")||e.name!=="DOMException")return !1;try{return new e,!0}catch{return !1}}n(Va,"isDOMExceptionConstructor");function Qa(){const e=un?.DOMException;return Va(e)?e:void 0}n(Qa,"getFromGlobal");function Ya(){const e=n(function(r,s){this.message=r||"",this.name=s||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor);},"DOMException");return h(e,"DOMException"),e.prototype=Object.create(Error.prototype),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,configurable:!0}),e}n(Ya,"createPolyfill");const Ga=Qa()||Ya();function Ho(e,t,r,s,f,c){const d=Qe(e),m=ko(t);e._disturbed=!0;let R=!1,y=T(void 0);return E((C,P)=>{let B;if(c!==void 0){if(B=n(()=>{const S=c.reason!==void 0?c.reason:new Ga("Aborted","AbortError"),v=[];s||v.push(()=>t._state==="writable"?Zt(t,S):T(void 0)),f||v.push(()=>e._state==="readable"?ie(e,S):T(void 0)),N(()=>Promise.all(v.map(k=>k())),!0,S);},"abortAlgorithm"),c.aborted){B();return}c.addEventListener("abort",B);}function ae(){return E((S,v)=>{function k(Y){Y?S():q(nt(),k,v);}n(k,"next"),k(!1);})}n(ae,"pipeLoop");function nt(){return R?T(!0):q(m._readyPromise,()=>E((S,v)=>{mt(d,{_chunkSteps:k=>{y=q(Fo(m,k),void 0,u),S(!1);},_closeSteps:()=>S(!0),_errorSteps:v});}))}if(n(nt,"pipeStep"),Te(e,d._closedPromise,S=>(s?J(!0,S):N(()=>Zt(t,S),!0,S),null)),Te(t,m._closedPromise,S=>(f?J(!0,S):N(()=>ie(e,S),!0,S),null)),x(e,d._closedPromise,()=>(r?J():N(()=>qa(m)),null)),he(t)||t._state==="closed"){const S=new TypeError("the destination writable stream closed before all data could be piped to it");f?J(!0,S):N(()=>ie(e,S),!0,S);}Q(ae());function Oe(){const S=y;return q(y,()=>S!==y?Oe():void 0)}n(Oe,"waitForWritesToFinish");function Te(S,v,k){S._state==="errored"?k(S._storedError):I(v,k);}n(Te,"isOrBecomesErrored");function x(S,v,k){S._state==="closed"?k():V(v,k);}n(x,"isOrBecomesClosed");function N(S,v,k){if(R)return;R=!0,t._state==="writable"&&!he(t)?V(Oe(),Y):Y();function Y(){return _(S(),()=>Ce(v,k),ot=>Ce(!0,ot)),null}n(Y,"doTheRest");}n(N,"shutdownWithAction");function J(S,v){R||(R=!0,t._state==="writable"&&!he(t)?V(Oe(),()=>Ce(S,v)):Ce(S,v));}n(J,"shutdown");function Ce(S,v){return Io(m),_e(d),c!==void 0&&c.removeEventListener("abort",B),S?P(v):C(void 0),null}n(Ce,"finalize");})}n(Ho,"ReadableStreamPipeTo");const Cn=class Cn{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!nr(this))throw ir("desiredSize");return fn(this)}close(){if(!nr(this))throw ir("close");if(!Je(this))throw new TypeError("The stream is not in a state that permits close");$e(this);}enqueue(t=void 0){if(!nr(this))throw ir("enqueue");if(!Je(this))throw new TypeError("The stream is not in a state that permits enqueue");return Ke(this,t)}error(t=void 0){if(!nr(this))throw ir("error");oe(this,t);}[Ar](t){Be(this);const r=this._cancelAlgorithm(t);return or(this),r}[Br](t){const r=this._controlledReadableStream;if(this._queue.length>0){const s=xr(this);this._closeRequested&&this._queue.length===0?(or(this),Pt(r)):Tt(this),t._chunkSteps(s);}else eo(r,t),Tt(this);}[kr](){}};n(Cn,"ReadableStreamDefaultController");let ne=Cn;Object.defineProperties(ne.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},desiredSize:{enumerable:!0}}),h(ne.prototype.close,"close"),h(ne.prototype.enqueue,"enqueue"),h(ne.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ne.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultController",configurable:!0});function nr(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_controlledReadableStream")?!1:e instanceof ne}n(nr,"IsReadableStreamDefaultController");function Tt(e){if(!Vo(e))return;if(e._pulling){e._pullAgain=!0;return}e._pulling=!0;const r=e._pullAlgorithm();_(r,()=>(e._pulling=!1,e._pullAgain&&(e._pullAgain=!1,Tt(e)),null),s=>(oe(e,s),null));}n(Tt,"ReadableStreamDefaultControllerCallPullIfNeeded");function Vo(e){const t=e._controlledReadableStream;return !Je(e)||!e._started?!1:!!(qe(t)&&Lt(t)>0||fn(e)>0)}n(Vo,"ReadableStreamDefaultControllerShouldCallPull");function or(e){e._pullAlgorithm=void 0,e._cancelAlgorithm=void 0,e._strategySizeAlgorithm=void 0;}n(or,"ReadableStreamDefaultControllerClearAlgorithms");function $e(e){if(!Je(e))return;const t=e._controlledReadableStream;e._closeRequested=!0,e._queue.length===0&&(or(e),Pt(t));}n($e,"ReadableStreamDefaultControllerClose");function Ke(e,t){if(!Je(e))return;const r=e._controlledReadableStream;if(qe(r)&&Lt(r)>0)Lr(r,t,!1);else {let s;try{s=e._strategySizeAlgorithm(t);}catch(f){throw oe(e,f),f}try{Nr(e,t,s);}catch(f){throw oe(e,f),f}}Tt(e);}n(Ke,"ReadableStreamDefaultControllerEnqueue");function oe(e,t){const r=e._controlledReadableStream;r._state==="readable"&&(Be(e),or(e),Zo(r,t));}n(oe,"ReadableStreamDefaultControllerError");function fn(e){const t=e._controlledReadableStream._state;return t==="errored"?null:t==="closed"?0:e._strategyHWM-e._queueTotalSize}n(fn,"ReadableStreamDefaultControllerGetDesiredSize");function Za(e){return !Vo(e)}n(Za,"ReadableStreamDefaultControllerHasBackpressure");function Je(e){const t=e._controlledReadableStream._state;return !e._closeRequested&&t==="readable"}n(Je,"ReadableStreamDefaultControllerCanCloseOrEnqueue");function Qo(e,t,r,s,f,c,d){t._controlledReadableStream=e,t._queue=void 0,t._queueTotalSize=void 0,Be(t),t._started=!1,t._closeRequested=!1,t._pullAgain=!1,t._pulling=!1,t._strategySizeAlgorithm=d,t._strategyHWM=c,t._pullAlgorithm=s,t._cancelAlgorithm=f,e._readableStreamController=t;const m=r();_(T(m),()=>(t._started=!0,Tt(t),null),R=>(oe(t,R),null));}n(Qo,"SetUpReadableStreamDefaultController");function Ka(e,t,r,s){const f=Object.create(ne.prototype);let c,d,m;t.start!==void 0?c=n(()=>t.start(f),"startAlgorithm"):c=n(()=>{},"startAlgorithm"),t.pull!==void 0?d=n(()=>t.pull(f),"pullAlgorithm"):d=n(()=>T(void 0),"pullAlgorithm"),t.cancel!==void 0?m=n(R=>t.cancel(R),"cancelAlgorithm"):m=n(()=>T(void 0),"cancelAlgorithm"),Qo(e,f,c,d,m,r,s);}n(Ka,"SetUpReadableStreamDefaultControllerFromUnderlyingSource");function ir(e){return new TypeError(`ReadableStreamDefaultController.prototype.${e} can only be used on a ReadableStreamDefaultController`)}n(ir,"defaultControllerBrandCheckException$1");function Ja(e,t){return ze(e._readableStreamController)?es(e):Xa(e)}n(Ja,"ReadableStreamTee");function Xa(e,t){const r=Qe(e);let s=!1,f=!1,c=!1,d=!1,m,R,y,C,P;const B=E(x=>{P=x;});function ae(){return s?(f=!0,T(void 0)):(s=!0,mt(r,{_chunkSteps:N=>{ge(()=>{f=!1;const J=N,Ce=N;c||Ke(y._readableStreamController,J),d||Ke(C._readableStreamController,Ce),s=!1,f&&ae();});},_closeSteps:()=>{s=!1,c||$e(y._readableStreamController),d||$e(C._readableStreamController),(!c||!d)&&P(void 0);},_errorSteps:()=>{s=!1;}}),T(void 0))}n(ae,"pullAlgorithm");function nt(x){if(c=!0,m=x,d){const N=yt([m,R]),J=ie(e,N);P(J);}return B}n(nt,"cancel1Algorithm");function Oe(x){if(d=!0,R=x,c){const N=yt([m,R]),J=ie(e,N);P(J);}return B}n(Oe,"cancel2Algorithm");function Te(){}return n(Te,"startAlgorithm"),y=Ct(Te,ae,nt),C=Ct(Te,ae,Oe),I(r._closedPromise,x=>(oe(y._readableStreamController,x),oe(C._readableStreamController,x),(!c||!d)&&P(void 0),null)),[y,C]}n(Xa,"ReadableStreamDefaultTee");function es(e){let t=Qe(e),r=!1,s=!1,f=!1,c=!1,d=!1,m,R,y,C,P;const B=E(S=>{P=S;});function ae(S){I(S._closedPromise,v=>(S!==t||(K(y._readableStreamController,v),K(C._readableStreamController,v),(!c||!d)&&P(void 0)),null));}n(ae,"forwardReaderError");function nt(){Fe(t)&&(_e(t),t=Qe(e),ae(t)),mt(t,{_chunkSteps:v=>{ge(()=>{s=!1,f=!1;const k=v;let Y=v;if(!c&&!d)try{Y=fo(v);}catch(ot){K(y._readableStreamController,ot),K(C._readableStreamController,ot),P(ie(e,ot));return}c||Nt(y._readableStreamController,k),d||Nt(C._readableStreamController,Y),r=!1,s?Te():f&&x();});},_closeSteps:()=>{r=!1,c||gt(y._readableStreamController),d||gt(C._readableStreamController),y._readableStreamController._pendingPullIntos.length>0&&Ht(y._readableStreamController,0),C._readableStreamController._pendingPullIntos.length>0&&Ht(C._readableStreamController,0),(!c||!d)&&P(void 0);},_errorSteps:()=>{r=!1;}});}n(nt,"pullWithDefaultReader");function Oe(S,v){Ee(t)&&(_e(t),t=Co(e),ae(t));const k=v?C:y,Y=v?y:C;Eo(t,S,1,{_chunkSteps:it=>{ge(()=>{s=!1,f=!1;const at=v?d:c;if(v?c:d)at||Vt(k._readableStreamController,it);else {let ui;try{ui=fo(it);}catch(kn){K(k._readableStreamController,kn),K(Y._readableStreamController,kn),P(ie(e,kn));return}at||Vt(k._readableStreamController,it),Nt(Y._readableStreamController,ui);}r=!1,s?Te():f&&x();});},_closeSteps:it=>{r=!1;const at=v?d:c,fr=v?c:d;at||gt(k._readableStreamController),fr||gt(Y._readableStreamController),it!==void 0&&(at||Vt(k._readableStreamController,it),!fr&&Y._readableStreamController._pendingPullIntos.length>0&&Ht(Y._readableStreamController,0)),(!at||!fr)&&P(void 0);},_errorSteps:()=>{r=!1;}});}n(Oe,"pullWithBYOBReader");function Te(){if(r)return s=!0,T(void 0);r=!0;const S=Gr(y._readableStreamController);return S===null?nt():Oe(S._view,!1),T(void 0)}n(Te,"pull1Algorithm");function x(){if(r)return f=!0,T(void 0);r=!0;const S=Gr(C._readableStreamController);return S===null?nt():Oe(S._view,!0),T(void 0)}n(x,"pull2Algorithm");function N(S){if(c=!0,m=S,d){const v=yt([m,R]),k=ie(e,v);P(k);}return B}n(N,"cancel1Algorithm");function J(S){if(d=!0,R=S,c){const v=yt([m,R]),k=ie(e,v);P(k);}return B}n(J,"cancel2Algorithm");function Ce(){}return n(Ce,"startAlgorithm"),y=Go(Ce,Te,N),C=Go(Ce,x,J),ae(t),[y,C]}n(es,"ReadableByteStreamTee");function ts(e){return l(e)&&typeof e.getReader<"u"}n(ts,"isReadableStreamLike");function rs(e){return ts(e)?os(e.getReader()):ns(e)}n(rs,"ReadableStreamFrom");function ns(e){let t;const r=uo(e,"async"),s=u;function f(){let d;try{d=Yi(r);}catch(R){return b(R)}const m=T(d);return F(m,R=>{if(!l(R))throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");if(Gi(R))$e(t._readableStreamController);else {const C=Zi(R);Ke(t._readableStreamController,C);}})}n(f,"pullAlgorithm");function c(d){const m=r.iterator;let R;try{R=Mt(m,"return");}catch(P){return b(P)}if(R===void 0)return T(void 0);let y;try{y=z(R,m,[d]);}catch(P){return b(P)}const C=T(y);return F(C,P=>{if(!l(P))throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object")})}return n(c,"cancelAlgorithm"),t=Ct(s,f,c,0),t}n(ns,"ReadableStreamFromIterable");function os(e){let t;const r=u;function s(){let c;try{c=e.read();}catch(d){return b(d)}return F(c,d=>{if(!l(d))throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");if(d.done)$e(t._readableStreamController);else {const m=d.value;Ke(t._readableStreamController,m);}})}n(s,"pullAlgorithm");function f(c){try{return T(e.cancel(c))}catch(d){return b(d)}}return n(f,"cancelAlgorithm"),t=Ct(r,s,f,0),t}n(os,"ReadableStreamFromDefaultReader");function is(e,t){ue(e,t);const r=e,s=r?.autoAllocateChunkSize,f=r?.cancel,c=r?.pull,d=r?.start,m=r?.type;return {autoAllocateChunkSize:s===void 0?void 0:Fr(s,`${t} has member 'autoAllocateChunkSize' that`),cancel:f===void 0?void 0:as(f,r,`${t} has member 'cancel' that`),pull:c===void 0?void 0:ss(c,r,`${t} has member 'pull' that`),start:d===void 0?void 0:ls(d,r,`${t} has member 'start' that`),type:m===void 0?void 0:us(m,`${t} has member 'type' that`)}}n(is,"convertUnderlyingDefaultOrByteSource");function as(e,t,r){return Z(e,r),s=>j(e,t,[s])}n(as,"convertUnderlyingSourceCancelCallback");function ss(e,t,r){return Z(e,r),s=>j(e,t,[s])}n(ss,"convertUnderlyingSourcePullCallback");function ls(e,t,r){return Z(e,r),s=>z(e,t,[s])}n(ls,"convertUnderlyingSourceStartCallback");function us(e,t){if(e=`${e}`,e!=="bytes")throw new TypeError(`${t} '${e}' is not a valid enumeration value for ReadableStreamType`);return e}n(us,"convertReadableStreamType");function fs(e,t){return ue(e,t),{preventCancel:!!e?.preventCancel}}n(fs,"convertIteratorOptions");function Yo(e,t){ue(e,t);const r=e?.preventAbort,s=e?.preventCancel,f=e?.preventClose,c=e?.signal;return c!==void 0&&cs(c,`${t} has member 'signal' that`),{preventAbort:!!r,preventCancel:!!s,preventClose:!!f,signal:c}}n(Yo,"convertPipeOptions");function cs(e,t){if(!_a(e))throw new TypeError(`${t} is not an AbortSignal.`)}n(cs,"assertAbortSignal");function ds(e,t){ue(e,t);const r=e?.readable;zr(r,"readable","ReadableWritablePair"),jr(r,`${t} has member 'readable' that`);const s=e?.writable;return zr(s,"writable","ReadableWritablePair"),Bo(s,`${t} has member 'writable' that`),{readable:r,writable:s}}n(ds,"convertReadableWritablePair");const Pn=class Pn{constructor(t={},r={}){t===void 0?t=null:Jn(t,"First parameter");const s=Gt(r,"Second parameter"),f=is(t,"First parameter");if(cn(this),f.type==="bytes"){if(s.size!==void 0)throw new RangeError("The strategy for a byte stream cannot have a size function");const c=St(s,0);aa(this,f,c);}else {const c=Yt(s),d=St(s,1);Ka(this,f,d,c);}}get locked(){if(!We(this))throw De("locked");return qe(this)}cancel(t=void 0){return We(this)?qe(this)?b(new TypeError("Cannot cancel a stream that already has a reader")):ie(this,t):b(De("cancel"))}getReader(t=void 0){if(!We(this))throw De("getReader");return la(t,"First parameter").mode===void 0?Qe(this):Co(this)}pipeThrough(t,r={}){if(!We(this))throw De("pipeThrough");Se(t,1,"pipeThrough");const s=ds(t,"First parameter"),f=Yo(r,"Second parameter");if(qe(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(Ze(s.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");const c=Ho(this,s.writable,f.preventClose,f.preventAbort,f.preventCancel,f.signal);return Q(c),s.readable}pipeTo(t,r={}){if(!We(this))return b(De("pipeTo"));if(t===void 0)return b("Parameter 1 is required in 'pipeTo'.");if(!Ge(t))return b(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));let s;try{s=Yo(r,"Second parameter");}catch(f){return b(f)}return qe(this)?b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):Ze(t)?b(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):Ho(this,t,s.preventClose,s.preventAbort,s.preventCancel,s.signal)}tee(){if(!We(this))throw De("tee");const t=Ja(this);return yt(t)}values(t=void 0){if(!We(this))throw De("values");const r=fs(t,"First parameter");return Vi(this,r.preventCancel)}[Ur](t){return this.values(t)}static from(t){return rs(t)}};n(Pn,"ReadableStream");let L=Pn;Object.defineProperties(L,{from:{enumerable:!0}}),Object.defineProperties(L.prototype,{cancel:{enumerable:!0},getReader:{enumerable:!0},pipeThrough:{enumerable:!0},pipeTo:{enumerable:!0},tee:{enumerable:!0},values:{enumerable:!0},locked:{enumerable:!0}}),h(L.from,"from"),h(L.prototype.cancel,"cancel"),h(L.prototype.getReader,"getReader"),h(L.prototype.pipeThrough,"pipeThrough"),h(L.prototype.pipeTo,"pipeTo"),h(L.prototype.tee,"tee"),h(L.prototype.values,"values"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(L.prototype,Symbol.toStringTag,{value:"ReadableStream",configurable:!0}),Object.defineProperty(L.prototype,Ur,{value:L.prototype.values,writable:!0,configurable:!0});function Ct(e,t,r,s=1,f=()=>1){const c=Object.create(L.prototype);cn(c);const d=Object.create(ne.prototype);return Qo(c,d,e,t,r,s,f),c}n(Ct,"CreateReadableStream");function Go(e,t,r){const s=Object.create(L.prototype);cn(s);const f=Object.create(te.prototype);return To(s,f,e,t,r,0,void 0),s}n(Go,"CreateReadableByteStream");function cn(e){e._state="readable",e._reader=void 0,e._storedError=void 0,e._disturbed=!1;}n(cn,"InitializeReadableStream");function We(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_readableStreamController")?!1:e instanceof L}n(We,"IsReadableStream");function qe(e){return e._reader!==void 0}n(qe,"IsReadableStreamLocked");function ie(e,t){if(e._disturbed=!0,e._state==="closed")return T(void 0);if(e._state==="errored")return b(e._storedError);Pt(e);const r=e._reader;if(r!==void 0&&Fe(r)){const f=r._readIntoRequests;r._readIntoRequests=new D,f.forEach(c=>{c._closeSteps(void 0);});}const s=e._readableStreamController[Ar](t);return F(s,u)}n(ie,"ReadableStreamCancel");function Pt(e){e._state="closed";const t=e._reader;if(t!==void 0&&(Zn(t),Ee(t))){const r=t._readRequests;t._readRequests=new D,r.forEach(s=>{s._closeSteps();});}}n(Pt,"ReadableStreamClose");function Zo(e,t){e._state="errored",e._storedError=t;const r=e._reader;r!==void 0&&(Or(r,t),Ee(r)?ro(r,t):Ao(r,t));}n(Zo,"ReadableStreamError");function De(e){return new TypeError(`ReadableStream.prototype.${e} can only be used on a ReadableStream`)}n(De,"streamBrandCheckException$1");function Ko(e,t){ue(e,t);const r=e?.highWaterMark;return zr(r,"highWaterMark","QueuingStrategyInit"),{highWaterMark:Ir(r)}}n(Ko,"convertQueuingStrategyInit");const Jo=n(e=>e.byteLength,"byteLengthSizeFunction");h(Jo,"size");const vn=class vn{constructor(t){Se(t,1,"ByteLengthQueuingStrategy"),t=Ko(t,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=t.highWaterMark;}get highWaterMark(){if(!ei(this))throw Xo("highWaterMark");return this._byteLengthQueuingStrategyHighWaterMark}get size(){if(!ei(this))throw Xo("size");return Jo}};n(vn,"ByteLengthQueuingStrategy");let Xe=vn;Object.defineProperties(Xe.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Xe.prototype,Symbol.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:!0});function Xo(e){return new TypeError(`ByteLengthQueuingStrategy.prototype.${e} can only be used on a ByteLengthQueuingStrategy`)}n(Xo,"byteLengthBrandCheckException");function ei(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_byteLengthQueuingStrategyHighWaterMark")?!1:e instanceof Xe}n(ei,"IsByteLengthQueuingStrategy");const ti=n(()=>1,"countSizeFunction");h(ti,"size");const En=class En{constructor(t){Se(t,1,"CountQueuingStrategy"),t=Ko(t,"First parameter"),this._countQueuingStrategyHighWaterMark=t.highWaterMark;}get highWaterMark(){if(!ni(this))throw ri("highWaterMark");return this._countQueuingStrategyHighWaterMark}get size(){if(!ni(this))throw ri("size");return ti}};n(En,"CountQueuingStrategy");let et=En;Object.defineProperties(et.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(et.prototype,Symbol.toStringTag,{value:"CountQueuingStrategy",configurable:!0});function ri(e){return new TypeError(`CountQueuingStrategy.prototype.${e} can only be used on a CountQueuingStrategy`)}n(ri,"countBrandCheckException");function ni(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_countQueuingStrategyHighWaterMark")?!1:e instanceof et}n(ni,"IsCountQueuingStrategy");function hs(e,t){ue(e,t);const r=e?.cancel,s=e?.flush,f=e?.readableType,c=e?.start,d=e?.transform,m=e?.writableType;return {cancel:r===void 0?void 0:ys(r,e,`${t} has member 'cancel' that`),flush:s===void 0?void 0:ps(s,e,`${t} has member 'flush' that`),readableType:f,start:c===void 0?void 0:bs(c,e,`${t} has member 'start' that`),transform:d===void 0?void 0:ms(d,e,`${t} has member 'transform' that`),writableType:m}}n(hs,"convertTransformer");function ps(e,t,r){return Z(e,r),s=>j(e,t,[s])}n(ps,"convertTransformerFlushCallback");function bs(e,t,r){return Z(e,r),s=>z(e,t,[s])}n(bs,"convertTransformerStartCallback");function ms(e,t,r){return Z(e,r),(s,f)=>j(e,t,[s,f])}n(ms,"convertTransformerTransformCallback");function ys(e,t,r){return Z(e,r),s=>j(e,t,[s])}n(ys,"convertTransformerCancelCallback");const An=class An{constructor(t={},r={},s={}){t===void 0&&(t=null);const f=Gt(r,"Second parameter"),c=Gt(s,"Third parameter"),d=hs(t,"First parameter");if(d.readableType!==void 0)throw new RangeError("Invalid readableType specified");if(d.writableType!==void 0)throw new RangeError("Invalid writableType specified");const m=St(c,0),R=Yt(c),y=St(f,1),C=Yt(f);let P;const B=E(ae=>{P=ae;});gs(this,B,y,C,m,R),Ss(this,d),d.start!==void 0?P(d.start(this._transformStreamController)):P(void 0);}get readable(){if(!oi(this))throw li("readable");return this._readable}get writable(){if(!oi(this))throw li("writable");return this._writable}};n(An,"TransformStream");let tt=An;Object.defineProperties(tt.prototype,{readable:{enumerable:!0},writable:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(tt.prototype,Symbol.toStringTag,{value:"TransformStream",configurable:!0});function gs(e,t,r,s,f,c){function d(){return t}n(d,"startAlgorithm");function m(B){return Ts(e,B)}n(m,"writeAlgorithm");function R(B){return Cs(e,B)}n(R,"abortAlgorithm");function y(){return Ps(e)}n(y,"closeAlgorithm"),e._writable=Ra(d,m,y,R,r,s);function C(){return vs(e)}n(C,"pullAlgorithm");function P(B){return Es(e,B)}n(P,"cancelAlgorithm"),e._readable=Ct(d,C,P,f,c),e._backpressure=void 0,e._backpressureChangePromise=void 0,e._backpressureChangePromise_resolve=void 0,ar(e,!0),e._transformStreamController=void 0;}n(gs,"InitializeTransformStream");function oi(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_transformStreamController")?!1:e instanceof tt}n(oi,"IsTransformStream");function ii(e,t){oe(e._readable._readableStreamController,t),dn(e,t);}n(ii,"TransformStreamError");function dn(e,t){lr(e._transformStreamController),wt(e._writable._writableStreamController,t),hn(e);}n(dn,"TransformStreamErrorWritableAndUnblockWrite");function hn(e){e._backpressure&&ar(e,!1);}n(hn,"TransformStreamUnblockWrite");function ar(e,t){e._backpressureChangePromise!==void 0&&e._backpressureChangePromise_resolve(),e._backpressureChangePromise=E(r=>{e._backpressureChangePromise_resolve=r;}),e._backpressure=t;}n(ar,"TransformStreamSetBackpressure");const Bn=class Bn{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!sr(this))throw ur("desiredSize");const t=this._controlledTransformStream._readable._readableStreamController;return fn(t)}enqueue(t=void 0){if(!sr(this))throw ur("enqueue");ai(this,t);}error(t=void 0){if(!sr(this))throw ur("error");ws(this,t);}terminate(){if(!sr(this))throw ur("terminate");Rs(this);}};n(Bn,"TransformStreamDefaultController");let pe=Bn;Object.defineProperties(pe.prototype,{enqueue:{enumerable:!0},error:{enumerable:!0},terminate:{enumerable:!0},desiredSize:{enumerable:!0}}),h(pe.prototype.enqueue,"enqueue"),h(pe.prototype.error,"error"),h(pe.prototype.terminate,"terminate"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(pe.prototype,Symbol.toStringTag,{value:"TransformStreamDefaultController",configurable:!0});function sr(e){return !l(e)||!Object.prototype.hasOwnProperty.call(e,"_controlledTransformStream")?!1:e instanceof pe}n(sr,"IsTransformStreamDefaultController");function _s(e,t,r,s,f){t._controlledTransformStream=e,e._transformStreamController=t,t._transformAlgorithm=r,t._flushAlgorithm=s,t._cancelAlgorithm=f,t._finishPromise=void 0,t._finishPromise_resolve=void 0,t._finishPromise_reject=void 0;}n(_s,"SetUpTransformStreamDefaultController");function Ss(e,t){const r=Object.create(pe.prototype);let s,f,c;t.transform!==void 0?s=n(d=>t.transform(d,r),"transformAlgorithm"):s=n(d=>{try{return ai(r,d),T(void 0)}catch(m){return b(m)}},"transformAlgorithm"),t.flush!==void 0?f=n(()=>t.flush(r),"flushAlgorithm"):f=n(()=>T(void 0),"flushAlgorithm"),t.cancel!==void 0?c=n(d=>t.cancel(d),"cancelAlgorithm"):c=n(()=>T(void 0),"cancelAlgorithm"),_s(e,r,s,f,c);}n(Ss,"SetUpTransformStreamDefaultControllerFromTransformer");function lr(e){e._transformAlgorithm=void 0,e._flushAlgorithm=void 0,e._cancelAlgorithm=void 0;}n(lr,"TransformStreamDefaultControllerClearAlgorithms");function ai(e,t){const r=e._controlledTransformStream,s=r._readable._readableStreamController;if(!Je(s))throw new TypeError("Readable side is not in a state that permits enqueue");try{Ke(s,t);}catch(c){throw dn(r,c),r._readable._storedError}Za(s)!==r._backpressure&&ar(r,!0);}n(ai,"TransformStreamDefaultControllerEnqueue");function ws(e,t){ii(e._controlledTransformStream,t);}n(ws,"TransformStreamDefaultControllerError");function si(e,t){const r=e._transformAlgorithm(t);return F(r,void 0,s=>{throw ii(e._controlledTransformStream,s),s})}n(si,"TransformStreamDefaultControllerPerformTransform");function Rs(e){const t=e._controlledTransformStream,r=t._readable._readableStreamController;$e(r);const s=new TypeError("TransformStream terminated");dn(t,s);}n(Rs,"TransformStreamDefaultControllerTerminate");function Ts(e,t){const r=e._transformStreamController;if(e._backpressure){const s=e._backpressureChangePromise;return F(s,()=>{const f=e._writable;if(f._state==="erroring")throw f._storedError;return si(r,t)})}return si(r,t)}n(Ts,"TransformStreamDefaultSinkWriteAlgorithm");function Cs(e,t){const r=e._transformStreamController;if(r._finishPromise!==void 0)return r._finishPromise;const s=e._readable;r._finishPromise=E((c,d)=>{r._finishPromise_resolve=c,r._finishPromise_reject=d;});const f=r._cancelAlgorithm(t);return lr(r),_(f,()=>(s._state==="errored"?rt(r,s._storedError):(oe(s._readableStreamController,t),pn(r)),null),c=>(oe(s._readableStreamController,c),rt(r,c),null)),r._finishPromise}n(Cs,"TransformStreamDefaultSinkAbortAlgorithm");function Ps(e){const t=e._transformStreamController;if(t._finishPromise!==void 0)return t._finishPromise;const r=e._readable;t._finishPromise=E((f,c)=>{t._finishPromise_resolve=f,t._finishPromise_reject=c;});const s=t._flushAlgorithm();return lr(t),_(s,()=>(r._state==="errored"?rt(t,r._storedError):($e(r._readableStreamController),pn(t)),null),f=>(oe(r._readableStreamController,f),rt(t,f),null)),t._finishPromise}n(Ps,"TransformStreamDefaultSinkCloseAlgorithm");function vs(e){return ar(e,!1),e._backpressureChangePromise}n(vs,"TransformStreamDefaultSourcePullAlgorithm");function Es(e,t){const r=e._transformStreamController;if(r._finishPromise!==void 0)return r._finishPromise;const s=e._writable;r._finishPromise=E((c,d)=>{r._finishPromise_resolve=c,r._finishPromise_reject=d;});const f=r._cancelAlgorithm(t);return lr(r),_(f,()=>(s._state==="errored"?rt(r,s._storedError):(wt(s._writableStreamController,t),hn(e),pn(r)),null),c=>(wt(s._writableStreamController,c),hn(e),rt(r,c),null)),r._finishPromise}n(Es,"TransformStreamDefaultSourceCancelAlgorithm");function ur(e){return new TypeError(`TransformStreamDefaultController.prototype.${e} can only be used on a TransformStreamDefaultController`)}n(ur,"defaultControllerBrandCheckException");function pn(e){e._finishPromise_resolve!==void 0&&(e._finishPromise_resolve(),e._finishPromise_resolve=void 0,e._finishPromise_reject=void 0);}n(pn,"defaultControllerFinishPromiseResolve");function rt(e,t){e._finishPromise_reject!==void 0&&(Q(e._finishPromise),e._finishPromise_reject(t),e._finishPromise_resolve=void 0,e._finishPromise_reject=void 0);}n(rt,"defaultControllerFinishPromiseReject");function li(e){return new TypeError(`TransformStream.prototype.${e} can only be used on a TransformStream`)}n(li,"streamBrandCheckException"),a.ByteLengthQueuingStrategy=Xe,a.CountQueuingStrategy=et,a.ReadableByteStreamController=te,a.ReadableStream=L,a.ReadableStreamBYOBReader=ce,a.ReadableStreamBYOBRequest=Re,a.ReadableStreamDefaultController=ne,a.ReadableStreamDefaultReader=fe,a.TransformStream=tt,a.TransformStreamDefaultController=pe,a.WritableStream=de,a.WritableStreamDefaultController=ke,a.WritableStreamDefaultWriter=re;});}(pr,pr.exports)),pr.exports}n(Ls,"requirePonyfill_es2018");const $s=65536;if(!globalThis.ReadableStream)try{const i=require("node:process"),{emitWarning:o}=i;try{i.emitWarning=()=>{},Object.assign(globalThis,require("node:stream/web")),i.emitWarning=o;}catch(a){throw i.emitWarning=o,a}}catch{Object.assign(globalThis,Ls());}try{const{Blob:i}=require("buffer");i&&!i.prototype.stream&&(i.prototype.stream=n(function(a){let u=0;const l=this;return new ReadableStream({type:"bytes",async pull(p){const g=await l.slice(u,Math.min(l.size,u+$s)).arrayBuffer();u+=g.byteLength,p.enqueue(new Uint8Array(g)),u===l.size&&p.close();}})},"name"));}catch{}/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */const hi=65536;async function*qn(i,o=!0){for(const a of i)if("stream"in a)yield*a.stream();else if(ArrayBuffer.isView(a))if(o){let u=a.byteOffset;const l=a.byteOffset+a.byteLength;for(;u!==l;){const p=Math.min(l-u,hi),h=a.buffer.slice(u,u+p);u+=h.byteLength,yield new Uint8Array(h);}}else yield a;else {let u=0,l=a;for(;u!==l.size;){const h=await l.slice(u,Math.min(l.size,u+hi)).arrayBuffer();u+=h.byteLength,yield new Uint8Array(h);}}}n(qn,"toIterator");const pi=(Ve=class{constructor(o=[],a={}){be(this,ve,[]);be(this,kt,"");be(this,bt,0);be(this,Cr,"transparent");if(typeof o!="object"||o===null)throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");if(typeof o[Symbol.iterator]!="function")throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");if(typeof a!="object"&&typeof a!="function")throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");a===null&&(a={});const u=new TextEncoder;for(const p of o){let h;ArrayBuffer.isView(p)?h=new Uint8Array(p.buffer.slice(p.byteOffset,p.byteOffset+p.byteLength)):p instanceof ArrayBuffer?h=new Uint8Array(p.slice(0)):p instanceof Ve?h=p:h=u.encode(`${p}`),X(this,bt,O(this,bt)+(ArrayBuffer.isView(h)?h.byteLength:h.size)),O(this,ve).push(h);}X(this,Cr,`${a.endings===void 0?"transparent":a.endings}`);const l=a.type===void 0?"":String(a.type);X(this,kt,/^[\x20-\x7E]*$/.test(l)?l:"");}get size(){return O(this,bt)}get type(){return O(this,kt)}async text(){const o=new TextDecoder;let a="";for await(const u of qn(O(this,ve),!1))a+=o.decode(u,{stream:!0});return a+=o.decode(),a}async arrayBuffer(){const o=new Uint8Array(this.size);let a=0;for await(const u of qn(O(this,ve),!1))o.set(u,a),a+=u.length;return o.buffer}stream(){const o=qn(O(this,ve),!0);return new globalThis.ReadableStream({type:"bytes",async pull(a){const u=await o.next();u.done?a.close():a.enqueue(u.value);},async cancel(){await o.return();}})}slice(o=0,a=this.size,u=""){const{size:l}=this;let p=o<0?Math.max(l+o,0):Math.min(o,l),h=a<0?Math.max(l+a,0):Math.min(a,l);const g=Math.max(h-p,0),A=O(this,ve),w=[];let E=0;for(const b of A){if(E>=g)break;const q=ArrayBuffer.isView(b)?b.byteLength:b.size;if(p&&q<=p)p-=q,h-=q;else {let _;ArrayBuffer.isView(b)?(_=b.subarray(p,Math.min(q,h)),E+=_.byteLength):(_=b.slice(p,Math.min(q,h)),E+=_.size),h-=q,w.push(_),p=0;}}const T=new Ve([],{type:String(u).toLowerCase()});return X(T,bt,g),X(T,ve,w),T}get[Symbol.toStringTag](){return "Blob"}static[Symbol.hasInstance](o){return o&&typeof o=="object"&&typeof o.constructor=="function"&&(typeof o.stream=="function"||typeof o.arrayBuffer=="function")&&/^(Blob|File)$/.test(o[Symbol.toStringTag])}},ve=new WeakMap,kt=new WeakMap,bt=new WeakMap,Cr=new WeakMap,n(Ve,"Blob"),Ve);Object.defineProperties(pi.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});const Ds=pi,ut=Ds,Ms=(Ot=class extends ut{constructor(a,u,l={}){if(arguments.length<2)throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);super(a,l);be(this,Wt,0);be(this,qt,"");l===null&&(l={});const p=l.lastModified===void 0?Date.now():Number(l.lastModified);Number.isNaN(p)||X(this,Wt,p),X(this,qt,String(u));}get name(){return O(this,qt)}get lastModified(){return O(this,Wt)}get[Symbol.toStringTag](){return "File"}static[Symbol.hasInstance](a){return !!a&&a instanceof ut&&/^(File)$/.test(a[Symbol.toStringTag])}},Wt=new WeakMap,qt=new WeakMap,n(Ot,"File"),Ot),Us=Ms,On=Us;/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var{toStringTag:Et,iterator:xs,hasInstance:Ns}=Symbol,bi=Math.random,Hs="append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","),mi=n((i,o,a)=>(i+="",/^(Blob|File)$/.test(o&&o[Et])?[(a=a!==void 0?a+"":o[Et]=="File"?o.name:"blob",i),o.name!==a||o[Et]=="blob"?new On([o],a,o):o]:[i,o+""]),"f"),zn=n((i,o)=>(o?i:i.replace(/\r?\n|\r/g,`\r
`)).replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22"),"e$1"),Me=n((i,o,a)=>{if(o.length<a)throw new TypeError(`Failed to execute '${i}' on 'FormData': ${a} arguments required, but only ${o.length} present.`)},"x");const br=(zt=class{constructor(...o){be(this,ee,[]);if(o.length)throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.")}get[Et](){return "FormData"}[xs](){return this.entries()}static[Ns](o){return o&&typeof o=="object"&&o[Et]==="FormData"&&!Hs.some(a=>typeof o[a]!="function")}append(...o){Me("append",arguments,2),O(this,ee).push(mi(...o));}delete(o){Me("delete",arguments,1),o+="",X(this,ee,O(this,ee).filter(([a])=>a!==o));}get(o){Me("get",arguments,1),o+="";for(var a=O(this,ee),u=a.length,l=0;l<u;l++)if(a[l][0]===o)return a[l][1];return null}getAll(o,a){return Me("getAll",arguments,1),a=[],o+="",O(this,ee).forEach(u=>u[0]===o&&a.push(u[1])),a}has(o){return Me("has",arguments,1),o+="",O(this,ee).some(a=>a[0]===o)}forEach(o,a){Me("forEach",arguments,1);for(var[u,l]of this)o.call(a,l,u,this);}set(...o){Me("set",arguments,2);var a=[],u=!0;o=mi(...o),O(this,ee).forEach(l=>{l[0]===o[0]?u&&(u=!a.push(o)):a.push(l);}),u&&a.push(o),X(this,ee,a);}*entries(){yield*O(this,ee);}*keys(){for(var[o]of this)yield o;}*values(){for(var[,o]of this)yield o;}},ee=new WeakMap,n(zt,"FormData"),zt);function Vs(i,o=ut){var a=`${bi()}${bi()}`.replace(/\./g,"").slice(-28).padStart(32,"-"),u=[],l=`--${a}\r
Content-Disposition: form-data; name="`;return i.forEach((p,h)=>typeof p=="string"?u.push(l+zn(h)+`"\r
\r
${p.replace(/\r(?!\n)|(?<!\r)\n/g,`\r
`)}\r
`):u.push(l+zn(h)+`"; filename="${zn(p.name,1)}"\r
Content-Type: ${p.type||"application/octet-stream"}\r
\r
`,p,`\r
`)),u.push(`--${a}--`),new o(u,{type:"multipart/form-data; boundary="+a})}n(Vs,"formDataToBlob");const Un=class Un extends Error{constructor(o,a){super(o),Error.captureStackTrace(this,this.constructor),this.type=a;}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};n(Un,"FetchBaseError");let ft=Un;const xn=class xn extends ft{constructor(o,a,u){super(o,a),u&&(this.code=this.errno=u.code,this.erroredSysCall=u.syscall);}};n(xn,"FetchError");let G=xn;const mr=Symbol.toStringTag,yi=n(i=>typeof i=="object"&&typeof i.append=="function"&&typeof i.delete=="function"&&typeof i.get=="function"&&typeof i.getAll=="function"&&typeof i.has=="function"&&typeof i.set=="function"&&typeof i.sort=="function"&&i[mr]==="URLSearchParams","isURLSearchParameters"),yr=n(i=>i&&typeof i=="object"&&typeof i.arrayBuffer=="function"&&typeof i.type=="string"&&typeof i.stream=="function"&&typeof i.constructor=="function"&&/^(Blob|File)$/.test(i[mr]),"isBlob"),Qs=n(i=>typeof i=="object"&&(i[mr]==="AbortSignal"||i[mr]==="EventTarget"),"isAbortSignal"),Ys=n((i,o)=>{const a=new URL(o).hostname,u=new URL(i).hostname;return a===u||a.endsWith(`.${u}`)},"isDomainOrSubdomain"),Gs=n((i,o)=>{const a=new URL(o).protocol,u=new URL(i).protocol;return a===u},"isSameProtocol"),Zs=promisify(me.pipeline),H$1=Symbol("Body internals"),Nn=class Nn{constructor(o,{size:a=0}={}){let u=null;o===null?o=null:yi(o)?o=Buffer$1.from(o.toString()):yr(o)||Buffer$1.isBuffer(o)||(types.isAnyArrayBuffer(o)?o=Buffer$1.from(o):ArrayBuffer.isView(o)?o=Buffer$1.from(o.buffer,o.byteOffset,o.byteLength):o instanceof me||(o instanceof br?(o=Vs(o),u=o.type.split("=")[1]):o=Buffer$1.from(String(o))));let l=o;Buffer$1.isBuffer(o)?l=me.Readable.from(o):yr(o)&&(l=me.Readable.from(o.stream())),this[H$1]={body:o,stream:l,boundary:u,disturbed:!1,error:null},this.size=a,o instanceof me&&o.on("error",p=>{const h=p instanceof ft?p:new G(`Invalid response body while trying to fetch ${this.url}: ${p.message}`,"system",p);this[H$1].error=h;});}get body(){return this[H$1].stream}get bodyUsed(){return this[H$1].disturbed}async arrayBuffer(){const{buffer:o,byteOffset:a,byteLength:u}=await In(this);return o.slice(a,a+u)}async formData(){const o=this.headers.get("content-type");if(o.startsWith("application/x-www-form-urlencoded")){const u=new br,l=new URLSearchParams(await this.text());for(const[p,h]of l)u.append(p,h);return u}const{toFormData:a}=await import('./_/multipart-parser.mjs');return a(this.body,o)}async blob(){const o=this.headers&&this.headers.get("content-type")||this[H$1].body&&this[H$1].body.type||"",a=await this.arrayBuffer();return new ut([a],{type:o})}async json(){const o=await this.text();return JSON.parse(o)}async text(){const o=await In(this);return new TextDecoder().decode(o)}buffer(){return In(this)}};n(Nn,"Body");let Ue=Nn;Ue.prototype.buffer=deprecate(Ue.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer"),Object.defineProperties(Ue.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:deprecate(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function In(i){if(i[H$1].disturbed)throw new TypeError(`body used already for: ${i.url}`);if(i[H$1].disturbed=!0,i[H$1].error)throw i[H$1].error;const{body:o}=i;if(o===null)return Buffer$1.alloc(0);if(!(o instanceof me))return Buffer$1.alloc(0);const a=[];let u=0;try{for await(const l of o){if(i.size>0&&u+l.length>i.size){const p=new G(`content size at ${i.url} over limit: ${i.size}`,"max-size");throw o.destroy(p),p}u+=l.length,a.push(l);}}catch(l){throw l instanceof ft?l:new G(`Invalid response body while trying to fetch ${i.url}: ${l.message}`,"system",l)}if(o.readableEnded===!0||o._readableState.ended===!0)try{return a.every(l=>typeof l=="string")?Buffer$1.from(a.join("")):Buffer$1.concat(a,u)}catch(l){throw new G(`Could not create Buffer from response body for ${i.url}: ${l.message}`,"system",l)}else throw new G(`Premature close of server response while trying to fetch ${i.url}`)}n(In,"consumeBody");const Fn=n((i,o)=>{let a,u,{body:l}=i[H$1];if(i.bodyUsed)throw new Error("cannot clone body after it is used");return l instanceof me&&typeof l.getBoundary!="function"&&(a=new PassThrough({highWaterMark:o}),u=new PassThrough({highWaterMark:o}),l.pipe(a),l.pipe(u),i[H$1].stream=a,l=u),l},"clone"),Ks=deprecate(i=>i.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),gi=n((i,o)=>i===null?null:typeof i=="string"?"text/plain;charset=UTF-8":yi(i)?"application/x-www-form-urlencoded;charset=UTF-8":yr(i)?i.type||null:Buffer$1.isBuffer(i)||types.isAnyArrayBuffer(i)||ArrayBuffer.isView(i)?null:i instanceof br?`multipart/form-data; boundary=${o[H$1].boundary}`:i&&typeof i.getBoundary=="function"?`multipart/form-data;boundary=${Ks(i)}`:i instanceof me?null:"text/plain;charset=UTF-8","extractContentType"),Js=n(i=>{const{body:o}=i[H$1];return o===null?0:yr(o)?o.size:Buffer$1.isBuffer(o)?o.length:o&&typeof o.getLengthSync=="function"&&o.hasKnownLength&&o.hasKnownLength()?o.getLengthSync():null},"getTotalBytes"),Xs=n(async(i,{body:o})=>{o===null?i.end():await Zs(o,i);},"writeToStream"),gr=typeof vt.validateHeaderName=="function"?vt.validateHeaderName:i=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(i)){const o=new TypeError(`Header name must be a valid HTTP token [${i}]`);throw Object.defineProperty(o,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),o}},jn=typeof vt.validateHeaderValue=="function"?vt.validateHeaderValue:(i,o)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(o)){const a=new TypeError(`Invalid character in header content ["${i}"]`);throw Object.defineProperty(a,"code",{value:"ERR_INVALID_CHAR"}),a}},Pr=class Pr extends URLSearchParams{constructor(o){let a=[];if(o instanceof Pr){const u=o.raw();for(const[l,p]of Object.entries(u))a.push(...p.map(h=>[l,h]));}else if(o!=null)if(typeof o=="object"&&!types.isBoxedPrimitive(o)){const u=o[Symbol.iterator];if(u==null)a.push(...Object.entries(o));else {if(typeof u!="function")throw new TypeError("Header pairs must be iterable");a=[...o].map(l=>{if(typeof l!="object"||types.isBoxedPrimitive(l))throw new TypeError("Each header pair must be an iterable object");return [...l]}).map(l=>{if(l.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return [...l]});}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return a=a.length>0?a.map(([u,l])=>(gr(u),jn(u,String(l)),[String(u).toLowerCase(),String(l)])):void 0,super(a),new Proxy(this,{get(u,l,p){switch(l){case"append":case"set":return (h,g)=>(gr(h),jn(h,String(g)),URLSearchParams.prototype[l].call(u,String(h).toLowerCase(),String(g)));case"delete":case"has":case"getAll":return h=>(gr(h),URLSearchParams.prototype[l].call(u,String(h).toLowerCase()));case"keys":return ()=>(u.sort(),new Set(URLSearchParams.prototype.keys.call(u)).keys());default:return Reflect.get(u,l,p)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(o){const a=this.getAll(o);if(a.length===0)return null;let u=a.join(", ");return /^content-encoding$/i.test(o)&&(u=u.toLowerCase()),u}forEach(o,a=void 0){for(const u of this.keys())Reflect.apply(o,a,[this.get(u),u,this]);}*values(){for(const o of this.keys())yield this.get(o);}*entries(){for(const o of this.keys())yield [o,this.get(o)];}[Symbol.iterator](){return this.entries()}raw(){return [...this.keys()].reduce((o,a)=>(o[a]=this.getAll(a),o),{})}[Symbol.for("nodejs.util.inspect.custom")](){return [...this.keys()].reduce((o,a)=>{const u=this.getAll(a);return a==="host"?o[a]=u[0]:o[a]=u.length>1?u:u[0],o},{})}};n(Pr,"Headers");let ye=Pr;Object.defineProperties(ye.prototype,["get","entries","forEach","values"].reduce((i,o)=>(i[o]={enumerable:!0},i),{}));function el(i=[]){return new ye(i.reduce((o,a,u,l)=>(u%2===0&&o.push(l.slice(u,u+2)),o),[]).filter(([o,a])=>{try{return gr(o),jn(o,String(a)),!0}catch{return !1}}))}n(el,"fromRawHeaders");const tl=new Set([301,302,303,307,308]),Ln=n(i=>tl.has(i),"isRedirect"),se=Symbol("Response internals"),xe=class xe extends Ue{constructor(o=null,a={}){super(o,a);const u=a.status!=null?a.status:200,l=new ye(a.headers);if(o!==null&&!l.has("Content-Type")){const p=gi(o,this);p&&l.append("Content-Type",p);}this[se]={type:"default",url:a.url,status:u,statusText:a.statusText||"",headers:l,counter:a.counter,highWaterMark:a.highWaterMark};}get type(){return this[se].type}get url(){return this[se].url||""}get status(){return this[se].status}get ok(){return this[se].status>=200&&this[se].status<300}get redirected(){return this[se].counter>0}get statusText(){return this[se].statusText}get headers(){return this[se].headers}get highWaterMark(){return this[se].highWaterMark}clone(){return new xe(Fn(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(o,a=302){if(!Ln(a))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new xe(null,{headers:{location:new URL(o).toString()},status:a})}static error(){const o=new xe(null,{status:0,statusText:""});return o[se].type="error",o}static json(o=void 0,a={}){const u=JSON.stringify(o);if(u===void 0)throw new TypeError("data is not JSON serializable");const l=new ye(a&&a.headers);return l.has("content-type")||l.set("content-type","application/json"),new xe(u,{...a,headers:l})}get[Symbol.toStringTag](){return "Response"}};n(xe,"Response");let le=xe;Object.defineProperties(le.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});const rl=n(i=>{if(i.search)return i.search;const o=i.href.length-1,a=i.hash||(i.href[o]==="#"?"#":"");return i.href[o-a.length]==="?"?"?":""},"getSearch");function _i(i,o=!1){return i==null||(i=new URL(i),/^(about|blob|data):$/.test(i.protocol))?"no-referrer":(i.username="",i.password="",i.hash="",o&&(i.pathname="",i.search=""),i)}n(_i,"stripURLForUseAsAReferrer");const Si=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),nl="strict-origin-when-cross-origin";function ol(i){if(!Si.has(i))throw new TypeError(`Invalid referrerPolicy: ${i}`);return i}n(ol,"validateReferrerPolicy");function il(i){if(/^(http|ws)s:$/.test(i.protocol))return !0;const o=i.host.replace(/(^\[)|(]$)/g,""),a=isIP(o);return a===4&&/^127\./.test(o)||a===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(o)?!0:i.host==="localhost"||i.host.endsWith(".localhost")?!1:i.protocol==="file:"}n(il,"isOriginPotentiallyTrustworthy");function ct(i){return /^about:(blank|srcdoc)$/.test(i)||i.protocol==="data:"||/^(blob|filesystem):$/.test(i.protocol)?!0:il(i)}n(ct,"isUrlPotentiallyTrustworthy");function al(i,{referrerURLCallback:o,referrerOriginCallback:a}={}){if(i.referrer==="no-referrer"||i.referrerPolicy==="")return null;const u=i.referrerPolicy;if(i.referrer==="about:client")return "no-referrer";const l=i.referrer;let p=_i(l),h=_i(l,!0);p.toString().length>4096&&(p=h),o&&(p=o(p)),a&&(h=a(h));const g=new URL(i.url);switch(u){case"no-referrer":return "no-referrer";case"origin":return h;case"unsafe-url":return p;case"strict-origin":return ct(p)&&!ct(g)?"no-referrer":h.toString();case"strict-origin-when-cross-origin":return p.origin===g.origin?p:ct(p)&&!ct(g)?"no-referrer":h;case"same-origin":return p.origin===g.origin?p:"no-referrer";case"origin-when-cross-origin":return p.origin===g.origin?p:h;case"no-referrer-when-downgrade":return ct(p)&&!ct(g)?"no-referrer":p;default:throw new TypeError(`Invalid referrerPolicy: ${u}`)}}n(al,"determineRequestsReferrer");function sl(i){const o=(i.get("referrer-policy")||"").split(/[,\s]+/);let a="";for(const u of o)u&&Si.has(u)&&(a=u);return a}n(sl,"parseReferrerPolicyFromHeader");const $=Symbol("Request internals"),At=n(i=>typeof i=="object"&&typeof i[$]=="object","isRequest"),ll=deprecate(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),vr=class vr extends Ue{constructor(o,a={}){let u;if(At(o)?u=new URL(o.url):(u=new URL(o),o={}),u.username!==""||u.password!=="")throw new TypeError(`${u} is an url with embedded credentials.`);let l=a.method||o.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(l)&&(l=l.toUpperCase()),!At(a)&&"data"in a&&ll(),(a.body!=null||At(o)&&o.body!==null)&&(l==="GET"||l==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");const p=a.body?a.body:At(o)&&o.body!==null?Fn(o):null;super(p,{size:a.size||o.size||0});const h=new ye(a.headers||o.headers||{});if(p!==null&&!h.has("Content-Type")){const w=gi(p,this);w&&h.set("Content-Type",w);}let g=At(o)?o.signal:null;if("signal"in a&&(g=a.signal),g!=null&&!Qs(g))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let A=a.referrer==null?o.referrer:a.referrer;if(A==="")A="no-referrer";else if(A){const w=new URL(A);A=/^about:(\/\/)?client$/.test(w)?"client":w;}else A=void 0;this[$]={method:l,redirect:a.redirect||o.redirect||"follow",headers:h,parsedURL:u,signal:g,referrer:A},this.follow=a.follow===void 0?o.follow===void 0?20:o.follow:a.follow,this.compress=a.compress===void 0?o.compress===void 0?!0:o.compress:a.compress,this.counter=a.counter||o.counter||0,this.agent=a.agent||o.agent,this.highWaterMark=a.highWaterMark||o.highWaterMark||16384,this.insecureHTTPParser=a.insecureHTTPParser||o.insecureHTTPParser||!1,this.referrerPolicy=a.referrerPolicy||o.referrerPolicy||"";}get method(){return this[$].method}get url(){return format(this[$].parsedURL)}get headers(){return this[$].headers}get redirect(){return this[$].redirect}get signal(){return this[$].signal}get referrer(){if(this[$].referrer==="no-referrer")return "";if(this[$].referrer==="client")return "about:client";if(this[$].referrer)return this[$].referrer.toString()}get referrerPolicy(){return this[$].referrerPolicy}set referrerPolicy(o){this[$].referrerPolicy=ol(o);}clone(){return new vr(this)}get[Symbol.toStringTag](){return "Request"}};n(vr,"Request");let dt=vr;Object.defineProperties(dt.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});const ul=n(i=>{const{parsedURL:o}=i[$],a=new ye(i[$].headers);a.has("Accept")||a.set("Accept","*/*");let u=null;if(i.body===null&&/^(post|put)$/i.test(i.method)&&(u="0"),i.body!==null){const g=Js(i);typeof g=="number"&&!Number.isNaN(g)&&(u=String(g));}u&&a.set("Content-Length",u),i.referrerPolicy===""&&(i.referrerPolicy=nl),i.referrer&&i.referrer!=="no-referrer"?i[$].referrer=al(i):i[$].referrer="no-referrer",i[$].referrer instanceof URL&&a.set("Referer",i.referrer),a.has("User-Agent")||a.set("User-Agent","node-fetch"),i.compress&&!a.has("Accept-Encoding")&&a.set("Accept-Encoding","gzip, deflate, br");let{agent:l}=i;typeof l=="function"&&(l=l(o));const p=rl(o),h={path:o.pathname+p,method:i.method,headers:a[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:i.insecureHTTPParser,agent:l};return {parsedURL:o,options:h}},"getNodeRequestOptions"),Hn=class Hn extends ft{constructor(o,a="aborted"){super(o,a);}};n(Hn,"AbortError");let _r=Hn;/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */if(!globalThis.DOMException)try{const{MessageChannel:i}=require("worker_threads"),o=new i().port1,a=new ArrayBuffer;o.postMessage(a,[a,a]);}catch(i){i.constructor.name==="DOMException"&&(globalThis.DOMException=i.constructor);}var fl=globalThis.DOMException;const cl=f$1(fl),{stat:$n}=promises;n((i,o)=>wi(statSync(i),i,o),"blobFromSync");n((i,o)=>$n(i).then(a=>wi(a,i,o)),"blobFrom");n((i,o)=>$n(i).then(a=>Ri(a,i,o)),"fileFrom");n((i,o)=>Ri(statSync(i),i,o),"fileFromSync");const wi=n((i,o,a="")=>new ut([new Sr({path:o,size:i.size,lastModified:i.mtimeMs,start:0})],{type:a}),"fromBlob"),Ri=n((i,o,a="")=>new On([new Sr({path:o,size:i.size,lastModified:i.mtimeMs,start:0})],basename(o),{type:a,lastModified:i.mtimeMs}),"fromFile"),Er=class Er{constructor(o){be(this,Ne,void 0);be(this,He,void 0);X(this,Ne,o.path),X(this,He,o.start),this.size=o.size,this.lastModified=o.lastModified;}slice(o,a){return new Er({path:O(this,Ne),lastModified:this.lastModified,size:a-o,start:O(this,He)+o})}async*stream(){const{mtimeMs:o}=await $n(O(this,Ne));if(o>this.lastModified)throw new cl("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.","NotReadableError");yield*createReadStream(O(this,Ne),{start:O(this,He),end:O(this,He)+this.size-1});}get[Symbol.toStringTag](){return "Blob"}};Ne=new WeakMap,He=new WeakMap,n(Er,"BlobDataItem");let Sr=Er;const ml=new Set(["data:","http:","https:"]);async function Ti(i,o){return new Promise((a,u)=>{const l=new dt(i,o),{parsedURL:p,options:h}=ul(l);if(!ml.has(p.protocol))throw new TypeError(`node-fetch cannot load ${i}. URL scheme "${p.protocol.replace(/:$/,"")}" is not supported.`);if(p.protocol==="data:"){const _=js(l.url),V=new le(_,{headers:{"Content-Type":_.typeFull}});a(V);return}const g=(p.protocol==="https:"?Bs:vt).request,{signal:A}=l;let w=null;const E=n(()=>{const _=new _r("The operation was aborted.");u(_),l.body&&l.body instanceof me.Readable&&l.body.destroy(_),!(!w||!w.body)&&w.body.emit("error",_);},"abort");if(A&&A.aborted){E();return}const T=n(()=>{E(),q();},"abortAndFinalize"),b=g(p.toString(),h);A&&A.addEventListener("abort",T);const q=n(()=>{b.abort(),A&&A.removeEventListener("abort",T);},"finalize");b.on("error",_=>{u(new G(`request to ${l.url} failed, reason: ${_.message}`,"system",_)),q();}),yl(b,_=>{w&&w.body&&w.body.destroy(_);}),process.version<"v14"&&b.on("socket",_=>{let V;_.prependListener("end",()=>{V=_._eventsCount;}),_.prependListener("close",I=>{if(w&&V<_._eventsCount&&!I){const F=new Error("Premature close");F.code="ERR_STREAM_PREMATURE_CLOSE",w.body.emit("error",F);}});}),b.on("response",_=>{b.setTimeout(0);const V=el(_.rawHeaders);if(Ln(_.statusCode)){const z=V.get("Location");let j=null;try{j=z===null?null:new URL(z,l.url);}catch{if(l.redirect!=="manual"){u(new G(`uri requested responds with an invalid redirect URL: ${z}`,"invalid-redirect")),q();return}}switch(l.redirect){case"error":u(new G(`uri requested responds with a redirect, redirect mode is set to error: ${l.url}`,"no-redirect")),q();return;case"manual":break;case"follow":{if(j===null)break;if(l.counter>=l.follow){u(new G(`maximum redirect reached at: ${l.url}`,"max-redirect")),q();return}const U={headers:new ye(l.headers),follow:l.follow,counter:l.counter+1,agent:l.agent,compress:l.compress,method:l.method,body:Fn(l),signal:l.signal,size:l.size,referrer:l.referrer,referrerPolicy:l.referrerPolicy};if(!Ys(l.url,j)||!Gs(l.url,j))for(const Ft of ["authorization","www-authenticate","cookie","cookie2"])U.headers.delete(Ft);if(_.statusCode!==303&&l.body&&o.body instanceof me.Readable){u(new G("Cannot follow redirect with body being a readable stream","unsupported-redirect")),q();return}(_.statusCode===303||(_.statusCode===301||_.statusCode===302)&&l.method==="POST")&&(U.method="GET",U.body=void 0,U.headers.delete("content-length"));const D=sl(V);D&&(U.referrerPolicy=D),a(Ti(new dt(j,U))),q();return}default:return u(new TypeError(`Redirect option '${l.redirect}' is not a valid value of RequestRedirect`))}}A&&_.once("end",()=>{A.removeEventListener("abort",T);});let I=pipeline(_,new PassThrough,z=>{z&&u(z);});process.version<"v12.10"&&_.on("aborted",T);const F={url:l.url,status:_.statusCode,statusText:_.statusMessage,headers:V,size:l.size,counter:l.counter,highWaterMark:l.highWaterMark},Q=V.get("Content-Encoding");if(!l.compress||l.method==="HEAD"||Q===null||_.statusCode===204||_.statusCode===304){w=new le(I,F),a(w);return}const ge={flush:st.Z_SYNC_FLUSH,finishFlush:st.Z_SYNC_FLUSH};if(Q==="gzip"||Q==="x-gzip"){I=pipeline(I,st.createGunzip(ge),z=>{z&&u(z);}),w=new le(I,F),a(w);return}if(Q==="deflate"||Q==="x-deflate"){const z=pipeline(_,new PassThrough,j=>{j&&u(j);});z.once("data",j=>{(j[0]&15)===8?I=pipeline(I,st.createInflate(),U=>{U&&u(U);}):I=pipeline(I,st.createInflateRaw(),U=>{U&&u(U);}),w=new le(I,F),a(w);}),z.once("end",()=>{w||(w=new le(I,F),a(w));});return}if(Q==="br"){I=pipeline(I,st.createBrotliDecompress(),z=>{z&&u(z);}),w=new le(I,F),a(w);return}w=new le(I,F),a(w);}),Xs(b,l).catch(u);})}n(Ti,"fetch$1");function yl(i,o){const a=Buffer$1.from(`0\r
\r
`);let u=!1,l=!1,p;i.on("response",h=>{const{headers:g}=h;u=g["transfer-encoding"]==="chunked"&&!g["content-length"];}),i.on("socket",h=>{const g=n(()=>{if(u&&!l){const w=new Error("Premature close");w.code="ERR_STREAM_PREMATURE_CLOSE",o(w);}},"onSocketClose"),A=n(w=>{l=Buffer$1.compare(w.slice(-5),a)===0,!l&&p&&(l=Buffer$1.compare(p.slice(-3),a.slice(0,3))===0&&Buffer$1.compare(w.slice(-2),a.slice(3))===0),p=w;},"onData");h.prependListener("close",g),h.on("data",A),i.on("close",()=>{h.removeListener("close",g),h.removeListener("data",A);});});}n(yl,"fixResponseChunkedTransferBadEnding");const Ci=new WeakMap,Dn=new WeakMap;function W$1(i){const o=Ci.get(i);return console.assert(o!=null,"'this' is expected an Event object, but got",i),o}n(W$1,"pd");function Pi(i){if(i.passiveListener!=null){typeof console<"u"&&typeof console.error=="function"&&console.error("Unable to preventDefault inside passive event listener invocation.",i.passiveListener);return}i.event.cancelable&&(i.canceled=!0,typeof i.event.preventDefault=="function"&&i.event.preventDefault());}n(Pi,"setCancelFlag");function ht(i,o){Ci.set(this,{eventTarget:i,event:o,eventPhase:2,currentTarget:i,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:o.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const a=Object.keys(o);for(let u=0;u<a.length;++u){const l=a[u];l in this||Object.defineProperty(this,l,vi(l));}}n(ht,"Event"),ht.prototype={get type(){return W$1(this).event.type},get target(){return W$1(this).eventTarget},get currentTarget(){return W$1(this).currentTarget},composedPath(){const i=W$1(this).currentTarget;return i==null?[]:[i]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return W$1(this).eventPhase},stopPropagation(){const i=W$1(this);i.stopped=!0,typeof i.event.stopPropagation=="function"&&i.event.stopPropagation();},stopImmediatePropagation(){const i=W$1(this);i.stopped=!0,i.immediateStopped=!0,typeof i.event.stopImmediatePropagation=="function"&&i.event.stopImmediatePropagation();},get bubbles(){return !!W$1(this).event.bubbles},get cancelable(){return !!W$1(this).event.cancelable},preventDefault(){Pi(W$1(this));},get defaultPrevented(){return W$1(this).canceled},get composed(){return !!W$1(this).event.composed},get timeStamp(){return W$1(this).timeStamp},get srcElement(){return W$1(this).eventTarget},get cancelBubble(){return W$1(this).stopped},set cancelBubble(i){if(!i)return;const o=W$1(this);o.stopped=!0,typeof o.event.cancelBubble=="boolean"&&(o.event.cancelBubble=!0);},get returnValue(){return !W$1(this).canceled},set returnValue(i){i||Pi(W$1(this));},initEvent(){}},Object.defineProperty(ht.prototype,"constructor",{value:ht,configurable:!0,writable:!0});function vi(i){return {get(){return W$1(this).event[i]},set(o){W$1(this).event[i]=o;},configurable:!0,enumerable:!0}}n(vi,"defineRedirectDescriptor");function gl(i){return {value(){const o=W$1(this).event;return o[i].apply(o,arguments)},configurable:!0,enumerable:!0}}n(gl,"defineCallDescriptor");function _l(i,o){const a=Object.keys(o);if(a.length===0)return i;function u(l,p){i.call(this,l,p);}n(u,"CustomEvent"),u.prototype=Object.create(i.prototype,{constructor:{value:u,configurable:!0,writable:!0}});for(let l=0;l<a.length;++l){const p=a[l];if(!(p in i.prototype)){const g=typeof Object.getOwnPropertyDescriptor(o,p).value=="function";Object.defineProperty(u.prototype,p,g?gl(p):vi(p));}}return u}n(_l,"defineWrapper");function Ei(i){if(i==null||i===Object.prototype)return ht;let o=Dn.get(i);return o==null&&(o=_l(Ei(Object.getPrototypeOf(i)),i),Dn.set(i,o)),o}n(Ei,"getWrapper");function Sl(i,o){const a=Ei(Object.getPrototypeOf(o));return new a(i,o)}n(Sl,"wrapEvent");function wl(i){return W$1(i).immediateStopped}n(wl,"isStopped");function Rl(i,o){W$1(i).eventPhase=o;}n(Rl,"setEventPhase");function Tl(i,o){W$1(i).currentTarget=o;}n(Tl,"setCurrentTarget");function Ai(i,o){W$1(i).passiveListener=o;}n(Ai,"setPassiveListener");const Bi=new WeakMap,ki=1,Wi=2,wr=3;function Rr(i){return i!==null&&typeof i=="object"}n(Rr,"isObject");function Bt(i){const o=Bi.get(i);if(o==null)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return o}n(Bt,"getListeners");function Cl(i){return {get(){let a=Bt(this).get(i);for(;a!=null;){if(a.listenerType===wr)return a.listener;a=a.next;}return null},set(o){typeof o!="function"&&!Rr(o)&&(o=null);const a=Bt(this);let u=null,l=a.get(i);for(;l!=null;)l.listenerType===wr?u!==null?u.next=l.next:l.next!==null?a.set(i,l.next):a.delete(i):u=l,l=l.next;if(o!==null){const p={listener:o,listenerType:wr,passive:!1,once:!1,next:null};u===null?a.set(i,p):u.next=p;}},configurable:!0,enumerable:!0}}n(Cl,"defineEventAttributeDescriptor");function qi(i,o){Object.defineProperty(i,`on${o}`,Cl(o));}n(qi,"defineEventAttribute");function Oi(i){function o(){Pe.call(this);}n(o,"CustomEventTarget"),o.prototype=Object.create(Pe.prototype,{constructor:{value:o,configurable:!0,writable:!0}});for(let a=0;a<i.length;++a)qi(o.prototype,i[a]);return o}n(Oi,"defineCustomEventTarget");function Pe(){if(this instanceof Pe){Bi.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0]))return Oi(arguments[0]);if(arguments.length>0){const i=new Array(arguments.length);for(let o=0;o<arguments.length;++o)i[o]=arguments[o];return Oi(i)}throw new TypeError("Cannot call a class as a function")}n(Pe,"EventTarget"),Pe.prototype={addEventListener(i,o,a){if(o==null)return;if(typeof o!="function"&&!Rr(o))throw new TypeError("'listener' should be a function or an object.");const u=Bt(this),l=Rr(a),h=(l?!!a.capture:!!a)?ki:Wi,g={listener:o,listenerType:h,passive:l&&!!a.passive,once:l&&!!a.once,next:null};let A=u.get(i);if(A===void 0){u.set(i,g);return}let w=null;for(;A!=null;){if(A.listener===o&&A.listenerType===h)return;w=A,A=A.next;}w.next=g;},removeEventListener(i,o,a){if(o==null)return;const u=Bt(this),p=(Rr(a)?!!a.capture:!!a)?ki:Wi;let h=null,g=u.get(i);for(;g!=null;){if(g.listener===o&&g.listenerType===p){h!==null?h.next=g.next:g.next!==null?u.set(i,g.next):u.delete(i);return}h=g,g=g.next;}},dispatchEvent(i){if(i==null||typeof i.type!="string")throw new TypeError('"event.type" should be a string.');const o=Bt(this),a=i.type;let u=o.get(a);if(u==null)return !0;const l=Sl(this,i);let p=null;for(;u!=null;){if(u.once?p!==null?p.next=u.next:u.next!==null?o.set(a,u.next):o.delete(a):p=u,Ai(l,u.passive?u.listener:null),typeof u.listener=="function")try{u.listener.call(this,l);}catch(h){typeof console<"u"&&typeof console.error=="function"&&console.error(h);}else u.listenerType!==wr&&typeof u.listener.handleEvent=="function"&&u.listener.handleEvent(l);if(wl(l))break;u=u.next;}return Ai(l,null),Rl(l,0),Tl(l,null),!l.defaultPrevented}},Object.defineProperty(Pe.prototype,"constructor",{value:Pe,configurable:!0,writable:!0});const Vn=class Vn extends Pe{constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){const o=Tr.get(this);if(typeof o!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return o}};n(Vn,"AbortSignal");let pt=Vn;qi(pt.prototype,"abort");function Pl(){const i=Object.create(pt.prototype);return Pe.call(i),Tr.set(i,!1),i}n(Pl,"createAbortSignal");function vl(i){Tr.get(i)===!1&&(Tr.set(i,!0),i.dispatchEvent({type:"abort"}));}n(vl,"abortSignal");const Tr=new WeakMap;Object.defineProperties(pt.prototype,{aborted:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(pt.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});let Mn=(It=class{constructor(){zi.set(this,Pl());}get signal(){return Ii(this)}abort(){vl(Ii(this));}},n(It,"AbortController"),It);const zi=new WeakMap;function Ii(i){const o=zi.get(i);if(o==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${i===null?"null":typeof i}`);return o}n(Ii,"getSignal"),Object.defineProperties(Mn.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Mn.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"});var El=Object.defineProperty,Al=n((i,o)=>El(i,"name",{value:o,configurable:!0}),"e");const Fi=Ti;ji();function ji(){!globalThis.process?.versions?.node&&!globalThis.process?.env.DISABLE_NODE_FETCH_NATIVE_WARN&&console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");}n(ji,"s"),Al(ji,"checkNodeEnvironment");

var i=Object.defineProperty;var e=(r,t)=>i(r,"name",{value:t,configurable:!0});var c=Object.defineProperty,h=e((r,t)=>c(r,"name",{value:t,configurable:!0}),"a");function o$1(r,t){if(!(r in globalThis))try{globalThis[r]=t;}catch{}}e(o$1,"e"),h(o$1,"polyfill"),o$1("fetch",Fi),o$1("Blob",ut),o$1("File",On),o$1("FormData",br),o$1("Headers",ye),o$1("Request",dt),o$1("Response",le),o$1("AbortController",Mn);

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery$1(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}
function joinRelativeURL(..._input) {
  const JOIN_SEGMENT_SPLIT_RE = /\/(?!\/)/;
  const input = _input.filter(Boolean);
  const segments = [];
  let segmentsDepth = 0;
  for (const i of input) {
    if (!i || i === "/") {
      continue;
    }
    for (const [sindex, s] of i.split(JOIN_SEGMENT_SPLIT_RE).entries()) {
      if (!s || s === ".") {
        continue;
      }
      if (s === "..") {
        if (segments.length === 1 && hasProtocol(segments[0])) {
          continue;
        }
        segments.pop();
        segmentsDepth--;
        continue;
      }
      if (sindex === 1 && segments[segments.length - 1]?.endsWith(":/")) {
        segments[segments.length - 1] += "/" + s;
        continue;
      }
      segments.push(s);
      segmentsDepth++;
    }
  }
  let url = segments.join("/");
  if (segmentsDepth >= 0) {
    if (input[0]?.startsWith("/") && !url.startsWith("/")) {
      url = "/" + url;
    } else if (input[0]?.startsWith("./") && !url.startsWith("./")) {
      url = "./" + url;
    }
  } else {
    url = "../".repeat(-1 * segmentsDepth) + url;
  }
  if (input[input.length - 1]?.endsWith("/") && !url.endsWith("/")) {
    url += "/";
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  const [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  const { pathname, search, hash } = parsePath(
    path.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._data = new WordArray();
    this._nDataBytes = 0;
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

const H = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    this._hash = new WordArray([...H]);
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K[i] + W[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}

function getQuery(event) {
  return getQuery$1(event.path || "");
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(name, value);
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  const response = await _getFetch(opts.fetch)(target, {
    headers: opts.headers,
    ignoreResponseError: true,
    // make $ofetch.raw transparent
    ...opts.fetchOptions
  });
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. **/
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. **/
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const { pathname } = parseURL(info.url || "/");
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      await sendError(event, error, !!app.options.debug);
    }
  };
  return toNodeHandle;
}

var a=Object.defineProperty;var t=(e,r)=>a(e,"name",{value:r,configurable:!0});var f=Object.defineProperty,g=t((e,r)=>f(e,"name",{value:r,configurable:!0}),"e");const o=!!globalThis.process?.env?.FORCE_NODE_FETCH;function l(){return !o&&globalThis.fetch?globalThis.fetch:Fi}t(l,"p"),g(l,"_getFetch");const s=l(),d=!o&&globalThis.Headers||ye,A=!o&&globalThis.AbortController||Mn;

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function mergeFetchOptions(input, defaults, Headers = globalThis.Headers) {
  const merged = {
    ...defaults,
    ...input
  };
  if (defaults?.params && input?.params) {
    merged.params = {
      ...defaults?.params,
      ...input?.params
    };
  }
  if (defaults?.query && input?.query) {
    merged.query = {
      ...defaults?.query,
      ...input?.query
    };
  }
  if (defaults?.headers && input?.headers) {
    merged.headers = new Headers(defaults?.headers || {});
    for (const [key, value] of new Headers(input?.headers || {})) {
      merged.headers.set(key, value);
    }
  }
  return merged;
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: mergeFetchOptions(_options, globalOptions.defaults, Headers),
      response: void 0,
      error: void 0
    };
    context.options.method = context.options.method?.toUpperCase();
    if (context.options.onRequest) {
      await context.options.onRequest(context);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query || context.options.params) {
        context.request = withQuery(context.request, {
          ...context.options.params,
          ...context.options.query
        });
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(
        () => controller.abort(),
        context.options.timeout
      );
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await context.options.onRequestError(context);
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = context.response.body && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await context.options.onResponse(context);
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await context.options.onResponseError(context);
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}) => createFetch$1({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return s;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new vt.Agent(agentOptions);
  const httpsAgent = new Bs.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return s(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch || createNodeFetch();
const Headers$1 = globalThis.Headers || d;
const AbortController$1 = globalThis.AbortController || A;
createFetch$1({ fetch, Headers: Headers$1, AbortController: AbortController$1 });

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner ) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {
  "nuxt": {
    "buildId": "f035bcba-9128-46e6-9a47-d3d4990947f8"
  }
};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_fonts/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys = rawKeys.map((key) => mount.mountpoint + normalizeKey$1(key)).filter((key) => !maskedMounts.some((p) => key.startsWith(p)));
        allKeys.push(...keys);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    }
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises$1.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises$1.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises$1.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises$1.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises$1.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises$1.rmdir(entryPath));
      } else {
        return promises$1.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.\:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises$1.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/home/jody/workspace/tmp/nuxt-cube-boilerplate/apps/kitchen-sink/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery$1(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('./_/error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/_nuxt/8Cd5GAZF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"180-DKCo6xeV1JJfCVhRucBzuVA8rUk\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 384,
    "path": "../public/_nuxt/8Cd5GAZF.js"
  },
  "/_nuxt/BjNMd1dP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ecd6-eqtVCmoPxrt+aB1REfCAXhAQJ4c\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 126166,
    "path": "../public/_nuxt/BjNMd1dP.js"
  },
  "/_nuxt/DWpTdnoc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cee-vKf1Q7kgyjuDw7dkWvayxKBFBKo\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 7406,
    "path": "../public/_nuxt/DWpTdnoc.js"
  },
  "/_nuxt/DZsMeTPP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ace-LEjyTtPoAtnwv9cdfMiTWtVsdog\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 2766,
    "path": "../public/_nuxt/DZsMeTPP.js"
  },
  "/_nuxt/entry.CYrMGpFv.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"6856-IMwQ5cLLvnSWuuLdQCghyDeRB8s\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 26710,
    "path": "../public/_nuxt/entry.CYrMGpFv.css"
  },
  "/_nuxt/error-404.BIzBJQeK.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"de4-NRToEZKhiUGofUjdotv/plWYsp0\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 3556,
    "path": "../public/_nuxt/error-404.BIzBJQeK.css"
  },
  "/_nuxt/error-500.CoWjIC1p.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75c-364bMWw337BMJqpRtO6FE288Vfo\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 1884,
    "path": "../public/_nuxt/error-500.CoWjIC1p.css"
  },
  "/_nuxt/inter-cyrillic-ext-wght-normal.DIEz8p5i.woff2": {
    "type": "font/woff2",
    "etag": "\"6a94-p7ZBseVEPLFzwr2bLKPEBds+s3Y\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 27284,
    "path": "../public/_nuxt/inter-cyrillic-ext-wght-normal.DIEz8p5i.woff2"
  },
  "/_nuxt/inter-cyrillic-wght-normal.BmJJXa8e.woff2": {
    "type": "font/woff2",
    "etag": "\"44c0-Jt/1moqAs9SnNh30zblI3A4YOnk\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 17600,
    "path": "../public/_nuxt/inter-cyrillic-wght-normal.BmJJXa8e.woff2"
  },
  "/_nuxt/inter-greek-ext-wght-normal.D5AYLNiq.woff2": {
    "type": "font/woff2",
    "etag": "\"31bc-SyzyE2bnRK/a6w+Slw669+p1mHg\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 12732,
    "path": "../public/_nuxt/inter-greek-ext-wght-normal.D5AYLNiq.woff2"
  },
  "/_nuxt/inter-greek-wght-normal.DyIDNIyN.woff2": {
    "type": "font/woff2",
    "etag": "\"57d0-YJqZ3TJ+G4oaD17iIJ9w4JzoLMg\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 22480,
    "path": "../public/_nuxt/inter-greek-wght-normal.DyIDNIyN.woff2"
  },
  "/_nuxt/inter-latin-ext-wght-normal.CN1pIXkb.woff2": {
    "type": "font/woff2",
    "etag": "\"13844-NO6dhCwNDkYyWuYI/NdZKeeycmk\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 79940,
    "path": "../public/_nuxt/inter-latin-ext-wght-normal.CN1pIXkb.woff2"
  },
  "/_nuxt/inter-latin-wght-normal.BgVq2Tq4.woff2": {
    "type": "font/woff2",
    "etag": "\"b670-OTMRveJrmaStk1+lW60dznmUOIs\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 46704,
    "path": "../public/_nuxt/inter-latin-wght-normal.BgVq2Tq4.woff2"
  },
  "/_nuxt/inter-vietnamese-wght-normal._GQuwPVU.woff2": {
    "type": "font/woff2",
    "etag": "\"292c-Y8sHnyFc8scLABqcKYLA+rVGWkA\"",
    "mtime": "2024-05-23T14:33:47.762Z",
    "size": 10540,
    "path": "../public/_nuxt/inter-vietnamese-wght-normal._GQuwPVU.woff2"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-0xnpf1MxD4SXCASOZmqpMooGr90\"",
    "mtime": "2024-05-23T14:33:47.752Z",
    "size": 71,
    "path": "../public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/f035bcba-9128-46e6-9a47-d3d4990947f8.json": {
    "type": "application/json",
    "etag": "\"8b-qA0IdNOugr7V1YcRDX/og3sBMW8\"",
    "mtime": "2024-05-23T14:33:47.744Z",
    "size": 139,
    "path": "../public/_nuxt/builds/meta/f035bcba-9128-46e6-9a47-d3d4990947f8.json"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta":{"maxAge":31536000},"/_nuxt/builds":{"maxAge":1},"/_fonts":{"maxAge":31536000},"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_Ww3zSD = () => import('./routes/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_Ww3zSD, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_Ww3zSD, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((err) => {
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof vt.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
  }
  server.on("request", function(req, res) {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", function() {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", function(socket) {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", function() {
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    if (options.development) {
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((err) => {
      const errString = typeof err === "string" ? err : JSON.stringify(err);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { On as O, send as a, br as b, setResponseStatus as c, setResponseHeaders as d, eventHandler as e, useRuntimeConfig as f, getResponseStatus as g, getQuery as h, createError$1 as i, joinRelativeURL as j, getRouteRules as k, getResponseStatusText as l, sanitizeStatusCode as m, createHooks as n, createRouter$1 as o, nodeServer as p, setResponseHeader as s, toRouteMatcher as t, useNitroApp as u };
//# sourceMappingURL=runtime.mjs.map
