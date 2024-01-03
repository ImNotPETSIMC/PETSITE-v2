import { Article } from "../components/content_container";

export const NotFoundArticle: Article = {
    title: "Artigos Não Encontrados",
    date: "Error - Falha de Comunicação",
    body: "No momento não conseguimos nos conectar ao banco do PET-SIMC. Caso sua internet esteja funcionando normalmente, favor entrar em contato com um membro do PET-SIMC informando o erro.",
    id: "not-found",
    icon: {
        src: "/images/ufu.jpg",
        alt: "Logo do PET-SIMC"
    }
}