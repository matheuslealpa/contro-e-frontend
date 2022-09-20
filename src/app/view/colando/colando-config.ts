import {StandardNgConfig} from "../../@core/template/standard-ng-config";

export const ColandoConfig: StandardNgConfig = {
  idAttribute: "id",
  routePath: "/colando",
  onSuccessDelete: "Exclusão de Colando realizada com sucesso",
  confirmDeleteMessage: "Deseja mesmo excluir o Colando?",
  isReadOnly: false,
  listModule: {
    pageTitle: "Listagem de Colando"
  },
  detailModule: {
    pageTitle: "Detalhes de Colando"
  },
  editModule: {
    editTitle: "Edição de Colando",
    createTitle: "Criação de Colando",
    onSuccessEditMessage: "Colando atualizado com sucesso.",
    onSuccessCreateMessage: "Colando atualizado com sucesso."
  }
}
