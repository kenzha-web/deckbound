import type { IGameStore } from '../game.types.ts';
import { EnumTypeCard } from '../../../types/card.types.ts';
import { getCardById } from './attack-card.ts';

export const attackHeroAction = (state: IGameStore, attackerId: number): Partial<IGameStore> => {
    const isAttackerPlayer = state.currentTurn === 'player';
    const opponent = state[isAttackerPlayer ? 'opponent' : 'player'];

    const attacker = getCardById(attackerId, isAttackerPlayer ? state.opponent.deck : state.player.deck);

    const opponentTaunt = opponent.deck.find((card) => card.type === EnumTypeCard.taunt);

    if (attacker && attacker.isCanAttack && !opponentTaunt) {
        opponent.health -= attacker.attack;
        attacker.isCanAttack = false;

        if (opponent.health <= 0) {
            state.isGameOver = true;
        }
    }

    return {
        player: state.player,
        opponent: state.opponent,
        isGameOver: state.isGameOver,
    };
};
