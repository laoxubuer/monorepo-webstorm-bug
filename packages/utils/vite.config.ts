/**
 * Created by xuliang on 2021/11/12
 */
import { viteConfig } from '../../scripts/viteConfig';
import pkg from './package.json';

export default viteConfig('TurboproUtils', 'turbopro-utils', pkg.dependencies);
