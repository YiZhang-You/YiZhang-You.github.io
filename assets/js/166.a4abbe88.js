(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{883:function(s,t,a){"use strict";a.r(t);var n=a(4),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_01-paramiko模块作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-paramiko模块作用"}},[s._v("#")]),s._v(" 01.Paramiko模块作用")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("1）如果需要使用SSH从一个平台连接到另外一个平台，进行一系列的操作时，")]),s._v(" "),t("ul",[t("li",[s._v("**比如：**批量执行命令，批量上传文件等操作，paramiko是最佳工具之一。")])])]),s._v(" "),t("li",[t("p",[s._v("2）paramiko是用python语言写的一个模块,遵循SSH2协议,支持以加密和认证的方式，进行远程服务器的连接")])]),s._v(" "),t("li",[t("p",[s._v("3）由于使用的是python这样的能够跨平台运行的语言，所以所有python支持的平台")]),s._v(" "),t("ul",[t("li",[s._v("如Linux, Solaris, BSD,MacOS X, Windows等，paramiko都可以支持")])])]),s._v(" "),t("li",[t("p",[s._v("4）如果需要使用SSH从一个平台连接到另外一个平台，进行一系列的操作时，paramiko是最佳工具之一")])]),s._v(" "),t("li",[t("p",[s._v("5）现在如果需要从windows服务器上下载Linux服务器文件：")]),s._v(" "),t("ul",[t("li",[s._v("a. 使用paramiko可以很好的解决以上问题，它仅需要在本地上安装相应的软件（python以及PyCrypto）")]),s._v(" "),t("li",[s._v("b. 对远程服务器没有配置要求，对于连接多台服务器，进行复杂的连接操作特别有帮助。")])])])]),s._v(" "),t("h2",{attrs:{id:"_02-paramiko基于用户名密码连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_02-paramiko基于用户名密码连接"}},[s._v("#")]),s._v(" 02.paramiko基于用户名密码连接")]),s._v(" "),t("h3",{attrs:{id:"_2-1-远程执行命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-远程执行命令"}},[s._v("#")]),s._v(" 2.1 远程执行命令")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" paramiko\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1 创建SSH对象")]),s._v("\nssh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" paramiko"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SSHClient"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2 允许连接不在know_hosts文件中的主机")]),s._v("\nssh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("set_missing_host_key_policy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("paramiko"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AutoAddPolicy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3 连接服务器")]),s._v("\nssh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("connect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1.1.1.3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chnsys@2016'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4 执行命令                                         #stdin标准输入： 自己输入的命令")]),s._v("\nstdin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" stdout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" stderr "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ssh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exec_command"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pwd'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# stdout标准输出：  命令执行结果")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5 获取命令结果                                     #stderr标准错误：  命令执行报错的结果")]),s._v("\nres"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" err "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" stdout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" stderr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nresult "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" res "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" res "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" err\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#运行结果： /root")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 6 关闭连接")]),s._v("\nssh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h3",{attrs:{id:"_2-2-上传和下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-上传和下载"}},[s._v("#")]),s._v(" 2.2 上传和下载")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" paramiko\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1 连接客户端")]),s._v("\ntransport "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" paramiko"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Transport"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10.1.0.50'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ntransport"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("connect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chnsys@2016'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2 定义与客户端交互    将刚刚定义的transport当参数传递给他")]),s._v("\nsftp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" paramiko"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SFTPClient"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("from_transport"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("transport"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3 将location.py 上传至服务器 /tmp/test.py")]),s._v("\nsftp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("put"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:\\bbb\\file.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/tmp/file.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4 将remove_path 下载到本地 local_path")]),s._v("\nsftp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/tmp/file.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:\\bbb\\file.txt'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#5 关闭连接")]),s._v("\ntransport"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);