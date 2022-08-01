import { BarcodeDetectorOptions, BarcodeFormat, DetectedBarcode } from "./basic-types";
import * as ZXing from "@zxing/library";
export default class BarcodeDetector {
    reader: ZXing.MultiFormatReader;
    constructor(barcodeDetectorOptions?: BarcodeDetectorOptions);
    static getSupportedFormats(): Promise<BarcodeFormat[]>;
    detect(image: ImageBitmapSource): Promise<DetectedBarcode[]>;
}
