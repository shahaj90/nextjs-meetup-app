import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/da/Kyiv_Symphony_Orchestra%2C_Kurhaus_Wiesbaden.jpg',
    address: 'Some Address 5, 12345 some city',
    description: 'This is first meetup'
  },
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/da/Kyiv_Symphony_Orchestra%2C_Kurhaus_Wiesbaden.jpg',
    address: 'Some Address 5, 12345 some city',
    description: 'This is first meetup'
  }
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
