(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1007:function(t,r,a){"use strict";a.r(r);var s=a(4),e=Object(s.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"_9-并发编程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-并发编程"}},[t._v("#")]),t._v(" 9. 并发编程")]),t._v(" "),r("p",[r("a",{attrs:{href:"http://c.biancheng.net/golang/concurrent/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Go语言并发，Golang并发"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),r("p",[t._v("有人把Go语言比作 21 世纪的C语言，第一是因为Go语言设计简单，第二则是因为 21 世纪最重要的就是并发程序设计，而 Go 从语言层面就支持并发。同时实现了自动垃圾回收机制。")]),t._v(" "),r("p",[t._v("Go语言的并发机制运用起来非常简便，在启动并发的方式上直接添加了语言级的关键字就可以实现，和其他编程语言相比更加轻量。")]),t._v(" "),r("h2",{attrs:{id:"程序-program"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#程序-program"}},[t._v("#")]),t._v(" 程序(program)")]),t._v(" "),r("p",[t._v("是为完成特定任务、用某种语言编写的一组指令的集合,是一段静态的代码。 （程序是静态的）")]),t._v(" "),r("h2",{attrs:{id:"进程-process"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#进程-process"}},[t._v("#")]),t._v(" 进程(process)")]),t._v(" "),r("p",[t._v("是程序的一次执行过程。正在运行的一个程序，进程作为资源分配的单位，在内存中会为每个进程分配不同的内存区域。 （进程是动态的）是一个动的过程 ，进程的生命周期 : 有它自身的产生、存在和消亡的过程")]),t._v(" "),r("p",[r("strong",[t._v("进程是程序在操作系统中的一次执行过程，系统进行资源分配和调度的一个独立单位")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(650),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"线程-thread"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#线程-thread"}},[t._v("#")]),t._v(" 线程(thread)")]),t._v(" "),r("p",[t._v("线程是进程的一个执行实体，是 CPU 调度和分派的基本单位，它是比进程更小的能独立运行的基本单位。")]),t._v(" "),r("p",[t._v("一个进程可以创建和撤销多个线程，同一个进程中的多个线程之间可以并协程(goroutine发执行。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(651),alt:""}})]),t._v(" "),r("h2",{attrs:{id:"协程-goroutine"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#协程-goroutine"}},[t._v("#")]),t._v(" 协程(goroutine)")]),t._v(" "),r("p",[t._v("又称为微线程，纤程，协程是一种用户态的轻量级线程（一个线程有多个协程，协程不是真正意义上存在的，是程序员编写出来的比如多个函数交替执行遇到io耗时操作自动切换）")]),t._v(" "),r("p",[t._v("作用:在执行A函数的时候，可以随时中断，去执行B函数，然后中断继续执行A函数(可以自动切换)，注意这一切换过程并不是函数调用（没有调用语句)，过程很像多线程，然而协程中只有一个线程在执行（协程的本质是个单线程）")]),t._v(" "),r("p",[r("img",{attrs:{src:a(652),alt:""}})]),t._v(" "),r("p",[t._v("对于单线程下，我们不可避免程序中出现io操作，但如果我们能在自己的程序中(即用户程序级别，而非操作系统级别)控制单线程下的多个任务能在一个任务遇到io阻塞时就将寄存器上下文和栈保存到某个其他地方，然后切换到另外一个任务去计算。在任务切回来的时候，恢复先前保存的寄存器上下文和栈，这样就保证了该线程能够最大限度地处于就绪态，即随时都可以被cpu执行的状态，相当于我们在用户程序级别将自己的io操作最大限度地隐藏起来，从而可以迷惑操作系统，让其看到：该线程好像是一直在计算，io比较少，从而会更多的将cpu的执行权限分配给我们的线程（注意:线程是CPU控制的，而协程是程序自身控制的，属于程序级别的切换，操作系统完全感知不到，因而更加轻量级)")]),t._v(" "),r("h2",{attrs:{id:"并发-并行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#并发-并行"}},[t._v("#")]),t._v(" "),r("strong",[t._v("并发/并行")])]),t._v(" "),r("p",[r("strong",[t._v("多线程程序在单核心的 cpu 上运行，称为并发。")])]),t._v(" "),r("p",[r("strong",[t._v("多线程程序在多核心的 cpu 上运行，称为并行。")])]),t._v(" "),r("p",[t._v("并发与并行并不相同，并发主要由切换时间片来实现“同时”运行，并行则是直接利用多核实现多线程的运行，Go程序可以设置使用核心数，以发挥多核计算机的能力。")]),t._v(" "),r("p",[r("img",{attrs:{src:a(653),alt:""}})])])}),[],!1,null,null,null);r.default=e.exports},650:function(t,r,a){t.exports=a.p+"assets/img/2023052411061821.60debedb.png"},651:function(t,r,a){t.exports=a.p+"assets/img/2023052411062029.0af6b528.png"},652:function(t,r,a){t.exports=a.p+"assets/img/202305241106219.d2bffe40.png"},653:function(t,r,a){t.exports=a.p+"assets/img/2023052411062286.4bea78fe.png"}}]);