(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{617:function(s,a,t){s.exports=t.p+"assets/img/2023052410291941.ae441dcc.png"},987:function(s,a,t){"use strict";t.r(a);var n=t(4),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_1-包的基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-包的基本概念"}},[s._v("#")]),s._v(" 1. "),a("strong",[s._v("包的基本概念")])]),s._v(" "),a("h2",{attrs:{id:"包的基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包的基本概念"}},[s._v("#")]),s._v(" "),a("strong",[s._v("包的基本概念")])]),s._v(" "),a("p",[s._v("Go语言是使用包来组织源代码的，包（package）是多个 Go 源码的集合，是一种高级的代码复用方案。Go语言中为我们提供了很多内置包，如 fmt、os、io 等。")]),s._v(" "),a("p",[s._v("任何源代码文件必须属于某个包，同时源码文件的第一行有效代码必须是 package pacakgeName 语句，通过该语句声明自己所在的包。")]),s._v(" "),a("p",[s._v("Go语言的包借助了目录树的组织形式，一般包的名称就是其源文件所在目录的名称，虽然Go语言没有强制要求包名必须和其所在的目录名同名，但还是建议包名和所在目录同名，这样结构更清晰。")]),s._v(" "),a("p",[s._v("包可以定义在很深的目录中，包名的定义是不包括目录路径的，但是包在引用时一般使用全路径引用。比如在 GOPATH/src/a/b/ 下定义一个包 c。在包 c 的源码中只需声明为 package c")]),s._v(" "),a("p",[s._v("，而不是声明为 package a/b/c ，但是在导入 c 包时，需要带上路径，例如")]),s._v(" "),a("div",{staticClass:"language-Go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a/b/c"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"包的习惯用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包的习惯用法"}},[s._v("#")]),s._v(" 包的习惯用法：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("包名一般是小写的，使用一个简短且有意义的名称。")])]),s._v(" "),a("li",[a("p",[s._v("包名一般要和所在的目录同名，也可以不同，包名中不能包含等特殊符号。")])]),s._v(" "),a("li",[a("p",[s._v("包一般使用域名作为目录名称，这样能保证包名的唯一性，比如 GitHub 项目的包一般会放到"),a("code",[s._v("GOPATH/src/github.com/userName/projectName")]),s._v(" 目录下。")])]),s._v(" "),a("li",[a("p",[s._v("包名为 main 的包为应用程序的入口包，编译不包含 main 包的源码文件时不会得到可执行文件。")])]),s._v(" "),a("li",[a("p",[s._v("一个文件夹下的所有源码文件只能属于同一个包，同样属于同一个包的源码文件不能放在多个文件夹下。")])])]),s._v(" "),a("h2",{attrs:{id:"包的导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包的导入"}},[s._v("#")]),s._v(" "),a("strong",[s._v("包的导入")])]),s._v(" "),a("p",[s._v("要在代码中引用其他包的内容，需要使用 import 关键字导入使用的包。具体语法如下：")]),s._v(" "),a("div",{staticClass:"language-Go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"包的路径"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注意事项：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("import 导入语句通常放在源码文件开头包声明语句的下面；")])]),s._v(" "),a("li",[a("p",[s._v("导入的包名需要使用双引号包裹起来；")])]),s._v(" "),a("li",[a("p",[s._v("包名是从"),a("code",[s._v("GOPATH/src/")]),s._v(" 后开始计算的，使用"),a("code",[s._v("/")]),s._v(" 进行路径分隔。")])])]),s._v(" "),a("p",[s._v("包的导入有两种写法，分别是单行导入和多行导入。")]),s._v(" "),a("h3",{attrs:{id:"单行导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单行导入"}},[s._v("#")]),s._v(" "),a("strong",[s._v("单行导入")])]),s._v(" "),a("div",{staticClass:"language-Go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"包 1 的路径"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"包 2 的路径"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"多行导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多行导入"}},[s._v("#")]),s._v(" "),a("strong",[s._v("多行导入")])]),s._v(" "),a("div",{staticClass:"language-Go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"包 1 的路径"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"包 2 的路径"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"包的导入路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包的导入路径"}},[s._v("#")]),s._v(" "),a("strong",[s._v("包的导入路径")])]),s._v(" "),a("p",[s._v("包的引用路径有两种写法，分别是全路径导入和相对路径导入。")]),s._v(" "),a("h3",{attrs:{id:"全路径导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全路径导入"}},[s._v("#")]),s._v(" "),a("strong",[s._v("全路径导入")])]),s._v(" "),a("p",[s._v("包的绝对路径就是"),a("code",[s._v("GOROOT/src/")]),s._v("或"),a("code",[s._v("GOPATH/src/")]),s._v("后面包的存放路径，如下所示：")]),s._v(" "),a("div",{staticClass:"language-Go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lab/test"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"database/sql/driver"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"database/sql"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("上面代码的含义如下：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("test 包是自定义的包，其源码位于"),a("code",[s._v("GOPATH/src/lab/test")]),s._v(" 目录下；")])]),s._v(" "),a("li",[a("p",[s._v("driver 包的源码位于"),a("code",[s._v("GOROOT/src/database/sql/driver")]),s._v(" 目录下；")])]),s._v(" "),a("li",[a("p",[s._v("sql 包的源码位于"),a("code",[s._v("GOROOT/src/database/sql")]),s._v(" 目录下。")])])]),s._v(" "),a("h3",{attrs:{id:"相对路径导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相对路径导入"}},[s._v("#")]),s._v(" "),a("strong",[s._v("相对路径导入")])]),s._v(" "),a("p",[s._v("相对路径只能用于导入"),a("code",[s._v("GOPATH")]),s._v(" 下的包，标准包的导入只能使用全路径导入。")]),s._v(" "),a("p",[s._v("例如包 a 的所在路径是"),a("code",[s._v("GOPATH/src/lab/a")]),s._v("，包 b 的所在路径为"),a("code",[s._v("GOPATH/src/lab/b")]),s._v("，如果在包 b 中导入包 a ，则可以使用相对路径导入方式。示例如下：")]),s._v(" "),a("div",{staticClass:"language-Go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 相对路径导入")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../a"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("当然了，也可以使用上面的全路径导入，如下所示：")]),s._v(" "),a("div",{staticClass:"language-Go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 全路径导入")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lab/a"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"包的引用格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包的引用格式"}},[s._v("#")]),s._v(" "),a("strong",[s._v("包的引用格式")])]),s._v(" "),a("p",[s._v("包的引用有四种格式，下面以 fmt 包为例来分别演示一下这四种格式。")]),s._v(" "),a("h3",{attrs:{id:"标准引用格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准引用格式"}},[s._v("#")]),s._v(" "),a("strong",[s._v("标准引用格式")])]),s._v(" "),a("div",{staticClass:"language-Go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C语言中文网"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"自定义别名引用格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义别名引用格式"}},[s._v("#")]),s._v(" "),a("strong",[s._v("自定义别名引用格式")])]),s._v(" "),a("p",[s._v("在导入包的时候，我们还可以为导入的包设置别名，如下所示：")]),s._v(" "),a("div",{staticClass:"language-Go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中 F 就是 fmt 包的别名，使用时我们可以使用"),a("code",[s._v("F.")]),s._v("来代替标准引用格式的"),a("code",[s._v("fmt.")]),s._v("来作为前缀使用 fmt 包中的方法。")]),s._v(" "),a("div",{staticClass:"language-Go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" F "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C语言中文网"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"省略引用格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#省略引用格式"}},[s._v("#")]),s._v(" "),a("strong",[s._v("省略引用格式")])]),s._v(" "),a("p",[s._v("这种格式相当于把 fmt 包直接合并到当前程序中，在使用 fmt 包内的方法是可以不用加前缀"),a("code",[s._v("fmt.")]),s._v("\n，直接引用。")]),s._v(" "),a("div",{staticClass:"language-Go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//不需要加前缀 fmt.")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C语言中文网"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"匿名引用格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匿名引用格式"}},[s._v("#")]),s._v(" "),a("strong",[s._v("匿名引用格式")])]),s._v(" "),a("p",[s._v("在引用某个包时，如果只是希望执行包初始化的 init 函数，而不使用包内部的数据时，可以使用匿名引用格式，如下所示：")]),s._v(" "),a("div",{staticClass:"language-Go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("匿名导入的包与其他方式导入的包一样都会被编译到可执行文件中。")]),s._v(" "),a("p",[s._v("使用标准格式引用包，但是代码中却没有使用包，编译器会报错。如果包中有 init 初始化函数，则通过"),a("code",[s._v('import _ "包的路径"')]),s._v(" 这种方式引用包，仅执行包的初始化函数，即使包没有 init 初始化函数，也不会引发编译器报错。")]),s._v(" "),a("div",{staticClass:"language-Go line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("_")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"database/sql"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C语言中文网"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("注意：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("一个包可以有多个 init 函数，包加载时会执行全部的 init 函数，但并不能保证执行顺序，所以不建议在一个包中放入多个 init 函数，将需要初始化的逻辑放到一个 init 函数里面。")])]),s._v(" "),a("li",[a("p",[s._v("包不能出现环形引用的情况，比如包 a 引用了包 b，包 b 引用了包 c，如果包 c 又引用了包 a，则编译不能通过。")])]),s._v(" "),a("li",[a("p",[s._v("包的重复引用是允许的，比如包 a 引用了包 b 和包 c，包 b 和包 c 都引用了包 d。这种场景相当于重复引用了 d，这种情况是允许的，并且 Go 编译器保证包 d 的 init 函数只会执行一次。")])])]),s._v(" "),a("h2",{attrs:{id:"包加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包加载"}},[s._v("#")]),s._v(" "),a("strong",[s._v("包加载!")])]),s._v(" "),a("p",[s._v("在执行 main 包的 mian 函数之前， Go 引导程序会先对整个程序的包进行初始化。整个执行的流程如下图所示。")]),s._v(" "),a("p",[a("img",{attrs:{src:t(617),alt:""}})]),s._v(" "),a("p",[s._v("Go语言包的初始化有如下特点：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("包初始化程序从 main 函数引用的包开始，逐级查找包的引用，直到找到没有引用其他包的包，最终生成一个包引用的有向无环图。")])]),s._v(" "),a("li",[a("p",[s._v("Go 编译器会将有向无环图转换为一棵树，然后从树的叶子节点开始逐层向上对包进行初始化。")])]),s._v(" "),a("li",[a("p",[s._v("单个包的初始化过程如上图所示，先初始化常量，然后是全局变量，最后执行包的 init 函数。")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);