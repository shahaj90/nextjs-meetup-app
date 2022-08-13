/* eslint-disable no-undef */
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db(process.env.DB_NAME);
  const collection = db.collection('meetups');
  const meetups = await collection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString()
      }
    })),
    fallback: false
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db(process.env.DB_NAME);
  const collection = db.collection('meetups');
  const singleMeetup = await collection.findOne({ _id: ObjectId(meetupId) });
  client.close();

  return {
    props: {
      meetupData: {
        id: singleMeetup._id.toString(),
        image: singleMeetup.image,
        title: singleMeetup.title,
        address: singleMeetup.address,
        description: singleMeetup.description
      }
    }
  };
}

export default MeetupDetails;
