import type { PluginAPI as OriginalPluginAPI } from "tailwindcss/types/config";

declare module "tailwindcss/types/config" {
  export interface PluginAPI extends OriginalPluginAPI {
    var: (name: string) => CSSRuleObject;
    vars: (...names: Array<string>) => Array<CSSRuleObject>;
    helper: (name: string) => string;
  }
}
