let on_off_jeden = 1;
let on_off_dwa = 1;
let on_off_trzy = 1;


function FAQ_jeden() {
    const opis = document.getElementById("FAQ_jeden");
    
    if (on_off_jeden === 1) {
        opis.style.display = "block";
        on_off_jeden = 0;
    } else {
        opis.style.display = "none";
        on_off_jeden = 1;
    }
};

function FAQ_dwa() {
    const opis = document.getElementById("FAQ_dwa");
    
    if (on_off_dwa === 1) {
        opis.style.display = "block";
        on_off_dwa = 0;
    } else {
        opis.style.display = "none";
        on_off_dwa = 1;
    }
};

function FAQ_trzy() {
    const opis = document.getElementById("FAQ_trzy");
    
    if (on_off_trzy === 1) {
        opis.style.display = "block";
        on_off_trzy = 0;
    } else {
        opis.style.display = "none";
        on_off_trzy = 1;
    }
};

function FAQ_cztery() {
    const opis = document.getElementById("FAQ_cztery");
    
    if (on_off_trzy === 1) {
        opis.style.display = "block";
        on_off_trzy = 0;
    } else {
        opis.style.display = "none";
        on_off_trzy = 1;
    }
};

function FAQ_piec() {
    const opis = document.getElementById("FAQ_piec");
    
    if (on_off_trzy === 1) {
        opis.style.display = "block";
        on_off_trzy = 0;
    } else {
        opis.style.display = "none";
        on_off_trzy = 1;
    }
};

function FAQ_szesc() {
    const opis = document.getElementById("FAQ_szesc");
    
    if (on_off_trzy === 1) {
        opis.style.display = "block";
        on_off_trzy = 0;
    } else {
        opis.style.display = "none";
        on_off_trzy = 1;
    }
};

function FAQ_siedem() {
    const opis = document.getElementById("FAQ_siedem");
    
    if (on_off_trzy === 1) {
        opis.style.display = "block";
        on_off_trzy = 0;
    } else {
        opis.style.display = "none";
        on_off_trzy = 1;
    }
};

function FAQ_osiem() {
    const opis = document.getElementById("FAQ_osiem");
    
    if (on_off_trzy === 1) {
        opis.style.display = "block";
        on_off_trzy = 0;
    } else {
        opis.style.display = "none";
        on_off_trzy = 1;
    }
};

function FAQ_dziewiec() {
    const opis = document.getElementById("FAQ_dziewiec");
    
    if (on_off_trzy === 1) {
        opis.style.display = "block";
        on_off_trzy = 0;
    } else {
        opis.style.display = "none";
        on_off_trzy = 1;
    }
};

function FAQ_dziesiec() {
    const opis = document.getElementById("FAQ_dziesiec");
    
    if (on_off_trzy === 1) {
        opis.style.display = "block";
        on_off_trzy = 0;
    } else {
        opis.style.display = "none";
        on_off_trzy = 1;
    }
};


function wyszukiwanie_function() {
    var szukanaFraza = document.getElementById("faq-search").value.toLowerCase(); // Pobieranie wyrazu wpisanego i zminia na małe literki
    var elementyFAQ = document.getElementsByClassName("pytanie-odpowiedz"); // Pobieramy każdy element z klasy o nazwie tej

    for (var i = 0; i < elementyFAQ.length; i++) {  // Petla która przechodzi przez każdy element aż do długości kazdego elementu FAQ
        var tekstElementu = elementyFAQ[i].innerText.toLowerCase(); // Pobieranie zawarości tekstowego danego elementu z klas pokolei i zamiana na małe literko, (a i za to odpowiada innerText bo może też on pobierać zawartość tekstową)
        
        if (tekstElementu.indexOf(szukanaFraza) > -1) { // Albo pokazanie albo ukrycie zalezne czy to co jest woisane znajduje sie w "tekstElementu", za to odpowiada nam indexOf()
            elementyFAQ[i].style.display = "block";
        } else {
            elementyFAQ[i].style.display = "none";
        }
    }
};
