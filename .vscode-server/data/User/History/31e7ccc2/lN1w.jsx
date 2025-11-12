import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProfileCard from './components/ProfileCard.jsx';
import AddProfileForm from './components/AddProfileForm.jsx';
import ProfileTable from './components/ProfileTable.jsx';
import { profiles as seed } from './data/profiles.js';
import { profilesReducer, initialState } from './state/profilesReducer.js';

// MUI theme
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  const [mode, setMode] = React.useState(() => {
    return localStorage.getItem('mode') || 'light';
  });
  const theme = React.useMemo(() => createTheme({ palette: { mode } }), [mode]);

  const [people, dispatch] = React.useReducer(profilesReducer, initialState);

  // init from localStorage or seed
  React.useEffect(() => {
    const raw = localStorage.getItem('people');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        dispatch({ type: 'SET', payload: parsed });
        return;
      } catch {}
    }
    dispatch({ type: 'SET', payload: seed });
  }, []);

  // persist to localStorage
  React.useEffect(() => {
    localStorage.setItem('people', JSON.stringify(people));
  }, [people]);

  React.useEffect(() => {
    localStorage.setItem('mode', mode);
  }, [mode]);

  const handleLike = (id) => {
    const target = people.find(p => p.id === id);
    if (!target) return;
    dispatch({ type: 'UPDATE', payload: { ...target, likes: target.likes + 1 } });
  };

  const handleAdd = (name) => {
    const nextId = people.length ? Math.max(...people.map(p => p.id)) + 1 : 1;
    dispatch({ type: 'ADD', payload: { id: nextId, name, likes: 0 } });
  };

  const handleUpdate = (payload) => {
    dispatch({ type: 'UPDATE', payload });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container className="py-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="mb-0">Profiles</h1>
          <Button variant="secondary" onClick={() => setMode(m => m === 'light' ? 'dark' : 'light')}>
            Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </div>

        <AddProfileForm
          existingNames={people.map(p => p.name)}
          onAdd={handleAdd}
        />

        <Row className="mb-4">
          <Col>
            <ProfileTable rows={people} onUpdate={handleUpdate} onDelete={handleDelete} />
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3}>
          {people.map(p => (
            <Col key={p.id}>
              <ProfileCard id={p.id} name={p.name} likes={p.likes} onLike={handleLike} />
            </Col>
          ))}
        </Row>
      </Container>
    </ThemeProvider>
  );
}
