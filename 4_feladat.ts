function osszesOszto(szam: number): number[] {
    var osztok: number[] = [1];
    
    for (var i: number = 2; i <= szam / 2; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }
    osztok.push(szam);

    return osztok;
}



function parosDarab(szamok: number []): number {
    var db = 0;
    
    for (var szam of szamok) {
        if (szam % 2 == 0) {
            db++;
        }
    }

    return db;
}



function fuggvenyhivasPalindrom(fv:() => string): boolean {
    var szoveg: string = fv();
    var palindromE: boolean = true;

    for (var i: number = 0; i <= szoveg.length / 2; i++) {
        //console.log(szoveg[i] , szoveg[szoveg.length - i - 1]);
        if (szoveg[i] !== szoveg[szoveg.length - i - 1]) {
            palindromE = false;
        }
    }

    return palindromE;
}