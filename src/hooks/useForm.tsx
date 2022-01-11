import { ChangeEvent, useState } from 'react';

const useForm = <T extends Object>(initialState: T) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = (): void => {
    setFormValues(initialState);
  };

  return {
    formValues,
    handleChange,
    resetForm,
  };
};

export default useForm;
