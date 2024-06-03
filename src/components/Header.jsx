import '../App.css'

export default function Header({currentScore, highScore}) {
    return (
        <>
            <h2 className="text-center pt-5 header"><img src="/nba.png" className="logo"/>NBA MEMORY GAME</h2>
            <p className="text-center fst-italic">"DON'T CLICK THE SAME PLAYER TWICE"</p>
            <p className='fw-semibold'>CURRENT SCORE: {currentScore}</p>
            <p className='fw-semibold'>HIGH SCORE: {highScore}</p>
        </>

    )
}