import { useGameStore } from '../../store/game/game.store.ts';
import { GameBoard } from './board/GameBoard.tsx';
import WelcomeScreen from './WelcomeScreen.tsx';

function Home() {
    const { isGameStarted } = useGameStore();

    return <main>{isGameStarted ? <GameBoard /> : <WelcomeScreen />}</main>;
}

export default Home;
