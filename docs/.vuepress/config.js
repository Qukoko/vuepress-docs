import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  lang: 'zh-CN',

  title: '文档门户',
  description: '所有文档的入口',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/vuepress'],
    repo: 'https://github.com/Qukoko/vuepress-docs.git'
  }),
  port: 1234,

  bundler: webpackBundler(),
})
