abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    private items: Record<string, number> = {};

    addItem(item: string, quantity: number): void {
        this.items[item] = (this.items[item] || 0) + quantity;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

class StoreInventory extends Inventory {
    private items: Record<string, number> = {};
    private MAX = 10;

    addItem(item: string, quantity: number): void {
        const atual = this.items[item] || 0;
        const novoValor = Math.min(this.MAX, atual + quantity);
        this.items[item] = novoValor;
    }

    removeItem(item: string): void {
        delete this.items[item];
    }

    getInventory(): Record<string, number> {
        return this.items;
    }
}

// Teste
const warehouse = new WarehouseInventory();
warehouse.addItem("Caixa", 100);
warehouse.addItem("Caixa", 50);
console.log("Warehouse:", warehouse.getInventory());

const store = new StoreInventory();
store.addItem("Camisa", 8);
store.addItem("Camisa", 10); // limite máximo = 10
console.log("Loja:", store.getInventory());
