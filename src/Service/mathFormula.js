export default {
    install(Knowpedia) {

        // 矩阵Axy
        Knowpedia.prototype.getMatrix = function (name, x, y,flag) {
            return this.$mathFormula.matrix([
                [this.$mathFormula.rightBottom(name, 11), this.$mathFormula.rightBottom(name, 12), '...', this.$mathFormula.rightBottom(name, "1" + y)],
                [this.$mathFormula.rightBottom(name, 21), this.$mathFormula.rightBottom(name, 22), '...', this.$mathFormula.rightBottom(name, "2" + y)],
                ["...", "...", "", "..."],
                [this.$mathFormula.rightBottom(name, x + "1"), this.$mathFormula.rightBottom(name, x + "2"), '...', this.$mathFormula.rightBottom(name, x + y)]
            ],flag);
        };

        // 矩阵Axy的转置
        Knowpedia.prototype.getMatrixT = function (name, x, y) {
            return this.$mathFormula.matrix([
                [this.$mathFormula.rightBottom(name, 11), this.$mathFormula.rightBottom(name, 21), '...', this.$mathFormula.rightBottom(name, x + "1")],
                [this.$mathFormula.rightBottom(name, 12), this.$mathFormula.rightBottom(name, 22), '...', this.$mathFormula.rightBottom(name, x + "2")],
                ["...", "...", "", "..."],
                [this.$mathFormula.rightBottom(name, "1" + y), this.$mathFormula.rightBottom(name, "2" + y), '...', this.$mathFormula.rightBottom(name, x + y)]
            ]);
        };

        // 矩阵(A+B)xy
        Knowpedia.prototype.getAddMatrix = function (name1, name2, x, y) {
            return this.$mathFormula.matrix([
                [this.$mathFormula.join(this.$mathFormula.rightBottom(name1, 11), "+", this.$mathFormula.rightBottom(name2, 11)), this.$mathFormula.join(this.$mathFormula.rightBottom(name1, 12), "+", this.$mathFormula.rightBottom(name2, 12)), '...', this.$mathFormula.join(this.$mathFormula.rightBottom(name1, "1" + y), "+", this.$mathFormula.rightBottom(name2, "1" + y))],
                [this.$mathFormula.join(this.$mathFormula.rightBottom(name1, 21), "+", this.$mathFormula.rightBottom(name2, 21)), this.$mathFormula.join(this.$mathFormula.rightBottom(name1, 22), "+", this.$mathFormula.rightBottom(name2, 22)), '...', this.$mathFormula.join(this.$mathFormula.rightBottom(name1, "2" + y), "+", this.$mathFormula.rightBottom(name2, "2" + y))],
                ["...", "...", "", "..."],
                [this.$mathFormula.join(this.$mathFormula.rightBottom(name1, x + "1"), "+", this.$mathFormula.rightBottom(name2, x + "1")), this.$mathFormula.join(this.$mathFormula.rightBottom(name1, x + "2"), "+", this.$mathFormula.rightBottom(name2, x + "2")), '...', this.$mathFormula.join(this.$mathFormula.rightBottom(name1, x + y), "+", this.$mathFormula.rightBottom(name2, x + y))]
            ]);
        };

        // (aij)sn
        Knowpedia.prototype.getlittleMatrix = function (a, ij, sn) {
            return this.$mathFormula.rightBottom(this.$mathFormula.bracket(this.$mathFormula.rightBottom(a, ij), 'small'), sn)
        };

        // (aij+bij)sn
        Knowpedia.prototype.getAddlittleMatrix = function (a, b, ij, sn) {
            return this.$mathFormula.rightBottom(this.$mathFormula.bracket(this.$mathFormula.join(this.$mathFormula.rightBottom(a, ij), "+", this.$mathFormula.rightBottom(b, ij)), 'small'), sn);
        };

    }
};
