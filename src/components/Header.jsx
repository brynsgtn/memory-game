import '../App.css'

export default function Header() {
    return (
        <>
            <h1 className="text-center mt-5 header"><img src="/nba.png" className="logo"/>NBA MEMORY GAME</h1>
            <p className="text-center">DON'T CLICK THE SAME PLAYER TWICE</p>
            <p>CURRENT SCORE: 0</p>
            <p>HIGH SCORE: 0</p>
        </>

    )
}