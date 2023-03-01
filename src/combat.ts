import { Player } from './player';
import { Enemy } from './enemy';


class Combat {
    player: Player;
    enemy: Enemy;
    order: any[] = [];

    constructor(player: Player, enemy: Enemy) {
        this.player = player;
        this.enemy = enemy;
        this.order = [];
    }

    public start() {
        console.log('Combat started! You are fighting a ' + this.enemy.name + '!');
        this.Turn_order();
        console.log(this.order);

        while(true) {
            let attacker: Player | Enemy = this.order.shift();
            this.order.push(attacker);
            let target = this.order.filter((x) => x != attacker)[0];
            // console.log(target);
            this.Atack(attacker, target);
            if (this.player.data.hp <= 0) {
                console.log('You died!');
                break;
            }
            else if (this.enemy.data.hp <= 0) {
                console.log('You won!');
                break;
            }
        }

    }

    private Turn_order() {
        let mult = 1.5;
        if (this.player.data.spd > this.enemy.data.spd) {
            this.order.push(this.player);
            while (this.enemy.data.spd * mult < this.player.data.spd) {
                this.order.push(this.player);
                mult += 1.5;
            }
            this.order.push(this.enemy);
        }
        else {
            this.order.push(this.enemy);
            while (this.player.data.spd * mult < this.enemy.data.spd) {
                this.order.push(this.enemy);
                mult += 1.5;
            }
            this.order.push(this.player);
        }
    }

    private Atack(attacker: Player | Enemy, target: Player | Enemy) {
        let damage = attacker.data.atk - target.data.def;
        if (damage < 0) {
            damage = 0;
        }
        target.data.hp -= damage;
        console.log(attacker.name + ' attacked ' + target.name + ' for ' + damage + ' damage!');
    }

}

let player: Player = {
    id: 1,
    name: 'test',
    data: {
        hp: 100,
        mp: 150,
        atk: 100,
        def: 100,
        spd: 101,
    },
    skills: [],
};

let enemy: Enemy = {
    id: 1,
    name: 'test-Enemy',
    data: {
        hp: 100,
        mp: 100,
        atk: 99,
        def: 99,
        spd: 100,
    },
    skills: [],
};  

let combat = new Combat(player, enemy);
combat.start();
