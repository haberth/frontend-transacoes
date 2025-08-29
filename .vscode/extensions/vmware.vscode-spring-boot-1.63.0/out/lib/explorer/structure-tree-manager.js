"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StructureManager = void 0;
const vscode_1 = require("vscode");
const nodes_1 = require("./nodes");
const SPRING_STRUCTURE_CMD = "sts/spring-boot/structure";
class StructureManager {
    constructor() {
        this._onDidChange = new vscode_1.EventEmitter();
    }
    get rootElements() {
        return this._rootElements;
    }
    refresh() {
        this._rootElements = vscode_1.commands.executeCommand(SPRING_STRUCTURE_CMD).then(json => {
            const nodes = this.parseArray(json);
            this._onDidChange.fire(undefined);
            return nodes;
        });
    }
    parseNode(json) {
        if (typeof (json._internal_node_type) === 'string') {
            switch (json._internal_node_type) {
                case "org.springframework.ide.vscode.commons.protocol.spring.ProjectElement":
                    return new nodes_1.ProjectNode(json.projectName, this.parseArray(json.children));
                case "org.springframework.ide.vscode.commons.protocol.spring.DocumentElement":
                    return new nodes_1.DocumentNode(vscode_1.Uri.parse(json.docURI), this.parseArray(json.children));
                case "org.springframework.ide.vscode.commons.protocol.spring.Bean":
                    return new nodes_1.BeanNode(this.parseArray(json.children), json.name, json.type, json.location, json.injectionPoints, json.supertypes, json.annotations, json.isConfiguration, json.symbolLabel);
                case "org.springframework.ide.vscode.commons.protocol.spring.AotProcessorElement":
                    return new nodes_1.AotProcessorNode(this.parseArray(json.children), json.name, vscode_1.Uri.parse(json.docUri));
                case "org.springframework.ide.vscode.commons.protocol.spring.BeanMethodContainerElement":
                    return new nodes_1.BeanMethodContainerNode(this.parseArray(json.children), json.type, json.location);
                case "org.springframework.ide.vscode.commons.protocol.spring.BeanRegistrarElement":
                    return new nodes_1.BeanRegistrarNode(this.parseArray(json.children), json.name, json.type, json.location);
                case "org.springframework.ide.vscode.boot.java.beans.ConfigPropertyIndexElement":
                    return new nodes_1.ConfigPropertyNode(this.parseArray(json.children), json.name, json.type, json.range);
                case "org.springframework.ide.vscode.boot.java.events.EventListenerIndexElement":
                    return new nodes_1.EventListenerNode(this.parseArray(json.children), json.eventType, json.location, json.containerBeanType, json.annotations);
                case "org.springframework.ide.vscode.boot.java.events.EventPublisherIndexElement":
                    return new nodes_1.EventPublisherNode(this.parseArray(json.children), json.eventType, json.location, json.eventTypesFromHierarchy);
                case "org.springframework.ide.vscode.boot.java.data.QueryMethodIndexElement":
                    return new nodes_1.QueryMethodNode(this.parseArray(json.children), json.methodName, json.queryString, json.range);
                case "org.springframework.ide.vscode.boot.java.requestmapping.RequestMappingIndexElement":
                    return new nodes_1.RequestMappingNode(this.parseArray(json.children), json.path, json.httpMethods, json.contentTypes, json.acceptTypes, json.symbolLabel, json.range);
                case "org.springframework.ide.vscode.boot.java.requestmapping.WebfluxRouteElementRangesIndexElement":
                    return new nodes_1.WebfluxRoutesNode(this.parseArray(json.children), json.path, json.httpMethods, json.contentTypes, json.acceptTypes, json.symbolLabel, json.range, json.ranges);
            }
        }
    }
    parseArray(json) {
        return Array.isArray(json) ? json.map(j => this.parseNode(j)).filter(e => !!e) : [];
    }
    get onDidChange() {
        return this._onDidChange.event;
    }
}
exports.StructureManager = StructureManager;
//# sourceMappingURL=structure-tree-manager.js.map