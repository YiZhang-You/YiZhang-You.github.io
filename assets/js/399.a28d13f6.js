(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{1182:function(s,n,a){"use strict";a.r(n);var t=a(4),e=Object(t.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"_01-mysql优化方向"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01-mysql优化方向"}},[s._v("#")]),s._v(" 01.MySQL优化方向")]),s._v(" "),n("h2",{attrs:{id:"_1-1-优化方向"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-优化方向"}},[s._v("#")]),s._v(" 1.1 优化方向")]),s._v(" "),n("ol",[n("li",[s._v("存储引擎的选择：INnoDB MyISAM")]),s._v(" "),n("li",[s._v("设计数据库的设计，尽量的遵循"),n("strong",[s._v("三范式")])]),s._v(" "),n("li",[n("strong",[s._v("适当")]),s._v("的建立索引")]),s._v(" "),n("li",[s._v("查询数据的时候，注意 ... 这些")]),s._v(" "),n("li",[n("code",[s._v("使用explain检查索引命中率，分析这一条sql语句是否可优化")])]),s._v(" "),n("li",[s._v("数据量大的时候，主从分离、分库分表、垂直/水平分割")]),s._v(" "),n("li",[s._v("尽量采用 贵的，SSD硬盘。不选择机械硬盘")]),s._v(" "),n("li",[s._v("一个和你项目有关数据库优化的例子")])]),s._v(" "),n("h2",{attrs:{id:"_1-2-mysql优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-mysql优化"}},[s._v("#")]),s._v(" 1.2 MySQL优化")]),s._v(" "),n("ul",[n("li",[s._v("什么是MySQL的慢查询？")]),s._v(" "),n("li",[s._v("如何去分析 慢查询的日志？")]),s._v(" "),n("li",[s._v("遇到了慢查询如何解决？（最好有故事）")]),s._v(" "),n("li",[s._v("索引的建立是越多越好？为什么不是越多越好？")]),s._v(" "),n("li",[n("code",[s._v("一个精彩的故事")])])]),s._v(" "),n("h1",{attrs:{id:"_02-简单说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02-简单说明"}},[s._v("#")]),s._v(" 02.简单说明")]),s._v(" "),n("h2",{attrs:{id:"_2-1-mysql索引优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-mysql索引优化"}},[s._v("#")]),s._v(" 2.1 MySQL索引优化")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1、最左前缀匹配原则，上面讲到了")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2、主键外键一定要建索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3、对 where,on,group by,order by 中出现的列使用索引")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4、尽量选择区分度高的列作为索引,区分度的公式是count(distinct col)/count(*)，表示字段不重复的比例，")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5、为较长的字符串使用前缀索引")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n# 6、不要过多创建索引, 权衡索引个数与DML之间关系，DML也就是插入、删除数据操作。\n    这里需要权衡一个问题，建立索引的目的是为了提高查询效率的，但建立的索引过多，\n    会影响插入、删除数据的速度，因为我们修改的表数据，索引也需要进行调整重建\n'''")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n# 7、对于like查询，”%”不要放在前面。\n    SELECT * FROMhoudunwangWHEREunameLIKE'后盾%' -- 走索引 \n    SELECT * FROMhoudunwangWHEREunameLIKE \"%后盾%\" -- 不走索引\n'''")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n# 8、查询where条件数据类型不匹配也无法使用索引 \n    字符串与数字比较不使用索引; \n    CREATE TABLEa(achar(10)); \n    EXPLAIN SELECT * FROMaWHEREa=\"1\" – 走索引 \n    EXPLAIN SELECT * FROM a WHERE a=1 – 不走索引 \n    正则表达式不使用索引,这应该很好理解,所以为什么在SQL中很难看到regexp关键字的原因\n'''")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])]),n("h2",{attrs:{id:"_2-2-mysql分库分表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-mysql分库分表"}},[s._v("#")]),s._v(" 2.2 MySql分库分表")]),s._v(" "),n("p",[n("code",[s._v("了解内容，不作为学习重点")])]),s._v(" "),n("ul",[n("li",[s._v("mysql一主多从，读写分离：写主库，读从库（所有数据库的数据一样）\n"),n("ul",[n("li",[s._v("数据一样的，那么当数据量太大的时候查询还是很慢")])])]),s._v(" "),n("li",[s._v("分库（根据用户id分库）\n"),n("ul",[n("li",[s._v("所有数据库的表结构一样，存储的数据完全不一样")]),s._v(" "),n("li",[s._v("真实环境以用户id进行分库，每一个库的数据都很小，查询起来就快了")]),s._v(" "),n("li",[s._v("无法解决问题：当一个数据库中表中量过大的时候，查询依然会慢")])])]),s._v(" "),n("li",[s._v("分表（根据时间分表）\n"),n("ul",[n("li",[s._v("当一个表中数据过大的时候，我们必须要对表拆分")]),s._v(" "),n("li",[s._v("购物清单表中有两千万数据\n"),n("ul",[n("li",[s._v("最近半年的购物数据时 一百万")]),s._v(" "),n("li",[s._v("半年到一年的数据有五百万")]),s._v(" "),n("li",[s._v("一年以前的数据有一千万")])])])])])])])}),[],!1,null,null,null);n.default=e.exports}}]);