    interface ItemNavMenuInterface {
    href: string,
    texto: string,
    link: string,
}
//menu del nav
export const ItemNavMenu: ItemNavMenuInterface[] = [
    {
        href: "/", texto: "Inicio", 
        link: ""
    },
    {
        href: "/Servicios", texto: "Servicios", 
        link: ""
    },
    {
        href: "/Blog", texto: "Tienda", 
        link: ""
    },
    {
        href: "/Contacto", texto: "Contacto", 
        link: ""
    },
]
//menu redes sociales
export const ItemRedes: ItemNavMenuInterface[] = [
    {
        href: "https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-icono-de-facebook-redes-sociales.png", 
        texto: "Facebook", 
        link: "https://www.facebook.com/fender.es/?locale=es_L"
    },
    {
        href: "https://cdn-icons-png.flaticon.com/512/3983/3983858.png", 
        texto: "Instagram", 
        link: "https://www.instagram.com/fender_chile/?hl=es"
    },
    {
        href: "https://cdn-icons-png.flaticon.com/256/3536/3536445.png", 
        texto: "Whatsapp", 
        link: "https://web.whatsapp.com/"
    }
]
