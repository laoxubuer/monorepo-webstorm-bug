/**
 * Created by xuliang on 2021/11/15
 */
import path from 'path';
import {
  ConfigEnv,
  defineConfig,
  LibraryOptions,
  UserConfig,
  UserConfigExport,
  UserConfigFn,
} from 'vite';
import deepmerge from 'deepmerge';

/**
 * vite.config.ts 通用配置
 * todo: 支持多input
 * @param name
 * @param fileName
 * @param deps 外部依赖项，配置在external
 * @param config
 */
export function viteConfig(
  name: LibraryOptions['name'],
  fileName: string,
  deps?: string[] | Record<string, string>,
  config?: UserConfigExport,
) {
  const baseConf: UserConfig = {
    build: {
      lib: {
        entry: path.resolve(process.cwd(), 'src/index.ts'),
        formats: ['es', 'umd'],
        name,
        fileName: (format) => `${fileName}.${format}.js`,
      },
      outDir: './dist',
      rollupOptions: {
        external: Array.isArray(deps) ? deps : Object.keys(deps ?? {}),
      },
    },
  };
  if (!config) {
    return baseConf;
  }
  // typeof UserConfig
  if (typeof config === 'object') {
    return defineConfig(deepmerge(baseConf, config as UserConfig));
  }
  // typeof Promise<UserConfig>
  if (config instanceof Promise) {
    return defineConfig(
      (config as Promise<UserConfig>).then((conf) => {
        return deepmerge(baseConf, conf);
      }),
    );
  }
  // typeof UserConfigFn
  return (env: ConfigEnv) => {
    const conf = (config as UserConfigFn)(env);
    if (conf instanceof Promise) {
      return defineConfig(
        (conf as Promise<UserConfig>).then((conf) => {
          return deepmerge(baseConf, conf);
        }),
      );
    }
    return defineConfig(deepmerge(baseConf, conf));
  };
}
