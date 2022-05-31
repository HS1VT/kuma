(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["traffic-routes"],{8897:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"traffic-routes relative"},[a("DocumentationLink",{attrs:{href:t.docsURL}}),a("FrameSkeleton",[a("DataOverview",{attrs:{"page-size":t.pageSize,"has-error":t.hasError,"is-loading":t.isLoading,"empty-state":t.empty_state,"table-data":t.tableData,"table-data-is-empty":t.tableDataIsEmpty,next:t.next},on:{tableAction:t.tableAction,loadData:function(e){return t.loadData(e)}},scopedSlots:t._u([{key:"additionalControls",fn:function(){return[t.$route.query.ns?a("KButton",{staticClass:"back-button",attrs:{appearance:"primary",size:"small",to:{name:"traffic-routes"}}},[a("span",{staticClass:"custom-control-icon"},[t._v(" ← ")]),t._v(" View All ")]):t._e()]},proxy:!0}])}),!1===t.isEmpty?a("Tabs",{attrs:{"has-error":t.hasError,"is-loading":t.isLoading,tabs:t.tabs,"initial-tab-override":"overview"},scopedSlots:t._u([{key:"tabHeader",fn:function(){return[a("div",[a("h3",[t._v("Traffic Route:"+t._s(t.entity.name))])]),a("div",[a("EntityURLControl",{attrs:{name:t.entity.name,mesh:t.entity.mesh}})],1)]},proxy:!0},{key:"overview",fn:function(){return[a("LabelList",{attrs:{"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty}},[a("div",[a("ul",t._l(t.entity,(function(e,n){return a("li",{key:n},[a("h4",[t._v(t._s(n))]),a("p",[t._v(" "+t._s(e)+" ")])])})),0)])])]},proxy:!0},{key:"affected-dpps",fn:function(){return[a("PolicyConnections",{attrs:{mesh:t.rawEntity.mesh,"policy-name":t.rawEntity.name,"policy-type":"traffic-routes"}})]},proxy:!0},{key:"yaml",fn:function(){return[a("YamlView",{attrs:{"has-error":t.entityHasError,"is-loading":t.entityIsLoading,"is-empty":t.entityIsEmpty,content:t.rawEntity}})]},proxy:!0}],null,!1,2525726317)}):t._e()],1)],1)},i=[],r=(a("b0c0"),a("d3b7"),a("96cf"),a("c964")),s=a("f3f3"),o=a("2f62"),c=a("bc1e"),l=a("0f82"),y=a("1d3a"),u=a("6663"),f=a("1d10"),m=a("2778"),p=a("14eb"),d=a("251b"),h=a("ff9d"),b=a("0ada"),v=a("6524"),E=a("c6ec"),g={name:"TrafficRoutes",metaInfo:{title:"Traffic Routes"},components:{EntityURLControl:u["a"],FrameSkeleton:f["a"],DataOverview:m["a"],Tabs:d["a"],YamlView:h["a"],LabelList:b["a"],PolicyConnections:p["a"],DocumentationLink:v["a"]},data:function(){return{isLoading:!0,isEmpty:!1,hasError:!1,entityIsLoading:!0,entityIsEmpty:!1,entityHasError:!1,tableDataIsEmpty:!1,empty_state:{title:"No Data",message:"There are no Traffic Routes present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Name",key:"name"},{label:"Mesh",key:"mesh"},{label:"Type",key:"type"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#affected-dpps",title:"Affected DPPs"},{hash:"#yaml",title:"YAML"}],entity:{},rawEntity:{},pageSize:E["g"],next:null}},computed:Object(s["a"])(Object(s["a"])({},Object(o["c"])({version:"config/getVersion"})),{},{docsURL:function(){return"https://kuma.io/docs/".concat(this.version,"/policies/traffic-route/")}}),watch:{$route:function(t,e){this.init()}},beforeMount:function(){this.init()},methods:{init:function(){this.loadData()},tableAction:function(t){var e=t;this.getEntity(e)},loadData:function(){var t=arguments,e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,i,r,s,o,u,f,m;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:"0",e.isLoading=!0,i=e.$route.query.ns||null,r=e.$route.params.mesh||null,a.prev=4,a.next=7,Object(y["a"])({getSingleEntity:l["a"].getTrafficRoute.bind(l["a"]),getAllEntities:l["a"].getAllTrafficRoutes.bind(l["a"]),getAllEntitiesFromMesh:l["a"].getAllTrafficRoutesFromMesh.bind(l["a"]),mesh:r,query:i,size:e.pageSize,offset:n});case 7:s=a.sent,o=s.data,u=s.next,e.next=u,o.length?(e.tableData.data=o,e.tableDataIsEmpty=!1,e.isEmpty=!1,f=["type","name","mesh"],m=o[0],e.entity=Object(c["d"])(m,f),e.rawEntity=Object(c["j"])(m)):(e.tableData.data=[],e.tableDataIsEmpty=!0,e.isEmpty=!0,e.entityIsEmpty=!0),a.next=19;break;case 14:a.prev=14,a.t0=a["catch"](4),e.hasError=!0,e.isEmpty=!0,console.error(a.t0);case 19:return a.prev=19,e.isLoading=!1,e.entityIsLoading=!1,a.finish(19);case 23:case"end":return a.stop()}}),a,null,[[4,14,19,23]])})))()},getEntity:function(t){var e=this;this.entityIsLoading=!0,this.entityIsEmpty=!1,this.entityHasError=!1;var a=this.$route.params.mesh;if(t){var n="all"===a?t.mesh:a;return l["a"].getTrafficRoute({mesh:n,name:t.name}).then((function(t){if(t){var a=["type","name","mesh"];e.entity=Object(c["d"])(t,a),e.rawEntity=Object(c["j"])(t)}else e.entity={},e.entityIsEmpty=!0})).catch((function(t){e.entityHasError=!0,console.error(t)})).finally((function(){setTimeout((function(){e.entityIsLoading=!1}),"500")}))}setTimeout((function(){e.entityIsEmpty=!0,e.entityIsLoading=!1}),"500")}}},w=g,L=a("2877"),k=Object(L["a"])(w,n,i,!1,null,null,null);e["default"]=k.exports}}]);