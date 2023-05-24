(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1237:function(t,r,e){"use strict";e.r(r);var o=e(4),s=Object(o.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"kubernets几种端口-port、targetport、contaierport、hostport、nodeport-的区别和关联"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernets几种端口-port、targetport、contaierport、hostport、nodeport-的区别和关联"}},[t._v("#")]),t._v(" "),r("strong",[t._v("kubernets几种端口(port、targetport、contaierport、hostport、nodeport)的区别和关联")])]),t._v(" "),r("p",[t._v("1.这两个一般用在应用"),r("a",{attrs:{href:"https://so.csdn.net/so/search?q=yaml&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("yaml"),r("OutboundLink")],1),t._v("描述文件中,起到的作用类似于docker -p选项")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("containerport: 容器需要暴露的端口，service的targetPort会映射到pod里的这个containerPort。")])]),t._v(" "),r("li",[r("p",[t._v("hostport: 容器暴露的"),r("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("端口映射"),r("OutboundLink")],1),t._v("到的物理机的主机端口。")])])]),t._v(" "),r("p",[t._v("2.这两个一般用在service中，service 的类型为cluster ip时候:")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("port: service中clusterip 对应的端口")])]),t._v(" "),r("li",[r("p",[t._v("targetport: clusterIP作为"),r("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("负载均衡"),r("OutboundLink")],1),t._v("， 后端目标实例(容器)的端口。targetPort对应pod里的containerPort。")])])]),t._v(" "),r("p",[t._v("3.这一个一般用在service中，service的类型为nodeport:cluster ip 只能集群内部访问(源与目标需要满足两个条件: kube-proxy正常运行，跨主机容器网络通信正常)，nodeport会在每个kubelet节点的宿主机开启一个端口，用于应用集群外部访问。")]),t._v(" "),r("p",[t._v("4.hostport和nodeport的区别？")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("(1)hostport是将pod的端口映射到宿主机上。")])]),t._v(" "),r("li",[r("p",[t._v("(2)nodeport是将service的端口映射到集群中的每个宿主机上。")])])]),t._v(" "),r("p",[t._v("关于端口的总结")]),t._v(" "),r("p",[t._v("快速总结一下哪些端口和标签应该匹配：")]),t._v(" "),r("p",[t._v("Service selector 应该和 Pod 的标签匹配；")]),t._v(" "),r("p",[t._v("Service 的 targetPort 应该和 Pod 里面容器的 containerPort 匹配；")]),t._v(" "),r("p",[t._v("Service 端口可以是任意数字。多个 Service 可以使用同一个端口，因为不同的 Service 分配的 IP 地址不同；")]),t._v(" "),r("p",[t._v("Ingress 的 service.port 应该和 Service 的 port 匹配；")]),t._v(" "),r("p",[t._v("Service 的名称应该和 Ingress 中 service.name 字段匹配；")]),t._v(" "),r("h2",{attrs:{id:"port"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" port")]),t._v(" "),r("p",[t._v("port是k8s集群内部访问service的端口，即通过clusterIP: port可以访问到某个service")]),t._v(" "),r("h2",{attrs:{id:"nodeport"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#nodeport"}},[t._v("#")]),t._v(" nodePort")]),t._v(" "),r("p",[t._v("nodePort是外部访问k8s集群中service的端口，通过nodeIP: nodePort可以从外部访问到某个service。")]),t._v(" "),r("h2",{attrs:{id:"hostport"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hostport"}},[t._v("#")]),t._v(" hostport")]),t._v(" "),r("p",[t._v("容器暴露的"),r("a",{attrs:{href:"https://so.csdn.net/so/search?q=%E7%AB%AF%E5%8F%A3%E6%98%A0%E5%B0%84&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("端口映射"),r("OutboundLink")],1),t._v("到的物理机的主机端口。")]),t._v(" "),r("h2",{attrs:{id:"targetport"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#targetport"}},[t._v("#")]),t._v(" targetPort")]),t._v(" "),r("p",[t._v("targetPort是pod的端口，从port和nodePort来的流量经过kube-proxy流入到后端pod的targetPort上，最后进入容器。")]),t._v(" "),r("h2",{attrs:{id:"containerport"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#containerport"}},[t._v("#")]),t._v(" containerPort")]),t._v(" "),r("p",[t._v("containerPort是pod内部容器的端口，targetPort映射到containerPort。")]),t._v(" "),r("p",[t._v("图解")]),t._v(" "),r("p",[r("img",{attrs:{src:e(791),alt:""}})]),t._v(" "),r("hr"),t._v(" "),r("p",[t._v("K8S配置中的port、targetPort、nodePort和containerPort区别\n"),r("a",{attrs:{href:"https://blog.51cto.com/wutengfei/2482187",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.51cto.com/wutengfei/2482187"),r("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=s.exports},791:function(t,r,e){t.exports=e.p+"assets/img/2023052415035380.d2916f3f.png"}}]);