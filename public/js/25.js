(self.webpackChunk=self.webpackChunk||[]).push([[25],{6100:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(3645),n=a.n(r)()((function(e){return e[1]}));n.push([e.id,'.vue-family-tree__branch[data-v-481f7390]{position:relative}.vue-family-tree__branch .vue-family-tree__branch[data-v-481f7390],.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-481f7390]{padding-top:16px}.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-481f7390]:before{border-top:1px solid #ddd;content:"";height:16px;position:absolute;right:0;top:0;width:100%}.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-481f7390]:after{background-color:#ddd;content:"";height:16px;left:50%;position:absolute;top:0;width:1px}.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-481f7390]:first-child:before{border-left:1px solid #ddd;width:82px}.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-481f7390]:first-child:after{display:none}.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-481f7390]:last-child:before{border-right:1px solid #ddd;left:0;right:auto;width:82px}.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-481f7390]:last-child:after{display:none}.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-481f7390]:first-child:last-child{padding-top:0}.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-481f7390]:first-child:last-child:after,.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-481f7390]:first-child:last-child:before{display:none}.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col_couple[data-v-481f7390]:after{left:calc(50% - 68px)}.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col_couple[data-v-481f7390]:first-child:before{width:calc(50% + 68px)}.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col_couple[data-v-481f7390]:last-child:before{width:calc(50% - 68px)}.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col_couple[data-v-481f7390]:first-child:last-child{padding-left:146px}.vue-family-tree__row[data-v-481f7390]{display:flex;justify-content:center}.vue-family-tree__col[data-v-481f7390]{position:relative}.vue-family-tree__col+.vue-family-tree__col[data-v-481f7390]{padding-left:16px}.vue-family-tree__content[data-v-481f7390]{display:flex;justify-content:center}.vue-family-tree__couple[data-v-481f7390]{display:inline-flex;position:relative}.vue-family-tree__couple[data-v-481f7390]:before{background-color:#ddd;content:"";height:1px;left:50%;margin-left:-16px;position:absolute;top:50px;width:32px}.vue-family-tree__couple .vue-family-tree__person[data-v-481f7390]:first-child{padding-right:16px}.vue-family-tree__couple .vue-family-tree__person[data-v-481f7390]:last-child{padding-left:16px}.vue-family-tree__couple_children .vue-family-tree__person[data-v-481f7390]:last-child:before{background-color:#ddd;content:"";height:calc(100% - 34px);left:0;position:absolute;top:50px;width:1px}.vue-family-tree__couple_children .vue-family-tree__person[data-v-481f7390]:last-child:after{background-color:#ddd;border-radius:50%;content:"";height:6px;left:-3px;position:absolute;top:48px;width:6px}.vue-family-tree__person[data-v-481f7390]{position:relative;z-index:10}',""]);const i=n},3979:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(3645),n=a.n(r)()((function(e){return e[1]}));n.push([e.id,".vue-family-card[data-v-be492b2e]{text-align:center;width:100px}.vue-family-card__image[data-v-be492b2e]{background-color:#dedede;background-position:50%;background-size:cover;display:block;height:100px;margin-bottom:16px;width:100px}.vue-family-card__name[data-v-be492b2e]{font-weight:600}.vue-family-card__name a[data-v-be492b2e]{color:#000;text-decoration:none}.avatar-container[data-v-be492b2e]{background-color:#dedede;display:block;height:100px;margin:auto;overflow:hidden;width:100px}.avatar-image[data-v-be492b2e]{height:auto;-o-object-fit:cover;object-fit:cover;width:100%}",""]);const i=n},8413:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(3645),n=a.n(r)()((function(e){return e[1]}));n.push([e.id,".vue-family-tree{height:800px!important}.avatar-container{height:200px;margin:auto;overflow:hidden;width:200px}.avatar-image{height:auto;-o-object-fit:cover;object-fit:cover;width:100%}",""]);const i=n},9025:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>S});var r=a(7757),n=a.n(r);const i={name:"FamilyCard",props:{name:String,img_link:String,source:Object},methods:{click:function(){this.$emit("click",this.source)}}};var o=a(3379),l=a.n(o),s=a(3979),c={insert:"head",singleton:!1};l()(s.Z,c);s.Z.locals;var u=a(1900);const d={name:"VueFamilyTreeBranch",components:{Card:(0,u.Z)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-family-card"},[a("a",{staticClass:"avatar-container",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.click.apply(null,arguments)}}},[a("img",{staticClass:"avatar-image",attrs:{src:e.img_link,alt:""}})]),e._v(" "),a("div",{staticClass:"vue-family-card__name"},[a("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.click.apply(null,arguments)}}},[e._v("\n            "+e._s(e.name)+"\n        ")])])])}),[],!1,null,"be492b2e",null).exports},props:{tree:{type:Array,default:function(){return[]}}}};var f=a(6100),m={insert:"head",singleton:!1};l()(f.Z,m);f.Z.locals;const v={name:"VueFamilyTree",components:{VueFamilyTreeBranch:(0,u.Z)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vue-family-tree__branch"},[a("div",{staticClass:"vue-family-tree__row"},e._l(e.tree,(function(t,r){return a("div",{key:r,staticClass:"vue-family-tree__col",class:{"vue-family-tree__col_couple":t.firstPerson&&t.spouses.length}},[a("div",{staticClass:"vue-family-tree__content"},[a("div",{class:{"vue-family-tree__couple":t.firstPerson&&t.spouses.length,"vue-family-tree__couple_children":t.children&&t.children.length}},[t.firstPerson?a("div",{staticClass:"vue-family-tree__person"},[a("div",{staticClass:"vue-family-tree__card"},[e._t("card",(function(){return[a("Card",{attrs:{img_link:t.firstPerson.img_link,name:t.firstPerson.name,source:t.firstPerson},on:{click:function(t){return e.$emit("card-click",t)}}})]}),{item:t.firstPerson})],2)]):e._e(),e._v(" "),e._l(t.spouses,(function(r){return t.spouses.length?[a("div",{staticClass:"vue-family-tree__person"},[a("div",{staticClass:"vue-family-tree__card"},[e._t("card",(function(){return[a("Card",{attrs:{img_link:r.img_link,name:r.name,source:r},on:{click:function(t){return e.$emit("card-click",t)}}})]}),{item:r})],2)])]:e._e()}))],2)]),e._v(" "),t.children?a("VueFamilyTreeBranch",{attrs:{tree:t.children},on:{"card-click":function(t){return e.$emit("card-click",t)}},scopedSlots:e._u([{key:"card",fn:function(t){var a=t.item;return[e._t("card",null,{item:a})]}}],null,!0)}):e._e()],1)})),0)])}),[],!1,null,"481f7390",null).exports},props:{tree:{type:Array,default:function(){return[]}},enableDrag:{type:Boolean,default:!0},wrapperStyles:{type:Object,default:function(){return this.enableDrag?{position:"relative",width:"100%",height:"600px"}:null}},dragCursor:{type:String,default:"grabbing"},mouseChangeDiff:{type:Number,default:2}},data:function(){return{dragAndDrop:{dragStarted:!1,dragStartX:0,dragStartY:0,diffX:0,diffY:0,mouseCursor:"default"},preventMouseEvents:!1,position:{x:0,y:0}}},methods:{mouseover:function(e){this.preventMouseEvents||this.$emit("mouseover",e)},mouseleave:function(e){this.preventMouseEvents||this.$emit("mouseleave",e)},cardClick:function(e){this.preventMouseEvents||this.$emit("card-click",e)},dragstart:function(e){if(this.enableDrag){if(this.mobilePreventScroll){var t=this.mobilePreventScroll.breakpoint||1024,a=this.mobilePreventScroll.selector||"body";if(window.matchMedia("(max-width: ".concat(t,"px)")).matches){var r=document.querySelector(a);this.previousMobileOverflowType=r.style.overflow,r.style.overflow="hidden"}}this.dragAndDrop.dragStartX=e.pageX||e.touches[0].pageX,this.dragAndDrop.dragStartY=e.pageY||e.touches[0].pageY,this.dragAndDrop.dragStarted=!0}this.$emit("dragstart",e)},drag:function(e){this.enableDrag&&this.dragAndDrop.dragStarted&&(this.dragAndDrop.diffX=(e.pageX||e.touches[0].pageX)-this.dragAndDrop.dragStartX,this.dragAndDrop.diffY=(e.pageY||e.touches[0].pageY)-this.dragAndDrop.dragStartY,(this.dragAndDrop.diffX>this.mouseChangeDiff||this.dragAndDrop.diffX<-this.mouseChangeDiff||this.dragAndDrop.diffY>this.mouseChangeDiff||this.dragAndDrop.diffX<-this.mouseChangeDiff)&&(this.preventMouseEvents=!0,this.dragAndDrop.mouseCursor=this.dragCursor),this.position.x+=this.dragAndDrop.diffX,this.position.y+=this.dragAndDrop.diffY,this.dragAndDrop.dragStartX=e.pageX||e.touches[0].pageX,this.dragAndDrop.dragStartY=e.pageY||e.touches[0].pageY,this.$emit("drag",e))},dragend:function(){var e=this;if(this.enableDrag){if(this.dragAndDrop.dragStarted=!1,this.dragAndDrop.mouseCursor="default",this.mobilePreventScroll){var t=this.mobilePreventScroll.selector||"body";document.querySelector(t).style.overflow=this.previousMobileOverflowType}setTimeout((function(){e.preventMouseEvents=!1}),150)}this.$emit("dragend",event)},getTreeClientRect:function(){return this.$refs.vueFamilyTree.getBoundingClientRect()},getWrapperClientRect:function(){return this.$refs.wrapper.getBoundingClientRect()},centerTree:function(){var e=this;return new Promise((function(t,a){try{var r=e.getWrapperClientRect().width/2,n=e.getWrapperClientRect().height/2,i=e.getTreeClientRect().width/2,o=e.getTreeClientRect().height/2;e.position.x=r-i,e.position.y=n-o,e.$emit("center-map"),t(!0)}catch(e){a(e)}}))}}};const p=(0,u.Z)(v,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"wrapper",staticClass:"vue-family-tree",style:Object.assign({},{overflow:e.enableDrag?"hidden":null,cursor:e.dragAndDrop.mouseCursor},e.wrapperStyles),on:{mousedown:e.dragstart,mousemove:e.drag,mouseup:e.dragend,mouseleave:e.dragend,touchstart:e.dragstart,touchmove:e.drag,touchend:e.dragend,touchcancel:e.dragend,touchleave:e.dragend}},[a("div",{ref:"vueFamilyTree",style:{position:e.enableDrag?"absolute":null,top:e.position.y+"px",left:e.position.x+"px"}},[a("VueFamilyTreeBranch",{attrs:{tree:e.tree},on:{"card-click":e.cardClick},scopedSlots:e._u([{key:"card",fn:function(t){var a=t.item;return[e._t("card",null,{item:a})]}}],null,!0)})],1)])}),[],!1,null,null,null).exports;var h=a(2060),_=a(9669),g=a.n(_);var b=a(6486);function y(e,t,a,r,n,i,o){try{var l=e[i](o),s=l.value}catch(e){return void a(e)}l.done?t(s):Promise.resolve(s).then(r,n)}const x=(0,h.aZ)({emits:["toggleModal"],props:{modalVisible:{type:Boolean,default:function(){return!1}}},setup:function(e,t){var a=t.emit,r=(0,h.iH)(null),i=(0,h.iH)(null),o=(0,h.iH)(!1),l=(0,h.iH)(!1),s=(0,h.f3)("vuex-store"),c=(0,h.Fl)((function(){return s.state.member}));s.dispatch("getOptions");var u={id:null,spouse_id:null,parent_id:null,nth:null,name:"",gender:null,img_url:null},d=(0,h.iH)((0,b.cloneDeep)(u)),f=(0,h.Fl)((function(){return s.state.ancestorOptions})),m=(0,h.Fl)((function(){return s.state.ancestorOptions})),v=function(){return d.value=(0,b.cloneDeep)(u)},p=function(){var e,t=(e=n().mark((function e(t){return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.dispatch("undoMember",d.value.id);case 2:l.value=!1,a("toggleModal",!1);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,n){var i=e.apply(t,a);function o(e){y(i,r,n,o,l,"next",e)}function l(e){y(i,r,n,o,l,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();return(0,h.YP)(c,(function(){c.value.id&&(d.value=function(e){return{id:e.id,spouse_id:e.spouse_id,parent_id:e.parent_id,nth:e.nth,name:e.name,gender:e.gender,img_url:null}}((0,b.cloneDeep)(c.value)))}),{immediate:!0}),(0,h.YP)((function(){return e.modalVisible}),(function(){o.value=e.modalVisible})),(0,h.YP)(c,(function(){i.value=null})),(0,h.YP)(o,(function(){return a("toggleModal",o.value)})),{selectedFile:r,previewUrl:i,ancestor:c,formValue:d,spouseOptions:f,parentOptions:m,modalShow:o,modalDestroyShow:l,yourImage:"/images/Profile_avatar_placeholder_large.png?4d1dba3d8f0a3d9f693e695b3429ddf9",showModal:function(){v(),s.commit("setMember",{}),i.value=null,a("toggleModal",!0)},setNewData:v,submitForm:function(){if(d.value.id){var e=d.value.id,t=(0,b.omit)(d.value,"id");s.dispatch("updateMember",{id:e,data:t})}else s.dispatch("plusMember",d.value);a("toggleModal",!1)},undo:p,reduceOption:function(e){return e.id},handleFileChange:function(e){var t=e.target.files[0];if(t){r.value=t,i.value=URL.createObjectURL(t);var a=new FormData;a.append("image",r.value),g().post("upload",a).then((function(e){var t=e.data.imagePath;d.value.img_url=t})).catch((function(e){console.error("Image Upload Error:",e)}))}else r.value=null,i.value=null}}}});var w=a(8413),k={insert:"head",singleton:!1};l()(w.Z,k);w.Z.locals;const C=(0,u.Z)(x,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"member-card"},[a("b-button",{attrs:{variant:"info"},on:{click:e.showModal}},[e._v("Thêm thành viên")]),e._v(" "),a("b-modal",{attrs:{title:"Thành viên",size:"lg","footer-class":"justify-content-between"},on:{close:function(t){return e.$emit("toggleModal",!1)}},scopedSlots:e._u([{key:"modal-footer",fn:function(){return[a("div",{directives:[{name:"show",rawName:"v-show",value:e.formValue.id,expression:"formValue.id"}]},[a("b-button",{attrs:{variant:"danger"},on:{click:function(t){e.modalDestroyShow=!0}}},[e._v("Delete")])],1),e._v(" "),a("div",{staticClass:"ms-auto text-right"},[a("b-button",{attrs:{variant:"secondary"},on:{click:function(t){return e.$emit("toggleModal",!1)}}},[e._v("Quay lại")]),e._v(" "),a("b-button",{attrs:{variant:"info"},on:{click:e.submitForm}},[e._v("Xác nhận")])],1)]},proxy:!0}]),model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[a("b-container",[a("b-row",[a("div",{staticClass:"w-100"},[a("b-card",{staticClass:"mt-4"},[a("div",{staticClass:"avatar-container"},[e.previewUrl||e.ancestor.img_link?a("img",{staticClass:"avatar-image",attrs:{src:e.previewUrl||e.ancestor.img_link}}):a("img",{staticClass:"avatar-image",attrs:{src:e.yourImage,alt:""}})])]),e._v(" "),a("b-form-file",{staticClass:"mb-3",attrs:{accept:".jpg,.jpeg,.png"},on:{change:e.handleFileChange},scopedSlots:e._u([{key:"file-name",fn:function(){return[a("strong",[e._v("Chọn ảnh:")]),e._v("\n                            "+e._s(e.selectedFile?e.selectedFile.name:"No file chosen")+"\n                        ")]},proxy:!0}]),model:{value:e.selectedFile,callback:function(t){e.selectedFile=t},expression:"selectedFile"}})],1)]),e._v(" "),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"ID"}},[a("b-form-input",{attrs:{disabled:""},model:{value:e.formValue.id,callback:function(t){e.$set(e.formValue,"id",t)},expression:"formValue.id"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Họ và tên"}},[a("b-form-input",{model:{value:e.formValue.name,callback:function(t){e.$set(e.formValue,"name",t)},expression:"formValue.name"}})],1)],1)],1),e._v(" "),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Con của ông/bà"}},[e.formValue.parent_id||!e.formValue.id?a("vue-select",{attrs:{options:e.parentOptions,disabled:!e.ancestor.parent_id&&!!e.formValue.id||!!e.formValue.spouse_id,label:"name",filterable:!0,reduce:e.reduceOption},model:{value:e.formValue.parent_id,callback:function(t){e.$set(e.formValue,"parent_id",t)},expression:"formValue.parent_id"}}):a("vue-select",{attrs:{options:e.parentOptions,disabled:!e.ancestor.parent_id,label:"name",filterable:!0,reduce:e.reduceOption},model:{value:e.ancestor.parent_in_law_id,callback:function(t){e.$set(e.ancestor,"parent_in_law_id",t)},expression:"ancestor.parent_in_law_id"}})],1)],1),e._v(" "),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Là con thứ: "}},[a("b-form-input",{attrs:{type:"number"},model:{value:e.formValue.nth,callback:function(t){e.$set(e.formValue,"nth",t)},expression:"formValue.nth"}})],1)],1)],1),e._v(" "),a("b-row",[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{id:"spouse_idFormGroup",label:"( Dâu/Rể ) Là vợ chồng của:"}},[e.formValue.spouse_id||!e.formValue.id?a("vue-select",{attrs:{options:e.spouseOptions,label:"name",disabled:!!e.formValue.parent_id,filterable:!0,reduce:e.reduceOption},model:{value:e.formValue.spouse_id,callback:function(t){e.$set(e.formValue,"spouse_id",t)},expression:"formValue.spouse_id"}}):a("div",{staticClass:"form-control"},[e.ancestor.spouses?a("span",[e._v(e._s(e.ancestor.spouses.map((function(e){return e.name})).join(" ,")))]):e._e()])],1)],1),e._v(" "),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"Nam nữ"}},[a("b-form-select",{model:{value:e.formValue.gender,callback:function(t){e.$set(e.formValue,"gender",t)},expression:"formValue.gender"}},[a("option",{attrs:{value:"1"}},[e._v("Nam")]),e._v(" "),a("option",{attrs:{value:"2"}},[e._v("Nữ")])])],1)],1)],1)],1)],1),e._v(" "),a("b-modal",{attrs:{title:"Alert","ok-only":""},on:{ok:e.undo},model:{value:e.modalDestroyShow,callback:function(t){e.modalDestroyShow=t},expression:"modalDestroyShow"}},[e._v("\n        Bạn thực sự muốn thực hiện hành động này ?\n    ")])],1)}),[],!1,null,null,null).exports;function D(e,t,a,r,n,i,o){try{var l=e[i](o),s=l.value}catch(e){return void a(e)}l.done?t(s):Promise.resolve(s).then(r,n)}const V=(0,h.aZ)({components:{VueFamilyTree:p,Member:C},setup:function(){var e=(0,h.f3)("vuex-store"),t=(0,h.Fl)((function(){var t;return null!==(t=e.state.genology)&&void 0!==t?t:[]})),a=function(){var t,a=(t=n().mark((function t(a){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.dispatch("getMember",a.id);case 2:r.value=!0;case 3:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(r,n){var i=t.apply(e,a);function o(e){D(i,r,n,o,l,"next",e)}function l(e){D(i,r,n,o,l,"throw",e)}o(void 0)}))});return function(e){return a.apply(this,arguments)}}(),r=(0,h.iH)(!1);return(0,h.bv)((function(){return e.dispatch("getTree")})),{trees:t,modalVisible:r,cardClick:a}}});const S=(0,u.Z)(V,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"mt-4"},[a("Member",{attrs:{modalVisible:e.modalVisible},on:{toggleModal:function(t){return e.modalVisible=t}}}),e._v(" "),a("VueFamilyTree",{attrs:{tree:e.trees},on:{"card-click":e.cardClick}})],1)])}),[],!1,null,null,null).exports}}]);