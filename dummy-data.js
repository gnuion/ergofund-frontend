const DUMMY_Projects = [
  {
    id: 'e1',
    title: 'Recycle plastic waste',
    description:
      'Help us make the world better for everyone! We want to turn plastic to something valuable.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    image: 'images/electronics-project.jpg',
    isFeatured: false,
    date: '2021-05-12',
    category: 'Environment',
    ends: '2021-05-12',
    goal: '1000',
    reached: '66',
    status: 'funding',
  },
  {
    id: 'e2',
    title: 'Networking for introverts',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this project - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'images/christmas-project.jpg',
    isFeatured: true,
    category: 'Environment',
    ends: '2021-05-12',
    goal: '1000',
    reached: '66',
    status: 'funding',
  },
  {
    id: 'e3',
    title: 'Networking for extroverts',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'images/networking-project.jpg',
    isFeatured: true,
    category: 'Environment',
    ends: '2021-05-12',
    goal: '1000',
    reached: '66',
    status: 'funding',
  },
  {
    id: 'e4',
    title: 'Networking for introverts',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this project - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'images/christmas-project.jpg',
    isFeatured: true,
    category: 'Environment',
    ends: '2021-05-12',
    goal: '1000',
    reached: '66',
    status: 'funding',
  },
  {
    id: 'e5',
    title: 'Networking for extroverts',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'images/networking-project.jpg',
    isFeatured: true,
    category: 'Environment',
    ends: '2021-05-12',
    goal: '1000',
    reached: '66',
    status: 'funding',
  },
]

export function getFeaturedProjects() {
  return DUMMY_Projects.filter(project => project.isFeatured)
}

export function getAllProjects() {
  return DUMMY_Projects
}

export function getFilteredProjects(dateFilter) {
  const {year, month} = dateFilter

  let filteredProjects = DUMMY_Projects.filter(project => {
    const eventDate = new Date(project.date)
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    )
  })

  return filteredProjects
}

export function getEventById(id) {
  return DUMMY_Projects.find(project => project.id === id)
}
