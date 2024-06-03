


export default function Card({id, url, name, nickname, team, onClick}) {

  
    return (
        <>

            <div key={id}  className="col" onClick={onClick}>
                <div className="card h-100">
                    <img src={url} className="card-img-top" alt={name} />
                    <div className="card-body text-center">
                        <p className="card-title h5">{name}</p>
                        <p><small>"{nickname}"</small></p>
                        <p className="fw-semibold">{team}</p>
                    </div>
                </div>
            </div>    
        
     
        

        </>

    )
}