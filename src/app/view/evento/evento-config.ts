import {StandardNgConfig} from "../../@core/template/standard-ng-config";

export const EventoConfig: StandardNgConfig = {
  idAttribute: "id",
  routePath: "/evento",
  onSuccessDelete: "Exclusão de Evento realizada com sucesso",
  confirmDeleteMessage: "Deseja mesmo excluir o Evento?",
  isReadOnly: false,
  listModule: {
    pageTitle: "Listagem de Evento"
  },
  detailModule: {
    pageTitle: "Detalhes de Evento"
  },
  editModule: {
    editTitle: "Edição de Evento",
    createTitle: "Criação de Evento",
    onSuccessEditMessage: "Evento atualizado com sucesso.",
    onSuccessCreateMessage: "Evento atualizado com sucesso."
  }
}
