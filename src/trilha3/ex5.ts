abstract class Funcionario {
    constructor(
        private nome: string,
        private salario: number
    ) {}

    protected getSalario() {
        return this.salario;
    }

    abstract calcularBonus(): number;

    salarioComBonus(): number {
        return this.salario + this.calcularBonus();
    }
}

class Gerente extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.10;
    }
}

class Operario extends Funcionario {
    calcularBonus(): number {
        return this.getSalario() * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]) {
    funcionarios.forEach(f => {
        console.log("Salário final:", f.salarioComBonus());
    });
}


calcularSalarioComBonus([
    new Gerente("Carlos", 5000),
    new Operario("João", 3000)
]);