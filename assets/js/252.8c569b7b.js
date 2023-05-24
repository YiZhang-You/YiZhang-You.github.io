(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{1028:function(e,s,r){"use strict";r.r(s);var t=r(4),a=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[e._v("#")]),e._v(" redis")]),e._v(" "),s("h2",{attrs:{id:"链接资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#链接资料"}},[e._v("#")]),e._v(" 链接资料")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.liwenzhou.com/posts/Go/redis/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go语言操作Redis - 李文周的博客"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"http://redisdoc.com/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis 命令参考 — Redis 命令参考"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"redis介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis介绍"}},[e._v("#")]),e._v(" Redis介绍")]),e._v(" "),s("p",[e._v("Redis是一个开源的内存数据库，Redis提供了多种不同类型的数据结构，很多业务场景下的问题都可以很自然地映射到这些数据结构上。除此之外，通过复制、持久化和客户端分片等特性，我们可以很方便地将Redis扩展成一个能够包含数百GB数据、每秒处理上百万次请求的系统。")]),e._v(" "),s("h2",{attrs:{id:"redis支持的数据结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis支持的数据结构"}},[e._v("#")]),e._v(" Redis支持的数据结构")]),e._v(" "),s("p",[e._v("Redis支持诸如字符串（string）、哈希（hashe）、列表（list）、集合（set）、带范围查询的排序集合（sorted set）、bitmap、hyperloglog、带半径查询的地理空间索引（geospatial index）和流（stream）等数据结构。")]),e._v(" "),s("h2",{attrs:{id:"redis应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis应用场景"}},[e._v("#")]),e._v(" Redis应用场景")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("缓存系统，减轻主数据库（MySQL）的压力。")])]),e._v(" "),s("li",[s("p",[e._v("计数场景，比如微博、抖音中的关注数和粉丝数。")])]),e._v(" "),s("li",[s("p",[e._v("热门排行榜，需要排序的场景特别适合使用ZSET。")])]),e._v(" "),s("li",[s("p",[e._v("利用 LIST 可以实现队列的功能。")])]),e._v(" "),s("li",[s("p",[e._v("利用 HyperLogLog 统计UV、PV等数据。")])]),e._v(" "),s("li",[s("p",[e._v("使用 geospatial index 进行地理位置相关查询。")])])]),e._v(" "),s("h2",{attrs:{id:"准备redis环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备redis环境"}},[e._v("#")]),e._v(" 准备Redis环境")]),e._v(" "),s("p",[e._v("读者可以选择在本机安装 redis 或使用云数据库，这里直接使用Docker启动一个 redis 环境，方便学习使用。")]),e._v(" "),s("p",[e._v("使用下面的命令启动一个名为 redis507 的 5.0.7 版本的 redis server环境。")]),e._v(" "),s("div",{staticClass:"language-Plain Text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[e._v("docker run --name redis507 -p 6379:6379 -d redis:5.0.7\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("注意：此处的版本、容器名和端口号可以根据自己需要设置。")]),e._v(" "),s("p",[e._v("启动一个 redis-cli 连接上面的 redis server。")]),e._v(" "),s("div",{staticClass:"language-Plain Text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[e._v("docker run -it --network host --rm redis:5.0.7 redis-cli\n\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);