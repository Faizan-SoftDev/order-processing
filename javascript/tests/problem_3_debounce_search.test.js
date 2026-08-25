const test = require("node:test");
const assert = require("node:assert");

const {
    searchUsers,
    debounce
} = require("../problem_3_debounce_search");


test("searchUsers should perform case-insensitive search", () => {
    const result = searchUsers("ALI");

    assert.deepStrictEqual(result, [
        { id: 2, name: "Ali" }
    ]);
});


test("debounce should execute callback after delay", async () => {
    let called = false;

    const debouncedFunction = debounce(() => {
        called = true;
    }, 300);

    debouncedFunction();

    assert.strictEqual(called, false);

    await new Promise(resolve => setTimeout(resolve, 350));

    assert.strictEqual(called, true);
});
test("debounce should execute callback only once for rapid calls", async () => {
    let callCount = 0;

    const debouncedFunction = debounce(() => {
        callCount += 1;
    }, 300);

    debouncedFunction();

    await new Promise(resolve => setTimeout(resolve, 100));

    debouncedFunction();

    await new Promise(resolve => setTimeout(resolve, 100));

    debouncedFunction();

    assert.strictEqual(callCount, 0);

    await new Promise(resolve => setTimeout(resolve, 350));

    assert.strictEqual(callCount, 1);
});
test("debounce should forward arguments to callback", async () => {
    let receivedQuery = null;

    const debouncedFunction = debounce((query) => {
        receivedQuery = query;
    }, 300);

    debouncedFunction("Ali");

    assert.strictEqual(receivedQuery, null);

    await new Promise(resolve => setTimeout(resolve, 350));

    assert.strictEqual(receivedQuery, "Ali");
});
test("searchUsers should return all users for an empty query", () => {
    const result = searchUsers("");

    assert.deepStrictEqual(result, [
        { id: 1, name: "Aamir" },
        { id: 2, name: "Ali" },
        { id: 3, name: "Ahmed" },
        { id: 4, name: "Asad" }
    ]);
});
test("debounce should allow cancelling a pending callback", async () => {
    let called = false;

    const debouncedFunction = debounce(() => {
        called = true;
    }, 300);

    debouncedFunction();

    debouncedFunction.cancel();

    await new Promise(resolve => setTimeout(resolve, 350));

    assert.strictEqual(called, false);
});