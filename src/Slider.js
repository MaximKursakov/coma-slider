export function Slider() {
    const mitarbeiterCollection = [{
        image: "Mitarbeiter1", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 1
    },
    {
        image: "Mitarbeiter1", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 2
    },
    {
        image: "Mitarbeiter1", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 3
    },
    {
        image: "Mitarbeiter1", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 4
    },
    {
        image: "Mitarbeiter1", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 5
    }]
    return(
        <div className="slider-container">
            <button className="slide-left"> left </button>
            <button className="slide-right"> right </button>
            <div className="slider">
                {mitarbeiterCollection.map((mitarbeiter) => {
                    return (
                        <div key={mitarbeiter.id} className="slider-item">
                            <div className="slider-image" style={{backgroundImage: "url(/images/Mitarbeiter1.png)",}}></div>
                            <div className="slider-info">
                                <h2>{mitarbeiter.name}</h2>
                                <h3>{mitarbeiter.title}</h3>
                                <p>{mitarbeiter.description}</p>
                                <p>{mitarbeiter.location}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}