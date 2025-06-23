import type { IGameCard, IGameStore } from '../game.types.ts';

const getCardById = (cardId: number, deck: IGameCard[]) => deck.find((card) => card.id === cardId);

export const attackCardAction = (state: IGameStore, attackerId: number, targetId: number) => {
    const isAttackerPlayer = state.currentTurn === 'player';

    const attacker = getCardById(attackerId, isAttackerPlayer ? state.playerDeck.deck : state.opponentDeck.deck);

    const target = getCardById(targetId, isAttackerPlayer ? state.opponentDeck.deck : state.playerDeck.deck);

    if (attacker && target && attacker.isCanAttack) {
        target.health -= attacker.attack;
        attacker.isCanAttack = false;

        if (target.health <= 0) {
            if (isAttackerPlayer) {
                state.opponentDeck.deck = state.opponentDeck.deck.filter((card) => card.id !== targetId);
            } else {
                state.playerDeck.deck = state.playerDeck.deck.filter((card) => card.id !== targetId);
            }
        }
    }

    return { player: state.playerDeck, opponent: state.opponentDeck };
};
