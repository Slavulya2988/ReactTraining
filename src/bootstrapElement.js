import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Carousel from 'react-bootstrap/Carousel';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';


const BootstrapElement = (props) => {
    return (
        <Container className='mt-5 mb-5'>
            <Row>
                <Col>
                    {props.left}
                </Col>
                <Col>
                    {props.right}
                </Col>
            </Row>
        </Container>
    )

}

export default BootstrapElement;
