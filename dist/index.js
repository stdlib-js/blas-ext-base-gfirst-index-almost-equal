"use strict";var y=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var m=y(function(F,g){
var k=require('@stdlib/assert-is-almost-equal/dist');function O(a,r,e,i,u,t,l,q){var o,n,v,c,s,x,f;for(o=e.data,n=t.data,v=e.accessors[0],c=t.accessors[0],s=u,x=q,f=0;f<a;f++){if(k(v(o,s),c(n,x),r))return f;s+=i,x+=l}return-1}g.exports=O
});var d=y(function(G,E){
var A=require('@stdlib/array-base-arraylike2object/dist'),P=require('@stdlib/assert-is-almost-equal/dist'),R=m();function h(a,r,e,i,u,t,l,q){var o,n,v,c,s;if(a<=0)return-1;if(v=A(e),c=A(t),v.accessorProtocol||c.accessorProtocol)return R(a,r,v,i,u,c,l,q);for(o=u,n=q,s=0;s<a;s++){if(P(e[o],t[n],r))return s;o+=i,n+=l}return-1}E.exports=h
});var I=y(function(H,b){
var p=require('@stdlib/strided-base-stride2offset/dist'),w=d();function z(a,r,e,i,u,t){return w(a,r,e,i,p(a,i),u,t,p(a,t))}b.exports=z
});var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=I(),C=d();B(j,"ndarray",C);module.exports=j;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
