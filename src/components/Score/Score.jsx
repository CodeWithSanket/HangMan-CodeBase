function Score({ score }) {
    return (
        <div className="text-xl font-bold text-red-600">
            <span>Player Score: </span>
            <span className="text-blue-400">{score}</span>
        </div>
    )
}

export default Score;