import { Container, Row, Col} from 'react-bootstrap';
import Fetch from './Fetch2';

function Home() {
    return (
      <Container fluid="md" className="mt-5">
        <Row sm={1} lg={2}>
          <Col xl={3} >
            <h2>Lorem Ipsum</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Col>
            <Fetch />
        </Row>
      </Container>
    );
  }

export default Home;