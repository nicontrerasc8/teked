export default function ScienceContainerData () {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 1000);
            
        
    })
}
const data = [
    {
        title: "Ecología",
        link: "/ecologia",
        description: "La ecología es el área de las ciencias que estudia el cómo los seres vivos se relacionan con el medio ambiente.",
        color: "rgb(192, 17, 17)"
    },{
        title: "Zoología",
        link: "/zoologia",
        description:"La zoología es la ciencia natural que estudia el comportamiento y características de los animales.",
        color: "rgb(235, 120, 13)",
    },{
        title: "Biología",
        link: "/biologia",
        description:"La biología es el campo de estudio que analiza la estructura y procesos que permiten a un ser vivo desarrollarse.",
        color:"rgb(200, 150, 9)",
    },{
        title: "Química",
        link: "/quimica",
        description:"La química es el campo científico que estudia las propiedades y procesos de la materia.",
        color:"rgb(14, 197, 8)",
    },{
        title: "Física",
        link: "/fisica",
        description:"La física es la ciencia que estudia la energía, la materia, el espacio-tiempo, y las relaciones entre ellos.",
        color:"rgb(147, 13, 224)",
    },
]