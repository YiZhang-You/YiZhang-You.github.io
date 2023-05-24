(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1204:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"redis的主从同步功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis的主从同步功能"}},[s._v("#")]),s._v(" "),n("strong",[s._v("redis的主从同步功能")])]),s._v(" "),n("p",[n("a",{attrs:{href:"https://www.cnblogs.com/pyyu/p/10012904.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/pyyu/p/10012904.html"),n("OutboundLink")],1)]),s._v(" "),n("p",[n("strong",[s._v("redis主从同步")])]),s._v(" "),n("ul",[n("li",[n("p",[s._v("redis集群中在数据库复制是通过主从同步来实现的")])]),s._v(" "),n("li",[n("p",[s._v("主节点(Master)把数据分发给从节点(slave)")])]),s._v(" "),n("li",[n("p",[s._v("主从同步的好处在于高可用，redis节点有冗余设计")])])]),s._v(" "),n("p",[n("img",{attrs:{src:a(773),alt:""}})]),s._v(" "),n("h4",{attrs:{id:"主从同步示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#主从同步示例"}},[s._v("#")]),s._v(" "),n("strong",[s._v("主从同步示例")])]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("准备两个或两个以上redis实例\nredis\t类型\t\t 状态\n6379\tmaster\t  可读可写\n6380\tslave\t  可读\n6381\tslave\t  可读\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("1、主要还是写nginx.conf配置文件")]),s._v(" "),n("p",[n("strong",[s._v("！pkill -9 redis 需要清空redis端口，在公司的话要注意用这个")])]),s._v(" "),n("p",[s._v("redis_6379.conf")]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('port 6379\ndaemonize yes\npidfile /data/6379/redis.pid\nloglevel notice\nlogfile "/data/6379/redis.log"\ndbfilename dump.rdb\ndir /data/6379\nprotected-mode no\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("redis_6380.conf")]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('port 6379\ndaemonize yes\npidfile /data/6379/redis.pid\nloglevel notice\nlogfile "/data/6379/redis.log"\ndbfilename dump.rdb\ndir /data/6379\nprotected-mode no\nslaveor 127.0.0.1 6379\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("redis_6381.conf")]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v('port 6379\ndaemonize yes\npidfile /data/6379/redis.pid\nloglevel notice\nlogfile "/data/6379/redis.log"\ndbfilename dump.rdb\ndir /data/6379\nprotected-mode no\nslaveor 127.0.0.1 6379\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[n("strong",[s._v("可以用重定向的方式添加：在从节点中配置主 slaveor 127.0.0.1 6379")])]),s._v(" "),n("p",[s._v("echo slaveof 127.0.0.1 6379 >> /opt/redis-4.0.10/redis_6380.conf")]),s._v(" "),n("p",[n("strong",[s._v("mkdir -p /data/{6379,6380,6381}")])]),s._v(" "),n("p",[s._v("2、启动三个redis实例")]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("redis-server redis_6379.conf\nredis-server redis_6380.conf\nredis-server redis_6381.conf\n\n# 主从规划\n主节点：6379\n从节点：6381、6380\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("3、检查主从状态")]),s._v(" "),n("p",[s._v("从库：")]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("127.0.0.1:6380> info replication\n127.0.0.1:6381> info replication\n\n# Replication\nrole:slave\nmaster_host:127.0.0.1\nmaster_port:6379\n....\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("主库：")]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("127.0.0.1:6380> info replication\n\n# Replication\nrole:master\nconnected_slaves:1\nslave0:ip=127.0.0.1,port=6380,state=online,offset=609,lag=1\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[n("strong",[s._v("出现这些信息表示连接成功")])]),s._v(" "),n("p",[s._v("4、测试")]),s._v(" "),n("p",[n("strong",[s._v("主写入数据，从读")])]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("主\n127.0.0.1:6380> set name chaoge\n从\n127.0.0.1:6381>get name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("从写数据就报错")])]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("(error) READONLY You can't write against a read only slave.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h4",{attrs:{id:"手动进行主从复制故障切换"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#手动进行主从复制故障切换"}},[s._v("#")]),s._v(" "),n("strong",[s._v("手动进行主从复制故障切换")])]),s._v(" "),n("p",[s._v("模拟如果主redis故障了，将从升级为主")]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("#关闭主库6379\nredis-cli -p 6379\nshutdown\t# 输入shutdown关掉6379的服务器\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("检查从库主从信息，此时状态为master_link_status:down ,成功的话是up")]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("redis-cli -p 6380\ninfo replication\n\nredis-cli -p 6381\ninfo replication\n\n# 主的状态已经为down\nrole:slave\nmaster_host:127.0.0.1\nmaster_port:6379\nmaster_link_status:down\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("p",[n("strong",[s._v("既然主库挂了，我想要在6380 6381之间选一个新的主库")])]),s._v(" "),n("p",[n("strong",[s._v("1.关闭6380的从库身份（关闭之后就是主）")])]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("redis-cli -p 6380\n\ninfo replication\n\nslaveof no one\t# 去掉slaveof从的配置，变成主\n\n127.0.0.1:6380> info replication\n\nrole:master\n...\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[n("strong",[s._v("2.将6381设为6380的从库")])]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("# 6381连接到6380：\n[root@db03 ~]# redis-cli -p 6381\n127.0.0.1:6381> SLAVEOF no one\n127.0.0.1:6381> SLAVEOF 127.0.0.1 6380\n\n127.0.0.1:6380> info replication\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("3.测试")]),s._v(" "),n("p",[n("strong",[s._v("主写入数据，从读")])]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("主\n127.0.0.1:6380> set name chaoge\n从\n127.0.0.1:6381>get name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("strong",[s._v("从写数据就报错")])]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("(error) READONLY You can't write against a read only slave.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("！！！！这个只是通过命令更改，后面还是要改配置脚本")])]),s._v(" "),n("h3",{attrs:{id:"redis-sentinel主从复制高可用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#redis-sentinel主从复制高可用"}},[s._v("#")]),s._v(" "),n("strong",[s._v("redis-sentinel主从复制高可用")])]),s._v(" "),n("p",[s._v("详细资料："),n("a",{attrs:{href:"https://www.cnblogs.com/pyyu/p/9718679.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.cnblogs.com/pyyu/p/9718679.html"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("配置redis主从功能，如果master主挂了，我们可以手动切换从为主。但是手动切换比较麻烦，所以就有redis-sentinel哨兵，给每个redis开启一个进程去监事，如果主master挂了，自动把从切换成主。")]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("Redis-Sentinel是redis官方推荐的高可用性解决方案，\n当用redis作master-slave的高可用时，如果master本身宕机，redis本身或者客户端都没有实现主从切换的功能。\n\n而redis-sentinel就是一个独立运行的进程，用于监控多个master-slave集群，\n自动发现master宕机，进行自动切换slave > master。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("sentinel主要功能如下：")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("不时的监控redis是否良好运行，如果节点不可达就会对节点进行下线标识")])]),s._v(" "),n("li",[n("p",[s._v("如果被标识的是主节点，sentinel就会和其他的sentinel节点“协商”，如果其他节点也人为主节点不可达，就会选举一个sentinel节点来完成自动故障转义")])]),s._v(" "),n("li",[n("p",[s._v("在master-slave进行切换后，master_redis.conf、slave_redis.conf和sentinel.conf的内容都会发生改变，即master_redis.conf中会多一行slaveof的配置，sentinel.conf的监控目标会随之调换")])])]),s._v(" "),n("p",[n("strong",[s._v("Sentinel的工作方式：")])]),s._v(" "),n("div",{staticClass:"language-Plain Text line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[s._v("每个Sentinel以每秒钟一次的频率向它所知的Master，Slave以及其他 Sentinel 实例发送一个 PING 命令\n\n\n如果一个实例（instance）距离最后一次有效回复 PING 命令的时间超过 down-after-milliseconds 选项所指定的值， 则这个实例会被 Sentinel 标记为主观下线。\n\n如果一个Master被标记为主观下线，则正在监视这个Master的所有 Sentinel 要以每秒一次的频率确认Master的确进入了主观下线状态。\n\n当有足够数量的 Sentinel（大于等于配置文件指定的值）在指定的时间范围内确认Master的确进入了主观下线状态， 则Master会被标记为客观下线\n\n在一般情况下， 每个 Sentinel 会以每 10 秒一次的频率向它已知的所有Master，Slave发送 INFO 命令\n\n当Master被 Sentinel 标记为客观下线时，Sentinel 向下线的 Master 的所有 Slave 发送 INFO 命令的频率会从 10 秒一次改为每秒一次\n\n若没有足够数量的 Sentinel 同意 Master 已经下线， Master 的客观下线状态就会被移除。\n\n若 Master 重新向 Sentinel 的 PING 命令返回有效回复， Master 的主观下线状态就会被移除。\n\n主观下线和客观下线\n\n主观下线：Subjectively Down，简称 SDOWN，指的是当前 Sentinel 实例对某个redis服务器做出的下线判断。\n客观下线：Objectively Down， 简称 ODOWN，指的是多个 Sentinel 实例在对Master Server做出 SDOWN 判断，并且通过 SENTINEL is-master-down-by-addr 命令互相交流之后，得出的Master Server下线判断，然后开启failover.\n\nSDOWN适合于Master和Slave，只要一个 Sentinel 发现Master进入了ODOWN， 这个 Sentinel 就可能会被其他 Sentinel 推选出， 并对下线的主服务器执行自动故障迁移操作。\n\nODOWN只适用于Master，对于Slave的 Redis 实例，Sentinel 在将它们判断为下线前不需要进行协商， 所以Slave的 Sentinel 永远不会达到ODOWN。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br")])]),n("p",[n("strong",[s._v("主从复制架构")])]),s._v(" "),n("p",[n("img",{attrs:{src:a(774),alt:""}})]),s._v(" "),n("h4",{attrs:{id:""}},[n("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])])])}),[],!1,null,null,null);n.default=t.exports},773:function(s,n,a){s.exports=a.p+"assets/img/2023052414252819.9be7324d.png"},774:function(s,n,a){s.exports=a.p+"assets/img/2023052414253054.b8410164.png"}}]);