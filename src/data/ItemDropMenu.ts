interface dropItems {
    href: string,
    categoria: string,
    marca: string,
    modelo: string
}

 export const ItemDropMenu: dropItems [] = [
    //guitarras
    {
        href: "/Blog/", 
        categoria: "Guitarras", 
        marca: "Fender",
        modelo: "Stratocaster"

    },
   
    //bajos
    {
        href: "/Blog/", 
        categoria: "Bajos", 
        marca: "Fender",
        modelo: "Mustang Bass"
    },
    
    //amplificadores
    {
        href: "/blog/amplificadores", 
        categoria: "Amplificadores", 
        marca: "Fender",
        modelo: "Twin Reverb"
        
    },
    
]
