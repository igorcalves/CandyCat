import AtualizationCard from '../card/AtualizationCard'

export default function List({
  sources,
  onPressed,
  toggleEditModal,
  toggleDeleteModal,
  progressValue,
  disable = false,
  editable = true,
  selectedSource,
  isMoney = false,
  iconName,
  wish = false,
  total,
  wishValue,
}) {
  return sources.map((source, index) => {
    const toggleBackGroundStyles = index % 2 === 0
    return (
      <AtualizationCard
        key={source.id}
        title={isMoney ? `R$: ${source.title}` : source.title}
        description={source.description}
        toggle={toggleBackGroundStyles}
        progressValue={((total / Number(source.title)) * 100).toFixed(2)}
        missingValue={total - Number(source.title)}
        date={source.date}
        wish={wish}
        iconName={iconName}
        onPressed={() => {
          selectedSource(source)
          onPressed(source)
        }}
        disabled={disable}
        editable={editable}
        onPressEdit={() => {
          selectedSource(source)
          toggleEditModal()
        }}
        onPressDelete={() => {
          selectedSource(source)
          toggleDeleteModal()
        }}
      />
    )
  })
}
