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
    id: 'm2',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/da/Kyiv_Symphony_Orchestra%2C_Kurhaus_Wiesbaden.jpg',
    address: 'Some Address 5, 12345 some city',
    description: 'This is first meetup'
  }
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // Fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   };
// }

export async function getStaticProps() {
  // Fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  };
}

export default HomePage;
