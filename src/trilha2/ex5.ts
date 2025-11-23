class Agenda {
    compromissos: string[] = [];

    adicionar(compromisso: string): void {
        this.compromissos.push(compromisso);
    }

    listar(): void {
        console.log("Compromissos:");
        this.compromissos.forEach((c, i) => {
            console.log(`${i + 1}. ${c}`);
        });
    }
}