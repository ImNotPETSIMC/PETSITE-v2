export const convertDate = (date: Date) => {
    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    return date.getDay() + " de " + months[date.getMonth()] + " de " + date.getFullYear();
}