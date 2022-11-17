import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"

export function Slider() {
    const mitarbeiterCollection = [{
        image: "Mitarbeiter1", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 1
    },
    {
        image: "Mitarbeiter2", name: "Maxim", title: "Frontend Developer & Abenteuerfreak", location: "Coma AG (München)" , description: `Ein Tag, welcher mit einem "Hello World" beginnt, könnte für ihn kaum besser anfangen. Sobald es nämlich an die erste Zeile code geht, vergeht für ihn die Zeit wie im Flug. Wenns aber doch mal nach einer Auszeit von Elektronik bedarf, verschlägt es Ihn auch gerne nach Thailand, wo er lediglich mit einem Klapphandy verschiedenste Landschaften erkundet oder mit anderen Muay Thai Kämpfern trainiert`, id: 2
    },
    {
        image: "Mitarbeiter3", name: "Kathrin", title: "Personalmanagerin & Genussmensch", location: "Coma AG (München)" , description: "Der Berg ruft! In der Arbeit locken Berge an Bewerbungen, zuhause die Berge und Seen der bayerischen Voralpen. Am liebsten genießt Kathrin die Schönheit der Natur mit ihrer Familie und auf dem Mountainbike. Oder sie trifft sich mit Freunden zu Pasta, Vino, Cappuccino & Co.", id: 3
    },
    {
        image: "Mitarbeiter4", name: "Daniel", title: "Web-Entwickler & Freizeitnerd", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 4
    },
    {
        image: "Mitarbeiter5", name: "Philipp", title: "Projektmanager & Technik-Nerd", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 5
    },
    {
        image: "Mitarbeiter6", name: "Rike", title: "Projektmanagerin & To-do-Listen-Aficionada", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 6
    },
    {
        image: "Mitarbeiter7", name: "Simone", title: "Projektmanagerin & Entdeckerin", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 7
    },
    {
        image: "Mitarbeiter8", name: "Patrick", title: "UX/UI Designer & Zukunftsdenker", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 8
    },
    {
        image: "Mitarbeiter9", name: "Nicole", title: "Content Managerin & pragmatisch verrückt", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 9
    },
    {
        image: "Mitarbeiter10", name: "Valentin", title: "Web-entwickler & Quebrantahuesos", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 10
    },
    {
        image: "Mitarbeiter11", name: "Matthias", title: "Web-Entwickler & Adrenalin-Junkie", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 11
    },
    {
        image: "Mitarbeiter12", name: "Samira", title: "UX/UI Designerin & Atheletin mit Taktgefühl", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 12
    },
    {
        image: "Mitarbeiter13", name: "Martin", title: "Vorstand & Netz-Profi", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 13
    },
    {
        image: "Mitarbeiter14", name: "Marina", title: "Finanz- und Office-Managerin & Geocacherin", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 14
    },
    {
        image: "Mitarbeiter15", name: "Audrey", title: "Etatdirektorin & Genießerin", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 15
    },
    {
        image: "Mitarbeiter16", name: "Patricia", title: "Art Director Digital & Weltenbummlerin", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 16
    },
    {
        image: "Mitarbeiter17", name: "Jerome", title: "Technischer Projektmanager & Stoiker", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 17
    },
    {
        image: "Mitarbeiter18", name: "Peter", title: "Projektmanager & Hobby-Pilot", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 18
    },
    {
        image: "Mitarbeiter19", name: "Sybille", title: "Online-Texterin & Ordnungsfreak", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 19
    },
    {
        image: "Mitarbeiter20", name: "Annika", title: "Web-Entwicklerin & Künstlerin", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 20
    },
    {
        image: "Mitarbeiter21", name: "Nele", title: "Projektmanagerin & Globetrotterin", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 21
    },
    {
        image: "Mitarbeiter22", name: "Eileen", title: "Digital Marketing Managerin & Grenzgängerin", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 22
    },
    {
        image: "Mitarbeiter23", name: "Elon Musk", title: "Putzkraft & Geringverdiener", location: "Coma AG (München)" , description: "putzt manchmal ok", id: 23
    }]

    const [position, setPosition] = useState(1)
    const [sliderWidth, setSliderWidth] = useState(0)
    const [controllerWidth, setControllerWidth] = useState(0)

    const container = useRef()
    const controller = useRef()
    useEffect(() => {
        setSliderWidth(container.current.offsetWidth)
        setControllerWidth(controller.current.offsetWidth)
    })

    function slideRight() {
        if (position < mitarbeiterCollection.length ) {
            setPosition(position + 1)
        }
        else {
            setPosition(1)
        }
    }

    function slideLeft() {
        if (position-1  > 0) {
            setPosition(position - 1)
        }
        else {
            setPosition(mitarbeiterCollection.length)
        }
    }

    return(
        <div className="slider-container" 
        >
            <div className="header">
                <h1>Coma ag Slider</h1>
                <p>Hey! Ich hab mir mal die Freiheit genommen schonmal einen fatalen Bug (s.slide 2) zu fixen und eine Animation für die Scrollleiste unter des Sliders hinzuzufügen :) <br></br> (kleiner bug: wenn man die Screenwidth ändert muss man erst die Seite neu Laden damit sie wieder responsive wird)</p>
            </div>
            <div className="slider" ref={container}>
            <motion.button 
            className="slide-left" 
            onClick={slideLeft}
            whileHover={{background: "linear-gradient(to left, transparent 0%, black 100%)"}}> <BsArrowLeft></BsArrowLeft> </motion.button>
            <motion.button 
            className="slide-right" 
            onClick={slideRight}
            whileHover={{background: "linear-gradient(to right, transparent 0%, black 120%)"}}> <BsArrowRight></BsArrowRight> </motion.button>
                {mitarbeiterCollection.map((mitarbeiter) => {
                    return (
                        <motion.div
                        animate={{
                            left: (mitarbeiter.id - position) * (sliderWidth * .9),
                        }}
                        transition={{ease:  "easeInOut", duration: .5}}
                        key={mitarbeiter.id} 
                        className="slider-item">
                            <div className="slider-image" style={{backgroundImage: `url(./images/${mitarbeiter.image}.png)`,}}></div>
                            <div className="slider-info">
                                <h2>{mitarbeiter.name}</h2>
                                <h3>{mitarbeiter.title}</h3>
                                <p className="description">{mitarbeiter.description}</p>
                                <p className="location">{mitarbeiter.location}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
            {/*  */}
            <div className="controller-container" ref={controller}>
                
            {mitarbeiterCollection.map((mitarbeiter) => {
                    return(
                        <div 
                        key={mitarbeiter.id}
                        className="slider-controll" 
                        onClick={() => setPosition(mitarbeiter.id)}
                        style={{
                            width: `${100 / mitarbeiterCollection.length}%`}}></div>
                    )
                })}
                <motion.div 
                className="controll-active"
                style={{
                    width: `${100 / mitarbeiterCollection.length}%`,}}
                animate={{left: (controllerWidth/mitarbeiterCollection.length) * (position - 1)}}></motion.div>
            </div>
        </div>
    )
}

