var jsonPracownicy = {
    "pracownicy": [
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};

console.log(jsonPracownicy);

// Iteracja po każdym pracowniku za pomocą pętli forEach
jsonPracownicy.pracownicy.forEach(function(pracownik, index) {
    console.log("Index: " + index + " "+ pracownik.firstName + " " + pracownik.lastName);
});
