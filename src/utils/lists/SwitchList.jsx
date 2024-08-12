import List from '../../components/data/List'

export default switchList = ({
  savedMoneyList,
  money,
  wishListState,
  setSelected,
  toggleDeleteModal,
  pressed,
}) => {
  switch (pressed) {
    case 'Guardar':
      return (
        <List
          sources={savedMoneyList}
          isMoney={true}
          iconName={'Money'}
          disable={true}
          hasEditButton={false}
          toggleDeleteModal={toggleDeleteModal}
          selectedSource={setSelected}
        />
      )
    case 'Desejos':
      return (
        <List
          sources={wishListState.wishList}
          isMoney={true}
          iconName={'Money'}
          total={money.total.savedMoney}
          wish={true}
          toggleDeleteModal={toggleDeleteModal}
          selectedSource={setSelected}
        />
      )
    default:
      return (
        <List
          sources={money.spentMoney}
          isMoney={true}
          iconName={'Money'}
          toggleDeleteModal={toggleDeleteModal}
          selectedSource={setSelected}
        />
      )
  }
}
