class Animal {
    private energia: number = 50;

    protected aumentarEnergia(valor: number) {
        this.energia += valor;
    }

    protected diminuirEnergia(valor: number) {
        this.energia -= valor;
    }

    comer() {
        this.aumentarEnergia(10);
    }

    statusEnergia() {
        console.log(`Energia atual: ${this.energia}`);
    }
}

class Leao extends Animal {
    comer() {
        console.log("O leão caçou...");
        this.diminuirEnergia(20);
        this.aumentarEnergia(40);
    }
}

class Passaro extends Animal {
    comer() {
        console.log("O pássaro está comendo sementes...");
        this.aumentarEnergia(15);
    }
}

function alimentarAnimais(animais: Animal[]) {
    animais.forEach(a => {
        a.comer();
        a.statusEnergia();
    });
}

alimentarAnimais([
    new Leao(),
    new Passaro()
]);