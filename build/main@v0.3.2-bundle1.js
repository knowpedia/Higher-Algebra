
/*************************** [bundle] ****************************/
// Original file:./src/quantic.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['32']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('41');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('42');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-430c4737":""},[createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-430c4737":""},[createElement('header',{"id":"fixed-top","data-quickpaper-430c4737":""},["多项式"]),createElement('h1',{"id":"fixed-sy","data-quickpaper-430c4737":""},["数域"]),createElement('h2',{"data-quickpaper-430c4737":""},["定义"]),createElement('p',{"data-quickpaper-430c4737":""},["设P是由一些复数组成的集合，其中包括0和1。如果P中任意两个数（这两个数也可以相同）的和、差、积、商（除数不为零）仍然是P中的数，那么，P就称为一个",createElement('span',{"class":"important","data-quickpaper-430c4737":""},["数域"]),"。"]),createElement('h1',{"id":"fixed-yydxs","data-quickpaper-430c4737":""},["一元多项式"]),createElement('h2',{"data-quickpaper-430c4737":""},["定义"]),createElement('p',{"data-quickpaper-430c4737":""},["设n是一非负整数。表达式",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[0]","data-quickpaper-430c4737":""},[]),"，其中",createElement('span',{"kp-math-formula":"mathFormulas[1]","data-quickpaper-430c4737":""},[]),"，",createElement('span',{"kp-math-formula":"mathFormulas[2]","data-quickpaper-430c4737":""},[]),"，",createElement('span',{"kp-math-formula":"mathFormulas[4]","data-quickpaper-430c4737":""},[]),"全属于数域P，称为",createElement('span',{"class":"important","data-quickpaper-430c4737":""},["系数在数域P中的一元多项式"]),"，或者简称为",createElement('span',{"class":"important","data-quickpaper-430c4737":""},["数域P上的一元多项式"]),"。"]),createElement('p',{"data-quickpaper-430c4737":""},["在上面的多项式中，",createElement('span',{"kp-math-formula":"mathFormulas[5]","data-quickpaper-430c4737":""},[]),"称为i",createElement('span',{"class":"important","data-quickpaper-430c4737":""},["次项"]),"，",createElement('span',{"kp-math-formula":"mathFormulas[3]","data-quickpaper-430c4737":""},[]),"称为i次项的",createElement('span',{"class":"important","data-quickpaper-430c4737":""},["系数"]),"。同时，用f(x)，g(x)，...来表示多项式。"]),createElement('h2',{"data-quickpaper-430c4737":""},["定义"]),createElement('p',{"data-quickpaper-430c4737":""},["如果在多项式f(x)与g(x)中，除去系数为零的项外，同次项的系数全相等，那么f(x)与g(x)就称为",createElement('span',{"class":"important","data-quickpaper-430c4737":""},["相等"]),"，记为：f(x)=g(x)。系数全为零的多项式称为",createElement('span',{"class":"important","data-quickpaper-430c4737":""},["零多项式"]),"，记为0。"]),createElement('p',{"data-quickpaper-430c4737":""},["上面定义的多项式，如果",createElement('span',{"kp-math-formula":"mathFormulas[4]","data-quickpaper-430c4737":""},[]),"≠0，那么",createElement('span',{"kp-math-formula":"mathFormulas[6]","data-quickpaper-430c4737":""},[]),"称为多项式的",createElement('span',{"class":"important","data-quickpaper-430c4737":""},["首项"]),"，",createElement('span',{"kp-math-formula":"mathFormulas[4]","data-quickpaper-430c4737":""},[]),"称为",createElement('span',{"class":"important","data-quickpaper-430c4737":""},["首项系数"]),"，n称为多项式的",createElement('span',{"class":"important","data-quickpaper-430c4737":""},["次数"]),"。零次多项式是唯一不定义次数的多项式。多项式f(x)的次数记为deg(f(x))。"]),createElement('h2',{"data-quickpaper-430c4737":""},["定义"]),createElement('p',{"data-quickpaper-430c4737":""},["所有系数在数域P中的一元多项式的全体，称为数域P上的",createElement('span',{"class":"important","data-quickpaper-430c4737":""},["一元多项式环"]),"，记为P[x]，P称为P[x]的系数域。"]),createElement('h1',{"id":"fixed-zcdgl","data-quickpaper-430c4737":""},["整除的概念"]),createElement('h3',{"data-quickpaper-430c4737":""},["带余除法"]),createElement('p',{"data-quickpaper-430c4737":""},["对于P[x]中任意两个多项式f(x)与g(x)，其中g(x)≠0，一定有P[x]中的多项式q(x)，r(x)存在，使",createElement('span',{"class":"center-line","data-quickpaper-430c4737":""},["f(x) = q(x)g(x) + r(x)"]),"成立，其中deg(r(x)) < deg(g(x))或者r(x) = 0，并且这样的q(x)，r(x)是唯一决定的。"]),createElement('p',{"data-quickpaper-430c4737":""},["带余除法中所得的q(x)通常称为g(x)除f(x)的商，r(x)称为g(x)除f(x)的余式。"]),createElement('h2',{"data-quickpaper-430c4737":""},["定义"]),createElement('p',{"data-quickpaper-430c4737":""},["数域P上的多项式g(x)称为整除f(x)，如果有数域P上的多项式h(x)使等式",createElement('span',{"class":"center-line","data-quickpaper-430c4737":""},["f(x) = g(x)h(x)"]),"成立。我们用“g(x)|f(x)”表示g(x)整除f(x)，用“g(x)∤f(x)”表示g(x)不能整除f(x)。"]),createElement('p',{"data-quickpaper-430c4737":""},["当g(x)|f(x)时，g(x)就称为f(x)的因式，f(x)称为g(x)的倍式。"]),createElement('h1',{"id":"fixed-zdgys","data-quickpaper-430c4737":""},["最大公因式"]),createElement('p',{"data-quickpaper-430c4737":""},["如果多项式φ(x)即是f(x)的因式，又是g(x)的因式，那么φ(x)就称为f(x)与g(x)的一个公因式。"]),createElement('h2',{"data-quickpaper-430c4737":""},["定义"]),createElement('p',{"data-quickpaper-430c4737":""},["设f(x)，g(x)是P[x]中的两个多项式。P[x]中多项式d(x)称为f(x)，g(x)的一个",createElement('span',{"class":"important","data-quickpaper-430c4737":""},["最大公因式"]),"，如果它满足下面两个条件："]),createElement('ul',{"data-quickpaper-430c4737":""},[createElement('li',{"data-quickpaper-430c4737":""},["1) d(x)是f(x)，g(x)的公因式；"]),createElement('li',{"data-quickpaper-430c4737":""},["2) f(x)，g(x)的公因式全是d(x)的因式。"])]),createElement('h4',{"data-quickpaper-430c4737":""},["引理"]),createElement('p',{"data-quickpaper-430c4737":""},["如果有等式",createElement('span',{"class":"center-line","data-quickpaper-430c4737":""},["f(x) = q(x)g(x) + r(x)"]),"成立，那么f(x)，g(x)和g(x)，r(x)有相同的公因式。"]),createElement('h2',{"data-quickpaper-430c4737":""},["定理"]),createElement('p',{"data-quickpaper-430c4737":""},["对于P[x]中任意两个多项式f(x)，g(x)，在P[x]中存在一个最大公因式d(x)，且d(x)可以表成f(x)，g(x)的一个组合，即有P[x]中的多项式u(x),v(x)使",createElement('span',{"class":"center-line","data-quickpaper-430c4737":""},["d(x) = u(x)f(x) + v(x)g(x)"]),"成立。"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/quantic.paper?QuickPaper&type=script&lang=js&hash=430c4737
/*****************************************************************/
window.__etcpack__bundleSrc__['41']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {
        data() {
            return {
                mathFormulas: {}
            };
        },
        mounted() {
            this.mathFormulas = [
                this.$mathFormula.join(
                    this.$mathFormula.rightBottom("a", 'n'), this.$mathFormula.rightTop('x', 'n'),
                    "+",
                    this.$mathFormula.rightBottom("a", 'n-1'), this.$mathFormula.rightTop('x', 'n-1'),
                    "+", "···", "+",
                    this.$mathFormula.rightBottom("a", '0')),
                this.$mathFormula.rightBottom('a', 0),
                this.$mathFormula.rightBottom('a', 1),
                this.$mathFormula.rightBottom('a', 'i'),
                this.$mathFormula.rightBottom('a', 'n'),
                this.$mathFormula.join(this.$mathFormula.rightBottom("a", 'i'), this.$mathFormula.rightTop('x', 'i')),
                this.$mathFormula.join(this.$mathFormula.rightBottom("a", 'n'), this.$mathFormula.rightTop('x', 'n'))
            ];
        },
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/quantic.paper?QuickPaper&type=style&lang=css&hash=430c4737
/*****************************************************************/
window.__etcpack__bundleSrc__['42']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
