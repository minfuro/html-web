function pobierzPlikProjektu(numerProjektu) {
    var link = document.createElement("a"); // Tworzonko obiekt/elementu <a>, który będzie używany do wygenerowania linku aby pobrać pliki
    var zawartosc = "";
    var nazwaPliku = "";

    if (numerProjektu === 1) {
        nazwaPliku = "Kampania_Aurora_Lumina.txt";
        zawartosc = `
Podsumowanie projektu: Kampania "Aurora" – Przebudzenie marki Lumina

Cel projektu:
Celem projektu było stworzenie innowacyjnej strategii marketingowej dla firmy Lumina, umożliwiającej modernizację wizerunku, zwiększenie zaangażowania klientów oraz ekspansję na nowe rynki.

Opis przypadku:
Firma Lumina zmagała się z przestarzałym wizerunkiem, który nie przyciągał młodszych klientów. Aby odwrócić ten trend, zarząd zadecydował o kompleksowym rebrandingu. Proces odświeżenia obejmował redesign logo, nową paletę kolorów oraz zmianę strategii komunikacyjnej. Transformacja trwała 8 miesięcy i opierała się na warsztatach kreatywnych, konsultacjach z ekspertami oraz szczegółowej analizie trendów rynkowych.

Zakres analizy:
W ramach projektu przeprowadzono:
- Dogłębną analizę wizerunku marki przed rebrandingiem,
- Oceny skuteczności dotychczasowych kampanii reklamowych,
- Opracowanie nowej koncepcji wizualnej i komunikacyjnej,
- Przygotowanie kompleksowego planu wdrożenia nowych strategii.

Metodologia:
Zastosowane narzędzia obejmowały:
- Ankiety online skierowane do konsumentów,
- Warsztaty kreatywne z zespołem marketingowym,
- Analizę konkurencji oraz trendów branżowych,
- Testy A/B przygotowanych materiałów promocyjnych.

Główne wnioski:
- Znaczący wzrost rozpoznawalności marki Lumina,
- Wyższe zaangażowanie odbiorców w mediach społecznościowych,
- Wzrost sprzedaży o 22% w ciągu roku po wprowadzeniu zmian.

Rekomendacje:
- Utrzymywanie stałego monitoringu zmian rynkowych,
- Regularna aktualizacja strategii marketingowej,
- Inwestycja w rozwój zespołu kreatywnego.

Wnioski końcowe:
Projekt Kampania "Aurora" udowodnił, że przemyślana transformacja wizerunku może znacząco odmienić pozycję firmy na rynku, przynosząc długoterminowy wzrost i atrakcyjność marki.`;

    } else if (numerProjektu === 2) {
        nazwaPliku = "Analiza_InnovaTech_JiraPro.txt";
        zawartosc = `
Podsumowanie projektu: Analiza Case Study – Wdrożenie systemu zarządzania projektami w firmie InnovaTech

Cel projektu:
Celem projektu było przeprowadzenie kompleksowej analizy studium przypadku wdrożenia systemu zarządzania projektami w średniej wielkości firmie informatycznej InnovaTech. Analiza miała na celu ocenę efektywności wdrożenia, identyfikację kluczowych problemów oraz sformułowanie rekomendacji na przyszłość.

Opis przypadku:
Firma InnovaTech miała problem z równoczesnym zarządzaniem wieloma projektami IT, co skutkowało opóźnieniami, błędami komunikacyjnymi i nieoptymalnym wykorzystaniem zasobów. Zarząd zdecydował o wdrożeniu dedykowanego systemu do zarządzania projektami – Jira Pro. Proces wdrożeniowy trwał 4 miesiące, obejmując szkolenia, migrację danych oraz zmianę wewnętrznych procedur operacyjnych.

Zakres analizy:
W ramach projektu dokonano:
- Analizy stanu początkowego i głównych problemów przed wdrożeniem,
- Oceny przebiegu procesu wdrożeniowego (planowanie, realizacja, zmiany organizacyjne),
- Identyfikacji barier oraz oporu ze strony pracowników,
- Pomiaru efektywności systemu po 6 miesiącach użytkowania,
- Porównania wyników z podobnymi wdrożeniami w innych organizacjach.

Metodologia:
W projekcie wykorzystano następujące metody badawcze:
- Wywiady z pracownikami i menedżerami (10 osób),
- Analizę dokumentacji przed i po wdrożeniu,
- Ankiety satysfakcji z nowego systemu,
- Analizę statystyczną dotyczącą czasu realizacji projektów, liczby błędów oraz spotkań projektowych.

Główne wnioski:
- Średni czas realizacji projektów skrócił się o 18%,
- Liczba błędów komunikacyjnych zmniejszyła się o 32%,
- Uporządkowany proces zgłaszania zadań usprawnił pracę zespołów,
- Początkowy opór został zmniejszony dzięki szkoleniom i wsparciu ze strony kadry menedżerskiej.

Rekomendacje:
- Organizacja regularnych szkoleń dla nowych pracowników,
- Usprawnienie integracji Jira Pro z narzędziami takimi jak Slack i GitHub,
- Powołanie wewnętrznego zespołu ds. ciągłej optymalizacji procesów projektowych,
- Cykliczna ewaluacja wpływu systemu na efektywność organizacyjną.

Wnioski końcowe:
Analiza wykazała, że dobrze przeprowadzone wdrożenie systemu zarządzania projektami, wspierane przez systematyczną analizę i optymalizację, może znacząco poprawić organizację pracy i jakość realizowanych projektów.`;
    } else {
        var komukat = document.getElementById("blod");
        komukat.style.display = "block";
        komukat.style.visibility = "visible"
    }

    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(zawartosc); // Ustawiamy adres  dla pliku tekstowego w formacie  tekstowym // "encodeURIComponent(zawartosc)" koduje zawartość w taki sposób, aby znaki specjalne były coś poprabnie interpretowane (nie dało sie chyba bardziej już w Js tego utrudnić ludziom)
    

    link.download = nazwaPliku; // Ustalanie nazwy pobieranego pliku
    link.click(); // Przegladarka i kod robią coś takiego że jezeli knikniemy na stronie wywołanie funkcji to pobranie pliku też jest uruchamiane przez klikniecie tamto które udaje klikniecie jako pobieranie, albo coś w tym stylu

}
