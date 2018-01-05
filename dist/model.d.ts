export declare function json(key: string): any;
export declare abstract class Model {
    changes: Object;
    response: Object;
    constructor(response?: Object);
    readonly isChanged: boolean;
    clear(): void;
    save(): void;
}
