declare module "bpmn-js" {
  export default class BpmnJS {
    constructor(param?: { container: string | null });
    destroy(): void;
    importXML(xml: string): Promise<void>;
    on: any;
    get: any;
  }
}
