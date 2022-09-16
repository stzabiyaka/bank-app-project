import { useForm } from 'react-hook-form';
import { ButtonStyled } from '../Button';
import { FormContainer, FormInfo, InputField, InputLabel, Warn } from './Form.styled';

const Form = ({ onSuccess }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    onSuccess(data);
  };

  const Input = ({ label, register, required, type = 'text', placeholder }) => (
    <>
      <InputLabel>
        {label}
        {required && <Warn> *</Warn>}
      </InputLabel>
      <InputField
        type={type}
        placeholder={placeholder}
        {...register(label, { required })}
        title={required ? 'Required field' : ''}
      />
    </>
  );

  return (
    <>
      <FormInfo>Please, leave your contact details, we'll call you back.</FormInfo>
      <FormContainer onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Input label="name" register={register} required placeholder="Name" />
        <Input
          type="email"
          label="email"
          register={register}
          required
          placeholder="email@mail.com"
        />
        <Input type="tel" label="phone" register={register} required placeholder="+111 111111111" />
        <ButtonStyled type="submit">Submit</ButtonStyled>
      </FormContainer>
    </>
  );
};

export default Form;
