const data = [
  {
    title: 'Aenean Duis',
    description: 'Duis mollis luctus augue, ut interdum nisi.',
  },
  {
    title: 'Nunc Vestibulum',
    description: 'Vestibulum at arcu quis nisi congue.',
  },
  {
    title: 'Donec Duis',
    description: 'Duis rhoncus orci et est vulputate.',
  },
]

function fetchData(config) {
  console.log('Fetching content...', Date.now())
  const { delay = 0, index = 0 } = config
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log('Resolve content...', Date.now())
      resolve(data[index])
    }, delay * 1000)
  )
}

export { fetchData }
