import { Container, Row, Col } from 'react-bootstrap';



const BootstrapElement = (props) => {
    return (
        <Container className='mt-7 mb-5'>
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
