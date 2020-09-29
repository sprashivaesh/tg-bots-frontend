import React, {FC, useMemo} from "react"
import {useFormik} from "formik"
import {AutoAnswer, FormValues} from "../../state/ducks/autoAnswers/types"
import * as yup from 'yup'
import classNames from 'classnames'


type Props = {
  autoAnswer?: AutoAnswer
  onSubmit: (id: number, values: FormValues) => void
  isSaving: boolean
  onDelete?: (id: number) => void
  isDeleting?: boolean
}
const AutoAnswerForm: FC<Props> = React.memo(({autoAnswer, onSubmit, onDelete, isSaving, isDeleting}) => {
  const schema = yup.object().shape({
    private: yup.boolean(),
    coincidences: yup.string().required('Обязательное поле'),
    answers: yup.string().required('Обязательное поле')
  });
  const id = autoAnswer?.id ?? 0

  const values: FormValues = autoAnswer ?
    {
      private: autoAnswer.private,
      coincidences: autoAnswer.coincidences,
      answers: autoAnswer.answers
    }
    :
    {
      private: false,
      coincidences: '',
      answers: ''
    }
  const form = useFormik({
    initialValues: {
      private: values.private,
      coincidences: values.coincidences,
      answers: values.answers
    },
    // validationSchema: schema,
    onSubmit: (values) => onSubmit(id, values)
  })
  console.log('render')
  // console.log(form.dirty)
  // console.log(form.values)
  // console.log(values)

  const inProgress = useMemo(() => (isSaving || !!isDeleting),
    [isSaving, isDeleting])

  // console.log(id)
  // console.log(form.dirty)

  return (
    <form onSubmit={form.handleSubmit} className="mb-5 col-10 mx-auto">
      <div className="row text-left">
        <div
          className={classNames('col-12 col-lg-5 form-group label-floating', {'has-danger': (form.touched.coincidences && form.errors.coincidences)})}>
          <label className="form-control-label bmd-label-floating" htmlFor={'coincidencesTextarea' + id}>
            Фразы, которые бот увидит в тексте, каждая с новой строки
          </label>
          <textarea
            className="form-control"
            rows={5}
            name="coincidences"
            id={'coincidencesTextarea' + id}
            value={form.values.coincidences}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            disabled={inProgress}
          />
          {form.touched.coincidences && form.errors.coincidences &&
          <span className="bmd-label-floating">{form.errors.coincidences}</span>}
        </div>
        <div
          className={classNames('col-12 col-lg-5 form-group label-floating', {'has-danger': (form.touched.answers && form.errors.answers)})}>
          <label className="form-control-label bmd-label-floating" htmlFor={'answersTextarea' + id}>
            Фразы, которые бот будет отвечать, каждая с новой строки, для фраз с переносом строк используйте <b>\n</b>
          </label>
          <textarea
            className="form-control"
            rows={5}
            name="answers"
            id={'answersTextarea' + id}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.answers}
            disabled={inProgress}
          />
          {form.touched.answers && form.errors.answers &&
          <span className="bmd-label-floating">{form.errors.answers}</span>}
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
                disabled={inProgress}
              />
              Приватно
              <span className="form-check-sign"><span className="check"/></span>
            </label>
          </div>
          {onDelete ? (
              <button className="btn btn-danger btn-sm d-block w-100" type="button" onClick={() => onDelete(id)}
                      disabled={inProgress}>
                Удалить
                {isDeleting ? <span className="spinner"/> : ''}
              </button>)
            : ''}
          <button className="btn btn-sm d-block w-100" type="button" onClick={() => form.resetForm()}
                  disabled={!form.dirty || inProgress}>Восстановить
          </button>
          <button className="btn btn-success btn-sm d-block w-100" type="submit"
                  disabled={!form.dirty || inProgress}>
            Сохранить
            {isSaving ? <span className="spinner"/> : ''}
          </button>
        </div>
      </div>
    </form>
  )
})
export default AutoAnswerForm