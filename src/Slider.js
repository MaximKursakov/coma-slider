import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

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
    }

    function slideLeft() {
        if (position-1  > 0) {
            setPosition(position - 1)
        }
    }
    console.log(position)
    console.log(sliderWidth)
    return(
        <div className="slider-container">
            <button className="slide-left" onClick={slideLeft}> left </button>
            <button className="slide-right" onClick={slideRight}> right </button>
            <div className="slider" ref={container}>
                {mitarbeiterCollection.map((mitarbeiter) => {
                    return (
                        <motion.div
                        animate={{
                            left: (mitarbeiter.id - position) * (sliderWidth * .9),
                        }}
                        transition={{type: "tween", duration: .5}}
                        key={mitarbeiter.id} 
                        className="slider-item">
                            <div className="slider-image" style={{backgroundImage: `url(/images/${mitarbeiter.image}.png)`,}}></div>
                            <div className="slider-info">
                                <h2>{mitarbeiter.name}</h2>
                                <h3>{mitarbeiter.title}</h3>
                                <p>{mitarbeiter.description}</p>
                                <p className="location">{mitarbeiter.location}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}