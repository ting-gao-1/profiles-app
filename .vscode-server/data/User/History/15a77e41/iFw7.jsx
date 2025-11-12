import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ProfileCard({ id, name, likes, onLike }) {
  return (
    <Card className="mb-3 shadow-sm h-100">
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="h5 mb-2">{name}</Card.Title>
          <Card.Text className="mb-3">Likes: {likes}</Card.Text>
        </div>
        <Button onClick={() => onLike(id)}>Like</Button>
      </Card.Body>
    </Card>
  );
}
