import {StandardNgConfig} from "../../@core/template/standard-ng-config";

export const CursoConfig: StandardNgConfig = {
  idAttribute: "id",
  routePath: "/curso",
  onSuccessDelete: "Exclusão de Curso realizada com sucesso",
  confirmDeleteMessage: "Deseja mesmo excluir o Curso?",
  isReadOnly: false,
  listModule: {
    pageTitle: "Cursos"
  },
  detailModule: {
    pageTitle: "Detalhes de Curso"
  },
  editModule: {
    editTitle: "Editar curso",
    createTitle: "Cadastar novo curso",
    onSuccessEditMessage: "Atualizado com sucesso.",
    onSuccessCreateMessage: "Atualizado com sucesso."
  }
}
