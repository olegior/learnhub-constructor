/* 
    @выделение текста
    текст обернутый в две двойные кавычки "" - выделение жирным
                     три двойные кавычки """ - выделение курсивом
                     четыре двойные кавычки """" - выделение тэгом


    объект lesson
    title - название темы, заголовок 3 уровня
    content - содержимое урока
        img - ссылка на картинку
        title - название подтемы
        text - обычный текст урока, может содержать @выделение текста
        code - фрагмент кода, для правильного отображения отсупов - вставлять используя ` `, без сиволов табуляции в начале второй и последующих строк
        ulist, olist - списки ненумерованный и нумерованный
        link - ссылка на сторонний ресурс, объект с полями href и title,
        note - сноска "важно"
*/      



export const lesson = {
    title: '1.1. Переменные',
    content: [

        { img: 'https://redev.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F39a3b7e4-95e5-4dae-98d4-2764b6112d46%2FUntitled.jpeg?table=block&id=0dd6a567-1326-4f2b-85ce-6b568a606378&spaceId=6661104d-9510-4a9e-8688-ef35a5d42a1d&width=2000&userId=&cache=v2' },
        { title: 'Что же такое переменная?' },
        { text: '""Переменная"" - это поименованное хранилище для данных. 🤨' },
        { text: 'Океееей, тебе может не понравится слово """поименованное""". Тогда еще один вариант.' },
        { text: '""Переменная"" - это контейнер, который хранит какое-то значение. Например, контейнер для хранения количества яблок в корзине.' },
        {
            code: `let appleCount = 6;
console.log(appleCount); //выводит 6`
        },
        { text: `Значение переменной может быть любым - числом, строкой, объектом, массивом и т.д.` },
        { text: `Схема создания переменной может быть такой:` },
        {
            code: `ключевоеСлово имяПеременной = значениеПеременной;

let firstName = "Pavel";`},

        { title: 'Как объявить переменную?' },
        { text: 'В JavaScript существует ""3 способа"" объявить переменную:' },
        { ulist: ['let', 'const', 'var'] },
        { text: `Первые 2 способа являются современными, а ""var"" устарел. В новом коде не используется. В старых примерах ты будешь его еще видеть.` },
        {
            code: `let num = 5;
const str = "Redev";
var isAdmin = true;`},

        { title: 'Как именовать переменные?' },
        { ulist: ['Первый символ не может быть цифрой.', 'Имя переменной должно содержать только буквы, цифры или символы $ и _.'] },
        { text: 'В JavaScript есть несколько зарезервированных слов, которые не могут использоваться в качестве имен переменных:' },
        {
            ulist: [`""""var"""", """"let"""", """"const"""" - слова, которые используются для объявления переменных;`,
                `""""function"""" - слово, которое используется для объявления функций;`,
                `""""class"""" - слово, которое используется для объявления классов;`,
                `""""break"""", """"case"""", """"catch"""", """"continue"""", """"debugger"""", """"default"""", """"delete"""", """"do"""", """"else"""", """"finally"""", """"for"""", """"in"""", """"instance"""", """"of"""", """"new"""", """"return"""", """"switch"""", """"this"""", """"throw"""", """"try"""", """"typeof"""", """"void"""", """"while"""", """"with"""" - слова, которые используются в синтаксисе языка javascript;`,
                `""""if"""", """"else"""", """"true"""", """"false"""", """"null"""", """"undefined"""" - слова, которые используются для логических операций над данными.`
            ]
        },
        {
            code: `let age = 25; // ошибки не будет
let age123 = 25; // ошибки не будет
let 123age = 25; // ошибка
let 15 = 25; // ошибка
let name_abc = 25; // ошибки не будет
let name-abc = 25; // ошибка`},
        { text: `Важно следовать стандартам названия переменных и избегать использования этих слов в качестве имен переменных, чтобы избежать ошибок и неожиданного поведения кода.` },

        { title: 'Важность регистра и осознанное именование' },
        { text: `JavaScript - регистрозависимый язык, что означает, что регистр букв в названиях переменных, функций и т.д. имеет значение. Например, переменная "myVariable" и "myvariable" считаются разными. ` },
        { text: `Это означает, что при объявлении переменной или функции необходимо быть внимательным к регистру и использовать их обдуманно во всем коде. Иначе это может привести к ошибкам и непредсказуемому поведению кода.` },
        { text: '""Осознанное именование переменных"" в JavaScript является важным аспектом программирования, поскольку оно помогает сделать код более читаемым и понятным.' },
        { text: `Когда переменные имеют осмысленные имена, которые соответствуют их функции или назначению, это помогает другим разработчикам быстро понять, что делает код и как он работает. Это также помогает избежать ошибок и неожиданного поведения кода, поскольку разработчик может легко определить, какой код относится к какой переменной. Сравни 👇🏻` },
        {
            code: `const a = 25; //не понятно что означает а!
const age = 25; // понятно, речь идет про возраст`},

        { title: `camelCase и snake_case` },
        { img: 'https://redev.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0e473ef8-994b-4f93-80d4-3ffaae64d48d%2FUntitled.jpeg?table=block&id=eee351a8-43c7-42be-ad20-712f8f995130&spaceId=6661104d-9510-4a9e-8688-ef35a5d42a1d&width=2000&userId=&cache=v2' },
        { text: `Имена переменных могут состоять из нескольких слов! Что делать в таком случае? Как именовать переменные? Вот ответ 👇🏻` },
        { text: `""сamelCase"" и ""snake_case"" - это два стиля написания имен переменных в JavaScript.` },
        { text: `""сamelCase"" - это когда каждое слово в имени переменной начинается с заглавной буквы, но без пробелов между словами. ""Например: 'myVariableName'"". Этот стиль принято использовать в большинстве случаев, он легко читается и понимается.` },
        { text: `""Snake_case"" - это когда каждое слово в имени переменной разделено подчеркиванием. ""Например: 'my_variable_name'"". ` },
        { text: 'Оба стиля допустимы в JavaScript, но рекомендуется использовать camelCase, так как этот стиль считается более стандартным и принятым в основном сообществе разработчиков.' },

        { title: 'Отличия let и const' },
        { text: `Переменную, объявленную с помощью ""let"" можно менять. Например, вот так 👇🏻` },
        {
            code: `let num = 5;
num = 6;// значение переменной num изменится`},
        { text: `Переменную с const ""нельзя изменять"".` },
        {
            code: `const num = 5;
num = 6; // будет ошибка`},
        { text: `По этой же логике константу ""нельзя создавать пустой"".` },
        {
            code: `const num;// будет ошибка
let num;// значение будет undefined `},

        { title: 'Отличия let и var' },
        { text: `1. Переменную с ""var"" можно объявлять повторно с таким же именем.` },
        {
            code: `var num = 10;
var num = 15;
console.log(num);// переменная просто перезапишется и будет 15

let num = 10;
let num = 15;
console.log(num);// с let будет ошибка ибо нельзя 
                 // создавать переменные с одинаковым именем`},
        { text: `2. ""Область видимости."" ` },
        { text: `У ""let"" она блочная, а у ""var"" функциональная. То есть ""let"" ограничивается """ЛЮБЫМИ ФИГУРНЫМИ""" скобками, а ""var"" только функцией.` },
        {
            code: `{
let num = 1;
console.log(num); // тут переменная будет видна
}
console.log(num); // тут уже будет ошибка
------------------------------------------------------
{
var num = 1;
console.log(num); // тут переменная будет видна
}
console.log(num); // и тут тоже переменная будет видна
------------------------------------------------------
function func(){
	var num = 1;
	console.log(num); // тут переменная будет видна
}
console.log(num); // тут уже будет ошибка`},
        { text: `3. ""Hoisting."" ` },
        { text: `Hoisting - это механизм, который позволяет JavaScript поднимать объявления переменных в начало текущего контекста выполнения. В результате этого переменные могут ""использоваться до того, как они объявлены в коде"".` },
        { text: `""ВАЖНО"": при этом значение ее будет undefined """(пустота)"""! Если же попробовать достучаться до объявленной переменной с помощью ""let"", то будет ошибка.` },
        {
            code: `console.log(num);// undefined
var num = 10;

console.log(num);// ошибка
let num = 10;`},
        { title: 'Итого' },
        {
            olist: [
                `Есть 3 способа объявить переменную (""""let"""", """"const"""", """"var"""")`,
                `C """"const"""" - переменная которую нельзя изменить.`,
                `Регистр важен!`,
                `Лучше использовать ""camelCase"" чем ""snake_case""`,
                `Для собеседования важно знать 3 отличия """"let"""" и """"var""""! Заучивай`
            ]
        },

        { title: `Еще материал по теме:` },
        // { olist: [`<a target="_blank" href="https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Variables ">https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Variables </a>`] },
        { link: { href: 'https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Variables', title: 'https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Variables' } },
        { title: `Задания` },
        {
            olist: [`Создай две переменные с именами ""name"" и ""age"" и присвой им любые значения.`,
                `Создай переменную ""nameAge"" и присвой ей значение, равное объединению (+) значений переменных ""name"" и ""age"".`,
                ` Выведи переменную ""nameAge"" в консоль.`,
                `Что выведет в консоль?`,]
        },
        {
            code: `const studentName = "John";
studentName = "Paul";
console.log(studentName); //?`},
        {
            code: `var age = 25;
var age = 26;
console.log(age);//?`},
        {
            code: `let age = 25;
let age = 26;
console.log(age);//?`},
        {
            code: `let age = 25;
console.log(age);//?
age = 30;
console.log(age);//?`},
        {
            code: `console.log(age);//?
let age = 25;`},
        {
            code: `console.log(age);//?
var age = 25;`},
        {
            title: `Помоги сделать эту эту главу лучше! Дай обратную связь, а мы прислушаемся к ней и сделаем ЛУЧШИЙ учебник по JavaScript для тебя и остальных студентов!
Заполни форму 👇🏻`},
        { link: { href: `https://forms.gle/7beAZaxvStz4zFnB6`, title: `https://forms.gle/7beAZaxvStz4zFnB6` } },
        { note: '""ИСКЛЮЧЕНИЕ"". ""typeof null"" не вернет ""null"". Будет ""object"". Почему? Это просто ошибка в JavaScript с первой его версии. Эту ошибку не фиксят по причине обратной совместимости. Уже слишком много кода учитывает эту ошибку и её исправление приведет к куче багов 😭' }

    ]
}