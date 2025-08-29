"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeanNode = exports.WebfluxRoutesNode = exports.RequestMappingNode = exports.QueryMethodNode = exports.EventPublisherNode = exports.EventListenerNode = exports.ConfigPropertyNode = exports.BeanRegistrarNode = exports.BeanMethodContainerNode = exports.AotProcessorNode = exports.DocumentNode = exports.ProjectNode = exports.SpringNode = void 0;
const vscode_1 = require("vscode");
class SpringNode {
    constructor(children) {
        this.children = children;
    }
    getTreeItem() {
        return new vscode_1.TreeItem("<node>", this.computeState(vscode_1.TreeItemCollapsibleState.Expanded));
    }
    computeState(defaultState) {
        return Array.isArray(this.children) && this.children.length ? defaultState : vscode_1.TreeItemCollapsibleState.None;
    }
}
exports.SpringNode = SpringNode;
class ProjectNode extends SpringNode {
    constructor(name, children) {
        super(children);
        this.name = name;
    }
    getTreeItem() {
        const item = super.getTreeItem();
        item.label = this.name;
        return item;
    }
}
exports.ProjectNode = ProjectNode;
class DocumentNode extends SpringNode {
    constructor(docURI, children) {
        super(children);
        this.docURI = docURI;
    }
    getTreeItem() {
        const item = super.getTreeItem();
        item.label = undefined; // let VSCode derive the label from the resource URI
        item.resourceUri = this.docURI;
        item.iconPath = vscode_1.ThemeIcon.File;
        return item;
    }
}
exports.DocumentNode = DocumentNode;
class AotProcessorNode extends SpringNode {
    constructor(children, type, docUri) {
        super(children);
        this.type = type;
        this.docUri = docUri;
    }
    getTreeItem() {
        const item = super.getTreeItem();
        item.label = this.type;
        item.resourceUri = this.docUri;
        return item;
    }
}
exports.AotProcessorNode = AotProcessorNode;
class BeanMethodContainerNode extends SpringNode {
    constructor(children, type, location) {
        super(children);
        this.type = type;
        this.location = location;
    }
    getTreeItem() {
        const item = super.getTreeItem();
        item.label = this.type;
        return item;
    }
}
exports.BeanMethodContainerNode = BeanMethodContainerNode;
class BeanRegistrarNode extends SpringNode {
    constructor(children, name, type, location) {
        super(children);
        this.name = name;
        this.type = type;
        this.location = location;
    }
    getTreeItem() {
        const item = super.getTreeItem();
        item.label = this.name;
        return item;
    }
}
exports.BeanRegistrarNode = BeanRegistrarNode;
class ConfigPropertyNode extends SpringNode {
    constructor(children, name, type, range) {
        super(children);
        this.name = name;
        this.type = type;
        this.range = range;
    }
    getTreeItem() {
        const item = super.getTreeItem();
        item.label = this.name;
        return item;
    }
}
exports.ConfigPropertyNode = ConfigPropertyNode;
class EventListenerNode extends SpringNode {
    constructor(children, eventType, location, containerBeanType, annotations) {
        super(children);
        this.eventType = eventType;
        this.location = location;
        this.containerBeanType = containerBeanType;
        this.annotations = annotations;
    }
    getTreeItem() {
        const item = super.getTreeItem();
        item.label = this.eventType;
        return item;
    }
}
exports.EventListenerNode = EventListenerNode;
class EventPublisherNode extends SpringNode {
    constructor(children, eventType, location, eventTypesFromHierarchy) {
        super(children);
        this.eventType = eventType;
        this.location = location;
        this.eventTypesFromHierarchy = eventTypesFromHierarchy;
    }
    getTreeItem() {
        const item = super.getTreeItem();
        item.label = this.eventType;
        return item;
    }
}
exports.EventPublisherNode = EventPublisherNode;
class QueryMethodNode extends SpringNode {
    constructor(children, methodName, queryString, range) {
        super(children);
        this.methodName = methodName;
        this.queryString = queryString;
        this.range = range;
    }
    getTreeItem() {
        const item = super.getTreeItem();
        item.label = this.methodName;
        return item;
    }
}
exports.QueryMethodNode = QueryMethodNode;
class RequestMappingNode extends SpringNode {
    constructor(children, path, httpMethods, contentTypes, acceptTypes, symbolLabel, range) {
        super(children);
        this.path = path;
        this.httpMethods = httpMethods;
        this.contentTypes = contentTypes;
        this.acceptTypes = acceptTypes;
        this.symbolLabel = symbolLabel;
        this.range = range;
    }
    getTreeItem() {
        const item = super.getTreeItem();
        item.label = this.path;
        return item;
    }
}
exports.RequestMappingNode = RequestMappingNode;
class WebfluxRoutesNode extends RequestMappingNode {
    constructor(children, path, httpMethods, contentTypes, acceptTypes, symbolLabel, range, ranges) {
        super(children, path, httpMethods, contentTypes, acceptTypes, symbolLabel, range);
        this.ranges = ranges;
    }
}
exports.WebfluxRoutesNode = WebfluxRoutesNode;
class BeanNode extends SpringNode {
    constructor(children, name, type, location, injectionPoints, supertypes, annotations, isConfiguration, symbolLabel) {
        super(children);
        this.name = name;
        this.type = type;
        this.location = location;
        this.injectionPoints = injectionPoints;
        this.supertypes = supertypes;
        this.annotations = annotations;
        this.isConfiguration = isConfiguration;
        this.symbolLabel = symbolLabel;
    }
    getTreeItem() {
        const item = super.getTreeItem();
        item.label = this.name;
        return item;
    }
}
exports.BeanNode = BeanNode;
//# sourceMappingURL=nodes.js.map