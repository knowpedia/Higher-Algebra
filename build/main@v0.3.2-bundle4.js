
/*************************** [bundle] ****************************/
// Original file:./src/matrix.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['35']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('47');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('48');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-630def3a":""},[createElement('div',{"class":"doc-view","id":"root-view","data-quickpaper-630def3a":""},[createElement('header',{"id":"fixed-top","data-quickpaper-630def3a":""},["矩阵"]),createElement('h1',{"id":"fixed-jzdys","data-quickpaper-630def3a":""},["矩阵的运算"]),createElement('h2',{"data-quickpaper-630def3a":""},["定义"]),createElement('p',{"data-quickpaper-630def3a":""},["设",createElement('span',{"class":"center-line","data-quickpaper-630def3a":""},[createElement('span',{"kp-math-formula":"mathFormulas[0]","data-quickpaper-630def3a":""},[]),"和",createElement('span',{"kp-math-formula":"mathFormulas[1]","data-quickpaper-630def3a":""},[])]),"是两个s x n矩阵，则矩阵",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[2]","data-quickpaper-630def3a":""},[]),"称为",createElement('span',{"class":"important","data-quickpaper-630def3a":""},["A和B的和"]),"，记为",createElement('span',{"class":"center-line","data-quickpaper-630def3a":""},["C = A + B"])]),createElement('p',{"data-quickpaper-630def3a":""},["根据矩阵加法的定义应用关于向量组的秩的性质，可用得出：",createElement('span',{"class":"center-line","data-quickpaper-630def3a":""},["秩(A + B) ≤ 秩(A) + 秩(B)"])]),createElement('h2',{"data-quickpaper-630def3a":""},["定义"]),createElement('p',{"data-quickpaper-630def3a":""},["设",createElement('span',{"class":"center-line","data-quickpaper-630def3a":""},[createElement('span',{"kp-math-formula":"mathFormulas[3]","data-quickpaper-630def3a":""},[]),"，",createElement('span',{"kp-math-formula":"mathFormulas[4]","data-quickpaper-630def3a":""},[])]),"那么矩阵",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[5]","data-quickpaper-630def3a":""},[]),"，其中",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[6]","data-quickpaper-630def3a":""},[]),"称为",createElement('span',{"class":"important","data-quickpaper-630def3a":""},["A与B的乘积"]),"，记为",createElement('span',{"class":"center-line","data-quickpaper-630def3a":""},["C = AB"])]),createElement('p',{"data-quickpaper-630def3a":""},["在上面的乘积定义中，我们要求第二个矩阵的行数与第一个矩阵的列数相等。"]),createElement('h2',{"data-quickpaper-630def3a":""},["定义"]),createElement('p',{"data-quickpaper-630def3a":""},["主对角线上的元素全是1，其余元素全是0的n*n矩阵",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[7]","data-quickpaper-630def3a":""},[]),"称为n级",createElement('span',{"class":"important","data-quickpaper-630def3a":""},["单位矩阵"]),"，记为",createElement('span',{"kp-math-formula":"mathFormulas[8]","data-quickpaper-630def3a":""},[]),"，或者在不致引起含混的时候简单写为",createElement('span',{"class":"important","data-quickpaper-630def3a":""},["E"]),"。"]),createElement('h2',{"data-quickpaper-630def3a":""},["定义"]),createElement('p',{"data-quickpaper-630def3a":""},["矩阵",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[9]","data-quickpaper-630def3a":""},[]),"称为矩阵A=",createElement('span',{"kp-math-formula":"mathFormulas[3]","data-quickpaper-630def3a":""},[]),"与数k的",createElement('span',{"class":"important","data-quickpaper-630def3a":""},["数量乘积"]),"，记为",createElement('span',{"class":"important","data-quickpaper-630def3a":""},["kA"]),"。换句话说，用数k乘矩阵就是把矩阵的每个元素都乘上k。"]),createElement('h2',{"data-quickpaper-630def3a":""},["定义"]),createElement('p',{"data-quickpaper-630def3a":""},["设",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[10]","data-quickpaper-630def3a":""},[]),"所谓",createElement('span',{"class":"important","data-quickpaper-630def3a":""},["A的转置"]),"就是指矩阵",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[11]","data-quickpaper-630def3a":""},[]),"显然，s*n矩阵的转置是n*s矩阵。"]),createElement('h1',{"id":"fixed-jzcjdhlsyc","data-quickpaper-630def3a":""},["矩阵乘积的行列式与秩"]),createElement('h2',{"data-quickpaper-630def3a":""},["定理"]),createElement('p',{"data-quickpaper-630def3a":""},["设A,B是数域P上的两个n*n矩阵，那么",createElement('span',{"class":"center-line","data-quickpaper-630def3a":""},["|AB| = |A||B|"]),"即矩阵乘积的行列式等于它的因子的行列式的乘积。"]),createElement('h2',{"data-quickpaper-630def3a":""},["定义"]),createElement('p',{"data-quickpaper-630def3a":""},["数域P上的n*n矩阵A称为",createElement('span',{"class":"important","data-quickpaper-630def3a":""},["非退化的"]),"，如果|A|≠0；否则称为",createElement('span',{"class":"important","data-quickpaper-630def3a":""},["退化的"]),"。"]),createElement('h2',{"data-quickpaper-630def3a":""},["定理"]),createElement('p',{"data-quickpaper-630def3a":""},["设A是数域P上的n*m矩阵，B是数域P上m*s矩阵，于是",createElement('span',{"class":"center-line","data-quickpaper-630def3a":""},["秩(AB) ≤ min[秩(A) , 秩(B)]"]),"即乘积的秩不超过各因子的秩。"]),createElement('h1',{"id":"fixed-jzdn","data-quickpaper-630def3a":""},["矩阵的逆"]),createElement('h2',{"data-quickpaper-630def3a":""},["定义"]),createElement('p',{"data-quickpaper-630def3a":""},["n级方阵A称为",createElement('span',{"class":"important","data-quickpaper-630def3a":""},["可逆的"]),"，如果有n级方阵B，使得",createElement('span',{"class":"center-line","data-quickpaper-630def3a":""},["AB = BA = E"]),"这里的E是n级单位矩阵。那么，我们就称矩阵B为A的",createElement('span',{"class":"important","data-quickpaper-630def3a":""},["逆矩阵"]),"，记为",createElement('span',{"kp-math-formula":"mathFormulas[12]","data-quickpaper-630def3a":""},[]),"。"]),createElement('h2',{"data-quickpaper-630def3a":""},["定义"]),createElement('p',{"data-quickpaper-630def3a":""},["设",createElement('span',{"kp-math-formula":"mathFormulas[13]","data-quickpaper-630def3a":""},[]),"是矩阵",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[15]","data-quickpaper-630def3a":""},[]),"中元素",createElement('span',{"kp-math-formula":"mathFormulas[14]","data-quickpaper-630def3a":""},[]),"的代数余子式，矩阵",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[16]","data-quickpaper-630def3a":""},[]),"称为A的",createElement('span',{"class":"important","data-quickpaper-630def3a":""},["伴随矩阵"]),"。"]),createElement('p',{"data-quickpaper-630def3a":""},["由行列式按一行（列）展开的公式立即得出：",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[17]","data-quickpaper-630def3a":""},[]),"其中d=|A|。"]),createElement('h2',{"data-quickpaper-630def3a":""},["定理"]),createElement('p',{"data-quickpaper-630def3a":""},["矩阵A是可逆的充分必要条件是A非退化，而",createElement('span',{"class":"center-line","kp-math-formula":"mathFormulas[18]","data-quickpaper-630def3a":""},[])]),createElement('h2',{"data-quickpaper-630def3a":""},["定理"]),createElement('p',{"data-quickpaper-630def3a":""},["A是一个s*n矩阵，如果P是s*s可逆矩阵，Q是n*n可逆矩阵，那么",createElement('span',{"class":"center-line","data-quickpaper-630def3a":""},["秩(A) = 秩(PA) = 秩(AQ)"])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/matrix.paper?QuickPaper&type=script&lang=js&hash=630def3a
/*****************************************************************/
window.__etcpack__bundleSrc__['47']=function(){
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
                this.$mathFormula.join("A=", this.getlittleMatrix('a', 'ij', 'sn'), "=", this.getMatrix('a', 's', "n")),
                this.$mathFormula.join("B=", this.getlittleMatrix('b', 'ij', 'sn'), "=", this.getMatrix('b', 's', "n")),
                this.$mathFormula.join("C=", this.getlittleMatrix('c', 'ij', 'sn'), "=", this.getAddlittleMatrix('a', 'b', 'ij', 'sn'), '=', this.getAddMatrix('a', 'b', 's', 'n')),
                this.getlittleMatrix('a', 'ik', 'sn'),
                this.getlittleMatrix('b', 'kj', 'nm'),
                this.getlittleMatrix('c', 'ij', 'sm'),
                this.$mathFormula.join(this.$mathFormula.rightBottom('c', 'ij'), "=", this.$mathFormula.rightBottom('a', 'i1'), this.$mathFormula.rightBottom('b', '1j'), "+", this.$mathFormula.rightBottom('a', 'i2'), this.$mathFormula.rightBottom('b', '2j'), "+ ... +", this.$mathFormula.rightBottom('a', 'in'), this.$mathFormula.rightBottom('b', 'nj'), "=", this.$mathFormula.sum("k=1", "n", this.$mathFormula.join(this.$mathFormula.rightBottom('a', 'ik'), this.$mathFormula.rightBottom('b', 'kj')))),
                this.$mathFormula.matrix([[1, 0, '...', 0], [0, 1, '...', 0], ['...', '...', '', '...'], [0, 0, '...', 1]]),
                this.$mathFormula.rightBottom('E', 'n'),
                this.getMatrix('ka', 's', 'n'),
                this.$mathFormula.join('A', '=', this.getMatrix('a', 's', 'n')),
                this.$mathFormula.join(this.$mathFormula.rightTop('A', 'T'), '=', this.getMatrixT('a', 's', 'n')),
                this.$mathFormula.rightTop('A', '-1'),
                this.$mathFormula.rightBottom('A', 'ij'),
                this.$mathFormula.rightBottom('a', 'ij'),
                this.$mathFormula.join('A', '=', this.getMatrix('a', 'n', 'n')),
                this.$mathFormula.join(this.$mathFormula.rightTop('A', '*'), '=', this.getMatrix('A', 'n', 'n')),
                this.$mathFormula.join('A', this.$mathFormula.rightTop('A', '*'), '=', this.$mathFormula.rightTop('A', '*'), 'A', '=', this.$mathFormula.matrix([['d', 0, '...', 0], [0, 'd', '...', 0], ['...', '...', '', '...'], [0, 0, '...', 'd']]), '=dE'),
                this.$mathFormula.join(this.$mathFormula.rightTop('A', '-1'), '=', this.$mathFormula.division('1', 'd'), this.$mathFormula.rightTop('A', '*'), '   (d=|A|≠0)')
            ];
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/matrix.paper?QuickPaper&type=style&lang=css&hash=630def3a
/*****************************************************************/
window.__etcpack__bundleSrc__['48']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
