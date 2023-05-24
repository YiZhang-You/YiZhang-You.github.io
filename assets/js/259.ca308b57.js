(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{1041:function(t,n,s){"use strict";s.r(n);var e=s(4),a=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"restful-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#restful-api"}},[t._v("#")]),t._v(" "),n("strong",[t._v("RESTful API")])]),t._v(" "),n("p",[n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2011/09/restful.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解RESTful架构 - 阮一峰的网络日志"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("REST与技术无关，代表的是一种软件架构风格，REST是Representational State Transfer的简称，中文翻译为“表征状态转移”或“表现层状态转化”。")]),t._v(" "),n("p",[t._v("推荐阅读"),n("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2011/09/restful.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阮一峰 理解RESTful架构"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("简单来说，REST的含义就是客户端与Web服务器之间进行交互的时候，使用HTTP协议中的4个请求方法代表不同的动作。")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("GET")]),t._v("用来获取资源")]),t._v(" "),n("li",[n("code",[t._v("POST")]),t._v("用来新建资源")]),t._v(" "),n("li",[n("code",[t._v("PUT")]),t._v("用来更新资源")]),t._v(" "),n("li",[n("code",[t._v("DELETE")]),t._v("用来删除资源。")])]),t._v(" "),n("p",[t._v("只要API程序遵循了REST风格，那就可以称其为RESTful API。目前在前后端分离的架构中，前后端基本都是通过RESTful API来进行交互。")]),t._v(" "),n("p",[t._v("例如，我们现在要编写一个管理书籍的系统，我们可以查询对一本书进行查询、创建、更新和删除等操作，我们在编写程序的时候就要设计客户端浏览器与我们Web服务端交互的方式和路径。按照经验我们通常会设计成如下模式：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("请求方法")]),t._v(" "),n("th",[t._v("URL")]),t._v(" "),n("th",[t._v("含义")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("GET")]),t._v(" "),n("td",[t._v("/book")]),t._v(" "),n("td",[t._v("查询书籍信息")])]),t._v(" "),n("tr",[n("td",[t._v("POST")]),t._v(" "),n("td",[t._v("/create_book")]),t._v(" "),n("td",[t._v("创建书籍记录")])]),t._v(" "),n("tr",[n("td",[t._v("POST")]),t._v(" "),n("td",[t._v("/update_book")]),t._v(" "),n("td",[t._v("更新书籍信息")])]),t._v(" "),n("tr",[n("td",[t._v("POST")]),t._v(" "),n("td",[t._v("/delete_book")]),t._v(" "),n("td",[t._v("删除书籍信息")])])])]),t._v(" "),n("p",[t._v("同样的需求我们按照RESTful API设计如下：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("请求方法")]),t._v(" "),n("th",[t._v("URL")]),t._v(" "),n("th",[t._v("含义")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("GET")]),t._v(" "),n("td",[t._v("/book")]),t._v(" "),n("td",[t._v("查询书籍信息")])]),t._v(" "),n("tr",[n("td",[t._v("POST")]),t._v(" "),n("td",[t._v("/book")]),t._v(" "),n("td",[t._v("创建书籍记录")])]),t._v(" "),n("tr",[n("td",[t._v("PUT")]),t._v(" "),n("td",[t._v("/book")]),t._v(" "),n("td",[t._v("更新书籍信息")])]),t._v(" "),n("tr",[n("td",[t._v("DELETE")]),t._v(" "),n("td",[t._v("/book")]),t._v(" "),n("td",[t._v("删除书籍信息")])])])]),t._v(" "),n("p",[t._v("Gin框架支持开发RESTful API的开发。")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('func main() {\n\tr := gin.Default()\n\tr.GET("/book", func(c *gin.Context) {\n\t\tc.JSON(200, gin.H{\n\t\t\t"message": "GET",\n\t\t})\n\t})\n\n\tr.POST("/book", func(c *gin.Context) {\n\t\tc.JSON(200, gin.H{\n\t\t\t"message": "POST",\n\t\t})\n\t})\n\n\tr.PUT("/book", func(c *gin.Context) {\n\t\tc.JSON(200, gin.H{\n\t\t\t"message": "PUT",\n\t\t})\n\t})\n\n\tr.DELETE("/book", func(c *gin.Context) {\n\t\tc.JSON(200, gin.H{\n\t\t\t"message": "DELETE",\n\t\t})\n\t})\n}\n')])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br")])]),n("p",[t._v("开发RESTful API的时候我们通常使用"),n("a",{attrs:{href:"https://www.getpostman.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postman"),n("OutboundLink")],1),t._v("来作为客户端的测试工具。")])])}),[],!1,null,null,null);n.default=a.exports}}]);