import {StandardNgConfig} from "../../@core/template/standard-ng-config";

export const ColandoConfig: StandardNgConfig = {
  idAttribute: "id",
  routePath: "/colando",
  onSuccessDelete: "Excluido com sucesso",
  confirmDeleteMessage: "Deseja mesmo excluir o Colando?",
  isReadOnly: false,
  listModule: {
    pageTitle: "Colandos"
  },
  detailModule: {
    pageTitle: "Detalhes"
  },
  editModule: {
    editTitle: "Editar colando",
    createTitle: "Cadastrar novo colando",
    onSuccessEditMessage: "Atualizado com sucesso.",
    onSuccessCreateMessage: "Atualizado com sucesso."
  }
}
