import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/da/Kyiv_Symphony_Orchestra%2C_Kurhaus_Wiesbaden.jpg"
      title="A First Meetup"
      address="Some Address 5, 12345 some city"
      description="This is first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ],
    fallback: false
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/d/da/Kyiv_Symphony_Orchestra%2C_Kurhaus_Wiesbaden.jpg',
        id: meetupId,
        title: 'First Meetup',
        address: 'Some Street 5, Some city',
        description: 'This is a first meetup'
      }
    }
  };
}

export default MeetupDetails;
