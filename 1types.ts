const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello Typescript'

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13]
const numberArray2: Array<number> = [1, 1 , 2 , 3, 5, 8, 13]

const words: string[] = ['Hello', 'TS']

//Tuple
const contact: [string, number] = ['Jane', 123456]

//Any
let variable: any = 42
variable = 'New String'

//====================
function sayMyName(name: string): void { //void - функция ничего не возвращает
 console.log(name)
}

sayMyName('Хайзенберг')

// Never - 1) Функция возвращает ошибку 2)Постоянно что-то делает

function  throwError(message: string):never {
 throw new Error(message)
}

function infinite():never {
 while (true) {

 }
}


