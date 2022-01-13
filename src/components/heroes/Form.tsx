import React, { FormEvent, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { helpHttp, Options } from '../../helpers/helptHttp';
import useForm from '../../hooks/useForm';

interface FormData {
  hero: string;
  publisher: string;
}
const Form = () => {
  const url = 'http://localhost:5555/heroes';

  const { getHeroes } = useContext(UserContext);

  const { formValues, handleChange, resetForm } = useForm<FormData>({
    hero: '',
    publisher: 'marvel',
  });

  const { hero, publisher } = formValues;

  const handleSubmitAddHero = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (hero.trim().length < 3) return;

    const options: Options = {
      headers: { 'Content-type': 'application/json' },
      body: {
        id: (new Date().getTime() % Math.pow(10, 4)).toString(),
        hero,
        publisher,
      },
    };

    try {
      await helpHttp().post(url, options);
      getHeroes();
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitAddHero}>
        <label className="form-label">Input a superhero</label>
        <input
          type="text"
          className="form-control mb-3"
          autoComplete="off"
          name="hero"
          value={hero}
          onChange={handleChange}
        />
        <label className="form-label">Input its publisher</label>

        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="publisher"
              id="radio-marvel"
              value="marvel"
              onChange={handleChange}
              defaultChecked
            />
            <label className="form-check-label" htmlFor="radio-marvel">
              Marvel
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="publisher"
              id="radio-dc"
              value="dc"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="radio-dc">
              DC
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-outline-success mb-3"
          disabled={hero.trim().length < 3}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
