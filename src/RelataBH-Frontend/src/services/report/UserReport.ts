type UserReport = {
    id: number,
    latitude: string,
    longitude: string,
    endereco: string,
    createdAt: string,
    dsc: string,
    titulo: string,
    nomeCategoria: string,
    descricaoCategoria: string,
    codIndicador: number,
    nomeUser: string,
    emailUser: string,
    quantLike: number,
    quantDeslike: number,
    images: [{url:string}],
    feedback: Feedback | null
}
