(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{486:function(e,l,v){e.exports=v.p+"assets/img/5.463f306a.png"},487:function(e,l,v){e.exports=v.p+"assets/img/6.32eb99fe.png"},899:function(e,l,v){"use strict";v.r(l);var _=v(4),t=Object(_.a)({},(function(){var e=this,l=e._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("p",[e._v("在目前基于Python语言的几十个Web开发框架中，几乎所有的全栈框架都强制或引导开发者使用MVC设计模式。")]),e._v(" "),l("h2",{attrs:{id:"_1-mvc设计模式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-mvc设计模式"}},[e._v("#")]),e._v(" 1. MVC设计模式")]),e._v(" "),l("p",[e._v("我们先对 MVC 设计模式进行介绍，它是 Web 设计模式的经典之作，MTV 模式也是在它的基础上衍生而来。")]),e._v(" "),l("p",[e._v("MVC 是 Model-View-Controller 的缩写，其中每个单词都有其不同的含义：")]),e._v(" "),l("ul",[l("li",[e._v("Modle 代表数据存储层，是对数据表的定义和数据的增删改查；")]),e._v(" "),l("li",[e._v("View 代表视图层，是系统前端显示部分，它负责显示什么和如何进行显示；")]),e._v(" "),l("li",[e._v("Controller 代表控制层，负责根据从 View 层输入的指令来检索 Model 层的数据，并在该层编写代码产生结果并输出。")])]),e._v(" "),l("p",[l("img",{attrs:{src:v(486),alt:""}})]),e._v(" "),l("p",[e._v("图1：MVC 设计模式示意图")]),e._v(" "),l("p",[e._v("MVC 设计模式的请求与响应过程描述如下：")]),e._v(" "),l("ul",[l("li",[e._v("用户通过浏览器向服务器发起 request 请求，Controller 层接受请求后，同时向 Model 层和 View 发送指令；")]),e._v(" "),l("li",[e._v("Mole 层根据指令与数据库交互并选择相应业务数据，然后将数据发送给 Controller 层；")]),e._v(" "),l("li",[e._v("View 层接收到 Controller 的指令后，加载用户请求的页面，并将此页面发送给 Controller 层；")]),e._v(" "),l("li",[e._v("Controller 层接收到 Model 层和 View 层的数据后，将它们组织成响应格式发送给浏览器，浏览器通过解析后把页面展示出来。")])]),e._v(" "),l("p",[e._v("MVC 的 3 层之间紧密相连，但又相互独立，每一层的修改都不会影响其它层，每一层都提供了各自独立的接口供其它层调用，MVC 的设计模式降低了代码之间的耦合性（即关联性），增加了模块的可重用性，这就是 MVC 的设计模式。")]),e._v(" "),l("h2",{attrs:{id:"_2-mtv设计模式"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-mtv设计模式"}},[e._v("#")]),e._v(" 2. MTV设计模式")]),e._v(" "),l("p",[e._v("那么 Django 的 MTV 又是怎么回事呢？下面讲解 Django 的设计模式。")]),e._v(" "),l("p",[e._v("Django 借鉴了经典的 MVC 模式，它也将交互的过程分为了 3 个层次，也就是 MTV 设计模式；")]),e._v(" "),l("ul",[l("li",[e._v("Model：数据存储层，处理所有数据相关的业务，和数据库进行交互，并提供数据的增删改查；")]),e._v(" "),l("li",[e._v("Template：模板层（也叫表现层）具体来处理页面的显示；")]),e._v(" "),l("li",[e._v("View：业务逻辑层，处理具体的业务逻辑，它的作用是连通Model 层和 Template 。")])]),e._v(" "),l("p",[l("img",{attrs:{src:v(487),alt:""}})]),e._v(" "),l("p",[e._v("图2：Django MTV 设计模式示意图")]),e._v(" "),l("p",[e._v("我们按照 MVC 的设计模式对 MTV 进行分析，MTV 设计模式中，用 View 层取代了 Controller 层的位置，用 Template 层取代了原来 View 层的位置。")]),e._v(" "),l("p",[e._v("初次接触 Django 的设计模式的人，可能会对 Template 层产生疑问，其实 Template 英文的含义就是“模板”的意思，你可以简单理解成，它是一个 HTML 页面 ，HTML 页面的渲染在视图层完成。")]),e._v(" "),l("p",[e._v("同样我们也对 MTV 设计模式的请求与响应过程进行描述：")]),e._v(" "),l("ul",[l("li",[e._v("用户通过浏览器对服务器发起 request 请求，服务器接收请求后，通过 View 的业务逻辑层进行分析，同时向 Model 层和 Template 层发送指令；")]),e._v(" "),l("li",[e._v("Mole 层与数据库进行交互，将数据返回给 View 层；")]),e._v(" "),l("li",[e._v("Template 层接收到指令后，调用相应的模板，并返回给 View 层；")]),e._v(" "),l("li",[e._v("View 层接收到模板与数据后，首先对模板进行渲染（即将相应的数据赋值给模板），然后组织成响应格式返回给浏览器，浏览器进行解析后并最终呈现给用户。")])]),e._v(" "),l("p",[e._v("通过以上两种设计模式的比较， 我们可以得出 MTV 是 MVC 的一种细化，将原来 MVC 中的 V 层拿出来进行分离，视图的显示与如何显示交给 Template 层，而 View 层更专注于实现业务逻辑。其实在 Django 是有 Controller 层的，只不过它由框架本身来实现，所以我们不用关心它。Django 更关注于M、T 和 V。")])])}),[],!1,null,null,null);l.default=t.exports}}]);