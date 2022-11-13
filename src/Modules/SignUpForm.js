import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUpForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="signUpAccount">
        <Form.Control type="text" placeholder="아이디" required />
        <Form.Control type="text" placeholder="닉네임" required />
        <Form.Control type="password" placeholder="비밀번호" required />
        <Form.Control type="password" placeholder="비밀번호 확인" required />
        <Form.Control type="email" placeholder="이메일" required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
 
export default SignUpForm;