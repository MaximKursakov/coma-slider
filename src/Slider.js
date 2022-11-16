import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import {BsArrowLeft, BsArrowRight} from "react-icons/bs"

export function Slider() {
    const mitarbeiterCollection = [{
        image: "Mitarbeiter1", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 1
    },
    {
        image: "Mitarbeiter2", name: "Kathrin", title: "Personalmanagerin & Genussmensch", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 2
    },
    {
        image: "Mitarbeiter3", name: "Daniel", title: "Web-Entwickler & Freizeitnerd", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 3
    },
    {
        image: "Mitarbeiter4", name: "Philipp", title: "Projektmanager & Technik-Nerd", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 4
    },
    {
        image: "Mitarbeiter5", name: "Rike", title: "Projektmanagerin & To-do-Listen-Aficionada", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 5
    },
    {
        image: "Mitarbeiter6", name: "Simone", title: "Projektmanagerin & Entdeckerin", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 6
    },
    {
        image: "Mitarbeiter7", name: "Patrick", title: "UX/UI Designer & Zukunftsdenker", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 7
    },
    {
        image: "Mitarbeiter8", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 8
    },
    {
        image: "Mitarbeiter9", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 9
    },
    {
        image: "Mitarbeiter10", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 10
    },
    {
        image: "Mitarbeiter11", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 11
    },
    {
        image: "Mitarbeiter12", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 12
    },
    {
        image: "Mitarbeiter13", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 13
    },
    {
        image: "Mitarbeiter14", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 14
    },
    {
        image: "Mitarbeiter15", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 15
    },
    {
        image: "Mitarbeiter16", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 16
    },
    {
        image: "Mitarbeiter17", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 17
    },
    {
        image: "Mitarbeiter18", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 18
    },
    {
        image: "Mitarbeiter19", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 19
    },
    {
        image: "Mitarbeiter20", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 20
    },
    {
        image: "Mitarbeiter21", name: "Riccardo", title: "UX Designer & Perfektionist", location: "Coma AG (München)" , description: "Riccardo ist stets auf der Suche nach der perfekten Lösung und gibt sich nicht mit dem Zweitbesten zufrieden. Mit Crossfit hält er sich auch körperlich in optimaler Form. Als ausgesprochener Familienmensch verbringt er seine Freizeit aber am liebsten mit Frau und Tochter beim Grillen im Garten oder Seriengucken im eigenen Heimkino.", id: 21
    }]

    const [position, setPosition] = useState(1)
    const [sliderWidth, setSliderWidth] = useState(0)

    const container = useRef()
    useEffect(() => {
        setSliderWidth(container.current.offsetWidth)
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
                            <div className="slider-image" style={{backgroundImage: `url(/images/${mitarbeiter.image}.png)`,}}></div>
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
            <div className="controller-container">
                
            {mitarbeiterCollection.map((mitarbeiter) => {
                    return(
                        <div 
                        key={mitarbeiter.id}
                        className="slider-controll" 
                        onClick={() => setPosition(mitarbeiter.id)}
                        style={{
                            width: `${100 / mitarbeiterCollection.length}%`,
                            borderBottomColor:  position === mitarbeiter.id ? "black" : "#ededed"}}></div>
                    )
                })}
            </div>
        </div>
    )
}