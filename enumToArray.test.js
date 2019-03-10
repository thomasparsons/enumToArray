import enumToArray from "./enumToArray"

describe("when an enum is passed into the function, an array is returned", () => {
  describe("passing in an enum with one value", () => {
    it("array should have one value", () => {

      enum Status {
        ACTIVE = "active"
      }

      const arr = enumToArray(Status)
      expect(arr.length).to.equal(1)
      expect(arr[0]).to.equal("active")
      expect(arr[0]).to.equal(Status.ACTIVE)
    })
  })

  describe("passing in an enum with two values", () => {
    it("array should have two values", () => {

      enum Status {
        ACTIVE = "active",
        DELETED = "deleted"
      }

      const arr = enumToArray(Status)
      expect(arr.length).to.equal(2)
      expect(arr[0]).to.equal("active")
      expect(arr[0]).to.equal(Status.ACTIVE)

      expect(arr[1]).to.equal("deleted")
      expect(arr[1]).to.equal(Status.DELETED)
    })
  })

  describe("passing in an enum with three values", () => {
    it("array should have three values", () => {

      enum Status {
        ACTIVE = "active",
        DELETED = "deleted",
        INACTIVE = "inactive"
      }

      const arr = enumToArray(Status)
      expect(arr.length).to.equal(3)
      expect(arr[0]).to.equal("active")
      expect(arr[0]).to.equal(Status.ACTIVE)

      expect(arr[1]).to.equal("deleted")
      expect(arr[1]).to.equal(Status.DELETED)

      expect(arr[2]).to.equal("inactive")
      expect(arr[2]).to.equal(Status.INACTIVE)
    })
  })
})
