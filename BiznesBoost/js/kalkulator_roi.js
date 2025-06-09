document.getElementById("formularz-roi").addEventListener("submit", function(wywolanie) {
    wywolanie.preventDefault();

    let wartoscKosztuTekst = document.getElementById("koszt").value;
    let wartoscZyskuTekst = document.getElementById("zysk").value;

    let kosztInwestycji = parseFloat(wartoscKosztuTekst);
    let zyskInwestycji = parseFloat(wartoscZyskuTekst);

    if (isNaN(kosztInwestycji) || isNaN(zyskInwestycji) || kosztInwestycji === 0) {
        document.getElementById("wynik-roi").textContent = "Proszę podać prawidłowe liczby w obu polach.";
        return;
    }

    let obliczoneROI = ((zyskInwestycji - kosztInwestycji) / kosztInwestycji) * 100;

    let wynikTekst = "ROI wynosi: " + obliczoneROI.toFixed(2) + "%";

    document.getElementById("wynik-roi").textContent = wynikTekst;
});