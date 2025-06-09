let tymczasowa1 = 0;
let tymczasowa2 = 0;

function aplikacja(numer_zgloszenia){
    const aplikowanie0 = document.getElementById("aplikacja-form-0");
    const aplikowanie1 = document.getElementById("aplikacja-form-1");

    if( numer_zgloszenia == 0){
        
        tymczasowa1 += 1;

        aplikowanie0.style.display = "block";
        aplikowanie0.style.visibility = "visible";

        aplikowanie1.style.display = "none";
        aplikowanie1.style.visibility = "hidden";

        if(tymczasowa1 == 2){
            aplikowanie0.style.display = "none";
            aplikowanie0.style.visibility = "hidden";
            tymczasowa1 = 0;
            tymczasowa2 = 0;
        }

    } else if( numer_zgloszenia == 1) {

        tymczasowa2 -= 1;

        aplikowanie1.style.display = "block";
        aplikowanie1.style.visibility = "visible";

        aplikowanie0.style.display = "none";
        aplikowanie0.style.visibility = "hidden";

        console.log(tymczasowa2,tymczasowa1)
        if(tymczasowa2 == -2){
            aplikowanie1.style.display = "none";
            aplikowanie1.style.visibility = "hidden";
            tymczasowa2 = 0;
            tymczasowa1 = 0;
        }
    } else {
        console.log("Error jakiś tam")
    }
};