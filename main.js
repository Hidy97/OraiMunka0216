window.addEventListener("load", init)

function init() {
    console.log("hahó");
    /**változók deklarálása - lérehozása*/
    /* Változók inicializálása - értéket adunk egy változónak*/
    /**Gyengén típusos nyelv */
    var valt1 = "2";
    let valt2 = 2.45;
    const valt3 = 2; //**Az futásiidőben nem változtathatjuk meg az értékét! */
    /*Mindig kell kezdőérték!*/
    console.log("valt1: ", parseInt(valt1), typeof valt1)
    console.log("valt2: ", parseInt(valt2), typeof valt2)
    console.log("valt3: ", typeof valt3)

    let logikai = 3 < 5;
    console.log("logikai: ", logikai, typeof logikai);
    let eredmeny = valt1 + valt2; /*Két különböző típus esetén elvégzi a műveletet, amit akar.*/
    console.log("eredmneny", eredmeny, typeof eredmeny);
    elagazasok();
    veletlenszamok();
    ciklusok();
}

function elagazasok() {
    console.log("***************Elágazások**********************")
    var szam = 19;
    /*Ha a szám osztható kettővel, akkor írjuk ki, hogy páros 
    * különben páratlan
    */
    if (szam % 2 == 0) {
        console.log("páros");

    } else {
        console.log("páratlan");
    }

    /*Ha a szám osztható kettővel és 3al is, akkor írjuk ki, hogy mindkettővel osztható 
     * ha 2vel, akkor írjuk ki, hogy  2vel osztható, ha 3al, akkor írjuk azt
    * vagy egyikkel sem
     */
    if (szam % 2 == 0 && szam % 3 == 0) {
        console.log("Osztható 2vel és 3al is");
    } else if (szam % 2 == 0) {
        console.log("Osztható 2vel");
    } else if (szam % 3 == 0) {
        console.log("Osztható 3al");
    } else {
        console.log("Egyikkel sem osztható!")
    }

    /**Többágú elágazás: A hét napjait írjuk ki
     * Adott egy nap változó
     */

    var nap = 3;
    switch (nap) {
        case 1:
            console.log("Hétfő");
            break;
        case 2:
            console.log("Kedd");
            break;
        case 3:
            console.log("Szerda");
            break;
        case 4:
            console.log("Csütörtök");
            break;
        case 5:
            console.log("Péntek");
            break;
        case 6:
            console.log("Szombat");
            break;
        case 7:
            console.log("Vasárnap");
            break;
        default:
            console.log("Ez nem egy hét napja.");
    }
}

function veletlenszamok() {
    /**Többágú elágazás: A hét napjait írjuk ki
     * Adott egy nap változó
     * Generálunk egy véletlen számot 1 és 7 között, zárt intervallumban
     */

    var nap = parseInt(Math.random() * 7) + 1;
    /*
    [0, 1)
    [0, 2)
    [1, 3) 2.34, 1.98888, 2.999999, 2
    */
    switch (nap) {
        case 1:
            console.log("Hétfő");
            break;
        case 2:
            console.log("Kedd");
            break;
        case 3:
            console.log("Szerda");
            break;
        case 4:
            console.log("Csütörtök");
            break;
        case 5:
            console.log("Péntek");
            break;
        case 6:
            console.log("Szombat");
            break;
        case 7:
            console.log("Vasárnap");
            break;
        default:
            console.log("Ez nem egy hét napja.");
    }
}

function ciklusok() {
    console.log("***Ciklusok****")

    for (let index = 0; index < 10; index++) {
        var vszam = parseInt(Math.random() * 401) + 100;
        console.log(vszam);
    }

    console.log("Hátultesztelős")
    do {
        var vszam = parseInt(Math.random() * 31) - 20;
        console.log(vszam)
    } while (vszam <= 0);

    
}