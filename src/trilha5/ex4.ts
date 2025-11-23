abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    private votes: Record<string, number> = {};

    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        return Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1]) // Ordena por votos
            .map(([candidate, votes]) => ({ candidate, votes }));
    }
}

// Teste
const election = new Election();
election.voteFor("Ana");
election.voteFor("Bruno");
election.voteFor("Ana");
console.log("Election:", election.getResults());

const poll = new Poll();
poll.voteFor("João");
poll.voteFor("Maria");
poll.voteFor("Maria");
poll.voteFor("João");
poll.voteFor("Maria");
console.log("Poll:", poll.getResults());
