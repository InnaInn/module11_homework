const number = require('../index.js');

describe("tests for getPercents function",() => {
    it("take 30% of 200 to get 60", () => {
        expect(number(30,200)).toBe(60);
    })
    it("take 0% of 521 to get 60", () => {
        expect(number(0,521)).toBe(0);
    })
    it("take 100% of 5 to get 5", () => {
        expect(number(100,5)).toBe(5);
    })
    it("take negative percent to get error", () => {
        expect(() => number(-1,7)).toThrow("Percent should not be negative");
    })
});