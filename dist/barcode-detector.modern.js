import*as e from"@zxing/library";function t(e,t,a){const r=document.createElement("canvas"),n=r.getContext("2d");return r.width=t,r.height=a,n.drawImage(e,0,0,t,a),n.getImageData(0,0,t,a)}async function a(e){if(e instanceof HTMLImageElement){try{e.decode()}catch(e){throw new DOMException("HTMLImageElement is not decodable","InvalidStateError")}return t(e,e.naturalWidth,e.naturalHeight)}if(e instanceof SVGImageElement)return t(e,640,480);if(e instanceof HTMLVideoElement){const a=1;if(0===e.readyState||e.readyState===a)throw new DOMException("","InvalidStateError");return t(e,e.videoWidth,e.videoHeight)}return e instanceof HTMLCanvasElement?e.getContext("2d").getImageData(0,0,e.width,e.height):"ImageBitmap"in window&&e instanceof ImageBitmap?t(e,e.width,e.height):"OffscreenCanvas"in window&&e instanceof OffscreenCanvas?e.getContext("2d").getImageData(0,0,e.width,e.height):e instanceof Blob?async function(e){const t=URL.createObjectURL(e),r=new Image;return r.src=t,await new Promise((e,t)=>{r.onload=e,r.onerror=t}),URL.revokeObjectURL(t),a(r)}(e):e instanceof ImageData?e:void 0}const r=new Map([["aztec",e.BarcodeFormat.AZTEC],["code_39",e.BarcodeFormat.CODE_39],["code_128",e.BarcodeFormat.CODE_128],["data_matrix",e.BarcodeFormat.DATA_MATRIX],["ean_8",e.BarcodeFormat.EAN_8],["ean_13",e.BarcodeFormat.EAN_13],["itf",e.BarcodeFormat.ITF],["pdf417",e.BarcodeFormat.PDF_417],["qr_code",e.BarcodeFormat.QR_CODE],["upc_a",e.BarcodeFormat.UPC_A],["upc_e",e.BarcodeFormat.UPC_E]]),n=new Map(Array.from(r).map(([e,t])=>[t,e])),o=Array.from(r.keys()),i=e=>{const t=n.get(e.getBarcodeFormat()),a=e.getText(),r=Object.freeze(e.getResultPoints().map(e=>({x:e.getX(),y:e.getY()}))),o=r.map(e=>e.x),i=r.map(e=>e.y),c=Math.min(...o),d=Math.max(...o),m=Math.min(...i),s=Math.max(...i);return{format:t,rawValue:a,cornerPoints:r,boundingBox:DOMRectReadOnly.fromRect({x:c,y:m,width:d-c,height:s-m})}};export default class{constructor(t){var a;this.reader=void 0;const n=null!=(a=null==t?void 0:t.formats)?a:o;if(0===n.length)throw new TypeError("");if(n.includes("unknown"))throw new TypeError("");const i=new Map([[e.DecodeHintType.POSSIBLE_FORMATS,n.map(e=>r.get(e))]]);this.reader=new e.MultiFormatReader,this.reader.setHints(i)}static async getSupportedFormats(){return o}async detect(t){const r=await a(t),n=document.createElement("canvas"),o=n.getContext("2d");n.width=r.width,n.height=r.height,o.putImageData(r,0,0);try{const t=new e.HTMLCanvasElementLuminanceSource(n),a=new e.BinaryBitmap(new e.HybridBinarizer(t)),r=this.reader.decode(a);return[i(r)]}catch(e){return console.error(e),[]}}}
//# sourceMappingURL=barcode-detector.modern.js.map
