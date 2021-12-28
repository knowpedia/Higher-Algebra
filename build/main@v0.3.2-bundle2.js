
/*************************** [bundle] ****************************/
// Original file:./src/determinant.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['33']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('43');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('44');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-2f0c3fef":""},[createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-2f0c3fef":""},[createElement('header',{"id":"fixed-top","data-quickpaper-2f0c3fef":""},["行列式"]),createElement('h1',{"id":"fixed-pl","data-quickpaper-2f0c3fef":""},["排列"]),createElement('h2',{"data-quickpaper-2f0c3fef":""},["定义"]),createElement('p',{"data-quickpaper-2f0c3fef":""},["由1，2，...，n组成的一个有序数组称为一个",createElement('span',{"class":"important","data-quickpaper-2f0c3fef":""},["n级排列"]),"。"]),createElement('h2',{"data-quickpaper-2f0c3fef":""},["定义"]),createElement('p',{"data-quickpaper-2f0c3fef":""},["在一个排列中，如果一对数的前后位置与大小顺序相反，即前面的数大于后面的数，那么它们就称为一个",createElement('span',{"class":"important","data-quickpaper-2f0c3fef":""},["逆序"]),"，一个排列中逆序的总数就称为这个排列的",createElement('span',{"class":"important","data-quickpaper-2f0c3fef":""},["逆序数"]),"。"]),createElement('h2',{"data-quickpaper-2f0c3fef":""},["定义"]),createElement('p',{"data-quickpaper-2f0c3fef":""},["逆序数为偶数的排列称为",createElement('span',{"class":"important","data-quickpaper-2f0c3fef":""},["偶排列"]),"；逆序数为奇数的排列称为",createElement('span',{"class":"important","data-quickpaper-2f0c3fef":""},["奇排列"]),"。"]),createElement('h1',{"id":"fixed-njhls","data-quickpaper-2f0c3fef":""},["n级行列式"]),createElement('h2',{"data-quickpaper-2f0c3fef":""},["定义"]),createElement('p',{"data-quickpaper-2f0c3fef":""},["n级行列式",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[0]","data-quickpaper-2f0c3fef":""},[]),"等于所有取自不同行不同列的n个元素的乘积",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[1]","data-quickpaper-2f0c3fef":""},[]),"的代数和，这里的",createElement('span',{"kp-math-formula":"mathFormulas[2]","data-quickpaper-2f0c3fef":""},[]),"是1,2,...,n的一个排列，每项都按照下列规则带有符号：当",createElement('span',{"kp-math-formula":"mathFormulas[2]","data-quickpaper-2f0c3fef":""},[]),"是偶排列时，带有正号，当",createElement('span',{"kp-math-formula":"mathFormulas[2]","data-quickpaper-2f0c3fef":""},[]),"是奇排列时，带有负号。"]),createElement('p',{"data-quickpaper-2f0c3fef":""},["上面的定义还可以写成",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[3]","data-quickpaper-2f0c3fef":""},[])]),createElement('h1',{"id":"fixed-hlsdjs","data-quickpaper-2f0c3fef":""},["行列式的计算"]),createElement('h2',{"data-quickpaper-2f0c3fef":""},["定义"]),createElement('p',{"data-quickpaper-2f0c3fef":""},["由sn个数排成的s行（横的）n列（纵的）的表",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[4]","data-quickpaper-2f0c3fef":""},[]),"称为一个s*n的",createElement('span',{"class":"important","data-quickpaper-2f0c3fef":""},["矩阵"]),"。"]),createElement('h2',{"data-quickpaper-2f0c3fef":""},["定义"]),createElement('p',{"data-quickpaper-2f0c3fef":""},["所谓数域P上矩阵的",createElement('span',{"class":"important","data-quickpaper-2f0c3fef":""},["初等行变换"]),"（或",createElement('span',{"class":"important","data-quickpaper-2f0c3fef":""},["初等列变换"]),"）是指下列三种变换："]),createElement('ul',{"data-quickpaper-2f0c3fef":""},[createElement('li',{"data-quickpaper-2f0c3fef":""},["1）以P中一个非零的数乘矩阵的某一行（或列）；"]),createElement('li',{"data-quickpaper-2f0c3fef":""},["2）把矩阵的莫一个行（或列）的c倍加到另一行（或列），这里的c是P中任意一个数；"]),createElement('li',{"data-quickpaper-2f0c3fef":""},["3）互换矩阵中的两行（或列）的位置。"])]),createElement('h1',{"id":"fixed-hlsayzk","data-quickpaper-2f0c3fef":""},["行列式按一行（列）展开"]),createElement('h2',{"data-quickpaper-2f0c3fef":""},["定义"]),createElement('p',{"data-quickpaper-2f0c3fef":""},["在行列式",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[5]","data-quickpaper-2f0c3fef":""},[]),"中划去元素",createElement('span',{"kp-math-formula":"mathFormulas[6]","data-quickpaper-2f0c3fef":""},[]),"所在的第i行与第j列，剩下的↵            （n-1）",createElement('sup',{"data-quickpaper-2f0c3fef":""},["2"]),"个元素按照原来的排法构成一个n-1级的行列式",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[7]","data-quickpaper-2f0c3fef":""},[]),"称为元素",createElement('span',{"kp-math-formula":"mathFormulas[6]","data-quickpaper-2f0c3fef":""},[]),"的",createElement('span',{"class":"important","data-quickpaper-2f0c3fef":""},["余子式"]),"，记为M",createElement('sub',{"data-quickpaper-2f0c3fef":""},["ij"]),"。"]),createElement('h2',{"data-quickpaper-2f0c3fef":""},["定义"]),createElement('p',{"data-quickpaper-2f0c3fef":""},["那么，取",createElement('span',{"class":"center-line","data-quickpaper-2f0c3fef":""},["A",createElement('sub',{"data-quickpaper-2f0c3fef":""},["ij"]),"= (-1)",createElement('sup',{"data-quickpaper-2f0c3fef":""},["i+j"]),"M",createElement('sub',{"data-quickpaper-2f0c3fef":""},["ij"])]),"，其中A",createElement('sub',{"data-quickpaper-2f0c3fef":""},["ij"]),"就称为元素a",createElement('sub',{"data-quickpaper-2f0c3fef":""},["ij"]),"的",createElement('span',{"class":"important","data-quickpaper-2f0c3fef":""},["代数余子式"]),"。"]),createElement('p',{"data-quickpaper-2f0c3fef":""},["对于n级别的行列式，我们就可以按照行（列也是类似的）展开",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[8]","data-quickpaper-2f0c3fef":""},[])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/determinant.paper?QuickPaper&type=script&lang=js&hash=2f0c3fef
/*****************************************************************/
window.__etcpack__bundleSrc__['43']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {
        data() {
            return {
                mathFormulas: {}
            };
        },
        mounted() {

            let j1j2jn = this.$mathFormula.join(this.$mathFormula.rightBottom('j', 1), this.$mathFormula.rightBottom('j', 2), '...', this.$mathFormula.rightBottom('j', 'n'));
            let a1j1a2j2anjn = this.$mathFormula.join(this.$mathFormula.rightBottom('a', this.$mathFormula.join('1', this.$mathFormula.rightBottom('j', 1))), this.$mathFormula.rightBottom('a', this.$mathFormula.join('2', this.$mathFormula.rightBottom('j', 2))), '...', this.$mathFormula.rightBottom('a', this.$mathFormula.join('n', this.$mathFormula.rightBottom('j', 'n'))));
            let hls = this.$mathFormula.matrix([
                [this.$mathFormula.rightBottom('a', '11'), '...', this.$mathFormula.rightBottom('a', '1j'), '...', this.$mathFormula.rightBottom('a', '1n')],
                ['...', '', '...', '', '...'],
                [this.$mathFormula.rightBottom('a', 'i1'), '...', this.$mathFormula.rightBottom('a', 'ij'), '...', this.$mathFormula.rightBottom('a', 'in')],
                ['...', '', '...', '', '...'],
                [this.$mathFormula.rightBottom('a', 'n1'), '...', this.$mathFormula.rightBottom('a', 'nj'), '...', this.$mathFormula.rightBottom('a', 'nn')],
            ], true);

            this.mathFormulas = [
                this.getMatrix('a', 'n', 'n', true),
                a1j1a2j2anjn,
                j1j2jn,
                this.$mathFormula.join(this.getMatrix('a', 'n', 'n', true), '=', this.$mathFormula.sum(j1j2jn, '', this.$mathFormula.join(this.$mathFormula.bracket(this.$mathFormula.rightTop("(-1)", this.$mathFormula.join('τ', this.$mathFormula.bracket(j1j2jn, 'small'))), 'small'), a1j1a2j2anjn))),
                this.getMatrix('a', 's', 'n'),
                hls,
                this.$mathFormula.rightBottom('a', 'ij'),
                this.$mathFormula.matrix([
                    [this.$mathFormula.rightBottom('a', '11'), '...', this.$mathFormula.rightBottom('a', '1,j-1'), this.$mathFormula.rightBottom('a', '1,j+1'), '...', this.$mathFormula.rightBottom('a', '1n')],
                    ['...', '', '...', '...', '', '...'],
                    [this.$mathFormula.rightBottom('a', 'i-1,1'), '...', this.$mathFormula.rightBottom('a', 'i-1,j-1,'), this.$mathFormula.rightBottom('a', 'i-1,j+1'), '...', this.$mathFormula.rightBottom('a', 'i-1,n')],
                    [this.$mathFormula.rightBottom('a', 'i+1,1'), '...', this.$mathFormula.rightBottom('a', 'i+1,j-1'), this.$mathFormula.rightBottom('a', 'i+1,j+1'), '...', this.$mathFormula.rightBottom('a', 'i+1,n')],
                    ['...', '', '...', '...', '', '...'],
                    [this.$mathFormula.rightBottom('a', 'n1'), '...', this.$mathFormula.rightBottom('a', 'n,j-1'), this.$mathFormula.rightBottom('a', 'n,j+1'), '...', this.$mathFormula.rightBottom('a', 'nn')],
                ], true),
                this.$mathFormula.join(hls, '=', this.$mathFormula.rightBottom('a', 'i1'), this.$mathFormula.rightBottom('A', 'i1'), '+', this.$mathFormula.rightBottom('a', 'i2'), this.$mathFormula.rightBottom('A', 'i2'), '+ ... +', this.$mathFormula.rightBottom('a', 'in'), this.$mathFormula.rightBottom('A', 'in'), '  （其中i=1,2,...,n）')
            ];
        },
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/determinant.paper?QuickPaper&type=style&lang=css&hash=2f0c3fef
/*****************************************************************/
window.__etcpack__bundleSrc__['44']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
