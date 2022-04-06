import Square from './Square'

import './Board.css'

type squareTypes = 'X' | 'O' | null

interface BoardProps {
    squares: squareTypes[]
    onClick(num: number): void
}
function Board({ squares, onClick }: BoardProps): JSX.Element {
    return (
        <div className='Board'>
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    )
}

export default Board
