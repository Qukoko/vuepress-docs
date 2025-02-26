# VuePress使用文档

### 创建项目  
[创建文档地址](https://vuepress.vuejs.org/zh/guide/getting-started.html#%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE)  

使用命令行创建  
pnpm create vuepress vuepress-starter   
yarn create vuepress vuepress-starter   
npm init vuepress vuepress-starter

⚠️：如果使用某个包管理器创建项目时，可能会出现运行成功但页面打开空白页的问题，此时可切换多种命令行创建尝试


### 配置文件
支持多个配置文件，支持ts配置文件  
对于配置文件的路径有着约定（按照优先顺序）：  
当前工作目录 cwd 下(需要加vuepress.)：

- vuepress.config.ts  
- vuepress.config.js  
- vuepress.config.mjs

源文件目录 sourceDir 下：

* .vuepress/config.ts  
* .vuepress/config.js  
* .vuepress/config.mjs


也可以通过命令行指定使用配置文件  
vuepress docs dev --config my-config.js

基础的配置文件如下：

```ts title="配置代码" {2,5-9}
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
```

[配置参数地址](https://vuepress.vuejs.org/zh/reference/config.html)


### 路由
默认情况下，路由是根据md文件的路径生成的。以docs为根目录，README.md和index.md路由为 /， 而每个目录下的
其他名称的md文件，则需要以html结尾，如docs/other.md，则路由为/docs/other.html。其他目录相同逻辑  

***提示：每个目录下不能同时存在README.md 和 index.md，会造成冲突***   

Markdown 文件可以包含一个 YAML Frontmatter 。Frontmatter 必须在 Markdown 文件的顶部，并且被包裹在一对三短划线中间。
下面是一个基本的示例：
```
  lang: zh-CN
  title: 页面的标题
  description: 页面的描述
```
可以通过 Frontmatter 来覆盖当前页面的 lang, title, description 等属性。因此，你可以把 Frontmatter 当作页面级作用域的配置。  

### Emoji
表情地址：[emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet) :tada:   

### 目录
如果你想把当前页面的目录添加到markdown内容中，可以使用`[[toc]]`语法

[[toc]]


### 静态资源

#### 相对路径
你可以在 markdown 文件中使用相对路径来引用静态资源。
例如，如果你有一个名为 `logo.png` 的图片文件，你可以在 markdown 文件中使用以下语法来引用它：
```md
![logo](logo.png)  
```

推荐这种方式使用图片

#### public文件
可以把静态资源放在public目录下，他们最终会被复制到最终生成的网站目录下，默认的public目录是 .vuepress/public  





