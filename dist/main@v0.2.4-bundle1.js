(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{20:function(a,t,i){var r=i(21);"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);(0,i(1).default)("data-quickpaper-70691712",r,!0)},21:function(a,t,i){(a.exports=i(0)(!1)).push([a.i,"",""])},27:function(a,t,i){"use strict";i.r(t);var r={data:function(){return{mathFormulas:{}}},mounted:function(){var a=this.$mathFormula.join(this.$mathFormula.rightBottom("j",1),this.$mathFormula.rightBottom("j",2),"...",this.$mathFormula.rightBottom("j","n")),t=this.$mathFormula.join(this.$mathFormula.rightBottom("a",this.$mathFormula.join("1",this.$mathFormula.rightBottom("j",1))),this.$mathFormula.rightBottom("a",this.$mathFormula.join("2",this.$mathFormula.rightBottom("j",2))),"...",this.$mathFormula.rightBottom("a",this.$mathFormula.join("n",this.$mathFormula.rightBottom("j","n")))),i=this.$mathFormula.matrix([[this.$mathFormula.rightBottom("a","11"),"...",this.$mathFormula.rightBottom("a","1j"),"...",this.$mathFormula.rightBottom("a","1n")],["...","","...","","..."],[this.$mathFormula.rightBottom("a","i1"),"...",this.$mathFormula.rightBottom("a","ij"),"...",this.$mathFormula.rightBottom("a","in")],["...","","...","","..."],[this.$mathFormula.rightBottom("a","n1"),"...",this.$mathFormula.rightBottom("a","nj"),"...",this.$mathFormula.rightBottom("a","nn")]],!0);this.mathFormulas=[this.getMatrix("a","n","n",!0),t,a,this.$mathFormula.join(this.getMatrix("a","n","n",!0),"=",this.$mathFormula.sum(a,"",this.$mathFormula.join(this.$mathFormula.bracket(this.$mathFormula.rightTop("(-1)",this.$mathFormula.join("τ",this.$mathFormula.bracket(a,"small"))),"small"),t))),this.getMatrix("a","s","n"),i,this.$mathFormula.rightBottom("a","ij"),this.$mathFormula.matrix([[this.$mathFormula.rightBottom("a","11"),"...",this.$mathFormula.rightBottom("a","1,j-1"),this.$mathFormula.rightBottom("a","1,j+1"),"...",this.$mathFormula.rightBottom("a","1n")],["...","","...","...","","..."],[this.$mathFormula.rightBottom("a","i-1,1"),"...",this.$mathFormula.rightBottom("a","i-1,j-1,"),this.$mathFormula.rightBottom("a","i-1,j+1"),"...",this.$mathFormula.rightBottom("a","i-1,n")],[this.$mathFormula.rightBottom("a","i+1,1"),"...",this.$mathFormula.rightBottom("a","i+1,j-1"),this.$mathFormula.rightBottom("a","i+1,j+1"),"...",this.$mathFormula.rightBottom("a","i+1,n")],["...","","...","...","","..."],[this.$mathFormula.rightBottom("a","n1"),"...",this.$mathFormula.rightBottom("a","n,j-1"),this.$mathFormula.rightBottom("a","n,j+1"),"...",this.$mathFormula.rightBottom("a","nn")]],!0),this.$mathFormula.join(i,"=",this.$mathFormula.rightBottom("a","i1"),this.$mathFormula.rightBottom("A","i1"),"+",this.$mathFormula.rightBottom("a","i2"),this.$mathFormula.rightBottom("A","i2"),"+ ... +",this.$mathFormula.rightBottom("a","in"),this.$mathFormula.rightBottom("A","in"),"  （其中i=1,2,...,n）")]}};i(20);r.render=function(a){return a("div",{quickpaper:"","data-quickpaper-70691712":""},[a("div",{class:"doc-view",id:"root-view","data-quickpaper-70691712":""},[a("header",{id:"fixed-top","data-quickpaper-70691712":""},["行列式"]),a("h1",{id:"fixed-pl","data-quickpaper-70691712":""},["排列"]),a("h2",{"data-quickpaper-70691712":""},["定义"]),a("p",{"data-quickpaper-70691712":""},["由1，2，...，n组成的一个有序数组称为一个",a("span",{class:"important","data-quickpaper-70691712":""},["n级排列"]),"。"]),a("h2",{"data-quickpaper-70691712":""},["定义"]),a("p",{"data-quickpaper-70691712":""},["在一个排列中，如果一对数的前后位置与大小顺序相反，即前面的数大于后面的数，那么它们就称为一个",a("span",{class:"important","data-quickpaper-70691712":""},["逆序"]),"，一个排列中逆序的总数就称为这个排列的",a("span",{class:"important","data-quickpaper-70691712":""},["逆序数"]),"。"]),a("h2",{"data-quickpaper-70691712":""},["定义"]),a("p",{"data-quickpaper-70691712":""},["逆序数为偶数的排列称为",a("span",{class:"important","data-quickpaper-70691712":""},["偶排列"]),"；逆序数为奇数的排列称为",a("span",{class:"important","data-quickpaper-70691712":""},["奇排列"]),"。"]),a("h1",{id:"fixed-njhls","data-quickpaper-70691712":""},["n级行列式"]),a("h2",{"data-quickpaper-70691712":""},["定义"]),a("p",{"data-quickpaper-70691712":""},["n级行列式",a("span",{class:"center-line","kp-math-formula":"mathFormulas[0]","data-quickpaper-70691712":""},[]),"等于所有取自不同行不同列的n个元素的乘积",a("span",{class:"center-line","kp-math-formula":"mathFormulas[1]","data-quickpaper-70691712":""},[]),"的代数和，这里的",a("span",{"kp-math-formula":"mathFormulas[2]","data-quickpaper-70691712":""},[]),"是1,2,...,n的一个排列，每项都按照下列规则带有符号：当",a("span",{"kp-math-formula":"mathFormulas[2]","data-quickpaper-70691712":""},[]),"是偶排列时，带有正号，当",a("span",{"kp-math-formula":"mathFormulas[2]","data-quickpaper-70691712":""},[]),"是奇排列时，带有负号。"]),a("p",{"data-quickpaper-70691712":""},["上面的定义还可以写成",a("span",{class:"center-line","kp-math-formula":"mathFormulas[3]","data-quickpaper-70691712":""},[])]),a("h1",{id:"fixed-hlsdjs","data-quickpaper-70691712":""},["行列式的计算"]),a("h2",{"data-quickpaper-70691712":""},["定义"]),a("p",{"data-quickpaper-70691712":""},["由sn个数排成的s行（横的）n列（纵的）的表",a("span",{class:"center-line","kp-math-formula":"mathFormulas[4]","data-quickpaper-70691712":""},[]),"称为一个s*n的",a("span",{class:"important","data-quickpaper-70691712":""},["矩阵"]),"。"]),a("h2",{"data-quickpaper-70691712":""},["定义"]),a("p",{"data-quickpaper-70691712":""},["所谓数域P上矩阵的",a("span",{class:"important","data-quickpaper-70691712":""},["初等行变换"]),"（或",a("span",{class:"important","data-quickpaper-70691712":""},["初等列变换"]),"）是指下列三种变换："]),a("ul",{"data-quickpaper-70691712":""},[a("li",{"data-quickpaper-70691712":""},["1）以P中一个非零的数乘矩阵的某一行（或列）；"]),a("li",{"data-quickpaper-70691712":""},["2）把矩阵的莫一个行（或列）的c倍加到另一行（或列），这里的c是P中任意一个数；"]),a("li",{"data-quickpaper-70691712":""},["3）互换矩阵中的两行（或列）的位置。"])]),a("h1",{id:"fixed-hlsayzk","data-quickpaper-70691712":""},["行列式按一行（列）展开"]),a("h2",{"data-quickpaper-70691712":""},["定义"]),a("p",{"data-quickpaper-70691712":""},["在行列式",a("span",{class:"center-line","kp-math-formula":"mathFormulas[5]","data-quickpaper-70691712":""},[]),"中划去元素",a("span",{"kp-math-formula":"mathFormulas[6]","data-quickpaper-70691712":""},[]),"所在的第i行与第j列，剩下的↵            （n-1）",a("sup",{"data-quickpaper-70691712":""},["2"]),"个元素按照原来的排法构成一个n-1级的行列式",a("span",{class:"center-line","kp-math-formula":"mathFormulas[7]","data-quickpaper-70691712":""},[]),"称为元素",a("span",{"kp-math-formula":"mathFormulas[6]","data-quickpaper-70691712":""},[]),"的",a("span",{class:"important","data-quickpaper-70691712":""},["余子式"]),"，记为M",a("sub",{"data-quickpaper-70691712":""},["ij"]),"。"]),a("h2",{"data-quickpaper-70691712":""},["定义"]),a("p",{"data-quickpaper-70691712":""},["那么，取",a("span",{class:"center-line","data-quickpaper-70691712":""},["A",a("sub",{"data-quickpaper-70691712":""},["ij"]),"= (-1)",a("sup",{"data-quickpaper-70691712":""},["i+j"]),"M",a("sub",{"data-quickpaper-70691712":""},["ij"])]),"，其中A",a("sub",{"data-quickpaper-70691712":""},["ij"]),"就称为元素a",a("sub",{"data-quickpaper-70691712":""},["ij"]),"的",a("span",{class:"important","data-quickpaper-70691712":""},["代数余子式"]),"。"]),a("p",{"data-quickpaper-70691712":""},["对于n级别的行列式，我们就可以按照行（列也是类似的）展开",a("span",{class:"center-line","kp-math-formula":"mathFormulas[8]","data-quickpaper-70691712":""},[])])])])};t.default=r}}]);