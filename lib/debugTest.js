var leakArray = [];
debugger

exports.leak = function () {
    leakArray.push("leak" + Math.random());
};
