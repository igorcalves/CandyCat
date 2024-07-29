import AtualizationCard from "../card/AtualizationCard";

export default function List({
    sources,
    onPressed,
    deleteSource,
    toggleEditModal,
    toggleDeleteModal,
    disable = false,
    editable = true,
    selectedSource
}) {
    return (
        sources.map((source, index) => {
            const toggleBackGroundStyles = index % 2 === 0;
            return (
                <AtualizationCard
                    key={source.id} 
                    title={source.title}
                    description={source.description}
                    toggle={toggleBackGroundStyles}
                    date={source.date}
                    completed={source.completed}
                    onPressed={() => {
                        selectedSource(source);
                        onPressed(source);
                    }}
                    disabled={disable}
                    editable={editable}
                    onPressEdit={() => {
                        selectedSource(source);
                        toggleEditModal();
                    }}
                    onPressDelete={() => {
                        selectedSource(source);
                        deleteSource(source);
                        toggleDeleteModal();
                    }}
                />
            );
        })
    );
}