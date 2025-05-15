"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(Val) {
    return Val.toUpperCase();
}
getUpper("hello");
function signUpUser(name, email, isPaid) {
}
signUpUser("DaaNkwa", "derek@samdek", false);
var loginUser = function (name, email, isPaid) { };
loginUser("Obiba", "obiba@samdek", false);
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "Hero is ".concat(hero);
});
