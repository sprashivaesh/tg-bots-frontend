import React, {FC} from "react"
import {useFormik} from "formik"
import {FormValues} from "../../state/ducks/autoAnswers/types";


type Props = {
  values: FormValues
  onSubmit: (values: FormValues) => void
}

const AutoAnswerForm: FC<Props> = ({values, onSubmit}) => {

  const formik = useFormik({
    initialValues: {
      private: values.private,
      coincidences: values.coincidences,
      answers: values.answers
    },
    onSubmit
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row text-left">
        <div className="col-12">
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="private"
                onChange={formik.handleChange}
                checked={formik.values.private}
              />
              Приватно
              <span className="form-check-sign"><span className="check"/></span>
            </label>
          </div>
        </div>
      </div>
      <div className="row text-left">
        <div className="col-6 form-group label-floating">
          <label className="form-control-label bmd-label-floating" htmlFor="coincidencesTextarea">Введите
            совпадения</label>
          <textarea
            className="form-control"
            rows={5}
            name="coincidences"
            id="coincidencesTextarea"
            onChange={formik.handleChange}
            value={formik.values.coincidences}
          />
        </div>
        <div className="col-6 form-group label-floating">
          <label className="form-control-label bmd-label-floating" htmlFor="answersTextarea">Введите варианты
            ответов</label>
          <textarea
            className="form-control"
            rows={5}
            name="answers"
            id="answersTextarea"
            onChange={formik.handleChange}
            value={formik.values.answers}
          />
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <button className="btn" type="button" onClick={() => formik.resetForm()}>Очистить</button>
        <button className="btn btn-success" type="submit">Сохранить</button>
      </div>
    </form>
  )
}

export default AutoAnswerForm