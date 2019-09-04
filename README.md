# 团队代码规范建设

## 命名规范
1.目录命名(小写,复数,连接符)
```
  项目命名:            project-name
  样式文件夹:          styles
  图片文件夹:          images
  第三方库文件夹:       libs
  其他资源:            assets
  多个单词的目录名使用横杠字符连接: 如 project-name
```

2.文件命名(小驼峰)
```
  index.js, 
  commen.css, 
  myTool.js
```

3.图片资源命名(英文小写,有意义,下划线连接)
```
  icon.png
  home_logo.png
```

4.vue 组件命名(小写,连接符,尽量使用多个单词,避免与标签重名,存在层级关系加上父级前缀)
```
  news.vue
  news-list.vue
  news-list-item.vue
  导入: import NewsListItem from 'components/news-list-item.vue'
  使用: <news-list-item></news-list-item>
```
## 代码规范
  - eslint工具: 对 javascript 代码进行检查, vue项目中添加相关配置  
    配置项参考: https://cn.eslint.org/docs/rules/
    
  - stylelint 工具: 对 css.scss,less 等进行规范检查, vue项目中配置  
    配置项参考: https://www.npmjs.com/package/stylelint-config-standard

### HTML书写规范
  在保持功能完整的情况下，使用最少,最少,最少的标签，书写遵循HTML标准，符合语义化的文档
  - 1.使用语义化标签来规划页面整体布局(层次分明,可读性好,利于机器阅读)
  - 2.结构尽量简要, 能简单化表达的就不要嵌套一些无意义的标签
  - 3.先整体,后局部
  - 4.一些内容不变或者图标类可以考虑使用伪元素
  - 5.一个 html 模块添加注释备注
  // 示例
  ```
    <body>
      <!-- 头部栏模块-->
      <header>
          <nav></nav>
      </header>
      <!-- 侧栏模块 -->
      <aside>
          <nav></nav>
      </aside>
      <!-- 主体模块: 全局只配一个 main 标签 -->
      <main>
          <!-- 独立文章,新闻类考虑使用article -->
          <article>
              <header>……</header>
              <section>……</section>
              <section>……</section>
              <section>……</section>
              <footer>……</footer>
          </article>
          <section>……</section>
          <section>……</section>
      </main>
      <!-- 底部栏模块 -->
      <footer></footer>
    </body>
  ```
### css 书写规范
  - 类名统一采用连接符形式,带层级关系使用连接符进行连接
    // 示例
    ```
    <div class="home">
      <img class="home-logo" src="home_logo.png" alt="主页logo">
    </div>
    ```
  - 布局属性声明顺序
    ```
    1.Positioning     定位
    2.Box model       盒模型
    3.Typographic     字体
    4.Appearance      外观
    5.Other           其他
    // 示例
      .block {
        /* Positioning */
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 999;
        
        /* Box model */
        display: flex;
        justify-content: flex-start;
        align-items: center;
        box-sizing: border-box;
        width: 100px;
        height: 100px;
        padding: 10px;
        border: 1px solid #e5e5e5;
        border-radius: 3px;
        margin: 10px;
        overflow: hidden;
        
        /* Typographic */
        font-size: 14px;
        line-height: 1.5;
        text-align: center;

        /* Appearance */
        background-color: #f5f5f5;
        color: #fff;
        opacity: .8;
        
        /* Other */
        cursor: pointer; 
      }
     ```
