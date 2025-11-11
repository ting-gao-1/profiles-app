import Card from 'react-bootstrap/Card';

export default function ProfileCard({ name, likes }) {
  return (
    <Card className="mb-3 shadow-sm h-100">
      <Card.Body>
        <Card.Title className="h5 mb-2">{name}</Card.Title>
        <Card.Text className="mb-0">Likes: {likes}</Card.Text>
      </Card.Body>
    </Card>
  );
}
