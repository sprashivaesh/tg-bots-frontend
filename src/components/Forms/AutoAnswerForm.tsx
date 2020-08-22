import React, {FC} from "react"
import {useFormik} from "formik"
import {FormValues} from "../../state/ducks/autoAnswers/types"

type Props = {
  values: FormValues
  onSubmit: (values: FormValues) => void
  id: number
  onDelete: (id: number) => void
}

const AutoAnswerForm: FC<Props> = ({values, onSubmit, id, onDelete}) => {
  const form = useFormik({
    initialValues: {
      private: values.private,
      coincidences: values.coincidences,
      answers: values.answers
    },
    onSubmit
  })

  return (
    <form onSubmit={form.handleSubmit} className="mb-5 col-10 mx-auto">
      <div className="row text-left">
        <div className="col-12 col-lg-5 form-group label-floating">
          <label className="form-control-label bmd-label-floating" htmlFor={'coincidencesTextarea'+id}>Введите
            совпадения</label>
          <textarea
            className="form-control"
            rows={5}
            name="coincidences"
            id={'coincidencesTextarea'+id}
            onChange={form.handleChange}
            value={form.values.coincidences}
          />
        </div>
        <div className="col-12 col-lg-5 form-group label-floating">
          <label className="form-control-label bmd-label-floating" htmlFor={'answersTextarea'+id}>Введите варианты
            ответов</label>
          <textarea
            className="form-control"
            rows={5}
            name="answers"
            id={'answersTextarea'+id}
            onChange={form.handleChange}
            value={form.values.answers}
          />
        </div>
        <div className="col-12 col-lg-2">
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="private"
                onChange={form.handleChange}
                checked={form.values.private}
              />
              Приватно
              <span className="form-check-sign"><span className="check"/></span>
            </label>
          </div>
          <button className="btn btn-danger btn-sm d-block w-100" type="button" onClick={() => onDelete(id)}>Удалить</button>
          <button className="btn btn-sm d-block w-100" type="button" onClick={() => form.resetForm()} disabled={!form.dirty}>Восстановить</button>
          <button className="btn btn-success btn-sm d-block w-100" type="submit" disabled={!form.dirty}>Сохранить</button>
        </div>
      </div>
    </form>
  )
}
export default AutoAnswerForm