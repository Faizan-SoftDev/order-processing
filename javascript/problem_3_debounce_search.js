const users = [
    { id: 1, name: "Aamir" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Ahmed" },
    { id: 4, name: "Asad" }
];

function searchUsers(query) {
    return users.filter(user =>
        user.name.toLowerCase().includes(query.toLowerCase())
    );
}

function debounce(callback, delay) {
    let timer;

    function debouncedFunction(...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    }

    debouncedFunction.cancel = function () {
        clearTimeout(timer);
        timer = undefined;
    };

    return debouncedFunction;
}

module.exports = {
    searchUsers,
    debounce
};