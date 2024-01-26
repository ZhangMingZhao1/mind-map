(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230098"],{eb27:function(s,a,t){"use strict";t.r(a);var n=function(){var s=this;s._self._c;return s._m(0)},l=[function(){var s=this,a=s._self._c;return a("div",[a("h1",[s._v("如何渲染一个大纲")]),a("p",[s._v("思维导图本质就是一颗树，所以你可以使用树组件来完成大纲的显示。")]),a("p",[s._v("可以监听"),a("code",[s._v("data_change")]),s._v("事件来获取当前最新的思维导图数据：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("mindMap.on("),a("span",{staticClass:"hljs-string"},[s._v("'data_change'")]),s._v(", "),a("span",{staticClass:"hljs-function"},[s._v("("),a("span",{staticClass:"hljs-params"},[s._v("data")]),s._v(") =>")]),s._v(" {\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// data数据是不带节点对象的纯数据")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 如果你需要操作节点对象，可以使用mindMap.renderer.renderTree")]),s._v("\n    "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(data, mindMap.renderer.renderTree)\n})\n")])]),a("p",[s._v("通常点击了大纲的某个节点，会将画布定位到该节点并激活该节点，这可以这么做：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" node = data._node\nmindMap.renderer.moveNodeToCenter(node)\nnode.active()\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 在v0.6.7+版本可以这么做：")]),s._v("\nmindMap.execCommand("),a("span",{staticClass:"hljs-string"},[s._v("'GO_TARGET_NODE'")]),s._v(", node)"),a("span",{staticClass:"hljs-comment"},[s._v("// 或者传节点的uid")]),s._v("\n")])]),a("p",[s._v("当在大纲树上编辑了某个节点的内容，需要同步到思维导图树上：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("data._node.setText("),a("span",{staticClass:"hljs-string"},[s._v("'xxx'")]),s._v(")\n")])]),a("p",[s._v("要插入兄弟节点或子节点可以这么操作：")]),a("pre",{staticClass:"hljs"},[a("code",[s._v("mindMap.execCommand("),a("span",{staticClass:"hljs-string"},[s._v("'INSERT_NODE'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(")\nmindMap.execCommand("),a("span",{staticClass:"hljs-string"},[s._v("'INSERT_CHILD_NODE'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(")\n")])]),a("h2",[s._v("进阶")]),a("p",[s._v("要实现一个功能完善的大纲并不容易，下面介绍一下包含定位、编辑、拖拽、删除、单独编辑功能的大纲实现。")]),a("p",[s._v("以"),a("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN/component/tree"}},[s._v("ElementUI Tree组件")]),s._v("为例。")]),a("p",[s._v("实现监听"),a("code",[s._v("data_change")]),s._v("事件来刷新树数据：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { nodeRichTextToTextWithWrap } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map/src/utils'")]),s._v("\n\n"),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.on("),a("span",{staticClass:"hljs-string"},[s._v("'data_change'")]),s._v(", "),a("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" {\n    "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".refresh()\n})\n\n{\n    "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("refresh")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(")")]),s._v(" {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" data = mindMap.getData()"),a("span",{staticClass:"hljs-comment"},[s._v("// 获取思维导图树数据")]),s._v("\n        data.root = "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(" "),a("span",{staticClass:"hljs-comment"},[s._v("// 标记根节点")]),s._v("\n        "),a("span",{staticClass:"hljs-comment"},[s._v("// 遍历树，添加一些属性")]),s._v("\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" walk = "),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("root")]),s._v(" =>")]),s._v(" {\n            "),a("span",{staticClass:"hljs-comment"},[s._v("// 如果是富文本节点，那么调用nodeRichTextToTextWithWrap方法将<p><span></span><p>形式的节点富文本内容转换成\\n换行的文本")]),s._v("\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" text = (root.data.richText\n                ? nodeRichTextToTextWithWrap(root.data.text)\n                : root.data.text\n            ).replaceAll("),a("span",{staticClass:"hljs-regexp"},[s._v("/\\n/g")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("'<br>'")]),s._v(")\n            root.textCache = text "),a("span",{staticClass:"hljs-comment"},[s._v("// 保存一份修改前的数据，用于对比是否修改了")]),s._v("\n            root.label = text"),a("span",{staticClass:"hljs-comment"},[s._v("// 用于树组件渲染")]),s._v("\n            root.uid = root.data.uid"),a("span",{staticClass:"hljs-comment"},[s._v("// 用于树组件渲染")]),s._v("\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (root.children && root.children.length > "),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(") {\n                root.children.forEach("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("item")]),s._v(" =>")]),s._v(" {\n                    walk(item)\n                })\n            }\n        }\n        walk(data)\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".data = [data]"),a("span",{staticClass:"hljs-comment"},[s._v("// 赋值给树组件")]),s._v("\n    }\n}\n")])]),a("p",[s._v("模板如下：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("el-tree")]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v("ref")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"tree"')]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v("node-key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"uid"')]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v("draggable")]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v("default-expand-all")]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v(":data")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"data"')]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v(":highlight-current")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v(":expand-on-click-node")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"false"')]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v(":allow-drag")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"checkAllowDrag"')]),s._v("\n    @"),a("span",{staticClass:"hljs-attr"},[s._v("node-drop")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"onNodeDrop"')]),s._v("\n    @"),a("span",{staticClass:"hljs-attr"},[s._v("current-change")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"onCurrentChange"')]),s._v("\n    @"),a("span",{staticClass:"hljs-attr"},[s._v("mouseenter.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"isInTreArea = true"')]),s._v("\n    @"),a("span",{staticClass:"hljs-attr"},[s._v("mouseleave.native")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"isInTreArea = false"')]),s._v("\n>")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v("\n        "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"customNode"')]),s._v("\n        "),a("span",{staticClass:"hljs-attr"},[s._v("slot-scope")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"{ node, data }"')]),s._v("\n        "),a("span",{staticClass:"hljs-attr"},[s._v(":data-id")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"data.uid"')]),s._v("\n        @"),a("span",{staticClass:"hljs-attr"},[s._v("click")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"onClick(data)"')]),s._v("\n    >")]),s._v("\n        "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v("\n            "),a("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"nodeEdit"')]),s._v("\n            "),a("span",{staticClass:"hljs-attr"},[s._v("contenteditable")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v("\n            "),a("span",{staticClass:"hljs-attr"},[s._v(":key")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"getKey()"')]),s._v("\n            @"),a("span",{staticClass:"hljs-attr"},[s._v("keydown.stop")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"onNodeInputKeydown($event, node)"')]),s._v("\n            @"),a("span",{staticClass:"hljs-attr"},[s._v("keyup.stop")]),s._v("\n            @"),a("span",{staticClass:"hljs-attr"},[s._v("blur")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"onBlur($event, node)"')]),s._v("\n            @"),a("span",{staticClass:"hljs-attr"},[s._v("paste")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"onPaste($event, node)"')]),s._v("\n            "),a("span",{staticClass:"hljs-attr"},[s._v("v-html")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"node.label"')]),s._v("\n        >")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("span")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("el-tree")]),s._v(">")]),s._v("\n")])]),a("h3",[s._v("定位节点")]),a("p",[s._v("给节点绑定了一个"),a("code",[s._v("click")]),s._v("事件用于在画布内定位点击的节点，可以调用思维导图的相关方法实现：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-comment"},[s._v("// 激活当前节点且移动当前节点到画布中间")]),s._v("\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("onClick")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("data")]),s._v(")")]),s._v(" {\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 根据uid知道思维导图节点对象")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" targetNode = "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.renderer.findNodeByUid(data.uid)\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 如果当前已经是激活状态，那么上面都不做")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (targetNode && targetNode.nodeData.data.isActive) "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 思维导图节点激活时默认会聚焦到内部创建的一个隐藏输入框中，`stopFocusOnNodeActive`方法是用于关闭这个特性，因为我们想把焦点留在大纲的输入框中")]),s._v("\n    "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.renderer.textEdit.stopFocusOnNodeActive()\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 定位到目标节点")]),s._v("\n    "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.execCommand("),a("span",{staticClass:"hljs-string"},[s._v("'GO_TARGET_NODE'")]),s._v(", data.uid, "),a("span",{staticClass:"hljs-function"},[s._v("() =>")]),s._v(" {\n        "),a("span",{staticClass:"hljs-comment"},[s._v("// 定位完成后再开启前面关闭的特性")]),s._v("\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.renderer.textEdit.openFocusOnNodeActive()\n    })\n}\n")])]),a("h3",[s._v("编辑")]),a("p",[s._v("我们通过自定义树节点内容渲染了一个"),a("code",[s._v("contenteditable=true")]),s._v("的标签用于输入文本，然后在"),a("code",[s._v("blur")]),s._v("事件中修改节点文本：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { textToNodeRichTextWithWrap } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map/src/utils'")]),s._v("\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 失去焦点更新节点文本")]),s._v("\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("onBlur")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("e, node")]),s._v(")")]),s._v(" {\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 节点数据没有修改那么什么也不用做")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (node.data.textCache === e.target.innerHTML) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n    }\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 根据是否是富文本模式获取不同的文本数据")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" richText = node.data.data.richText\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" text = richText ? e.target.innerHTML : e.target.innerText\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" targetNode = "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.renderer.findNodeByUid(node.data.uid)\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!targetNode) "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (richText) {\n        "),a("span",{staticClass:"hljs-comment"},[s._v("// 如果是富文本节点，那么需要先调用textToNodeRichTextWithWrap方法将<br>换行的文本转换成<p><span></span><p>形式的节点富文本内容")]),s._v("\n        "),a("span",{staticClass:"hljs-comment"},[s._v("// 第二个参数代表设置的是富文本内容")]),s._v("\n        "),a("span",{staticClass:"hljs-comment"},[s._v("// 第三个参数指定要重置富文本节点的样式")]),s._v("\n        targetNode.setText(textToNodeRichTextWithWrap(text), "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(")\n    } "),a("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {\n        targetNode.setText(text)\n    }\n}\n")])]),a("h3",[s._v("拖拽")]),a("p",[s._v("设置了"),a("code",[s._v("draggable")]),s._v("属性即可开启拖拽，首先根节点是不允许拖拽的，所以通过"),a("code",[s._v("allow-drag")]),s._v("属性传入一个判断方法：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-comment"},[s._v("// 根节点不允许拖拽")]),s._v("\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("checkAllowDrag")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("node")]),s._v(")")]),s._v(" {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" !node.data.root\n}\n")])]),a("p",[s._v("然后监听拖拽完成事件"),a("code",[s._v("node-drop")]),s._v("来实现画布内节点的调整：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-comment"},[s._v("// 拖拽结束事件")]),s._v("\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("onNodeDrop")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("data, target, position")]),s._v(")")]),s._v(" {\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 被拖拽的节点")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" node = "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.renderer.findNodeByUid(data.data.uid)\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 拖拽到的目标节点")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" targetNode = "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.renderer.findNodeByUid(target.data.uid)\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!node || !targetNode) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n    }\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 根据不同拖拽的情况调用不同的方法")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("switch")]),s._v(" (position) {\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("case")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'before'")]),s._v(":\n            "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.execCommand("),a("span",{staticClass:"hljs-string"},[s._v("'INSERT_BEFORE'")]),s._v(", node, targetNode)\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("break")]),s._v("\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("case")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'after'")]),s._v(":\n            "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.execCommand("),a("span",{staticClass:"hljs-string"},[s._v("'INSERT_AFTER'")]),s._v(", node, targetNode)\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("break")]),s._v("\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("case")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'inner'")]),s._v(":\n            "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.execCommand("),a("span",{staticClass:"hljs-string"},[s._v("'MOVE_NODE_TO'")]),s._v(", node, targetNode)\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("break")]),s._v("\n        "),a("span",{staticClass:"hljs-attr"},[s._v("default")]),s._v(":\n            "),a("span",{staticClass:"hljs-keyword"},[s._v("break")]),s._v("\n    }\n}\n")])]),a("h3",[s._v("删除节点")]),a("p",[s._v("首先通过树组件的"),a("code",[s._v("current-change")]),s._v("事件来保存当前高亮的树节点：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-comment"},[s._v("// 当前选中的树节点变化事件")]),s._v("\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("onCurrentChange")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("data")]),s._v(")")]),s._v(" {\n    "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".currentData = data\n}\n")])]),a("p",[s._v("然后通过监听"),a("code",[s._v("keydown")]),s._v("事件来完成删除节点的操作：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".addEventListener("),a("span",{staticClass:"hljs-string"},[s._v("'keydown'")]),s._v(", "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".onKeyDown)\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 删除节点")]),s._v("\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("onKeyDown")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v(" {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (["),a("span",{staticClass:"hljs-number"},[s._v("46")]),s._v(", "),a("span",{staticClass:"hljs-number"},[s._v("8")]),s._v("].includes(e.keyCode) && "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".currentData) {\n        e.stopPropagation()\n        "),a("span",{staticClass:"hljs-comment"},[s._v("// 处理当前正在编辑节点内容时删除的情况")]),s._v("\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.renderer.textEdit.hideEditTextBox()\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" node = "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.renderer.findNodeByUid("),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".currentData.uid)\n        "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (node && !node.isRoot) {\n            "),a("span",{staticClass:"hljs-comment"},[s._v("// 首先从树里删除")]),s._v("\n            "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".$refs.tree.remove("),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".currentData)\n            "),a("span",{staticClass:"hljs-comment"},[s._v("// 然后从画布里删除")]),s._v("\n            "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.execCommand("),a("span",{staticClass:"hljs-string"},[s._v("'REMOVE_NODE'")]),s._v(", [node])\n        }\n    }\n}\n")])]),a("h3",[s._v("创建新节点")]),a("p",[s._v("通过监听节点内容编辑框的"),a("code",[s._v("keydown")]),s._v("事件来完成添加新节点的操作：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { createUid } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map/src/utils'")]),s._v("\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 节点输入区域按键事件")]),s._v("\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("onNodeInputKeydown")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v(" {\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 回车键添加同级节点")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (e.keyCode === "),a("span",{staticClass:"hljs-number"},[s._v("13")]),s._v(" && !e.shiftKey) {\n        e.preventDefault()\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".insertNode()\n    }\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// tab键添加子节点")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (e.keyCode === "),a("span",{staticClass:"hljs-number"},[s._v("9")]),s._v(") {\n        e.preventDefault()\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".insertChildNode()\n    }\n}\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 插入兄弟节点")]),s._v("\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("insertNode")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(")")]),s._v(" {\n    "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.execCommand("),a("span",{staticClass:"hljs-string"},[s._v("'INSERT_NODE'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(", [], {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("uid")]),s._v(": createUid()\n    })\n}\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 插入下级节点")]),s._v("\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("insertChildNode")]),s._v("("),a("span",{staticClass:"hljs-params"}),s._v(")")]),s._v(" {\n    "),a("span",{staticClass:"hljs-built_in"},[s._v("this")]),s._v(".mindMap.execCommand("),a("span",{staticClass:"hljs-string"},[s._v("'INSERT_CHILD_NODE'")]),s._v(", "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(", [], {\n        "),a("span",{staticClass:"hljs-attr"},[s._v("uid")]),s._v(": createUid()\n    })\n}\n")])]),a("h3",[s._v("拦截输入框的粘贴操作")]),a("p",[s._v("为什么要拦截输入框的粘贴操作，因为用户可能粘贴的是富文本内容，也就是带html标签的，但是一般我们都不希望用户粘贴这种内容，只允许粘贴纯文本，所以我们要拦截粘贴事件，处理一下用户粘贴的内容：")]),a("pre",{staticClass:"hljs"},[a("code",[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { getTextFromHtml } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'simple-mind-map/src/utils'")]),s._v("\n\n"),a("span",{staticClass:"hljs-comment"},[s._v("// 拦截粘贴事件")]),s._v("\n"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-title"},[s._v("onPaste")]),s._v("("),a("span",{staticClass:"hljs-params"},[s._v("e")]),s._v(")")]),s._v(" {\n    e.preventDefault()\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" selection = "),a("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".getSelection()\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!selection.rangeCount) "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v("\n    selection.deleteFromDocument()"),a("span",{staticClass:"hljs-comment"},[s._v("// 删除当前选区，也就是如果当前用户在输入框中选择了一些文本，会被删除")]),s._v("\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 从剪贴板里取出文本数据")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("let")]),s._v(" text = e.clipboardData.getData("),a("span",{staticClass:"hljs-string"},[s._v("'text'")]),s._v(")\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 调用库提供的getTextFromHtml方法去除格式")]),s._v("\n    text = getTextFromHtml(text)\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 去除换行")]),s._v("\n    text = text.replaceAll("),a("span",{staticClass:"hljs-regexp"},[s._v("/\\n/g")]),s._v(", "),a("span",{staticClass:"hljs-string"},[s._v("''")]),s._v(")\n    "),a("span",{staticClass:"hljs-comment"},[s._v("// 创建文本节点添加到当前选区")]),s._v("\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" node = "),a("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".createTextNode(text)\n    selection.getRangeAt("),a("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(").insertNode(node)\n    selection.collapseToEnd()\n}\n")])]),a("p",[s._v("到这里基本功能就都完成了，是不是觉得挺简单的？核心原理和操作确实很简单，麻烦的是各种情况和冲突的处理，比如焦点的冲突、快捷键的冲突、操作的时间顺序等等，所以务必先阅读一下完整的源码"),a("a",{attrs:{href:"https://github.com/wanglin2/mind-map/blob/main/web/src/pages/Edit/components/Outline.vue"}},[s._v("Outline.vue")]),s._v("。")])])}],e={},_=e,i=t("2877"),v=Object(i["a"])(_,n,l,!1,null,null,null);a["default"]=v.exports}}]);