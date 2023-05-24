(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{968:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"输出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输出"}},[s._v("#")]),s._v(" 输出")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[s._v("fmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"输入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入"}},[s._v("#")]),s._v(" 输入")]),s._v(" "),t("ul",[t("li",[s._v("Scanln")]),s._v(" "),t("li",[s._v("Scanf")])]),s._v(" "),t("h2",{attrs:{id:"代码示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[s._v("#")]),s._v(" 代码示例")]),s._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" main\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"fmt"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("func")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//实现功能：键盘录入学生的年龄，姓名，成绩，是否是VIP")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//方式1：Scanln")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" age "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("int")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// fmt.Println("请录入学生的年龄：")')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//传入age的地址的目的：在Scanln函数中，对地址中的值进行改变的时候，实际外面的age被影响了")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//fmt.Scanln(&age)//录入数据的时候，类型一定要匹配，因为底层会自动判定类型的")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// fmt.Println("请录入学生的姓名：")')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// fmt.Scanln(&name)")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" score "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("float32")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// fmt.Println("请录入学生的成绩：")')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// fmt.Scanln(&score)")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" isVIP "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("bool")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// fmt.Println("请录入学生是否为VIP：")')]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// fmt.Scanln(&isVIP)")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//将上述数据在控制台打印输出：")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('//fmt.Printf("学生的年龄为：%v,姓名为：%v,成绩为：%v,是否为VIP:%v",age,name,score,isVIP)')]),s._v("\n\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//方式2：Scanf")]),s._v("\n\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请录入学生的年龄，姓名，成绩，是否是VIP，使用空格进行分隔"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Scanf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"%d %s %f %t"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("score"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("isVIP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//将上述数据在控制台打印输出：")]),s._v("\n\tfmt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("Printf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"学生的年龄为：%v,姓名为：%v,成绩为：%v,是否为VIP:%v"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" score"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" isVIP"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);