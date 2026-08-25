const {
    searchUsers,
    debounce
} = require("./problem_3_debounce_search");


const handleSearch = debounce((query) => {
    const results = searchUsers(query);

    console.log(`Search results for "${query}":`);
    console.log(results);
}, 300);


console.log("Starting debounce demo...");

handleSearch("A");
handleSearch("Al");
handleSearch("Ali");


setTimeout(() => {
    console.log("Demo finished.");
}, 500);