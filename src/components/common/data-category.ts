const categories = [{
  id: 1,
  name: 'Category 1',
  icon: 'heart',
  sort: 1,
}]

const icons = ['home', 'wrench  ', 'star', 'notebook', 'fire']
icons.forEach((e, i) => {
  categories.push({
    id: i + 1,
    name: `Category ${i + 1}`,
    icon: e,
    sort: i + 1,
  })
})

export default categories
