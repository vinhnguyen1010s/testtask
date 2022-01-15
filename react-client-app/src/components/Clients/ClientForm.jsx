import { Button } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';

export const ClientForm = (props) => {
  const { inputClient, onChangeInput, onSubmitSave } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: 'all',
    reValidateMode: 'onChange',
    delayError: undefined,
  });

  const validationForm = {
    name: {
      required: 'Name is required',
      maxLength: {
        value: 100,
        message: 'The nanme has not more then 100 characters.',
      },

      minLength: {
        value: 3,
        message: 'The nanme must at least 5 characters.',
      },
    },
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmitSave)}>
        <div className="row">
          <div className="col-md-6 col-sm-12 mb-3">
            <div className="row ">
              <label htmlFor="clientname" className="col-sm col-form-label">
                Client Name
              </label>
              <div className="col-md-9">
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  autoFocus={true}
                  autoComplete="off"
                  placeholder="Client Name"
                  name="name"
                  value={inputClient.name}
                  // {...register('name')}
                  {...register('name', validationForm.name)}
                  onChange={onChangeInput}
                />
                <div className="invalid-feedback">
                  <span>{errors.name?.message}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-12 mb-3">
            <div className="row">
              <label htmlFor="clientage" className="col-sm col-form-label">
                Client Age
              </label>
              <div className="col-md-9">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Client Age"
                  name="age"
                  value={inputClient.age}
                  onChange={onChangeInput}
                />
              </div>
            </div>
          </div>

          <div className="col-12">
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={!inputClient.name ? true : false}
              onClick={handleSubmit(onSubmitSave)}
            >
              Save
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
