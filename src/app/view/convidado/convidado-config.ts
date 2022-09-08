import {StandardNgConfig} from "../../@core/template/standard-ng-config";

export const ConvidadoConfig: StandardNgConfig = {
  idAttribute: "id",
  routePath: "/convidado",
  onSuccessDelete: "Excluido com sucesso",
  confirmDeleteMessage: "Deseja mesmo excluir o Convidado?",
  isReadOnly: false,
  listModule: {
    pageTitle: "Convidados"
  },
  detailModule: {
    pageTitle: "Detalhes"
  },
  editModule: {
    editTitle: "Editar convidado",
    createTitle: "Cadastrar novo convidado",
    onSuccessEditMessage: "Atualizado com sucesso.",
    onSuccessCreateMessage: "Atualizado com sucesso."
  }
}
