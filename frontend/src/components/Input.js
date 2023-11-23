import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function InputArea({onChange}) {
    return(
        <InputGroup size="lg">
            <Form.Group >
                <Form.Control 
                    as="textarea" 
                    rows={2} 
                    cols={40}
                    placeholder='Type your political post here'
                    onChange={onChange}

                    style={{
                        color: '#969494',
                        fontSize: 22,
                        fontFamily: 'Inter',
                        fontWeight: '700',
                        wordWrap: 'break-word',
                        marginTop: 70,
                        marginLeft: 15,
                        borderRadius: 20,
                        backgroundColor: 'white',
                        border: 'none',
                        boxShadow: '0 0 10px #969494',
                        paddingTop: '20px',
                        paddingLeft: '20px'
                      }}
                />
            </Form.Group>
        </InputGroup>
    )
}
export default InputArea;