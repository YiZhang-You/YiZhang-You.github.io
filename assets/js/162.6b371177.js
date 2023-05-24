(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{881:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_01-json"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-json"}},[s._v("#")]),s._v(" 01.json")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("1.序列化 (json.dumps) ：是将内存中的对象存储到硬盘，变成字符串")])]),s._v(" "),t("li",[t("p",[s._v("2.反序列化(json.loads) ： 将刚刚保存在硬盘中的内存对象从新加载到内存中")])]),s._v(" "),t("li",[t("p",[s._v("json.dumps( data,ensure_ascii=False, indent=4)")])])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#json序列化代码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json\ninfo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tom"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test.txt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# print(json.dumps(info))")]),s._v("\nf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dumps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#json反序列化代码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json\nf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test.txt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"r"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndata "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loads"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"_02-pickle序列化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_02-pickle序列化"}},[s._v("#")]),s._v(" 02.pickle序列化")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("python的pickle模块实现了python的所有数据序列和反序列化。")])]),s._v(" "),t("li",[t("p",[s._v("基本上功能使用和JSON模块没有太大区别，方法也同样是dumps/dump和loads/load")])]),s._v(" "),t("li",[t("p",[s._v("与JSON不同的是pickle不是用于多种语言间的数据传输，它仅作为python对象的持久化或者python程序间进行互相传输对象的方法，因此它支持了python所有的数据类型。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("pickle序列化代码")])])])]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#pickle序列化代码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" pickle\ninfo "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tom"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"age"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test.txt"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wb'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pickle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dumps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("pickle反序列化代码")])])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#pickle反序列化代码\nimport pickle\nf = open("test.txt","rb")\ndata = pickle.loads(f.read())\nf.close()\nprint(data["age"])\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"_03-解决序列化datetime类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_03-解决序列化datetime类型"}},[s._v("#")]),s._v(" 03.解决序列化datetime类型")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("datetime\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("JsonCustomEncoder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("JSONEncoder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" field"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("isinstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" datetime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("datetime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" field"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("strftime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y-%m-%d %H:%M:%S'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("isinstance")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("field"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" datetime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("date"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" field"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("strftime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%Y-%m-%d'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("JSONEncoder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" field"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" datetime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("datetime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("now"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("open")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ttt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'w'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定将内容写入到ttt文件中")]),s._v("\nf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("write"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dumps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("t"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("cls"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("JsonCustomEncoder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用时候只要在json.dumps增加个cls参数即可")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("ul",[t("li",[t("code",[s._v("JSON和pickle模块的区别")]),s._v(" "),t("ul",[t("li",[s._v("1.JSON只能处理基本数据类型。pickle能处理所有Python的数据类型。")]),s._v(" "),t("li",[s._v("2.JSON用于各种语言之间的字符转换。")]),s._v(" "),t("li",[s._v("pickle用于Python程序对象的持久化或者Python程序间对象网络传输，但不同版本的Python序列化可能还有差异")])])])])])}),[],!1,null,null,null);t.default=e.exports}}]);