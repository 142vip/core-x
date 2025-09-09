import {EggPluginInstance} from "@142vip/egg";

export {};

declare module 'egg' {
  interface Application {
    axios: EggPluginInstance<any>;
  }

  interface Agent {
    axios: EggPluginInstance<any>;
  }
}

// 扩展 egg-mock 的 MockApplication 类型
declare module 'egg-mock' {
  interface MockApplication {
    axios: EggPluginInstance<any>;
  }

  interface MockAgent {
    axios: EggPluginInstance<any>;
  }
}
