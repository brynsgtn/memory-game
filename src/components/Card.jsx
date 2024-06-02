import players from "../../playersinfo";


export default function Card() {
    return (
        <>
        <div className="row row-cols-1 row-cols-md-3 g-4">
        {players.map((player) => {
            return (
            <div key={player.id}  className="col">
                <div className="card h-100">
                    <img src={player.url} className="card-img-top" alt={player.name} />
                    <div className="card-body text-center">
                        <p className="card-title h5">{player.name}</p>
                        <p><small>"{player.nickname}"</small></p>
                        <p><em>{player.team}</em></p>
                    </div>
                </div>
            </div>    
            )
        })}
        </div>

        </>

    )
}