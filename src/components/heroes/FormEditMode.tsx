import React, { FormEvent, useContext, useEffect } from 'react';
import { UserContext } from '../../context/UserContext';
import { Options } from '../../helpers/helptHttp';
import useForm from '../../hooks/useForm';
import { Hero } from '../../interfaces/interfaces';
import { EditMode } from './TableHeroes';

interface FormData {
  hero: string;
  publisher: string;
}

interface FormEditModeProps {
  setEditMode: (editMode: EditMode) => void;
  editMode: EditMode;
}

const FormEditMode = ({ editMode, setEditMode }: FormEditModeProps) => {
  const { editHero } = useContext(UserContext);

  const { formValues, handleChange, setFormValues } = useForm<FormData>({
    hero: '',
    publisher: editMode.superhero.publisher,
  });

  const { hero, publisher } = formValues;

  useEffect(() => {
    setFormValues({
      hero: '',
      publisher: editMode.superhero.publisher,
    });
  }, [editMode, setFormValues]);

  // publisher = editMode.superhero.publisher

  const handleSubmitEditHero = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (hero.trim().length < 3) return;

    const newHero: Hero = {
      id: editMode.superhero.id,
      hero,
      publisher,
    };
    editHero(editMode.superhero.id, newHero);
    setEditMode({
      state: false,
      superhero: {
        id: '',
        hero: '',
        publisher: '',
      },
    });
  };

  const handleClickCancelEdit = () => {
    setEditMode({
      state: false,
      superhero: {
        id: '',
        hero: '',
        publisher: '',
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmitEditHero}>
        <label className="form-label">Edit your superhero</label>
        <input
          type="text"
          className="form-control mb-3"
          autoComplete="off"
          name="hero"
          value={hero}
          onChange={handleChange}
          placeholder={editMode.superhero.hero}
        />
        <label className="form-label">Input its publisher</label>

        <div className="mb-3">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="publisher"
              id="radio-marvel-edit"
              value="marvel"
              onChange={handleChange}
              checked={publisher === 'marvel'}
              // defaultChecked
            />
            <label className="form-check-label" htmlFor="radio-marvel-edit">
              Marvel
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="publisher"
              id="radio-dc-edit"
              value="dc"
              onChange={handleChange}
              checked={publisher === 'dc'}
            />
            <label className="form-check-label" htmlFor="radio-dc-edit">
              DC
            </label>
          </div>
        </div>

        <button
          disabled={hero.trim().length < 3}
          type="submit"
          className="btn btn-outline-warning mb-3 me-3"
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-outline-danger mb-3"
          onClick={handleClickCancelEdit}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default FormEditMode;
