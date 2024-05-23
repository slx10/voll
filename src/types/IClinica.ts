import IEndereco from "./IEnderco";

export default interface IClinica {
    email: string,
    nome: string,
    senha: string,
    endereco: IEndereco;
}