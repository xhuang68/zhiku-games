webpackJsonp([1],{LicG:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i("SbZC"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("C7Lr")({name:"App"},n,!1,function(t){i("Raw3")},null,null).exports,a=i("KGCO"),l=i("HzJ8"),o=i.n(l),c={name:"HelloWorld",data:function(){return{questions:[],selectionArray:[],currentIndex:0,personaBar:1e3,form:{bar:1e3},dialogFormVisible:!1,dialogResultVisible:!1,personas:[{title:"脑洞萌新",description:"脑洞清奇，不按部就班，创意层出不穷！不过偶尔有些想法过于天马行空，但都是为了将想法表达出来。我可不敢保证创意点点都新奇，但不管在团队还是在生活中都是大家所崇拜的创意小能手！\n动如脱兔，静如处子，在聚会上疯癫成魔，传说中的麦霸。不过一旦工作需要全力以赴，是绝不会哔哔一句闲话，撸起袖子就干！"},{title:"驾轻就熟",description:"进退自如，什么事儿都不是事儿，超强的逻辑思维能力让人害怕。处理起职场复杂的人际关系游刃有余，为人理性，淡定的面对蛋疼的琐事。最可怕的是那令人战栗的自觉！\n万众瞩目，从不轻易表现，一表现就让小伙伴感到压力山大，古今中外无所不知，不过做人还是要给别人留口饭！"},{title:"坚韧不拔",description:"勇而不莽，做事的眼光总是能比他人长远，换句话说别人只能想到今天晚上吃什么你却连明天早上吃什么都想好了。在面对爆炸的工作量时，坚定相信它会一件一件的做完！\n意志坚定，一旦有明确的做事目标之后，能雷打不动的坐在那里工作十个小时以上，常常让人怀疑不是凡人，对于自律性极差的人是一律不约！"},{title:"追逐真理",description:"超凡洒脱，出淤泥而不染，不过说直白一点就是不谙世事，直脑筋，在处理关系上是耿直Boy，什么面子关系简直是无法接受。\n荣辱不惊，闻风不动，可能天上真的掉钱了都是不捡，心中只有佛主。注定在工作生活只要认定的事，不管多困难都是不达目的誓不罢休。"},{title:"不耻下问",description:"敏而好学，不会局限于已知的事物，对于新奇的知识具有探索精神。一心只想把新东西吃到肚子里。在工作生活中只要能学到新东西，二话不说立马开做！\n真诚坦率，朋友多到数不清，性格又好为人真诚，对于能帮的忙是不遗余力的帮助别人，但对于看不惯的事是一秒都不能忍，刚到让人觉得精分。"}],characters:[{title:"技术精英"},{title:"质量保卫"},{title:"营销大师"},{title:"生产能手"},{title:"管理天才"},{title:"全能高手"}]}},computed:{userResult:function(){var t=[],e={title:"无",weight:0};for(var i in this.personaScore)this.personaScore[i]>e.weight&&(e.title=i,e.weight=this.personaScore[i]),this.personaScore[i]>=this.personaBar&&t.push(i);return console.log(t),t.length>0?t.join(", "):e.title},descriptionResult:function(){var t=this,e=this.personas.filter(function(e){return e.title===t.personaResult});return e.length>0?e[0].description:"暂无"},personaResult:function(){var t={title:"什么样",weight:0};for(var e in this.personaScore)this.personaScore[e]>t.weight&&(t.title=e,t.weight=this.personaScore[e]);return t.title},characterResult:function(){var t={title:"谁谁谁",weight:0};for(var e in this.characterScore)this.characterScore[e]>t.weight&&(t.title=e,t.weight=this.characterScore[e]);return t.title},personaArray:function(){var t=this;return this.selectionArray.map(function(e,i){if(0===e.length)return[];var r=t.questions[i].answers;if(t.questions[i].multiple){var n=[],s=!0,a=!1,l=void 0;try{for(var c,u=o()(e);!(s=(c=u.next()).done);s=!0){var h=c.value,f=r.filter(function(t,e){return t.title===h});n.push(f[0])}}catch(t){a=!0,l=t}finally{try{!s&&u.return&&u.return()}finally{if(a)throw l}}return n.map(function(t){return t.persona_map.filter(function(t){return t.weight>0})}).flat()}return(n=r.filter(function(t,i){return t.title===e})).length<=0?[]:n[0].persona_map.filter(function(t){return t.weight>0})})},characterArray:function(){var t=this;return this.selectionArray.map(function(e,i){if(0===e.length)return[];var r=t.questions[i].answers;if(t.questions[i].multiple){var n=[],s=!0,a=!1,l=void 0;try{for(var c,u=o()(e);!(s=(c=u.next()).done);s=!0){var h=c.value,f=r.filter(function(t,e){return t.title===h});n.push(f[0])}}catch(t){a=!0,l=t}finally{try{!s&&u.return&&u.return()}finally{if(a)throw l}}return n.map(function(t){return t.character_map.filter(function(t){return t.weight>0})}).flat()}return(n=r.filter(function(t,i){return t.title===e})).length<=0?[]:n[0].character_map.filter(function(t){return t.weight>0})})},personaScore:function(){var t={};return this.personaArray.flat().map(function(e,i){t[e.title]||(t[e.title]=0),t[e.title]+=e.weight}),t},characterScore:function(){var t={};return this.characterArray.flat().map(function(e,i){t[e.title]||(t[e.title]=0),t[e.title]+=e.weight}),t}},created:function(){this.questions=this.initData(this.initMatrix()),this.initScore()},methods:{initMatrix:function(){return[["你认为哪种特质更能描述自己？",!1,["热情和敏感",[100,0,0,0,100],[0,0,100,100,0,100]],["逻辑和坚持",[0,0,100,100,0],[100,100,0,0,100,0]],["友善和开朗",[100,100,0,0,0],[0,0,100,0,100,100]],["冷静和沉稳",[0,100,100,0,0],[100,100,0,100,0,0]]],["单位组织外出活动时，你更愿意担任什么样的角色？",!1,["掌控局势的组织者",[0,100,100,0,0],[0,0,100,0,100,0]],["细心付出的志愿者",[0,0,100,0,100],[100,100,0,100,0,0]],["活跃气氛的协调者",[100,100,0,0,0],[0,0,100,0,0,100]],["听从安排的参与者",[0,0,0,100,100],[100,100,0,0,0,0]]],["平时工作之余更喜欢做些什么？",!1,["保持工作热情，继续专业研究",[0,0,100,100,0],[100,0,0,100,0,0]],["学习各种技能，丰富自己兴趣",[100,0,0,0,100],[0,0,100,0,100,100]],["与朋友聚餐、外出活动",[0,100,0,0,100],[0,0,100,0,100,0]],["听歌、看电影、玩游戏，放松心情",[100,0,0,100,0],[100,0,0,0,0,100]],["睡觉、发呆，补充能量",[0,100,100,0,0],[100,100,0,0,0,0]],["运动健身，出汗排毒",[100,0,100,0,0],[0,100,0,100,0,0]]],["平时看新闻或者读书的时候比较关注哪方面的内容？（多选）",!0,["行业相关专业内容",[0,0,100,100,100],[100,100,0,0,0,0]],["数码科技",[100,100,0,0,100],[0,0,100,100,0,0]],["体育娱乐",[100,100,0,0,0],[0,0,100,0,0,100]],["金融财经",[100,0,0,100,0],[0,0,0,0,100,100]],["政治军事",[0,100,100,0,0],[0,100,100,0,0,0]],["社会",[100,100,100,0,0],[0,0,0,0,0,100]],["哲学",[100,0,0,100,100],[100,0,0,0,100,0]],["自然科学",[0,0,100,100,100],[100,0,0,100,0,0]],["企业管理",[0,100,100,100,0],[0,100,0,0,100,0]]],["你对自己的职业规划是否清晰？",!1,["非常清晰，有对未来的长期规划",[0,100,100,100,0],[0,0,0,0,100,0]],["清晰，有相对明确的长期规划",[0,100,100,0,0],[100,100,0,0,0,0]],["不太清晰，只有短期的目标",[100,0,0,0,100],[0,0,0,100,0,0]],["比较渺茫，希望获得更多指引",[100,0,0,0,0],[0,0,100,0,0,0]]],["请选择你最关注的行业关键词（多选）",!0,["研究开发",[100,0,0,100,0],[100,0,0,0,0,0]],["申报注册",[0,0,100,0,100],[100,0,0,0,0,0]],["一致性评价",[0,0,100,100,0],[100,0,0,0,0,0]],["生产运营",[0,100,100,0,0],[0,0,0,100,100,0]],["物料管理",[0,100,0,0,0],[0,0,0,100,100,0]],["中药饮片",[0,0,100,0,0],[0,0,0,100,0,100]],["中药制剂",[0,0,100,0,0],[0,0,0,100,0,100]],["原料药",[0,0,100,0,0],[0,0,0,100,0,100]],["无菌制剂",[0,0,100,0,0],[0,0,0,100,0,100]],["非无菌制剂",[0,0,100,0,0],[0,0,0,100,0,100]],["生物制品",[100,0,0,0,0],[0,0,0,100,0,100]],["兽药",[0,0,100,0,100],[0,0,0,100,0,100]],["设备设施",[0,100,0,100,0],[100,0,100,0,0,0]],["工程设计",[100,0,100,0,100],[100,0,0,0,0,0]],["公用系统",[0,0,100,100,0],[100,0,0,0,0,0]],["工程管理",[100,100,0,0,0],[100,0,0,0,100,0]],["法律法规",[0,0,100,100,0],[0,100,0,0,0,0]],["GMP",[0,100,0,100,100],[0,100,0,0,0,0]],["GSP",[0,100,0,100,100],[0,100,0,0,0,0]],["质量管理",[0,100,100,100,0],[0,100,0,0,100,0]],["信息化",[100,0,0,0,100],[100,0,0,0,0,100]],["自动化",[100,0,0,0,100],[100,0,0,0,0,100]],["智慧药厂",[100,100,0,0,0],[100,0,0,0,100,0]],["医药投资",[0,100,100,100,0],[0,0,0,0,100,100]],["医疗器械",[0,100,0,0,100],[0,0,100,0,0,100]]],["请选择你最感兴趣的行业内容（多选）",!0,["行业资讯",[100,0,0,0,0],[100,0,0,0,100,0]],["新闻",[100,0,0,0,0],[0,0,100,0,0,100]],["法律法规",[0,100,0,0,0],[0,100,0,100,0,0]],["大咖解读",[0,0,100,0,0],[100,0,0,100,0,0]],["科普",[0,0,0,100,0],[0,0,0,0,100,100]],["在线课程",[0,0,0,0,100],[100,0,100,0,0,0]],["行业热点",[100,0,0,0,0],[0,0,0,100,0,100]],["论文文献",[0,0,0,100,0],[100,100,0,0,0,0]]],["性别",!1,["男",[0,100,0,0,0],[100,0,0,100,0,0]],["女",[100,0,0,0,0],[0,100,0,0,100,0]]],["年龄",!1,["20岁以下",[100,0,0,0,100],[0,0,0,100,0,0]],["21-35岁",[0,100,0,0,100],[100,0,100,0,0,0]],["36-50岁",[0,0,100,0,0],[100,100,0,0,0,0]],["50岁以上",[0,0,0,100,0],[0,0,0,0,100,100]]],["目前的工作岗位",!1,["技术研发相关",[100,0,0,100,0],[200,0,0,0,0,0]],["生产管理相关",[0,100,100,0,0],[0,0,0,200,0,0]],["质量保障相关",[0,0,100,100,0],[0,200,0,0,0,0]],["仓储采购相关",[0,100,0,100,0],[0,0,0,0,0,200]],["市场销售相关",[0,100,0,0,100],[0,0,200,0,0,0]],["财务行政相关",[100,100,0,0,0],[0,0,0,0,200,0]],["相关专业学生",[100,0,0,0,100],[200,0,0,0,0,0]]]]},initData:function(t){for(var e=[],i=0;i<t.length;i++){for(var r=t[i],n={},s=[],a=0;a<r.length;a++)if(0===a&&(n.title=r[a]),1===a&&(n.multiple=r[a]),a>1){for(var l=r[a],o={},c=0;c<l.length;c++){if(0===c&&(o.title=l[c]),1===c){var u={0:"脑洞萌新",1:"驾轻就熟",2:"坚韧不拔",3:"追逐真理",4:"不耻下问"},h=l[c].map(function(t,e){return{title:u[e],weight:t}});o.persona_map=h}if(2===c){var f={0:"技术精英",1:"质量保卫",2:"营销大师",3:"生产能手",4:"管理天才",5:"全能高手"},v=l[c].map(function(t,e){return{title:f[e],weight:t}});o.character_map=v}}s.push(o)}n.answers=s,e.push(n)}return e},initScore:function(){var t=this;this.questions.map(function(e,i){e.multiple?t.selectionArray.push([]):t.selectionArray.push("")})},handleCancel:function(){this.form.bar=this.personaBar,this.dialogFormVisible=!1},handleConfirm:function(){this.personaBar=this.form.bar,this.dialogFormVisible=!1},handleRefresh:function(){this.questions=this.initData(this.initMatrix()),this.selectionArray=[],this.initScore(),this.currentIndex=0}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"center"},[i("div",{staticClass:"form"},[i("div",{staticClass:"title"},[t._v("\n      智库测试 Demo "),i("el-button",{attrs:{size:"mini",type:"text"},on:{click:t.handleRefresh}},[i("i",{staticClass:"el-icon-refresh"})])],1),t._v(" "),i("div",{},[i("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("编辑阈值")])],1),t._v(" "),t._l(t.questions,function(e,r){return r===t.currentIndex?i("div",{key:e.title},[i("div",{staticClass:"question"},[t._v("\n        "+t._s(r+1+". "+e.title)+"\n      ")]),t._v(" "),e.multiple?i("div",{staticClass:"checkbox"},[i("el-checkbox-group",{model:{value:t.selectionArray[r],callback:function(e){t.$set(t.selectionArray,r,e)},expression:"selectionArray[index]"}},t._l(e.answers,function(t){return i("el-checkbox",{key:t.title,staticStyle:{"margin-top":"10px"},attrs:{label:t.title,border:""}})}),1)],1):i("div",{staticClass:"radio"},t._l(e.answers,function(e){return i("el-radio",{key:e.title,staticStyle:{"margin-top":"10px"},attrs:{label:e.title,border:""},model:{value:t.selectionArray[r],callback:function(e){t.$set(t.selectionArray,r,e)},expression:"selectionArray[index]"}},[t._v("\n          "+t._s(e.title)+"\n        ")])}),1),t._v(" "),i("div",{staticClass:"buttons"},[i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex>0,expression:"currentIndex>0"}],attrs:{size:"small"},on:{click:function(e){t.currentIndex--}}},[t._v("上一题")]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex<t.questions.length-1,expression:"currentIndex<questions.length-1"}],attrs:{size:"small",type:"primary",disabled:0===t.selectionArray[r].length},on:{click:function(e){t.currentIndex++}}},[t._v("下一题")]),t._v(" "),i("el-button",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex===t.questions.length-1,expression:"currentIndex===questions.length-1"}],attrs:{size:"small",type:"primary",disabled:0===t.selectionArray[r].length},on:{click:function(e){t.dialogResultVisible=!0}}},[t._v("看结果")])],1)]):t._e()}),t._v(" "),i("el-row",{staticClass:"graph",attrs:{gutter:20}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"desc",staticStyle:{"text-align":"right"}},[i("div",{staticStyle:{"margin-bottom":"20px"}},[t._v("性格设定")]),t._v(" "),t._l(t.personas,function(e){return i("div",{key:e.title},[t._v("\n            "+t._s(e.title+": "+(t.personaScore[e.title]||0))+"\n          ")])})],2)]),t._v(" "),i("el-col",{attrs:{span:12}},[i("div",{staticClass:"desc",staticStyle:{"text-align":"left"}},[i("div",{staticStyle:{"margin-bottom":"20px"}},[t._v("人物设定")]),t._v(" "),t._l(t.characters,function(e){return i("div",{key:e.title,staticStyle:{"text-align":"left"}},[t._v("\n            "+t._s(e.title+": "+(t.characterScore[e.title]||0))+"\n          ")])})],2)])],1)],2),t._v(" "),i("el-dialog",{attrs:{title:"设置",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{attrs:{model:t.form}},[i("el-form-item",{attrs:{label:"阈值","label-width":120}},[i("el-input",{model:{value:t.form.bar,callback:function(e){t.$set(t.form,"bar",e)},expression:"form.bar"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.handleCancel}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleConfirm}},[t._v("确 定")])],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"测试结果",visible:t.dialogResultVisible},on:{"update:visible":function(e){t.dialogResultVisible=e}}},[i("div",{staticClass:"result"},[t._v("设定")]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"desc"},[t._v(t._s(t.personaResult+" de "+t.characterResult))]),t._v(" "),i("div",{staticClass:"result"},[t._v("评价")]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"desc"},[t._v(t._s(t.descriptionResult))]),t._v(" "),i("div",{staticClass:"result"},[t._v("成长点亮")]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"desc"},[t._v(t._s(t.userResult))])])],1)},staticRenderFns:[]};var h=i("C7Lr")(c,u,!1,function(t){i("P9xT")},"data-v-1439d30d",null).exports;r.default.use(a.a);var f=new a.a({routes:[{path:"/",name:"HelloWorld",component:h}]}),v=i("DVuL"),d=i.n(v);i("LicG");r.default.use(d.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:f,components:{App:s},template:"<App/>"})},P9xT:function(t,e){},Raw3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d1e83a9b6a785b9ccdca.js.map