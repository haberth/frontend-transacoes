import { TreeItem, TreeItemCollapsibleState, Uri } from "vscode";
import { Location, Range } from "vscode-languageclient";
export declare class SpringNode {
    readonly children: SpringNode[];
    constructor(children: SpringNode[]);
    getTreeItem(): TreeItem;
    computeState(defaultState: TreeItemCollapsibleState.Collapsed | TreeItemCollapsibleState.Expanded): TreeItemCollapsibleState;
}
export declare class ProjectNode extends SpringNode {
    readonly name: string;
    constructor(name: string, children: SpringNode[]);
    getTreeItem(): TreeItem;
}
export declare class DocumentNode extends SpringNode {
    readonly docURI: Uri;
    constructor(docURI: Uri, children: SpringNode[]);
    getTreeItem(): TreeItem;
}
export declare class AotProcessorNode extends SpringNode {
    readonly type: string;
    readonly docUri: Uri;
    constructor(children: SpringNode[], type: string, docUri: Uri);
    getTreeItem(): TreeItem;
}
export declare class BeanMethodContainerNode extends SpringNode {
    readonly type: string;
    readonly location: Location;
    constructor(children: SpringNode[], type: string, location: Location);
    getTreeItem(): TreeItem;
}
export declare class BeanRegistrarNode extends SpringNode {
    readonly name: string;
    readonly type: string;
    readonly location: Location;
    constructor(children: SpringNode[], name: string, type: string, location: Location);
    getTreeItem(): TreeItem;
}
export declare class ConfigPropertyNode extends SpringNode {
    readonly name: string;
    readonly type: string;
    readonly range: Range;
    constructor(children: SpringNode[], name: string, type: string, range: Range);
    getTreeItem(): TreeItem;
}
export declare class EventListenerNode extends SpringNode {
    readonly eventType: string;
    readonly location: Location;
    readonly containerBeanType: string;
    readonly annotations: AnnotationMetadata[];
    constructor(children: SpringNode[], eventType: string, location: Location, containerBeanType: string, annotations: AnnotationMetadata[]);
    getTreeItem(): TreeItem;
}
export declare class EventPublisherNode extends SpringNode {
    readonly eventType: string;
    readonly location: Location;
    readonly eventTypesFromHierarchy: string[];
    constructor(children: SpringNode[], eventType: string, location: Location, eventTypesFromHierarchy: string[]);
    getTreeItem(): TreeItem;
}
export declare class QueryMethodNode extends SpringNode {
    readonly methodName: string;
    readonly queryString: string;
    readonly range: Range;
    constructor(children: SpringNode[], methodName: string, queryString: string, range: Range);
    getTreeItem(): TreeItem;
}
export declare class RequestMappingNode extends SpringNode {
    readonly path: string;
    readonly httpMethods: string[];
    readonly contentTypes: string[];
    readonly acceptTypes: string[];
    readonly symbolLabel: string;
    readonly range: Range;
    constructor(children: SpringNode[], path: string, httpMethods: string[], contentTypes: string[], acceptTypes: string[], symbolLabel: string, range: Range);
    getTreeItem(): TreeItem;
}
export declare class WebfluxRoutesNode extends RequestMappingNode {
    readonly ranges: Range[];
    constructor(children: SpringNode[], path: string, httpMethods: string[], contentTypes: string[], acceptTypes: string[], symbolLabel: string, range: Range, ranges: Range[]);
}
export declare class BeanNode extends SpringNode {
    readonly name: string;
    readonly type: string;
    readonly location: Location;
    readonly injectionPoints: InjectionPoint[];
    readonly supertypes: string[];
    readonly annotations: AnnotationMetadata[];
    readonly isConfiguration: boolean;
    readonly symbolLabel: string;
    constructor(children: SpringNode[], name: string, type: string, location: Location, injectionPoints: InjectionPoint[], supertypes: string[], annotations: AnnotationMetadata[], isConfiguration: boolean, symbolLabel: string);
    getTreeItem(): TreeItem;
}
export interface InjectionPoint {
    readonly name: string;
    readonly type: string;
    readonly location: Location;
    readonly annotations: AnnotationMetadata[];
}
export interface AnnotationMetadata {
    readonly annotationType: string;
    readonly isMetaAnnotation: boolean;
    readonly location: Location;
    readonly attributes: {
        [key: string]: AnnotationAttributeValue[];
    };
}
export interface AnnotationAttributeValue {
    readonly name: string;
    readonly location: Location;
}
