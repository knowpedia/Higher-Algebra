
/*************************** [bundle] ****************************/
// Original file:./src/quadratic-form.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('49');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('50');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-1877d60a":""},[createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-1877d60a":""},[createElement('header',{"id":"fixed-top","data-quickpaper-1877d60a":""},["二次型"]),createElement('h1',{"id":"fixed-ecxjqjzbs","data-quickpaper-1877d60a":""},["二次型及其矩阵表示"]),createElement('h2',{"data-quickpaper-1877d60a":""},["定义"]),createElement('p',{"data-quickpaper-1877d60a":""},["设P是一数域，一个系数在数域P中的x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),"的二次齐次多项式",createElement('span',{"class":"center-line","data-quickpaper-1877d60a":""},["f(x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),")=a",createElement('sub',{"data-quickpaper-1877d60a":""},["11"]),"x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"+2a",createElement('sub',{"data-quickpaper-1877d60a":""},["12"]),"x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),"x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),"+...+2a",createElement('sub',{"data-quickpaper-1877d60a":""},["1n"]),"x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),"x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),"+a",createElement('sub',{"data-quickpaper-1877d60a":""},["22"]),"x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"+...+2a",createElement('sub',{"data-quickpaper-1877d60a":""},["2n"]),"x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),"x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),"+......+a",createElement('sub',{"data-quickpaper-1877d60a":""},["nn"]),"x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"])]),"称为",createElement('span',{"class":"important","data-quickpaper-1877d60a":""},["数域P上的一个n元二次型"]),"，或者，在不致引起混淆时简称",createElement('span',{"class":"important","data-quickpaper-1877d60a":""},["二次型"]),"。"]),createElement('h2',{"data-quickpaper-1877d60a":""},["定义"]),createElement('p',{"data-quickpaper-1877d60a":""},["设x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),"；y",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",y",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,y",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),"是两组文字，系数在数域P中的一组关系式",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[0]","data-quickpaper-1877d60a":""},[]),"称为由x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),"到y",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",y",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,y",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),"的一个",createElement('span',{"class":"important","data-quickpaper-1877d60a":""},["线性替换"]),"。如果系数行列式",createElement('span',{"class":"center-line","data-quickpaper-1877d60a":""},["|c",createElement('sub',{"data-quickpaper-1877d60a":""},["ij"]),"|≠0，"]),"那么线性替换就称为",createElement('span',{"class":"important","data-quickpaper-1877d60a":""},["非退化的"]),"。"]),createElement('p',{"data-quickpaper-1877d60a":""},["对于原来的系数X，使用Y替换，它们的关系如下：",createElement('span',{"class":"center-line","data-quickpaper-1877d60a":""},["X=CY"]),"，其中C是一个非退化的矩阵。我们可以很容易的推导出：",createElement('span',{"class":"center-line","data-quickpaper-1877d60a":""},["f(x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),")=↵                X",createElement('sup',{"data-quickpaper-1877d60a":""},["T"]),"AX=↵                (CY)",createElement('sup',{"data-quickpaper-1877d60a":""},["T"]),"A(CY)=↵                Y",createElement('sup',{"data-quickpaper-1877d60a":""},["T"]),"C",createElement('sup',{"data-quickpaper-1877d60a":""},["T"]),"ACY=↵                Y",createElement('sup',{"data-quickpaper-1877d60a":""},["T"]),"(C",createElement('sup',{"data-quickpaper-1877d60a":""},["T"]),"AC)Y=↵                Y",createElement('sup',{"data-quickpaper-1877d60a":""},["T"]),"BY"]),"，由此，我们得到变换前后的二次型的矩阵关系：",createElement('span',{"class":"center-line","data-quickpaper-1877d60a":""},["B=C",createElement('sup',{"data-quickpaper-1877d60a":""},["T"]),"AC。"])]),createElement('h2',{"data-quickpaper-1877d60a":""},["定义"]),createElement('p',{"data-quickpaper-1877d60a":""},["设数域P上n*n矩阵",createElement('span',{"class":"important","data-quickpaper-1877d60a":""},["A，B称为合同的"]),"，如果有数域P上可逆的n*n矩阵C，使",createElement('span',{"class":"center-line","data-quickpaper-1877d60a":""},["B=C",createElement('sup',{"data-quickpaper-1877d60a":""},["T"]),"AC"]),"。合同是矩阵之间的一个关系。"]),createElement('h1',{"id":"fixed-bzx","data-quickpaper-1877d60a":""},["标准型"]),createElement('p',{"data-quickpaper-1877d60a":""},["二次型中，最简单的一种是只包含平方项的二次型",createElement('span',{"class":"center-line","data-quickpaper-1877d60a":""},["d",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),"x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"+ d",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),"x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"+...+↵                d",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),"x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"])])]),createElement('h2',{"data-quickpaper-1877d60a":""},["定理"]),createElement('p',{"data-quickpaper-1877d60a":""},["数域P上的任意一个二次型都可以经过非退化的线性替换变成平方和（也就是上面那种最简单的二次型）的形式。"]),createElement('h2',{"data-quickpaper-1877d60a":""},["定义"]),createElement('p',{"data-quickpaper-1877d60a":""},["二次型f(x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),")经过非退化的线性替换所变成的平方和称为↵            f(x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),")的一个",createElement('span',{"class":"important","data-quickpaper-1877d60a":""},["标准型"]),"。"]),createElement('h1',{"id":"fixed-wyx","data-quickpaper-1877d60a":""},["唯一性"]),createElement('h2',{"data-quickpaper-1877d60a":""},["定义"]),createElement('p',{"data-quickpaper-1877d60a":""},["一个二次型经过适当的非退化线性替换后，f(x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),")变成标准形。虽然标准形不是唯一的，单都可以表示为如下形式："]),createElement('p',{"class":"center-line","data-quickpaper-1877d60a":""},["d",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),"y",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"+d",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),"y",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"+...+d",createElement('sub',{"data-quickpaper-1877d60a":""},["r"]),"y",createElement('sub',{"data-quickpaper-1877d60a":""},["r"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"（d",createElement('sub',{"data-quickpaper-1877d60a":""},["i"]),"≠0,其中i=1,2,...,r）"]),createElement('p',{"data-quickpaper-1877d60a":""},["易知r就是f(x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),")的矩阵的秩。因为复数总可以开平方，我们再作一非退化线性替换",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[1]","data-quickpaper-1877d60a":""},[]),"就变成"]),createElement('p',{"class":"center-line","data-quickpaper-1877d60a":""},["z",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"+ z",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"+...+ z",createElement('sub',{"data-quickpaper-1877d60a":""},["r"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"])]),createElement('p',{"data-quickpaper-1877d60a":""},["称为复二次型f(x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),")的",createElement('span',{"class":"important","data-quickpaper-1877d60a":""},["规范形"]),"。"]),createElement('h2',{"data-quickpaper-1877d60a":""},["定理"]),createElement('p',{"data-quickpaper-1877d60a":""},["任意一个复系数的二次型，经过一适当的非退化线性替换可以变成规范形，且规范形是唯一的。"]),createElement('h2',{"data-quickpaper-1877d60a":""},["定义"]),createElement('p',{"data-quickpaper-1877d60a":""},["设f(x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),")是一实数的二次型，经过某一个非退化线性替换，再适当排列文字的次序，可使f(x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),")变成标准形"]),createElement('p',{"class":"center-line","data-quickpaper-1877d60a":""},["d",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),"y",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"+...+d",createElement('sub',{"data-quickpaper-1877d60a":""},["p"]),"y",createElement('sub',{"data-quickpaper-1877d60a":""},["p"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"-d",createElement('sub',{"data-quickpaper-1877d60a":""},["p+1"]),"y",createElement('sub',{"data-quickpaper-1877d60a":""},["p+1"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"-...-d",createElement('sub',{"data-quickpaper-1877d60a":""},["r"]),"y",createElement('sub',{"data-quickpaper-1877d60a":""},["r"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"（d",createElement('sub',{"data-quickpaper-1877d60a":""},["i"]),">0,其中i=1,2,...,r）"]),createElement('p',{"data-quickpaper-1877d60a":""},["r是f(x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),")的矩阵的秩。因为在实数域中，正实数总是可以开平方，所以再作一非退化线性替换",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[1]","data-quickpaper-1877d60a":""},[]),"就变成"]),createElement('p',{"class":"center-line","data-quickpaper-1877d60a":""},["z",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"+ ...+z",createElement('sub',{"data-quickpaper-1877d60a":""},["p"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"-z",createElement('sub',{"data-quickpaper-1877d60a":""},["p+1"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"]),"-...-↵            z",createElement('sub',{"data-quickpaper-1877d60a":""},["r"]),createElement('sup',{"data-quickpaper-1877d60a":""},["2"])]),createElement('p',{"data-quickpaper-1877d60a":""},["称为实二次型f(x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),")的",createElement('span',{"class":"important","data-quickpaper-1877d60a":""},["规范形"]),"。"]),createElement('h2',{"data-quickpaper-1877d60a":""},["定理"]),createElement('p',{"data-quickpaper-1877d60a":""},["任意一个实数域上的二次型，经过一适当的非退化线性替换可以变成规范形，且规范形是唯一的。"]),createElement('h1',{"id":"fixed-zdecx","data-quickpaper-1877d60a":""},["正定二次型"]),createElement('h2',{"data-quickpaper-1877d60a":""},["定义"]),createElement('p',{"data-quickpaper-1877d60a":""},["实二次型f(x",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",x",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,x",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),")称为",createElement('span',{"class":"important","data-quickpaper-1877d60a":""},["正定的"]),"，↵            如果对于任意一组不全为零的实数c",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),"，c",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),"，...，c",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),"都有f(c",createElement('sub',{"data-quickpaper-1877d60a":""},["1"]),",c",createElement('sub',{"data-quickpaper-1877d60a":""},["2"]),",...,c",createElement('sub',{"data-quickpaper-1877d60a":""},["n"]),")>0。"])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/quadratic-form.paper?QuickPaper&type=script&lang=js&hash=1877d60a
/*****************************************************************/
window.__etcpack__bundleSrc__['49']=function(){
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
                this.$mathFormula.equationSet(
                    this.$mathFormula.join(
                        this.$mathFormula.rightBottom('x', '1'),
                        "=",
                        this.$mathFormula.rightBottom('c', '11'),
                        this.$mathFormula.rightBottom('y', '1'),
                        "+",
                        this.$mathFormula.rightBottom('c', '12'),
                        this.$mathFormula.rightBottom('y', '2'),
                        "+...+",
                        this.$mathFormula.rightBottom('c', '1n'),
                        this.$mathFormula.rightBottom('y', 'n')
                    ),
                    this.$mathFormula.join(
                        this.$mathFormula.rightBottom('x', '2'),
                        "=",
                        this.$mathFormula.rightBottom('c', '21'),
                        this.$mathFormula.rightBottom('y', '1'),
                        "+",
                        this.$mathFormula.rightBottom('c', '22'),
                        this.$mathFormula.rightBottom('y', '2'),
                        "+...+",
                        this.$mathFormula.rightBottom('c', '2n'),
                        this.$mathFormula.rightBottom('y', 'n')
                    ),
                    "......",
                    this.$mathFormula.join(
                        this.$mathFormula.rightBottom('x', 'n'),
                        "=",
                        this.$mathFormula.rightBottom('c', 'n1'),
                        this.$mathFormula.rightBottom('y', '1'),
                        "+",
                        this.$mathFormula.rightBottom('c', 'n2'),
                        this.$mathFormula.rightBottom('y', '2'),
                        "+...+",
                        this.$mathFormula.rightBottom('c', 'nn'),
                        this.$mathFormula.rightBottom('y', 'n')
                    )
                ),
                this.$mathFormula.equationSet(
                    this.$mathFormula.join(
                        this.$mathFormula.rightBottom('y', '1'),
                        '=',
                        this.$mathFormula.division(1, this.$mathFormula.gen(
                            this.$mathFormula.rightBottom('d', '1')
                        )),
                        this.$mathFormula.rightBottom('z', '1')
                    ),
                    '............',
                    this.$mathFormula.join(
                        this.$mathFormula.rightBottom('y', 'r'),
                        '=',
                        this.$mathFormula.division(1, this.$mathFormula.gen(
                            this.$mathFormula.rightBottom('d', 'r')
                        )),
                        this.$mathFormula.rightBottom('z', 'r')
                    ),
                    '............',
                    this.$mathFormula.join(
                        this.$mathFormula.rightBottom('y', 'r+1'),
                        '=',
                        this.$mathFormula.rightBottom('z', 'r+1')
                    ),
                    '............',
                    this.$mathFormula.join(
                        this.$mathFormula.rightBottom('y', 'n'),
                        '=',
                        this.$mathFormula.rightBottom('z', 'n')
                    )
                )
            ];
        },
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/quadratic-form.paper?QuickPaper&type=style&lang=css&hash=1877d60a
/*****************************************************************/
window.__etcpack__bundleSrc__['50']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
