import './Square.css'

interface SquareProps {
    value: 'X' | 'O' | null
    onClick(): void
}

function Square({ value, onClick }: SquareProps): JSX.Element {
    // const style = `${styles.squares} ${value === 'X' ? styles.X : styles.O}`
    const style = `squares ${value}`

    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    )
}

export default Square
