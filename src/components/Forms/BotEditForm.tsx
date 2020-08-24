import React, {FC} from "react"
import {useFormik} from "formik"
import {FormValues} from "../../state/ducks/bots/types"
import {Link} from "react-router-dom"

type Props = {
  values: FormValues
  onSubmit: (id: number, values: FormValues) => void
  id: number
  isSaving: boolean
  onDelete?: (id: number) => void
  isDeleting?: boolean
}

const BotEditForm: FC<Props> = ({values, id, onSubmit, onDelete, isSaving, isDeleting}) => {
  const form = useFormik({
    initialValues: {
      allowedChatsId: values.allowedChatsId,
      enable: values.enable,
      token: values.token
    },
    onSubmit: (values) => onSubmit(id, values)
  })
  // console.log(id)
  // console.log(form.dirty)

  return (
    <form onSubmit={form.handleSubmit} className="mb-5 col-10 mx-auto">
      <div className="row text-left">
        <div className="col-12">
          <div className="form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="enable"
                onChange={form.handleChange}
                checked={form.values.enable}
              />
              Запущен
              <span className="form-check-sign"><span className="check"/></span>
            </label>
          </div>
        </div>
        <div className="col-12 form-group label-floating">
          <label className="form-control-label bmd-label-floating" htmlFor={'token' + id}>
            Токен бота
          </label>
          <input
            className="form-control"
            type="text"
            name="token"
            id={'token' + id}
            onChange={form.handleChange}
            value={form.values.token}
          />
        </div>
        <div className="col-12">
          {JSON.stringify(form.values.allowedChatsId)}
        </div>
        {/*<div className="col-12 col-lg-5 form-group label-floating">*/}
        {/*  <label className="form-control-label bmd-label-floating" htmlFor={'answersTextarea'+id}>*/}
        {/*    Фразы, которые бот будет отвечать, каждая с новой строки, для фраз с переносом строк используйте <b>\n</b>*/}
        {/*  </label>*/}
        {/*  <textarea*/}
        {/*    className="form-control"*/}
        {/*    rows={5}*/}
        {/*    name="answers"*/}
        {/*    id={'answersTextarea'+id}*/}
        {/*    onChange={form.handleChange}*/}
        {/*    value={form.values.answers}*/}
        {/*  />*/}
        {/*</div>*/}
        <div className="col-12">
          <Link className="btn btn-info btn-sm mr-1" to={{pathname: `/bots/${id}/autoAnswers`}}>
            Автоответы бота
          </Link>
          {onDelete ? (
              <button className="btn btn-danger btn-sm" type="button" onClick={() => onDelete(id)} disabled={isDeleting || true}>
                Удалить
                {isDeleting ? <span className="spinner"/> : ''}
              </button>)
            : ''}
          <button className="btn btn-sm" type="button" onClick={() => form.resetForm()}
                  disabled={!form.dirty}>Восстановить
          </button>
          <button className="btn btn-success btn-sm" type="submit" disabled={!form.dirty || isSaving || true}>
            Сохранить
            {isSaving ? <span className="spinner"/> : ''}
          </button>
        </div>
      </div>
    </form>
  )
}
export default BotEditForm