import * as Yup from 'yup';
import { omit } from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { Button, ErrorSpan, Form, Input, Label } from './ContactForm.styled';

const schema = Yup.object().shape({
  username: Yup.string().required('Please enter your User name'),
  walletaddress: Yup.string().required('Please enter your  Wallet address'),
});

function ContactForm() {
  const [username, setUsername] = useState<string>('');
  const [walletaddress, setWalletaddress] = useState<string>('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setErrors(prevErrors => omit(prevErrors, name));

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'walletaddress':
        setWalletaddress(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await schema.validate({ username, walletaddress }, { abortEarly: false });
      toast.success('Thank you, form submitted successfully!');
      console.log('User name:', username, 'Wallet address:', walletaddress);
      setUsername('');
      setWalletaddress('');
      setErrors({});
    } catch (err: any) {
      const validationErrors: Record<string, string> = {};
      err.inner.forEach((error: any) => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Input
            type="text"
            name="username"
            placeholder="@USERNAME"
            value={username}
            onChange={handleChange}
            $hasError={!!errors.username ? 'error' : ''}
          />
          {errors.username && <ErrorSpan>{errors.username}</ErrorSpan>}
        </Label>
        <Label>
          <Input
            type="text"
            name="walletaddress"
            placeholder="WALLET ADDRESS"
            value={walletaddress}
            onChange={handleChange}
            $hasError={!!errors.walletaddress ? 'error' : ''}
          />
          {errors.walletaddress && (
            <ErrorSpan>{errors.walletaddress}</ErrorSpan>
          )}
        </Label>

        <Button type="submit" aria-label="Send">
          MINT
        </Button>
      </Form>
      <ToastContainer />
    </>
  );
}

export default ContactForm;
