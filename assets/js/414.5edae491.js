(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{1214:function(s,a,t){"use strict";t.r(a);var n=t(4),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_01-centos7安装mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-centos7安装mongodb"}},[s._v("#")]),s._v(" 01.centos7安装MongoDB")]),s._v(" "),a("h3",{attrs:{id:"_1-1-安装mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-安装mongodb"}},[s._v("#")]),s._v(" 1.1 安装MongoDB")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/yum.repos.d/mongodb-org-4.0.repo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mongodb-org-4.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MongoDB Repository\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://repo.mongodb.org/yum/redhat/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/mongodb-org/4.0/x86_64/\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://www.mongodb.org/static/pgp/server-4.0.asc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("yum安装")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  sudo yum install -y mongodb-org")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1-2-配置mongodb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-配置mongodb"}},[s._v("#")]),s._v(" 1.2 配置MongoDB")]),s._v(" "),a("ul",[a("li",[s._v("配置"),a("code",[s._v("mongod.conf")]),s._v("允许远程连接")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  vim /etc/mongod.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# network interfaces")]),s._v("\nnet:\n  port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n  bindIp: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("启动mongo")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo service mongod start")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1-3-创建管理员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-创建管理员"}},[s._v("#")]),s._v(" 1.3 创建管理员")]),s._v(" "),a("ul",[a("li",[s._v("创建管理员用户")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mongo")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use admin\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" db.createUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    user: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"myUserAdmin"')]),s._v(",\n    pwd: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc123"')]),s._v(",\n    roles: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" role: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"userAdminAnyDatabase"')]),s._v(", db: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"readWriteAnyDatabase"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("启用权限管理")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/mongod.conf")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#security ")]),s._v("\nsecurity:\n  authorization: enabled\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[s._v("重启mongodb")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo service mongod restart")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("登录MongoDB")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# mongo --host 127.0.0.1 -u "myUserAdmin" --authenticationDatabase "admin" -p\'abc123\'')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1-4-测试可用性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-测试可用性"}},[s._v("#")]),s._v(" 1.4 测试可用性")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s-node1 ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# mongo --host 127.0.0.1 -u "myUserAdmin" --authenticationDatabase "admin" -p\'abc123\'')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  show dbs             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有db")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  use mydemo             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用我们的数据库（如果没有这个数据库会自动创建）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  db.test1.insert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("id:1,"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Tom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在test1表中插入一条数据（如果没有这个表会自动创建）")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);