(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{533:function(s,t,a){s.exports=a.p+"assets/img/16.2769dff4.png"},534:function(s,t,a){s.exports=a.p+"assets/img/17.5e68e1bb.png"},535:function(s,t,a){s.exports=a.p+"assets/img/18.d6b304a9.png"},536:function(s,t,a){s.exports=a.p+"assets/img/19.cfd68e13.png"},537:function(s,t,a){s.exports=a.p+"assets/img/20.6ec07452.png"},538:function(s,t,a){s.exports=a.p+"assets/img/21.29ac4c6a.png"},539:function(s,t,a){s.exports=a.p+"assets/img/22.b3a2d149.png"},540:function(s,t,a){s.exports=a.p+"assets/img/23.5dc8235d.png"},929:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-drf过滤介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-drf过滤介绍"}},[s._v("#")]),s._v(" 1. "),t("strong",[s._v("DRF过滤介绍")])]),s._v(" "),t("p",[s._v("我们之前写的结构其实都没有进行过滤，比如说，我们根据id升序或者降序-id，发现结果都是一样的，我们一起用postman来测试看看。")]),s._v(" "),t("p",[s._v("postman升序测试：127.0.0.1:8000/api/game.json?ordering=id")]),s._v(" "),t("p",[t("img",{attrs:{src:a(533),alt:""}})]),s._v(" "),t("p",[s._v("postman测试降序：127.0.0.1:8000/api/game.json?ordering=-id")]),s._v(" "),t("p",[t("img",{attrs:{src:a(534),alt:""}})]),s._v(" "),t("p",[s._v("为啥呐，我的升序和降序都是一样的呐，后面我们在仔细看看，原来你用的数据源都是一样的，都是 queryset = Game.objects.all()。")]),s._v(" "),t("h2",{attrs:{id:"_2-利用get-queryset过滤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-利用get-queryset过滤"}},[s._v("#")]),s._v(" 2. "),t("strong",[s._v("利用get_queryset过滤")])]),s._v(" "),t("p",[s._v("query_set是我们的get_queryset方法提供的，我们只需要重写 get_queryset方法就可以了。如下：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("custom_model_view_set "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" CustomModelViewSet\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GameView")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CustomModelViewSet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    queryset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Game"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    serializer_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" GameSerializer\n     \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get_queryset")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        ordering "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query_params"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ordering'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取参数")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("not")]),s._v(" ordering"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            queryset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Game"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            queryset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Game"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("order_by"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ordering"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#利用django降序")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" queryset\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("好的，我们再来测试一下：127.0.0.1:8000/api/game.json?ordering=-id")]),s._v(" "),t("p",[t("img",{attrs:{src:a(535),alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_3-django-filter过滤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-django-filter过滤"}},[s._v("#")]),s._v(" 3. "),t("strong",[s._v("django-filter过滤")])]),s._v(" "),t("p",[s._v("django-filter库包括一个DjangoFilterBackend类，它支持REST框架的高度可定制的字段过滤。")]),s._v(" "),t("h3",{attrs:{id:"_3-1-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-安装"}},[s._v("#")]),s._v(" "),t("strong",[s._v("3.1 安装")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("pip install django"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("filter")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_3-2-官网和github"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-官网和github"}},[s._v("#")]),s._v(" "),t("strong",[s._v("3.2 官网和github")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("https"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("django"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("filter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("readthedocs"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("en"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("guide"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("rest_framework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("html\n \nhttps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("carltongibson"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("django"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("filter")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"_3-3-settings-py中注册"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-settings-py中注册"}},[s._v("#")]),s._v(" "),t("strong",[s._v("3.3 settings.py中注册")])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("INSTALLED_APPS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('""""""')]),s._v("\n　　　　 "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django_filters'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"_3-4-全局安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-全局安装"}},[s._v("#")]),s._v(" "),t("strong",[s._v("3.4 全局安装")])]),s._v(" "),t("p",[s._v("说明：在settings.py中安装全局过滤器配置")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[s._v("REST_FRAMEWORK "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DEFAULT_AUTHENTICATION_CLASSES'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#全局配置过滤器")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DEFAULT_FILTER_BACKENDS'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django_filters.rest_framework.DjangoFilterBackend'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n             "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h3",{attrs:{id:"_3-5-局部安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-局部安装"}},[s._v("#")]),s._v(" "),t("strong",[s._v("3.5 局部安装")])]),s._v(" "),t("p",[s._v("说明：局部安装，只需要作用于某个视图，我们为了测试，我们就用局部的吧。")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("custom_model_view_set "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" CustomModelViewSet\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#局部安装使用")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" filters\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django_filters"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rest_framework "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" DjangoFilterBackend\n \n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GameView")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CustomModelViewSet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n \n    queryset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Game"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    serializer_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" GameSerializer\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入过滤器")]),s._v("\n    filter_backends "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DjangoFilterBackend"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义过滤字段，这个字段需要在模型类中存在")]),s._v("\n    filter_fields "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'status'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("postman运行结果：")]),s._v(" "),t("p",[s._v("单个搜索：127.0.0.1:8000/api/game.json?name=QQ 炫舞")]),s._v(" "),t("p",[t("img",{attrs:{src:a(536),alt:""}})]),s._v(" "),t("p",[s._v("组合搜索：127.0.0.1:8000/api/game.json?name=QQ 炫舞&status=0")]),s._v(" "),t("p",[t("img",{attrs:{src:a(537),alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_4-自定义过滤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-自定义过滤"}},[s._v("#")]),s._v(" 4. "),t("strong",[s._v("自定义过滤")])]),s._v(" "),t("p",[s._v("不知道大家发现没有，上面的过滤只能是精确匹配，不能做到模糊匹配，那我们想要做到模糊匹配过滤，这个时候我们就要自定义 过滤了。跟之前还是一样需要自己新建一个 custom_filter.py，那我们的目录结构如下：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("app06\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("migrations\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("custom_filter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#新建，自定义过滤")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("好啦，我们编辑  custom_filter.py，编写我们的自定义的过滤：(自定义过滤，支持模糊匹配)")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django_filters "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" rest_framework "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" filters\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Game\n \n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GameFilter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filters"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("FilterSet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    min_status "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" filters"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("NumberFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'status'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lookup_expr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'gte'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    max_status "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" filters"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("NumberFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'status'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lookup_expr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lte'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#根据名字过滤忽略大小写")]),s._v("\n    name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" filters"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharFilter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lookup_expr"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'icontains'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Meta")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        model "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Game\n        fields "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'min_status'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'max_status'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许精准查询的字段")]),s._v("\n        search_fields "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 允许模糊查询的字段")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("具体使用方法，请查看官网：")]),s._v(" "),t("p",[t("code",[s._v("https://django-filter.readthedocs.io/en/master/guide/rest_framework.html")])]),s._v(" "),t("p",[s._v("这边我们就不带大家看了，我们继续，我们来修改视图:")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("custom_model_view_set "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" CustomModelViewSet\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django_filters"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rest_framework "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" DjangoFilterBackend\n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("custom_filter "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" GameFilter  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#导入自定义过滤")]),s._v("\n \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GameView")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CustomModelViewSet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    queryset "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Game"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    serializer_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" GameSerializer\n \n    filter_backends "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("DjangoFilterBackend"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# filter_fields = ('name', 'status')")]),s._v("\n \n    filterset_class "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" GameFilter  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#上面的就不需要了，用我们自定义的过滤")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("好哒，我们再来测试一把：")]),s._v(" "),t("p",[s._v("单个搜素条件：http://127.0.0.1:8000/api/game.json?name=QQ")]),s._v(" "),t("p",[t("img",{attrs:{src:a(538),alt:""}})]),s._v(" "),t("p",[s._v("组合搜索：http://127.0.0.1:8000/api/game.json?name=QQ&min_status=1")]),s._v(" "),t("p",[t("img",{attrs:{src:a(539),alt:""}})]),s._v(" "),t("p",[s._v("区间值搜索：http://127.0.0.1:8000/api/game.json?min_status=0&max_status=2")]),s._v(" "),t("p",[t("img",{attrs:{src:a(540),alt:""}})])])}),[],!1,null,null,null);t.default=e.exports}}]);