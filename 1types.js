var isFetching = true;
var isLoading = false;
var int = 42;
var float = 4.2;
var num = 3e10;
var message = 'Hello Typescript';
var numberArray = [1, 1, 2, 3, 5, 8, 13];
var numberArray2 = [1, 1, 2, 3, 5, 8, 13];
var words = ['Hello', 'TS'];
//Tuple
var contact = ['Jane', 123456];
//Any
var variable = 42;
variable = 'New String';
//====================
function sayMyName(name) {
    console.log(name);
}
sayMyName('Хайзенберг');
// Never - 1) Функция возвращает ошибку 2)Постоянно что-то делает
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
