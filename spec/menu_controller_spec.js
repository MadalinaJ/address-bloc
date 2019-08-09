
const MenuController = require("../controllers/MenuController");
describe("MenuController", () => {
    
    beforeEach(() => {
        this.menu = new MenuController();
      });
    describe("#getContactCount()", () => {
 
      it("should return 0 when no contacts are in the book", () => {
        const menu = new MenuController();
        expect(this.menu.getContactCount()).toBe(0);
    });

      it("should return 1 when there is exactly one contact in the book", () => {
        const menu = new MenuController();
        this.menu.contacts.push("Bob");
        expect(this.menu.getContactCount()).toBe(1)
      });
    });
  });