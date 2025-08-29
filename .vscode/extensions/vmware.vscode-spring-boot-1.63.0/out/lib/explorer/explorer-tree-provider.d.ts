import { Event, ProviderResult, TreeDataProvider, TreeItem } from "vscode";
import { StructureManager } from "./structure-tree-manager";
import { SpringNode } from "./nodes";
export declare class ExplorerTreeProvider implements TreeDataProvider<SpringNode> {
    private manager;
    private emitter;
    readonly onDidChangeTreeData: Event<undefined | SpringNode | SpringNode[]>;
    constructor(manager: StructureManager);
    getTreeItem(element: SpringNode): TreeItem | Thenable<TreeItem>;
    getChildren(element?: SpringNode): ProviderResult<SpringNode[]>;
    getRootElements(): ProviderResult<SpringNode[]>;
}
