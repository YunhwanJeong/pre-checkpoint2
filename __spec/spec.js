if(typeof module === "object" && typeof module.exports === "object") {
  var fs = require('fs');
  var srcIsAgeDiverse = fs.readFileSync('./isAgeDiverse/isAgeDiverse.js');
  var srcGetTeenager = fs.readFileSync('./getTeenager/getTeenager.js');
  var srcOldest = fs.readFileSync('./oldest/oldest.js');
  var srcTenThousandClub = fs.readFileSync('./tenThousandClub/tenThousandClub.js');
  var srcSumConsecutives = fs.readFileSync('./sumConsecutives/sumConsecutives.js');
  var srcUnique = fs.readFileSync('./unique/unique.js');

  var salesTeam = require('../salesTeam.js');
}
const testTeam = [
  { name: { first: 'Ingi', last: 'Kim' }, age: 10, sales: "$21000" },
  { name: { first: 'Johnny', last: 'Koo' }, age: 20, sales: "$15000" }
];

describe('Self Assessments 2', () => {

  it('isAgeDiverse', () => {
    if(typeof module === "object" && typeof module.exports === "object") {
      eval(srcIsAgeDiverse.toString());
    }

    expect(typeof isAgeDiverse).toBe('function');
    expect(isAgeDiverse(salesTeam)).toBe(true);

    var list1 = [{ age: 10 }, { age: 20 }, { age: 30 }, { age: 40 }, { age: 50 }, { age: 60 }, { age: 70 }, { age: 80 }];
    var list2 = [{ age: 9 }, { age: 20 }, { age: 30 }, { age: 40 }, { age: 50 }, { age: 60 }, { age: 70 }];
    expect(isAgeDiverse(list1)).toBe(true);
    expect(isAgeDiverse(list2)).toBe(false);
  });

  it('getTeenager', () => {
    if(typeof module === "object" && typeof module.exports === "object") {
      eval(srcGetTeenager.toString());
    }

    expect(typeof getTeenager).toBe('function');
    expect(getTeenager(salesTeam).length).toBe(4);
    expect(getTeenager(salesTeam).join()).toBe('Earline Erickson,Jin Jeffrey,Magda Mireles,Tama Tworek');
    expect(getTeenager(testTeam).length).toBe(1);
    expect(getTeenager(testTeam)[0]).toBe('Ingi Kim');
  });

  it('oldest', () => {
    if(typeof module === "object" && typeof module.exports === "object") {
      eval(srcOldest.toString());
    }

    expect(typeof oldest).toBe('function');
    expect(oldest(salesTeam)).toBe('The oldest student is Tonisha Taunton');
    expect(oldest(testTeam)).toBe('The oldest student is Johnny Koo');
  });

  it('tenThousandClub', () => {
    if(typeof module === "object" && typeof module.exports === "object") {
      eval(srcTenThousandClub.toString());
    }

    expect(typeof tenThousandClub).toBe('function');
    expect(tenThousandClub(salesTeam).join()).toBe(['Earline Erickson','Hyon Hampshire','Jin Jeffrey','Joleen Jolin'].join());
    expect(tenThousandClub(testTeam).join()).toBe(['Ingi Kim','Johnny Koo'].join());
  })

  it('sumConsecutives', () => {
    if(typeof module === "object" && typeof module.exports === "object") {
      eval(srcSumConsecutives.toString());
    }

    expect(typeof sumConsecutives).toBe('function');
    expect(sumConsecutives([1,4,4,4,0,4,3,3,1]).join()).toBe([1,12,0,4,6,1].join());
    expect(sumConsecutives([1,1,7,7,3]).join()).toBe([2,14,3].join());
    expect(sumConsecutives([-5,-5,7,7,12,0]).join()).toBe([-10,14,12,0].join());
  });

  it('unique', () => {
    if(typeof module === "object" && typeof module.exports === "object") {
      eval(srcUnique.toString());
    }

    expect(typeof unique).toBe('function');
    expect(unique([1,2,'E','E',2]).join()).toBe([1,2,'E'].join());
    expect(unique([1,2,2,4,6,6]).join()).toBe([1,2,4,6].join());
  });

});
