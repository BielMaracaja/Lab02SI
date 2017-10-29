angular.module("ListaDeTarefas").controller("listaDeTarefasCtrl", function ($scope){

    $scope.app = "Lista de Tarefas";

    $scope.tarefas = [
        {tarefa: "Estudar SI", numero: "1"},
        {tarefa: "Arrumar a Casa", numero: "2"},
        {tarefa: "Comprar pão", numero: "3"},
        {tarefa: "Codar", numero: "4"},
        {tarefa: "Desenvolve App", numero: "5"},
        {tarefa: "Trabalhar na Gerencia de Requisitos", numero: "6"},
        {tarefa: "Trabalhar na Gerencia de Riscos", numero: "7"}
    ];

    $scope.adicionarTarefa = function (tarefa){
        $scope.tarefas.push(angular.copy(tarefa));
        delete $scope.tarefa;
    };

    $scope.classe = "selecionado";

    $scope.apagarTarefa = function (tarefas) {
        $scope.tarefas = tarefas.filter(function (tarefa){
            if(!tarefa.selecionado) return tarefa;
        });
    };

    $scope.isTarefaSelecionado = function (tarefas) {
        return tarefas.some(function (tarefa) {
            return tarefa.selecionado;
        });
    };

    $scope.quantidadeTarefas = function (tarefas) {
        return $scope.tarefas.length;
    };

    $scope.tarefasRealizadas = function () {
        var tarefasRealizadas = 0;
        for(var i = 0; i < $scope.tarefas.length; i++){
            if($scope.tarefas[i].selecionado) tarefasRealizadas++;
        }
        return tarefasRealizadas;
    };

    $scope.barraDePorcentagem = function (){
        if(!$scope.listaNaoVazia()){
            return 0;
        }
        var percentual = ($scope.tarefasRealizadas() * 100) / ($scope.tarefas.length);
        return parseInt(percentual);
    };

    $scope.listaNaoVazia = function (){
        return $scope.tarefas.length > 0;
    };

    $scope.apagarTudo = function (){
        $scope.tarefas = [];
    }

});
