function osszesOszto(szam) {
    var osztok = [1];
    for (var i = 2; i <= szam / 2; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }
    osztok.push(szam);
    return osztok;
}
function parosDarab(szamok) {
    var db = 0;
    for (var _i = 0, szamok_1 = szamok; _i < szamok_1.length; _i++) {
        var szam = szamok_1[_i];
        if (szam % 2 == 0) {
            db++;
        }
    }
    return db;
}
function fuggvenyhivasPalindrom(fv) {
    var szoveg = fv();
    var palindromE = true;
    for (var i = 0; i <= szoveg.length / 2; i++) {
        //console.log(szoveg[i] , szoveg[szoveg.length - i - 1]);
        if (szoveg[i] !== szoveg[szoveg.length - i - 1]) {
            palindromE = false;
        }
    }
    return palindromE;
}
