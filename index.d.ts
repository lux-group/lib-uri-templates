interface IExpandFunc {
    (query: string): string;
}
interface ITemplate {
    readonly rfc6570: string;
    readonly expand: IExpandFunc;
}
interface IListItem {
    href: string;
    templated: boolean;
}
export declare function get(name: string): ITemplate;
export declare function mock(rfc6570: string): ITemplate;
export declare function list(): IListItem[];
export {};
