import { describe, expect, it } from 'vitest'
import { sum } from "./sum"
import { isPositiveInteger } from "./isPositiveInteger"


describe("Test function sum", () => {
    it("should be 1", () => {
        expect(sum(0)).toBe(1)
    })
    it("should be 2", () => {
        expect(sum(1)).toBe(2)
    })
    it("should be 8", () => {
        expect(sum(7)).toBe(8)
    })
})

describe("Test function isPositiveInteger", () => {
    it("should be true", () => {
        expect(isPositiveInteger(0)).toBeTruthy()
    })
    it("should be true", () => {
        expect(isPositiveInteger(14)).toBeTruthy()
    })
    it("should be true", () => {
        expect(isPositiveInteger(234)).toBeTruthy()
    })
})