### JavaScript书写规范
  - 变量及函数声明: 统一采用 let,const,class,function
  
  - 命名符合语义化
    ```
    can	判断是否可执行某个动作
    has	判断是否含有某个值
    is	判断是否为某个值
    get	获取某个值
    set	设置某个值
    示例:
    
      //是否可阅读 
      function canRead(){ 
        return true; 
      } 
      //获取姓名 
      function getName{
        return this.name 
      } 
    ```
   
  - 变量命名: 使用有含义的变量名,统一采用驼峰命名,常量使用全大写+下划线
    ```
    let homeTitle = '主页'
    const SECONDS_IN_ONE_DAY = 24 * 60 * 60
    ```
  
  - 对象简写,推荐字面量写法
    ```
    const name = 'leo'
    const age = 26
    function work() {...}

    const person = { 
      name, 
      age,
      work
    }
    ```
  
  - 在需要使用对象的多个属性时，使用解构赋值
    ```
    const obj = {
      foo: 'foo',
      bar: 'bar',
      baz: 'baz'
    }
    const { foo, bar, baz } = obj
    ```
  
  - 文件注释 用于告诉不熟悉这段代码的读者这个文件中包含哪些东西, 提供文件的大体内容, 它的作者, 依赖关系和兼容性信息
  示例: 如 filter.js 文件
    ```
    /**
    * @description {项目中的业务工具函数, 处理字符过滤,格式转化}
    * @author {huhua}
    * @date {2019-08-30}
    */ 
    ```
  - 函数,方法,类注释包含参数说明，返回值以及作用和用法
    示例:
    ```
    /**
    * @description 两数之和
    * @param {number} x 参数的说明
    * @param {number} y 参数的说明
    * @return {number} 返回值的说明
    */
    function sumOfTwoNumber(x,y) {
      return x + y
    }
    ```
  - 推荐使用函数式编程方式
    ```
    const programmerOutput = [
      {
        name: 'Uncle Bobby',
        linesOfCode: 500
      }, {
        name: 'Suzie Q',
        linesOfCode: 1500
      }, {
        name: 'Jimmy Gosling',
        linesOfCode: 150
      }, {
        name: 'Gracie Hopper',
        linesOfCode: 1000
      }
    ];
    const totalOutput = programmerOutput
      .map(output => output.linesOfCode)
      .reduce((totalLines, lines) => totalLines + lines, 0)
    ```
   
### vue 组件书写规范(保证必要的业务逻辑注释)

  - vue组件模板标签顺序
    ```
      <template>
         模块之间记得添加注释区分
      </template>
    ```

    ```
       <script>
         methods中的业务逻辑记得添加注释
       </script>
    ```

    ```
      <style>
         根据 template 模块添加注释区分; 
         交互样式注意添加注释(在模板中动态导入的)
      </style>
    ```

  - 组件属性换行,属性的书写顺序
    顺序: 类名 > ref > v-model > 属性传值 > 方法
    示例:
    ```
      <photo-upload
        class="photo-upload"
	  ref="upload"
	  v-model="files"
	  :max="4"
	  :auto="false"
	  :action="action"
	  :simultaneous-uploads="1"
	  @files-added="handleAdded"
	  @file-success="handleSuccess"
	  @file-click="handleClick"
	  @file-error="handleError"
      >
      </photo-upload>
    ```
  - script 标签内部声明顺序; 声明规范; props 完整性
    示例:
    ```
      import NewsListItem from "@/components-base/news-list-item";
      import { scrollMixin } from "@/mixins/scrollMixin";
      const COMPONET_NAME = 'news-list';

      export default {
        name: COMPONET_NAME,
        props: {
          name: {
            type: String,
            default: 'huahua',
            required: false
          }
        },
        mixins: [scrollMixin],
        components: { NewsListItem },
        data() { return {} },
        生命周期钩子顺序: created > mounted > ... > destroyed
        methods: {},
        computed: {},
        watch: {},
        组件路由钩子函数
      }
     ```
   
   - style 标签内尽量使用 scoped属性
     ```
    	<style lang="scss" scoped></style>
      ```

  - props配置: 每个配置项必须有注释说明
     ```
      props: {
          // 用户名字
          name: { 
            type: String,
            default: 'huahua',
            required: false
          },
	  // 年龄
	  age: {
	    type: Number,
	    default: 18
	  }
      },
     ``` 
  
## git 使用规范
  ```
  - master:正式环境分支;  dev: 测试环境分支; 自建个人分支: 自己的名字_dev;
  - 多人合作: 注意提交之前先拉取其他人更新的代码再合并提交!
  - commit message规范(可以强制做提交预检)
    add：'添加新功能'
    fix：'修补bug'
    docs：'文档（documentation）'
    refactor：'重构（即不是新增功能，也不是修改bug的代码变动,  推翻重写'
    test：'增加测试'
    update：'更改代码'
  ```
## Vue SPA项目规范

1.项目创建(采用 vue-cli3)  
  vue create project-name  
  配置项选择: Babel, Router, Vuex, CSS-Pre-processors, Linter, Unit Testing

2.目录结构创建,见项目
![image](https://github.com/appleguardu/team-startand-build/blob/master/src/assets/images/startand.png)
