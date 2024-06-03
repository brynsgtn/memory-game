import Card from "./Card"



export default function CardsContainer({players, onClick}) {
    
    const clickHandler = (e, playerId) => {
        onClick(e, playerId)
    }
    return(
        <div className="row row-cols-1 row-cols-md-3 g-5 mt-3">
          {players.map((player) => (
            <Card 
                  key={player.id}
                  name={player.name}
                  nickname={player.nickname}
                  team={player.team}
                  url={player.url}
                  onClick={(e) => clickHandler(e, player.id)}
             />
          ))}
        </div>
    )
}