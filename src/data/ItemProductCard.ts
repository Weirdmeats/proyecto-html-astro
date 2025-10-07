interface ProductCardItems{
    categoria: string, 
    nombre: string, 
    imagen: string, 
    href: string, 
    precio: number

}



export const ItemProductCard: ProductCardItems[] = [

    //const guitarras
    { 
        categoria: "Guitarras", 
        nombre:"Fender Stratocaster", 
        imagen:"https://audiomusicacl.vtexassets.com/arquivos/ids/191413/1-guitarra-electrica-fender-american-vintage-ii-1957-stratocaster-2-color-sunburst-1113234.jpg", 
        href:"./blog/guitarra-fender-stratocaster.html#guitarra_fender_stratocaster", 
        precio:1
    },
    { 
        categoria: "Guitarras", 
        nombre:"Gibison Les Paul", 
        imagen:"https://audiomusicacl.vtexassets.com/arquivos/ids/186826/1-guitarra-electrica-gibson-les-paul-custom-ebony-gloss-1109687.jpg?v=638357381113930000", 
        href:"./blog/guitarra-gibson-lespaul.html#guitarra_gibson_lespaul", 
        precio:1},
    { 
        categoria: "Guitarras", 
        nombre:"Paul RS SE Standard", 
        imagen:"https://audiomusicacl.vtexassets.com/arquivos/ids/180304/1110741.jpg?v=638043127608870000", 
        href:"./blog/guitarra-paul-standard.html#guitarrra_paul_standard", 
        precio:1
    },

    //const bajos
    { categoria: "Bajos", 
        nombre:"Fender Mustang Bass", 
        imagen:"https://www.todobajos.com/19454-superlarge_default/fender-limited-edition-mustang-bass-shm.jpg", 
        href:"./blog/bajo-fender-mustang.html#amplificador_fender_mustang", 
        precio:1
    },
    { categoria: "Bajos", 
        nombre:"Cort A5p", 
        imagen:"https://es.euroguitar.com/images/products/cort/a5-plus-scms-optg-artisan-bartolini-pan-med-149062.jpg", 
        href:"./blog/bajo-cort-a5p.html#amplificador_cort_a5p", 
        precio:1
    },
    { categoria: "Bajos", 
        nombre:"Warwick Thumb",
        imagen:"https://r2.gear4music.com/media/43/439436/600/preview.jpg", 
        href:"./blog/bajo-warwick-thumb.html#amplificador_warwick_thumb", 
        precio:1},

    //const amplficadores
    { categoria: "Amplificadores", 
        nombre: "Fender Twin Reverb", 
        imagen:"https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_32/323667/18902722_800.jpg", 
        href:"./blog/amplificador-fender-twin.html#amplificador_fender_twin", 
        precio:1
    },
    { categoria: "Amplificadores", 
        nombre: "Marshall JCM800", 
        imagen:"https://bimotordj.com/image/cache/catalog/STUDIOCLASSICSC20H/1-1200x1200.jpg", 
        href:"./blog/amplificador-marshall-jcm800.html#amplificador_marshall_jcm800", 
        precio:1
    },
    { categoria: "Amplificadores", 
        nombre: "Vox AC30", 
        imagen:"https://http2.mlstatic.com/D_NQ_NP_829190-MLU70185876343_062023-O.webp", 
        href:"./blog/amplificador-vox-ac30.html#amplificador_vox_ac30", 
        precio:1
    }

]