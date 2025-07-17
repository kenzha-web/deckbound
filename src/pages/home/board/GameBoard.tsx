import { useGameStore } from '../../../store/game/game.store.ts';
import { PlayerInfo } from './PlayerInfo.tsx';
import { HandCard } from './hand-card/HandCard.tsx';

export function GameBoard() {
    const { player, opponent, playCard } = useGameStore();

    return (
        <div className="relative h-screen w-full grid grid-rows-2">
            <section className="pt-36">
                <div>
                    <PlayerInfo player={opponent} typePlayer="opponent" />

                    <div className="-top-12 absolute w-full">
                        <div className="flex items-center justify-center">
                            {opponent.deck
                                .filter((card) => !card.isOnBoard)
                                .slice(0, 6)
                                .map((card, index, array) => (
                                    <HandCard
                                        card={card}
                                        arrayLength={array.length}
                                        index={index}
                                        key={card.id}
                                        onClick={() => playCard(card.id)}
                                        isHided
                                    />
                                ))}
                        </div>
                    </div>
                </div>

                <div className="h-56">
                    {opponent.deck
                        .filter((card) => card.isOnBoard)
                        .map((card) => (
                            <button className="h-[11.3rem] w-32 shadow inline-block mx-1 rounded-lg" key={card.id}>
                                <img alt={card.name} src={card.imageUrl} />
                            </button>
                        ))}
                </div>
            </section>

            <hr />

            <section className="pb-36">
                <div className="h-56 px-20 flex items-center justify-center gap-1">
                    {player.deck
                        .filter((card) => card.isOnBoard)
                        .map((card) => (
                            <button className="h-[11.3rem] w-32 shadow-2xl rounded-lg" key={card.id}>
                                <img alt={card.name} src={card.imageUrl} draggable="false" />
                            </button>
                        ))}
                </div>

                <PlayerInfo player={player} typePlayer="player" />

                <div className="-bottom-11 absolute w-full">
                    <div className="flex items-center justify-center">
                        {player.deck
                            .filter((card) => !card.isOnBoard)
                            .slice(0, 6)
                            .map((card, index, array) => (
                                <HandCard
                                    card={card}
                                    arrayLength={array.length}
                                    index={index}
                                    key={card.id}
                                    onClick={() => playCard(card.id)}
                                />
                            ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
