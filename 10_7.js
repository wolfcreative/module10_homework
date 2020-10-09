let arr = new Map([
    ["first", "первый"],
    ["second", "второй"],
    ["third", "третий"]
]);

for (let item of arr.keys()) {
    console.log(`Ключ — ${item}, значение — ${arr.get(item)}`);
}