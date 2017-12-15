
const expect = require('chai').expect;
// 测试代码 先写测试  在写1业务让测试通过
// 测试驱动开发TDD
// 测试覆盖率 80% 95%
const { add, minus } = require('../main');

describe('两数相加等于和',() =>{
    // 一万点伤害
    it('1+1 应该等于2', () => {
        expect(add(1,1)).to.equal(2);
    });
    it('1+2 应该等于3', () => {
        expect(add(1,2)).to.equal(3);
    });
    it('0.4+ 0,7 应该等于1.1', () => {
        expect(add(0.4,0.7)).to.equal(1.1);
    });
});

describe('两数相减等于差', () => {
    it('4-2 应该等于2', () => {
        expect(minus(4,2)).to.equal(2);
    });
    it('3-3 应该等于0', () => {
        expect(minus(3,3)).to.equal(0);
    });
    it('2-4 应该等于-2', () => {
        expect(minus(2,4)).to.equal(-2);
    });
});
describe('add非数值测试',() => {
    it('3和null返回NaN', () => {
        expect(isNaN(add(3,null))).to.equal(true);
    });
});


describe('minus非数值测试',() => {
    it('null和underfined返回NaN', () => {
        expect(isNaN(minus(null,undefined))).to.equal(true);
    });
});