import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function InputArea() {
    return(
        <InputGroup size="lg">
            <Form.Group >
                <Form.Control 
                    as="textarea" 
                    rows={10} 
                    cols={40}
                    placeholder='Type your political post here'

                    style={{
                        color: '#969494',
                        fontSize: 25,
                        fontFamily: 'Inter',
                        fontWeight: '700',
                        wordWrap: 'break-word',
                        marginTop: 100,
                        marginLeft: 30,
                        borderRadius: 20,
                        backgroundColor: 'white',
                        border: 'none',
                        boxShadow: '0 0 10px #969494',
                      }}
                />
            </Form.Group>
        </InputGroup>
    )
}
export default InputArea;