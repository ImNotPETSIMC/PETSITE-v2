export const convertDate = (str: string) => {
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    const date = new Date("2024-01-05T00:35:43.855Z")

    return date.getDay() + " de " + months[date.getMonth()] + " de " + date.getFullYear();
}