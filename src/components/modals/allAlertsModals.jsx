import CustomAlert from "./ActionModal";

export default allAlertsModals = (
    isCompleteModal,
    toggleCompleteModal,
    selected,
    updateTaskToCompleted,
    handleComplete
) => {

    console.log(toggleCompleteModal)

    return (
        <>
            {/* <CustomAlert 
            text={'Deseja excluir a tarefa:'}
            taskTitle={selected.title}
            isModalVisible={isCompleteModal}
            toggleModal={toggleCompleteModal}
            actionCallback={handleComplete}
            callback={deleteSuccess}
            id={selected.id}
            /> */}
    
        <CustomAlert
            text={'Deseja completar a tarefa:'}
            taskTitle={selected && selected.title}
            isModalVisible={isCompleteModal}
            toggleModal={toggleCompleteModal}
            actionCallback={updateTaskToCompleted}
            callback={handleComplete}
            id={selected && selected.id}
            />
    
            {/* <CustomAlert
            text={'Deseja editar a tarefa:'}
            taskTitle={selected.title}
            isModalVisible={isCompleteModal}
            toggleModal={toggleCompleteModal}
            actionCallback={updateTaskName}
            id={selected.id}
            updateTask={true}
            value={sourceName}
            callback={editSucess}
            onChangeText={setSourceName}
            onPressToUpdateName={handleComplete}
            />   */}
        </>
    );


}