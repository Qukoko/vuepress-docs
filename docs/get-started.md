# VuePress使用文档

## 创建项目 [创建文档地址]
使用命令行创建

pnpm create vuepress vuepress-starter

yarn create vuepress vuepress-starter

npm init vuepress vuepress-starter

⚠️：如果使用某个包管理器创建项目时，可能会出现运行成功但页面打开空白页的问题，此时可切换多种命令行创建尝试


## 配置文件
支持多个配置文件，支持ts配置文件

对于配置文件的路径有着约定（按照优先顺序）：

当前工作目录 cwd 下(需要加vuepress.)：

vuepress.config.ts

vuepress.config.js

vuepress.config.mjs

源文件目录 sourceDir 下：

.vuepress/config.ts

.vuepress/config.js

.vuepress/config.mjs

也可以通过命令行指定使用配置文件
vuepress docs dev --config my-config.js

基础的配置文件如下：

import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
bundler: viteBundler(),
theme: defaultTheme(),

lang: 'zh-CN',
title: '你好， VuePress ！',
description: '这是我的第一个 VuePress 站点',
})

[配置参数地址][]

# Get Started

This is a normal page, which contains VuePress basics.

## Pages

You can add markdown files in your vuepress directory, every markdown file will be converted to a page in your site.

See [routing][] for more details.

## Content

Every markdown file [will be rendered to HTML, then converted to a Vue SFC][content].

VuePress support basic markdown syntax and [some extensions][synatex-extensions], you can also [use Vue features][vue-feature] in it.

## Configuration

VuePress use a `.vuepress/config.js`(or .ts) file as [site configuration][config], you can use it to config your site.

For [client side configuration][client-config], you can create `.vuepress/client.js`(or .ts).

Meanwhile, you can also add configuration per page with [frontmatter][].

## Layouts and customization

Here are common configuration controlling layout of `@vuepress/theme-default`:

- [navbar][]
- [sidebar][]

Check [default theme docs][default-theme] for full reference.

You can [add extra style][style] with `.vuepress/styles/index.scss` file.

[routing]: https://vuejs.press/guide/page.html#routing
[content]: https://vuejs.press/guide/page.html#content
[synatex-extensions]: https://vuejs.press/guide/markdown.html#syntax-extensions
[vue-feature]: https://vuejs.press/guide/markdown.html#using-vue-in-markdown
[config]: https://vuejs.press/guide/configuration.html#client-config-file
[client-config]: https://vuejs.press/guide/configuration.html#client-config-file
[frontmatter]: https://vuejs.press/guide/page.html#frontmatter
[navbar]: https://vuejs.press/reference/default-theme/config.html#navbar
[sidebar]: https://vuejs.press/reference/default-theme/config.html#sidebar
[default-theme]: https://vuejs.press/reference/default-theme/
[style]: https://vuejs.press/reference/default-theme/styles.html#style-file

[创建文档地址]: https://vuepress.vuejs.org/zh/guide/getting-started.html#%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE
[配置参数地址]: https://vuepress.vuejs.org/zh/reference/config.html
