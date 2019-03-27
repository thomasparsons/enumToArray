import enumToArray from "./enumToArray"

describe("when an enum is passed into the function, an array is returned", () => {
  describe("passing in an enum with one value", () => {
    it("array should have one value", () => {

      enum Character {
        JERRY = "jerry"
      }

      const arr = enumToArray(Character)
      expect(arr.length).to.equal(1)
      expect(arr[0]).to.equal("jerry")
      expect(arr[0]).to.equal(Character.JERRY)
    })
  })

  describe("passing in an enum with two values", () => {
    it("array should have two values", () => {

      enum Character {
        JERRY = "jerry",
        GEORGE = "george"
      }

      const arr = enumToArray(Character)
      expect(arr.length).to.equal(2)
      expect(arr[0]).to.equal("jerry")
      expect(arr[0]).to.equal(Character.JERRY)

      expect(arr[1]).to.equal("george")
      expect(arr[1]).to.equal(Character.GEORGE)
    })
  })

  describe("passing in an enum with three values", () => {
    it("array should have three values", () => {

      enum Character {
        JERRY = "jerry",
        GEORGE = "george",
        KRAMER = "kramer"
      }

      const arr = enumToArray(Character)
      expect(arr.length).to.equal(3)
      expect(arr[0]).to.equal("jerry")
      expect(arr[0]).to.equal(Character.JERRY)

      expect(arr[1]).to.equal("george")
      expect(arr[1]).to.equal(Character.GEORGE)

      expect(arr[2]).to.equal("kramer")
      expect(arr[2]).to.equal(Character.KRAMER)
    })
  })
})
