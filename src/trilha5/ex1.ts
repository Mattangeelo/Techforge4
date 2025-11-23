abstract class TaskManager {
    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    private tasks: string[] = [];

    addTask(task: string): void {
        if (!this.tasks.includes(task)) {
            this.tasks.push(task);
        }
    }

    listTasks(): string[] {
        return this.tasks;
    }
}

class DailyTasks extends TaskManager {
    private tasks: string[] = [];

    addTask(task: string): void {
        if (!this.tasks.includes(task)) {
            this.tasks.push(task);
        }
    }

    listTasks(): string[] {
        return this.tasks;
    }
}

// Teste
const projeto = new Project();
projeto.addTask("Criar layout");
projeto.addTask("Testar API");
projeto.addTask("Criar layout"); // duplicado → ignorado
console.log("Tasks do Projeto:", projeto.listTasks());

const diarias = new DailyTasks();
diarias.addTask("Arrumar mesa");
diarias.addTask("Responder emails");
diarias.addTask("Arrumar mesa"); // duplicado
console.log("Tarefas Diárias:", diarias.listTasks());