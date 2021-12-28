
/*************************** [bundle] ****************************/
// Original file:./src/linear-system-of-equations.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['34']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('45');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('46');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-7764e489":""},[createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-7764e489":""},[createElement('header',{"id":"fixed-top","data-quickpaper-7764e489":""},["线性方程组"]),createElement('h1',{"id":"fixed-xyf","data-quickpaper-7764e489":""},["消元法"]),createElement('p',{"data-quickpaper-7764e489":""},["一般线性方程组是指形式为",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[0]","data-quickpaper-7764e489":""},[]),"的方程组，其中",createElement('span',{"kp-math-formula":"mathFormulas[1]","data-quickpaper-7764e489":""},[]),"，",createElement('span',{"kp-math-formula":"mathFormulas[2]","data-quickpaper-7764e489":""},[]),"，...，",createElement('span',{"kp-math-formula":"mathFormulas[3]","data-quickpaper-7764e489":""},[]),"代表n个未知量，s是方程的个数，",createElement('span',{"kp-math-formula":"mathFormulas[4]","data-quickpaper-7764e489":""},[]),"(i=1，2，...，s 且j=1，2，...，s)称为方程组的系数，",createElement('span',{"kp-math-formula":"mathFormulas[5]","data-quickpaper-7764e489":""},[]),"(j=1，2，...，s)称为常数项。"]),createElement('h2',{"data-quickpaper-7764e489":""},["定义"]),createElement('p',{"data-quickpaper-7764e489":""},["所谓",createElement('span',{"class":"important","data-quickpaper-7764e489":""},["线性方程组的初等变换"]),"是指下列三种变换："]),createElement('ul',{"data-quickpaper-7764e489":""},[createElement('li',{"data-quickpaper-7764e489":""},["1）用一非零的数乘莫一方程；"]),createElement('li',{"data-quickpaper-7764e489":""},["2）把一个方程的倍数加到另一个方程；"]),createElement('li',{"data-quickpaper-7764e489":""},["3）互换两个方程的位置。"])]),createElement('p',{"data-quickpaper-7764e489":""},["消元的过程就是反复施行初等变换的过程。"]),createElement('h1',{"id":"fixed-nwxlkj","data-quickpaper-7764e489":""},["n维向量空间"]),createElement('h2',{"data-quickpaper-7764e489":""},["定义"]),createElement('p',{"data-quickpaper-7764e489":""},["所谓数域P上的一个",createElement('span',{"class":"important","data-quickpaper-7764e489":""},["n维向量"]),"就是由数域P中n个数组组成的有序数组",createElement('span',{"class":"center-line","data-quickpaper-7764e489":""},["(a",createElement('sub',{"data-quickpaper-7764e489":""},["1"]),", a",createElement('sub',{"data-quickpaper-7764e489":""},["2"]),", ... , a",createElement('sub',{"data-quickpaper-7764e489":""},["n"]),")"]),"a",createElement('sub',{"data-quickpaper-7764e489":""},["i"]),"称为向量的",createElement('span',{"class":"important","data-quickpaper-7764e489":""},["分量"]),"。"]),createElement('h2',{"data-quickpaper-7764e489":""},["定义"]),createElement('p',{"data-quickpaper-7764e489":""},["如果n维向量",createElement('span',{"class":"center-line","data-quickpaper-7764e489":""},["α = (a",createElement('sub',{"data-quickpaper-7764e489":""},["1"]),", a",createElement('sub',{"data-quickpaper-7764e489":""},["2"]),", ... , a",createElement('sub',{"data-quickpaper-7764e489":""},["n"]),"),↵                β = (b",createElement('sub',{"data-quickpaper-7764e489":""},["1"]),", b",createElement('sub',{"data-quickpaper-7764e489":""},["2"]),", ... , b",createElement('sub',{"data-quickpaper-7764e489":""},["n"]),")"]),"的对应分量都相等，即",createElement('span',{"class":"center-line","data-quickpaper-7764e489":""},["a",createElement('sub',{"data-quickpaper-7764e489":""},["i"]),"= b",createElement('sub',{"data-quickpaper-7764e489":""},["i"]),"(其中i=1,2,...,n)"]),"就称这两个向量是",createElement('span',{"class":"important","data-quickpaper-7764e489":""},["相等"]),"的，记为α = β 。"]),createElement('h2',{"data-quickpaper-7764e489":""},["定义"]),createElement('p',{"data-quickpaper-7764e489":""},["分量全为零的向量",createElement('span',{"class":"center-line","data-quickpaper-7764e489":""},["(0,0,...,0)"]),"称为",createElement('span',{"class":"important","data-quickpaper-7764e489":""},["零向量"]),"，记为0；向量(-a",createElement('sub',{"data-quickpaper-7764e489":""},["1"]),", -a",createElement('sub',{"data-quickpaper-7764e489":""},["2"]),", ... , -a",createElement('sub',{"data-quickpaper-7764e489":""},["n"]),")↵            称为向量α = (a",createElement('sub',{"data-quickpaper-7764e489":""},["1"]),", a",createElement('sub',{"data-quickpaper-7764e489":""},["2"]),", ... , a",createElement('sub',{"data-quickpaper-7764e489":""},["n"]),")的",createElement('span',{"class":"important","data-quickpaper-7764e489":""},["负向量"]),"，记为-α。"]),createElement('h2',{"data-quickpaper-7764e489":""},["定义"]),createElement('p',{"data-quickpaper-7764e489":""},["设k为数域P中的数，向量",createElement('span',{"class":"center-line","data-quickpaper-7764e489":""},["(ka",createElement('sub',{"data-quickpaper-7764e489":""},["1"]),", ka",createElement('sub',{"data-quickpaper-7764e489":""},["2"]),", ... , ka",createElement('sub',{"data-quickpaper-7764e489":""},["n"]),")"]),"称为向量α = (a",createElement('sub',{"data-quickpaper-7764e489":""},["1"]),", a",createElement('sub',{"data-quickpaper-7764e489":""},["2"]),", ... , a",createElement('sub',{"data-quickpaper-7764e489":""},["n"]),")与数k的",createElement('span',{"class":"important","data-quickpaper-7764e489":""},["数量乘积"]),"，记为kα。"]),createElement('h2',{"data-quickpaper-7764e489":""},["定义"]),createElement('p',{"data-quickpaper-7764e489":""},["以数域P中的数作为分量的n维向量的全体，同时考虑到定义在它们上面的加法和数量乘法，称为数域P上的n维",createElement('span',{"class":"important","data-quickpaper-7764e489":""},["向量空间"]),"。"]),createElement('h1',{"id":"fixed-xxxgx","data-quickpaper-7764e489":""},["线性相关性"]),createElement('p',{"data-quickpaper-7764e489":""},["两个向量之间最简单的关系是成比例。所谓向量α与向量β成比例就是说有一数k使得：",createElement('span',{"class":"center-line","data-quickpaper-7764e489":""},["α = kβ"]),"在多个向量之间，成比例的关系表现为线性组合。"]),createElement('h2',{"data-quickpaper-7764e489":""},["定义"]),createElement('p',{"data-quickpaper-7764e489":""},["向量α称为向量组↵            β",createElement('sub',{"data-quickpaper-7764e489":""},["1"]),",β",createElement('sub',{"data-quickpaper-7764e489":""},["2"]),",...,β",createElement('sub',{"data-quickpaper-7764e489":""},["s"]),"的一个",createElement('span',{"class":"important","data-quickpaper-7764e489":""},["线性组合"]),"，如果有数域P中的数↵            k",createElement('sub',{"data-quickpaper-7764e489":""},["1"]),",k",createElement('sub',{"data-quickpaper-7764e489":""},["2"]),",...,k",createElement('sub',{"data-quickpaper-7764e489":""},["s"]),"，↵            如果有n级方阵B，使得",createElement('span',{"class":"center-line","data-quickpaper-7764e489":""},["α = k",createElement('sub',{"data-quickpaper-7764e489":""},["1"]),"β",createElement('sub',{"data-quickpaper-7764e489":""},["1"]),"+ k",createElement('sub',{"data-quickpaper-7764e489":""},["2"]),"β",createElement('sub',{"data-quickpaper-7764e489":""},["2"]),"+ ... + k",createElement('sub',{"data-quickpaper-7764e489":""},["s"]),"β",createElement('sub',{"data-quickpaper-7764e489":""},["s"])])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/linear-system-of-equations.paper?QuickPaper&type=script&lang=js&hash=7764e489
/*****************************************************************/
window.__etcpack__bundleSrc__['45']=function(){
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
                        this.$mathFormula.rightBottom('a', '11'),
                        this.$mathFormula.rightBottom('x', '1'),
                        "+",
                        this.$mathFormula.rightBottom('a', '12'),
                        this.$mathFormula.rightBottom('x', '2'),
                        "+...+",
                        this.$mathFormula.rightBottom('a', '1n'),
                        this.$mathFormula.rightBottom('x', 'n'),
                        "=",
                        this.$mathFormula.rightBottom('b', '1')
                    ),
                    this.$mathFormula.join(
                        this.$mathFormula.rightBottom('a', '21'),
                        this.$mathFormula.rightBottom('x', '1'),
                        "+",
                        this.$mathFormula.rightBottom('a', '22'),
                        this.$mathFormula.rightBottom('x', '2'),
                        "+...+",
                        this.$mathFormula.rightBottom('a', '2n'),
                        this.$mathFormula.rightBottom('x', 'n'),
                        "=",
                        this.$mathFormula.rightBottom('b', '2')
                    ),
                    "......",
                    this.$mathFormula.join(
                        this.$mathFormula.rightBottom('a', 's1'),
                        this.$mathFormula.rightBottom('x', '1'),
                        "+",
                        this.$mathFormula.rightBottom('a', 's2'),
                        this.$mathFormula.rightBottom('x', '2'),
                        "+...+",
                        this.$mathFormula.rightBottom('a', 'sn'),
                        this.$mathFormula.rightBottom('x', 'n'),
                        "=",
                        this.$mathFormula.rightBottom('b', 's')
                    )
                ),
                this.$mathFormula.rightBottom('x', 1),
                this.$mathFormula.rightBottom('x', 2),
                this.$mathFormula.rightBottom('x', 'n'),
                this.$mathFormula.rightBottom('a', 'ij'),
                this.$mathFormula.rightBottom('b', 'j')
            ];
        },
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/linear-system-of-equations.paper?QuickPaper&type=style&lang=css&hash=7764e489
/*****************************************************************/
window.__etcpack__bundleSrc__['46']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
