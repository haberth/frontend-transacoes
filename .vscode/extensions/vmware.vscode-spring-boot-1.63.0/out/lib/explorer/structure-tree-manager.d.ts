import { Event } from "vscode";
import { SpringNode } from "./nodes";
export declare class StructureManager {
    private _rootElements;
    private _onDidChange;
    get rootElements(): Thenable<SpringNode[]>;
    refresh(): void;
    private parseNode;
    private parseArray;
    get onDidChange(): Event<SpringNode | undefined>;
}
