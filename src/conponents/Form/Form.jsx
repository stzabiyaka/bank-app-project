import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ButtonStyled } from '../Button';
import {
  FormContainer,
  FormInfo,
  InputField,
  InputLabel,
  InputLabelText,
  Warn,
} from './Form.styled';

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().positive().integer().required(),
  })
  .required();

const Form = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    onSuccess(data);
  };

  const Input = ({ label, register, required, type = 'text', placeholder }) => (
    <>
      <InputLabel>
        <InputLabelText>
          {label}
          {required && <Warn> *</Warn>}
        </InputLabelText>

        <InputField
          type={type}
          placeholder={placeholder}
          {...register(label, { required })}
          title={required ? 'Required field' : ''}
        />
        {errors?.[label] && <Warn>{label} is required</Warn>}
      </InputLabel>
    </>
  );

  return (
    <>
      <FormInfo>Please, leave your contact details.</FormInfo>
      <FormContainer onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Input label="name" register={register} required placeholder="Name" />
        <Input
          type="email"
          label="email"
          register={register}
          required
          placeholder="email@mail.com"
        />
        <Input type="tel" label="phone" register={register} required placeholder="+111111111111" />
        <ButtonStyled type="submit">Submit</ButtonStyled>
      </FormContainer>
    </>
  );
};

export default Form;
