export declare class CodeDecode {
    encode(pass: string): Promise<string>;
    decode(requestPass: string, userPassDb: string): Promise<boolean>;
}
