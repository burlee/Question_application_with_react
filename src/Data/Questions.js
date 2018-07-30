import uuid from 'uuid';

export default{
    questions: [
        {
            id: uuid(),
            question: "Czym jest Closures?",
            badAnswer_1: "Zjawiskiem domykania tablic trzywymiarowych",
            badAnswer_2: "Zjawiskiem domykania tablic jednowymiarowych",
            correctlyAnswer_v2: "Obszarem stworzonym przez funkcję dla innych fn() i zmiennych"
        },
        {
            id: uuid(),
            question: "Jaka jest różnica pomiędzy === a == przy porównywaniu zmiennych?",
            correctlyAnswer: "== nie porównuje typu danych, a === porównuje dane oraz dodatkowo typ",
            badAnswer_1: "Nie ma różnicy",
            badAnswer_2: "=== nie porównuje typu danych, a == porównuje"
        },
        {
            id: uuid(),
            question: "Co wprowadza standard EcmaScript2016?",
            badAnswer_1: "Nowe metody do biblioteki jQuery",
            badAnswer_2: "Wprowadza nowe znaczniki do HTML5",
            correctlyAnswer_v2: "Wprowadza między innymi nową możliwość deklaracji zmiennych słowami let i const"
        },
        {
            id: uuid(),
            question: "Na czym polega hoising zmiennych?",
            correctlyAnswer: "Polega na wynoszeniu zmiennych na początek konteksu(kodu)",
            badAnswer_1: "Polega na ukrywaniu zawartości zmiennej",
            badAnswer_2: "Polega na opytmalizacji zmiennej"
        },
        {
            id: uuid(),
            question: "Co definiuje scope zmiennych?",
            badAnswer_1: "Rozmiar zmiennych",
            correctlyAnswer_v1: "Zasięg zmiennych",
            badAnswer_2: "Nie definiuje niczego"
        },
        {
            id: uuid(),
            question: "Co wyświetli się w konsoli deklarując po kolei: 1.Console.log(test) 2.let test=22",
            correctlyAnswer: "test is not defined",
            badAnswer_1: "22",
            badAnswer_2: "Null"
        },
        {
            id: uuid(),
            question: "Czym jest funkcja IIFE?",
            badAnswer_1: "Funkcją wywołującą asynchroniczne zapytania do serwera",
            correctlyAnswer_v1: "Funkcją wywołującą się natychmiast, ograniczającą zasięg globalny zmiennych",
            badAnswer_2: "Funkcją zwracającą odwróconą tablicę podaną w parametrze"
        },
        {
            id: uuid(),
            question: "Efektem działania kodu console.log('5' === 5) będzie:",
            correctlyAnswer: "False",
            badAnswer_1: "True",
            badAnswer_2: "Null"
        },
        {
            id: uuid(),
            question: "Dobrym miejscem na umieszczanie skryptów JavaScript jest:",
            correctlyAnswer: "Sekcja <body>",
            badAnswer_1: "Pomiędzy znaczniem <title></title>",
            badAnswer_2: "Sekcja <head>"
        },
        {
            id: uuid(),
            question: "Efektem działania kodu console.log('5' !== 5) będzie:",
            badAnswer_1: "False",
            badAnswer_2: "Undefined",
            correctlyAnswer_v2: "True"
        },
        {
            id: uuid(),
            testEndMessage: "Twój wynik to "
        }
    ]
};